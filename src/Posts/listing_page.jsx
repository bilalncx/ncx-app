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
                            <a href="/post-crypto/605" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-827.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 8, 2023</p>
                                    <h1>Why Ethereum saw 580,000 new addresses in one week</h1>
                                    <p>Ethereum’s groundbreaking merge introduced staking, but the quiet surge in new addresses and declining ETH on exchanges hint at a promising and confident future.</p>
                                </a>
                                <a href="/post-crypto/604" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-826.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 8, 2023</p>
                                    <h1>Litecoin overtakes Bitcoin: Is there a new sheriff in town?</h1>
                                    <p>Litecoin surpassed Bitcoin to emerge as the most used digital asset for payments in the month of June.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/603" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-825.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 8, 2023</p>
                                    <h1>Cosmos’ Interchain embraces this token’s issuance through KAVA</h1>
                                    <p>Kava blockchain will facilitate USDT’s launch on interchain. This development will not only make it easier for DeFi users to transfer funds from one chain to another, but also make it more cost efficient.</p>
                                </a>
                            <a href="/post-crypto/602" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-824.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 8, 2023</p>
                                    <h1>LUNC faces declining volume, sloppy price action: What’s next?</h1>
                                    <p>Luna Classic’s [LUNC] weakening support levels have seen prices continue to sink to all-time lows (ATLs). With bulls unable to stem the bearish slide, Luna Classic dipped below the $0.00008115 support level as of press time.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/582" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-838.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 8, 2023 - 6:31 AM</p>
                                    <h1>Ants surprise share buyback values firm at steep 75% discount to IPO</h1>
                                    <p>HONG KONG (Reuters) -Ant Group on Saturday announced a surprise share buyback that values the fintech giant at $78.54 billion, well below the $315 billion touted in an abandoned IPO in 2020, in a move that may let some</p>
                                </a>
                            <a href="/post-markets/581" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-839.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 7, 2023 - 7:36 PM</p>
                                    <h1>Stock Market Rally Pulls Back As Yields Jump; Tesla, Meta In Focus: Weekly Review</h1>
                                    <p>The stock market rally retreated modestly as Treasury yields rebounded. Tesla deliveries and Meta's Threads launch were catalysts.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/601" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-829.jpg" alt="art_pic"/></div>
                                <p className="dat"> July 7, 2023</p>
                                <h1>Avalanche from the lens of subnets: AVAX traders should know that…</h1>
                                <p>Avalanche transactions fell sharply in 2022 but have been recovering on a year to date basis. They have particularly been on the rise in the last 4 months.</p>
                            </a>
                            <a href="/post-crypto/600" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-828.jpg" alt="art_pic"/></div>
                                <p className="dat">  July 7, 2023</p>
                                <h1>Maker [MKR] delivers a 50% weekly upside fueled by these events</h1>
                                <p>MKR could be considered as one of the best performing cryptocurrencies especially considering its performance in the last seven days. Additionally, whales were seen buying the token too, which negated any chances of a price</p>
                            </a>
                            <a href="/post-markets/579" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-840.jpg" alt="art_pic"/></div>
                                <p className="dat">  July 7, 2023 - 7:22 PM</p>
                                <h1>Earnings Watch: Sellers Hit JPMorgan Stock Ahead Of Q2 Results; DAL Gains Altitude Amid Rosy Fundamentals</h1>
                                <p>JPMorgan stock is back near a buy point ahead of the company's Q2 report. Citigroup, Wells Fargo and Delta Air Lines are also set to report.</p>
                            </a>
                            <a href="/post-markets/578" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-841.jpg" alt="art_pic"/></div>
                                <p className="dat"> July 7, 2023 - 1:03 PM</p>
                                <h1>Alibaba Surges on Report China to Unshackle Ant With Fine</h1>
                                <p>(Bloomberg) -- Alibaba Group Holding Ltd. soared on a report that China is preparing to announce a fine of more than $1.1 billion on its fintech affiliate, signaling a wide-ranging probe that has weighed on Jack Ma’s</p>
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
                            <a href="/post-forex/568" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-834.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 7, 2023 - 8:41 PM</p>
                                    <h1>USD/JPY Weekly Price Forecast – US Dollar Pulls Back Drastically</h1>
                                    <p>The US dollar has fallen rather hard during the course of the trading week, especially on Friday as the Non-Farm Payroll announcement came out at 209,000, as opposed to the 225,000 expected. Furthermore, it’s worth noting</p>
                                </a>
                            <a href="/post-forex/567" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-833.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 7, 2023 - 8:37 PM</p>
                                    <h1>GBP/USD Weekly Forecast – British Pound Continues to Rally Significant</h1>
                                    <p>The British pound has rallied significantly during the course of the trading week, breaking above the 200-Week EMA. The market looks as if it is heading toward the 1.30 level, but it’s got a lot of resistance in the 1.2850 region.</p>
                                </a>
                            <a href="/post-forex/568" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-832.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 7, 2023 - 8:33 PM</p>
                                    <h1>EUR/USD Weekly Price Forecast – Euro Recovers for the Week</h1>
                                    <p>The euro has initially pulled back a bit during the trading week, only to show signs of life. The candlestick ended up forming a bit of a hammer, and therefore looks like we are going to continue to trade in this overall range.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/567" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-830.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 7, 2023 - 11:19 PM</p>
                                    <h1>Oil Reaches Monthly High as OPEC+ Leaders Tighten Crude Exports</h1>
                                    <p>(Bloomberg) -- Oil posted a second weekly gain as evidence mounted that the decision by OPEC+ leaders Saudi Arabia and Russia to tighten supplies was making a mark across physical markets.</p>
                                </a>
                            <a href="/post-commodities/566" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-831.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 7, 2023 - 10:25 PM</p>
                                    <h1>This Unlikely Sector Is Leading the Market Higher Friday</h1>
                                    <p>Technology has been a big winner this year, but this beaten-down part of the market is showing signs of life.</p>
                                </a>
                            <a href="/post-commodities/565" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-819.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 6, 2023 - 1:56 AM</p>
                                    <h1>Iran Floods Global Markets With Cheap Oil as Saudi Arabia Cuts Output</h1>
                                    <p>Iranian crude exports have hit a five-year high in recent months as the country ships more oil to China and other buyers.</p>
                                </a>                         
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/557" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-836.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 7, 2023 - 6:31 PM</p>
                                    <h1>Dow Jones Falls On June Jobs Report; Alibaba Jumps On $1.1 Billion Fine</h1>
                                    <p>The Dow Jones Industrial Average dropped Friday after a weaker-than-expected monthly jobs report from the U.S. Labor Department. Meanwhile, Chinese e-commerce giant Alibaba (BABA) jumped as the company faces a $1.</p>
                                </a>  
                            <a href="/post-indices/556" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-837.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 7, 2023 - 4:13 PM</p>
                                    <h1>Dow Jones Futures Fall With Jobs Report Due; Meta Leads 7 Resilient Stocks</h1>
                                    <p>The jobs report looms with Treasury yields soaring. Meta is among stocks holding up as Threads had record first-day downloads.</p>
                                </a>
                            <a href="/post-indices/555" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-835.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 7, 2023 - 11:28 AM</p>
                                    <h1>European shares end higher after worst week in nearly four months</h1>
                                    <p>(Reuters) -European shares eked out gains on Friday as data pointing to slowing U.S. job growth eased concerns about interest rate hikes by the Federal Reserve but did little to change the main STOXX 600 index's worst weekly</p>
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