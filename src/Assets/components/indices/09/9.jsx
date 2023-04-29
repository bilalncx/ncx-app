import React from "react";
import './9.css';
import { useTranslation } from "react-i18next";

function TradingSteps()
{
    const { t } = useTranslation();
    return(
        <div className="steps__tr">
            <div className="container">
                <h1 className="fg__rer">{t("start_trading_in_just_a_clicks")}</h1>
                <div className="steps__ff">
                    <div className="fyu">
                        <h1>1</h1>
                        <p>{t("create_your_ncx_account")}</p>
                    </div>
                    <div className="fyu">
                        <h1>2</h1>
                        <p>{t("complete_kyc")}</p>
                    </div>
                    <div className="fyu">
                        <h1>3</h1>
                        <p>{t("fund_your_trading_account")}</p>
                    </div>
                    <div className="fyu">
                        <h1>4</h1>
                        <p>{t("download_one_of_the_platforms")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TradingSteps;