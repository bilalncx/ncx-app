import React from "react";
import '../../indices/04/4.css';
import GlobalMarket1 from '../../../images/travel-icon.png';
import GlobalMarket2 from '../../../images/purchase-icon.png';
import GlobalMarket3 from '../../../images/fraud-icon.png';
import GlobalMarket4 from '../../../images/luggage-icon.png';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import { useTranslation } from "react-i18next";

function AllOfNeeds()
{
    const { t } = useTranslation();
    return(
        <div className="global__mart ncx__card__page">
            <div className="container">
                <h1 className="az__ml__mm">{t("premium_protection_for_all_you_neends")}</h1>
                <div className="global__row row">
                    <div className="col">
                        <img src={GlobalMarket1} alt="global"/>
                        <h2>{t("travel_protection")}</h2>
                        <p>{t("travel_protection_text")}</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket2} alt="global"/>
                        <h2>{t("purchase_protection")}</h2>
                        <p>{t("purchase_protection_text")}</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket3} alt="global"/>
                        <h2>{t("fraud_protection")}</h2>
                        <p>{t("fraud_protection_text")}</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket4} alt="global"/>
                        <h2>{t("luggage_protection")}</h2>
                        <p>{t("luggage_protection_text")}</p>
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
                                    <h2>{t("travel_protection")}</h2>
                                    <p>{t("travel_protection_text")}</p>
                                </div>
                            </Slide>
                            <Slide index={1} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket2} alt="global"/>
                                    <h2>{t("purchase_protection")}</h2>
                                    <p>{t("purchase_protection_text")}</p>
                                </div>
                            </Slide>
                            <Slide index={2} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket3} alt="global"/>
                                    <h2>{t("fraud_protection")}</h2>
                                    <p>{t("fraud_protection_text")}</p>
                                </div>
                            </Slide>
                            <Slide index={3} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket4} alt="global"/>
                                    <h2>{t("luggage_protection")}</h2>
                                    <p>{t("luggage_protection_text")}</p>
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

export default AllOfNeeds;