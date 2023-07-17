import React from "react";
// import CardMainVideo from '../../../images/new-cardvideo.mp4';
import Button from "@mui/material/Button";
import './style.css';
import { useTranslation } from "react-i18next";

function CardFirstNew()
{
    const { t } = useTranslation();
    return(
        <div className="new__crf">
            <div className="bgt_hyn">
                <video 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    >
                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689344912/ncx-cardvideo_1_onjnjb.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="bvc_mnb">
                <div className="container">
                    <h1>{t("ncx_token_utility_features_heading5")}</h1>
                    <div className="hyng">
                        <Button href="#compare-cards" className="bnb_mki">{t("compare_card")}</Button>
                        <Button href="#" className="mki__lo">{t("sign_up")}</Button>
                        <Button href="#compare-cards" className="bnb_mki">Compare Cards</Button>
                        <Button href="https://exchange.ncx.cx/register" target="_blank" className="mki__lo">Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFirstNew;