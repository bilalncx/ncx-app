import React from "react";
import './ana.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as AboutLogo } from '../../../images/about_logo.svg';

function AboutNCXDefi()
{
    return(
        <div className="data_analytics">
            <div className="container">
                <AnimationOnScroll className="trading_col" animateIn="animate__fadeIn">
                    <div className="about_logo">
                        <AboutLogo />
                        <h1>Data & Analytics</h1>
                    </div>
                </AnimationOnScroll>

                <div className="analytics_row fsdcc3">
                    <div className="col fs33">
                        <div className="ffd23">
                            <h3>Historical Data</h3>
                            <h1>Backtest and Strategy Optimization</h1>
                            <p>NCX supports traders to backtest and strategy optimization based on historical spot & margin, futures contracts and delivery contract data.</p>
                        </div>
                    </div>
                    <div className="col fs33">
                        <div className="ffd23">
                            <h3>Analytics</h3>
                            <h1>Wide Range of Analytics</h1>
                            <p>NCX arm our traders with dynamic, aggregated market data to track cryptocurrency spot and derivatives markets in real-time.</p>
                        </div>
                    </div>
                    <div className="col fs33">
                        <div className="ffd23">
                            <h3>Tax API and Transaction History</h3>
                            <h1>Export Data Function</h1>
                            <p>Equip with tax reporting tools, API to help you keep track and export your crypto activities to ensure you're fulfilling local tax reporting requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutNCXDefi;