import React from "react";
import './cardpage.css';
import NCXHomeSliderVideo from '../../../images/ncx_card_bgvideo.mp4';
import NCXCardTrade from '../../../images/ncx-card-trade.png';
import GradientSect from '../cardgradient/gradcard';
import MobileVideo from '../../../images/ncx_poweredby.mp4';
import { useTranslation } from "react-i18next";

function CardfirstSection()
{
    const { t } = useTranslation();

    return(
        <div className="cardvideo-sect">
            <div id="ncxcardvideo-desk">
                <div className="desktop">
                    <video 
                        id='video-scss'
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        poster="https://ncx.cx/images/ncx_card_poster.png"
                        >
                        <source src={NCXHomeSliderVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="container">
                <div id="ncxcard_cardset">
                    <div className="ncx-card-trade">
                        <div className="cardtrade-row">
                            <div className="col">
                                <h1>{t("ncxt_crypto_debit_card")}</h1>
                                <p className="cardp1">{t("crypto_debit_card_text")}</p>
                                <div className="bullets">
                                    <span>{t("pay_at_44_million_merchant")}</span>
                                    <span>{t("virtual_card")}</span>
                                </div>
                                <div className="bullets">
                                    <span>{t("atm_withdrawals")}</span>
                                    <span>{t("top_up_by_crypto")}</span>
                                    <span>{t("powered_by_mastercard")}</span>
                                </div>
                                <div className="bullets">
                                    <span>{t("premium_metal_card")}</span>
                                    <span>{t("24/7_support")}</span>
                                    <span>{t("online_payments")}</span>
                                </div>
                                <div className="bullets">
                                    <span>Apple Pay</span>
                                    <span>Google Pay</span>
                                    <span>Samsung Pay</span>
                                </div>
                                <div id="mobile-butller">
                                    <div className="bullets">
                                        <span>{t("pay_at_44_million_merchant")}</span>
                                    </div>
                                    <div className="bullets">                                
                                        <span>{t("powered_by_mastercard")}</span>
                                        <span>{t("atm_withdrawals")}</span>
                                    </div>
                                    <div className="bullets">
                                        <span>{t("top_up_by_crypto")}</span>
                                        <span>{t("premium_metal_card")}</span>
                                    </div>
                                    <div className="bullets">
                                        <span>{t("online_payments")}</span>
                                        <span>Apple Pay</span>
                                        <span>Google Pay</span>
                                    </div>
                                </div>
                                <p className="cardp2">{t("one_card_unlimited_possibilties")}</p>
                                <div className="prod-butns">
                                    <a className="der-buttons" href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">{t("sign_up")}</a>
                                    <a className="buycrypt-btn" href="#" target="_blank" rel="noreferrer">{t("get_the_app")}</a>
                                </div>
                            </div>
                            <div className="col product-img">
                                <img className="cardtr-image" src={NCXCardTrade} alt="NCX Trading" />
                                <div id="ncxcardvideo-mbl">
                                    <div className="desktop">
                                        <video 
                                            id='video-scss'
                                            autoPlay={true}
                                            muted={true}
                                            loop={true}
                                            playsInline={true}
                                            preload="auto"
                                            poster="https://ncx.cx/images/ncx_poweredby_poster.png"
                                            >
                                            <source src={MobileVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GradientSect />
            </div>
        </div>
    )
}

export default CardfirstSection;