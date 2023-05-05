import React from "react";
import './style.css';
import Button from "@mui/material/Button";

function PostListingSection()
{
    return(
        <div className="pst__lstng">
            <div className="container">
                <div className="nsghts row">
                    <div className="col lft_br">
                        <div className="category_se">
                            <h1 className="tile_hed">Latest Insights</h1>
                            <div className="art_grf row">
                                <a href="/post-indices/504" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-487.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 5, 2023 - 1:21 PM</p>
                                    <h1>3 Nasdaq 100 Stocks That Are Surefire Buys in May</h1>
                                    <p>These growth-driven innovators are attractively priced and begging to be bought.</p>
                                </a>
                                <a href="/post-markets/506" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-482.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 5, 2023 - 2:56 AM</p>
                                    <h1>US banking crisis: Close to 190 banks could collapse, according to study</h1>
                                    <p>With the failure of three regional banks since March, and another one teetering on the brink, will America soon see a cascade of bank failures?</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/509" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-485.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 5, 2023 - 12:50 AM</p>
                                    <h1>Cryptocurrency Prices And News: Bitcoin Rises Near $29,000. Coinbase Beats Earnings.</h1>
                                    <p>Cryptocurrency News: Bitcoin and ethereum led cryptocurrency prices higher Thursday as bank worries deepened. Meanwhile, ARK Invest CEO Cathie Wood loaded up on COIN stock this week ahead Coinbase's earnings beat late Thursday.</p>
                                </a>
                            <a href="/post-crypto/510" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-486.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 4, 2023 - 7:30 PM</p>
                                    <h1>Bitcoins huge rally is masking a drop in liquidity as smaller trades move the market</h1>
                                    <p>Bitcoin has surged 70% so far this year, but market liquidity for the world's top cryptocurrency is drying up.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                                <a href="/post-markets/507" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-483.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 4, 2023 - 3:34 PM</p>
                                    <h1>What JPMorgan’s First Republic takeover means for the crypto industry</h1>
                                    <p>n the midst of every crisis lies great opportunity. That’s certainly true in the case of cryptocurrency, the most influential financial innovation of our age, whose very origins are often attributed to the global financial crisis that engulfed banks, economies and livelihoods some 15 years ago.</p>
                                </a>
                                <a href="/post-markets/503" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-477.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 3, 2023 - 12:07 PM</p>
                                    <h1>Chinas AI industry barely slowed by US chip export rules</h1>
                                    <p>(Reuters) - U.S. microchip export controls imposed last year to freeze China's development of supercomputers used to develop nuclear weapons and artificial-intelligence systems like ChatGPT are having only minimal effects on China's tech sector.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-indices/505" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-488.jpg" alt="art_pic"/></div>
                                <p className="dat">May 5, 2023 - 11:41 AM</p>
                                <h1>FTSE 100 and European stocks rise with interest rates still in focus</h1>
                                <p>The FTSE 100 and European markets opened higher on Friday as investors continued to assess the impact of rate hikes by the European Central Bank (ECB) and US Federal Reserve.</p>
                            </a>
                            <a href="/post-forex/504" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-489.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 4, 2023 - 11:44 PM</p>
                                <h1>FOREX-Dollar gains, euro dips after cautious ECB</h1>
                                <p>(Reuters) - The dollar rose on Thursday against the euro after the European Central Bank eased its pace of rate hikes, a day after the Federal Reserve hiked rates by 25 basis points and indicated that it may pause further increases.</p>
                            </a>
                            <a href="/post-markets/504" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-478.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 3, 2023 - 11:54 AM</p>
                                <h1>UBS weighed Credit Suisse deal as early as December - SEC filing</h1>
                                <p>ZURICH (Reuters) -UBS was considering the potential impact of buying struggling rival Credit Suisse as early as December, months before the takeover was hastily arranged by Swiss authorities in March, according to a regulatory filing.</p>
                            </a>
                            <a href="/post-crypto/507" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-480.jpg" alt="art_pic"/></div>
                                <p className="dat">May 3, 2023</p>
                                <h1>BTC traders could be in soup as Bitcoin oscillates between red and green</h1>
                                <p>As of 1 May, BTC’s hashrate reached a new all-time high of 473.87 EH/s. The spike in hashrate could be attributed to the rising Bitcoin ordinal inscriptions. However, despite this, BTC traded in the red at the time of writing.</p>
                            </a>
                            {/* <a href="/post-crypto/441" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-456.jpg" alt="art_pic"/></div>
                                <p className="dat">Apr 24, 2023 - 9:43 PM</p>
                                <h1>Bitcoin could soar 268% to $100,000 as crypto winter is finally over, Standard Chartered says</h1>
                                <p>The crypto winter has melted away, and bitcoin is set to flourish, a Standard Chartered note forecasted on Monday.</p>
                            </a> */}
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Forex</h1>
                            <div className="art_grf row">
                            <a href="/post-forex/504" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-489.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 4, 2023 - 11:44 PM</p>
                                    <h1>FOREX-Dollar gains, euro dips after cautious ECB</h1>
                                    <p>(Reuters) - The dollar rose on Thursday against the euro after the European Central Bank eased its pace of rate hikes, a day after the Federal Reserve hiked rates by 25 basis points and indicated that it may pause further increases.</p>
                                </a>
                            <a href="/post-forex/503" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-469.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 29, 2023 - 10:25 PM</p>
                                    <h1>Dollar dominance could give way to a tripolar currency system as Chinas yuan and the euro rise on the world stage</h1>
                                    <p>The dollar has been king for decades but its slippage as a reserve currency has raised concerns as to whether a rival currency will dethrone it.</p>
                                </a>
                                <a href="/post-forex/501" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-464.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 27, 2023 - 4:32 PM</p>
                                    <h1>AUDUSD Forecast – Australian Dollar Bounces</h1>
                                    <p>The Australian dollar has bounced a bit during the trading session on Thursday, as the 0.66 level has offered support previously. At this point, we are trying to determine whether or not we are going to break down below that level and continue to go further down.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/503" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-484.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 5, 2023 - 12:23 PM</p>
                                    <h1>The Real Oil Market Shows $20-a-Barrel Price Collapse Is Excessive</h1>
                                    <p>(Bloomberg) -- Crude markets have suffered a disastrous few weeks, dragged down by alarm over the wider economy. But real oil demand still looks strong enough to foster a rebound in prices.</p>
                                </a>
                            <a href="/post-commodities/502" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-475.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 2, 2023 - 11:22 PM</p>
                                    <h1>Why Oil and Gas Majors Chevron, ExxonMobil, and Petrobras Were Plunging Today</h1>
                                    <p>A combination of negative economic data and thin trading in oil markets led to a sharp drop in crude prices Tuesday.</p>
                                </a>
                            <a href="/post-commodities/501" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-471.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 1, 2023 - 4:43 AM</p>
                                    <h1>Oil drops as economic growth concerns offset OPEC+ cuts</h1>
                                    <p>LONDON (Reuters) -Oil fell on Monday as concern over the economic impact of the U.S. Federal Reserve potentially raising interest rates and weaker Chinese manufacturing data outweighed support from OPEC+ supply cuts taking effect this month.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/505" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-488.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 5, 2023 - 11:41 AM</p>
                                    <h1>FTSE 100 and European stocks rise with interest rates still in focus</h1>
                                    <p>The FTSE 100 and European markets opened higher on Friday as investors continued to assess the impact of rate hikes by the European Central Bank (ECB) and US Federal Reserve.</p>
                                </a>
                            <a href="/post-indices/503" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-476.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 3, 2023 - 3:02 PM</p>
                                    <h1>FTSE 100 Live: ‘Investors are extremely anxious’ ahead of US rates call; oil price falls</h1>
                                    <p>The FTSE 100 index today regained lost ground during a busy session for blue-chip updates.</p>
                                </a>
                            <a href="/post-indices/502" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-470.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 29, 2023 - 1:23 AM</p>
                                    <h1>Global stocks mostly up as yen tumbles after Bank of Japan decision</h1>
                                    <p>Global stock markets mostly rose Friday following modestly positive economic data in Europe and the United States, while the yen tumbled after the Bank of Japan maintained its easing policies.</p>
                                </a>
                            </div>
                            <Button href="/post-indices" className="red__mor">View All</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostListingSection;