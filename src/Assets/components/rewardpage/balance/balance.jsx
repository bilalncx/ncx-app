import React from "react";
import './balance.css';
import CountUp from 'react-countup';
import Button from "@mui/material/Button";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as RewardStar } from '../../../images/ncx-reward-star.svg';
import { useTranslation } from "react-i18next";

function MyBalance()
{
    const { t } = useTranslation();

    return(
        <div className="balance-section">
            <div className="reward-row">
                <div className="container">
                    <div className="rewardheadrow">
                        <div className="reward-center">
                            <p>{t("rewrds_center")}</p>
                            <p className="star-res"><RewardStar /> {t("ncx_rewards")}</p>
                        </div>
                        <p className="complete-tsks">{t("complete_tasks_earn_ncxt")}</p>
                    </div>
                </div>
            </div>
            <div className="ncx-balance">
                <div className="container">
                    <div className="ncx-baldiv">
                        {/* <AnimationOnScroll animateIn="animate__fadeIn"> */}
                            <h3>{t("my_ncxt_balance")}</h3>
                            {/* <h1>10,000,000<span>0</span></h1> */}
                            <div className="balance-counter">
                            <CountUp
                                className="ncx-balanceup"
                                start={100}
                                end={4000}
                                duration={3}
                                useEasing={true}
                                useGrouping={true}
                                separator=","
                                decimals={3}
                                decimal="."
                            />
                            <CountUp
                                className="colorncx-balanceup"
                                start={500}
                                end={0}
                                duration={4.5}
                                useEasing={true}
                                useGrouping={true}
                            />
                            </div>
                        {/* </AnimationOnScroll> */}
                    </div>
                    {/* <AnimationOnScroll animateIn="animate__fadeIn"> */}
                        <p>{t("sign_up_claim_ncxt_tokens")}</p>
                        <Button className="earn-toget" href="#">{t("get_started")}</Button>
                    {/* </AnimationOnScroll> */}
                </div>
            </div>
        </div>
    )
}
export default MyBalance;