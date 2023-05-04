import React from "react";
import './market_ff';
import { ReactComponent as SearchIcon } from '../../images/market_searchicon.svg';
import { useTranslation } from "react-i18next";

function HomePageMarketSection()
{
    const { t } = useTranslation();
    return(
        <section className="market_pag">
            <div className="container">
                <div className='table_search_tabs'>
                    <div className="col">
                        <button id="all_btn" className='active_all'>All Pairs</button>
                        <button id="usdt_btn">USDT Pairs</button>
                        <button id="usd_btn">USD Pairs</button>
                        <button id="btc_btn">BTC Pairs</button>
                        <button id="usdc_btn">USDC Pairs</button>
                    </div>
                    <div className="col">
                        <div class="searchinput">
                            <SearchIcon />
                            <input  type="text" id="search" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <table id="table_divddd">
                    <thead>
                        <tr>
                            <th>{t("pairs")}</th>
                            <th>{t("latest_price")}</th>
                            <th>{t("Change")}</th>
                            <th>{t("high")} [24H]</th>
                            <th>{t("low")} [24H]</th>
                            <th>{t("price_trend")}</th>
                            <th>24H {t("volume")}</th>
                        </tr>
                    </thead>
                    <div className="home_spinner">
                        <div class="spinner-border" 
                            role="status" id="loadingssss">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <tbody id="ncx_market_table"></tbody>

                </table>
            </div>
        </section>
    )
}
export default HomePageMarketSection;