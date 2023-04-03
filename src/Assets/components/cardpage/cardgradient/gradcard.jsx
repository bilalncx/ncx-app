import { AnimationOnScroll } from 'react-animation-on-scroll';
import  React from "react";
import './gradcard.css';
import '../../homepage/8thgradientsection/gradient.css';
import { useTranslation } from "react-i18next";

function NCXCardGradientSection(){
    
    const { t } = useTranslation();
    
    return(
        <div id="cardgradient" className="gradient">
            <div className="container">
                <div className="gradient-bar">
                    <AnimationOnScroll animateIn="animate__slideInLeft">
                        <div className="gradientbar"></div>
                    </AnimationOnScroll>
                </div>
                <div className="row gradient-text">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-one">
                            <h3>01</h3>
                            <h1>{t("top_up_by_crypto_fiat")}</h1>
                            <p>{t("top_up_by_crypto_fiat_text")}</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-two">
                            <h3>02</h3>
                            <h1>{t("atm_withdrawals")}</h1>
                            <p>{t("atm_withdrawals_text")}</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-three">
                            <h3>03</h3>
                            <h1>{t("online_payments")}</h1>
                            <p>{t("online_payments_text")}</p>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXCardGradientSection;