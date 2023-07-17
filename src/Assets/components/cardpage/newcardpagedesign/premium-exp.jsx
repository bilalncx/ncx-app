import React from "react";
import '../../indices/04/4.css';
import GlobalMarket1 from '../../../images/atm-icon.png';
import GlobalMarket2 from '../../../images/purchase-icon.png';
import GlobalMarket3 from '../../../images/global_3.png';
import GlobalMarket4 from '../../../images/onlinepayments-icon.png';
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
                                </div>
                            </Slide>
                            <Slide index={1} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket2} alt="global"/>
                                    <h2>{t("in_store_purchases")}</h2>
                                    <p>{t("in_store_purchases_text")}</p>
                                </div>
                            </Slide>
                            <Slide index={2} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket3} alt="global"/>
                                    <h2>{t("top_up_by_crypto")}</h2>
                                    <p>{t("top_up_by_crypto_text")}</p>
                                </div>
                            </Slide>
                            <Slide index={3} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket4} alt="global"/>
                                    <h2>{t("online_payments")}</h2>
                                    <p>{t("online_payments_text_new")}</p>
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