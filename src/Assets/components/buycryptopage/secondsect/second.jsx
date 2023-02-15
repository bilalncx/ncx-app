import React from "react";
import '../../rewardpage/complete/complete.css';
import Button from "@mui/material/Button";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {ReactComponent as NCXQuestionmark} from '../../../images/ncx-questionmark.svg';

function NCXEarningComplete()
{
    return(
        <div className="earingingcomplet-sect">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <h1>Easy as 1-2-3</h1>
                </AnimationOnScroll>
                <div className="getocodesect">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="quesion">
                                <p>Step 1</p>
                                <NCXQuestionmark />
                            </div>
                            <h1>Choose Crypto, Payment Currency and Enter the Amount  </h1>
                            <p className="getocode-txt">Choose from over 200 Cryptocurrencies and 95 Fiat Currencies, enter the required amount, if your currency is not available, select USD</p>
                            <a href="#">FAQ</a>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="quesion">
                                <p>Step 2</p>
                                <NCXQuestionmark />
                            </div>
                            <h1>Choose Between Payment Providers for the Best Rate & Payment Method</h1>
                            <p className="getocode-txt">Choose between Payment Methods and Providers to find the best rate and most convenient Payment Method</p>
                            <a href="#">FAQ</a>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="quesion">
                                <p>Step 3</p>
                                <NCXQuestionmark />
                            </div>
                            <h1>Complete the Payment & Receive your Crypto </h1>
                            <p className="getocode-txt">Once you complete the payment the Assets will be sent to your Crypto Wallet, if the amount is over certain limit you may be asked to complete KYC</p>
                            <a href="#">FAQ</a>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXEarningComplete;