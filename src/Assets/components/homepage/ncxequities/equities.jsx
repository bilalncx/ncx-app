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
import { ReactComponent as EURUSD } from '../../../images/EURUSD.svg';
import { ReactComponent as GBPUSD } from '../../../images/GBPUSD.svg';
import USDCAD from '../../../images/USDCAD.png';
import { ReactComponent as USDCHF } from '../../../images/USDCHF.svg';
import { ReactComponent as EURGBP } from '../../../images/EURGBP.svg';
import AUDUSD from '../../../images/AUDUSD.png';
import USDCNH from '../../../images/USDCNH.png';
import { ReactComponent as EURCAD } from '../../../images/EURCAD.svg';
import GBPAUD from '../../../images/GBPAUD.png';
import { ReactComponent as EURJPY } from '../../../images/EURJPY.svg';
import GBPCAD from '../../../images/GBPCAD.png';
import NZDUSD from '../../../images/NZDUSD.png';
import USDTRY from '../../../images/USDTRY.png';
import CADJPY from '../../../images/CADJPY.png';
import GBPCHF from '../../../images/GBPCHF.png';
import NCXAppNewSection from '../NCXapp/ncxapp';



function HomeNCXEquitiesSection(){
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
                        {/* <AnimationOnScroll animateIn="animate__fadeIn">
                            <Button href="#">View All</Button>
                        </AnimationOnScroll> */}
                    </div>
                </div>
                <div id="equities-tabs-sect">
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
            </div>

            {/* <div className="container">
                <div className="row equitiesrow indices">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-equities">
                                < img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                <p>EFT's</p>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <p className="equity-text">Trade world markets with NCX superior execution</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col view-all">
                    </div>
                </div>
                <div id="equities-tabs-sect">
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
            </div> */}

            <NCXAppNewSection />

            <div className="container">
                <div className="row equitiesrow currencies">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-equities">
                                < img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                <p>Currencies</p>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <p className="equity-text">Trade world markets with NCX superior execution</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col view-all">
                        {/* <AnimationOnScroll animateIn="animate__fadeIn">
                            <Button href="#">View All</Button>
                        </AnimationOnScroll> */}
                    </div>
                </div>
                <div id="equities-tabs-sect">
                    <div className="equitytable row">
                        <div className="col green">
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <EURUSD />
                                    <div className="imgtxt">
                                        <h3>EURUSD</h3>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>1.07533</h3>
                                        <p>(0.30%)</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <GBPUSD />
                                    <div className="imgtxt">
                                        <h3>GBPUSD</h3>
                                        {/* <p>France 40 Index</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>1.20523</h3>
                                        <p>(0.17%)</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <img className="picimg" src={USDCAD} alt="USDCAD" />
                                    <div className="imgtxt">
                                        <h3>USDCAD</h3>
                                        {/* <p>UK 100 Index</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>1.34412</h3>
                                        <p>(0.20%)</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <USDCHF />
                                    <div className="imgtxt">
                                        <h3>USDCHF</h3>
                                        {/* <p>Switzerland 20 Index</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>0.92697</h3>
                                        <p>(0.06%)</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <EURGBP />
                                    <div className="imgtxt">
                                        <h3>EURGBP</h3>
                                        {/* <p>EURO 50 Index</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>0.89156</h3>
                                        <p>(0.47%)</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col green">
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <img className="picimg" src={AUDUSD} alt="AUDUSD" />
                                    <div className="imgtxt">
                                        <h3>AUDUSD</h3>
                                        {/* <p>Spain 35 Index</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>0.68895</h3>
                                        <p>(0.21%)</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <img className="picimg" src={USDCNH} alt="USDCNH" />
                                    <div className="imgtxt">
                                        <h3>USDCNH</h3>
                                        {/* <p>US 30 Index</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>0.79114</h3>
                                        <p>(0.29%)</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <EURCAD />
                                    <div className="imgtxt">
                                        <h3>EURCAD</h3>
                                        {/* <p>US 30 Index</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>1.44551</h3>
                                        <p>(0.07%)</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <img className="picimg" src={GBPAUD} alt="GBPAUD" />
                                    <div className="imgtxt">
                                        <h3>GBPAUD</h3>
                                        {/* <p>US 500 Index</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>1.74990</h3>
                                        <p>(0.47%)</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <EURJPY />
                                    <div className="imgtxt">
                                        <h3>EURJPY</h3>
                                        {/* <p>US 100 Index</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>142.89</h3>
                                        <p>(0.27%)</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div id="currenciesss" className="equitytable2 row">
                        <div className="col empty">
                            <div className="emptyboxtxt">
                                <p>Community Choice</p>
                                <h2>Show me the most popular <span>Currencies</span></h2>
                            </div>
                            <div className="view-all">
                                <Button href="#">View All</Button>
                            </div>
                        </div>
                        <div className="col black">
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <img className="picimg" src={GBPCAD} alt="GBPCAD" />
                                    <div className="imgtxt">
                                        <h3>GBPCAD</h3>
                                        {/* <p>Japan 225 Index</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>1.6210</h3>
                                        <p>(0.43%)</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <img className="picimg" src={NZDUSD} alt="NZDUSD" />
                                    <div className="imgtxt">
                                        <h3>NZDUSD</h3>
                                        {/* <p>Hong Kong 50 Index</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>0.630011</h3>
                                        <p>(0.23%)</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <img className="picimg" src={USDTRY} alt="USDTRY" />
                                    <div className="imgtxt">
                                        <h3>USDTRY</h3>
                                        {/* <p>Australia 200 Index</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>18.82351</h3>
                                        <p>(0.58%)</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <img className="picimg" src={CADJPY} alt="CADJPY" />
                                    <div className="imgtxt">
                                        <h3>CADJPY</h3>
                                        {/* <p>China 50 Index (USD)</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>98.502</h3>
                                        <p>(0.33%)</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://ncx.cx" className="tableshadow row">
                                <div className="col">
                                    <img className="picimg" src={GBPCHF} alt="GBPCHF" />
                                    <div className="imgtxt">
                                        <h3>GBPCHF</h3>
                                        {/* <p>China 50 Index (USD)</p> */}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="nmbrtxt">
                                        <h3>1.11765</h3>
                                        <p>(0.21%)</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeNCXEquitiesSection;