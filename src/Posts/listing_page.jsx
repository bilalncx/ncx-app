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
                                <a href="/post-indices/551" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-790.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 2, 2023 - 6:22 AM</p>
                                    <h1>S&P 500 Rallies Back To Highs, But Watch For This; Tesla Deliveries Due</h1>
                                    <p>The S&P 500 index hit a 14-month high as the stock market rally roared back this past week. The Dow Jones and Nasdaq composite are back near 2023 highs, as Apple (AAPL) closed Friday with a $3 trillion market</p>
                                </a>
                                <a href="/post-markets/569" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-788.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 1, 2023 - 12:34 AM</p>
                                    <h1>Stock Market Rally That Shocked Everyone Is Broadening Beyond Tech</h1>
                                    <p>(Bloomberg) -- The big knock on the 2023 stock rally is that it rests on half-a-dozen companies thriving on hype. That criticism just took a hit.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/593" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-794.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 1, 2023 - 7:47 AM</p>
                                    <h1>South Korea approves crypto bill to protect investors, goes into effect in one year</h1>
                                    <p>South Korea’s National Assembly on Friday approved a bill that focuses on protecting the interests of cryptocurrency investors in the country’s first step to build a legal</p>
                                </a>
                            <a href="/post-crypto/592" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-795.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 1, 2023 - 12:30 AM</p>
                                    <h1>Cryptocurrency Prices And News: Bitcoin Price Holds $30,000 Level For The Week; Cryptos Rise</h1>
                                    <p>Cryptocurrency News: Cryptocurrency prices rise Friday. Bitcoin price holds $30,000 level this past week on institutional ETF applications.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/568" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-782.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 1, 2023 - 12:25 AM</p>
                                    <h1>GE Stock Rallies 68% Ahead Of Its Huge Aerospace Play. Whats In Store For Investors.</h1>
                                    <p>General Electric (GE) is fast approaching the end of the runway as an iconic American conglomerate. A more svelte and focused GE is preparing to take off in a new direction — as GE Aerospace,</p>
                                </a>
                            <a href="/post-markets/567" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-789.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 1, 2023 - 12:18 AM</p>
                                    <h1>Goldman Sachs may exit partnership with Apple - WSJ</h1>
                                    <p>(Reuters) -Goldman Sachs is considering exiting its partnership with Apple, the Wall Street Journal reported on Friday, citing sources familiar with the matter.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-indices/548" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-773.jpg" alt="art_pic"/></div>
                                <p className="dat">  June 30, 2023 - 7:35 PM</p>
                                <h1>LIVE: FTSE and Wall Street surge as UK avoids recession and eurozone inflation falls</h1>
                                <p>The FTSE (^FTSE), European stock markets, and Wall Street spent the final day of the week, month, quarter, and half year in positive territory, as new data confirmed that the UK avoided recession over the winter,</p>
                            </a>
                            <a href="/post-indices/547" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-770.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 30, 2023 - 6:20 PM</p>
                                <h1>Dow Jones Rallies 275 Points On Cool Inflation Data; Nike Stock Slides On Earnings Miss</h1>
                                <p>The Dow Jones Industrial Average rallied 275 points Friday after the Federal Reserve's favorite inflation indicator, the PCE price index, came out before the market open.</p>
                            </a>
                            <a href="/post-crypto/591" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-758.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 30, 2023 - 2:26 PM</p>
                                <h1>Bitcoin, Ether rise along with all other top 10 cryptos</h1>
                                <p>Bitcoin, Ether, and all other top 10 non-stablecoin cryptocurrencies gained in Friday afternoon trading in Asia, on general market positivity as a number of traditional financial institutions recently filed spot Bitcoin exchange</p>
                            </a>
                            <a href="/post-markets/566" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-786.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 30, 2023 - 8:02 AM</p>
                                <h1>US stocks rise after fresh batch of positive economic data and bank stress tests</h1>
                                <p>Stocks ended mostly higher on Thursday on upbeat economic news and positive results of the latest bank stress tests from the Federal Reserve.</p>
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
                            <a href="/post-commodities/558" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-793.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 2, 2023 - 5:00 AM</p>
                                    <h1>China Is Buying Natural Gas Like There’s Still an Energy Crisis</h1>
                                    <p>(Bloomberg) -- China is on a natural gas shopping spree, and officials are happy for importers to keep striking deals even after a global energy crisis has eased.</p>
                                </a>
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
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/551" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-790.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 2, 2023 - 6:22 AM</p>
                                    <h1>S&P 500 Rallies Back To Highs, But Watch For This; Tesla Deliveries Due</h1>
                                    <p>The S&P 500 index hit a 14-month high as the stock market rally roared back this past week. The Dow Jones and Nasdaq composite are back near 2023 highs, as Apple (AAPL) closed Friday with a $3 trillion market cap</p>
                                </a>
                            <a href="/post-indices/550" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-792.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 1, 2023 - 12:52 AM</p>
                                    <h1>Dow Jones Today: Index Finishes First Half Higher, Led by Tech Stocks</h1>
                                    <p>The Dow finished the week up about 2%, and the index was up 3.8% for the first half of the year. Apple (AAPL) shares rose more than 2%, bringing the company's market capitalization to over $3 trillion,</p>
                                </a>
                            <a href="/post-indices/549" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-791.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 1, 2023 - 12:40 AM</p>
                                    <h1>Stock Market Indexes All Post Gains For First Half 2023; Nasdaq Rallies More Than 31%</h1>
                                    <p>The major stock market indexes closed strong, with all major indexes holding steady or picking up steam in the final hour of the second quarter.</p>
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