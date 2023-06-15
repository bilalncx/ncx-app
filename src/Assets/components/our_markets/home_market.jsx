import React from "react";
// import './home_component';
import './home_market.css';
import { useTranslation } from "react-i18next";

function HomePageMarketSection()
{
    const api_url =
	"https://b2t-api-cmc-ncxdigital.flexprotect.org/marketdata/cmc/v1/summary";

    async function getapi(url) {
        
        const response = await fetch(url);
        
        // Storing data in form of JSON
        var data = await response.json();
        
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
        // Ethereum
        const ETH1 = data.ETH_USD.id;
        const ETH_ID = ETH1.replace(/_/g, " / ");  
        const eth2 = data.ETH_USD.last;
        const ETH_Price = parseFloat(eth2).toFixed(2);
        const ETH3 = data.ETH_USD.high24hr;
        const ETH_High = parseFloat(ETH3).toFixed(4);
        const ETH4 = data.ETH_USD.low24hr;
        const ETH_Low = parseFloat(ETH4).toFixed(4);
        const ETH5 = data.ETH_USD.quoteVolume;
        const ETH_Volume = parseFloat(ETH5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        // USDT
        const USDT = data.USDT_USD.id;
        const USDT_ID = USDT.replace(/_/g, " / ");  
        const USDT2 = data.USDT_USD.last;
        const USDT_Price = parseFloat(USDT2).toFixed(2);
        const USDT3 = data.USDT_USD.high24hr;
        const USDT_High = parseFloat(USDT3).toFixed(4);
        const USDT4 = data.USDT_USD.low24hr;
        const USDT_Low = parseFloat(USDT4).toFixed(4);
        const USDT5 = data.USDT_USD.quoteVolume;
        const USDT_Volume = parseFloat(USDT5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        // BTC
        const BTC = data.BTC_USDT.id;
        const BTC_ID = BTC.replace(/_/g, " / ");  
        const BTC2 = data.BTC_USDT.last;
        const BTC_Price = parseFloat(BTC2).toFixed(2);
        const BTC3 = data.BTC_USDT.high24hr;
        const BTC_High = parseFloat(BTC3).toFixed(4);
        const BTC4 = data.BTC_USDT.low24hr;
        const BTC_Low = parseFloat(BTC4).toFixed(4);
        const BTC5 = data.BTC_USDT.quoteVolume;
        const BTC_Volume = parseFloat(BTC5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // BCH
        const BCH = data.BCH_USDT.id;
        const BCH_ID = BCH.replace(/_/g, " / ");  
        const BCH2 = data.BCH_USDT.last;
        const BCH_Price = parseFloat(BCH2).toFixed(2);
        const BCH3 = data.BCH_USDT.high24hr;
        const BCH_High = parseFloat(BCH3).toFixed(4);
        const BCH4 = data.BCH_USDT.low24hr;
        const BCH_Low = parseFloat(BCH4).toFixed(4);
        const BCH5 = data.BCH_USDT.quoteVolume;
        const BCH_Volume = parseFloat(BCH5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // MATIC
        const MATIC = data.MATIC_USDT.id;
        const MATIC_ID = MATIC.replace(/_/g, " / ");  
        const MATIC2 = data.MATIC_USDT.last;
        const MATIC_Price = parseFloat(MATIC2).toFixed(2);
        const MATIC3 = data.MATIC_USDT.high24hr;
        const MATIC_High = parseFloat(MATIC3).toFixed(4);
        const MATIC4 = data.MATIC_USDT.low24hr;
        const MATIC_Low = parseFloat(MATIC4).toFixed(4);
        const MATIC5 = data.MATIC_USDT.quoteVolume;
        const MATIC_Volume = parseFloat(MATIC5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // LTC 
        const LTC = data.LTC_USDT.id;
        const LTC_ID = LTC.replace(/_/g, " / ");  
        const LTC2 = data.LTC_USDT.last;
        const LTC_Price = parseFloat(LTC2).toFixed(2);
        const LTC3 = data.LTC_USDT.high24hr;
        const LTC_High = parseFloat(LTC3).toFixed(4);
        const LTC4 = data.LTC_USDT.low24hr;
        const LTC_Low = parseFloat(LTC4).toFixed(4);
        const LTC5 = data.LTC_USDT.quoteVolume;
        const LTC_Volume = parseFloat(LTC5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // XRP 
        const XRP = data.XRP_USD.id;
        const XRP_ID = XRP.replace(/_/g, " / ");  
        const XRP2 = data.XRP_USD.last;
        const XRP_Price = parseFloat(XRP2).toFixed(2);
        const XRP3 = data.XRP_USD.high24hr;
        const XRP_High = parseFloat(XRP3).toFixed(4);
        const XRP4 = data.XRP_USD.low24hr;
        const XRP_Low = parseFloat(XRP4).toFixed(4);
        const XRP5 = data.XRP_USD.quoteVolume;
        const XRP_Volume = parseFloat(XRP5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // USDC 
        const USDC = data.USDC_USD.id;
        const USDC_ID = USDC.replace(/_/g, " / ");  
        const USDC2 = data.USDC_USD.last;
        const USDC_Price = parseFloat(USDC2).toFixed(2);
        const USDC3 = data.USDC_USD.high24hr;
        const USDC_High = parseFloat(USDC3).toFixed(4);
        const USDC4 = data.USDC_USD.low24hr;
        const USDC_Low = parseFloat(USDC4).toFixed(4);
        const USDC5 = data.USDC_USD.quoteVolume;
        const USDC_Volume = parseFloat(USDC5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // BAND 
        const BAND = data.BAND_USDT.id;
        const BAND_ID = BAND.replace(/_/g, " / ");  
        const BAND2 = data.BAND_USDT.last;
        const BAND_Price = parseFloat(BAND2).toFixed(2);
        const BAND3 = data.BAND_USDT.high24hr;
        const BAND_High = parseFloat(BAND3).toFixed(4);
        const BAND4 = data.BAND_USDT.low24hr;
        const BAND_Low = parseFloat(BAND4).toFixed(4);
        const BAND5 = data.BAND_USDT.quoteVolume;
        const BAND_Volume = parseFloat(BAND5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // BNB 
        const BNB = data.BNB_USDT.id;
        const BNB_ID = BNB.replace(/_/g, " / ");  
        const BNB2 = data.BNB_USDT.last;
        const BNB_Price = parseFloat(BNB2).toFixed(2);
        const BNB3 = data.BNB_USDT.high24hr;
        const BNB_High = parseFloat(BNB3).toFixed(4);
        const BNB4 = data.BNB_USDT.low24hr;
        const BNB_Low = parseFloat(BNB4).toFixed(4);
        const BNB5 = data.BNB_USDT.quoteVolume;
        const BNB_Volume = parseFloat(BNB5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // DOGE / USDT
        const DOGE1 = data.DOGE_USDT.id;
        const DOGE_ID = DOGE1.replace(/_/g, " / ");  
        const DOGE2 = data.DOGE_USDT.last;
        const DOGE_Price = parseFloat(DOGE2).toFixed(2);
        const DOGE3 = data.DOGE_USDT.high24hr;
        const DOGE_High = parseFloat(DOGE3).toFixed(4);
        const DOGE4 = data.DOGE_USDT.low24hr;
        const DOGE_Low = parseFloat(DOGE4).toFixed(4);
        const DOGE5 = data.DOGE_USDT.quoteVolume;
        const DOGE_Volume = parseFloat(DOGE5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // YFI / USDT
        const YFI1 = data.YFI_USDT.id;
        const YFI_ID = YFI1.replace(/_/g, " / ");  
        const YFI2 = data.YFI_USDT.last;
        const YFI_Price = parseFloat(YFI2).toFixed(2);
        const YFI3 = data.YFI_USDT.high24hr;
        const YFI_High = parseFloat(YFI3).toFixed(4);
        const YFI4 = data.YFI_USDT.low24hr;
        const YFI_Low = parseFloat(YFI4).toFixed(4);
        const YFI5 = data.YFI_USDT.quoteVolume;
        const YFI_Volume = parseFloat(YFI5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // LINK / USDT
        const LINK1 = data.LINK_USDT.id;
        const LINK_ID = LINK1.replace(/_/g, " / ");  
        const LINK2 = data.LINK_USDT.last;
        const LINK_Price = parseFloat(LINK2).toFixed(2);
        const LINK3 = data.LINK_USDT.high24hr;
        const LINK_High = parseFloat(LINK3).toFixed(4);
        const LINK4 = data.LINK_USDT.low24hr;
        const LINK_Low = parseFloat(LINK4).toFixed(4);
        const LINK5 = data.LINK_USDT.quoteVolume;
        const LINK_Volume = parseFloat(LINK5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // XMR / USDT
        const XMR1 = data.XMR_USDT.id;
        const XMR_ID = XMR1.replace(/_/g, " / ");  
        const XMR2 = data.XMR_USDT.last;
        const XMR_Price = parseFloat(XMR2).toFixed(2);
        const XMR3 = data.XMR_USDT.high24hr;
        const XMR_High = parseFloat(XMR3).toFixed(4);
        const XMR4 = data.XMR_USDT.low24hr;
        const XMR_Low = parseFloat(XMR4).toFixed(4);
        const XMR5 = data.XMR_USDT.quoteVolume;
        const XMR_Volume = parseFloat(XMR5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // DAI / USD
        const DAI1 = data.DAI_USD.id;
        const DAI_ID = DAI1.replace(/_/g, " / ");  
        const DAI2 = data.DAI_USD.last;
        const DAI_Price = parseFloat(DAI2).toFixed(2);
        const DAI3 = data.DAI_USD.high24hr;
        const DAI_High = parseFloat(DAI3).toFixed(4);
        const DAI4 = data.DAI_USD.low24hr;
        const DAI_Low = parseFloat(DAI4).toFixed(4);
        const DAI5 = data.DAI_USD.quoteVolume;
        const DAI_Volume = parseFloat(DAI5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // BAT / USDT
        const BAT1 = data.BAT_USDT.id;
        const BAT_ID = BAT1.replace(/_/g, " / ");  
        const BAT2 = data.BAT_USDT.last;
        const BAT_Price = parseFloat(BAT2).toFixed(2);
        const BAT3 = data.BAT_USDT.high24hr;
        const BAT_High = parseFloat(BAT3).toFixed(4);
        const BAT4 = data.BAT_USDT.low24hr;
        const BAT_Low = parseFloat(BAT4).toFixed(4);
        const BAT5 = data.BAT_USDT.quoteVolume;
        const BAT_Volume = parseFloat(BAT5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // TUSD / USDT
        const TUSD1 = data.TUSD_USDT.id;
        const TUSD_ID = TUSD1.replace(/_/g, " / ");  
        const TUSD2 = data.TUSD_USDT.last;
        const TUSD_Price = parseFloat(TUSD2).toFixed(2);
        const TUSD3 = data.TUSD_USDT.high24hr;
        const TUSD_High = parseFloat(TUSD3).toFixed(4);
        const TUSD4 = data.TUSD_USDT.low24hr;
        const TUSD_Low = parseFloat(TUSD4).toFixed(4);
        const TUSD5 = data.TUSD_USDT.quoteVolume;
        const TUSD_Volume = parseFloat(TUSD5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        let tab =
            `
            <tr>
                <td class="mark-pair">
                    <img src="https://ncx.cx/images/btc.svg" alt="coin-logo" />
                    <h1>${BTC_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${BTC_Price}</h1>
                    <p>≈$${BTC_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${BTC_High}</h1>
                    <p>≈$${BTC_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${BTC_Low}</h1>
                    <p>≈$${BTC_Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/btc_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$1,223,312.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src="https://ncx.cx/images/eth.svg" alt="coin-logo" />
                    <h1>${ETH_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${ETH_Price}</h1>
                    <p>≈$${ETH_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${ETH_High}</h1>
                    <p>≈$${ETH_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${ETH_Low}</h1>
                    <p>≈$${ETH_Low}</p>
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
                    <img src="https://ncx.cx/images/usdt.svg" alt="coin-logo" />
                    <h1>${USDT_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${USDT_Price}</h1>
                    <p>≈$${USDT_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${USDT_High}</h1>
                    <p>≈$${USDT_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${USDT_Low}</h1>
                    <p>≈$${USDT_Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/usdt_usd.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$1,244,431.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src="https://ncx.cx/images/bch.svg" alt="coin-logo" />
                    <h1>${BCH_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${BCH_Price}</h1>
                    <p>≈$${BCH_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${BCH_High}</h1>
                    <p>≈$${BCH_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${BCH_Low}</h1>
                    <p>≈$${BCH_Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/bch_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$289,849.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src="https://ncx.cx/images/bnb.svg" alt="coin-logo" />
                    <h1>${BNB_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${BNB_Price}</h1>
                    <p>≈$${BNB_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${BNB_High}</h1>
                    <p>≈$${BNB_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${BNB_Low}</h1>
                    <p>≈$${BNB_Low}</p>
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
                    <img src="https://ncx.cx/images/matic.svg" alt="coin-logo" />
                    <h1>${MATIC_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${MATIC_Price}</h1>
                    <p>≈$${MATIC_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${MATIC_High}</h1>
                    <p>≈$${MATIC_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${MATIC_Low}</h1>
                    <p>≈$${MATIC_Low}</p>
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
                    <img src="https://ncx.cx/images/ltc.svg" alt="coin-logo" />
                    <h1>${LTC_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${LTC_Price}</h1>
                    <p>≈$${LTC_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${LTC_High}</h1>
                    <p>≈$${LTC_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${LTC_Low}</h1>
                    <p>≈$${LTC_Low}</p>
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
                    <img src="https://ncx.cx/images/xrp.svg" alt="coin-logo" />
                    <h1>${XRP_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${XRP_Price}</h1>
                    <p>≈$${XRP_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${XRP_High}</h1>
                    <p>≈$${XRP_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${XRP_Low}</h1>
                    <p>≈$${XRP_Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/xrp_usd.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$498,916.00</h1>
                </td>
            </tr>

            <tr class="hide_mbl">
                <td class="mark-pair">
                    <img src="https://ncx.cx/images/usdc.svg" alt="coin-logo" />
                    <h1>${USDC_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${USDC_Price}</h1>
                    <p>≈$${USDC_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${USDC_High}</h1>
                    <p>≈$${USDC_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${USDC_Low}</h1>
                    <p>≈$${USDC_Low}</p>
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
                    <img src="https://ncx.cx/images/band.svg" alt="coin-logo" />
                    <h1>${BAND_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${BAND_Price}</h1>
                    <p>≈$${BAND_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${BAND_High}</h1>
                    <p>≈$${BAND_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${BAND_Low}</h1>
                    <p>≈$${BAND_Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/band_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$562,226.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src="https://ncx.cx/images/doge.svg" alt="coin-logo" />
                    <h1>${DOGE_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${DOGE_Price}</h1>
                    <p>≈$${DOGE_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${DOGE_High}</h1>
                    <p>≈$${DOGE_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${DOGE_Low}</h1>
                    <p>≈$${DOGE_Low}</p>
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
                    <img src="https://ncx.cx/images/yfi.svg" alt="coin-logo" />
                    <h1>${YFI_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${YFI_Price}</h1>
                    <p>≈$${YFI_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${YFI_High}</h1>
                    <p>≈$${YFI_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${YFI_Low}</h1>
                    <p>≈$${YFI_Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/yfi_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$354,382.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src="https://ncx.cx/images/link.svg" alt="coin-logo" />
                    <h1>${LINK_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${LINK_Price}</h1>
                    <p>≈$${LINK_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${LINK_High}</h1>
                    <p>≈$${LINK_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${LINK_Low}</h1>
                    <p>≈$${LINK_Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/link_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$284,971.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src="https://ncx.cx/images/xmr.svg" alt="coin-logo" />
                    <h1>${XMR_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${XMR_Price}</h1>
                    <p>≈$${XMR_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${XMR_High}</h1>
                    <p>≈$${XMR_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${XMR_Low}</h1>
                    <p>≈$${XMR_Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/xmr_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$424,431.00</h1>
                </td>
            </tr>

            <tr class="hide_mbl">
                <td class="mark-pair">
                    <img src="https://ncx.cx/images/dai.svg" alt="coin-logo" />
                    <h1>${DAI_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${DAI_Price}</h1>
                    <p>≈$${DAI_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${DAI_High}</h1>
                    <p>≈$${DAI_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${DAI_Low}</h1>
                    <p>≈$${DAI_Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/dai_usd.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$367,392.00</h1>
                </td>
            </tr>

            <tr>
                <td class="mark-pair">
                    <img src="https://ncx.cx/images/bat.svg" alt="coin-logo" />
                    <h1>${BAT_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${BAT_Price}</h1>
                    <p>≈$${BAT_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${BAT_High}</h1>
                    <p>≈$${BAT_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${BAT_Low}</h1>
                    <p>≈$${BAT_Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/bat_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$458,299.00</h1>
                </td>
            </tr>

            <tr class="hide_mbl">
                <td class="mark-pair">
                    <img src="https://ncx.cx/images/tusd.svg" alt="coin-logo" />
                    <h1>${TUSD_ID}</h1>
                </td>
                <td class="mark-price">
                    <h1>${TUSD_Price}</h1>
                    <p>≈$${TUSD_Price}</p>
                </td>
                <td class="mark-high">
                    <h1>${TUSD_High}</h1>
                    <p>≈$${TUSD_High}</p>
                </td>
                <td class="mark-low">
                    <h1>${TUSD_Low}</h1>
                    <p>≈$${TUSD_Low}</p>
                </td>
                <td class="mark-graph">
                    <img src="https://ncx.cx/images/new-graphs/tusd_usdt.png" alt="graph" />
                </td>
                <td class="mark-volume">
                    <h1>$587,982.00</h1>
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
                        <a href="/markets">{t("view_more_markets")}</a>
                    </div>
                </table>
            </div>
        </div>
    )
}
export default HomePageMarketSection;