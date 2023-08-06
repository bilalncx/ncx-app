import React from "react";
import '../sect_poweredby/powered.css';
import Button from "@mui/material/Button";
import './firstsection.css';
import { useTranslation } from "react-i18next";

function NCXAPPSection()
{
    const { t } = useTranslation();
    return(
        <div className="hom__ppo">
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
                    <h1>{t("ncx_hybrid_exchange")}</h1>
                    <div className="hyng">
                        <Button href="https://exchange.ncx.cx/register" target="__blank" rel="noreferrer" className="mki__lo">{t("sign_up")}</Button>
                        <Button href="#features" className="bnb_mki">{t("view_features")}</Button>
                    </div>
                </div>
            </div>
        </div>

            <div className="mbl__lpl">
                <video 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    >
                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689345150/new-cardvideombl_1_m35ccz.mp4" type="video/mp4" />
                </video>
                <div className="gsfersdsd">
                    <h1>{t("ncx_exchange")}</h1>
                    <p>{t("first_all_in_one_hybrid_cex_dex_crypto_exchange")} <span>{t("trading_platform_&_defi_ecosystem")}</span></p>
                    <div className="home__btnff">
                        <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sin__op">{t("sign_up")}</Button>
                        <Button href="#" className="cl__drp">{t("claim_airdrop")}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXAPPSection;