import React from "react";
import './otc.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import BackVideo from '../../images/ncx-firstslidervideo.mp4';
import {ReactComponent as Icon} from '../../images/ncx-staricon.svg';
import OTCSecrtion from '../../components/homepage/NCXOTC/otc';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

function NCXOTCPage()
{

    const { t } = useTranslation();

    return(
        <div id="ncxotc-page">
            <MyHeader />
            <div className="OTCwelcome">
                <div className="welcomevideo">
                    <video
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        >
                        <source src={BackVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="container">
                    <div className="welcomeotc row">
                        <div className="col">
                            <Icon />
                            <h1>{t("welcome_ncx_otc")}</h1>
                            <p>{t("otc_text")}</p>
                            <Button href="mailto:support@ncx.cx">{t("contact_us")}</Button>
                        </div>
                        <div className="col why-choose-otc">
                            <h1>{t("why_choose_otc")}</h1>
                            <p>{t("why_choose_otc_text_1")}</p>
                            <p>{t("why_choose_otc_text_2")}</p>
                            <p>{t("why_choose_otc_text_3")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <OTCSecrtion />

            <MyFooter />
        </div>
    )
}
export default NCXOTCPage;