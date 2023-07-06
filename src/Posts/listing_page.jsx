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
                            <a href="/post-crypto/599" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-818.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 6, 2023</p>
                                    <h1>ETH derivatives demand suggests this about its performance in Q3 and Q4</h1>
                                    <p>According to a recent CCData report, both spot and derivatives demand on centralized exchanges surged by 14.2% to $2.71 trillion. The derivatives segment contributed most of that demand</p>
                                </a>
                                <a href="/post-indices/554" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-822.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 6, 2023 - 4:08 PM</p>
                                    <h1>Dow Jones Futures Fall: Google, CRM Flash Buy Signals; Meta Threads Gets 10 Million Signups</h1>
                                    <p>Dow Jones futures fell modestly early Thursday, along with S&P 500 futures and Nasdaq futures. The stock market rally fell slightly Wednesday, amid rising Treasury yields and a stronger dollar. </p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/598" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-817.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 6, 2023</p>
                                    <h1>Bitcoin ETF could democratize crypto: BlackRock CEO</h1>
                                    <p>BlackRock CEO Larry Fink believes that Bitcoin is an international asset. The asset management company recently filed for a Bitcoin ETF.</p>
                                </a>
                            <a href="/post-crypto/597" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-816.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 5, 2023 - 5:03 AM</p>
                                    <h1>Bitcoin trades flat after losing US$31,000 peg; Solana gains; Polygon, BNB lead losers</h1>
                                    <p>Bitcoin and Ether traded little changed on Wednesday morning in Asia, while the rest of the top 10 non-stablecoin cryptocurrencies were mixed. Bitcoin fell back under US$31,000,</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/576" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-823.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 6, 2023 - 4:35 AM</p>
                                    <h1>US layoffs halve in June as tech job cuts ease - report</h1>
                                    <p>(Reuters) - Layoffs in the United States nearly halved in June from a month earlier as job cuts in the technology sector fell, according to data from employment firm Challenger, Gray & Christmas Inc.</p>
                                </a>
                            <a href="/post-markets/575" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-806.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 4, 2023 - 6:51 AM</p>
                                    <h1>Stocks drift as investors balance peak rate hopes with oil price rise</h1>
                                    <p>LONDON/HONG KONG (Reuters) - Global stocks held steady on Tuesday, as investors balanced the inflationary force of rising oil prices with hopes that central banks would not over-tighten monetary policy into a potential recession.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-commodities/562" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-809.jpg" alt="art_pic"/></div>
                                <p className="dat"> July 4, 2023 - 7:12 AM</p>
                                <h1>Gold firms as traders hunker down for Fed cues</h1>
                                <p>(Reuters) - Gold firmed on Tuesday as some traders bet that recent weak U.S. economic data may prompt the Federal Reserve to rethink its rate hike trajectory, while also positioning for further cues from the minutes of the central bank's last meeting.</p>
                            </a>
                            <a href="/post-crypto/596" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-796.jpg" alt="art_pic"/></div>
                                <p className="dat">  July 4, 2023 - 5:28 AM</p>
                                <h1>Bitcoin breaches US$31,000 on BlackRock’s updated ETF; Ether gains, Polygon leads winners</h1>
                                <p>Bitcoin climbed above US$31,000 in Tuesday morning trading in Asia after Blackrock refiled a Bitcoin exchange-traded fund (ETF) application in the U.S. after the regulator criticised an earlier filing, suggesting the world’s</p>
                            </a>
                            <a href="/post-commodities/561" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-807.jpg" alt="art_pic"/></div>
                                <p className="dat"> July 4, 2023 - 4:38 AM</p>
                                <h1>Oil rises as market weighs supply cuts against gloomy economic outlook</h1>
                                <p>LONDON (Reuters) -Oil prices rose on Tuesday as markets weighed supply cuts for August by top exporters Saudi Arabia and Russia against the backdrop of an uncertain global economic outlook.</p>
                            </a>
                            <a href="/post-commodities/560" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-808.jpg" alt="art_pic"/></div>
                                <p className="dat"> July 4, 2023 - 1:58 AM</p>
                                <h1>Russia and Saudi Arabia vow to keep cutting oil production this summer</h1>
                                <p>Russia and Saudi Arabia have vowed to extend their oil production cuts through the summer, leading crude prices to inch higher as energy markets braced for tighter supply.</p>
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
                            <a href="/post-forex/565" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-815.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 3, 2023 - 6:09 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Consolidates Against the Japanese Yen</h1>
                                    <p>The US dollar has initially tried to rally during the session on Monday, but it looks as if we are struggling just a bit to continue going higher. That does make a certain amount of sense,</p>
                                </a>
                            <a href="/post-forex/564" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-814.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 3, 2023 - 6:01 PM</p>
                                    <h1>GBP/USD Forecast – The British Pound Does Little on Monday</h1>
                                    <p>The British pound initially pulled back during the trading session on Monday, but then turned around to show signs of life again. By doing so, it looks as if the market</p>
                                </a>
                            <a href="/post-forex/563" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-813.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 3, 2023 - 5:56 PM</p>
                                    <h1>GBP/JPY Forecast – British Pound Threatening a Breakout</h1>
                                    <p>The British pound has shown itself to be rather bullish to kick off the trading week on Monday, as we are trying to do everything we can to break out to the upside.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/565" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-819.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 6, 2023 - 1:56 AM</p>
                                    <h1>Iran Floods Global Markets With Cheap Oil as Saudi Arabia Cuts Output</h1>
                                    <p>Iranian crude exports have hit a five-year high in recent months as the country ships more oil to China and other buyers.</p>
                                </a>
                            <a href="/post-commodities/564" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-820.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 5, 2023 - 11:20 PM</p>
                                    <h1>Oil Rises With Inventory Draws Expected in Wake of OPEC+ Cuts</h1>
                                    <p>(Bloomberg) -- Oil rose as traders weighed Saudi Arabian and Russian production cuts after a slew of low-volume trading sessions.</p>
                                </a>
                            <a href="/post-commodities/563" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-821.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 5, 2023 - 3:51 PM</p>
                                    <h1>Silver Elephant Mining (TSE:ELEF) shareholders have earned a 88% CAGR over the last three years</h1>
                                    <p>Investors are understandably disappointed when a stock they own declines in value. But it's hard to avoid some disappointing investments when the overall market is down.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/554" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-822.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 6, 2023 - 4:08 PM</p>
                                    <h1>Dow Jones Futures Fall: Google, CRM Flash Buy Signals; Meta Threads Gets 10 Million Signups</h1>
                                    <p>Dow Jones futures fell modestly early Thursday, along with S&P 500 futures and Nasdaq futures. The stock market rally fell slightly Wednesday, amid rising Treasury yields and a stronger dollar.</p>
                                </a>  
                            <a href="/post-indices/553" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-800.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 4, 2023 - 12:24 AM</p>
                                    <h1>Nasdaq refiles BlackRocks bitcoin ETF application with SEC</h1>
                                    <p>(Reuters) - Nasdaq refiled an application with the U.S. securities regulator to list an exchange-traded fund by BlackRock Inc that will reflect the price of bitcoin to add</p>
                                </a>
                            <a href="/post-indices/552" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-799.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 3, 2023 - 6:22 PM</p>
                                    <h1>Dow Jones Falls After Key Economic Data; Tesla Stock Surges On Record Deliveries</h1>
                                    <p>The Dow Jones Industrial Average dropped Monday, with the stock market set to close early for the July 4 holiday.</p>
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