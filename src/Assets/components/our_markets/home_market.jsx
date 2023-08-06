import React from "react";
// import './home_component';
import './home_market.css';
import { useTranslation } from "react-i18next";

function HomePageMarketSection()
{
    const api_url =
	"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false&price_change_percentage=24h&locale=en";

    async function getapi(url) {
        
        const response = await fetch(url);
        // console.log(response);
        
        // Storing data in form of JSON
        var data = await response.json();
        // console.log(data);
        
        if (response) {
            hideloader();
        }
        show(data);
    }

    getapi(api_url);

    function hideloader() {
        document.getElementById('loadingssss').style.display = 'none';
    }

    function show(data) {

        const Coin1ID = data[0].symbol;
        const Coin1Image = data[0].image;
        const Coin1Price = data[0].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin1High = data[0].high_24h.toLocaleString('en-US');
        const Coin1Low = data[0].low_24h.toLocaleString('en-US');

        const Coin2ID = data[1].symbol;
        const Coin2Image = data[1].image;
        const Coin2Price = data[1].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin2High = data[1].high_24h.toLocaleString('en-US');
        const Coin2Low = data[1].low_24h.toLocaleString('en-US');

        const Coin3ID = data[2].symbol;
        const Coin3Image = data[2].image;
        const Coin3Price = data[2].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin3High = data[2].high_24h.toLocaleString('en-US');
        const Coin3Low = data[2].low_24h.toLocaleString('en-US');

        const Coin4ID = data[3].symbol;
        const Coin4Image = data[3].image;
        const Coin4Price = data[3].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin4High = data[3].high_24h.toLocaleString('en-US');
        const Coin4Low = data[3].low_24h.toLocaleString('en-US');

        const Coin5ID = data[4].symbol;
        const Coin5Image = data[4].image;
        const Coin5Price = data[4].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin5High = data[4].high_24h.toLocaleString('en-US');
        const Coin5Low = data[5].low_24h.toLocaleString('en-US');

        const Coin6ID = data[5].symbol;
        const Coin6Image = data[5].image;
        const Coin6Price = data[6].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin6High = data[6].high_24h.toLocaleString('en-US');
        const Coin6Low = data[6].low_24h.toLocaleString('en-US');

        const Coin7ID = data[7].symbol;
        const Coin7Image = data[7].image;
        const Coin7Price = data[7].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin7High = data[7].high_24h.toLocaleString('en-US');
        const Coin7Low = data[7].low_24h.toLocaleString('en-US');

        const Coin8ID = data[8].symbol;
        const Coin8Image = data[8].image;
        const Coin8Price = data[8].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin8High = data[8].high_24h.toLocaleString('en-US');
        const Coin8Low = data[8].low_24h.toLocaleString('en-US');

        const Coin9ID = data[9].symbol;
        const Coin9Image = data[9].image;
        const Coin9Price = data[9].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin9High = data[9].high_24h.toLocaleString('en-US');
        const Coin9Low = data[9].low_24h.toLocaleString('en-US');

        const Coin10ID = data[10].symbol;
        const Coin10Image = data[10].image;
        const Coin10Price = data[10].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin10High = data[10].high_24h.toLocaleString('en-US');
        const Coin10Low = data[10].low_24h.toLocaleString('en-US');

        const Coin11ID = data[11].symbol;
        const Coin11Image = data[11].image;
        const Coin11Price = data[11].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin11High = data[11].high_24h.toLocaleString('en-US');
        const Coin11Low = data[11].low_24h.toLocaleString('en-US');

        const Coin12ID = data[12].symbol;
        const Coin12Image = data[12].image;
        const Coin12Price = data[12].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin12High = data[12].high_24h.toLocaleString('en-US');
        const Coin12Low = data[12].low_24h.toLocaleString('en-US');

        const Coin13ID = data[13].symbol;
        const Coin13Image = data[13].image;
        const Coin13Price = data[13].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const Coin13High = data[13].high_24h.toLocaleString('en-US');
        const Coin13Low = data[13].low_24h.toLocaleString('en-US');

        let tab =
            `
            <tr>
                <td class="mark-pair">
                    <img src=${Coin1Image} alt="coin-logo" />
                    <h1>${Coin1ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin1Price}</h1>
                    <p>≈$${Coin1Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin1High}</h1>
                    <p>≈$${Coin1High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin1Low}</h1>
                    <p>≈$${Coin1Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/eth_usd.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$1,123,32.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src=${Coin2Image} alt="coin-logo" />
                    <h1>${Coin2ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin2Price}</h1>
                    <p>≈$${Coin2Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin2High}</h1>
                    <p>≈$${Coin2High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin2Low}</h1>
                    <p>≈$${Coin2Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/btc_usd.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$1,310,484.00</h1>
                </td>
            </tr>
            
            <tr>
                <td class="mark-pair">
                    <img src=${Coin3Image} alt="coin-logo" />
                    <h1>${Coin3ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin3Price}</h1>
                    <p>≈$${Coin3Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin3High}</h1>
                    <p>≈$${Coin3High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin3Low}</h1>
                    <p>≈$${Coin3Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/usdt_usdc.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$983,842.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src=${Coin4Image} alt="coin-logo" />
                    <h1>${Coin4ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin4Price}</h1>
                    <p>≈$${Coin4Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin4High}</h1>
                    <p>≈$${Coin4High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin4Low}</h1>
                    <p>≈$${Coin4Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/xrp_btc.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$458,321.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src=${Coin5Image} alt="coin-logo" />
                    <h1>${Coin5ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin5Price}</h1>
                    <p>≈$${Coin5Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin5High}</h1>
                    <p>≈$${Coin5High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin5Low}</h1>
                    <p>≈$${Coin5Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/bnb_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$1,215,789.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src=${Coin6Image} alt="coin-logo" />
                    <h1>${Coin6ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin6Price}</h1>
                    <p>≈$${Coin6Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin6High}</h1>
                    <p>≈$${Coin6High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin6Low}</h1>
                    <p>≈$${Coin6Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/usdc_usd.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$1,108,348.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src=${Coin7Image} alt="coin-logo" />
                    <h1>${Coin7ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin7Price}</h1>
                    <p>≈$${Coin7Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin7High}</h1>
                    <p>≈$${Coin7High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin7Low}</h1>
                    <p>≈$${Coin7Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/doge_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$557,839.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src=${Coin8Image} alt="coin-logo" />
                    <h1>${Coin8ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin8Price}</h1>
                    <p>≈$${Coin8Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin8High}</h1>
                    <p>≈$${Coin8High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin8Low}</h1>
                    <p>≈$${Coin8Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689576578/ada_usdt_qqvmxu.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$157,509,328</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src=${Coin9Image} alt="coin-logo" />
                    <h1>${Coin9ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin9Price}</h1>
                    <p>≈$${Coin9Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin9High}</h1>
                    <p>≈$${Coin9High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin9Low}</h1>
                    <p>≈$${Coin9Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689576754/sol_usdt_owsb9b.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$350,779,668</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src=${Coin10Image} alt="coin-logo" />
                    <h1>${Coin10ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin10Price}</h1>
                    <p>≈$${Coin10Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin10High}</h1>
                    <p>≈$${Coin10High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin10Low}</h1>
                    <p>≈$${Coin10Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/trx_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$489,375.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src=${Coin11Image} alt="coin-logo" />
                    <h1>${Coin11ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin11Price}</h1>
                    <p>≈$${Coin11Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin11High}</h1>
                    <p>≈$${Coin11High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin11Low}</h1>
                    <p>≈$${Coin11Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/ltc_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$311,217.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src=${Coin12Image} alt="coin-logo" />
                    <h1>${Coin12ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin12Price}</h1>
                    <p>≈$${Coin12Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin12High}</h1>
                    <p>≈$${Coin12High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin12Low}</h1>
                    <p>≈$${Coin12Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/matic_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$319,375.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src=${Coin13Image} alt="coin-logo" />
                    <h1>${Coin13ID} / USDT</h1>
                </td>
                <td class="mark-price">
                    <h1>${Coin13Price}</h1>
                    <p>≈$${Coin13Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${Coin13High}</h1>
                    <p>≈$${Coin13High}</p>
                </td>
                <td class="mark-low">
                    <h1>${Coin13Low}</h1>
                    <p>≈$${Coin13Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689576790/dot_usdt_kva1vp.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$84,086,130</h1>
                </td>
            </tr>
            `;

        // Setting innerHTML as tab variable
        document.getElementById("market_table_body").innerHTML = tab;
    }

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
                        <a href="https://exchange.ncx.cx/markets">{t("view_more_markets")}</a>
                    </div>
                </table>
            </div>
        </div>
    )
}
export default HomePageMarketSection;