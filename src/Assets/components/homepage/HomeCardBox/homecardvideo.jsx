import React from "react";
import CardMainVideo from '../../../images/home-cardvideo2.mp4';
import Button from "@mui/material/Button";
import './cardbox.css';
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function HomeCardVideo()
{
    const { t } = useTranslation();
    return(
        <div id="bgf__qas">
            <div className="new__crf">
                <div className="bgt_hyn">
                    <video 
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        >
                        <source src={CardMainVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="bvc_mnb">
                    <div className="container">
                        <h1>{t("ncx_crypto_debit_card")}</h1>
                        <div className="hyng">
                            <Button href="https://ncx.cx/ncx-card" className="bnb_mki">{t("compare_card")}</Button>
                            <Button href="https://my.ncx.cx/register" className="mki__lo">{t("sign_up")}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCardVideo;