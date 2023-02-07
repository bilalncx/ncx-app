import  React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './ncxtoken.css';
import {ReactComponent as NCXLogo} from '../../../images/NCX-logo.svg';
import {ReactComponent as NCXTickmark } from '../../../images/ncxicon-check-mark.svg';

function HomeNCXToken()
{
    return(
        <div className="ncxtoken">
            <div className="container">
                <div className="row tokenrow">
                    <div className="col">
                        <div className="ncx-tokenlogo">
                            <NCXLogo />
                            <p>Token</p>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h2>Trade Futures with up to 100x Leverage</h2>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="tokentable">
                    <div className="tokenhead">
                        <p className="one">NCXT Staked</p>
                        <p className="two">Trading Fee Discount (Spot & Derivatives)</p>
                        <p className="three">Additional Staking Rewards (APR)</p>
                        <p className="four">Withdrawal Fee Refund</p>
                        <p className="five">Derivatives Leaverage</p>
                        <p className="six">Additional APR for Providing Liquidity in NCX Yield Farms</p>
                        <p className="seven">Use NCXT as Derivatives Trading Collateral </p>
                        <p className="eight">Use NCXT as Collateral to Borrow other Crypto Assets</p>
                        <p className="nine">IEO Tickets for New NCX Spot Launches</p>
                    </div>
                    <div className="tokencolum">
                        <div className="colone">
                            <div className="color">
                                <div className="color-one"></div>
                                <p>50,000</p>
                            </div>
                            <div className="color">
                                <div className="color-two"></div>
                                <p>100,000</p>
                            </div>
                            <div className="color">
                                <div className="color-three"></div>
                                <p>250,000</p>
                            </div>
                            <div className="color">
                                <div className="color-four"></div>
                                <p>500,000</p>
                            </div>
                            <div className="color">
                                <div className="color-five"></div>
                                <p>1,000,000</p>
                            </div>
                            <div className="color">
                                <div className="color-six"></div>
                                <p>2,500,000</p>
                            </div>
                            <div className="color">
                                <div className="color-seven"></div>
                                <p>5,000,000</p>
                            </div>
                            <div className="color">
                                <div className="color-eight"></div>
                                <p>10,000,000</p>
                            </div>
                            <div className="color">
                                <div className="color-nine"></div>
                                <p>25,000,000</p>
                            </div>
                        </div>
                        <div className="coltwo">
                            <p>10%</p>
                            <p>20%</p>
                            <p>30%</p>
                            <p>40%</p>
                            <p>50%</p>
                            <p>60%</p>
                            <p>70%</p>
                            <p>80%</p>
                            <p>100%</p>
                        </div>
                        <div className="colthree">
                            <p>3%</p>
                            <p>5%</p>
                            <p>7%</p>
                            <p>10%</p>
                            <p>15%</p>
                            <p>20%</p>
                            <p>25%</p>
                            <p>30%</p>
                            <p>35%</p>
                        </div>
                        <div className="colfour">
                            <p></p>
                            <p>10%</p>
                            <p>20%</p>
                            <p>30%</p>
                            <p>40%</p>
                            <p>50%</p>
                            <p>60%</p>
                            <p>80%</p>
                            <p>100%</p>
                        </div>
                        <div className="colfive">
                            <p>80x</p>
                            <p>100x</p>
                            <p>110x</p>
                            <p>120x</p>
                            <p>130x</p>
                            <p>140x</p>
                            <p>150x</p>
                            <p>200x</p>
                        </div>
                        <div className="colsix">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p>5%</p>
                            <p>8%</p>
                            <p>10%</p>
                            <p>12%</p>
                            <p>15%</p>
                            <p>25%</p>
                        </div>
                        <div className="colseven">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p>10%</p>
                            <p>15%</p>
                            <p>20%</p>
                            <p>25%</p>
                        </div>
                        <div className="coleight">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                        </div>
                        <div className="colnine">
                            <p>8%</p>
                            <p>1%</p>
                            <p>12%</p>
                            <p>12%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeNCXToken;