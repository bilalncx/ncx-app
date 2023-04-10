import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as AboutLogo } from '../../../images/about_logo.svg';
import AboutTrades from '../../homepage/home-trade/trade';
import './deri.css';
import { useTranslation } from "react-i18next";

function DerivativeTrading()
{
    const { t } = useTranslation();

    return(
        <div id="derivative">
            <div className="container">
                <AnimationOnScroll className="trading_col" animateIn="animate__fadeIn">
                    <div className="about_logo">
                        <AboutLogo />
                        <h1>{t("derivatives_trading")}</h1>
                    </div>
                </AnimationOnScroll>

                <div className="trade_derivatives_xx">
                    <div className="tvs">
                        <h1>{t("assets_text_1")}</h1>
                        <p>{t("assets_text_2")}</p>
                    </div>
                    <AboutTrades />
                </div>
            </div>
        </div>
    )
}
export default DerivativeTrading;