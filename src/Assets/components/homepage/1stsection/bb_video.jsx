import React from "react";
import '../sect_poweredby/powered.css';
import NCXBarCode from '../../../images/ncx-barcode.png';
import { ReactComponent as NCXGoogle } from '../../../images/ncxgoogleplay.svg';
import { ReactComponent as NCXApple } from '../../../images/ncxappstore.svg';
import BuyCryptoVideo from '../../../images/home__newvideo.mp4';
import BuyCryptoVideombl from '../../../images/home__mblvdo.mp4';
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
                            // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                            >
                            <source src={BuyCryptoVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div id="buycrypto_container" className="container">
                    <div className="row">
                        <div className="col">
                            <div className="apps_barcod">
                                <h1>{t("ncx_exchange_the_power_of_crypto_defi_finTech_in_your_hands")}</h1>
                                <div className="barcodd">
                                    <img src={NCXBarCode} alt="NCX Bard Code to Download app" />
                                    <p>{t("scan_to_download_ncx_app")}</p>
                                </div>
                                <div className="apps-divi">
                                    <NCXApple />
                                    <a href="https://play.google.com/store/apps/details?id=com.mfinance.ncxdigitalexchange.prd&pli=1" rel="noreferrer" target="_blank"><NCXGoogle /></a>
                                </div>
                                <div className="home__btnff">
                                    <Button href="https://ncx.cx/register" rel="noreferrer" target="_blank" className="sin__op">{t("sign_up")}</Button>
                                    <Button href="#" className="cl__drp">{t("claim_airdrop")}</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col hidden_col">
                            <div className="app-texts-src">
                                <div className="apptexts">
                                    <h1>{t("global_reach")}</h1>
                                    <p>{t("powered_by_mastercard_pay_at_44_million_locations_worldwide")}</p>
                                </div>
                                <div className="apptexts">
                                    <h1>{t("atm_withdrawals")}</h1>
                                    <p>{t("trun_your_crypto_into_cash_instantly_use_ncx_card_across_3.2m_atms_worldwide")}</p>
                                </div>
                                <div className="apptexts">
                                    <h1>{t("online_payments")}</h1>
                                    <p>{t("use_your_card_online_payments")}</p>
                                </div>
                                <div className="apptexts">
                                    <h1>{t("top_up_by_crypto")}</h1>
                                    <p>{t("top_up_on_the_go_with_one_of_80_available_cryptocurrencies")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mbl__lpl">
                <h1>{t("ncx_exchange")}</h1>
                <p>{t("hybrid_cex_dex_tarding_platform_defi_ecosystem")}</p>
                <div className="yy__tr">
                    <span>{t("advanced_cex")}</span>
                    <span>{t("cross_chain_dex")}</span>
                    <span>{t("trading_platform")}</span>
                </div>
                <div className="yy__tr">
                    <span>{t("crypto_derivatives")}</span>
                    <span>{t("swap_500k_tokens_across_10_chains")}</span>
                </div>
                <div className="yy__tr">
                    <span>{t("trade_500_derivatives_markets")}</span>
                    <span>{t("stocks")}</span>
                    <span>{t("commodities")}</span>
                </div>
                <div className="yy__tr">
                    <span>{t("indices")}</span>
                    <span>{t("forex")}</span>
                    <span>{t("efts")}</span>
                    <span>{t("200_cryptocurrencies")}</span>
                </div>
                <div className="yy__tr">
                    <span>{t("crypto_debit_card")}</span>
                    <span>{t("defi_wallet")}</span>
                    <span>{t("buy_crypto")}</span>
                </div>
                <div className="home__btnff">
                    <Button href="#" className="sin__op">{t("sign_up")}</Button>
                    <Button href="#" className="cl__drp">{t("claim_airdrop")}</Button>
                </div>
                <video 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                    >
                    <source src={BuyCryptoVideombl} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
export default NCXAPPSection;