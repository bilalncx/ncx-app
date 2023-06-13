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
                                <a href="/post-markets/540" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-647.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 13, 2023 - 12:20 AM</p>
                                    <h1>Morgan Stanley’s investment chief called 2022’s bear market, and he says stocks are still hibernating—he sees a 14% drop ahead</h1>
                                    <p>Mike Wilson isn’t afraid to stand out from the crowd in an industry that doesn’t often reward that type of behavior.</p>
                                </a>
                                <a href="/post-crypto/561" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-641.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 12, 2023 - 9:08 PM</p>
                                    <h1>Hong Kong Lawmaker Invites Coinbase to Apply to Operate in Region Amid U.S. SEC Crackdown</h1>
                                    <p>A Hong Kong lawmaker invited global virtual asset trading operators, including crypto exchange Coinbase, to come and register in the region.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/560" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-642.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 12, 2023 - 5:30 PM</p>
                                    <h1>Binance plans to swap 750 million of token pairs to ensure liquidity</h1>
                                    <p>(Reuters) - Binance said in a tweet on Monday it would swap 750 million tether-tron token pairs for tether-ether in an attempt to maintain the stablecoin's liquidity.</p>
                                </a>
                            <a href="/post-crypto/559" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-643.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 12, 2023 - 2:37 PM</p>
                                    <h1>Bitcoin stays below US$26,000 in mixed market, Binance’s BNB biggest loser in 24 hours</h1>
                                    <p>Bitcoin inched up but continued to trade below US$26,000 on Monday afternoon in Asia, while all other top 10 non-stablecoin cryptocurrencies traded mixed,</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/539" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-648.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 12, 2023 - 8:21 PM</p>
                                    <h1>Stock Market Holds Gains Ahead Of CPI, Fed Decision; Cruise Line Stocks Sail Higher</h1>
                                    <p>The stock market started the week in the green ahead of the Fed meeting this week. Tesla rallied for 12th day in row.</p>
                                </a>
                            <a href="/post-markets/538" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-636.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 10, 2023 - 4:54 PM</p>
                                    <h1>The bull market in stocks wont last long - and theres a 99% chance of a US recession, top economist David Rosenberg says</h1>
                                    <p>The stock market's powerful rally is unfounded, and the US economy is virtually guaranteed to sink into recession, David Rosenberg has warned.</p>
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
                            <a href="/post-forex/533" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-652.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 12, 2023 - 5:42 PM</p>
                                <h1>GBP to USD Forecast – Sterling Gives Up a Certain Amount of Strength</h1>
                                <p>The British pound initially tried to rally during the trading session on Monday but gave back gains to show hesitation yet again.</p>
                            </a>
                            <a href="/post-forex/532" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-651.jpg" alt="art_pic"/></div>
                                <p className="dat">  June 12, 2023 - 5:36 PM</p>
                                <h1>EUR/USD Forecast – Euro Tests Top of Short-term Range</h1>
                                <p>The euro rallied a bit during the trading session on Monday, as we continue to test a short-term range.</p>
                            </a>
                            <a href="/post-markets/537" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-635.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 10, 2023 - 1:45 AM</p>
                                <h1>MasterCard (MA) Outpaces Stock Market Gains: What You Should Know</h1>
                                <p>MasterCard (MA) closed the most recent trading day at $369.22, moving +0.44% from the previous trading session.</p>
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
                            <a href="/post-forex/536" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-655.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 12, 2023 - 6:03 PM</p>
                                    <h1>GBP/JPY Forecast – Pound Looks Tired Against the Yen</h1>
                                    <p>The British pound has rallied a bit during the early hours on Monday, to continue the move above the ¥175 level.</p>
                                </a>
                            <a href="/post-forex/535" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-654.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 12, 2023 - 5:54 PM</p>
                                    <h1>AUDUSD Forecast – Australian Dollar Pierces 200-Day EMA</h1>
                                    <p>The Australian dollar has rallied significantly during the trading session on Monday, as we continue to reach toward the 0.68 level.</p>
                                </a>
                            <a href="/post-forex/534" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-653.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 12, 2023 - 5:48 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Sees Noisy Behavior</h1>
                                    <p>The US dollar continues to see a lot of noisy sideways action against the Japanese yen, as we are in the midst of forming something along the lines of a bullish flag.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/530" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-650.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 12, 2023 - 6:18 PM</p>
                                    <h1>Five Key Charts to Watch in Global Commodities This Week</h1>
                                    <p>(Bloomberg) -- Biodiesel fans will be keenly awaiting an announcement this week by the US Environmental Protection Agency on how much of the renewable product must be blended into the nation’s fuel supply.</p>
                                </a>
                            <a href="/post-commodities/529" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-649.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 12, 2023 - 4:58 AM</p>
                                    <h1>Gold eases as dollar firms at start of busy Fed week</h1>
                                    <p>(Reuters) - Gold prices dipped on Monday as the dollar and bond yields firmed, while traders braced for a busy week of key U.S. inflation prints and major central bank policy meetings,</p>
                                </a>
                                <a href="/post-commodities/528" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-638.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 9, 2023 - 2:30 PM</p>
                                    <h1>Natural Gas ETF Buying Spree Has Traders Fearing Wild Swings</h1>
                                    <p>(Bloomberg) -- A buying spree in ETFs tied to natural gas is spurring concern that the securities risk destabilizing a market that up until now has been the province of energy pros.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/527" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-646.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 13, 2023 - 4:43 AM</p>
                                    <h1>Dow Jones Futures: Nasdaq Hits 2023 High; Inflation Data, Fed Meeting Loom; Tesla Extends Win Streak</h1>
                                    <p>Dow Jones futures: The Nasdaq hit a fresh 2023 high ahead of key inflation data and the Fed meeting. Tesla stock extended its win streak.</p>
                                </a>  
                            <a href="/post-indices/526" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-645.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 12, 2023 - 5:31 PM</p>
                                    <h1>Dow Jones Rises Ahead Of Inflation Data, Fed Meeting; AMD, Amazon Rally On Price-Target Hikes</h1>
                                    <p>The Dow Jones rose Monday ahead of this week's inflation data and two-day Fed meeting. AMD and Amazon rallied on price-target hikes.</p>
                                </a>  
                            <a href="/post-indices/525" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-644.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 12, 2023 - 2:28 PM</p>
                                    <h1>S&P 500 and Nasdaq close at highest since April 2022</h1>
                                    <p>(Reuters) - The S&P 500 and the Nasdaq rallied on Monday to their highest closing levels since April 2022, while Oracle hit a record high ahead of quarterly results as investors awaited inflation data</p>
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