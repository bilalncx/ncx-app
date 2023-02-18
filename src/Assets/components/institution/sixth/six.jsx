import React from "react";
import './six.css';
import Advantage1 from '../../../images/ncx-advantage1.svg';
import Advantage2 from '../../../images/ncx-advantage2.svg';
import Advantage3 from '../../../images/ncx-advantage3.svg';

function DataandAnalytics()
{
    return(
        <div className="data_analytics">
            <div className="container">
                <h1>Data and Analytics</h1>
                <div className="analytics_row">
                    <div className="col">
                        <div className="analytic_sect">
                            <img src={Advantage3} alt="ncx-analytics-advantage" />
                            <p className="sub_heds">Historical Data</p>
                            <h2>Backtest and Strategy Optimization</h2>
                            <p>NCX supports traders to backtest and strategy optimization based on historical spot & margin, futures contracts and delivery contract data.</p>
                            <a href="#">More</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="analytic_sect">
                            <img src={Advantage2} alt="ncx-analytics-advantage" />
                            <p className="sub_heds">Analytics</p>
                            <h2>Wide Range of Analytics</h2>
                            <p>NCX arm our traders with dynamic, aggregated market data to track cryptocurrency spot and derivatives markets in real-time.</p>
                            <a href="#">More</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="analytic_sect">
                            <img src={Advantage1} alt="ncx-analytics-advantage" />
                            <p className="sub_heds">Tax API and Transaction History</p>
                            <h2>Export Data Function</h2>
                            <p>Equip with tax reporting tools, API to help you keep track and export your crypto activities to ensure you're fulfilling local tax reporting requirements.</p>
                            <a href="#">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DataandAnalytics;

