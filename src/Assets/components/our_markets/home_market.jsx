import React from "react";
import './home_component';
import './home_market.css';
import { useTranslation } from "react-i18next";

function HomePageMarketSection()
{
    const { t } = useTranslation();
    return(
        <div className="HomeMrketSect">
            <div className="container">
                <table id="ncx_markets">
                    <tr className="hed">
                        <th>{t("pairs")}</th>
                        <th>{t("latest_price")}</th>
                        <th>{t("high")} [24H]</th>
                        <th>{t("low")} [24H]</th>
                        <th>{t("price_trend")} [72H]</th>
                        <th>24H {t("volume")}</th>
                    </tr>
                    <div className="home_spinner">
                        <div class="spinner-border" 
                            role="status" id="loadingssss">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <tbody id="market_table_body"></tbody>

                    <div className="more_bt">
                        <a href="/markets">{t("view_more_markets")}</a>
                    </div>
                </table>
            </div>
        </div>
    )
}
export default HomePageMarketSection;