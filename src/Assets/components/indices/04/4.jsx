import React from "react";
import './4.css';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, Dot, DotGroup } from 'pure-react-carousel';

function Indices4()
{
    const { t } = useTranslation();
    return(
        <div className="global__mart">
            <div className="container">
                <h1 className="fg__rer">{t("professional_tools_for_professional_traders")}</h1>
                <div className="global__row row">
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/instruments-min_swqnvt.png" alt="global"/>
                        <h2>{t("instruments")}</h2>
                        <p>{t("55_technical_indicators")} 
                            <span>{t("level_2_dom_depth_of_market")}</span>
                            <span>{t("analyze_trade_statistic")}</span>
                            <span>{t("market_sentiment")}</span>
                        </p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/orders-min_udx0rx.png" alt="global"/>
                        <h2>{t("orders")}</h2>
                        <p>{t("additional_pending_order_types")}
                            <span>{t("no_restrictions_on_limit_levels")}</span>
                            <span>{t("advanced_order_protection")}</span>
                            <span>{t("custom_time_zone")}</span>
                        </p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/chart-min_gu4tt7.png" alt="global"/>
                        <h2>{t("charts")}</h2>
                        <p>{t("detachable_linked_charts")}
                            <span>{t("fully_customisable_charts")}</span>
                            <span>{t("customisable_interface")}</span>
                            <span>{t("6_charts_types")}</span>
                            <span>{t("custom_time_zone")}</span>
                        </p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/tools-min_irch75.png" alt="global"/>
                        <h2>{t("tools")}</h2>
                        <p>{t("add_custom_c_bots_indicators")}
                            <span>{t("integrated_economic_calandar")}</span>
                            <span>{t("news_feed")}</span>
                            <span>{t("8_screen_trading")}</span>
                            <span>{t("28_timeframes")}</span>
                        </p>
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
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/instruments-min_swqnvt.png" alt="global"/>
                                    <h2>{t("instruments")}</h2>
                                    <p>{t("55_technical_indicators")} 
                                        <span>{t("level_2_dom_depth_of_market")}</span>
                                        <span>{t("analyze_trade_statistic")}</span>
                                        <span>{t("market_sentiment")}</span>
                                    </p>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/orders-min_udx0rx.png" alt="global"/>
                                    <h2>{t("orders")}</h2>
                                    <p>{t("additional_pending_order_types")}
                                        <span>{t("no_restrictions_on_limit_levels")}</span>
                                        <span>{t("advanced_order_protection")}</span>
                                        <span>{t("custom_time_zone")}</span>
                                    </p>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/chart-min_gu4tt7.png" alt="global"/>
                                    <h2>{t("charts")}</h2>
                                    <p>{t("detachable_linked_charts")}
                                        <span>{t("fully_customisable_charts")}</span>
                                        <span>{t("customisable_interface")}</span>
                                        <span>{t("6_charts_types")}</span>
                                        <span>{t("custom_time_zone")}</span>
                                    </p>
                                </div>
                            </Slide>

                            <Slide index={3}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/tools-min_irch75.png" alt="global"/>
                                    <h2>{t("tools")}</h2>
                                    <p>{t("add_custom_c_bots_indicators")}
                                        <span>{t("integrated_economic_calandar")}</span>
                                        <span>{t("news_feed")}</span>
                                        <span>{t("8_screen_trading")}</span>
                                        <span>{t("28_timeframes")}</span>
                                    </p>
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