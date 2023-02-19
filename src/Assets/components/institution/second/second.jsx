import React from "react";
import './second.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../../homepage/NCXOTC/otc.css';
import { ReactComponent as OTC1 } from '../../../images/ncx-otc1.svg';
import { ReactComponent as OTC2 } from '../../../images/ncx-otc2.svg';
import { ReactComponent as OTC3 } from '../../../images/ncx-otc3.svg';
import { ReactComponent as OTC4 } from '../../../images/ncx-otc4.svg';
import { ReactComponent as OTC5 } from '../../../images/ncx-otc5.svg';
import { ReactComponent as OTC6 } from '../../../images/ncx-otc6.svg';

function NCXhomepageOTCSection(){
    return(
        <div id="solutions_institutional" className="ncxotcsection">
            <div className="container">
                <div className="otclogo row">
                    <div className="ncx-otc solutions">
                        <p>Solutions for Institutional Clients</p>
                    </div>
                </div>
                <div className="OTCsect row">
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>Liquidity Program</h2>
                                <p>Designed for market makers to enjoy attractive rebates or lower fees from trading in spot and futures markets</p>
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
                                <h2>Broker Program</h2>
                                <p>CBrokers can utilize our API products to manage sub-accounts and commissions</p>
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
                                <h2>Access to DeFi</h2>
                                <p>Compliance and AML policies and regulations are limiting Institutions from certain Decentralised Finance products, NCX acts as a professional licensed entity allowing Institutions full access to DeFi without risk of breaching the regulatory framework.</p>
                            </div>
                            <div className="otc-image">
                                <OTC6 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OTCsect second row">
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otctxt">
                                    <h2>OTC and Execution Services</h2>
                                    <p>NCX offers private and personalized services to institutions and corporate entities to access deeper liquidity to fill large orders.</p>
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
                                    <h2>Custody and Assets Management</h2>
                                    <p>NCX offers digital asset custody and asset management service for institutions to store and manage their digital assets on a professional platform.</p>
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
                                    <h2>Structured Product</h2>
                                    <p>NCX structured products are crypto investments that provide predictable and superior returns fully customized to meet your specific objectives such as yield enhancement, capital protection, and leverage.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC1 />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
                <div className="OTCsect row mobile one liquidity-row">
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>Liquidity Program</h2>
                                <p>Designed for market makers to enjoy attractive rebates or lower fees from trading in spot and futures markets</p>
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
                                <h2>Broker Program</h2>
                                <p>CBrokers can utilize our API products to manage sub-accounts and commissions</p>
                            </div>
                            <div className="otc-image">
                                <OTC5 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OTCsect row mobile two access_defi">
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>Access to DeFi</h2>
                                <p>Compliance and AML policies and regulations are limiting Institutions from certain Decentralised Finance products, NCX acts as a professional licensed entity allowing Institutions full access to DeFi without risk of breaching the regulatory framework.</p>
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
                                    <h2>OTC and Execution Services</h2>
                                    <p>NCX offers private and personalized services to institutions and corporate entities to access deeper liquidity to fill large orders.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC3 />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
                <div className="OTCsect row mobile three structured_product">
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otctxt">
                                    <h2>Custody and Assets Management</h2>
                                    <p>NCX offers digital asset custody and asset management service for institutions to store and manage their digital assets on a professional platform.</p>
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
                                    <h2>Structured Product</h2>
                                    <p>NCX structured products are crypto investments that provide predictable and superior returns fully customized to meet your specific objectives such as yield enhancement, capital protection, and leverage.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC1 />
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