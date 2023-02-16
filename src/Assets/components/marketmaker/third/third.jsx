import { AnimationOnScroll } from 'react-animation-on-scroll';
import  React from "react";
import '../../homepage/8thgradientsection/gradient.css';

function Home8thGradientSection(){
    return(
        <div className="gradient">
            <div className="container">
                <h1 className='market_benefits'>Market Makers <span>Trading Benefits</span></h1>
                <div className="gradient-bar">
                    <AnimationOnScroll animateIn="animate__slideInLeft">
                        <div className="gradientbar"></div>
                    </AnimationOnScroll>
                </div>
                <div className="row gradient-text">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3>01</h3>
                            <h1>Special Fees</h1>
                            <p>NCX Market Makers will have unconditional access to these privileges:</p>
                            <ul>
                                <li>Top-tier fee rate in 1st Month</li>
                                <li>Permanent discount fee rate</li>
                            </ul>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3>02</h3>
                            <h1>Exclusive Withdrawal Limits</h1>
                            <p>Reach out to your MM Contact for</p>
                            <ul>
                                <li>Exclusive daily withdrawal limit</li>
                                <li>Customized margin loan quota</li>
                            </ul>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3>03</h3>
                            <h1>Interest-free Credit</h1>
                            <p>Apply for high interest-free credit in two steps:</p>
                            <ul>
                                <li>Sign E-Contract</li>
                                <li>Fill in credit Form</li>
                            </ul>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3>03</h3>
                            <h1>Stable API</h1>
                            <p>Stable and exclusive API service:</p>
                            <ul>
                                <li>Spot API</li>
                                <li>Futures API</li>
                            </ul>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="transaction_rebates">
                    <div className="hsd13">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3>Transaction <span>Rebates</span></h3>
                            <p>Market Makers can get up to 0.02% of Rebate from Maker trading in spot markets, which is settled in the pricing currency of the market.</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="amm_markettable">
                        <div className="amm_head">
                            <div className="col"><p>Rebate Level</p></div>
                            <div className="col"><p>Ranking</p></div>
                            <div className="col"><p>Rebate Ratio (Returned in pricing currencies)</p></div>
                        </div>
                        <div className="amm_body_row">
                            <div className="col"><p>LV3</p></div>
                            <div className="col"><p>Top 1-5</p></div>
                            <div className="col"><p>0.02%</p></div>
                        </div>
                        <div className="amm_body_row">
                            <div className="col"><p>LV2</p></div>
                            <div className="col"><p>Top 6-10</p></div>
                            <div className="col"><p>0.015%</p></div>
                        </div>
                        <div className="amm_body_row">
                            <div className="col"><p>LV1</p></div>
                            <div className="col"><p>Top 11-20</p></div>
                            <div className="col"><p>0.01%</p></div>
                        </div>
                    </div>
                    <div className="fees_details">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h4>About Transaction Rebate:</h4>
                            <p>1. The Rebate level is updated monthly based on the ranking of the last-month trading volume. Only the Top 20 can enjoy the Rebate.</p>
                            <p>2. The Rebate is calculated against the total transaction volume of Maker trading in spot markets on the previous day and settled in the pricing currency of the market.</p>
                            <p>3. The Rebate is NOT available for AMM markets.</p>
                            <p>4. For Spot Market Maker Rebate benefits, please inquire your Market Making Manager.</p>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home8thGradientSection;