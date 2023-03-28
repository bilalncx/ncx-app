import  React from "react";
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import './style.css';
import {ReactComponent as NCXTickmark } from '../../../images/check.svg';
import { ReactComponent as TokenTick } from '../../../images/check.svg';
import {ReactComponent as NCXTokenIcon} from '../../../images/token_icon.svg';

function HomeNCXToken()
{
    return(
        <div id="presale_ncxT">
            <div className="container">
                <div className="stake_ncx">
                    <h1>Stake NCXT & Reap the Rewards</h1>
                </div>
                <div className="tokentable-stake">
                    <div className="tokenhead-stake">
                        <p className="q1">Private Sale Round</p>
                        <p className="q1">NCX Token Price in USDT</p>
                        <p className="q1">Lockup Period</p>
                        <p className="q1">After Lockup Period Ends</p>
                        <p className="q1">Receive Trading Fee Discounts during the Vesting Period</p>
                        <p className="q1">Receive Staking Rewards during the Vesting Period</p>
                        <p className="q1">Receive Staking Rewards during the Vesting Period</p>
                        {/* <p className="q1">Additional APR for Providing Liquidity in NCX Yield Farms</p>
                        <p className="q1">Use NCXT as Collateral to Borrow other Crypto Assets</p> */}
                    </div>
                    <div className="tokencolum-stake">
                        <div className="colstake">
                            <div className="color">
                                <NCXTokenIcon />
                                <p>Round 1</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>Round 2</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>Round 3</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>Round 4</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>Round 5</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>Round 6</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>Round 7</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>Public Sale</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>Listing Price</p>
                            </div>
                        </div>
                        <div className="colstake">
                            <p>$0.0004</p>
                            <p>$0.0006</p>
                            <p>$0.0008</p>
                            <p>$0.0011</p>
                            <p>$0.0015</p>
                            <p>$0.002</p>
                            <p>$0.003</p>
                            <p>$0.004</p>
                            <p>$0.008</p>
                        </div>
                        <div className="colstake">
                            <p>9 Months</p>
                            <p>6 Months</p>
                            <p>5 Months</p>
                            <p>4 Months</p>
                            <p>3 Months</p>
                            <p>2 Months</p>
                            <p>30 Days</p>
                            <p>Unlocked</p>
                        </div>
                        <div className="colstake">
                            <p>10% Monthly Release</p>
                            <p>10% Monthly Release</p>
                            <p>20% Monthly Release</p>
                            <p>20% Monthly Release</p>
                            <p>25% Monthly Release</p>
                            <p>25% Monthly Release</p>
                            <p>25% Monthly Release</p>
                            <p>25% Monthly Release</p>
                        </div>
                        <div className="colstake">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                        </div>
                        <div className="colstake">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                        </div>
                        <div className="colstake">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                        </div>
                    </div>
                </div>
                <div className="mobile-tokentable">
                    <div className="mbl-tokrow">
                        <h3>NCX Staked</h3>
                        <div className="mbl-tokrowitems">
                            <div className="color">
                                <div className="color-one"></div>
                                <p>50K</p>
                            </div>
                            <div className="color">
                                <div className="color-two"></div>
                                <p>100K</p>
                            </div>
                            <div className="color">
                                <div className="color-three"></div>
                                <p>250K</p>
                            </div>
                            <div className="color">
                                <div className="color-four"></div>
                                <p>500K</p>
                            </div>
                            <div className="color">
                                <div className="color-five"></div>
                                <p>1M</p>
                            </div>
                            <div className="color">
                                <div className="color-six"></div>
                                <p>2.5M</p>
                            </div>
                            <div className="color">
                                <div className="color-seven"></div>
                                <p>5M</p>
                            </div>
                            <div className="color">
                                <div className="color-eight"></div>
                                <p>10M</p>
                            </div>
                            <div className="color">
                                <div className="color-nine"></div>
                                <p>25M</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>Trading Fee Discount (Spot & Derivatives)</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color">
                                <p>10%</p>
                            </div>
                            <div className="color">
                                <p>20%</p>
                            </div>
                            <div className="color">
                                <p>30%</p>
                            </div>
                            <div className="color">
                                <p>40%</p>
                            </div>
                            <div className="color">
                                <p>50%</p>
                            </div>
                            <div className="color">
                                <p>60%</p>
                            </div>
                            <div className="color">
                                <p>70%</p>
                            </div>
                            <div className="color">
                                <p>80%</p>
                            </div>
                            <div className="color">
                                <p>100%</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>Additional Staking Rewards (APR)</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color">
                                <p>3%</p>
                            </div>
                            <div className="color">
                                <p>5%</p>
                            </div>
                            <div className="color">
                                <p>7%</p>
                            </div>
                            <div className="color">
                                <p>10%</p>
                            </div>
                            <div className="color">
                                <p>15%</p>
                            </div>
                            <div className="color">
                                <p>20%</p>
                            </div>
                            <div className="color">
                                <p>25%</p>
                            </div>
                            <div className="color">
                                <p>30%</p>
                            </div>
                            <div className="color">
                                <p>35%</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>Withdrawal Fee Refund</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive">
                                {/* <p>3%</p> */}
                            </div>
                            <div className="color">
                                <p>10%</p>
                            </div>
                            <div className="color">
                                <p>20%</p>
                            </div>
                            <div className="color">
                                <p>30%</p>
                            </div>
                            <div className="color">
                                <p>40%</p>
                            </div>
                            <div className="color">
                                <p>50%</p>
                            </div>
                            <div className="color">
                                <p>60%</p>
                            </div>
                            <div className="color">
                                <p>80%</p>
                            </div>
                            <div className="color">
                                <p>100%</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow derivative">
                        <h3>Derivative Leverage</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive">  
                                <p>80x</p>
                            </div>
                            <div className="color">
                                <p>100x</p>
                            </div>
                            <div className="color">
                                <p>110x</p>
                            </div>
                            <div className="color">
                                <p>120x</p>
                            </div>
                            <div className="color">
                                <p>130x</p>
                            </div>
                            <div className="color">
                                <p>140x</p>
                            </div>
                            <div className="color">
                                <p>150x</p>
                            </div>
                            <div className="color">
                                <p>200x</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>Additional APR for Providing Liquidity in NCX Yield Farms</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive">
                                {/* <p>3%</p> */}
                            </div>
                            <div className="color inactive">
                                {/* <p>10%</p> */}
                            </div>
                            <div className="color inactive">
                                {/* <p>20%</p> */}
                            </div>
                            <div className="color">
                                <p>5%</p>
                            </div>
                            <div className="color">
                                <p>8%</p>
                            </div>
                            <div className="color">
                                <p>10%</p>
                            </div>
                            <div className="color">
                                <p>12%</p>
                            </div>
                            <div className="color">
                                <p>15%</p>
                            </div>
                            <div className="color">
                                <p>25%</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>Use NCXT as Derivatives Trading Collateral </h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive">
                                {/* <p>3%</p> */}
                            </div>
                            <div className="color inactive">
                                {/* <p>10%</p> */}
                            </div>
                            <div className="color inactive">
                                {/* <p>20%</p> */}
                            </div>
                            <div className="color inactive">
                                {/* <p>5%</p> */}
                            </div>
                            <div className="color inactive">
                                {/* <p>5%</p> */}
                            </div>
                            <div className="color">
                                <p>10%</p>
                            </div>
                            <div className="color">
                                <p>15%</p>
                            </div>
                            <div className="color">
                                <p>20%</p>
                            </div>
                            <div className="color">
                                <p>25%</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>Use NCXT as Derivatives Trading Collateral</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive">
                                {/* <p>3%</p> */}
                            </div>
                            <div className="color inactive">
                                {/* <p>10%</p> */}
                            </div>
                            <div className="color inactive">
                                {/* <p>20%</p> */}
                            </div>
                            <div className="color inactive">
                                {/* <p>5%</p> */}
                            </div>
                            <div className="color inactive">
                                {/* <p>20%</p> */}
                            </div>
                            <div className="color inactive">
                                {/* <p>20%</p> */}
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow derivative">
                        <h3>IEO Tickets for New NCX Spot Launches</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive">  
                                <p>8%</p>
                            </div>
                            <div className="color inactive">  
                                <p>10%</p>
                            </div>
                            <div className="color inactive">  
                                <p>12%</p>
                            </div>
                            <div className="color inactive">  
                                <p>12%</p>
                            </div>
                            <div className="color">
                                <p>15%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeNCXToken;