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
                                <a href="/post-crypto/568" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-670.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 17, 2023 - 3:09 AM</p>
                                    <h1>Newly Released Documents Detail Tether’s Exposure to Chinese Securities</h1>
                                    <p>Financial documents released by New York’s Attorney General show that Tether was backing its USDT stablecoin in part with Chinese commercial paper as of 2021.</p>
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
                            <a href="/post-crypto/567" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-671.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 16, 2023 - 3:21 PM</p>
                                    <h1>Bitcoin remains above US$25,000; NFT sales down; Asian, European markets gain with U.S. futures mixed</h1>
                                    <p>Bitcoin rose in Friday afternoon trading in Asia, a day after asset management firm BlackRock provided a timely fillip to the digital asset industry by filing to launch an</p>
                                </a>
                            <a href="/post-crypto/566" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-673.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 16, 2023 - 9:24 AM</p>
                                    <h1>BlackRock files for spot Bitcoin ETF, taps Coinbase as custodian</h1>
                                    <p>BlackRock, which manages about US$10 trillion as the world’s biggest asset manager, has filed to launch the first publicly traded spot Bitcoin exchange-traded fund (ETF) </p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/542" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-658.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 15, 2023 - 10:07 AM</p>
                                    <h1>China Leads Stock Gains as PBOC Cuts, Fed Holds: Markets Wrap</h1>
                                    <p>(Bloomberg) -- Chinese equities led gains in Asian shares Thursday after the Federal Reserve paused monetary tightening and the People’s Bank of China cut a key </p>
                                </a>
                            <a href="/post-markets/541" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-659.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 15, 2023 - 6:25 AM</p>
                                    <h1>Goldman cutting more than 30 Asia investment banking jobs - sources</h1>
                                    <p>HONG KONG (Reuters) -Goldman Sachs Group is cutting more than 30 banking jobs in Asia, two sources with knowledge of the matter said,</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-forex/539" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-683.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 16, 2023 - 5:39 PM</p>
                                <h1>AUDUSD Forecast – Australian Dollar Gives Up Early Gains</h1>
                                <p>The Australian dollar initially tried to rally during the trading session on Friday, as we threatened to the crucial 0.69 level.</p>
                            </a>
                            <a href="/post-crypto/565" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-672.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 16, 2023 - 5:24 AM</p>
                                <h1>Bitcoin edges up after slump, Ether little-changed, other top 10 tokens continue bumpy ride</h1>
                                <p>Bitcoin rose in Friday morning trading in Asia, after falling below US$25,000 overnight and overall posting a losing week, a trend mirrored by Ether.</p>
                            </a>
                            <a href="/post-crypto/562" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-662.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 15, 2023 - 7:47 AM</p>
                                <h1>Ethereum Survives AWS Outage Unscathed But Analysts Warn Of Future Incidents</h1>
                                <p>Ethereum’s reliance on centralized infrastructure is under scrutiny after some U.S. users of Amazon Web Services, the world’s largest cloud hosting provider,</p>
                            </a>
                            <a href="/post-commodities/533" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-666.jpg" alt="art_pic"/></div>
                                <p className="dat">  June 15, 2023 - 12:04 AM</p>
                                <h1>Its not just gasoline: Other energy prices are finally falling, too</h1>
                                <p>Some types of inflation are highly visible. Gasoline prices, in giant numbers at every filling station, are probably the most-seen inflation gauge.</p>
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