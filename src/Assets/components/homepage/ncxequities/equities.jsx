import {React, useState} from "react";
import './equities.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXLogo from '../../../images/ncx-black-logo.svg';
import Button  from "@mui/material/Button";
import { ReactComponent as Tesla } from '../../../images/ncx-tesla.svg';
import { ReactComponent as Amazon } from '../../../images/ncx-amazon.svg';
import { ReactComponent as Apple } from '../../../images/ncx-apple.svg';
import { ReactComponent as Meta } from '../../../images/ncx-meta.svg';
import { ReactComponent as Microsoft } from '../../../images/ncx-microsoft.svg';
import { ReactComponent as Nike } from '../../../images/ncx-nike.svg';
import { ReactComponent as CityGroup } from '../../../images/ncx-citigroup.svg';
import { ReactComponent as NIO } from '../../../images/ncx-nio.svg';
import { ReactComponent as GOOG } from '../../../images/ncx-goog.svg';
import { ReactComponent as NVDA } from '../../../images/ncx-nividia.svg';
import { ReactComponent as Goldman } from '../../../images/ncx-goldman.svg';
import { ReactComponent as VISA } from '../../../images/ncx-visa.svg';
import { ReactComponent as Netflix } from '../../../images/ncx-netflix.svg';
import { ReactComponent as XOM } from '../../../images/ncx-xom.svg';
import { ReactComponent as VOK } from '../../../images/ncx-volks.svg';
import { ReactComponent as German } from '../../../images/ncx-german.svg';
import { ReactComponent as France } from '../../../images/ncx-france.svg';
import { ReactComponent as NCXUK } from '../../../images/ncx-uk.svg';
import { ReactComponent as Switzerland } from '../../../images/ncx-switzerland.svg';
import { ReactComponent as EURO50 } from '../../../images/ncx-EURO.svg';
import { ReactComponent as Spain } from '../../../images/ncx-spain.svg';
import { ReactComponent as DJIUSD } from '../../../images/ncx-dji.svg';
import { ReactComponent as SPXUSD } from '../../../images/ncx-SPXUSD.svg';
import { ReactComponent as NDXUSD } from '../../../images/ncx-NDX.svg';
import { ReactComponent as Japan } from '../../../images/ncx-Japan.svg';
import { ReactComponent as Hongkong } from '../../../images/ncx-HongKong.svg';
import { ReactComponent as Australia } from '../../../images/ncx-Australia.svg';
import { ReactComponent as China } from '../../../images/ncx-china.svg';


function HomeNCXEquitiesSection(){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div className="ncxequities">
            <div className="container">
                <div className="row equitiesrow">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-equities">
                                < img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                <p>Equities</p>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <p className="equity-text">Trade world markets with NCX superior execution</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col view-all">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <Button href="#">View All</Button>
                        </AnimationOnScroll>
                    </div>
                </div>

                <div id="equities-tabs-sect">
                    <div className="buttons-tab">
                        <button
                            className={toggleState === 1 ? "equity-tabs active" : "equity-tabs"}
                            onClick={() => toggleTab(1)}
                        >
                        Stocks
                        </button>
                        <button
                            className={toggleState === 2 ? "equity-tabs active" : "equity-tabs"}
                            onClick={() => toggleTab(2)}
                        >
                        Indices
                        </button>
                        <button
                            className={toggleState === 3 ? "equity-tabs active" : "equity-tabs"}
                            onClick={() => toggleTab(3)}
                        >
                        Currencies
                        </button>
                    </div>
                    <div className={toggleState === 1 ? "equity-content  active" : "equity-content"}>
                        <div className="equitytable row">
                            <div className="col green">
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Tesla />
                                        <div className="imgtxt">
                                            <h3>TSLA</h3>
                                            <p>Tesla Motors, Inc.</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>122.22</h3>
                                            <p>(0.94%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Amazon />
                                        <div className="imgtxt">
                                            <h3>AMZN</h3>
                                            <p>Amazon.com Inc</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>97.96</h3>
                                            <p>(2.99%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Apple />
                                        <div className="imgtxt">
                                            <h3>AAPL</h3>
                                            <p>Apple</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>134.51</h3>
                                            <p>(1.01%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Meta />
                                        <div className="imgtxt">
                                            <h3>META</h3>
                                            <p>Meta Platforms Inc</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>136.70</h3>
                                            <p>(0.20%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Microsoft />
                                        <div className="imgtxt">
                                            <h3>MSFT</h3>
                                            <p>Microsoft</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>238.78</h3>
                                            <p>(0.30%)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col red">
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Nike />
                                        <div className="imgtxt">
                                            <h3>NIKE</h3>
                                            <p>NIKE</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>136.70</h3>
                                            <p>(0.20%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <CityGroup />
                                        <div className="imgtxt">
                                            <h3>Citygroup</h3>
                                            <p>Citygroup</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>238.78</h3>
                                            <p>(0.30%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <NIO />
                                        <div className="imgtxt">
                                            <h3>NIO</h3>
                                            <p>Nio Inc.-ADR</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>11.77</h3>
                                            <p>(0.08%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <GOOG />
                                        <div className="imgtxt">
                                            <h3>GOOG</h3>
                                            <p>Alphabet</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>92.62</h3>
                                            <p>(0.97%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <NVDA />
                                        <div className="imgtxt">
                                            <h3>NVDA</h3>
                                            <p>NIVIDIA Corporation</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>168.66</h3>
                                            <p>(2.35%)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="equitytable2 row">
                            <div className="col empty">
                                    <div className="emptyboxtxt">
                                        <p>Community Choice</p>
                                        <h2>Show me the most popular <span>Stocks</span></h2>
                                    </div>
                                    <div className="view-all">
                                        <Button href="#">View All</Button>
                                    </div>
                            </div>
                            <div className="col black">
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Goldman />
                                        <div className="imgtxt">
                                            <h3>GLS</h3>
                                            <p>Goldman Sachs Group Inc</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>122.22</h3>
                                            <p>(0.94%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <VISA />
                                        <div className="imgtxt">
                                            <h3>V</h3>
                                            <p>Visa</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>97.96</h3>
                                            <p>(2.99%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Netflix />
                                        <div className="imgtxt">
                                            <h3>NFLX</h3>
                                            <p>Netflix</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>134.51</h3>
                                            <p>(1.01%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <XOM />
                                        <div className="imgtxt">
                                            <h3>XOM</h3>
                                            <p>Exxon Mobil Corporation</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>136.70</h3>
                                            <p>(0.20%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <VOK />
                                        <div className="imgtxt">
                                            <h3>VOW3</h3>
                                            <p>Volkswagen</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>238.78</h3>
                                            <p>(0.30%)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "equity-content  active" : "equity-content"}>
                        <div className="equitytable row">
                            <div className="col green">
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <German />
                                        <div className="imgtxt">
                                            <h3>DAXEUR / FDAX</h3>
                                            <p>Germany 40 Index</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>1534.96</h3>
                                            <p>(0.43%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <France />
                                        <div className="imgtxt">
                                            <h3>F40EUR / CAC</h3>
                                            <p>France 40 Index</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>7140.85</h3>
                                            <p>(0.92%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <NCXUK />
                                        <div className="imgtxt">
                                            <h3>FTSGBP / FTSE</h3>
                                            <p>UK 100 Index</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>7849.31</h3>
                                            <p>(0.61%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Switzerland />
                                        <div className="imgtxt">
                                            <h3>SMICHF</h3>
                                            <p>Switzerland 20 Index</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>45.06</h3>
                                            <p>(0.44%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <EURO50 />
                                        <div className="imgtxt">
                                            <h3>ESXEUR</h3>
                                            <p>EURO 50 Index</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>4205.34</h3>
                                            <p>(0.78%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Spain />
                                        <div className="imgtxt">
                                            <h3>IBXEUR</h3>
                                            <p>Spain 35 Index</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>9160.10</h3>
                                            <p>(0.20%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <DJIUSD />
                                        <div className="imgtxt">
                                            <h3>DJIUSD</h3>
                                            <p>US 30 Index</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>33762.45</h3>
                                            <p>(0.16%)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col green">
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <SPXUSD />
                                        <div className="imgtxt">
                                            <h3>SPXUSD</h3>
                                            <p>US 500 Index</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>4110.26</h3>
                                            <p>(0.24%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <NDXUSD />
                                        <div className="imgtxt">
                                            <h3>NDXUSD</h3>
                                            <p>US 100 Index</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>13.88</h3>
                                            <p>(0.36%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Japan />
                                        <div className="imgtxt">
                                            <h3>NIKJPY / NIK</h3>
                                            <p>Japan 225 Index</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>132.033</h3>
                                            <p>(0.24%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Hongkong />
                                        <div className="imgtxt">
                                            <h3>HSIHKD</h3>
                                            <p>Hong Kong 50 Index</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>21151.60</h3>
                                            <p>(1.53%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <Australia />
                                        <div className="imgtxt">
                                            <h3>ASXAUD</h3>
                                            <p>Australia 200 Index</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>7541.91</h3>
                                            <p>(0.22%)</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://ncx.cx" className="tableshadow row">
                                    <div className="col">
                                        <China />
                                        <div className="imgtxt">
                                            <h3>XINUSD</h3>
                                            <p>China 50 Index (USD)</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="nmbrtxt">
                                            <h3>13445.00</h3>
                                            <p>(1.19%)</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeNCXEquitiesSection;