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
                                <a href="/post-crypto/583" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-737.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 24, 2023 - 12:27 AM</p>
                                    <h1>Brazilian Central Bank Adds Crypto Exchange Mercado Bitcoin in CBDC Pilot Including Mastercard</h1>
                                    <p>Brazil’s central bank authorized on Thursday the largest local crypto exchange, Mercado Bitcoin, to participate in the pilot of the digital real, the South American</p>
                                </a>
                                <a href="/post-markets/556" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-739.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 24, 2023 - 2:00 PM</p>
                                    <h1>Top India ETFs for 2023</h1>
                                    <p>FLIN, INCO, and INDA are the India ETS with the lowest fees, highest 1-year return, and most liquidity, respectively.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/582" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-736.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 23, 2023 - 8:24 PM</p>
                                    <h1>Bitcoin Hits One-Year High, Soars Past $31.3K</h1>
                                    <p>Bitcoin continued its mid-June surge Friday morning (ET), soaring to a one-year high above $31,000, before retreating below this threshold later in the day.</p>
                                </a>
                            <a href="/post-crypto/581" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-720.jpg" alt="art_pic"/></div>
                                    <p className="dat">   June 23, 2023</p>
                                    <h1>Bitcoin: Why $34k is the next target for bulls</h1>
                                    <p>The mean coin age of Bitcoin has been rising since late May to suggest network wide accumulation.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/555" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-738.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 24, 2023 - 6:52 AM</p>
                                    <h1>Apple stock could soar 37% to a $4 trillion market valuation by the end of 2024 after confirming a key breakout to all-time highs</h1>
                                    <p>Apple stock could see big upside ahead after it confirmed its breakout above the prior record high of $183, according to Fairlead Strategies.</p>
                                </a>
                            <a href="/post-markets/554" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-723.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 23, 2023 - 12:02 AM</p>
                                    <h1>Tesla Stock Downgraded For Second Time In Two Days. Is Teslas 140% Run Ending?</h1>
                                    <p>Tesla stock was downgraded by Morgan Stanley Thursday. This comes after Barclays did the same Wednesday morning, giving TSLA an equal weight rating.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/580" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-718.jpg" alt="art_pic"/></div>
                                <p className="dat">  June 23, 2023 - 4:36 AM</p>
                                <h1>Bitcoin gains to hold above US$30,000; Ether little changed with top 10 crypto mixed</h1>
                                <p>Bitcoin rose and held above US$30,000 in Friday morning trading in Asia, holding onto the strong gains made this week on the back of growing institutional interest in the world</p>
                            </a>
                            <a href="/post-indices/539" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-730.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 23, 2023 - 12:04 AM</p>
                                <h1>S&P 500, Nasdaq Snap 3-Day Losing Streak</h1>
                                <p>The S&P 500 and Nasdaq snapped three-day losing streaks on Thursday as investors parsed through further commentary from Federal Reserve Chairman Jerome Powell.</p>
                            </a>
                            <a href="/post-markets/553" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-722.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 22, 2023 - 2:14 PM</p>
                                <h1>Wall Street ends higher as Powell wraps up testimony</h1>
                                <p>(Reuters) - The S&P 500 and the Nasdaq closed higher on Thursday as U.S. Federal Reserve Chairman Jerome Powell continued to beat a hawkish drum and suggested</p>
                            </a>
                            <a href="/post-commodities/544" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-725.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 21, 2023 - 11:04 PM</p>
                                <h1>Oil, copper prices flash signs of recession</h1>
                                <p>Copper (HG=F) futures are down about 8% in the last six months despite a recent rebound. The price of the metal, used for everything from wiring to construction, is 17% lower from March 2022 levels.</p>
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
                            <a href="/post-commodities/547" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-742.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 24, 2023 - 12:00 PM</p>
                                    <h1>Iran’s Oil Supplies Are One More Challenge for OPEC+</h1>
                                    <p>Oil markets have been buzzing over a potential return of Iranian oil to the market amid press reports of renewed U.S.-Iranian talks.</p>
                                </a>
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
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/542" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-741.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 24, 2023 - 4:00 PM</p>
                                    <h1>S&P 500 Giants Lead Stocks Near Buy Points; Can They Hold Up Amid The Market Pullback?</h1>
                                    <p>S&P 500 stocks Paccar (PCAR) and Parker Hannifin (PH) are in focus, along with Monday.com (MNDY), Shopify (SHOP) and HubSpot (HUBS).</p>
                                </a>
                            <a href="/post-indices/541" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-740.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 23, 2023 - 6:27 PM</p>
                                    <h1>Dow Jones Falls 250 Points After Key Economic Data, Set For Losing Week; Tesla Stock Downgraded To Sell</h1>
                                    <p>The Dow Jones Industrial Average briefly dropped more than 250 points Friday after key economic data, with the major stock indexes eyeing a losing week as investors brace for future rate hikes from the Federal Reserve.</p>
                                </a>
                            <a href="/post-indices/540" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-729.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 23, 2023 - 12:45 AM</p>
                                    <h1>Dow Jones Today: Index Flat as Investors Mull Global Rate Decisions</h1>
                                    <p>Tech stocks soar, sending other indexes higher, but the Dow ends the day unchanged as officials digest rate hikes.</p>
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