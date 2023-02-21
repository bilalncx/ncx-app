import React from "react";
import '../../ambassador/first/first.css';
import BackVideo from '../../../images/ncx-firstslidervideo.mp4';
import {ReactComponent as Icon} from '../../../images/ncx-staricon.svg';

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
                            <h1>Institutional Services</h1>
                            <div className="txt44">
                                <p>Professional digital asset solutions for Institutional and Corporate Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default FirstVideo;