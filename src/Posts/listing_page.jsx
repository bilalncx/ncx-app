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
                                <a href="/post-crypto/572" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-693.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 18, 2023</p>
                                    <h1>BNB Chain’s NFT landscape witnesses a rebound in June aided by…</h1>
                                    <p>After stagnating in May, BNB Chain’s NFT sales volume and trade count witnessed an impressive rebound in June.</p>
                                </a>
                                <a href="/post-indices/532" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-679.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 17, 2023 - 2:20 AM</p>
                                    <h1>S&P 500 Halts Winning Run With Big Options Test: Markets Wrap</h1>
                                    <p>(Bloomberg) -- A seemingly unstoppable stock rally fueled by Wall Street’s obsession over anything related to artificial intelligence faltered on Friday, with the market facing the</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/571" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-692.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 18, 2023</p>
                                    <h1>Solana brings some good news to investors as…</h1>
                                    <p>Solana’s activity surged with an increase in new contracts on the network.</p>
                                </a>
                            <a href="/post-crypto/570" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-691.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 17, 2023</p>
                                    <h1>Fall in Shiba Inu’s burn rate fuels these burning Qs</h1>
                                    <p>Shiba Inu’s burn rate dwindles as trading volume declines, raising concerns. However, amidst it all, active addresses soar, and prices climb.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/547" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-688.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 17, 2023 - 12:42 AM</p>
                                    <h1>U.S. Apartment Values Will Plunge A Further 20% Economists Say, But Wall Street Still Sees Major Upside In These REITs — Be Greedy When Others Are Fearful?</h1>
                                    <p>After falling for seven straight months, the Case-Shiller U.S. National Home Price Index finally showed upticks in February and March.</p>
                                </a>
                            <a href="/post-markets/546" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-685.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 16, 2023 - 9:00 PM</p>
                                    <h1>A recession is ‘at our doorstep,’ but investors are falling for a goldilocks scenario, Wells Fargo says. It ‘isn’t going to end all that well’</h1>
                                    <p>Wall Street’s repeated recession warnings are beginning to lose their bite. After more than a year of consistent doomsday forecasts, the U.S. economy has remained resilient in the face of stubborn inflation,</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/569" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-689.jpg" alt="art_pic"/></div>
                                <p className="dat">  June 17, 2023</p>
                                <h1>What does the future of Bitcoin depend on</h1>
                                <p>Bitcoin’s sluggish journey and bearish trend might give way to a bullish surge, depending on the actions of key holders and critical metrics, says a CryptoQuant report.</p>
                            </a>
                            <a href="/post-crypto/568" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-670.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 17, 2023 - 3:09 AM</p>
                                <h1>Newly Released Documents Detail Tether’s Exposure to Chinese Securities</h1>
                                <p>Financial documents released by New York’s Attorney General show that Tether was backing its USDT stablecoin in part with Chinese commercial paper as of 2021.</p>
                            </a>
                            <a href="/post-markets/545" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-687.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 16, 2023 - 8:37 PM</p>
                                <h1>The Case for Selling Highflying Tech Stocks Like Nvidia and Microsoft</h1>
                                <p>After Big Tech's parabolic run, the debate now is whether to hold the shares or fold them. Strategists at Citi argue that they look more like sells than buys.</p>
                            </a>
                            <a href="/post-forex/539" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-683.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 16, 2023 - 5:39 PM</p>
                                <h1>AUDUSD Forecast – Australian Dollar Gives Up Early Gains</h1>
                                <p>The Australian dollar initially tried to rally during the trading session on Friday, as we threatened to the crucial 0.69 level.</p>
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
                            <a href="/post-forex/542" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-680.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 16, 2023 - 6:09 PM</p>
                                    <h1>GBP/JPY Weekly Forecast – British Pound Continues to Skyrocket</h1>
                                    <p>The British pound rallied rather significantly during the course of the week, using the ¥175 level as a launching pad. Looking at the size of the candlestick,</p>
                                </a>
                            <a href="/post-forex/541" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-681.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 16, 2023 - 6:05 PM</p>
                                    <h1>AUDUSD Weekly Forecast – Aussie Dollar Breaks Through Resistance</h1>
                                    <p>The Australian dollar has broken above the 0.68 level, showing a massive amount of bullish pressure. The market continues to look very bullish,</p>
                                </a>
                            <a href="/post-forex/540" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-682.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 16, 2023 - 5:45 PM</p>
                                    <h1>GBP/JPY Forecast – British Pound Continues to Launch Into the Stratosphere</h1>
                                    <p>The British pound has rallied rather significantly during the course of the Friday trading session as we continue to see a parabolic move.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/536" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-674.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 16, 2023 - 7:20 PM</p>
                                    <h1>European gas prices are soaring again. Full tanks should avert a new energy crisis</h1>
                                    <p>Europe’s natural gas prices have shot up by more than half so far in June following months of declines, in a troubling reminder of last year’s energy crisis.</p>
                                </a>
                                <a href="/post-commodities/535" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-675.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 16, 2023 - 9:48 AM</p>
                                    <h1>AGL Will Spend A$10 billion in Shift to Renewables From Coal</h1>
                                    <p>(Bloomberg) -- AGL Energy Ltd. said it would massively expand its production of clean energy as it abandons coal-fired power plants.</p>
                                </a>
                            <a href="/post-commodities/534" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-669.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 15, 2023 - 4:00 AM</p>
                                    <h1>Shell Changes Course on Oil Production Cut Promises</h1>
                                    <p>Peak Oil will be very kind to Shell. The British oil and gas giant announced on Wednesday that it's going to keep oil production steady this...</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/531" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-678.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 17, 2023 - 12:37 AM</p>
                                    <h1>Dow Jones Today: Index Drops as Market Rally Fizzles</h1>
                                    <p>Investors couldn’t keep up the momentum from this week’s Fed rates news, but the Dow Jones Industrial Average still moved higher for the third-straight week</p>
                                </a>
                            <a href="/post-indices/530" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-677.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 17, 2023 - 12:05 AM</p>
                                    <h1>Stock rally takes breather, but S&P 500, Nasdaq have best week since March: Stock market news today</h1>
                                    <p>US stocks lost steam on Friday as a recent rally took a pause amid signs of a resilient economy that boosted hopes the Federal Reserve could end its rate-hike campaign soon.</p>
                                </a>
                            <a href="/post-indices/529" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-660.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 15, 2023 - 2:34 AM</p>
                                    <h1>Goldman Sachs Lifts S&P 500 Price Target; Here Are 2 High-Upside Stocks to Play the Bounce</h1>
                                    <p>Year-to-date, the S&P 500 has delivered an impressive return of 14%. However, those gains are a bit deceiving as the bulk of the upside has been driven by only a few selected stocks,</p>
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