import React from "react";
import './4.css';
import GlobalMarket1 from '../../../images/global_1.png';
import GlobalMarket2 from '../../../images/global_2.png';
import GlobalMarket3 from '../../../images/global_4.png';
import GlobalMarket4 from '../../../images/global_3.png';

function Indices4()
{
    return(
        <div className="global__mart">
            <div className="container">
                <h1 className="fg__rer">Get everything you need to take on global markets</h1>
                <div className="global__row row">
                    <div className="col">
                        <img src={GlobalMarket1} alt="global"/>
                        <h2>Lowest fees in Industry</h2>
                        <p>Benefit from leading market prices, Stake NCXT and get Trading Fees rebates of up to 90% across all asset classes.</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket2} alt="global"/>
                        <h2>True multi asset Platform</h2>
                        <p>Trade Financial Markets globally with access to 7 asset classes at the most favourable conditions.</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket3} alt="global"/>
                        <h2>24/7 Support in multiple languages</h2>
                        <p>Take advantage of our digital and live customer support team, fully based in Switzerland.</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket4} alt="global"/>
                        <h2>Fast Order Execution</h2>
                        <p>Low latency fibre optic and Equinix NY4 Server Average execution speeds of under 40ms</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices4;