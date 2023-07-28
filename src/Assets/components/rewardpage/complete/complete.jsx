import React from "react";
import './complete.css';
import Button from "@mui/material/Button";
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
                    <h1>{t("complete_tasks_earn_ncx_tokens_and_your_crypto_ascent")}</h1>
                    <Button className="earn-toget" href="#">{t("sign_in_to_grt_your_code")}</Button>
                </AnimationOnScroll>
                <div className="getocodesect">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="quesion">
                                <p>{t("refer_a_friend")}</p>
                                <NCXQuestionmark />
                            </div>
                            <h1>{t("earn_2500_ncxt_tokens")}</h1>
                            <p className="getocode-txt">{t("earn_2500_ncxt_tokens_text")} <strong>{t("www_ncx_cx")}</strong>, {t("ncx_truly_unlimited_referral_program")}</p>
                            <a href="#">{t("sign_in_to_grt_your_code")}</a>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="quesion">
                                <p>{t("earn_commission")}</p>
                                <NCXQuestionmark />
                            </div>
                            <h1>{t("earn_commisssion_all_purchases")}</h1>
                            <p className="getocode-txt">{t("earn_commission_text")}</p>
                            <a href="#">{t("sign_in_to_grt_your_code")}</a>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="quesion">
                                <p>{t("trade_to_earn")}</p>
                                <NCXQuestionmark />
                            </div>
                            <h1>{t("get_up_to_50000_ncxt_simply_trading")}</h1>
                            <p className="getocode-txt">{t("trade_to_earn_text")}</p>
                            <a href="#">{t("sign_up_and_start_trading")}</a>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXEarningComplete;