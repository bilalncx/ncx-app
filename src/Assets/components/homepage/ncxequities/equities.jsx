import React from "react";
import './equities.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {ReactComponent as NCXLogo} from '../../../images/NCX-logo.svg';
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

function HomeNCXEquitiesSection(){
    return(
        <div className="ncxequities">
            <div className="container">
                <div className="row equitiesrow">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-equities">
                                <NCXLogo />
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
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="emptyboxtxt">
                                <p>Community Choice</p>
                                <h2>Show me the most popular <span>Stocks</span></h2>
                            </div>
                            <div className="view-all">
                                <Button href="#">View All</Button>
                            </div>
                        </AnimationOnScroll>
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
    )
}
export default HomeNCXEquitiesSection;