import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './features.css';
import { ReactComponent as Feature1 } from '../../../images/feat-1.svg';
import { ReactComponent as Feature2 } from '../../../images/feat-2.svg';
import { ReactComponent as Feature3 } from '../../../images/feat-3.svg';
import { ReactComponent as Feature4 } from '../../../images/feat-4.svg';
import { ReactComponent as Feature5 } from '../../../images/feat-5.svg';
import { ReactComponent as Feature6 } from '../../../images/feat-6.svg';
import { ReactComponent as Feature7 } from '../../../images/feat-7.svg';
import { ReactComponent as Feature11 } from '../../../images/feat-11.svg';
import { useTranslation } from "react-i18next";


function NCXhomepageOTCSection(){

    const { t } = useTranslation();

    return(
        <div id="token_allocation" className="token_features">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <h1 className="toke_feat">{t("ncxt_token_allocation")}</h1>
                </AnimationOnScroll>
                <div className="feat-row row">
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncxt_token_allocation_heading1")}</h2>
                                    <p>{t("ncxt_token_allocation_paragraph1")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature1 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncxt_token_allocation_heading2")}</h2>
                                    <p>{t("ncxt_token_allocation_paragraph2")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature2 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncxt_token_allocation_heading3")}</h2>
                                    <p>{t("ncxt_token_allocation_paragraph3")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature3 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="feat-row row">
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncxt_token_allocation_heading4")}</h2>
                                    <p>{t("ncxt_token_allocation_paragraph4")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature4 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncxt_token_allocation_heading5")}</h2>
                                    <p>{t("ncxt_token_allocation_paragraph5")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature5 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncxt_token_allocation_heading6")}</h2>
                                    <p>{t("ncxt_token_allocation_paragraph6")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature6 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="feat-row row">
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncxt_token_allocation_heading7")}</h2>
                                    <p>{t("ncxt_token_allocation_paragraph7")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature7 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncxt_token_allocation_heading8")}</h2>
                                    <p>{t("ncxt_token_allocation_paragraph8")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature11 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="features-col hide" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>Use NCXT as Collateral to Borrow other Crypto Assets</h2>
                                    <p>NCXT can be used as collateral to borrow other Crypto Assets on NCX Lending Protocol, including USDT, Bitcoin, Ethereum, BNB, Solana, Polygon and others.</p>
                                </div>
                                <div className="featicon">
                                    <Feature11 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>


                <div className="feat-row row mobile one">
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncxt_token_allocation_heading1")}</h2>
                                <p>{t("ncxt_token_allocation_paragraph1")}</p>
                            </div>
                            <div className="featicon">
                                <Feature1 />
                            </div>
                        </div>
                    </div>
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncxt_token_allocation_heading2")}</h2>
                                <p>{t("ncxt_token_allocation_paragraph2")}</p>
                            </div>
                            <div className="featicon">
                                <Feature2 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feat-row row mobile two">
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncxt_token_allocation_heading3")}</h2>
                                <p>{t("ncxt_token_allocation_paragraph3")}</p>
                            </div>
                            <div className="featicon">
                                <Feature3 />
                            </div>
                        </div>
                    </div>
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncxt_token_allocation_heading4")}</h2>
                                <p>{t("ncxt_token_allocation_paragraph4")}</p>
                            </div>
                            <div className="featicon">
                                <Feature6 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feat-row row mobile three">
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncxt_token_allocation_heading5")}</h2>
                                <p>{t("ncxt_token_allocation_paragraph5")}</p>
                            </div>
                            <div className="featicon">
                                <Feature5 />
                            </div>
                        </div>
                    </div>
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncxt_token_allocation_heading6")}</h2>
                                <p>{t("ncxt_token_allocation_paragraph6")}</p>
                            </div>
                            <div className="featicon">
                                <Feature4 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feat-row row mobile four">
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncxt_token_allocation_heading7")}</h2>
                                <p>{t("ncxt_token_allocation_paragraph7")}</p>
                            </div>
                            <div className="featicon">
                                <Feature7 />
                            </div>
                        </div>
                    </div>
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncxt_token_allocation_heading8")}</h2>
                                <p>{t("ncxt_token_allocation_paragraph8")}</p>
                            </div>
                            <div className="featicon">
                                <Feature11 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXhomepageOTCSection;