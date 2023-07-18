// import React from "react";
// import '../02/2.css';
// import './7.css';
// import { useTranslation } from "react-i18next";

// function Indices7()
// {
//     const { t } = useTranslation();
//     return(
//         <div id="section__7" className="trade__derivative">
//             <div className="container">
//                 <h1 className="fg__rer">{t("get_everything_you_need_to_take_on_global_markets")}</h1>
//                 <div className="row most_deri">
//                     <div className="col">
//                         <div className="logo__ff">
//                             <h3 className="pp__oo">I</h3>
//                             <h1>{t("instruments")}</h1>
//                         </div>
//                         <div className="txt__vvv">
//                             <ul>
//                                 <li>{t("55_pre_installed_technical_indicators")}</li>
//                                 <li>{t("level_2_dom_depth_of_market")}</li>
//                                 <li>{t("analyze_trade_statistic")}</li>
//                                 <li>{t("market_sentiment")}</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="logo__ff">
//                             <h3 className="oo__ii">O</h3>
//                             <h1>{t("orders")}</h1>
//                         </div>
//                         <div className="txt__vvv">
//                             <ul>
//                                 <li>{t("additional_pending_order_types")}</li>
//                                 <li>{t("no_restrictions_on_stop_limit_levels")}</li>
//                                 <li>{t("advanced_order_protection")}</li>
//                                 <li>{t("custom_time_zone")}</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="logo__ff">
//                             <h3 className="tnn__we">C</h3>
//                             <h1>{t("charts")}</h1>
//                         </div>
//                         <div className="txt__vvv">
//                             <ul>
//                                 <li>{t("detachable_charts_linked_charts")}</li>
//                                 <li>{t("fully_customisable_charts_and_interface")}</li>
//                                 <li>{t("6_chart_types_28_timeframes")}</li>
//                                 <li>{t("custom_time_zone")}</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="logo__ff">
//                             <h3 className="tt__ff">T</h3>
//                             <h1>{t("tools")}</h1>
//                         </div>
//                         <div className="txt__vvv">
//                             <ul>
//                                 <li>{t("add_custom_c_bots_indicators")}</li>
//                                 <li>{t("integrated_economic_calandar")}</li>
//                                 <li>{t("news_feed")}</li>
//                                 <li>{t("8_screen_trading")} </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Indices7;

import React from "react";
import '../04/4.css';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, Dot, DotGroup } from 'pure-react-carousel';

function Indices7()
{
    const { t } = useTranslation();
    return(
        <div className="global__mart">
            <div className="container">
                <h1 className="fg__rer">{t("get_everything_you_need_to_take_on_global_markets")}</h1>
                <div className="global__row row">
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_1_tqlnl1.png" alt="global"/>
                        <h2>{t("lowest_fees")} <span>{t("in_industry")}</span></h2>
                        <p>{t("benefit_from_leading_market")} 
                            <span>{t("prices_stake_ncxt_and_get")}</span>
                            <span>{t("trading_fees_rebate_of_up_to")}</span>
                            <span>{t("90_across_all_asset_classes")}</span>
                        </p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_2_zcqait.png" alt="global"/>
                        <h2>{t("true_multi_asset")} <span>{t("platform")}</span></h2>
                        <p>{t("trade_financial_markets")} 
                            <span>{t("globally_with_access_to")}</span>
                            <span>{t("asset_classes_at_the_most")}</span>
                            <span>{t("favourable_conditions")}</span>
                        </p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_4_sj9yvt.png" alt="global"/>
                        <h2>{t("24_7_support_in")} <span>{t("multiple_languages")}</span></h2>
                        <p>{t("take_advantage_of_our_live")} 
                            <span>{t("customer_support_team")}</span>
                            <span>{t("24_7_365_at_your_service")}</span>
                        </p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_3_vdjico.png" alt="global"/>
                        <h2>{t("fast_order")} <span>{t("execution")}</span></h2>
                        <p>{t("low_latency_fibre_optic_and")}
                            <span>{t("equinix_ny4_server")}</span>
                            <span>{t("average_execution_speeds_of")}</span>
                            <span>{t("under_40ms")}</span>
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
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_1_tqlnl1.png" alt="global"/>
                                    <h2>{t("lowest_fees")} <span>{t("in_industry")}</span></h2>
                                    <p>{t("benefit_from_leading_market")} 
                                         <span>{t("prices_stake_ncxt_and_get")}</span>
                                        <span>{t("trading_fees_rebate_of_up_to")}</span>
                                        <span>{t("90_across_all_asset_classes")}</span>
                                    </p>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_2_zcqait.png" alt="global"/>
                                    <h2>{t("true_multi_asset")} <span>{t("platform")}</span></h2>
                                  <p>{t("trade_financial_markets")} 
                                           <span>{t("globally_with_access_to")}</span>
                                           <span>{t("asset_classes_at_the_most")}</span>
                                           <span>{t("favourable_conditions")}</span>
                                    </p>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_4_sj9yvt.png" alt="global"/>
                                    <h2>{t("24_7_support_in")} <span>{t("multiple_languages")}</span></h2>
                                       <p>{t("take_advantage_of_our_live")} 
                                             <span>{t("customer_support_team")}</span>
                                             <span>{t("24_7_365_at_your_service")}</span>
                                    </p>
                                </div>
                            </Slide>

                            <Slide index={3}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_3_vdjico.png" alt="global"/>
                                    <h2>{t("fast_order")} <span>{t("execution")}</span></h2>
                                     <p>{t("low_latency_fibre_optic_and")}
                                          <span>{t("equinix_ny4_server")}</span>
                                          <span>{t("average_execution_speeds_of")}</span>
                                          <span>{t("under_40ms")}</span>
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

export default Indices7;