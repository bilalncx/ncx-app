import React from "react";
import '../../indices/04/4.css';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import { useTranslation } from "react-i18next";

function NCXCardExperience()
{
    const { t } = useTranslation();
    return(
        <div className="global__mart ncx__card__page">
            <div className="container">
                <h1 className="az__ml__mm">{t("a_premium_experience")} <span>{t("you_can_touch")}</span></h1>
                <div className="global__row row">
                    <div className="col">
                        <img src={GlobalMarket1} alt="global"/>
                        <h2>{t("atm_withdrawals")}</h2>
                        <p>{t("atm_withdrawals_text")}</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket2} alt="global"/>
                        <h2>{t("in_store_purchases")}</h2>
                        <p>{t("in_store_purchases_text")}</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket3} alt="global"/>
                        <h2>{t("top_up_by_crypto")}</h2>
                        <p>{t("top_up_by_crypto_text")}</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket4} alt="global"/>
                        <h2>{t("online_payments")}</h2>
                        <p>{t("online_payments_text_new")}</p>
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/atm-icon_s8j76q.png" alt="global"/>
                        <h2>ATM Withdrawals</h2>
                        <p>Bridging the gap between DeFi and Centralised Finance you can now turn your Crypto into Cash instantly using NCX Card across 3.2m ATMs Worldwide. Withdrawal Limits Apply*</p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/purchase-icon_r5nw2e.png" alt="global"/>
                        <h2>In Store Purchases</h2>
                        <p>You can now use your Crypto for everyday purchases at 44 million merchant locations Worldwide with NCX Crypto Debit Card, powered by MasterCard.</p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_3_vdjico.png" alt="global"/>
                        <h2>Top Up By Crypto</h2>
                        <p>Stake NCXT, top up your card with one of the supported Cryptocurrencies and use your card Worldwide, no Credit Check or Bank Account is required.</p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/orders-min_udx0rx.png" alt="global"/>
                        <h2>Online Payments</h2>
                        <p>Using your NCX Crypto Card for Online Payments has never been easier, pay online with 3D Security, Apple Pay, Google Pay, and many more</p>
                    </div>
                </div>

                <div className="mbl__sec__cr">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={4}
                        step={1}
                        naturalSlideWidth={300}
                        isIntrinsicHeight={true}
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >
                        <Slider>
                            <Slide index={0} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket1} alt="global"/>
                                    <h2>{t("atm_withdrawals")}</h2>
                                    <p>{t("atm_withdrawals_text")}</p>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/atm-icon_s8j76q.png" alt="global"/>
                                    <h2>ATM Withdrawals</h2>
                                    <p>Bridging the gap between DeFi and Centralised Finance you can now turn your Crypto into Cash instantly using NCX Card across 3.2m ATMs Worldwide. Withdrawal Limits Apply*</p>
                                </div>
                            </Slide>
                            <Slide index={1} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket2} alt="global"/>
                                    <h2>{t("in_store_purchases")}</h2>
                                    <p>{t("in_store_purchases_text")}</p>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/purchase-icon_r5nw2e.png" alt="global"/>
                                    <h2>In Store Purchases</h2>
                                    <p>You can now use your Crypto for everyday purchases at 44 million merchant locations Worldwide with NCX Crypto Debit Card, powered by MasterCard.</p>
                                </div>
                            </Slide>
                            <Slide index={2} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket3} alt="global"/>
                                    <h2>{t("top_up_by_crypto")}</h2>
                                    <p>{t("top_up_by_crypto_text")}</p>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_3_vdjico.png" alt="global"/>
                                    <h2>Top Up By Crypto</h2>
                                    <p>Stake NCXT, top up your card by one of the supported Cryptocurrencies and use your card Worldwide, no Credit Check or Bank Account required.</p>
                                </div>
                            </Slide>
                            <Slide index={3} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket4} alt="global"/>
                                    <h2>{t("online_payments")}</h2>
                                    <p>{t("online_payments_text_new")}</p>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/orders-min_udx0rx.png" alt="global"/>
                                    <h2>Online Payments</h2>
                                    <p>Using your NCX Crypto Card for Online Payments has never been easier, pay online with 3D Security, Apple Pay, Google Pay, and many more</p>
                                </div>
                            </Slide>
                        </Slider>
                        <DotGroup />
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}

export default NCXCardExperience;