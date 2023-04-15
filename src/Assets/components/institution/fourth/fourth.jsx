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
import { ReactComponent as OTC7 } from '../../../images/icon-4.svg';
import { ReactComponent as OTC8 } from '../../../images/ncx-otc7.svg';
import {ReactComponent as NCXLogo } from '../../../images/about_logo.svg';
import { useTranslation } from "react-i18next";

function NCXhomepageOTCSection()
{
    const { t } = useTranslation();

    return(
        <div id="solutions_institutional" className="ncxotcsection">
            <div className="container">
            <div className="otclogo row">
                    <div className="ncx-otc solutions">
                        <NCXLogo />
                        <h1>{t("trading_advantage")}</h1>
                    </div>
                </div>
                <div className="OTCsect row advantages1">
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>{t("compliance")}</h2>
                                <p>{t("compliance_text")}</p>
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
                                <h2>{t("comprehensive")}</h2>
                                <p>{t("comprehensive_text")}</p>
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
                                <h2>{t("risk_management")}</h2>
                                <p>{t("risk_management_text")}</p>
                            </div>
                            <div className="otc-image">
                                <OTC2 />
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
                                    <h2>{t("vip_users_create_upto_1000_sub_accounts")}</h2>
                                    <p>{t("vip_users_sub_accounts_text")}</p>
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
                                    <h2>{t("professional")}</h2>
                                    <p>{t("professional_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC7 />
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
                                    <h2>{t("api_sdk_colo_service")}</h2>
                                    <p>{t("api-sdk-colo-text")}</p>
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
                                    <h2>{t("derivatives_market")}</h2>
                                    <p>{t("derivatives_market_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC6 />
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
                                    <h2>{t("spot_market")}</h2>
                                    <p>{t("spot_market_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC8 />
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
                                <h2>{t("compliance")}</h2>
                                <p>{t("compliance_text")}</p>
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
                                <h2>{t("comprehensive")}</h2>
                                <p>{t("comprehensive_text")}</p>
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
                                <h2>{t("risk_management")}</h2>
                                <p>{t("risk_management_text")}</p>
                            </div>
                            <div className="otc-image">
                                <OTC2 />
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
                                    <h2>{t("vip_users_create_upto_1000_sub_accounts")}</h2>
                                    <p>{t("vip_users_sub_accounts_text")}</p>
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
                                    <h2>{t("professional")}</h2>
                                    <p>{t("professional_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC7 />
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
                                    <h2>{t("api_sdk_colo_service")}</h2>
                                    <p>{t("api-sdk-colo-text")}</p>
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
                                    <h2>{t("derivatives_market")}</h2>
                                    <p>{t("derivatives_market_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC6 />
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
                                    <h2>{t("spot_market")}</h2>
                                    <p>{t("spot_market_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC8 />
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