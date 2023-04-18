import { React, useState } from "react";
import './1.css';

function Indices1()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <div className="trade__cfd">
            <div className="container">
                <h1 className="hs_dpp">Trade with super tight CFD spreads</h1>
                <div className="indices__tab">
                    <button
                        className={toggleState === 1 ? "ind__tab active" : "ind__tab"}
                        onClick={() => toggleTab(1)}
                    >
                    Forex CFDs
                    </button>
                    <button
                        className={toggleState === 2 ? "ind__tab active" : "ind__tab"}
                        onClick={() => toggleTab(2)}
                    >
                    Popular CFDs Equities
                    </button>
                    <button
                        className={toggleState === 3 ? "ind__tab active" : "ind__tab"}
                        onClick={() => toggleTab(3)}
                    >
                    Crypto CFDs
                    </button>
                    <button
                        className={toggleState === 4 ? "ind__tab active" : "ind__tab"}
                        onClick={() => toggleTab(4)}
                    >
                    Commodities CFDs
                    </button>
                    <button
                        className={toggleState === 5 ? "ind__tab active" : "ind__tab"}
                        onClick={() => toggleTab(5)}
                    >
                    Metal CFDs
                    </button>
                    <button
                        className={toggleState === 6 ? "ind__tab active" : "ind__tab"}
                        onClick={() => toggleTab(6)}
                    >
                    Index CFDs
                    </button>
                </div>
                <div className="ind__cont_tabs">
                    <div className={toggleState === 1 ? "ind__cont  active" : "ind__cont"}>
                        <table>
                            <tr>
                                <td>EURUSD</td>
                                <td>Euro / US Dollar</td>
                            </tr>
                            <tr>
                                <td>EURCHF</td>
                                <td>Euro / Swiss Franc</td>
                            </tr>
                            <tr>
                                <td>AUDUSD</td>
                                <td>Australian Dollar / US Dollar</td>
                            </tr>
                            <tr>
                                <td>EURGBP</td>
                                <td>Euro / Great Britain Pound</td>
                            </tr>
                            <tr>
                                <td>EURJPY</td>
                                <td>Euro / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>GBPJPY</td>
                                <td>Great Britain Pound / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>GBPUSD</td>
                                <td>Great Britain Pound / US Dollar</td>
                            </tr>
                            <tr>
                                <td>USDCAD</td>
                                <td>US Dollar / Canadian Dollar</td>
                            </tr>
                            <tr>
                                <td>USDCHF</td>
                                <td>US Dollar / Swiss Franc</td>
                            </tr>
                            <tr>
                                <td>USDJPY</td>
                                <td>US Dollar / Japanese Yen</td>
                            </tr>
                        </table>
                    </div>
                    <div className={toggleState === 2 ? "ind__cont  active" : "ind__cont"}>
                        <table>
                            <tr>
                                <td>AMZN</td>
                                <td>Amazon</td>
                            </tr>
                            <tr>
                                <td>APPL</td>
                                <td>Apple</td>
                            </tr>
                            <tr>
                                <td>META</td>
                                <td>Meta Platforms Inc</td>
                            </tr>
                            <tr>
                                <td>TSLA</td>
                                <td>Tesla</td>
                            </tr>
                            <tr>
                                <td>DIS</td>
                                <td>Walt Disney</td>
                            </tr>
                            <tr>
                                <td>NESN</td>
                                <td>Nestle</td>
                            </tr>
                            <tr>
                                <td>SWATCH</td>
                                <td>Second Watch</td>
                            </tr>
                            <tr>
                                <td>SWISS</td>
                                <td>Swisscom</td>
                            </tr>
                            <tr>
                                <td>ADS</td>
                                <td>Adidas</td>
                            </tr>
                            <tr>
                                <td>BN</td>
                                <td>Danone</td>
                            </tr>
                        </table>
                    </div>
                    <div className={toggleState === 3 ? "ind__cont  active" : "ind__cont"}>
                        <table>
                            <tr>
                                <td>BTCUSD</td>
                                <td>Bitcoin / US Dollar</td>
                            </tr>
                            <tr>
                                <td>ETHUSD</td>
                                <td>Ethereum / US Dollar</td>
                            </tr>
                            <tr>
                                <td>BCHUSD</td>
                                <td>Bitcoin Cash / US Dollar</td>
                            </tr>
                            <tr>
                                <td>LTCUSD</td>
                                <td>Litecoin / US Dollar</td>
                            </tr>
                            <tr>
                                <td>EOSUSD</td>
                                <td>EOS / US Dollar</td>
                            </tr>
                            <tr>
                                <td>XLMUSD</td>
                                <td>Stellar Lumens / US Dollar</td>
                            </tr>
                            <tr>
                                <td>NEOUSD</td>
                                <td>Neo / US Dollar</td>
                            </tr>
                            <tr>
                                <td>DOGEUSD</td>
                                <td>Dogecoin / US Dollar</td>
                            </tr>
                            <tr>
                                <td>LINKUSD</td>
                                <td>Chainlink / US Dollar</td>
                            </tr>
                            <tr>
                                <td>UNIUSD</td>
                                <td>Uniswap / US Dollar</td>
                            </tr>
                        </table>
                    </div>
                    <div className={toggleState === 4 ? "ind__cont  active" : "ind__cont"}>
                        <table>
                            <tr>
                                <td>WTI/USD</td>
                                <td>Oil - US Crude</td>
                            </tr>
                            <tr>
                                <td>BRN/USD</td>
                                <td>Oil - Brent Crude</td>
                            </tr>
                            <tr>
                                <td>NGC/USD</td>
                                <td>Natural Gas</td>
                            </tr>
                            <tr>
                                <td>XAG/AUD</td>
                                <td>Silver / Australian Dollar</td>
                            </tr>
                            <tr>
                                <td>XAG/CHF</td>
                                <td>Silver / Swiss Franc</td>
                            </tr>
                            <tr>
                                <td>XAG/EUR</td>
                                <td>Silver / Euro</td>
                            </tr>
                            <tr>
                                <td>XAG/GBP</td>
                                <td>Silver / Great Britain Pound</td>
                            </tr>
                            <tr>
                                <td>XAG/USD</td>
                                <td>Silver / US Dollar</td>
                            </tr>
                            <tr>
                                <td>XAU/AUD</td>
                                <td>Gold / Australian Dollar</td>
                            </tr>
                            <tr>
                                <td>XAU/CHF</td>
                                <td>Gold / Swiss Franc</td>
                            </tr>
                            <tr>
                                <td>XAU/EUR</td>
                                <td>Gold / Euro</td>
                            </tr>
                            <tr>
                                <td>XAU/GBP</td>
                                <td>Gold vs Great Britain Pound</td>
                            </tr>
                            <tr>
                                <td>XAU/USD</td>
                                <td>Gold vs US Dollar</td>
                            </tr>
                            <tr>
                                <td>XPD/USD</td>
                                <td>Palladium vs US Dollar</td>
                            </tr>
                            <tr>
                                <td>XPT/USD</td>
                                <td>Platinum vs US Dollar</td>
                            </tr>
                            <tr>
                                <td>CUC/USD</td>
                                <td>Copper vs US Dollar</td>
                            </tr>
                            
                        </table>
                    </div>
                    <div className={toggleState === 5 ? "ind__cont  active" : "ind__cont"}>
                        <table>
                            <tr>
                                <td>XAG/AUD</td>
                                <td>Silver / Australian Dollar</td>
                            </tr>
                            <tr>
                                <td>XAG/CHF</td>
                                <td>Silver / Swiss Franc</td>
                            </tr>
                            <tr>
                                <td>XAG/EUR</td>
                                <td>Silver / Euro</td>
                            </tr>
                            <tr>
                                <td>XAG/GBP</td>
                                <td>Silver / Great Britain Pound</td>
                            </tr>
                            <tr>
                                <td>XAG/USD</td>
                                <td>Silver / US Dollar</td>
                            </tr>
                            <tr>
                                <td>XAU/AUD</td>
                                <td>Gold / Australian Dollar</td>
                            </tr>
                            <tr>
                                <td>XAU/CHF</td>
                                <td>Gold / Swiss Franc</td>
                            </tr>
                            <tr>
                                <td>XAU/EUR</td>
                                <td>Gold / Euro</td>
                            </tr>
                            <tr>
                                <td>XAU/GBP</td>
                                <td>Gold vs Great Britain Pound</td>
                            </tr>
                            <tr>
                                <td>XAU/USD</td>
                                <td>Gold vs US Dollar</td>
                            </tr>
                            <tr>
                                <td>XPD/USD</td>
                                <td>Palladium vs US Dollar</td>
                            </tr>
                            <tr>
                                <td>XPT/USD</td>
                                <td>Platinum vs US Dollar</td>
                            </tr>
                            <tr>
                                <td>CUC/USD</td>
                                <td>Copper vs US Dollar</td>
                            </tr>
                            
                        </table>
                    </div>
                    <div className={toggleState === 6 ? "ind__cont  active" : "ind__cont"}>
                        <table>
                            <tr>
                                <td>DAXEUR/FDAX</td>
                                <td>Germany 40 Index</td>
                            </tr>
                            <tr>
                                <td>F40EUR/CAC</td>
                                <td>France 40 Index</td>
                            </tr>
                            <tr>
                                <td>FTSGBP/FTSE</td>
                                <td>UK 100 Index</td>
                            </tr>
                            <tr>
                                <td>SMICHF</td>
                                <td>Switzerland 20 Index</td>
                            </tr>
                            <tr>
                                <td>ESXEUR</td>
                                <td>EURO 50 Index</td>
                            </tr>
                            <tr>
                                <td>IBXEUR</td>
                                <td>Spain 35 Index</td>
                            </tr>
                            <tr>
                                <td>DJIUSD</td>
                                <td>US 30 Index</td>
                            </tr>
                            <tr>
                                <td>SPXUSD</td>
                                <td>US 500 Index</td>
                            </tr>
                            <tr>
                                <td>NDXUSD</td>
                                <td>US 100 Index</td>
                            </tr>
                            <tr>
                                <td>NIKJPY / NIK</td>
                                <td>Japan 225 Index</td>
                            </tr>
                            <tr>
                                <td>HSIHKD</td>
                                <td>Hong Kong 50 Index</td>
                            </tr>
                            <tr>
                                <td>ASXAUD</td>
                                <td>Australia 200 Index</td>
                            </tr>
                            <tr>
                                <td>XINUSD</td>
                                <td>China 50 Index (USD)</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Indices1;