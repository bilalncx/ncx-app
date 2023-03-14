import {React} from "react";
import './first.css';
import BackVideo from '../../../images/ncx-firstslidervideo.mp4';
import {ReactComponent as Icon} from '../../../images/ncx-staricon.svg';
import Button from "@mui/material/Button";
// import ApplyNowModal from '../../applynowmodal/apply';

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
                    preload="auto"
                    poster="https://ncx.cx/images/ncx_line_poster.png"
                    >
                    <source src={BackVideo} type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <div className="ambassador row">
                    <div className="col">
                        <Icon />
                        <h1>NCX Ambassador</h1>
                        <div className="txt44">
                            <p>NCX Ambassadors are global promotion partners of NCX - The Global Cryptocurrency Exchange</p>
                            <p>Ambassadors earn a passive income of 40-60% commission on trading fees of their affiliates</p>
                        </div>
                        {/* <ApplyNowModal /> */}
                        <Button href="mailto: support@ncx.cx">Apply Now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FirstVideo;