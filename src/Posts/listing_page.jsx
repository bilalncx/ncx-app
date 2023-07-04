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
                                <a href="/post-indices/553" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-800.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 4, 2023 - 12:24 AM</p>
                                    <h1>Nasdaq refiles BlackRocks bitcoin ETF application with SEC</h1>
                                    <p>(Reuters) - Nasdaq refiled an application with the U.S. securities regulator to list an exchange-traded fund by BlackRock Inc that will reflect the price of bitcoin to add</p>
                                </a>
                                <a href="/post-markets/574" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-801.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 3, 2023 - 10:50 PM</p>
                                    <h1>S&P 500: Tesla Stock Leads Top Performers Monday</h1>
                                    <p>Tesla (TSLA), Fidelity National Information Services (FIS) and Zions Bancorp (ZION) were the top three S&P 500 index gainers on the stock market today.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/596" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-796.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 4, 2023 - 5:28 AM</p>
                                    <h1>Bitcoin breaches US$31,000 on BlackRock’s updated ETF; Ether gains, Polygon leads winners</h1>
                                    <p>Bitcoin climbed above US$31,000 in Tuesday morning trading in Asia after Blackrock refiled a Bitcoin exchange-traded fund (ETF) application in the U.S. after the regulator</p>
                                </a>
                            <a href="/post-crypto/595" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-797.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 3, 2023 - 10:01 PM</p>
                                    <h1>Poly Network Hacker Mints Billions Of Tokens From Thin Air</h1>
                                    <p>Poly Network, a cross-chain bridging protocol notorious for suffering the second-largest DeFi exploit on record, was hacked again on Sunday.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/575" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-806.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 4, 2023 - 6:51 AM</p>
                                    <h1>Stocks drift as investors balance peak rate hopes with oil price rise</h1>
                                    <p>LONDON/HONG KONG (Reuters) - Global stocks held steady on Tuesday, as investors balanced the inflationary force of rising oil prices with hopes that central banks would not over-tighten monetary policy into a potential recession.</p>
                                </a>
                            <a href="/post-markets/573" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-802.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 3, 2023 - 6:24 PM</p>
                                    <h1>JPMorgan Macro Fund Sticks to ‘Painful’ Bet Against Stock Rally</h1>
                                    <p>(Bloomberg) -- The narrative propelling the global stock rally since mid-March goes like this: The US economy will hold up fine in the face of higher interest rates,</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/594" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-798.jpg" alt="art_pic"/></div>
                                <p className="dat"> July 3, 2023 - 7:21 PM</p>
                                <h1>Crypto Gains More Than Double Traditional Assets’ in First Half of 2023</h1>
                                <p>The two largest cryptocurrencies gained by more than twice as much in the first half of the year versus traditional assets, spurring hope that the worst of the bear market is over.</p>
                            </a>
                            <a href="/post-markets/572" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-805.jpg" alt="art_pic"/></div>
                                <p className="dat">  July 3, 2023 - 2:03 PM</p>
                                <h1>UBS goes on hiring spree for wealth managers catering to rich Americans</h1>
                                <p>NEW YORK (Reuters) -UBS has gone on a U.S. recruiting drive for wealth managers catering to rich Americans even as it considers culling 30% of its combined global workforce after the takeover of Credit Suisse.</p>
                            </a>
                            <a href="/post-markets/571" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-803.jpg" alt="art_pic"/></div>
                                <p className="dat"> July 3, 2023 - 9:16 AM</p>
                                <h1>Analysis-Bond markets reckon a central bank policy error is on the cards</h1>
                                <p>(Reuters) - Bond investors could be in luck for the rest of 2023 if market indicators signalling central banks will take policy tightening too far and tip their economies into recession prove accurate.</p>
                            </a>
                            <a href="/post-markets/570" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-804.jpg" alt="art_pic"/></div>
                                <p className="dat"> July 3, 2023 - 8:34 AM</p>
                                <h1>Marketmind: Tesla delivers surprise, China goes slow</h1>
                                <p>(Reuters) - A look at the day ahead in European and global markets from Wayne Cole.</p>
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
                            <a href="/post-indices/551" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-790.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 2, 2023 - 6:22 AM</p>
                                    <h1>S&P 500 Rallies Back To Highs, But Watch For This; Tesla Deliveries Due</h1>
                                    <p>The S&P 500 index hit a 14-month high as the stock market rally roared back this past week. The Dow Jones and Nasdaq composite are back near 2023 highs,</p>
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