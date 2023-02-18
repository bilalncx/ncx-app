import React from "react";
import './steps.css';
import Button from "@mui/material/Button";
import NCXStep1 from '../../../images/ncx-earningstep1.png';
import NCXStep2 from '../../../images/ncx-earningstep2.png';
import NCXStep3 from '../../../images/ncx-earningstep3.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function RewardStepSection()
{
    return(
        <div className="ncxearingsteps">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <h1>Easy as 1-2-3</h1>
                </AnimationOnScroll>
                <div className="steps-row">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXStep1} alt="NCX Earning" />
                            <p>Earn NCX Tokens completing tasks. Sign up and start earning.</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXStep2} alt="NCX Earning" />
                            <p>Boost your NCX balance with every task completed. Bonus NCX Tokens are rewarded for completing a level.</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXStep3} alt="NCX Earning" />
                            <p>You can redeem, withdraw, stake, trade or sell your tokens on NCX or any other listed DEX/CEX after NCXT TGE and Token Release*</p>
                            <span>*-Subject to Vesting Period</span>
                        </AnimationOnScroll>
                    </div>
                </div>
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <Button className="earn-toget" href="#">Get Started</Button>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default RewardStepSection;