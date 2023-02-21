import React from "react";
import '../../ambassador/first/first.css';
import BackVideo from '../../../images/ncx-firstslidervideo.mp4';
import {ReactComponent as Icon} from '../../../images/ncx-staricon.svg';
import Button from "@mui/material/Button";

function FirstVideo()
{
    return(
        <div className="ambassadordiv">
                <div className="backgrdound-video">
                    <video
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="none"
                        poster="https://ncx.cx/images/ncx_line_poster.png"
                        >
                        <source src={BackVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="container">
                    <div className="ambassador row">
                        <div className="col">
                            <Icon />
                            <h1>NCX Market Maker</h1>
                            <div className="txt44">
                                <p>Professional entities trading  with API services and reach a monthly trading volume of 5,000,000 USD in Spot/Derivatives markets can apply and become a Market Maker on NCX</p>
                                {/* <p>Ambassadors earn a passive income of 40-60% commission on trading fees of their affiliates</p> */}
                            </div>
                            <Button href="#">Apply Now</Button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default FirstVideo;