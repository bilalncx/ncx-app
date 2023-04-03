import React from "react";
import './allcards.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXWhiteCard from '../../../images/ncx-whitecard.png';
import NCXPlatinumCard from '../../../images/ncx-platniumcard.png';
import NCXWhiteGoldCard from '../../../images/ncx-whitegoldcard.png';
import NCXBlackCard from '../../../images/ncx-blackcard.png';
import { useTranslation } from "react-i18next";

function NCXAllCards()
{
    const { t } = useTranslation();

    return(
        <div className="ncxallcarddiv">
            <div className="container">
                <div className="carddetails">
                    <div className="carddetailsimg">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXWhiteCard} alt="NCX White Debit Card" />
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="row">
                            <div className="col">
                                <h1>{t("select")}</h1>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>{t("monthly_limit")} <span>$10,000</span></p></li>
                                    <li><p>{t("atm_withdrawals")} <span>$2,500 Monthly</span></p></li>
                                    <li><p>{t("trading_fee_discount")} <span>0%</span></p></li>
                                    <li><p>{t("free_premium_metal_card")}</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>{t("top_up_by_crypto")}</p></li>
                                    <li><p>{t("virtual_card")}</p></li>
                                    <li><p>{t("0.5%_wire_transfer")}</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>{t("card_security_features")}</p></li>
                                    <li><p>{t("24/7_support")}</p></li>
                                    <li><p>Apple Pay, Google Pay, Samsung Pay</p></li>
                                </ul>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className="carddetails">
                    <div className="carddetailsimg">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXPlatinumCard} alt="NCX Platinum Debit Card" />
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="row">
                            <div className="col">
                                <h1>{t("platinum")}</h1>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>{t("monthly_limit")} <span>$25,000</span></p></li>
                                    <li><p>{t("atm_withdrawals")} <span>$5,000 Monthly</span></p></li>
                                    <li><p>{t("trading_fee_discount")} <span>10%</span></p></li>
                                    <li><p>{t("free_premium_metal_card")}</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>{t("top_up_by_crypto")}</p></li>
                                    <li><p>{t("virtual_card")}</p></li>
                                    <li><p>{t("free_wire_transfer")}</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>{t("card_security_features")}</p></li>
                                    <li><p>{t("24/7_support")}</p></li>
                                    <li><p>Apple Pay, Google Pay, Samsung Pay</p></li>
                                </ul>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className="carddetails">
                    <div className="carddetailsimg">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXWhiteGoldCard} alt="NCX White Gold Debit Card" />
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="row">
                            <div className="col">
                                <h1>{t("gold")}</h1>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>{t("monthly_limit")} <span>$50,000</span></p></li>
                                    <li><p>{t("atm_withdrawals")} <span>$10,000 Monthly</span></p></li>
                                    <li><p>{t("trading_fee_discount")} <span>15%</span></p></li>
                                    <li><p>{t("10%_discount_on")} <span>Booking.com</span></p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>{t("free_premium_metal_card")}</p></li>
                                    <li><p>{t("top_up_by_crypto")}</p></li>
                                    <li><p>{t("virtual_card")}</p></li>
                                    <li><p>{t("free_wire_transfer")}</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>{t("card_security_features")}</p></li>
                                    <li><p>{t("24/7_support")}</p></li>
                                    <li><p>Apple Pay, Google Pay, Samsung Pay</p></li>
                                </ul>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className="carddetails">
                    <div className="carddetailsimg">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXBlackCard} alt="NCX Black Debit Card" />
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="row">
                            <div className="col">
                                <h1>{t("black")}</h1>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>{t("monthly_limit")} <span>$100,000</span></p></li>
                                    <li><p>{t("atm_withdrawals")} <span>$15,000 Monthly</span></p></li>
                                    <li><p>{t("trading_fee_discount")} <span>20%</span></p></li>
                                    <li><p>{t("free_premium_metal_card")}</p></li>
                                    <li><p>{t("free_wire_transfer")}</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>{t("free_spotify_subscription")}</p></li>
                                    <li><p>{t("10%_discount_on")} <span>Expedia.com</span></p></li>
                                    <li><p>{t("10%_discount_on")} <span>Booking.com</span></p></li>
                                    <li><p>{t("airport_lounge_access")}</p></li>
                                    <li><p>{t("card_security_features")}</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>{t("virtual_card")}</p></li>
                                    <li><p>{t("24/7_support")}</p></li>
                                    <li><p>Apple Pay, Google Pay, Samsung Pay</p></li>
                                    <li><p>{t("top_up_by_crypto")}</p></li>
                                </ul>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}
export default NCXAllCards;