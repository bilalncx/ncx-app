import React from "react";
import CardMainVideo from '../../../images/home__newvideo.mp4';
import Button from "@mui/material/Button";

function CardNewPageFirst()
{
    return(
        <div className="berv_vwe">
            <div className="bf_vdo">
                <video 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    >
                    <source src={CardMainVideo} type="video/mp4" />
                </video>
            </div>
            <div className="cont_vwef">
                <div className="container">
                    <div className="vcsd">
                        <div className="bve">
                            <h1>NCX Crypto Debit Card Pay for every day purchases with Crypto</h1>
                            <p>NCX Crypto Card pushes your payment limits higher and your options wider. Enjoy the premium experience and pay for every day purchases using card, funded by your Crypto assets 24/7/365, Globally.</p>
                            <div className="bewec">
                                <Button href="#" className="wec">Open an Account</Button>
                                <Button href="#compare-cards" className="dwc">Compare Cards</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardNewPageFirst;