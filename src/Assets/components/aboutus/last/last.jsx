import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as AboutLogo } from '../../../images/about_logo.svg';
import MarketMaker from '../../marketmaker/second/second';
import { useTranslation } from "react-i18next";

function AboutNCXDefi()
{
    const { t } = useTranslation();
    
    return(
        <div className="market_maker_about">
            <div className="container">
                <AnimationOnScroll className="trading_col" animateIn="animate__fadeIn">
                    <div className="about_logo">
                        <AboutLogo />
                        <h1>{t("market_makers")}</h1>
                    </div>
                </AnimationOnScroll>
                <MarketMaker />
            </div>
        </div>
    )
}
export default AboutNCXDefi;