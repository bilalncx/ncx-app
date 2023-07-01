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
                                <a href="/post-markets/567" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-782.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 1, 2023 - 12:25 AM</p>
                                    <h1>GE Stock Rallies 68% Ahead Of Its Huge Aerospace Play. Whats In Store For Investors.</h1>
                                    <p>General Electric (GE) is fast approaching the end of the runway as an iconic American conglomerate. A more svelte and focused GE is preparing to take off in a new direction — as GE Aerospace,</p>
                                </a>
                                <a href="/post-markets/566" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-786.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 30, 2023 - 8:02 AM</p>
                                    <h1>US stocks rise after fresh batch of positive economic data and bank stress tests</h1>
                                    <p>Stocks ended mostly higher on Thursday on upbeat economic news and positive results of the latest bank stress tests from the Federal Reserve.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/591" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-758.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 30, 2023 - 2:26 PM</p>
                                    <h1>Bitcoin, Ether rise along with all other top 10 cryptos</h1>
                                    <p>Bitcoin, Ether, and all other top 10 non-stablecoin cryptocurrencies gained in Friday afternoon trading in Asia, on general market positivity as a number of traditional</p>
                                </a>
                            <a href="/post-crypto/590" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-760.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 29, 2023 - 8:00 PM</p>
                                    <h1>Polygon 2.0 Roadmap Calls for ‘Unified Liquidity,’ Restaking, New Chains on Demand</h1>
                                    <p>Polygon, a scaling solution to the Ethereum blockchain, aims to “unify liquidity” of the various networks in its ecosystem as part of a new architecture under its rebrand</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/565" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-783.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 30, 2023 - 5:18 AM</p>
                                    <h1>The Fed is the only thing standing in the way of a sustained bull market in stocks</h1>
                                    <p>A policy mistake from the Federal Reserve is the biggest risk that could cut short the current bull market in stocks, according to a Wednesday note from Ned Davis Research.</p>
                                </a>
                            <a href="/post-markets/564" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-787.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 30, 2023 - 12:15 AM</p>
                                    <h1>Fidelity Converting $13.5B in Mutual Funds to ETFs</h1>
                                    <p>Fidelity Investments is converting six mutual funds holding $13.5 billion in assets into exchange-traded funds, a quantum leap from its previous transition, as the move</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-forex/557" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-776.jpg" alt="art_pic"/></div>
                                <p className="dat">  June 29, 2023 - 5:38 PM</p>
                                <h1>GBP/JPY Forecast – British Pound Stabilizes</h1>
                                <p>The British pound has stabilized a bit during the trading session on Thursday, as it looks like we are going to continue the overall uptrend.</p>
                            </a>
                            <a href="/post-crypto/589" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-759.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 29, 2023 - 3:30 PM</p>
                                <h1>Crypto gets a boost following reports of Fidelity’s imminent Bitcoin spot ETF filing</h1>
                                <p>There’s a saying in gambling circles that the house always wins. It’s not an unreasonable supposition, given the fact that if casino operators didn’t bring in more cash than th</p>
                            </a>
                            <a href="/post-indices/545" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-772.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 29, 2023 - 1:30 PM</p>
                                <h1>China bulls backload stock targets as post-pandemic optimism deflates, stimulus floodgates remain closed</h1>
                                <p>China bulls are pushing back their expectations for a rally in stock prices as the economy struggles and global funds turn away as policymakers avoid opening the stimulus floodgates.</p>
                            </a>
                            <a href="/post-commodities/554" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-768.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 29, 2023 - 8:01 AM</p>
                                <h1>Big Oil Mulls a Slippery Future</h1>
                                <p>Ask energy executives how much oil the world will need by 2050 and you will get very different opinions</p>
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
                            <a href="/post-forex/560" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-780.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 30, 2023 - 6:32 PM</p>
                                    <h1>US dollar share of global reserves edges up in Q1, euros share dips - IMF</h1>
                                    <p>NEW YORK (Reuters) - The U.S. dollar's share of currency reserves reported to the International Monetary Fund rose in the first quarter of the year,</p>
                                </a>
                            <a href="/post-forex/559" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-774.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 29, 2023 - 5:51 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Continues to Power Higher Against Japanese Counterpart</h1>
                                    <p>The US dollar initially pulled back just a bit during the trading session but then started to grind higher again. Ultimately, we are in a massive uptrend,</p>
                                </a>
                            <a href="/post-forex/558" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-775.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 29, 2023 - 5:45 PM</p>
                                    <h1>GBP/USD Forecast – British Pound Continues to Pull Back</h1>
                                    <p>The British pound has initially tried to rally during the trading session on Thursday, but then gave back gains rather quickly as it looks like we continue to see a lot of</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/557" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-767.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 30, 2023 - 4:28 AM</p>
                                    <h1>Oil settles higher but posts fourth straight quarterly decline</h1>
                                    <p>(Reuters) -Oil prices settled higher on Friday but posted their fourth straight quarterly loss as investors worried that sluggish global economic activity could crimp fuel demand.</p>
                                </a>
                                <a href="/post-commodities/556" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-765.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 29, 2023 - 5:06 PM</p>
                                    <h1>How to Trade Gold in Times of Market Volatility</h1>
                                    <p>Traditionally regarded as a safe haven asset, gold often sees a surge in demand during periods of economic uncertainty. This is because the yellow metal’s value is no</p>
                                </a>
                            <a href="/post-commodities/555" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-766.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 29, 2023 - 1:00 PM</p>
                                    <h1>Zacks Industry Outlook Highlights Warrior Met Coal, SunCoke Energy and Hallador Energy</h1>
                                    <p>Chicago, IL – June 29, 2023 – Today, Zacks Equity Research discusses Warrior Met Coal HCC, SunCoke Energy SXC and Hallador Energy Company HNRG.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/548" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-773.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 30, 2023 - 7:35 PM</p>
                                    <h1>LIVE: FTSE and Wall Street surge as UK avoids recession and eurozone inflation falls</h1>
                                    <p>The FTSE (^FTSE), European stock markets, and Wall Street spent the final day of the week, month, quarter, and half year in positive territory, as new data confirmed</p>
                                </a>
                            <a href="/post-indices/547" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-770.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 30, 2023 - 6:20 PM</p>
                                    <h1>Dow Jones Rallies 275 Points On Cool Inflation Data; Nike Stock Slides On Earnings Miss</h1>
                                    <p>The Dow Jones Industrial Average rallied 275 points Friday after the Federal Reserve's favorite inflation indicator, the PCE price index, came out before the market open.</p>
                                </a>
                            <a href="/post-indices/546" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-771.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 29, 2023 - 2:30 PM</p>
                                    <h1>Nasdaq finds a new way to confound both bulls and bears: Morning Brief</h1>
                                    <p>The Nasdaq Composite (^IXIC) closed in the red Wednesday, giving back a small portion of its near-30% gains so far this year. And as we approach the end of the second quarter</p>
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