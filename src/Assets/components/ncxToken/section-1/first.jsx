import React from "react";
import './first.css';
import Timer from "../../ncxToken/countdown/TimeStart";
import RoundSlider from '../../ncxToken/round_slider/round';
import { ReactComponent as HowWork } from '../../../images/how-it-work.svg';
import { ReactComponent as WhyBuyToken } from '../../../images/why-buy-token.svg';
import { Telegram } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";

function FirstSect()
{
    return(
        <div className="token_first_sect">
            <div className="container">
                <div className="row txxss">
                    <div className="col txt112">
                        <h1>NCX TOKEN POWERING WORLD’S FIRST HYBRID CEX | DEX | TRADING PLATFORM & DEFI ECOSYSTEM </h1>
                        <div className="btnss">
                            <a href="#" className="token_signin">Token Dashboard Sign In</a>
                            <a href="#" className="claim_airdrop">Claim Airdrop</a>
                        </div>
                        <p>Sign Up today and get 4,000 NCX Tokens Airdrop</p>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row slider_countdown">
                    <div className="col">
                        <RoundSlider />
                    </div>
                    <div className="col">
                        <div className="bonus_col">
                            <p>Current Bonus</p>
                            <h1>5-25%</h1>
                            <p className="contributors">Contributors can Receive</p>
                        </div>
                        <Timer />
                    </div>
                </div>
                <div className="how_and_why22">
                    <div className="ds22">
                        <div className="work">
                            <a href="#"><HowWork /></a>
                            <a><p>How it works</p></a>
                        </div>
                        <div className="work">
                            <a href="#"><WhyBuyToken /></a>
                            <a href="#"><p>Why buy Tokens now?</p></a>
                        </div>
                    </div>
                    <div className="social-col">
                        <Instagram />
                        <Telegram />
                        <Twitter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSect;