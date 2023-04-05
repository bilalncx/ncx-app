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
import { useTranslation } from "react-i18next";

function NCXhomepageOTCSection(){
    const { t, i18n } = useTranslation();
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
                        {/* <Button href="#">View All</Button> */}
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
                                    <h2>{t("otc_execution_service")}</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("execution_text")}</p>
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
                                    <h2>{t("regulatory_compliance")}</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("regulatory_compliance_text")}</p>
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
                                    <h2>{t("zero_fees")}</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("zero_fees_text")}</p>
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
                                    <h2>{t("fast_settlement")}</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("fast_settlement_text")}</p>
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
                                    <h2>{t("wide_coverage")}</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("wide_coverage_text")}</p>
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
                                    <h2>{t("professional_service")}</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("professional_service_text")}</p>
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
                                    <h2>{t("otc_execution_service")}</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("execution_text")}</p>
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
                                    <h2>{t("regulatory_compliance")}</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("regulatory_compliance_text")}</p>
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
                                    <h2>{t("zero_fees")}</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("zero_fees_text")}</p>
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
                                    <h2>{t("fast_settlement")}</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("fast_settlement_text")}</p>
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
                                    <h2>{t("wide_coverage")}</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("wide_coverage_text")}</p>
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
                                    <h2>{t("professional_service")}</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("professional_service_text")}</p>
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