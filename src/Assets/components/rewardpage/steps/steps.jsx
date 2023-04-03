import React from "react";
import './steps.css';
import Button from "@mui/material/Button";
import NCXStep1 from '../../../images/ncx-earningstep1.png';
import NCXStep2 from '../../../images/ncx-earningstep2.png';
import NCXStep3 from '../../../images/ncx-earningstep3.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useTranslation } from "react-i18next";

function RewardStepSection()
{
    const { t } = useTranslation();

    return(
        <div className="ncxearingsteps">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <h1>{t("easy_as_1_2_3")}</h1>
                </AnimationOnScroll>
                <div className="steps-row">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXStep1} alt="NCX Earning" />
                            <p>{t("earn_ncx_tokens_completing_tasks_sign_up_start_earning.")}</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXStep2} alt="NCX Earning" />
                            <p>{t("boost_your_ncx_balance_with_task_completed_text")}</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXStep3} alt="NCX Earning" />
                            <p>{t("you_can_redeem_withdraw_stake_trade_token_text")}</p>
                            <span>*-{t("subject_to_vesting_period")}</span>
                        </AnimationOnScroll>
                    </div>
                </div>
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <Button className="earn-toget" href="#">{t("get_started")}</Button>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default RewardStepSection;