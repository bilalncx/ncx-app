import React from "react";
import './9.css';

function TradingSteps()
{
    return(
        <div className="steps__tr">
            <div className="container">
                <h1 className="fg__rer">How to open a MetaTrader 4 account</h1>
                <div className="steps__ff">
                    <div className="fyu">
                        <h1>1</h1>
                        <p>Create your NCX Profile</p>
                    </div>
                    <div className="fyu">
                        <h1>2</h1>
                        <p>Register your MT4 account</p>
                    </div>
                    <div className="fyu">
                        <h1>3</h1>
                        <p>Fund your Trading account</p>
                    </div>
                    <div className="fyu">
                        <h1>4</h1>
                        <p>Download the MT4 platform</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TradingSteps;