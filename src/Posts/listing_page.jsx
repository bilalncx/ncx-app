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
                                <a href="/post-crypto/514" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-498.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 8, 2023</p>
                                    <h1>Tron [TRX] retracement on the way? Memecoin mania lends support to price rally</h1>
                                    <p>Tron’s development activity metric recently showed signs that activity is regaining after the previous downside seen since the last week of April. </p>
                                </a>
                                <a href="/post-crypto/516" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-500.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 8, 2023</p>
                                    <h1>Polygon [MATIC] approaches range lows – what traders can expect next</h1>
                                    <p>MATIC’s bullish order block at key support level continues to slow down bearish momentum.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/515" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-499.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 8, 2023 </p>
                                    <h1>Crypto market in flux: ETH, PEPE contribute to $50 million liquidation; short positions suffer</h1>
                                    <p>The crypto market was awash with fear and uncertainty as liquidations reached over $50 million, leaving investors reeling and short positions crushed under losses.</p>
                                </a>
                            <a href="/post-crypto/513" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-497.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 8, 2023</p>
                                    <h1>Bitcoin Ordinals: Miner fees breaks new record, assessing the effects on BTC</h1>
                                    <p>Bitcoin Ordinals reaches unprecedented heights, breaking fee records and surging in popularity, while BTC price cautiously recovers with modest gains, charting its course.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/510" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-501.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 8, 2023 - 4:47 PM</p>
                                    <h1>UDow Jones Futures Rise As PacWest Soars On Dividend Cut. Occidental Drops On Warren Buffett Comments.</h1>
                                    <p>Dow Jones futures rose modestly in a tightly mixed overall market early Monday. Key inflation data and Disney earnings are on tap for this week. </p>
                                </a>
                                <a href="/post-markets/508" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-494.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 6, 2023 - 9:00 PM</p>
                                    <h1>Wall Street Is in No Mood to Celebrate the Fed’s Last Rate Hike</h1>
                                    <p>(Bloomberg) -- Markets may have just survived the last of the most aggressive rate hikes in four decades. Few on Wall Street are celebrating.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-markets/509" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-502.jpg" alt="art_pic"/></div>
                                <p className="dat">May 8, 2023 - 4:45 PM</p>
                                <h1>Is Netflix Stock A Buy After Video Streamers First-Quarter Report?</h1>
                                <p>Internet television network Netflix (NFLX) has a commanding lead in the streaming video market but its growth has slowed. NFLX stock cratered in 2022 after the company reported two straight quarters of subscriber declines.</p>
                            </a>
                            <a href="/post-commodities/505" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-506.jpg" alt="art_pic"/></div>
                                <p className="dat">May 8, 2023 - 3:08 PM</p>
                                <h1>Warren Buffett Isnt Acquiring Occidental Petroleum. Time to Sell?</h1>
                                <p>Warren Buffett doused cold water on the speculation that Berkshire Hathaway (BRK.A 1.36%) (BRK.B 1.18%) had set its sights on its next elephant.</p>
                            </a>
                            <a href="/post-indices/506" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-495.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 6, 2023 - 12:22 AM</p>
                                <h1>Dow Jones Bounces Off Key Level After Stunning Jobs Report. Warren Buffetts Berkshire Hathaway Reports Saturday.</h1>
                                <p>The Dow Jones Industrial Average closed near session highs and bounced off its 50-day moving average on Friday. Apple (AAPL) rose after strong earnings late Thursday along with other blue chip leaders, pushing the index up by over 1.5%.</p>
                            </a>
                            <a href="/post-forex/507" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-503.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 5, 2023 - 7:15 PM</p>
                                <h1>USD/JPY Weekly Forecast – US Dollar Continues to See Volatility Against Yen</h1>
                                <p>The US dollar has gone back and forth during trading this week, as we continue to see a lot of noisy behavior in general.</p>
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
                            <a href="/post-forex/508" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-504.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 8, 2023 - 2:41 PM</p>
                                    <h1>Rupee ends little changed on likely dollar buying by RBI</h1>
                                    <p>MUMBAI (Reuters) - The Indian rupee held in a tight range on Monday with intermittent dollar buying intervention by the Reserve Bank of India (RBI) limiting any upside in the domestic currency against a broadly weaker greenback.</p>
                                </a>
                            <a href="/post-forex/507" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-503.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 5, 2023 - 7:15 PM</p>
                                    <h1>USD/JPY Weekly Forecast – US Dollar Continues to See Volatility Against Yen</h1>
                                    <p>The US dollar has gone back and forth during trading this week, as we continue to see a lot of noisy behavior in general. We are in a larger ascending triangle that should be paid close attention to, but I think it does make a certain amount of sense that one would have to assume there are buyers underneath willing to get involved.</p>
                                </a>
                            <a href="/post-forex/506" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-492.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 5, 2023 - 7:04 PM</p>
                                    <h1>GBP/JPY Weekly Forecast – The British Pound Pulls Back From Crucial Highs</h1>
                                    <p>The British pound has been very active during the trading week, as we have seen it reach to a fresh, new high, only to turn around and plunge later in the week.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/506" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-505.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 8, 2023 - 5:35 PM</p>
                                    <h1>Oil Rebounds on US Jobs Data and Canadian Output Disruption</h1>
                                    <p>(Bloomberg) -- Oil futures advanced on stronger-than-expected jobs data in the US and disruption to oil production in Alberta because of wildfires.</p>
                                </a>
                            <a href="/post-commodities/505" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-506.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 8, 2023 - 3:08 PM</p>
                                    <h1>Warren Buffett Isnt Acquiring Occidental Petroleum. Time to Sell?</h1>
                                    <p>Warren Buffett doused cold water on the speculation that Berkshire Hathaway (BRK.A 1.36%) (BRK.B 1.18%) had set its sights on its next elephant.</p>
                                </a>
                            <a href="/post-commodities/504" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-496.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 6, 2023 - 12:21 AM</p>
                                    <h1>A debacle in the financial markets ... will definitely have collateral damage in oil, says analyst</h1>
                                    <p>t's been brutal week for oil prices, despite a Friday rebound. Slides in earlier sessions led crude futures to close out their third straight week of losses.</p>
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