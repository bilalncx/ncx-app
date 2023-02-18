import { React, useState } from 'react'
import './fifth.css'
import '../../homepage/accordian/accordian.css';
import BackVideo from '../../../images/ncx-firstslidervideo.mp4';

function Accordian()
{
    return(
        <div id="exclusive_rates">
            <div className="backgrdound-video">
                <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    >
                    <source src={BackVideo} type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <h1 className='exclusive'>Exclusive Rates</h1>
                <div className="exclusive_rates">
                    <div className="col">
                        <h3>Spot fee rate</h3>
                        <div className="rates_div">
                            <div className="marker_lowest">
                                <h1>0.00%</h1>
                                <p>Marker Lowest</p>
                            </div>
                            <div className="marker_lowest">
                                <h1>0.005%</h1>
                                <p>Taker Lowest</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3>Futures fee rate</h3>
                        <div className="rates_div">
                            <div className="marker_lowest">
                                <h1>0.00%</h1>
                                <p>Marker Lowest</p>
                            </div>
                            <div className="marker_lowest">
                                <h1>0.005%</h1>
                                <p>Taker Lowest</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3>Withdrawals</h3>
                        <div className="rates_div">
                            <div className="marker_lowest">
                                <h1>0.02%</h1>
                                <p>Withdrawal Fee Lowest</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}
export default Accordian;