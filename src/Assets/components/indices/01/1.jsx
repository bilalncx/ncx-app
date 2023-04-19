import { React, useState } from "react";
import './1.css';

function Indices1()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [toggleStatecontent, setToggleStatecontent] = useState(1);
    const toggleTabcontent = (index) => {
        setToggleStatecontent(index);
    };

    const [toggleStateequity, setToggleStateequity] = useState(1);
    const toggleTabequity = (index) => {
        setToggleStateequity(index);
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
                    Crypto CFDs
                    </button>
                    <button
                        className={toggleState === 2 ? "ind__tab active" : "ind__tab"}
                        onClick={() => toggleTab(2)}
                    >
                    Stocks
                    </button>
                    <button
                        className={toggleState === 3 ? "ind__tab active" : "ind__tab"}
                        onClick={() => toggleTab(3)}
                    >
                    Forex CFDs
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
                    EFTs
                    </button>
                    <button
                        className={toggleState === 6 ? "ind__tab active" : "ind__tab"}
                        onClick={() => toggleTab(6)}
                    >
                    Indices
                    </button>
                </div>
                <div className="ind__cont_tabs">
                    <div className={toggleState === 3 ? "ind__cont  active" : "ind__cont"}>
                        <table>
                            <tr>
                                <td>AUDCAD</td>
                                <td>Australian Dollar / Canadian Dollar</td>
                            </tr>
                            <tr>
                                <td>EURDKK</td>
                                <td>Euro / Danish Krone</td>
                            </tr>
                            <tr>
                                <td>HKDJPY</td>
                                <td>Hong Kong Dollar / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>AUDCHF</td>
                                <td>Australian Dollar / Swiss Franc</td>
                            </tr>
                            <tr>
                                <td>EURGBP</td>
                                <td>Euro / Great Britain Pound</td>
                            </tr>
                            <tr>
                                <td>MXNJPY</td>
                                <td>Mexican Peso / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>AUDDKK</td>
                                <td>Australian Dollar / Danish Krone</td>
                            </tr>
                            <tr>
                                <td>EURHKD</td>
                                <td>Euro / Hong Kong Dollar</td>
                            </tr>
                            <tr>
                                <td>NOKJPY</td>
                                <td>Norwegian Krone / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>AUDHUF</td>
                                <td>Australian Dollar / Hungarian Forint</td>
                            </tr>
                            <tr>
                                <td>EURHUF</td>
                                <td>Euro / Hungarian Forint</td>
                            </tr>
                            <tr>
                                <td>NOKSEK</td>
                                <td>Norway Krone / Swedish Krona</td>
                            </tr>
                            <tr>
                                <td>AUDJPY</td>
                                <td>Australian Dollar / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>EURILS</td>
                                <td>Euro / Israeli Shekel</td>
                            </tr>
                            <tr>
                                <td>NZDCAD</td>
                                <td>New Zealand Dollar / Canadian Dollar</td>
                            </tr>
                            <tr>
                                <td>AUDNOK</td>
                                <td>Australian Dollar / Norwegian Krone</td>
                            </tr>
                            <tr>
                                <td>EURJPY</td>
                                <td>Euro / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>NZDCHF</td>
                                <td>New Zealand Dollar / Swiss Franc</td>
                            </tr>
                            <tr>
                                <td>AUDNZD</td>
                                <td>Australian Dollar / New Zealand Dollar</td>
                            </tr>
                            <tr>
                                <td>EURMXN</td>
                                <td>Euro / Mexican Peso</td>
                            </tr>
                            <tr>
                                <td>NZDDKK</td>
                                <td>New Zealand Dollar / Danish Krone</td>
                            </tr>
                            <tr>
                                <td>AUDSEK</td>
                                <td>Australian Dollar to Swedish Krona</td>
                            </tr>
                            <tr>
                                <td>EURNOK</td>
                                <td>Euro / Norway Krone</td>
                            </tr>
                            <tr>
                                <td>NZDHUF</td>
                                <td>New Zealand Dollar / Hungarian Forint</td>
                            </tr>
                            <tr>
                                <td>AUDSGD</td>
                                <td>Australian Dollar / Singapore Dollar</td>
                            </tr>
                            <tr>
                                <td>EURNZD</td>
                                <td>Euro / New Zealand Dollar</td>
                            </tr>
                            <tr>
                                <td>NZDJPY</td>
                                <td>New Zealand Dollar / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>AUDUSD</td>
                                <td>Australian Dollar / US Dollar</td>
                            </tr>
                            <tr>
                                <td>EURPLN</td>
                                <td>Euro / Polish Zloty</td>
                            </tr>
                            <tr>
                                <td>NZDNOK</td>
                                <td>New Zealand Dollar / Norway Krone</td>
                            </tr>
                            <tr>
                                <td>AUDZAR</td>
                                <td>Australian Dollar / South African Rand</td>
                            </tr>
                            <tr>
                                <td>EURRUB</td>
                                <td>Euro / Russian Rouble</td>
                            </tr>
                            <tr>
                                <td>NZDSEK</td>
                                <td>New Zealand Dollars / Swedish Krona</td>
                            </tr>
                            <tr>
                                <td>CADCHF</td>
                                <td>Canadian Dollar / Swiss Franc</td>
                            </tr>
                            <tr>
                                <td>EURSEK</td>
                                <td>Euro / Swedish Krona</td>
                            </tr>
                            <tr>
                                <td>NZDSGD</td>
                                <td>New Zealand Dollar / Singapore Dollar</td>
                            </tr>
                            <tr>
                                <td>CADDKK</td>
                                <td>Canadian Dollar / Danish Krone</td>
                            </tr>
                            <tr>
                                <td>EURSGD</td>
                                <td>Euro / Singapore Dollar</td>
                            </tr>
                            <tr>
                                <td>NZDUSD</td>
                                <td>New Zealand Dollar / US Dollar</td>
                            </tr>
                            <tr>
                                <td>CADJPY</td>
                                <td>Canadian Dollar / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>EURTRY</td>
                                <td>Euro / Turkish Lira</td>
                            </tr>
                            <tr>
                                <td>SEKJPY</td>
                                <td>Swedish Krona / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>CADMXN</td>
                                <td>Canadian Dollar / Mexican Peso</td>
                            </tr>
                            <tr>
                                <td>EURUSD</td>
                                <td>Euro / US Dollar</td>
                            </tr>
                            <tr>
                                <td>SGDHKD</td>
                                <td>Singapore Dollar / Hong Kong Dollar</td>
                            </tr>
                            <tr>
                                <td>CADNOK</td>
                                <td>Canadian Dollar / Norwegian Krone</td>
                            </tr>
                            <tr>
                                <td>EURZAR</td>
                                <td>Euro / South Africa Rand</td>
                            </tr>
                            <tr>
                                <td>SGDJPY</td>
                                <td>Singapore Dollar / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>CADSEK</td>
                                <td>Canadian Dollar / Swedish Krona</td>
                            </tr>
                            <tr>
                                <td>USDZAR</td>
                                <td>US Dollar / South Africa Rand</td>
                            </tr>
                            <tr>
                                <td>TRYJPY</td>
                                <td>New Turkish Lira / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>CADSGD</td>
                                <td>Canadian Dollar / Singapore Dollar</td>
                            </tr>
                            <tr>
                                <td>GBPAUD</td>
                                <td>Great Britain Pound / Australian Dollar</td>
                            </tr>
                            <tr>
                                <td>USDCAD</td>
                                <td>US Dollar / Canadian Dollar</td>
                            </tr>
                            <tr>
                                <td>CHFDKK</td>
                                <td>Swiss Frank / Danish Krone</td>
                            </tr>
                            <tr>
                                <td>GBPCAD</td>
                                <td>Great Britain Pound / Canadian Dollar</td>
                            </tr>
                            <tr>
                                <td>USDCHF</td>
                                <td>US Dollar / Swiss Franc</td>
                            </tr>
                            <tr>
                                <td>CHFHUF</td>
                                <td>Swiss Franc / Hungarian Forint</td>
                            </tr>
                            <tr>
                                <td>GBPCHF</td>
                                <td>Great Britain Pound / Swiss Franc</td>
                            </tr>
                            <tr>
                                <td>USDCNH</td>
                                <td>US Dollar / Chinese Yuan Renminbi</td>
                            </tr>
                            <tr>
                                <td>CHFJPY</td>
                                <td>Swiss Frank / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>GBPCZK</td>
                                <td>Great Britain Pound / Czech Koruna</td>
                            </tr>
                            <tr>
                                <td>USDCZK</td>
                                <td>US Dollar / Czech koruna</td>
                            </tr>
                            <tr>
                                <td>CHFNOK</td>
                                <td>Swiss Franc / Norwegian Krone</td>
                            </tr>
                            <tr>
                                <td>GBPDKK</td>
                                <td>Great Britain Pound / Danish Krone</td>
                            </tr>
                            <tr>
                                <td>USDDKK</td>
                                <td>US Dollar / Danish Krone</td>
                            </tr>
                            <tr>
                                <td>CHFPLN</td>
                                <td>Swiss Franc / Polish Zloty</td>
                            </tr>
                            <tr>
                                <td>GBPHKD</td>
                                <td>Great Britain Pound / Hong Kong Dollar</td>
                            </tr>
                            <tr>
                                <td>USDHKD</td>
                                <td>US Dollar / Hong Kong Dollar</td>
                            </tr>
                            <tr>
                                <td>CHFSEK</td>
                                <td>Swiss Franc to Swedish Krona</td>
                            </tr>
                            <tr>
                                <td>GBPHUF</td>
                                <td>Great Britain Pound / Hungarian Forint</td>
                            </tr>
                            <tr>
                                <td>USDHUF</td>
                                <td>US Dollar / Hungarian Forint</td>
                            </tr>
                            <tr>
                                <td>CHFSGD</td>
                                <td>Swiss Frank / Singapore Dollar</td>
                            </tr>
                            <tr>
                                <td>GBPJPY</td>
                                <td>Great Britain Pound / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>USDILS</td>
                                <td>US Dollar / Israeli Shekel</td>
                            </tr>
                            <tr>
                                <td>CHFZAR</td>
                                <td>Swiss Frank / South African Rand</td>
                            </tr>
                            <tr>
                                <td>GBPMXN</td>
                                <td>Great Britain Pound / Mexican Peso</td>
                            </tr>
                            <tr>
                                <td>USDJPY</td>
                                <td>US Dollar / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>CNHJPY</td>
                                <td>Chinese Yuan / Japanese Yen</td>
                            </tr>
                            <tr>
                                <td>GBPNOK</td>
                                <td>Great Britain Pound / Norway Krone</td>
                            </tr>
                            <tr>
                                <td>USDMXN</td>
                                <td>US Dollar / Mexican Peso</td>
                            </tr>
                            <tr>
                                <td>DKKNOK</td>
                                <td>Danish Krone / Norwegian Krone</td>
                            </tr>
                            <tr>
                                <td>GBPNZD</td>
                                <td>Great Britain Pound / New Zealand Dollar</td>
                            </tr>
                            <tr>
                                <td>USDNOK</td>
                                <td>US Dollar / Norway Krone</td>
                            </tr>
                            <tr>
                                <td>DKKSEK</td>
                                <td>Danish Krone / Swedish Krona</td>
                            </tr>
                            <tr>
                                <td>GBPPLN</td>
                                <td>Great Britain Pound / Polish Zloty</td>
                            </tr>
                            <tr>
                                <td>USDPLN</td>
                                <td>US Dollar / Polish Zloty</td>
                            </tr>
                            <tr>
                                <td>EURAUD</td>
                                <td>Euro / Australian Dollar</td>
                            </tr>
                            <tr>
                                <td>GBPSEK</td>
                                <td>Great Britan Pound / Swedish Krona</td>
                            </tr>
                            <tr>
                                <td>USDRUB</td>
                                <td>US Dollar / Russian Rouble</td>
                            </tr>
                            <tr>
                                <td>EURCAD</td>
                                <td>Euro / Canadian Dollar</td>
                            </tr>
                            <tr>
                                <td>GBPSGD</td>
                                <td>Great Britain Pound / Singapore Dollar</td>
                            </tr>
                            <tr>
                                <td>USDSEK</td>
                                <td>US Dollar / Swedish Krona</td>
                            </tr>
                            <tr>
                                <td>EURCHF</td>
                                <td>Euro / Swiss Franc</td>
                            </tr>
                            <tr>
                                <td>GBPTRY</td>
                                <td>Great Britain Pound / Turkish Lira</td>
                            </tr>
                            <tr>
                                <td>USDSGD</td>
                                <td>US Dollar / Singapore Dollar</td>
                            </tr>
                            <tr>
                                <td>EURCNH</td>
                                <td>Euro / Chinese Yuan Renminbi</td>
                            </tr>
                            <tr>
                                <td>GBPUSD</td>
                                <td>Great Britain Pound / US Dollar</td>
                            </tr>
                            <tr>
                                <td>USDTHB</td>
                                <td>US Dollar / Thai Baht</td>
                            </tr>
                            <tr>
                                <td>EURCZK</td>
                                <td>Euro / Czech koruna</td>
                            </tr>
                            <tr>
                                <td>GBPZAR</td>
                                <td>Great Britain Pound / South African Rand</td>
                            </tr>
                            <tr>
                                <td>USDTRY</td>
                                <td>US Dollar / Turkish Lira</td>
                            </tr>
                        </table>
                    </div>
                    <div className={toggleState === 2 ? "ind__cont  active" : "ind__cont"}>
                        <div className="inner__crypto">
                            <button
                                className={toggleStateequity === 1 ? "stock__tab active" : "stock__tab"}
                                onClick={() => toggleTabequity(1)}
                            >
                            US Stock Market
                            </button>
                            <button
                                className={toggleStateequity === 2 ? "stock__tab active" : "stock__tab"}
                                onClick={() => toggleTabequity(2)}
                            >
                            EU Stock Market
                            </button>
                            <button
                                className={toggleStateequity === 3 ? "stock__tab active" : "stock__tab"}
                                onClick={() => toggleTabequity(3)}
                            >
                            Asia Stock Market
                            </button>
                        </div>
                        <div className="inner__contt">
                            <div className={toggleStateequity === 1 ? "crypto__cont  active" : "crypto__cont"}>
                                <table>
                                    <tr>
                                        <td>A</td>
                                        <td>Agilent Technologies, Inc.</td>
                                    </tr>
                                    <tr>
                                        <td>AAL</td>
                                        <td>American Airlines Group</td>
                                    </tr>
                                    <tr>
                                        <td>APPL</td>
                                        <td>Apple</td>
                                    </tr>
                                    <tr>
                                        <td>AMZN</td>
                                        <td>Amazon</td>
                                    </tr>
                                    <tr>
                                        <td>BA</td>
                                        <td>Boeing Company</td>
                                    </tr>
                                    <tr>
                                        <td>BAC</td>
                                        <td>Bank of America Corporation</td>
                                    </tr>
                                    <tr>
                                        <td>C</td>
                                        <td>Citigroup</td>
                                    </tr>
                                    <tr>
                                        <td>CSCO</td>
                                        <td>Cisco Systems</td>
                                    </tr>
                                    <tr>
                                        <td>CVX</td>
                                        <td>Chevron Corporation</td>
                                    </tr>
                                    <tr>
                                        <td>DIS</td>
                                        <td>Walt Disney Company</td>
                                    </tr>
                                    <tr>
                                        <td>F</td>
                                        <td>Ford Motor Company</td>
                                    </tr>
                                    <tr>
                                        <td>META</td>
                                        <td>Meta Platforms</td>
                                    </tr>
                                    <tr>
                                        <td>FDX</td>
                                        <td>FedEx Corporation</td>
                                    </tr>
                                    <tr>
                                        <td>GE</td>
                                        <td>General Electric Inc.</td>
                                    </tr>
                                    <tr>
                                        <td>GOOGL</td>
                                        <td>Alphabet Class A</td>
                                    </tr>
                                    <tr>
                                        <td>GS</td>
                                        <td>Goldman Sachs Group Inc</td>
                                    </tr>
                                    <tr>
                                        <td>H</td>
                                        <td>Hyatt Hotels Corporation</td>
                                    </tr>
                                    <tr>
                                        <td>HD</td>
                                        <td>Home Depot</td>
                                    </tr>
                                    <tr>
                                        <td>HPQ</td>
                                        <td>Hewlett-Packard Company</td>
                                    </tr>
                                    <tr>
                                        <td>IBM</td>
                                        <td>International Business Machines</td>
                                    </tr>
                                    <tr>
                                        <td>ING</td>
                                        <td>ING Group</td>
                                    </tr>
                                    <tr>
                                        <td>INTC</td>
                                        <td>Intel</td>
                                    </tr>
                                    <tr>
                                        <td>JNJ</td>
                                        <td>Johnson & Johnson</td>
                                    </tr>
                                    <tr>
                                        <td>JPM</td>
                                        <td>JPMorgan Chase & Co</td>
                                    </tr>
                                    <tr>
                                        <td>KO</td>
                                        <td>Coca-Cola Company</td>
                                    </tr>
                                    <tr>
                                        <td>MA</td>
                                        <td>Mastercard</td>
                                    </tr>
                                    <tr>
                                        <td>MAR</td>
                                        <td>Marriott International</td>
                                    </tr>
                                    <tr>
                                        <td>MCD</td>
                                        <td>McDonald`s</td>
                                    </tr>
                                    <tr>
                                        <td>MMM</td>
                                        <td>3M Company</td>
                                    </tr>
                                    <tr>
                                        <td>MRK</td>
                                        <td>Merck & Company</td>
                                    </tr>
                                    <tr>
                                        <td>MSFT</td>
                                        <td>Microsoft Corporation</td>
                                    </tr>
                                    <tr>
                                        <td>NDAQ</td>
                                        <td>NASDAQ OMX Group</td>
                                    </tr>
                                    <tr>
                                        <td>NFLX</td>
                                        <td>Netflix</td>
                                    </tr>
                                    <tr>
                                        <td>NIKE</td>
                                        <td>Nike</td>
                                    </tr>
                                    <tr>
                                        <td>ORCL</td>
                                        <td>Oracle Corporation</td>
                                    </tr>
                                    <tr>
                                        <td>PEP</td>
                                        <td>Pepsico</td>
                                    </tr>
                                    <tr>
                                        <td>PG</td>
                                        <td>Procter & Gamble Company</td>
                                    </tr>
                                    <tr>
                                        <td>T</td>
                                        <td>AT&T</td>
                                    </tr>
                                    <tr>
                                        <td>TSLA</td>
                                        <td>Tesla</td>
                                    </tr>
                                    <tr>
                                        <td>UAL</td>
                                        <td>United Continental Holdings</td>
                                    </tr>
                                    <tr>
                                        <td>UNH</td>
                                        <td>UnitedHealth Group</td>
                                    </tr>
                                    <tr>
                                        <td>V</td>
                                        <td>Visa</td>
                                    </tr>
                                    <tr>
                                        <td>VZ</td>
                                        <td>Verizon Communications</td>
                                    </tr>
                                    <tr>
                                        <td>WFC</td>
                                        <td>Wells Fargo & Company</td>
                                    </tr>
                                    <tr>
                                        <td>WKHS</td>
                                        <td>Workhorse Group</td>
                                    </tr>
                                    <tr>
                                        <td>WMT</td>
                                        <td>Wal-Mart Stores</td>
                                    </tr>
                                    <tr>
                                        <td>XOM</td>
                                        <td>Exxon Mobil Corporation</td>
                                    </tr>
                                    <tr>
                                        <td>NVDA</td>
                                        <td>Nvidia</td>
                                    </tr>
                                    <tr>
                                        <td>MAT</td>
                                        <td>Mattel, Inc. - Common Stock</td>
                                    </tr>
                                    <tr>
                                        <td>DLPN</td>
                                        <td>Dolphin Entertainment, Inc.</td>
                                    </tr>
                                    <tr>
                                        <td>FNKO</td>
                                        <td>Funko, Inc. - Class A Common Stock</td>
                                    </tr>
                                    <tr>
                                        <td>NET</td>
                                        <td>CloudFlare - Class A</td>
                                    </tr>
                                    <tr>
                                        <td>TKAT</td>
                                        <td>Takung Art Co. Ltd. Common Stock</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={toggleStateequity === 2 ? "crypto__cont  active" : "crypto__cont"}>
                                <table>
                                    <tr>
                                        <td>ADS</td>
                                        <td>Adidas</td>
                                    </tr>
                                    <tr>
                                        <td>AF</td>
                                        <td>Air France-KLM</td>
                                    </tr>
                                    <tr>
                                        <td>AI</td>
                                        <td>Air Liquide</td>
                                    </tr>
                                    <tr>
                                        <td>AIR</td>
                                        <td>Airbus Group</td>
                                    </tr>
                                    <tr>
                                        <td>ALV</td>
                                        <td>Allianz</td>
                                    </tr>
                                    <tr>
                                        <td>BAS</td>
                                        <td>BASF</td>
                                    </tr>
                                    <tr>
                                        <td>BATS</td>
                                        <td>British American Tobacco</td>
                                    </tr>
                                    <tr>
                                        <td>BAYN</td>
                                        <td>Bayer</td>
                                    </tr>
                                    <tr>
                                        <td>BMW</td>
                                        <td>Bayerische Motoren Werke</td>
                                    </tr>
                                    <tr>
                                        <td>BN</td>
                                        <td>Danone</td>
                                    </tr>
                                    <tr>
                                        <td>BNP</td>
                                        <td>BNP Paribas</td>
                                    </tr>
                                    <tr>
                                        <td>CS</td>
                                        <td>AXA</td>
                                    </tr>
                                    <tr>
                                        <td>DGE</td>
                                        <td>Diageo</td>
                                    </tr>
                                    <tr>
                                        <td>DTE</td>
                                        <td>Deutsche Telekom</td>
                                    </tr>
                                    <tr>
                                        <td>EDF</td>
                                        <td>Electricite de France</td>
                                    </tr>
                                    <tr>
                                        <td>GLEN</td>
                                        <td>Glencore</td>
                                    </tr>
                                    <tr>
                                        <td>GSK</td>
                                        <td>GlaxoSmithKline</td>
                                    </tr>
                                    <tr>
                                        <td>IBE</td>
                                        <td>Iberdrola</td>
                                    </tr>
                                    <tr>
                                        <td>LHA</td>
                                        <td>Lufthansa</td>
                                    </tr>
                                    <tr>
                                        <td>MBG</td>
                                        <td>Mercedes-Benz Group AG</td>
                                    </tr>
                                    <tr>
                                        <td>MC</td>
                                        <td>LVMH Moet Hennessy Louis Vuitton</td>
                                    </tr>
                                    <tr>
                                        <td>MSN</td>
                                        <td>Nestle</td>
                                    </tr>
                                    <tr>
                                        <td>NOVN</td>
                                        <td>Novartis</td>
                                    </tr>
                                    <tr>
                                        <td>OR</td>
                                        <td>L`Oreal</td>
                                    </tr>
                                    <tr>
                                        <td>SHEL</td>
                                        <td>Shell PLC</td>
                                    </tr>
                                    <tr>
                                        <td>RIO</td>
                                        <td>Rio Tinto</td>
                                    </tr>
                                    <tr>
                                        <td>ROG</td>
                                        <td>Roche Holding</td>
                                    </tr>
                                    <tr>
                                        <td>SAP</td>
                                        <td>SAP</td>
                                    </tr>
                                    <tr>
                                        <td>SIE</td>
                                        <td>Siemens</td>
                                    </tr>
                                    <tr>
                                        <td>ULVR</td>
                                        <td>Unilever</td>
                                    </tr>
                                    <tr>
                                        <td>VOD</td>
                                        <td>Vodafone Group</td>
                                    </tr>
                                    <tr>
                                        <td>VOW3</td>
                                        <td>Volkswagen</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={toggleStateequity === 3 ? "crypto__cont  active" : "crypto__cont"}>
                                <table>
                                    <tr>
                                        <td>AIA</td>
                                        <td>AIA Group</td>
                                    </tr>
                                    <tr>
                                        <td>Canon</td>
                                        <td>Canon</td>
                                    </tr>
                                    <tr>
                                        <td>China Mobile</td>
                                        <td>China Mobile</td>
                                    </tr>
                                    <tr>
                                        <td>CITIC</td>
                                        <td>CITIC Securities</td>
                                    </tr>
                                    <tr>
                                        <td>CKHutchison</td>
                                        <td>CK Hutchison Holdings</td>
                                    </tr>
                                    <tr>
                                        <td>CNOOC</td>
                                        <td>CNOOC</td>
                                    </tr>
                                    <tr>
                                        <td>Henderson</td>
                                        <td>Henderson Land</td>
                                    </tr>
                                    <tr>
                                        <td>HKBankChina</td>
                                        <td>Bank of China</td>
                                    </tr>
                                    <tr>
                                        <td>Honda</td>
                                        <td>Honda Motor Company</td>
                                    </tr>
                                    <tr>
                                        <td>HSBC</td>
                                        <td>HSBC Holdings</td>
                                    </tr>
                                    <tr>
                                        <td>Ind&ComBank</td>
                                        <td>Industrial and Commercial Bank of China</td>
                                    </tr>
                                    <tr>
                                        <td>JDCom</td>
                                        <td>Jd Com Inc</td>
                                    </tr>
                                    <tr>
                                        <td>JPNTobacco</td>
                                        <td>Japan Tobacco</td>
                                    </tr>
                                    <tr>
                                        <td>KDDI</td>
                                        <td>KDDI</td>
                                    </tr>
                                    <tr>
                                        <td>Keyence</td>
                                        <td>Keyence</td>
                                    </tr>
                                    <tr>
                                        <td>Lenovo</td>
                                        <td>Lenovo Group</td>
                                    </tr>
                                    <tr>
                                        <td>Makita</td>
                                        <td>Makita</td>
                                    </tr>
                                    <tr>
                                        <td>MitsubishiUFJ</td>
                                        <td>Mitsubishi UFJ Financial Group</td>
                                    </tr>
                                    <tr>
                                        <td>Mitsui</td>
                                        <td>Mitsui & Co</td>
                                    </tr>
                                    <tr>
                                        <td>Mizuho</td>
                                        <td>Mizuho Financial Group</td>
                                    </tr>
                                    <tr>
                                        <td>Nissan</td>
                                        <td>Nissan Motor Co</td>
                                    </tr>
                                    <tr>
                                        <td>PICC</td>
                                        <td>PICC Property and Casualty</td>
                                    </tr>
                                    <tr>
                                        <td>Seven&I</td>
                                        <td>Seven & i Holdings Co</td>
                                    </tr>
                                    <tr>
                                        <td>ShenhuaEnrg</td>
                                        <td>China Shenhua Energy</td>
                                    </tr>
                                    <tr>
                                        <td>SHK</td>
                                        <td>SHK Ppt</td>
                                    </tr>
                                    <tr>
                                        <td>Softbank</td>
                                        <td>Softbank</td>
                                    </tr>
                                    <tr>
                                        <td>Sony</td>
                                        <td>Sony</td>
                                    </tr>
                                    <tr>
                                        <td>Sumitomo</td>
                                        <td>SUMITOMO SHOJI KAISHA,LTD.</td>
                                    </tr>
                                    <tr>
                                        <td>Tencent</td>
                                        <td>Tencent Holdings</td>
                                    </tr>
                                    <tr>
                                        <td>Toshiba</td>
                                        <td>Toshiba Corporation</td>
                                    </tr>
                                    <tr>
                                        <td>Toyota</td>
                                        <td>Toyota Motor Corp</td>
                                    </tr>
                                    <tr>
                                        <td>Xiaomi</td>
                                        <td>Xiaomi</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 1 ? "ind__cont  active" : "ind__cont"}>
                        <div className="inner__crypto">
                            <button
                                className={toggleStatecontent === 1 ? "crypto__tab active" : "crypto__tab"}
                                onClick={() => toggleTabcontent(1)}
                            >
                            Bitcoin
                            </button>
                            <button
                                className={toggleStatecontent === 2 ? "crypto__tab active" : "crypto__tab"}
                                onClick={() => toggleTabcontent(2)}
                            >
                            Bitcoin Cash
                            </button>
                            <button
                                className={toggleStatecontent === 3 ? "crypto__tab active" : "crypto__tab"}
                                onClick={() => toggleTabcontent(3)}
                            >
                            Ethereum
                            </button>
                            <button
                                className={toggleStatecontent === 4 ? "crypto__tab active" : "crypto__tab"}
                                onClick={() => toggleTabcontent(4)}
                            >
                            Litecoin
                            </button>
                            <button
                                className={toggleStatecontent === 5 ? "crypto__tab active" : "crypto__tab"}
                                onClick={() => toggleTabcontent(5)}
                            >
                            Ripple
                            </button>
                            <button
                                className={toggleStatecontent === 6 ? "crypto__tab active" : "crypto__tab"}
                                onClick={() => toggleTabcontent(6)}
                            >
                            Binance Coin
                            </button>
                            <button
                                className={toggleStatecontent === 7 ? "crypto__tab active" : "crypto__tab"}
                                onClick={() => toggleTabcontent(7)}
                            >
                            Others
                            </button>
                        </div>
                        <div className="inner__contt">
                            <div className={toggleStatecontent === 1 ? "crypto__cont  active" : "crypto__cont"}>
                                <table>
                                    <tr>
                                        <td>BTCUSD</td>
                                        <td>Bitcoin / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>BTCNZD</td>
                                        <td>Bitcoin / New Zealand Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>BTCEUR</td>
                                        <td>Bitcoin / Euro</td>
                                    </tr>
                                    <tr>
                                        <td>BTCCAD</td>
                                        <td>Bitcoin / Canadian Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>BTCJPY</td>
                                        <td>Bitcoin / Japanese Yen</td>
                                    </tr>
                                    <tr>
                                        <td>BTCETH</td>
                                        <td>Bitcoin / Ethereum</td>
                                    </tr>
                                    <tr>
                                        <td>BTCGBP</td>
                                        <td>Bitcoin / Great Britain Pound</td>
                                    </tr>
                                    <tr>
                                        <td>BTCLTC</td>
                                        <td>Bitcoin / Litecoin</td>
                                    </tr>
                                    <tr>
                                        <td>BTCCHF</td>
                                        <td>Bitcoin / Swiss Franc</td>
                                    </tr>
                                    <tr>
                                        <td>BTCXRP</td>
                                        <td>Bitcoin / Ripple</td>
                                    </tr>
                                    <tr>
                                        <td>BTCAUD</td>
                                        <td>Bitcoin/Australian Dollar</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={toggleStatecontent === 2 ? "crypto__cont  active" : "crypto__cont"}>
                                <table>
                                    <tr>
                                        <td>BCHUSD</td>
                                        <td>Bitcoin Cash / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>BCHEUR</td>
                                        <td>Bitcoin Cash / Euro</td>
                                    </tr>
                                    <tr>
                                        <td>BCHJPY</td>
                                        <td>Bitcoin Cash / Japanese Yen</td>
                                    </tr>
                                    <tr>
                                        <td>BCHGBP</td>
                                        <td>Bitcoin Cash / Great Britain Pound</td>
                                    </tr>
                                    <tr>
                                        <td>BCHAUD</td>
                                        <td>Bitcoin Cash / Australian Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>BCHCAD</td>
                                        <td>Bitcoin Cash / Canadian Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>BCHNZD</td>
                                        <td>Bitcoin Cash / New Zealand Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>BCHBTC</td>
                                        <td>Bitcoin Cash / Bitcoin</td>
                                    </tr>
                                    <tr>
                                        <td>BCHETH</td>
                                        <td>Bitcoin Cash / Ethereum</td>
                                    </tr>
                                    <tr>
                                        <td>BCHLTC</td>
                                        <td>Bitcoin Cash / Litecoin</td>
                                    </tr>
                                    <tr>
                                        <td>BTCXRP</td>
                                        <td>Bitcoin Cash / Ripple</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={toggleStatecontent === 3 ? "crypto__cont  active" : "crypto__cont"}>
                                <table>
                                    <tr>
                                        <td>ETHUSD</td>
                                        <td>Ethereum / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ETHEUR</td>
                                        <td>Ethereum / Euro</td>
                                    </tr>
                                    <tr>
                                        <td>ETHJPY</td>
                                        <td>Ethereum / Japanese Yen</td>
                                    </tr>
                                    <tr>
                                        <td>ETHGBP</td>
                                        <td>Ethereum / Great Britain Pound</td>
                                    </tr>
                                    <tr>
                                        <td>ETHAUD</td>
                                        <td>Ethereum / Australian Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ETHCAD</td>
                                        <td>Ethereum / Canadian Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ETHNZD</td>
                                        <td>Ethereum / New Zealand Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ETHBTC</td>
                                        <td>Ethereum / Bitcoin</td>
                                    </tr>
                                    <tr>
                                        <td>ETHBCH</td>
                                        <td>Ethereum / Bitcoin Cash</td>
                                    </tr>
                                    <tr>
                                        <td>ETHLTC</td>
                                        <td>Ethereum / Litecoin</td>
                                    </tr>
                                    <tr>
                                        <td>ETHXRP</td>
                                        <td>Ethereum / Ripple</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={toggleStatecontent === 4 ? "crypto__cont  active" : "crypto__cont"}>
                                <table>
                                    <tr>
                                        <td>LTCUSD</td>
                                        <td>Litecoin / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>LTCEUR</td>
                                        <td>Litecoin / Euro</td>
                                    </tr>
                                    <tr>
                                        <td>LTCJPY</td>
                                        <td>Litecoin / Japanese Yen</td>
                                    </tr>
                                    <tr>
                                        <td>LTCGBP</td>
                                        <td>Litecoin / Great Britain Pound</td>
                                    </tr>
                                    <tr>
                                        <td>LTCAUD</td>
                                        <td>Litecoin / Australian Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>LTCCAD</td>
                                        <td>Litecoin / Canadian Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>LTCNZD</td>
                                        <td>Litecoin / New Zealand Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>LTCBTC</td>
                                        <td>Litecoin / Bitcoin</td>
                                    </tr>
                                    <tr>
                                        <td>LTCBCH</td>
                                        <td>Litecoin / Bitcoin Cash</td>
                                    </tr>
                                    <tr>
                                        <td>LTCETH</td>
                                        <td>Litecoin / Ethereum</td>
                                    </tr>
                                    <tr>
                                        <td>LTCXRP</td>
                                        <td>Litecoin / Ripple</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={toggleStatecontent === 5 ? "crypto__cont  active" : "crypto__cont"}>
                                <table>
                                    <tr>
                                        <td>XRPUSD</td>
                                        <td>Ripple / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>XRPEUR</td>
                                        <td>Ripple / Euro</td>
                                    </tr>
                                    <tr>
                                        <td>XRPJPY</td>
                                        <td>Ripple / Japanese Yen</td>
                                    </tr>
                                    <tr>
                                        <td>XRPGBP</td>
                                        <td>Ripple / Great Britain Pound</td>
                                    </tr>
                                    <tr>
                                        <td>XRPAUD</td>
                                        <td>Ripple / Australian Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>XRPCAD</td>
                                        <td>Ripple / Canadian Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>XRPNZD</td>
                                        <td>Ripple / New Zealand Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>XRPBTC</td>
                                        <td>Ripple / Bitcoin</td>
                                    </tr>
                                    <tr>
                                        <td>XRPBCH</td>
                                        <td>Ripple / Bitcoin Cash</td>
                                    </tr>
                                    <tr>
                                        <td>XRPETH</td>
                                        <td>Ripple / Ethereum</td>
                                    </tr>
                                    <tr>
                                        <td>XRPLTC</td>
                                        <td>Ripple / Litecoin</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={toggleStatecontent === 6 ? "crypto__cont  active" : "crypto__cont"}>
                                <table>
                                    <tr>
                                        <td>BNBUSD</td>
                                        <td>Binance Coin / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>BNBEUR</td>
                                        <td>Binance Coin / Euro</td>
                                    </tr>
                                    <tr>
                                        <td>BNBJPY</td>
                                        <td>Binance Coin / Japanese Yen</td>
                                    </tr>
                                    <tr>
                                        <td>BNBGBP</td>
                                        <td>Binance Coin / Great Britain Pound</td>
                                    </tr>
                                    <tr>
                                        <td>BNBAUD</td>
                                        <td>Binance Coin / Australian Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>BNBCAD</td>
                                        <td>Binance Coin / Canadian Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>BNBNZD</td>
                                        <td>Binance Coin / New Zealand Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>BNBBTC</td>
                                        <td>Binance Coin / Bitcoin</td>
                                    </tr>
                                    <tr>
                                        <td>BNBBCH</td>
                                        <td>Binance Coin / Bitcoin Cash</td>
                                    </tr>
                                    <tr>
                                        <td>BNBETH</td>
                                        <td>Binance Coin / Ethereum</td>
                                    </tr>
                                    <tr>
                                        <td>BNBLTC</td>
                                        <td>Binance Coin / Litecoin</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={toggleStatecontent === 7 ? "crypto__cont oth__curre  active" : "crypto__cont oth__curre"}>
                                <table>
                                    <tr>
                                        <td>BATUSD</td>
                                        <td>Basic Attention Token / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>SUSUSD</td>
                                        <td>Sushi / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>QTMUSD</td>
                                        <td>Qtum / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>DSHUSD</td>
                                        <td>DASH / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>AXSUSD</td>
                                        <td>Axie Infinity / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>SNXUSD</td>
                                        <td>Synthetix / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>EOSUSD</td>
                                        <td>EOS / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>CRVUSD</td>
                                        <td>Curve / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>EGLUSD</td>
                                        <td>Elrond / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ETCUSD</td>
                                        <td>Ethereum Classic / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ONEUSD</td>
                                        <td>Harmony / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>SKLUSD</td>
                                        <td>Skale network / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>IOTUSD</td>
                                        <td>IOTA / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>LRCUSD</td>
                                        <td>Loopring / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ANKUSD</td>
                                        <td>Ankr / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>NEOUSD</td>
                                        <td>Neo / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>INCUSD</td>
                                        <td>1inch / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>SXPUSD</td>
                                        <td>SXP / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>OMGUSD</td>
                                        <td>OmiseGo / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>XTZUSD</td>
                                        <td>Tezos / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>LPTUSD</td>
                                        <td>Livepeer / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>TRXUSD</td>
                                        <td>TRON / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>APEUSD</td>
                                        <td>ApeCoin / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>IOSUSD</td>
                                        <td>IOST / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>XLMUSD</td>
                                        <td>Stellar Lumens / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>BARUSD</td>
                                        <td>Hedera / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>RVNUSD</td>
                                        <td>Ravencoin / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>XMRUSD</td>
                                        <td>Monero / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>MANUSD</td>
                                        <td>Decentraland / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>WOOUSD</td>
                                        <td>WOO Network / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ZECUSD</td>
                                        <td>ZCash / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>TETUSD</td>
                                        <td>Theta / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ONTUSD</td>
                                        <td>Ontology / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ADA</td>
                                        <td>Cardano / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>FTMUSD</td>
                                        <td>Fantom / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ZENUSD</td>
                                        <td>Horizen / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>DOGUSD</td>
                                        <td>Dogecoin / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>AAVUSD</td>
                                        <td>AAVE / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>IMXUSD</td>
                                        <td>Immutable X / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>SOLUSD</td>
                                        <td>Solana / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>FLWUSD</td>
                                        <td>FLOW / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>STOUSD</td>
                                        <td>Storj / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>DOTUSD</td>
                                        <td>Polkadot / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>GRTUSD</td>
                                        <td>The Graph / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>RENUSD</td>
                                        <td>Ren / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>LNKUSD</td>
                                        <td>Chainlink / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>KSMUSD</td>
                                        <td>Kusama / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>CELUSD</td>
                                        <td>Celer Network / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>MTCUSD</td>
                                        <td>Polygon / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ZILUSD</td>
                                        <td>Zilliqa / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>DYDUSD</td>
                                        <td>DYDX / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>UNIUSD</td>
                                        <td>Uniswap / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>GALUSD</td>
                                        <td>GALA / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>CNEUSD</td>
                                        <td>C98 / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ALGUSD</td>
                                        <td>Algorand / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>CEOUSD</td>
                                        <td>Celo / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>PEPUSD</td>
                                        <td>ConstitutionDAO / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>FILUSD</td>
                                        <td>Filecoin / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>CHZUSD</td>
                                        <td>Chiliz / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>CHRUSD</td>
                                        <td>Chromia / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>MKRUSD</td>
                                        <td>Maker / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ENJUSD</td>
                                        <td>Enjin Coin / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>COTUSD</td>
                                        <td>COTI / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>SHBUSD</td>
                                        <td>SHIBA / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>KAVUSD</td>
                                        <td>Kava / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ALIUSD</td>
                                        <td>MyNeighborAlice / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>AVAUSD</td>
                                        <td>Avalanche / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ARWUSD</td>
                                        <td>Arweave / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>CTSUSD</td>
                                        <td>Cartesi / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>VECUSD</td>
                                        <td>VeChain / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>KNCUSD</td>
                                        <td>Kyber / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>RSRUSD</td>
                                        <td>Reserve Rights / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>NERUSD</td>
                                        <td>NEAR protocol / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>COMPUSD</td>
                                        <td>Compound / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ZRXUSD</td>
                                        <td>0x / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>ATMUSD</td>
                                        <td>Cosmos / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>XEMUSD</td>
                                        <td>NEM / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>GMTUSD</td>
                                        <td>STEPN / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>SANUSD</td>
                                        <td>The Sandbox / US Dollar</td>
                                    </tr>
                                    <tr>
                                        <td>YFIUSD</td>
                                        <td>Yearn Finance / US Dollar</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
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
                                <td>Gold / Great Britain Pound</td>
                            </tr>
                            <tr>
                                <td>XAU/USD</td>
                                <td>Gold / US Dollar</td>
                            </tr>
                            <tr>
                                <td>XPD/USD</td>
                                <td>Palladium / US Dollar</td>
                            </tr>
                            <tr>
                                <td>XPT/USD</td>
                                <td>Platinum / US Dollar</td>
                            </tr>
                            <tr>
                                <td>CUC/USD</td>
                                <td>Copper / US Dollar</td>
                            </tr>
                            
                        </table>
                    </div>
                    <div className={toggleState === 5 ? "ind__cont  active" : "ind__cont"}>
                        <table>
                            <tr>
                                <td>GLD</td>
                                <td>SPDR Gold Trust</td>
                            </tr>
                            <tr>
                                <td>VOO</td>
                                <td>Vanguard S&P500</td>
                            </tr>
                            <tr>
                                <td>IWM</td>
                                <td>iShares Russell 2000</td>
                            </tr>
                            <tr>
                                <td>QQQ</td>
                                <td>Invesco QQQ (Power Shares Trust, Series)</td>
                            </tr>
                            <tr>
                                <td>VEA</td>
                                <td>Vanguard FTSE DM</td>
                            </tr>
                            <tr>
                                <td>SCHD</td>
                                <td>Schwab US Dividend equity</td>
                            </tr>
                            <tr>
                                <td>USD</td>
                                <td>United States Oil Fund</td>
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