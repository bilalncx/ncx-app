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
                                <a href="/post-indices/508" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-526.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 13, 2023 - 1:06 PM</p>
                                    <h1>Nasdaq Bear Market: 5 Exceptional Growth Stocks Youll Regret Not Buying on the Dip</h1>
                                    <p>A sizable dip in the innovation-driven Nasdaq Composite is the perfect excuse for investors to pounce on some phenomenal deals.</p>
                                </a>
                                <a href="/post-markets/513" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-514.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 12, 2023 - 9:04 PM</p>
                                    <h1>Nvidia Stock Nearly Doubles In 2023 Amid AI Frenzy — Is It A Buy?</h1>
                                    <p>Nvidia (NVDA) is a giant in data centers and gaming, with AI chips a growth opportunity. Is Nvidia stock a buy after nearly doubling so far this year?</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/523" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-511.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 12, 2023 - 2:33 PM</p>
                                    <h1>Bitcoin, Ether fall along with most top 10 cryptos; U.S. futures rise ahead of debt ceiling negotiations</h1>
                                    <p>Bitcoin and Ether fell during Friday afternoon trading in Asia, along with most of the top 10 non-stablecoin cryptocurrencies by market capitalization, apart from the XRP token.</p>
                                </a>
                            <a href="/post-crypto/522" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-512.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 12, 2023 - 11:21 PM</p>
                                    <h1>Binance pulls out of Canada amid new crypto regulations</h1>
                                    <p>(Reuters) -Binance said on Friday it was withdrawing from Canada, weeks after the country issued a series of new guidelines for cryptocurrency exchanges including investor limits and mandatory registrations.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/512" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-515.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 12, 2023 - 8:08 AM</p>
                                    <h1>US stocks trade mostly lower as fresh economic data spurs new recession fears</h1>
                                    <p>US stocks traded mostly lower on Thursday after fresh economic data reignited fears of a potential recession.</p>
                                </a>
                                <a href="/post-markets/511" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-516.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 12, 2023 - 4:13 AM</p>
                                    <h1>U.S. Treasury yields to rise amid debt ceiling standoff: Reuters poll</h1>
                                    <p>BENGALURU (Reuters) - U.S. Treasury yields will rise significantly over the coming month, according to analysts polled by Reuters who were split over whether the risk of a U.S. default was higher or the same as prior stand-offs over the debt ceiling.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-forex/511" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-523.jpg" alt="art_pic"/></div>
                                <p className="dat">May 12, 2023 - 5:44 PM</p>
                                <h1>AUDUSD Weekly Forecast – Australian Dollar Gives Up Early Gains This Week</h1>
                                <p>The Australian dollar initially tried to rally and break above the 0.68 level. That being said, the market is likely to continue to look at this range as something that</p>
                            </a>
                            <a href="/post-crypto/521" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-513.jpg" alt="art_pic"/></div>
                                <p className="dat">May 12, 2023 - 11:06 AM</p>
                                <h1>Bitcoin Prices Slip to 2-Month Lows as CoinDesk’s Bitcoin Trend Indicator Turns Neutral From Bullish</h1>
                                <p>Bitcoin (BTC) continues to lose ground in the wake of CoinDesk's Bitcoin Trend Indicator shedding the bullish bias for the first time in three weeks.</p>
                            </a>
                            <a href="/post-commodities/507" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-519.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 12, 2023 - 5:08 AM</p>
                                <h1>Oil prices fall on stronger dollar, demand fears</h1>
                                <p>NEW YORK (Reuters) - Oil prices settled more than 1% lower on Friday, falling for the third consecutive week, as the market balanced supply fears against renewed economic concerns in the United States and China.</p>
                            </a>
                            <a href="/post-crypto/520" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-507.jpg" alt="art_pic"/></div>
                                <p className="dat">May 10, 2023 - 6:24 AM</p>
                                <h1>Bitcoin, Ether edge up; Litecoin leads winners, Matic the losers; U.S. equity futures flat</h1>
                                <p>Bitcoin edged higher on Wednesday morning in Asia to hold above the US$27,500 mark as the hype for Bitcoin-based memecoins that had clogged the network seemed to cool off.</p>
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
                            <a href="/post-forex/514" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-520.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 12, 2023 - 6:07 PM</p>
                                    <h1>USD/JPY Weekly Forecast – US Dollar Bounces for the Week</h1>
                                    <p>The US dollar initially fell against the Japanese yen during the week but has turned right back around, showing signs of life again.</p>
                                </a>
                            <a href="/post-forex/513" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-521.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 12, 2023 - 5:59 PM</p>
                                    <h1>GBP to USD Weekly Forecast – British Pound Pulls Back for the Week</h1>
                                    <p>The British pound initially tried to rally during the trading week but gave back quite a bit of the gain to show signs of negativity.</p>
                                </a>
                            <a href="/post-forex/512" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-522.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 12, 2023 - 5:50 PM</p>
                                    <h1>EUR/USD Weekly Forecast – Euro Plunges for the Week</h1>
                                    <p>The euro initially tried to rally during the trading week but then fell apart. At this point, the euro has turned around quite drastically, breaking down below the 1.09 level.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/509" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-517.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 12, 2023 - 7:47 PM</p>
                                    <h1>Oil market will flip to being undersupplied in coming months, says strategist</h1>
                                    <p>The imbalance between oil supply and demand is likely to reverse going into the summer, says one analyst.</p>
                                </a>
                            <a href="/post-commodities/508" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-518.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 12, 2023 - 7:11 PM</p>
                                    <h1>Europes new energy problem: it now has too much gas</h1>
                                    <p>Europe has come a long way from the frenzied stockpiling driving up natural gas prices a year ago. As of May 9, Europe’s gas storage was full to 62%, and at the current pace of refilling, storage is expected to hit its capacity of about 1,138 terawatt-hours (TWh) by late August, according to estimates by Morgan Stanley. And it is driving down gas prices.</p>
                                </a>
                            <a href="/post-commodities/507" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-519.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 12, 2023 - 5:08 AM</p>
                                    <h1>Oil prices fall on stronger dollar, demand fears</h1>
                                    <p>NEW YORK (Reuters) - Oil prices settled more than 1% lower on Friday, falling for the third consecutive week, as the market balanced supply fears against renewed economic concerns in the United States and China.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/508" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-526.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 13, 2023 - 1:06 PM</p>
                                    <h1>Nasdaq Bear Market: 5 Exceptional Growth Stocks Youll Regret Not Buying on the Dip</h1>
                                    <p>A sizable dip in the innovation-driven Nasdaq Composite is the perfect excuse for investors to pounce on some phenomenal deals.</p>
                                </a>
                            <a href="/post-indices/507" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-527.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 12, 2023 - 8:01 PM</p>
                                    <h1>Dow Jones Drifts Lower, But Buyers Lift Chevron, Cisco Systems. First Solar Surges On Acquisition News.</h1>
                                    <p>The Dow Jones Industrial Average was down modestly near midday Friday, along with other major stock indexes.</p>
                                </a>
                            <a href="/post-indices/506" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-495.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 6, 2023 - 12:22 AM</p>
                                    <h1>Dow Jones Bounces Off Key Level After Stunning Jobs Report. Warren Buffetts Berkshire Hathaway Reports Saturday.</h1>
                                    <p>The Dow Jones Industrial Average closed near session highs and bounced off its 50-day moving average on Friday. Apple (AAPL) rose after strong earnings late Thursday along with other blue chip leaders, pushing the index up by over 1.5%.</p>
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