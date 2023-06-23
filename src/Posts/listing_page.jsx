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
                                <a href="/post-indices/540" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-729.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 23, 2023 - 12:45 AM</p>
                                    <h1>Dow Jones Today: Index Flat as Investors Mull Global Rate Decisions</h1>
                                    <p>Tech stocks soar, sending other indexes higher, but the Dow ends the day unchanged as officials digest rate hikes</p>
                                </a>
                                <a href="/post-crypto/581" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-720.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 23, 2023</p>
                                    <h1>Bitcoin: Why $34k is the next target for bulls</h1>
                                    <p>The mean coin age of Bitcoin has been rising since late May to suggest network wide accumulation.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/580" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-718.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 23, 2023 - 4:36 AM</p>
                                    <h1>Bitcoin gains to hold above US$30,000; Ether little changed with top 10 crypto mixed</h1>
                                    <p>Bitcoin rose and held above US$30,000 in Friday morning trading in Asia, holding onto the strong gains made this week on the back of growing institutional interest in the</p>
                                </a>
                            <a href="/post-crypto/579" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-719.jpg" alt="art_pic"/></div>
                                    <p className="dat">   June 22, 2023 - 8:25 PM</p>
                                    <h1>Pepecoin Becomes Biggest Meme Coin Gainer With 70% Weekly Jump</h1>
                                    <p>Pepecoin (PEPE) has seen a huge gain this week amid a broader crypto rally, outperforming other meme coins like SHIB, FLOKI and DOGE.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/554" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-723.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 23, 2023 - 12:02 AM</p>
                                    <h1>Tesla Stock Downgraded For Second Time In Two Days. Is Teslas 140% Run Ending?</h1>
                                    <p>Tesla stock was downgraded by Morgan Stanley Thursday. This comes after Barclays did the same Wednesday morning, giving TSLA an equal weight rating.</p>
                                </a>
                            <a href="/post-markets/553" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-722.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 22, 2023 - 2:14 PM</p>
                                    <h1>Wall Street ends higher as Powell wraps up testimony</h1>
                                    <p>(Reuters) - The S&P 500 and the Nasdaq closed higher on Thursday as U.S. Federal Reserve Chairman Jerome Powell continued to beat a hawkish drum and suggested the central bank</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-markets/552" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-721.jpg" alt="art_pic"/></div>
                                <p className="dat">  June 22, 2023 - 11:40 AM</p>
                                <h1>Stock market today: Asian shares sink as central banks crank interest rates still higher</h1>
                                <p>BANGKOK (AP) — Asian shares sank sharply Friday after several central banks around the world cranked interest rates higher in their fight against inflation.</p>
                            </a>
                            <a href="/post-forex/547" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-732.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 21, 2023 - 5:33 PM</p>
                                <h1>GBP/USD Forecast – British Pound Pulls Back After Initial Rally on Wednesday</h1>
                                <p>The British pound has initially tried to rally during the trading session on Wednesday but then gave back gain rather significantly. </p>
                            </a>
                            <a href="/post-commodities/543" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-727.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 21, 2023 - 4:01 AM</p>
                                <h1>Chinas gold-buying boom is slowing sharply as economic woes hit retail demand</h1>
                                <p>China's gold demand is starting to ease as the country's economic sluggishness ripples into the sector, Bloomberg reported.</p>
                            </a>
                            <a href="/post-indices/536" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-704.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 20, 2023 - 8:46 AM</p>
                                <h1>Dow Jones Futures Fall: Market Strong, But Heres What To Do; AMD, Boeing Lead Stocks To Watch</h1>
                                <p>The market rally has shown bullish action, but be prepared for a pullback in the near term. AMD and Boeing are among stocks to watch.</p>
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
                            <a href="/post-forex/550" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-735.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 23, 2023 - 6:52 AM</p>
                                    <h1>Indian rupee drops, but clings to 82/$ on portfolio inflows</h1>
                                    <p>MUMBAI (Reuters) - The Indian rupee declined on Friday, but performed better than the other Asian currencies, thanks to persistent foreign inflows into domestic equities, traders said.</p>
                                </a>
                            <a href="/post-forex/549" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-734.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 22, 2023 - 7:18 PM</p>
                                    <h1>Bank of England interest rate hike sparks pound and gilts volatility</h1>
                                    <p>The pound suffered trading volatility on Thursday as investors weighed up news that the Bank of England (BoE) had hiked interest rates by 0.5%, and what this could mean for the British economy.</p>
                                </a>
                            <a href="/post-forex/548" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-733.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 21, 2023 - 5:41 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Continues to Probe Higher Against the Japanese Yen</h1>
                                    <p>The US dollar rallied a bit during the trading session on Wednesday as we continue to see upward pressure. All things being equal, the market is trying to get to the</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/546" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-726.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 23, 2023 - 7:18 AM</p>
                                    <h1>Gold set for weekly drop as traders assess US rate outlook</h1>
                                    <p>(Reuters) - Gold prices hovered near a three-month low on Friday and were set for their biggest weekly drop since February, as the dollar strengthened after U.S. Federal Reserve Chief Jerome Powell hinted more interest rate</p>
                                </a>
                                <a href="/post-commodities/545" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-724.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 23, 2023 - 5:04 AM</p>
                                    <h1>Oil resumes slide on demand worries after UK rate hike</h1>
                                    <p>(Reuters) -Oil prices fell for a second straight session and were headed for a weekly decline of more than 3% on Friday, as a higher-than-expected interest rate hike in Britain and warnings about looming rate rises in the U.S.</p>
                                </a>
                            <a href="/post-commodities/544" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-725.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 21, 2023 - 11:04 PM</p>
                                    <h1>Oil, copper prices flash signs of recession</h1>
                                    <p>Copper (HG=F) futures are down about 8% in the last six months despite a recent rebound. The price of the metal, used for everything from wiring to construction, is 17% lower from March 2022 levels.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/539" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-730.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 23, 2023 - 12:04 AM</p>
                                    <h1>S&P 500, Nasdaq Snap 3-Day Losing Streak</h1>
                                    <p>The S&P 500 and Nasdaq snapped three-day losing streaks on Thursday as investors parsed through further commentary from Federal Reserve Chairman Jerome Powell.</p>
                                </a>
                            <a href="/post-indices/538" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-728.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 22, 2023 - 7:53 PM</p>
                                    <h1>Wall Street mixed as FTSE 100 closes lower on Fed and BoE hawkish tone</h1>
                                    <p>The FTSE 100 and European stocks plunged this Thursday following of the Bank of England’s decision to hike interest rates to 5% amid persistent inflation.</p>
                                </a>
                            <a href="/post-indices/537" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-731.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 21, 2023 - 8:20 PM</p>
                                    <h1>Dow Jones Reverses As Feds Powell Hints 5.25% Rate Soon; Tesla, Amazon Move On Analyst Ratings</h1>
                                    <p>The Dow Jones Industrial Average pared back early losses and traded flat at noon Wednesday. Fed Chair Jerome Powell affirmed that interest rates will continue to increase in his testimony in Congress.</p>
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