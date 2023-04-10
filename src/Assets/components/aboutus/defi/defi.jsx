import React from "react";
import './defi.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as AboutLogo } from '../../../images/about_logo.svg';
import { useTranslation } from "react-i18next";

function AboutNCXDefi()
{
    const { t } = useTranslation();

    return(
        <div className="about_defi">
            <div className="container">
                <AnimationOnScroll className="trading_col" animateIn="animate__fadeIn">
                    <div className="about_logo">
                        <AboutLogo />
                        <h1>DeFi</h1>
                    </div>
                </AnimationOnScroll>
                <div id="defi_content">
                    <div className="ccc">
                        <h1>{t("about_defi_heading")}</h1>
                        <p>{t("about_defi_text")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutNCXDefi;