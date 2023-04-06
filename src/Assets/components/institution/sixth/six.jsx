import React from "react";
import './six.css';
import Advantage1 from '../../../images/ncx-advantage1.svg';
import Advantage2 from '../../../images/ncx-advantage2.svg';
import Advantage3 from '../../../images/ncx-advantage3.svg';
import { useTranslation } from "react-i18next";


function DataandAnalytics()
{
    const { t } = useTranslation();

    return(
        <div className="data_analytics">
            <div className="container">
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
            </div>
        </div>
    )
}
export default DataandAnalytics;

