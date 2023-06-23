import React from "react";
// import CardMainVideo from '../../../images/new-cardvideo.mp4';
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
                    <source src="https://ncx.cx/images/ncx-cardvideo.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="cont_vwef">
                <div className="container">
                    <div className="vcsd">
                        <div className="bve">
                            <h1>NCX Crypto Debit Card Pay for every day purchases with Crypto</h1>
                            <h2 className="za__uj">NCX Crypto Debit Card</h2>
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