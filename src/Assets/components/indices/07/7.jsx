import React from "react";
import '../02/2.css';
import './7.css';
import { useTranslation } from "react-i18next";

function Indices7()
{
    const { t } = useTranslation();
    return(
        <div id="section__7" className="trade__derivative">
            <div className="container">
                <h1 className="fg__rer">{t("get_everything_you_need_to_take_on_global_markets")}</h1>
                <div className="row most_deri">
                    <div className="col">
                        <div className="logo__ff">
                            <h3 className="pp__oo">I</h3>
                            <h1>{t("instruments")}</h1>
                        </div>
                        <div className="txt__vvv">
                            <ul>
                                <li>{t("55_pre_installed_technical_indicators")}</li>
                                <li>{t("level_2_dom_depth_of_market")}</li>
                                <li>{t("analyze_trade_statistic")}</li>
                                <li>{t("market_sentiment")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="logo__ff">
                            <h3 className="oo__ii">O</h3>
                            <h1>{t("orders")}</h1>
                        </div>
                        <div className="txt__vvv">
                            <ul>
                                <li>{t("additional_pending_order_types")}</li>
                                <li>{t("no_restrictions_on_stop_limit_levels")}</li>
                                <li>{t("advanced_order_protection")}</li>
                                <li>{t("custom_time_zone")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="logo__ff">
                            <h3 className="tnn__we">C</h3>
                            <h1>{t("charts")}</h1>
                        </div>
                        <div className="txt__vvv">
                            <ul>
                                <li>{t("detachable_charts_linked_charts")}</li>
                                <li>{t("fully_customisable_charts_and_interface")}</li>
                                <li>{t("6_chart_types_28_timeframes")}</li>
                                <li>{t("custom_time_zone")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="logo__ff">
                            <h3 className="tt__ff">T</h3>
                            <h1>{t("tools")}</h1>
                        </div>
                        <div className="txt__vvv">
                            <ul>
                                <li>{t("add_custom_c_bots_indicators")}</li>
                                <li>{t("integrated_economic_calandar")}</li>
                                <li>{t("news_feed")}</li>
                                <li>{t("8_screen_trading")} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices7;