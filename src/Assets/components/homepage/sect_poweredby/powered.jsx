import React from "react";
import './powered.css';
import NCXBarCode from '../../../images/ncx-QRcode.svg';
import { ReactComponent as NCXGoogle } from '../../../images/ncxgoogleplay.svg';
import { ReactComponent as NCXApple } from '../../../images/ncxappstore.svg';
import BuyCryptoVideo from '../../../images/ncx_poweredby.mp4';
import { useTranslation } from "react-i18next";

function NCXAPPSection()
{
    const { t } = useTranslation();

    return(
        <div id="powered_by" className="ncxapp-section">
            <div id="ncx_buycrypto_video">
                <div className="desktop">
                    <video 
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        poster="https://ncx.cx/images/ncx_poweredby_poster.png"
                        >
                        <source src={BuyCryptoVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div id="buycrypto_container" className="container">
                <div className="row">
                    <div className="col">
                        <div className="apps_barcod">
                            <h1>{t("ncx_card_premium_debit_card_powered_by_crypto")}</h1>
                            <p>{t("top_up_with_crypto_and_use_for_payments_anytime_anywhere!")}</p>
                            <div className="barcodd">
                                <img src={NCXBarCode}  alt="ncx-barcode"/>
                                <p>{t("scan_to_download_ncx_app")}</p>
                            </div>
                            <div className="apps-divi">
                                <NCXApple />
                                <NCXGoogle />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="app-texts-src">
                            <div className="apptexts">
                                <h1>{t("global_reach")}</h1>
                                <p>{t("powered_by_mastercard_pay_at_44_million_locations_worldwide")}</p>
                            </div>
                            <div className="apptexts">
                                <h1>{t("atm_withdrawals")}</h1>
                                <p>{t("trun_your_crypto_into_cash_instantly_use_ncx-card_across_3.2m_atms_worldwide")}</p>
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
    )
}
export default NCXAPPSection;