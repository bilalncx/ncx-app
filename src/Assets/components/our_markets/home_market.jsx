import React from "react";
import './home_component';
import './home_market.css';

function HomePageMarketSection()
{
    return(
        <div className="HomeMrketSect">
            <div className="container">
                <table id="ncx_markets">
                    <tr className="hed">
                        <th>Pairs</th>
                        <th>Latest Price</th>
                        <th>High [24H]</th>
                        <th>Low [24H]</th>
                        <th>Price Trend [72H]</th>
                        <th>24H Volume</th>
                    </tr>
                    <div className="home_spinner">
                        <div class="spinner-border" 
                            role="status" id="loadingssss">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <tbody id="market_table_body"></tbody>

                    <div className="more_bt">
                        <a href="/markets">View more markets</a>
                    </div>
                </table>
            </div>
        </div>
    )
}
export default HomePageMarketSection;