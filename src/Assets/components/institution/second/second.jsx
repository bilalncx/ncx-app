import React from "react";
import './second.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../../homepage/NCXOTC/otc.css';
import {ReactComponent as NCXNewLogo } from '../../../images/about_logo.svg';
import { ReactComponent as OTC1 } from '../../../images/about-1.svg';
import { ReactComponent as OTC2 } from '../../../images/about-2.svg';
import { ReactComponent as OTC3 } from '../../../images/about-3.svg';
import { ReactComponent as OTC4 } from '../../../images/about-4.svg';
import { ReactComponent as OTC5 } from '../../../images/about-5.svg';
import { ReactComponent as OTC6 } from '../../../images/about-6.svg';
import MOTC1 from '../../../images/about-1.svg';
import MOTC2 from '../../../images/about-2.svg';
import MOTC3 from '../../../images/about-3.svg';
import MOTC4 from '../../../images/about-4.svg';
import MOTC5 from '../../../images/about-5.svg';
import MOTC6 from '../../../images/about-6.svg';
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
                        <h1>{t("institutional")}</h1>
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
                                <OTC1 />
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
                                <p>{t("about_broker_program_text")}</p>
                            </div>
                            <div className="otc-image">
                                <OTC2 />
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
                                <OTC3 />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="OTCsect second row">
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>{t("otc_execution_services")}</h2>
                                <p>{t("otc_execution_services_text")}</p>
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
                                <h2>{t("custody_assets_management")}</h2>
                                <p>{t("custody_assets_management_text")}</p>
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
                                <h2>{t("structured_product")}</h2>
                                <p>{t("structured_product_text")}</p>
                            </div>
                            <div className="otc-image">
                                <OTC6 />
                            </div>
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
                                <img src={MOTC1} alt="otc" />
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
                                <p>{t("about_broker_program_text")}</p>
                            </div>
                            <div className="otc-image">
                            <img src={MOTC2} alt="otc" />
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
                            <img src={MOTC3} alt="otc" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>{t("structured_product")}</h2>
                                <p>{t("structured_product_text")}</p>
                            </div>
                            <div className="otc-image">
                            <img src={MOTC6} alt="otc" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="OTCsect row mobile three structured_product">
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>{t("custody_assets_management")}</h2>
                                <p>{t("custody_assets_management_text")}</p>
                            </div>
                            <div className="otc-image">
                            <img src={MOTC5} alt="otc" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="otc-linediv">
                            <div className="otc-line"></div>
                        </div>
                        <div className="txtimgsect">
                            <div className="otctxt">
                                <h2>{t("otc_execution_services")}</h2>
                                <p>{t("otc_execution_services_text")}</p>
                            </div>
                            <div className="otc-image">
                                <img src={MOTC4} alt="otc" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default NCXhomepageOTCSection;