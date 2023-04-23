import React from "react";
import './8.css';
import HeaderImage1 from '../../../images/indices_head-1.png';
import HeaderImage2 from '../../../images/indices_head-2.png';
import Button from "@mui/material/Button";

function Indices8(){
    return(
        <div className="indices__hdd">
            <div className="container">
                <div className="row">
                    <div className="col tvt__f">
                        <h1>Trade Derivatives with up to 200x Leverage</h1>
                        <div className="points__ff">
                            <span>Crypto Derivatives</span>
                            <span>Equities (US, EU, Asia Stock Markets)</span>
                        </div>
                        <div className="points__ff">
                            <span>Over 500 Trading Pairs</span>
                            <span>Oil & Gas Trading</span>
                            <span>Forex Trading</span>
                        </div>
                        <div className="points__ff">
                            <span>Metals Trading</span>
                            <span>ETFs Trading</span>
                            <span>Trade with up to 100x Leverage</span>
                        </div>
                        <div className="points__ff">
                            <span>Metals Trading</span>
                            <span>Trade World Markets with NCX Superior Execution</span>
                        </div>
                        <div className="hh__btn">
                            <Button href="#" className="up_sin">Sign Up</Button>
                            <Button href="#" className="get__ap">Get the App</Button>
                        </div>
                    </div>
                    <div className="col tvt__f mobile">
                        <h1>Trade Derivatives with up to 200x Leverage</h1>
                        <div className="points__ff">
                            <span>Crypto Derivatives</span>
                            <span>Oil & Gas Trading</span>
                        </div>
                        <div className="points__ff">
                            <span>Equities (US, EU, Asia Stock Markets)</span>
                            <span>Metals Trading</span>
                        </div>
                        <div className="points__ff">
                            <span>Forex Trading</span>
                            <span>Over 500 Trading Pairs</span>
                        </div>
                        <div className="points__ff">
                            <span>ETFs Trading</span>
                            <span>Trade with up to 100x Leverage</span>
                        </div>
                        <div className="points__ff">
                            <span>Trade World Markets with NCX Superior Execution</span>
                        </div>
                        <div className="hh__btn">
                            <Button href="#" className="up_sin">Sign Up</Button>
                            <Button href="#" className="get__ap">Get the App</Button>
                        </div>
                    </div>
                    <div className="col mgg">
                        <img src={HeaderImage1} alt="prices"/>
                        <img src={HeaderImage2} alt="prices"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices8;