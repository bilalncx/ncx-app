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
                <h1 className="fg__rer">Get everything you need to take on global markets</h1>
                <div className="global__row row">
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_1_tqlnl1.png" alt="global"/>
                        <h2>Lowest fees <span>in Industry</span></h2>
                        <p>Benefit from leading market 
                            <span>prices, Stake NCXT and get</span>
                            <span>Trading Fees rebates of up to</span>
                            <span>90% across all asset classes.</span>
                        </p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_2_zcqait.png" alt="global"/>
                        <h2>True multi asset <span>Platform</span></h2>
                        <p>Trade Financial Markets 
                            <span>globally with access to 7</span>
                            <span>asset classes at the most</span>
                            <span>favourable conditions.</span>
                        </p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_4_sj9yvt.png" alt="global"/>
                        <h2>24/7 Support in <span>multiple languages</span></h2>
                        <p>Take advantage of our live 
                            <span>Customer Support team,</span>
                            <span>24/7/365 at your service</span>
                        </p>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_3_vdjico.png" alt="global"/>
                        <h2>Fast Order <span>Execution</span></h2>
                        <p>Low latency fibre optic and
                            <span>Equinix NY4 Server</span>
                            <span>Average execution speeds of</span>
                            <span>under 40ms</span>
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
                                    <h2>Lowest fees <span>in Industry</span></h2>
                                    <p>Benefit from leading market 
                                        <span>prices, Stake NCXT and get</span>
                                        <span>Trading Fees rebates of up to</span>
                                        <span>90% across all asset classes.</span>
                                    </p>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_2_zcqait.png" alt="global"/>
                                    <h2>True multi asset <span>Platform</span></h2>
                                    <p>Trade Financial Markets 
                                        <span>globally with access to 7</span>
                                        <span>asset classes at the most</span>
                                        <span>favourable conditions.</span>
                                    </p>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_4_sj9yvt.png" alt="global"/>
                                    <h2>24/7 Support in <span>multiple languages</span></h2>
                                    <p>Take advantage of our live 
                                        <span>Customer Support team,</span>
                                        <span>24/7/365 at your service</span>
                                    </p>
                                </div>
                            </Slide>

                            <Slide index={3}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_3_vdjico.png" alt="global"/>
                                    <h2>Fast Order <span>Execution</span></h2>
                                    <p>Low latency fibre optic and
                                        <span>Equinix NY4 Server</span>
                                        <span>Average execution speeds of</span>
                                        <span>under 40ms</span>
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