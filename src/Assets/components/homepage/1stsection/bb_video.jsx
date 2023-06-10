import React from "react";
import '../sect_poweredby/powered.css';
import NCXBarCode from '../../../images/ncx-barcode.png';
import { ReactComponent as NCXGoogle } from '../../../images/ncxgoogleplay.svg';
import { ReactComponent as NCXApple } from '../../../images/ncxappstore.svg';
import BuyCryptoVideo from '../../../images/home__newvideo.mp4';
import Button from "@mui/material/Button";
import './firstsection.css';
import { useTranslation } from "react-i18next";

function NCXAPPSection()
{
    const { t } = useTranslation();
    return(
        <div className="hom__ppo">
            <div id="home__ffgrr" className="ncxapp-section">
                <div id="ncx_buycrypto_video">
                    <div className="desktop">
                        <video 
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            preload="auto"
                            >
                            <source src={BuyCryptoVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div id="buycrypto_container" className="container">
                    <div className="row">
                        <div className="col">
                            <div className="apps_barcod">
                                <h1>{t("ncx_exchange_all_in_one_crypto_exchange")}</h1>
                                <div className="barcodd">
                                    <img src={NCXBarCode} alt="NCX Bard Code to Download app" />
                                    <p>{t("scan_to_download_ncx_app")}</p>
                                </div>
                                <div className="apps-divi">
                                    <NCXApple />
                                    <a href="https://play.google.com/store/apps/details?id=com.mfinance.ncxdigitalexchange.prd" rel="noreferrer" target="_blank"><NCXGoogle /></a>
                                </div>
                                <div className="home__btnff">
                                    <Button href="https://ncx.cx/register" rel="noreferrer" target="_blank" className="sin__op">{t("sign_up")}</Button>
                                    <Button href="#" className="cl__drp">{t("claim_airdrop")}</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
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
                    <source src={BuyCryptoVideo} type="video/mp4" />
                </video>
                <div className="gsfersdsd">
                    <h1>NCX Exchange All-in-One Crypto Exchange, Trading Platform & DeFi Ecosystem</h1>
                    <div className="home__btnff">
                        <Button href="https://my.ncx.cx/register" target="_blank" rel="noreferrer" className="sin__op">{t("sign_up")}</Button>
                        <Button href="#" className="cl__drp">{t("claim_airdrop")}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXAPPSection;