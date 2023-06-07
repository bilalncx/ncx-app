import React from "react";
import CardMainVideo from '../../../images/home-cardvideo2.mp4';
import Button from "@mui/material/Button";
import './cardbox.css';

function HomeCardVideo()
{
    return(
        <div id="bgf__qas">
            <div className="new__crf">
                <div className="bgt_hyn">
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
                <div className="bvc_mnb">
                    <div className="container">
                        <h1>NCX Crypto Debit Card</h1>
                        <div className="hyng">
                            <Button href="https://ncx.cx/ncx-card" className="bnb_mki">Compare Cards</Button>
                            <Button href="https://my.ncx.cx/register" className="mki__lo">Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCardVideo;