import React from "react";
import './2.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import CountUp from 'react-countup';
import { useTranslation } from "react-i18next";
import Office1 from '../../../images/ncx_office1.png';
import Office2 from '../../../images/ncx_office2.png';


function AboutSectionSection()
{

    const { t } = useTranslation();

    return(
        <div className="about_content">
            <div className="container">
                <div className="about_team">
                    <div className="bar-grade33">
                        <AnimationOnScroll animateIn="animate__slideInLeft">
                            <div className="gradientbar"></div>
                        </AnimationOnScroll>
                    </div>
                    <div className="row team_pairs">
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={1}
                                end={32}
                                duration={15}
                                useEasing={true}
                                useGrouping={true}
                                // separator=" "
                                // decimals={4}
                                // decimal=","
                                prefix=">"
                                // suffix=" left"
                                delay={0}
                            />
                            <p>{t("team_member_internationally")}</p>
                        </div>
                        <div className="col">
                            <h1>24/7</h1>
                            <p>{t("multilingul_support")}</p>
                        </div>
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={10}
                                end={180}
                                duration={15}
                                useEasing={true}
                                useGrouping={true}
                                prefix=">"
                            />
                            <p>{t("available_in_countries")}</p>
                        </div>
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={10}
                                end={500}
                                duration={15}
                                useEasing={true}
                                useGrouping={true}
                                prefix=">"
                            />
                            <p>{t("spot_trading_pairs")}</p>
                        </div>
                    </div>
                    <div className="row team_pairs mobile">
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={1}
                                end={32}
                                duration={15}
                                useEasing={true}
                                useGrouping={true}
                                // separator=" "
                                // decimals={4}
                                // decimal=","
                                prefix=">"
                                // suffix=" left"
                                delay={0}
                            />
                            <p>{t("team_member_internationally")}</p>
                        </div>
                        <div className="col">
                            <h1>24/7</h1>
                            <p>{t("multilingul_support")}</p>
                        </div>
                    </div>
                    <div className="row team_pairs mobile">
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={10}
                                end={180}
                                duration={15}
                                useEasing={true}
                                useGrouping={true}
                                prefix=">"
                            />
                            <p>{t("available_in_countries")}</p>
                        </div>
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={10}
                                end={500}
                                duration={15}
                                useEasing={true}
                                useGrouping={true}
                                prefix=">"
                            />
                            <p>{t("spot_trading_pairs")}</p>
                        </div>
                    </div>
                </div>
                <div className="about-txt">
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <p>{t("about_text1")}</p>
                        <p>{t("about_text2")}</p>
                        <p>{t("about_text3")}</p>
                    </AnimationOnScroll>
                </div>
                <div className="ncx-office">
                    <AnimationOnScroll className="img12" animateIn="animate__fadeIn">
                        <img src={Office1} alt="ncx-office" />
                        <img src={Office2} alt="ncx-office" />
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}
export default AboutSectionSection;