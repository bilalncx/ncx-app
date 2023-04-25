import React from "react";
import Button from "@mui/material/Button";
import Device1 from '../../../images/device_1.png';
import Device2 from '../../../images/device_2.png';
import Device3 from '../.././../images/device_3.png';
import Device4 from '../../../images/device_4.png';
import {ReactComponent as CTrader1} from '../../../images/ctrader_logo.svg';
import {ReactComponent as CTrader2} from '../../../images/ctrader_logoB.svg';
import WalletMobileVideo from '../../../images/wallet_mbl.mp4';
import WalletMobileVideo2 from '../../../images/wallet_mbl2.mp4';
import {ReactComponent as NCXBadge1} from '../../../images/ncx-badge.svg';
import {ReactComponent as NCXBadge2} from '../../../images/ncx-badge2.svg';

function Indices5()
{
    return(
        <div className="trading__platform">
            <div className="container">
                <h1 className="fg__rer">NCX Innovative Platforms, Products and Applications</h1>
                <div className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX App</h2>
                            <NCXBadge1 />
                        </div>
                        <p>Your mobile trading experience. Everything you need to trade on the go.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src={WalletMobileVideo2} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX DeFi Wallet App</h2>
                            <NCXBadge2 />
                        </div>
                        <p>Hold the private keys to your assets - Store, Swap, Send, Receive, Buy Crypto in NCX non Custodial DeFi Wallet, built on 12 Blockchain Networks</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="pla__img gf__grthbh">
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src={WalletMobileVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX cTrader App</h2>
                            <CTrader2 />
                        </div>
                        <p>Your mobile trading experience. Everything you need to trade on the go.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="pho__img">
                            <img src={Device4} alt="ncx_platform" />
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX cTrader Web</h2>
                            <CTrader1 />
                        </div>
                        <p>Elevate your trading with innovation. Advanced tools for serious traders.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Device2} alt="ncx_platform" />
                        </div>
                    </div>
                </div>
                <div className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX cTrader Windows</h2>
                            <CTrader1 />
                        </div>
                        <p>Automate your trading on the most advanced platform for Derivatives trading.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Device1} alt="ncx_platform" />
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX cTrader iOS</h2>
                            <CTrader1 />
                        </div>
                        <p>Discover the next generation platform for Crypto Derivatives, Commodities, Forex and Stock markets.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="ipad__gg">
                            <img src={Device3} alt="ncx_platform" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices5;