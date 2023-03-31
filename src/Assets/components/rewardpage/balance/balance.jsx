import React from "react";
import './balance.css';
import CountUp from 'react-countup';
import Button from "@mui/material/Button";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as RewardStar } from '../../../images/ncx-reward-star.svg';

function MyBalance()
{
    return(
        <div className="balance-section">
            <div className="reward-row">
                <div className="container">
                    <div className="rewardheadrow">
                        <div className="reward-center">
                            <p>Rewards Center</p>
                            <p className="star-res"><RewardStar /> NCX Rewards</p>
                        </div>
                        <p className="complete-tsks">Complete Tasks Earn NCXT</p>
                    </div>
                </div>
            </div>
            <div className="ncx-balance">
                <div className="container">
                    <div className="ncx-baldiv">
                        {/* <AnimationOnScroll animateIn="animate__fadeIn"> */}
                            <h3>My NCXT Balance</h3>
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
                        <p>Sign up to claim your 10,000 NCX Tokens welcome bonus & start earning NCXT</p>
                        <Button className="earn-toget" href="#">Get Started</Button>
                    {/* </AnimationOnScroll> */}
                </div>
            </div>
        </div>
    )
}
export default MyBalance;