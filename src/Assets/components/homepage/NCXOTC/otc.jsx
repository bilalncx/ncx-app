import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXLogo from '../../../images/NCX-logo.svg';
import Button from "@mui/material/Button";
import './otc.css';
import { ReactComponent as OTC1 } from '../../../images/ncx-otc1.svg';
import { ReactComponent as OTC2 } from '../../../images/ncx-otc2.svg';
import { ReactComponent as OTC3 } from '../../../images/ncx-otc3.svg';
import { ReactComponent as OTC4 } from '../../../images/ncx-otc4.svg';
import { ReactComponent as OTC5 } from '../../../images/ncx-otc5.svg';
import { ReactComponent as OTC6 } from '../../../images/ncx-otc6.svg';

function NCXhomepageOTCSection(){
    return(
        <div className="ncxotcsection">
            <div className="container">
                <div className="otclogo row">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-otc">
                                <img className="ncx-whitelogo" src={NCXLogo} alt="ncx-whitelogo" />
                                <p>OTC</p>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col view-all">
                        <Button href="#">View All</Button>
                    </div>
                    <AnimationOnScroll className="mobile-otcheding" animateIn="animate__fadeIn">
                        <h1>Off Market Trades for Institutional Clients</h1>
                    </AnimationOnScroll>
                </div>
                <div className="OTCsect row">
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>OTC & Execution Service</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>Complete large orders through NCX OTC Desk, access deeper liquidity, efficient, fast and secure. NCX  adopts the leading MPC technology to fully guarantee the security of assets. </p>
                                </AnimationOnScroll>
                            </div>
                            <div className="otc-image">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <OTC3 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>Regulatory Compliance</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>NCX extensive compliance program is designed to be on the level with the world’s leading regulatory and industry best practices.  Our risk-based and multi-layer control system has proven to be highly effective in AML and CFT.</p>
                                </AnimationOnScroll>
                            </div>
                            <div className="otc-image">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <OTC2 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>Zero Fees</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>No fees, no transaction slippage, and we interoperate with liquidity pools worldwide to provide the most competitive quotes on all OTC trades.</p>
                                </AnimationOnScroll> 
                            </div>
                            <div className="otc-image">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <OTC1 />
                                </AnimationOnScroll>
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
                            <div className="otctxt">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>Fast Settlement</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>Our funds clearing and asset settlement can be finished within minutes after the transaction is completed, safe and efficient. Transaction data is not publicly available and is anonymous and secure.</p>
                                </AnimationOnScroll>
                            </div>
                            <div className="otc-image">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <OTC4 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>Wide Coverage</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>Our OTC services cover a wide range of countries and regions, including Europe and Asia Pacific.</p>
                                </AnimationOnScroll>
                            </div>
                            <div className="otc-image">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <OTC5 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>Professional Service</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>Experienced trading team provides 24/7 exclusive service, institutions can use the OTC API.</p>
                                </AnimationOnScroll> 
                            </div>
                            <div className="otc-image">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <OTC6 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OTCsect row mobile one">
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>OTC & Execution Service</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>Complete large orders through NCX OTC Desk, access deeper liquidity, efficient, fast and secure. NCX  adopts the leading MPC technology to fully guarantee the security of assets. </p>
                                </AnimationOnScroll>
                            </div>
                            <div className="otc-image">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <OTC3 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>Regulatory Compliance</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>NCX extensive compliance program is designed to be on the level with the world’s leading regulatory and industry best practices.  Our risk-based and multi-layer control system has proven to be highly effective in AML and CFT.</p>
                                </AnimationOnScroll>
                            </div>
                            <div className="otc-image">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <OTC2 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OTCsect row mobile two">
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>Zero Fees</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>No fees, no transaction slippage, and we interoperate with liquidity pools worldwide to provide the most competitive quotes on all OTC trades.</p>
                                </AnimationOnScroll> 
                            </div>
                            <div className="otc-image">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <OTC1 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>Fast Settlement</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>Our funds clearing and asset settlement can be finished within minutes after the transaction is completed, safe and efficient. Transaction data is not publicly available and is anonymous and secure.</p>
                                </AnimationOnScroll>
                            </div>
                            <div className="otc-image">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <OTC4 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OTCsect row mobile three">
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>Wide Coverage</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>Our OTC services cover a wide range of countries and regions, including Europe and Asia Pacific.</p>
                                </AnimationOnScroll>
                            </div>
                            <div className="otc-image">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <OTC5 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="otc-linediv" animateIn="animate__fadeIn">
                            <div className="otc-line"></div>
                        </AnimationOnScroll>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>Professional Service</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>Experienced trading team provides 24/7 exclusive service, institutions can use the OTC API.</p>
                                </AnimationOnScroll> 
                            </div>
                            <div className="otc-image">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <OTC6 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXhomepageOTCSection;