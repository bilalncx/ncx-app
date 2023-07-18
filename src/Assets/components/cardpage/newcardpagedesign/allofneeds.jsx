import React from "react";
import '../../indices/04/4.css';
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
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/travel-icon_q29utn.png" alt="global"/>
                        <h2>{t("travel_protection")}</h2>
                        <p>{t("travel_protection_text")}</p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/purchase-icon_r5nw2e.png" alt="global"/>
                        <h2>{t("purchase_protection")}</h2>
                        <p>{t("purchase_protection_text")}</p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/fraud-icon_nlwxg2.png" alt="global"/>
                        <h2>{t("fraud_protection")}</h2>
                        <p>{t("fraud_protection_text")}</p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/luggage-icon_p4kx3b.png" alt="global"/>
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
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/travel-icon_q29utn.png" alt="global"/>
                                    <h2>{t("travel_protection")}</h2>
                                    <p>{t("travel_protection_text")}</p>
                                </div>
                            </Slide>
                            <Slide index={1} className="mnl__cx">
                                <div className="azx">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/purchase-icon_r5nw2e.png" alt="global"/>
                                    <h2>{t("purchase_protection")}</h2>
                                    <p>{t("purchase_protection_text")}</p>
                                </div>
                            </Slide>
                            <Slide index={2} className="mnl__cx">
                                <div className="azx">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/fraud-icon_nlwxg2.png" alt="global"/>
                                    <h2>{t("fraud_protection")}</h2>
                                    <p>{t("fraud_protection_text")}</p>
                                </div>
                            </Slide>
                            <Slide index={3} className="mnl__cx">
                                <div className="azx">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/luggage-icon_p4kx3b.png" alt="global"/>
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