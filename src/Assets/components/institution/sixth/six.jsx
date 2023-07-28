import React from "react";
import './six.css';
import Advantage1 from '../../../images/ncx-advantage1.svg';
import Advantage2 from '../../../images/ncx-advantage2.svg';
import Advantage3 from '../../../images/ncx-advantage3.svg';
import { useTranslation } from "react-i18next";
import {ReactComponent as SafeArrow} from '../../../images/safe-arrow.svg';
import NCXLogo from '../../../images/about_logo.svg';


function DataandAnalytics()
{
    const { t } = useTranslation();

    return(
        <div className="data_analytics">
            {/* <div className="container">
                <h1>{t("data_and_analytics")}</h1>
                <div className="analytics_row">
                    <div className="col">
                        <div className="analytic_sect">
                            <img src={Advantage3} alt="ncx-analytics-advantage" />
                            <p className="sub_heds">{t("historical_data")}</p>
                            <h2>{t("backtest_strategy_optimization")}</h2>
                            <p>{t("backtest_strategy_optimization_text")}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="analytic_sect">
                            <img src={Advantage2} alt="ncx-analytics-advantage" />
                            <p className="sub_heds">{t("analytics")}</p>
                            <h2>{t("wide_range_analytics")}</h2>
                            <p>{t("wide_range_analytics_text")}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="analytic_sect">
                            <img src={Advantage1} alt="ncx-analytics-advantage" />
                            <p className="sub_heds">{t("tax_api_Transaction_history")}</p>
                            <h2>{t("export_data_function")}</h2>
                            <p>{t("export_data_function_text")}</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div id="data__ana" className="why__choose__Otc">
                <div className="container">
                    <div className="ncx-otc">
                        <img className="ncx-whitelogo" src={NCXLogo} alt="ncx-whitelogo" />
                        <p>{t("data_and_analytics")}</p>
                    </div>
                    <div className="row">
                        <div className="col first">
                            <div className="cho__log">
                                <p>{t("historical_data")}</p>
                                <SafeArrow />
                            </div>
                            <div className="trs">
                                <h1>{t("backtest_strategy_optimization")}</h1>
                                <p>{t("backtest_strategy_optimization_text")}</p>
                            </div>
                        </div>
                        <div className="col second">
                            <div className="cho__log">
                                <p>{t("analytics")}</p>
                                <SafeArrow />
                            </div>
                            <div className="trs">
                                <h1>{t("wide_range_analytics")}</h1>
                                <p>{t("wide_range_analytics_text")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cho__log">
                                <p>{t("tax_api_Transaction_history")}</p>
                                <SafeArrow />
                            </div>
                            <div className="trs">
                                <h1>{t("export_data_function")}</h1>
                                <p>{t("tax_api_and_transaction_history")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DataandAnalytics;

