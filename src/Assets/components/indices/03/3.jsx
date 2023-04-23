import React from "react";
import './3.css';
import IndicesVideo from '../../../images/ncx_app_vi.mp4';
import Button from "@mui/material/Button";
import { ReactComponent as IndicesArrow } from '../../../images/indices_arrow.svg';

function Indices3()
{
    return(
        <div className="sieze__ppp">
            <div className="container">
                <h1 className="fg__rer">Seize opportunities with a powerful trading platform</h1>
                <div className="row der__vido">
                    <div className="col bg__vdo">
                        <video 
                            id='video-scss'
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            preload="auto"
                            // poster="https://ncx.cx/images/ncx_card_poster.png"
                            >
                            <source src={IndicesVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col txt__vvv">
                        <h2>Derivatives Trading for expert traders on NCX</h2>
                        <ul>
                            <li>Get access to <strong>Advanced Trading Tools</strong> that give you the power to backtest and develop your trading strategies as well as execute the most sophisticated trades.</li>
                            <li><strong>Easy to trade.</strong> Buy and sell any asset seamlessly in just a few clicks. NCX provides the right set of tools for trader of every level in any market conditions</li>
                            <li><strong>Diversify your exposure.</strong> Thanks to a large choice of assets, you can trade in multiple markets at once while diversifying your risk.</li>
                        </ul>
                        <div className="tiy__bd">
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="download">Sign Up</Button>
                            <Button href="#" className="sign__up">Get the App</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Indices3;