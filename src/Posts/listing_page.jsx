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
                                <a href="/post-commodities/534" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-669.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 15, 2023 - 4:00 AM</p>
                                    <h1>Shell Changes Course on Oil Production Cut Promises</h1>
                                    <p>Peak Oil will be very kind to Shell. The British oil and gas giant announced on Wednesday that it's going to keep oil production steady this...</p>
                                </a>
                                <a href="/post-crypto/564" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-664.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 15, 2023</p>
                                    <h1>Bitcoin: Expecting BTC to rally after FOMC’s latest update? Well…</h1>
                                    <p>Bitcoin [BTC] didn’t exactly see any significant price pump after the FOMC meeting. In fact, BTC’s fear and greed index indicated a sentiment of fear around the</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/563" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-665.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 15, 2023 - 7:57 AM</p>
                                    <h1>Bitcoin mining difficulty rises 2.18% to record amid increasing competition among miners</h1>
                                    <p>Bitcoin’s mining difficulty level rose 2.18% on Wednesday to an all-time high. The level changes every two weeks and measures the additional computing power</p>
                                </a>
                            <a href="/post-crypto/562" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-662.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 15, 2023 - 7:47 AM</p>
                                    <h1>Ethereum Survives AWS Outage Unscathed But Analysts Warn Of Future Incidents</h1>
                                    <p>Ethereum’s reliance on centralized infrastructure is under scrutiny after some U.S. users of Amazon Web Services, the world’s largest cloud hosting provider, suffered</p>
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
                            <a href="/post-indices/527" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-646.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 13, 2023 - 4:43 AM</p>
                                <h1>Dow Jones Futures: Nasdaq Hits 2023 High; Inflation Data, Fed Meeting Loom; Tesla Extends Win Streak</h1>
                                <p>Dow Jones futures: The Nasdaq hit a fresh 2023 high ahead of key inflation data and the Fed meeting. Tesla stock extended its win streak.</p>
                            </a>
                            <a href="/post-markets/540" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-647.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 13, 2023 - 12:20 AM</p>
                                <h1>Morgan Stanley’s investment chief called 2022’s bear market, and he says stocks are still hibernating—he sees a 14% drop ahead</h1>
                                <p>Mike Wilson isn’t afraid to stand out from the crowd in an industry that doesn’t often reward that type of behavior. In late 2021, the Wall Street veteran,</p>
                            </a>
                            <a href="/post-forex/535" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-654.jpg" alt="art_pic"/></div>
                                <p className="dat">  June 12, 2023 - 5:54 PM</p>
                                <h1>AUDUSD Forecast – Australian Dollar Pierces 200-Day EMA</h1>
                                <p>The Australian dollar has rallied significantly during the trading session on Monday, as we continue to reach toward the 0.68 level.</p>
                            </a>
                            <a href="/post-commodities/530" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-650.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 12, 2023 - 6:18 PM</p>
                                <h1>Five Key Charts to Watch in Global Commodities This Week</h1>
                                <p>(Bloomberg) -- Biodiesel fans will be keenly awaiting an announcement this week by the US Environmental Protection Agency on how much of the renewable product</p>
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
                            <a href="/post-forex/538" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-656.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 15, 2023 - 6:57 AM</p>
                                    <h1>Yen Falls to 7-Month Low as Traders Shift Focus From Fed to BOJ</h1>
                                    <p>(Bloomberg) -- The yen weakened to its lowest since November as traders shifted their focus from a hawkish Federal Reserve to Friday’s Bank of Japan policy decision.</p>
                                </a>
                            <a href="/post-forex/537" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-657.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 14, 2023 - 5:06 PM</p>
                                    <h1>GBP to USD Forecast – British Pound Continues to See Bullish Pressure</h1>
                                    <p>The British pound has rallied a bit during the trading session on Tuesday as we wait for the Federal Reserve announcement.</p>
                                </a>
                            <a href="/post-forex/536" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-655.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 12, 2023 - 6:03 PM</p>
                                    <h1>GBP/JPY Forecast – Pound Looks Tired Against the Yen</h1>
                                    <p>The British pound has rallied a bit during the early hours on Monday, to continue the move above the ¥175 level.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/533" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-666.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 15, 2023 - 12:04 AM</p>
                                    <h1>Its not just gasoline: Other energy prices are finally falling, too</h1>
                                    <p>Some types of inflation are highly visible. Gasoline prices, in giant numbers at every filling station, are probably the most-seen inflation gauge.</p>
                                </a>
                            <a href="/post-commodities/532" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-667.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 14, 2023 - 6:20 PM</p>
                                    <h1>Russias Yamal LNG to resume LNG supplies to Indias GAIL - Kommersant</h1>
                                    <p>MOSCOW (Reuters) - Russia's Yamal LNG plant is set to resume liquefied natural gas (LNG) supplies to India's GAIL under a long-term contract involving a Gazprom unit, Kommersant daily reported on Wednesday citing Russian government sources.</p>
                                </a>
                                <a href="/post-commodities/531" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-668.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 14, 2023 - 10:06 AM</p>
                                    <h1>Shell boosts dividend, steadies oil output under new CEOs plan</h1>
                                    <p>LONDON (Reuters) -Shell said it will ramp up its dividend and share buybacks while keeping oil output steady into 2030, as CEO Wael Sawan moved to regain investor confidence that wavered over its energy transition plan.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/529" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-660.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 15, 2023 - 2:34 AM</p>
                                    <h1>Goldman Sachs Lifts S&P 500 Price Target; Here Are 2 High-Upside Stocks to Play the Bounce</h1>
                                    <p>Year-to-date, the S&P 500 has delivered an impressive return of 14%. However, those gains are a bit deceiving as the bulk of the upside has been driven by only a few selected stocks,</p>
                                </a>  
                            <a href="/post-indices/528" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-661.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 14, 2023 - 4:19 PM</p>
                                    <h1>Dow Jones Futures Fall: Fed Decision Due As Nasdaq Looks Extended; What Investors Need Now</h1>
                                    <p>The Nasdaq and S&P 500 are at 2023 highs with breadth expanding heading into the Fed decision. Here's what investors need. now.</p>
                                </a>
                            <a href="/post-indices/527" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-646.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 13, 2023 - 4:43 AM</p>
                                    <h1>Dow Jones Futures: Nasdaq Hits 2023 High; Inflation Data, Fed Meeting Loom; Tesla Extends Win Streak</h1>
                                    <p>Dow Jones futures: The Nasdaq hit a fresh 2023 high ahead of key inflation data and the Fed meeting. Tesla stock extended its win streak.</p>
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