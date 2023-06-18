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
import { ReactComponent as Feature8 } from '../../../images/feat-8.svg';
import { ReactComponent as Feature9 } from '../../../images/feat-9.svg';
import { ReactComponent as Feature10 } from '../../../images/feat-10.svg';
import { ReactComponent as Feature11 } from '../../../images/feat-11.svg';
import { ReactComponent as Feature12 } from '../../../images/feat-12.svg';
import { useTranslation } from "react-i18next";


function NCXhomepageOTCSection(){
    
    const { t } = useTranslation();
    
    return(
        <div className="token_features">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <h1 className="toke_feat">{t("ncx_token")} <span>{t("utility_features")}</span></h1>
                </AnimationOnScroll>
                <div className="feat-row row">
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncx_token_utility_features_heading1")}</h2>
                                    <p>{t("ncx_token_utility_features_paragraph1")}</p>
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
                                    <h2>{t("ncx_token_utility_features_heading2")}</h2>
                                    <p>{t("ncx_token_utility_features_paragraph2")}</p>
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
                                    <h2>{t("ncx_token_utility_features_heading3")}</h2>
                                    <p>{t("ncx_token_utility_features_paragraph3")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature3 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="feat-row row second">
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncx_token_utility_features_heading4")}</h2>
                                    <p>{t("ncx_token_utility_features_paragraph4_1")}</p>
                                    <p><strong>{t("ncx_token_utility_features_paragraph4_2")}</strong>{t("ncx_token_utility_features_paragraph4_3")}</p>
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
                                    <h2>{t("ncx_token_utility_features_heading5")}</h2>
                                    <p>{t("ncx_token_utility_features_paragraph5")}</p>
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
                                    <h2>{t("ncx_token_utility_features_heading12")}</h2>
                                    <p>{t("ncx_token_utility_features_paragraph12")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature12 />
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
                                    <h2>{t("ncx_token_utility_features_heading7")}</h2>
                                    <p>{t("ncx_token_utility_features_paragraph7")}</p>
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
                                    <h2>{t("ncx_token_utility_features_heading8")}</h2>
                                    <p>{t("ncx_token_utility_features_paragraph8")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature8 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncx_token_utility_features_heading9")}</h2>
                                    <p>{t("ncx_token_utility_features_paragraph9")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature9 />
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
                                    <h2>{t("ncx_token_utility_features_heading10")}</h2>
                                    <p>{t("ncx_token_utility_features_paragraph10")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature10 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncx_token_utility_features_heading11")}</h2>
                                    <p>{t("ncx_token_utility_features_paragraph11")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature11 />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll className="features-col" animateIn="animate__fadeIn">
                            <div className="feat-line"></div>
                            <div className="feat-txt">
                                <div className="fftxt">
                                    <h2>{t("ncx_token_utility_features_heading6")}</h2>
                                    <p>{t("ncx_token_utility_features_paragraph6")}</p>
                                </div>
                                <div className="featicon">
                                    <Feature6 />
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
                                <h2>{t("ncx_token_utility_features_heading1")}</h2>
                                <p>{t("ncx_token_utility_features_paragraph1")}</p>
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
                                <h2>{t("ncx_token_utility_features_heading2")}</h2>
                                <p>{t("ncx_token_utility_features_paragraph2")}</p>
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
                                <h2>{t("ncx_token_utility_features_heading3")}</h2>
                                <p>{t("ncx_token_utility_features_paragraph3")}</p>
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
                                <h2>{t("ncx_token_utility_features_heading4")}</h2>
                                <p>{t("ncx_token_utility_features_paragraph4_1")}</p>
                                <p><strong>{t("ncx_token_utility_features_paragraph4_2")}</strong>{t("ncx_token_utility_features_paragraph4_3")}</p>
                            </div>
                            <div className="featicon">
                                <Feature4 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feat-row row mobile three">
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncx_token_utility_features_heading5")}</h2>
                                <p>{t("ncx_token_utility_features_paragraph5")}</p>
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
                                <h2>{t("ncx_token_utility_features_heading12")}</h2>
                                <p>{t("ncx_token_utility_features_paragraph12")}</p>
                            </div>
                            <div className="featicon">
                                <Feature12 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feat-row row mobile four">
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncx_token_utility_features_heading7")}</h2>
                                <p>{t("ncx_token_utility_features_paragraph7")}</p>
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
                                <h2>{t("ncx_token_utility_features_heading8")}</h2>
                                <p>{t("ncx_token_utility_features_paragraph8")}</p>
                            </div>
                            <div className="featicon">
                                <Feature8 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feat-row row mobile five">
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncx_token_utility_features_heading9")}</h2>
                                <p>{t("ncx_token_utility_features_paragraph9")}</p>
                            </div>
                            <div className="featicon">
                                <Feature9 />
                            </div>
                        </div>
                    </div>
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncx_token_utility_features_heading10")}</h2>
                                <p>{t("ncx_token_utility_features_paragraph10")}</p>
                            </div>
                            <div className="featicon">
                                <Feature10 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feat-row row mobile six">
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncx_token_utility_features_heading11")}</h2>
                                <p>{t("ncx_token_utility_features_paragraph11")}</p>
                            </div>
                            <div className="featicon">
                                <Feature11 />
                            </div>
                        </div>
                    </div>
                    <div className="col features-col">
                        <div className="feat-line"></div>
                        <div className="feat-txt">
                            <div className="fftxt">
                                <h2>{t("ncx_token_utility_features_heading6")}</h2>
                                <p>{t("ncx_token_utility_features_paragraph6")}</p>
                            </div>
                            <div className="featicon">
                                <Feature6 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXhomepageOTCSection;