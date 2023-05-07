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
                                <a href="/post-crypto/511" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-490.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 6, 2023 - 3:00 PM</p>
                                    <h1>Bitcoin could rally 40% by the end of the year, according to a top blockchain founder</h1>
                                    <p>I'm somewhat of a skeptic when it comes to digital assets, but so far this year bitcoin's been the top performing asset by a landslide — it's up more than 73%.</p>
                                </a>
                                <a href="/post-commodities/504" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-496.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 6, 2023 - 12:21 AM</p>
                                    <h1>A debacle in the financial markets ... will definitely have collateral damage in oil, says analyst</h1>
                                    <p>It's been brutal week for oil prices, despite a Friday rebound. Slides in earlier sessions led crude futures to close out their third straight week of losses.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/512" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-491.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 5, 2023 - 2:12 PM</p>
                                    <h1>Bitcoin rises, Solana leads losses across top 10 cryptos, U.S. dollar slides amid banking sector concerns</h1>
                                    <p>Bitcoin rose while Ether fell in Thursday afternoon trade in Asia, with declines across most of the other top 10 non-stablecoin cryptocurrencies by market capitalization. Solana’s SOL token was the biggest loser of the day.</p>
                                </a>
                            <a href="/post-crypto/509" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-485.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 5, 2023 - 12:50 AM</p>
                                    <h1>Cryptocurrency Prices And News: Bitcoin Rises Near $29,000. Coinbase Beats Earnings.</h1>
                                    <p>Cryptocurrency News: Bitcoin and ethereum led cryptocurrency prices higher Thursday as bank worries deepened. Meanwhile, ARK Invest CEO Cathie Wood loaded up on COIN stock this week ahead Coinbase's earnings beat late Thursday.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                                <a href="/post-markets/508" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-494.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 6, 2023 - 9:00 PM</p>
                                    <h1>Wall Street Is in No Mood to Celebrate the Fed’s Last Rate Hike</h1>
                                    <p>(Bloomberg) -- Markets may have just survived the last of the most aggressive rate hikes in four decades. Few on Wall Street are celebrating.</p>
                                </a>
                                <a href="/post-markets/506" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-482.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 5, 2023 - 2:56 AM</p>
                                    <h1>US banking crisis: Close to 190 banks could collapse, according to study</h1>
                                    <p>With the failure of three regional banks since March, and another one teetering on the brink, will America soon see a cascade of bank failures?</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-commodities/503" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-484.jpg" alt="art_pic"/></div>
                                <p className="dat">May 5, 2023 - 12:23 PM</p>
                                <h1>The Real Oil Market Shows $20-a-Barrel Price Collapse Is Excessive</h1>
                                <p>(Bloomberg) -- Crude markets have suffered a disastrous few weeks, dragged down by alarm over the wider economy. But real oil demand still looks strong enough to foster a rebound in prices.</p>
                            </a>
                            <a href="/post-indices/505" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-488.jpg" alt="art_pic"/></div>
                                <p className="dat">May 5, 2023 - 11:41 AM</p>
                                <h1>FTSE 100 and European stocks rise with interest rates still in focus</h1>
                                <p>The FTSE 100 and European markets opened higher on Friday as investors continued to assess the impact of rate hikes by the European Central Bank (ECB) and US Federal Reserve.</p>
                            </a>
                            <a href="/post-forex/504" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-489.jpg" alt="art_pic"/></div>
                                <p className="dat">May 4, 2023 - 11:44 PM</p>
                                <h1>FOREX-Dollar gains, euro dips after cautious ECB</h1>
                                <p>(Reuters) - The dollar rose on Thursday against the euro after the European Central Bank eased its pace of rate hikes, a day after the Federal Reserve hiked rates by 25 basis points and indicated that it may pause further increases.</p>
                            </a>
                            <a href="/post-markets/507" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-483.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 4, 2023 - 3:34 PM</p>
                                <h1>What JPMorgan’s First Republic takeover means for the crypto industry</h1>
                                <p>In the midst of every crisis lies great opportunity. That’s certainly true in the case of cryptocurrency, the most influential financial innovation of our age, whose very origins are often attributed to the global financial crisis that engulfed banks, economies and livelihoods some 15 years ago.</p>
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
                            <a href="/post-forex/506" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-492.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 5, 2023 - 7:04 PM</p>
                                    <h1>GBP/JPY Weekly Forecast – The British Pound Pulls Back From Crucial Highs</h1>
                                    <p>The British pound has been very active during the trading week, as we have seen it reach to a fresh, new high, only to turn around and plunge later in the week.</p>
                                </a>
                                <a href="/post-forex/505" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-493.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 5, 2023 - 5:56 PM</p>
                                    <h1>EUR/USD Forecast – Euro Falls After Jobs Number</h1>
                                    <p>The Euro initially tried to rally during the trading session on Friday but found enough resistance above to turn things around and started selling off.</p>
                                </a>
                            <a href="/post-forex/504" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-489.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 4, 2023 - 11:44 PM</p>
                                    <h1>FOREX-Dollar gains, euro dips after cautious ECB</h1>
                                    <p>(Reuters) - The dollar rose on Thursday against the euro after the European Central Bank eased its pace of rate hikes, a day after the Federal Reserve hiked rates by 25 basis points and indicated that it may pause further increases.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/504" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-496.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 6, 2023 - 12:21 AM</p>
                                    <h1>A debacle in the financial markets ... will definitely have collateral damage in oil, says analyst</h1>
                                    <p>t's been brutal week for oil prices, despite a Friday rebound. Slides in earlier sessions led crude futures to close out their third straight week of losses.</p>
                                </a>
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
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/506" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-495.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 6, 2023 - 12:22 AM</p>
                                    <h1>Dow Jones Bounces Off Key Level After Stunning Jobs Report. Warren Buffetts Berkshire Hathaway Reports Saturday.</h1>
                                    <p>The Dow Jones Industrial Average closed near session highs and bounced off its 50-day moving average on Friday. Apple (AAPL) rose after strong earnings late Thursday along with other blue chip leaders, pushing the index up by over 1.5%.</p>
                                </a>
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