import React from "react";
import '../../rewardpage/complete/complete.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {ReactComponent as NCXQuestionmark} from '../../../images/ncx-questionmark.svg';
import { useTranslation } from "react-i18next";

function NCXEarningComplete()
{
    const { t } = useTranslation();

    return(
        <div className="earingingcomplet-sect">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <h1>{t("easy_as_1_2_3")}</h1>
                </AnimationOnScroll>
                <div className="getocodesect">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="quesion">
                                <p>{t("step_1")}</p>
                                <NCXQuestionmark />
                            </div>
                            <h1>{t("chosse_crypto_payment_currency_enter_amount")}</h1>
                            <p className="getocode-txt">{t("chosse_crypto_payment_currency_enter_amount_text")}</p>
                            <a href="https://ncx.cx/faq">{t("faq")}</a>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="quesion">
                                <p>{t("step_2")}</p>
                                <NCXQuestionmark />
                            </div>
                            <h1>{t("choose_between_payment_providers_best_rates_payment_method")}</h1>
                            <p className="getocode-txt">{t("choose_between_payment_providers_best_rates_payment_method_text")}</p>
                            <a href="https://ncx.cx/faq">{t("faq")}</a>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="quesion">
                                <p>{t("step_3")}</p>
                                <NCXQuestionmark />
                            </div>
                            <h1>{t("complete_payment_receive_crypto")}</h1>
                            <p className="getocode-txt">{t("complete_payment_receive_crypto_text")}</p>
                            <a href="https://ncx.cx/faq">{t("faq")}</a>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXEarningComplete;