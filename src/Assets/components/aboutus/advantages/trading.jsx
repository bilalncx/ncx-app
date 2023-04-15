import React from "react";
import { ReactComponent as AboutLogo } from '../../../images/about_logo.svg';
import '../03/3.css';
import './trading.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as OTC1 } from '../../../images/about-1.svg';
import { ReactComponent as OTC2 } from '../../../images/about-2.svg';
import { ReactComponent as OTC3 } from '../../../images/about-3.svg';
import { ReactComponent as OTC4 } from '../../../images/about-4.svg';
import { ReactComponent as OTC5 } from '../../../images/about-5.svg';
import { ReactComponent as OTC6 } from '../../../images/about-6.svg';
import { useTranslation } from "react-i18next";

function InstitutionAboutUs()
{
    const { t } = useTranslation();

    return(
        <div id="about_institution" className="trading_advantages">
            <div className="container">
                <div className="about_logo">
                    <AboutLogo />
                    <h1>{t("trading_advantage")}</h1>
                </div>
            </div>
            <div id="institutional_about">
                <div className="container">
                    <div className="OTCsect one row">
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("compliance")}</h2>
                                        <p>{t("trading_advantages_text1")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC4 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("risk_management")}</h2>
                                        <p>{t("trading_advantages_text2")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC5 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt extra">
                                        <h2>{t("cross_chain_dex")}</h2>
                                        <p>{t("trading_advantages_text3")}</p>
                                        <p>{t("trading_advantages_text3_1")}</p>
                                        <p>{t("trading_advantages_text3_2")}</p>
                                        <p>{t("trading_advantages_text3_3")}</p>
                                        <p>{t("trading_advantages_text3_4")}</p>
                                        <p>{t("trading_advantages_text3_5")}</p>
                                        <p>{t("trading_advantages_text3_6")}</p>
                                        <p>{t("trading_advantages_text3_7")}</p>
                                        <p>{t("trading_advantages_text3_8")}</p>
                                        <p>{t("trading_advantages_text3_9")}</p>
                                        <p>{t("trading_advantages_text3_10")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC6 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="OTCsect second row">
                        <div className="col">
                             <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("derivatives_market")}</h2>
                                        <p>{t("trading_advantage_text4")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC3 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                             <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("spot_market")}</h2>
                                        <p>{t("trading_advantage_text5")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC2 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                             <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("api_sdk_colo_service")}</h2>
                                        <p>{t("api-sdk-colo-text")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC1 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="OTCsect row mobile one liquidity-row">
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("compliance")}</h2>
                                        <p>{t("trading_advantages_text1")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC4 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("risk_management")}</h2>
                                        <p>{t("trading_advantages_text2")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC5 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="OTCsect row mobile two access_defi">
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt extra">
                                        <h2>{t("cross_chain_dex")}</h2>
                                        <p>{t("trading_advantages_text3")}</p>
                                        <p>{t("trading_advantages_text3_1")}</p>
                                        <p>{t("trading_advantages_text3_2")}</p>
                                        <p>{t("trading_advantages_text3_3")}</p>
                                        <p>{t("trading_advantages_text3_4")}</p>
                                        <p>{t("trading_advantages_text3_5")}</p>
                                        <p>{t("trading_advantages_text3_6")}</p>
                                        <p>{t("trading_advantages_text3_7")}</p>
                                        <p>{t("trading_advantages_text3_8")}</p>
                                        <p>{t("trading_advantages_text3_9")}</p>
                                        <p>{t("trading_advantages_text3_10")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC6 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                             <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("spot_market")}</h2>
                                        <p>{t("trading_advantage_text5")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC2 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="OTCsect row mobile three structured_product">
                        <div className="col">
                             <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("derivatives_market")}</h2>
                                        <p>{t("trading_advantage_text4")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC3 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                             <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="otc-linediv">
                                    <div className="otc-line"></div>
                                </div>
                                <div className="txtimgsect">
                                    <div className="otctxt">
                                        <h2>{t("api_sdk_colo_service")}</h2>
                                        <p>{t("api-sdk-colo-text")}</p>
                                    </div>
                                    <div className="otc-image">
                                        <OTC1 />
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InstitutionAboutUs;