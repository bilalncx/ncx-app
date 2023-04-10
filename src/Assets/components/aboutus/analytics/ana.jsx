import React from "react";
import './ana.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as AboutLogo } from '../../../images/about_logo.svg';
import { useTranslation } from "react-i18next";

function AboutNCXDefi()
{

    const { t } = useTranslation();

    return(
        <div className="data_analytics">
            <div className="container">
                <AnimationOnScroll className="trading_col" animateIn="animate__fadeIn">
                    <div className="about_logo">
                        <AboutLogo />
                        <h1>{t("data_and_analytics")}</h1>
                    </div>
                </AnimationOnScroll>

                <div className="analytics_row fsdcc3">
                    <div className="col fs33">
                        <div className="ffd23">
                            <h3>{t("historical_data")}</h3>
                            <h1>{t("backtest_strategy_optimization")}</h1>
                            <p>{t("backtest_strategy_optimization_text")}</p>
                        </div>
                    </div>
                    <div className="col fs33">
                        <div className="ffd23">
                            <h3>{t("analytics")}</h3>
                            <h1>{t("wide_range_analytics")}</h1>
                            <p>{t("wide_range_analytics_text")}</p>
                        </div>
                    </div>
                    <div className="col fs33">
                        <div className="ffd23">
                            <h3>{t("tax_api_Transaction_history")}</h3>
                            <h1>{t("export_data_function")}</h1>
                            <p>{t("export_data_function_text")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutNCXDefi;