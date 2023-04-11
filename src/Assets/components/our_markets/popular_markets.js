import React from 'react';
import './real_market.css';
import { ReactComponent as SearchIcon } from '../../images/market_searchicon.svg';
import $ from 'jquery';

function MarketPage(){
    fetch('https://b2t-api-cmc-ncxdigital.flexprotect.org/marketdata/cmc/v1/summary')
    .then(res => res.json())
    .then(json => {

    const container = document.querySelector('#table_divddd tbody');
    const pairs = Object.getOwnPropertyNames(json);

    if (pairs) {
        hideloader();
    }

    // Function to hide the loader
    function hideloader() {
        document.getElementById('loading').style.display = 'none';
    }

    for (let pair of pairs) {

        const Pairs = json[`${pair}`];
        
        const name = Pairs.id;
        const strname = name.replace(/_/g, " / ");  
        
        const price = Pairs.last;
        const fixedNum = parseFloat(price).toFixed(2);
        
        const change = Pairs.percentChange * 100;
        const changed = parseFloat(change).toFixed(4);

        const hig = Pairs.high24hr;
        const high = parseFloat(hig).toFixed(4);
        
        const loo = Pairs.low24hr;
        const low = parseFloat(loo).toFixed(4);

        const quote = Pairs.quoteVolume;
        const volume = parseFloat(quote).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        container.innerHTML += `

            <tr>
                <td class="pair_name">
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h2>${strname}</h2>
                </td>
                <td class="latest_price">
                    <h2>${price}</h2>
                    <p>≈$${fixedNum}</p>
                </td>
                <td class="latest_change">
                    <h2>${changed}<span>%</span></h2>
                </td>
                <td class="high_24">
                    <h2> ${high}</h2>
                    <p>≈$${high}</p>
                </td>
                <td class="low_24">
                    <h2>${low}</h2>
                    <p>≈$${low}</p>
                </td>
                <td class="quote_volume">
                    <h2>$${volume}</h2>
                </td>
                <td class="trending_grp"></td>
            </tr>
        `;
    }
});
    return(              
        <section className='market_pag'>
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
                            <th>Pairs</th>
                            <th>Latest Price</th>
                            <th>Change</th>
                            <th>High [24H]</th>
                            <th>Low [24H]</th>
                            <th>24H Volume</th>
                            <th>Price Trend</th>
                        </tr>
                    </thead>
                    <div className='spiner_div'>
                        <div class="spinner-border" 
                            role="status" id="loading">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <tbody id="ncx_market_table">
                    <div className='graphing'>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/lrc_usdt.png" alt="lrc_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/eth_usd.png" alt="eth_usd"/>
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/usdp_usdt.png" alt="usdp_usdt"/>
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/zrx_usdt.png" alt="zrx_usdt"/>
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/doge_usdt.png" alt="doge_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/usdt_usd.png" alt="usdt_usd" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/xrp_btc.png" alt="xrp_btc" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/zec_usdt.png" alt="zec_usdt "/>
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/btc_usdt.png" alt="btc_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/grt_usdt.png" alt="grt_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/usdt_usdc.png" alt="usdt_usdc" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/trx_usdt.png" alt="trx_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/sushi_usdt.png" alt="sushi_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/uni_usdt.png" alt="uni_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/btc_usd.png" alt="btc_usd" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/dash_usdt.png" alt="dash_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/eth_btc.png" alt="eth_btc" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/usdc_usd.png" alt="usdc_usd" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/zrx_usdt.png" alt="yfi_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/bat_usdt.png" alt="bat_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/link_usdt.png" alt="link_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/mkr_usdt.png" alt="mkr_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/bnb_usdt.png" alt="bnb_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/ltc_usdt.png" alt="ltc_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/comp_usdt.png" alt="comp_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/busd_usdt.png" alt="busd_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/xmr_usdt.png" alt="xmr_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/dai_usdt.png" alt="dai_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/xrp_usdt.png" alt="xrp_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/xlm_usdt.png" alt="xlm_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/bch_btc.png" alt="bch_btc" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/ren_usdt.png" alt="ren_usdt " />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/matic_usdt.png" alt="matic_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/eth_usdt.png" alt="eth_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/mana_usdt.png" alt="mana_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/xrp_usdt.png" alt="xrp_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/btc_usdc.png" alt="btc_usdc" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/tusd_usdt.png" alt="tusd_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/band_usdt.png" alt="band_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/snx_usdt.png" alt="snx_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/bch_usdt.png" alt="bch_usdt" />
                        </div>
                        <div className='price_trend_graph'>
                            <img src="https://ncx.cx/images/graphs/aave_usdt.png" alt="aave_usdt" />
                        </div>
                    </div>
                    </tbody>
                </table>


            </div>
        </section>       
    )
}
export default MarketPage;

$(".latest_change h2").each(function() {
    var val = parseFloat($(this).text());
    $(this).addClass(val >= 0 ? 'positive' : 'negative');
});

//   $("#ncx_market_table tr").hover(function(){
//     $("#ncx_market_table tr").toggleClass("clicked");
//   });