import { AnimationOnScroll } from 'react-animation-on-scroll';
import  React from "react";
import './gradcard.css';
import '../../homepage/8thgradientsection/gradient.css';

function NCXCardGradientSection(){
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
                            <h1>TopUp By Crypto of Fiat</h1>
                            <p>You can now use your Crypto for everyday purchases at 44 million merchant locations Worldwide with NCX Crypto Debit Card, powered by MasterCard, topping up your NCX Card using your Crypto or Fiat Wallet </p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-two">
                            <h3>02</h3>
                            <h1>ATM Withdrawals</h1>
                            <p>Bridging the gap between DeFi and Centralised Finance you can now turn your Crypto into Cash instantly using NCX Card across 3.2m ATMs Worldwide, Withdrawal Limits Apply*</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-three">
                            <h3>03</h3>
                            <h1>Online Payments</h1>
                            <p>Using your NCX Crypto Card for Online Payments has never been easier, accepted by all MasterCard supporting merchants as well as Apple Pay, Google Pay, Samsung Pay, Zelle, Paypal, Stripe, AliPay, Payoneer and many more </p>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXCardGradientSection;