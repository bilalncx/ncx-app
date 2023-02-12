import React from "react";
import './complete.css';
import Button from "@mui/material/Button";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {ReactComponent as NCXQuestionmark} from '../../../images/ncx-questionmark.svg';

function NCXEarningComplete()
{
    return(
        <div className="earingingcomplet-sect">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <h1>Complete tasks, earn NCXs, and begin your crypto ascent.</h1>
                    <Button className="earn-toget" href="#">Sign in to Get Your Code</Button>
                </AnimationOnScroll>
                <div className="getocodesect">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="quesion">
                                <p>Refer a friend</p>
                                <NCXQuestionmark />
                            </div>
                            <h1>Earn 2,500 NCX Tokens!</h1>
                            <p className="getocode-txt">Get rewarded each time 50 referrals sign up for NCX and verify their accounts.</p>
                            <a href="#">Sign in to Get Your Code</a>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="quesion">
                                <p>Refer a Earn</p>
                                <NCXQuestionmark />
                            </div>
                            <h1>Earn 5% Commission on all Purchases!</h1>
                            <p className="getocode-txt">Get rewarded each time your referrals sign up for NCX and make a purchase of NCX Tokens Across all Presale Rounds</p>
                            <a href="#">Sign in to Get Your Code</a>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="quesion">
                                <p>SIGN UP AND VERIFY</p>
                                <NCXQuestionmark />
                            </div>
                            <h1>Get up to 50,000 NCX, simply trading!</h1>
                            <p className="getocode-txt">Sign Up, Complete Tasks and earn NCX Tokens, reach new Levels and get Rewarded.</p>
                            <a href="#">Sign Up and Start Trading</a>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXEarningComplete;