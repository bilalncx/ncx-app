import React from "react";
// import CardMainVideo from '../../../images/new-cardvideo.mp4';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

function CardNewPageFirst()
{
    const { t } = useTranslation();
    return(
        <div className="berv_vwe">
            <div className="bf_vdo">
                <video 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    >
                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689345150/new-cardvideombl_1_m35ccz.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="cont_vwef">
                <div className="container">
                    <div className="vcsd">
                        <div className="bve">
                            <h1>NCX Crypto Debit Card Pay for every day purchases with Crypto</h1>
                            <h2 className="za__uj">{t("ncx_token_utility_features_heading5")}</h2>
                            <p>{t("mobile_crypto_debit_card_text")}</p>
                            <div className="bewec">
                                <Button href="#" className="wec">{t("open_an_account")}</Button>
                                <Button href="#compare-cards" className="dwc">{t("compare_card")}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardNewPageFirst;