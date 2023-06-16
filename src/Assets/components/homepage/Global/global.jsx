import React from "react";
import './global.css';
import '../../indices/04/4.css';
import GlobalMarket1 from '../../../images/global_1.png';
import GlobalMarket2 from '../../../images/global_2.png';
import GlobalMarket3 from '../../../images/global_4.png';
import GlobalMarket4 from '../../../images/global_3.png';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

function Indices4()
{
    const { t } = useTranslation();
    return(
        <div className="global__mart">
            <div className="container">
                <h1 className="fg__rer">{t("get_everything_you_need_to_take_on_global_markets")}</h1>
                <div className="global__row row">
                    <div className="col">
                        <img src={GlobalMarket1} alt="global"/>
                        <h2>{t("lowest_fees_in_industry")}</h2>
                        <p>{t("lowest_fees_in_industry_text")}</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket2} alt="global"/>
                        <h2>{t("true_multi_asset_platform")}</h2>
                        <p>{t("true_multi_asset_platform_text")}</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket3} alt="global"/>
                        <h2>{t("24_7_support_in_multiple_languages")}</h2>
                        <p>{t("24_7_support_in_multiple_languages_text")}</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket4} alt="global"/>
                        <h2>{t("fast_order_execution")}</h2>
                        <p>{t("fast_order_execution_text")}</p>
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
                        <Slider className="global__row row">
                            <Slide index={0}>
                                <div className="col">
                                    <img src={GlobalMarket1} alt="global"/>
                                    <h2>{t("lowest_fees_in_industry")}</h2>
                                    <p>{t("lowest_fees_in_industry_text")}</p>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="col">
                                    <img src={GlobalMarket2} alt="global"/>
                                    <h2>{t("true_multi_asset_platform")}</h2>
                                    <p>{t("true_multi_asset_platform_text")}</p>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="col">
                                    <img src={GlobalMarket3} alt="global"/>
                                    <h2>{t("24_7_support_in_multiple_languages")}</h2>
                                    <p>{t("24_7_support_in_multiple_languages_text")}</p>
                                </div>
                            </Slide>

                            <Slide index={3}>
                                <div className="col">
                                    <img src={GlobalMarket4} alt="global"/>
                                    <h2>{t("fast_order_execution")}</h2>
                                    <p>{t("fast_order_execution_text")}</p>
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

export default Indices4;