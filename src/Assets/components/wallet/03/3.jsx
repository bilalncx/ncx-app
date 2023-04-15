import React from "react";
import './style.css';
import NCXWalletVideo from '../../../images/ncx_wallet_video.mp4';

function Wallet3()
{
    return(
        <div className="wallet__main">
            <div id="wallet__mp">
                <video 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    poster="../../../images/Token_bg.jpg"
                    >
                    <source src={NCXWalletVideo} type="video/mp4" />
                </video>
            </div>
            <div className="txt__wall">
                <div className="container">
                    <div className="tcc__rr">
                        <div className="col">
                            <h3>NCX <span>DeFi</span> Wallet</h3>
                            <h1>Your <span>Keys</span>, Your Crypto.</h1>
                            <p>A non-custodial wallet that gives you access to a full suite of DeFi services in one place.</p>
                            <div className="wallet__btn">
                                <a href="#" className="sign__up">Sign Up</a>
                                <a href="#" className="learn__mo">Learn More</a>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Wallet3;