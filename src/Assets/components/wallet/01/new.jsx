import React from "react";
import NCXBarCode from '../../../images/ncx-barcode.png';
import { ReactComponent as NCXGoogle } from '../../../images/ncxgoogleplay.svg';
import { ReactComponent as NCXApple } from '../../../images/ncxappstore.svg';
import Button from "@mui/material/Button";
import './style.css';
import { useTranslation } from "react-i18next";


function NCXAPPSection()
{
    const { t } = useTranslation();
    return(
        <div id="wallet_main_screen" className="hom__ppo">
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
                            <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689415590/wallet-video_rq6b91.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div id="buycrypto_container" className="container">
                    <div className="row">
                        <div className="col">
                            <div className="apps_barcod">
                                <h1>
                                      <span>{t("ncx_defi_wallet")}</span>
                                      <span>{t("your_keys")}</span>
                                      <span>{t("your_crypto")}</span>
                                </h1>
                                <p>
                                      <span>{t("store_send_swap_buy_crypto")}</span>
                                      <span>{t("assets_across_12_chains_ncx")}</span>
                                     <span>{t("non_custodial_wallet_hold")}</span>
                                     <span>{t("your_own_private_keys")}</span>
                                </p>
                                <div className="barcodd">
                                    <img src={NCXBarCode} alt="NCX Bard Code to Download app" />
                                    <p>{t("scan_to_download_ncx_app")}</p>
                                </div>
                                <div className="apps-divi">
                                    <NCXApple />
                                    <a href="https://play.google.com/store/apps/details?id=com.mfinance.ncxdigitalexchange.prd" target="_blank" rel="noreferrer"><NCXGoogle /></a>
                                </div>
                                <div className="home__btnff">
                                    <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sin__op">{t("sign_up")}</Button>
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
                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689415590/wallet-video_rq6b91.mp4" type="video/mp4" />
                </video>
                <h1>{t("ncx_defi_wallet")}</h1>
                <p>{t("store_send_swap_mobile_text")}</p>
                <div className="home__btnff">
                    <Button href="#" className="sin__op">{t("sign_up")}</Button>
                    <Button href="#" className="cl__drp">{t("claim_airdrop")}</Button>
                </div>
            </div>
        </div>
    )
}
export default NCXAPPSection;