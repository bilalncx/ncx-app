import React from "react";
import './second.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../../homepage/NCXOTC/otc.css';
import {ReactComponent as NCXNewLogo } from '../../../images/about_logo.svg';
import { ReactComponent as OTC1 } from '../../../images/ncx-otc1.svg';
import { ReactComponent as OTC2 } from '../../../images/ncx-otc2.svg';
import { ReactComponent as OTC3 } from '../../../images/ncx-otc3.svg';
import { ReactComponent as OTC4 } from '../../../images/ncx-otc4.svg';
import { ReactComponent as OTC5 } from '../../../images/ncx-otc5.svg';
import { ReactComponent as OTC6 } from '../../../images/ncx-otc6.svg';
import { useTranslation } from "react-i18next";

function NCXhomepageOTCSection()
{

    const { t } = useTranslation();

    return(
        <div id="solutions_institutional" className="ncxotcsection">
            <div className="container">
                <div className="otclogo row">
                    <div className="ncx-otc solutions">
                        <NCXNewLogo />
                        <p>{t("institutional")}</p>
                    </div>
                </div>
                <div className="OTCsect row">
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>{t("liquidity_program")}</h2>
                                <p>{t("liquidity_program_text")}</p>
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
                                <h2>{t("broker_program")}</h2>
                                <p>{t("broker_program_text")}</p>
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
                                <h2>{t("access_defi")}</h2>
                                <p>{t("access-defi_text")}</p>
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
                                    <h2>{t("otc_execution_services")}</h2>
                                    <p>{t("otc_execution_services_text")}</p>
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
                                    <h2>{t("custody_assets_management")}</h2>
                                    <p>{t("custody_assets_management_text")}</p>
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
                                    <h2>{t("structured_product")}</h2>
                                    <p>{t("structured_product_text")}</p>
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
                                <h2>{t("liquidity_program")}</h2>
                                <p>{t("liquidity_program_text")}</p>
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
                                <h2>{t("broker_program")}</h2>
                                <p>{t("broker_program_text")}</p>
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
                                <h2>{t("access_defi")}</h2>
                                <p>{t("access-defi_text")}</p>
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
                                    <h2>{t("otc_execution_services")}</h2>
                                    <p>{t("otc_execution_services_text")}</p>
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
                                    <h2>{t("custody_assets_management")}</h2>
                                    <p>{t("custody_assets_management_text")}</p>
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
                                    <h2>{t("structured_product")}</h2>
                                    <p>{t("structured_product_text")}</p>
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