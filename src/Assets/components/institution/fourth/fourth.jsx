import React from "react";
import '../third/third.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../../homepage/NCXOTC/otc.css';
import { ReactComponent as OTC1 } from '../../../images/ncx-otc1.svg';
import { ReactComponent as OTC2 } from '../../../images/ncx-otc2.svg';
import { ReactComponent as OTC3 } from '../../../images/ncx-otc3.svg';
import { ReactComponent as OTC4 } from '../../../images/ncx-otc4.svg';
import { ReactComponent as OTC5 } from '../../../images/ncx-otc5.svg';
import { ReactComponent as OTC6 } from '../../../images/ncx-otc6.svg';
import NCXLogo from '../../../images/ncx-black-logo.svg';

function NCXhomepageOTCSection(){
    return(
        <div id="solutions_institutional" className="ncxotcsection">
            <div className="container">
                <div className="otclogo row">
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="ncx-otc">
                            <img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo" />
                            <p className="insta-head">Institutional</p>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll className="advanta_our" animateIn="animate__fadeIn">
                        <h2>Our Advantages</h2>
                    </AnimationOnScroll>
                </div>
                <div className="OTCsect row advantages1">
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>Compliance</h2>
                                <p>NCX commits to safety and compliance. Our extensive compliance program is designed to be on par with the world’s leading regulatory and industry best practices.  NCX’s risk-based and multi-layer control system has proven to be highly effective in AML and CFT.</p>
                            </div>
                            <div className="otc-image">
                                <OTC4 />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>Comprehensive</h2>
                                <p>NCX understands the importance of blockchain asset security and values user’s asset security as the top priority when comes to platform development. We always strive to provide and explore the safest and most comprehensive financial solutions.</p>
                            </div>
                            <div className="otc-image">
                                <OTC5 />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>Risk Management</h2>
                                <p>NCX  offers a convenient GUI interface to monitor and analyze the risk exposures, PnL and all trading activities in real-time, based on data-driven intelligent technology, from one centralized environment. Comprehensive risk management and risk analytical insights, risk alerts, complex simulations and stress-testing on trading data with forecasting capabilities, hedging and other recommendations for actions.</p>
                            </div>
                            <div className="otc-image">
                                <OTC6 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OTCsect second row advantages2">
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otctxt">
                                    <h2>VIP Users can create up to 1,000 sub-accounts</h2>
                                    <p>You can create multiple sub-accounts to invest and manage digital assets with your master account</p>
                                </div>
                                <div className="otc-image">
                                    <OTC3 />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otctxt">
                                    <h2>Professional</h2>
                                    <p>Our core value is to build strong relationships with our clients. We facilitate our clients to trade cryptocurrency products, optimize trading strategy, manage risk and access liquidity.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC2 />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otctxt">
                                    <h2>API & SDK & COLO Service</h2>
                                    <p>Access to high frequency and low latency trading services with widely used programming languages.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC1 />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
                <div className="OTCsect third row advantages3">
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otctxt">
                                    <h2>Derivatives Market</h2>
                                    <p>NCX offers over 500 Derivatives Trading Pairs, from Cryptocurrencies to Stocks, Currencies and Commodities, alongside</p>
                                </div>
                                <div className="otc-image">
                                    <OTC3 />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otctxt">
                                    <h2>Spot Market</h2>
                                    <p>Spot trade the trending crypto projects</p>
                                </div>
                                <div className="otc-image">
                                    <OTC2 />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="OTCsect row mobile one mbl_advag1">
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>Compliance</h2>
                                <p>NCX commits to safety and compliance. Our extensive compliance program is designed to be on par with the world’s leading regulatory and industry best practices.  NCX’s risk-based and multi-layer control system has proven to be highly effective in AML and CFT.</p>
                            </div>
                            <div className="otc-image">
                                <OTC4 />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>Comprehensive</h2>
                                <p>NCX understands the importance of blockchain asset security and values user’s asset security as the top priority when comes to platform development. We always strive to provide and explore the safest and most comprehensive financial solutions.</p>
                            </div>
                            <div className="otc-image">
                                <OTC5 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OTCsect row mobile two mbl_advag2">
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>Risk Management</h2>
                                <p>NCX  offers a convenient GUI interface to monitor and analyze the risk exposures, PnL and all trading activities in real-time, based on data-driven intelligent technology, from one centralized environment. Comprehensive risk management and risk analytical insights, risk alerts, complex simulations and stress-testing on trading data with forecasting capabilities, hedging and other recommendations for actions.</p>
                            </div>
                            <div className="otc-image">
                                <OTC6 />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otctxt">
                                    <h2>VIP Users can create up to 1,000 sub-accounts</h2>
                                    <p>You can create multiple sub-accounts to invest and manage digital assets with your master account</p>
                                </div>
                                <div className="otc-image">
                                    <OTC3 />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
                <div className="OTCsect row mobile three mbl_advag3">
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otctxt">
                                    <h2>Professional</h2>
                                    <p>Our core value is to build strong relationships with our clients. We facilitate our clients to trade cryptocurrency products, optimize trading strategy, manage risk and access liquidity.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC2 />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otctxt">
                                    <h2>API & SDK & COLO Service</h2>
                                    <p>Access to high frequency and low latency trading services with widely used programming languages.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC1 />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
                <div className="OTCsect row mobile four mbl_advag4">
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otctxt">
                                    <h2>Derivatives Market</h2>
                                    <p>NCX offers over 500 Derivatives Trading Pairs, from Cryptocurrencies to Stocks, Currencies and Commodities, alongside</p>
                                </div>
                                <div className="otc-image">
                                    <OTC3 />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otctxt">
                                    <h2>Spot Market</h2>
                                    <p>Spot trade the trending crypto projects</p>
                                </div>
                                <div className="otc-image">
                                    <OTC2 />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXhomepageOTCSection;