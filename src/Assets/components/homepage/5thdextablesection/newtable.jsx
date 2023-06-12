import {React, useState} from "react";
import './newtable.css';
import Button from "@mui/material/Button";
import {ReactComponent as WhiteTick} from '../../../images/tickvector.svg';
import {ReactComponent as Blankvector} from '../../../images//dashvector.svg';
import OldDEXTable from './cexdex';

function NewFeatureSection()
{
    const [toggle, setToggle] = useState(false);

    return(
        <div className="feature__dx">
            {toggle && (
                <div className="mki__bh">
                    <div className="feat__gg">
                        <div className="sticky_pos">
                            <div className="lkj head container">
                                <div className="uiop">
                                    <h3>Features</h3>
                                </div>
                                <div className="uiop clr">
                                    <h3>NCX</h3>
                                </div>
                                <div className="uiop">
                                    <h3>Binance</h3>
                                </div>
                                <div className="uiop">
                                    <h3>Uniswap</h3>
                                </div>
                                <div className="uiop">
                                    <h3>Bitfinex</h3>
                                </div>
                                <div className="uiop">
                                    <h3>Pancakeswap</h3>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="tlbe__bb">
                                <div id="ngbv" className="lkj head">
                                    <div className="uiop"></div>
                                    <div className="uiop clr">
                                        <Button href="#" className="open_acnt">Open an Account</Button>
                                    </div>
                                    <div className="uiop">
                                        <div className="bynt">
                                            <p>$5bn </p>
                                            <span>Daily Trading Volume</span>
                                        </div>
                                    </div>
                                    <div className="uiop">
                                        <div className="bynt">
                                            <p>$500m </p>
                                            <span>Daily Trading Volume</span>
                                        </div>
                                    </div>
                                    <div className="uiop">
                                        <div className="bynt">
                                            <p>$200m </p>
                                            <span>Daily Trading Volume</span>
                                        </div>
                                    </div>
                                    <div className="uiop">
                                        <div className="bynt">
                                            <p>$250m </p>
                                            <span>Daily Trading Volume</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Fees</p></div>
                                    <div className="uiop clr"><p>0.12%</p></div>
                                    <div className="uiop"><p>0.10%</p></div>
                                    <div className="uiop"><p>0.30%</p></div>
                                    <div className="uiop"><p>0.20%</p></div>
                                    <div className="uiop"><p>0.25%</p></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Margin Trading</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Transaction Congestion</p></div>
                                    <div className="uiop clr"><p>Low</p></div>
                                    <div className="uiop"><p>Low</p></div>
                                    <div className="uiop"><p>High</p></div>
                                    <div className="uiop"><p>Low</p></div>
                                    <div className="uiop"><p>High</p></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Transaction Confirmation Latency</p></div>
                                    <div className="uiop clr"><p>Low</p></div>
                                    <div className="uiop"><p>Low</p></div>
                                    <div className="uiop"><p>High</p></div>
                                    <div className="uiop"><p>Low</p></div>
                                    <div className="uiop"><p>High</p></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Staking</p></div>
                                    <div className="uiop clr"><p>Decentalised</p></div>
                                    <div className="uiop"><p>Centalised</p></div>
                                    <div className="uiop"><p>Decentalised</p></div>
                                    <div className="uiop"><p>Centalised</p></div>
                                    <div className="uiop"><p>Decentalised</p></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">DEX</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Cross-Chain Swap</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Supported Networks on DEX</p></div>
                                    <div className="uiop clr"><p>10</p></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><p>5</p></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><p>1</p></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Crypto Debit Card</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">DeFi Wallet</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Fiat Deposits / Withdrawals</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Equities Trading <span>(USA, EU, ASIA Stock Market)</span></p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Forex Trading</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Indices Trading</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">ETFs Trading</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Metals Trading</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Energies Trading</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">OTC Trading</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Institutional Services</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">24/7 Support</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                                <div className="lkj">
                                    <div className="uiop"><p className="nhgt">Account Recovery</p></div>
                                    <div className="uiop clr"><WhiteTick /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                    <div className="uiop"><WhiteTick /></div>
                                    <div className="uiop"><Blankvector /></div>
                                </div>
                            </div>
                        </div>
                    </div> 
                
                    <div id="newDexMobile">
                        <OldDEXTable />
                    </div>
                </div>
            )}
            <div className="bf__pok container">
                <button 
                    onClick={() => setToggle(!toggle)} 
                    class="btn btn-primary mb-5">
                    {toggle ? "Hide Features" : "View Features"}
                </button>
            </div>
        </div>
    )
}
export default NewFeatureSection;