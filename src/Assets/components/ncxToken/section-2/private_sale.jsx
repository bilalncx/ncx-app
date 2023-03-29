import  React from "react";
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import './style.css';
import {ReactComponent as NCXTickmark } from '../../../images/check.svg';
import { ReactComponent as TokenTick } from '../../../images/check.svg';
import {ReactComponent as NCXTokenIcon} from '../../../images/token_icon.svg';
import { ReactComponent as NCXTokenLogo } from '../../../images/token-footerlogo.svg';


function HomeNCXToken()
{
    return(
        <div id="presale_ncxT">
            <div className="container">
                <div className="stake_ncx">
                    <NCXTokenLogo />
                    <h1>Token <span>Private Sale</span></h1>
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
                        <h3>Private Sale Round</h3>
                        <div className="mbl-tokrowitems">
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
                    </div>
                    <div className="mbl-tokrow">
                        <h3>NCX Token Price in USDT</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color">
                                <p>$0.0004</p>
                            </div>
                            <div className="color">
                                <p>$0.0006</p>
                            </div>
                            <div className="color">
                                <p>$0.0008</p>
                            </div>
                            <div className="color">
                                <p>$0.0011</p>
                            </div>
                            <div className="color">
                                <p>$0.0015</p>
                            </div>
                            <div className="color">
                                <p>$0.002</p>
                            </div>
                            <div className="color">
                                <p>$0.003</p>
                            </div>
                            <div className="color">
                                <p>$0.004</p>
                            </div>
                            <div className="color">
                                <p>$0.008</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>Lockup Period</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color">
                                <p>9 Months</p>
                            </div>
                            <div className="color">
                                <p>6 Months</p>
                            </div>
                            <div className="color">
                                <p>5 Months</p>
                            </div>
                            <div className="color">
                                <p>4 Months</p>
                            </div>
                            <div className="color">
                                <p>3 Months</p>
                            </div>
                            <div className="color">
                                <p>2 Months</p>
                            </div>
                            <div className="color">
                                <p>30 Days</p>
                            </div>
                            <div className="color">
                                <p>Unlocked</p>
                            </div>
                            <div className="color mbl-hid">
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>After Lockup Period Ends</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color">
                                <p>10% Monthly Release</p>
                            </div>
                            <div className="color">
                                <p>10% Monthly Release</p>
                            </div>
                            <div className="color">
                                <p>20% Monthly Release</p>
                            </div>
                            <div className="color">
                                <p>20% Monthly Release</p>
                            </div>
                            <div className="color">
                                <p>25% Monthly Release</p>
                            </div>
                            <div className="color">
                                <p>25% Monthly Release</p>
                            </div>
                            <div className="color">
                                <p>25% Monthly Release</p>
                            </div>
                            <div className="color">
                                <p>25% Monthly Release</p>
                            </div>
                            <div className="color mbl-hid">
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow derivative">
                        <h3>Receive Trading Fee Discounts during the Vesting Period</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color">
                                <p><TokenTick /></p>
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
                            <div className="color mbl-hid"></div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>Receive Staking Rewards during the Vesting Period</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color mbl-hid"></div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>Receive Staking Rewards during the Vesting Period</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color mbl-hid"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeNCXToken;