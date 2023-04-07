import React from "react";
import '../../ambassador/first/first.css';
import BackVideo from '../../../images/ncx-firstslidervideo.mp4';
import {ReactComponent as Icon} from '../../../images/ncx-staricon.svg';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

function FirstVideo()
{
    const { t } = useTranslation();

    return(
        <div className="ambassadordiv">
                <div className="backgrdound-video">
                    <video
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        poster="https://ncx.cx/images/ncx_line_poster.png"
                        >
                        <source src={BackVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="container">
                    <div className="ambassador row">
                        <div className="col">
                            <Icon />
                            <h1>{t("ncx_marekt_maker")}</h1>
                            <div className="txt44">
                                <p>{t("ncx_market_maker_text")}</p>
                                {/* <p>Ambassadors earn a passive income of 40-60% commission on trading fees of their affiliates</p> */}
                            </div>
                            <Button href="#">{t("apply_now")}</Button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default FirstVideo;