import React from "react";
import './5.css';
import Button from "@mui/material/Button";
import Device1 from '../../../images/device_1.png';
import Device2 from '../../../images/device_2.png';
import Device3 from '../.././../images/device_3.png';
import Device4 from '../../../images/device_4.png';
import {ReactComponent as CTrader1} from '../../../images/ctrader_logo.svg';
import {ReactComponent as CTrader2} from '../../../images/ctrader_logoB.svg';

function Indices5()
{
    return(
        <div className="trading__platform">
            <div className="container">
                <h1 className="fg__rer">NCX Innovative Trading Platforms</h1>
                <div className="plat__ggre row">

                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX cTrader App</h2>
                            <CTrader2 />
                        </div>
                        <p>Your mobile trading experience. Everything you need to trade on the go.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="#" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="pho__img">
                            <img src={Device4} alt="ncx_platform" />
                        </div>
                    </div>

                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX cTrader Web</h2>
                            <CTrader1 />
                        </div>
                        <p>Elevate your trading with innovation. Advanced tools for serious traders.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="#" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Device2} alt="ncx_platform" />
                        </div>
                    </div>
                </div>

                <div className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX cTrader Windows</h2>
                            <CTrader1 />
                        </div>
                        <p>Automate your trading on the world’s most popular platform for Derivatives trading.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="#" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Device1} alt="ncx_platform" />
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX cTrader iOS</h2>
                            <CTrader1 />
                        </div>
                        <p>Discover the next generation platform for Crypto Derivatives, Commodities, Forex and Stock markets.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="#" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="ipad__gg">
                            <img src={Device3} alt="ncx_platform" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices5;