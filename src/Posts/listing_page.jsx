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
                                <a href="/post-markets/502" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-467.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 1, 2023 - 4:29 PM</p>
                                    <h1>Fed decision, Apple earnings, April jobs report: What to know this week</h1>
                                    <p>Another jam-packed week awaits investors as May gets underway with key announcements from the Federal Reserve, Apple (AAPL), and the April jobs report all on the docket.</p>
                                </a>
                                <a href="/post-commodities/501" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-471.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 1, 2023 - 4:43 AM</p>
                                    <h1>Oil drops as economic growth concerns offset OPEC+ cuts</h1>
                                    <p>LONDON (Reuters) -Oil fell on Monday as concern over the economic impact of the U.S. Federal Reserve potentially raising interest rates and weaker Chinese manufacturing data outweighed support from OPEC+ supply cuts taking effect this month.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/503" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-468.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 29, 2023 - 4:51 PM</p>
                                    <h1>Bitcoin could jump nearly 70% if the US defaults on its debt, Standard Chartered analyst says</h1>
                                    <p>With the looming debt ceiling crisis showing no signs of a resolution, both bond and equity markets have become jittery.</p>
                                </a>
                            <a href="/post-crypto/500" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-459.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 27, 2023</p>
                                    <h1>Bitcoin leveraged longs liquidated after brief mid-week recovery above $30,000</h1>
                                    <p>Bitcoin’s long liquidations on 26 April soared to their highest level so far in April. The liquidations also triggered a sharp drop in the estimated leverage ratio as leverage traders quickly shifted to the side of caution.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                                <a href="/post-markets/502" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-467.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 1, 2023 - 4:29 PM</p>
                                    <h1>Fed decision, Apple earnings, April jobs report: What to know this week</h1>
                                    <p>Another jam-packed week awaits investors as May gets underway with key announcements from the Federal Reserve, Apple (AAPL), and the April jobs report all on the docket.</p>
                                </a>
                                <a href="/post-markets/501" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-466.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 1, 2023 - 1:46 PM</p>
                                    <h1>US regulators seize First Republic and sell substantially all assets to JPMorgan in largest bank failure since 2008 crisis</h1>
                                    <p>Regulators seized First Republic (FRC) early on Monday and sold the bulk of the bank's operations to JPMorgan Chase (JPM) in the largest bank failure since the 2008 financial crisis.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-markets/501" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-466.jpg" alt="art_pic"/></div>
                                <p className="dat">May 1, 2023 - 1:46 PM</p>
                                <h1>US regulators seize First Republic and sell substantially all assets to JPMorgan in largest bank failure since 2008 crisis</h1>
                                <p>Regulators seized First Republic (FRC) early on Monday and sold the bulk of the bank's operations to JPMorgan Chase (JPM) in the largest bank failure since the 2008 financial crisis.</p>
                            </a>
                            <a href="/post-forex/503" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-469.jpg" alt="art_pic"/></div>
                                <p className="dat">Apr 29, 2023 - 10:25 PM</p>
                                <h1>Dollar dominance could give way to a tripolar currency system as Chinas yuan and the euro rise on the world stage</h1>
                                <p>The dollar has been king for decades but its slippage as a reserve currency has raised concerns as to whether a rival currency will dethrone it.</p>
                            </a>
                            <a href="/post-indices/502" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-470.jpg" alt="art_pic"/></div>
                                <p className="dat">Apr 29, 2023 - 1:23 AM</p>
                                <h1>Global stocks mostly up as yen tumbles after Bank of Japan decision</h1>
                                <p>Global stock markets mostly rose Friday following modestly positive economic data in Europe and the United States, while the yen tumbled after the Bank of Japan maintained its easing policies.</p>
                            </a>
                            <a href="/post-crypto/423" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-438.jpg" alt="art_pic"/></div>
                                <p className="dat">Apr 25, 2023 - 7:16 AM</p>
                                <h1>Bitcoin loses ground, Ether dips even as inflows rise; Litecoin edges up, with halving cited</h1>
                                <p>Bitcoin fell on Tuesday morning in Asia to trade below the US$27,500 support line, with the slide ascribed to more profit-taking after this year’s strong gains. Ether and most other top 10 non-stablecoin cryptocurrencies traded lower amid a broader correction in the crypto market.</p>
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
                            <a href="/post-forex/503" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-469.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 29, 2023 - 10:25 PM</p>
                                    <h1>Dollar dominance could give way to a tripolar currency system as Chinas yuan and the euro rise on the world stage</h1>
                                    <p>The dollar has been king for decades but its slippage as a reserve currency has raised concerns as to whether a rival currency will dethrone it.</p>
                                </a>
                                <a href="/post-forex/501" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-464.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 27, 2023 - 4:32 PM</p>
                                    <h1>AUDUSD Forecast – Australian Dollar Bounces</h1>
                                    <p>The Australian dollar has bounced a bit during the trading session on Thursday, as the 0.66 level has offered support previously. At this point, we are trying to determine whether or not we are going to break down below that level and continue to go further down.</p>
                                </a>
                                <a href="/post-forex/425" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-440.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 24, 2023 - 4:25 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Rallies Against Yen</h1>
                                    <p>The US dollar has rallied a bit during the trading session on Monday, as it continues its upward pressure against the Japanese yen. Ultimately, this is a pair that is trying to determine whether the longer-term trend will continue or if the recent pullback is something a bit bigger.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/501" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-471.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 1, 2023 - 4:43 AM</p>
                                    <h1>Oil drops as economic growth concerns offset OPEC+ cuts</h1>
                                    <p>LONDON (Reuters) -Oil fell on Monday as concern over the economic impact of the U.S. Federal Reserve potentially raising interest rates and weaker Chinese manufacturing data outweighed support from OPEC+ supply cuts taking effect this month.</p>
                                </a>
                                <a href="/post-commodities/436" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-451.jpg" alt="art_pic"/></div>
                                    <p className="dat"> Apr 24, 2023 - 11:32 PM</p>
                                    <h1>Oil Kicks Off Higher After Biggest Weekly Loss Since Bank Scare</h1>
                                    <p>(Bloomberg) -- Oil recouped some of last week’s slump in lower-volume trading as many investors took a pause while awaiting further clues to demand.</p>
                                </a>
                                <a href="/post-commodities/418" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-432.jpg" alt="art_pic"/></div>
                                    <p className="dat">19, 2023 - 10:43 PM</p>
                                    <h1>Gold Price Outlook for April 2023</h1>
                                    <p>The tide appears to have turned, just as it did at the crucial moment in 2008. And just like it was the case back then, it seems that most people missed it.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/502" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-470.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 29, 2023 - 1:23 AM</p>
                                    <h1>Global stocks mostly up as yen tumbles after Bank of Japan decision</h1>
                                    <p>Global stock markets mostly rose Friday following modestly positive economic data in Europe and the United States, while the yen tumbled after the Bank of Japan maintained its easing policies.</p>
                                </a>
                                <a href="/post-indices/500" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-462.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 28, 2023 - 1:50 PM</p>
                                    <h1>FTSE 100: NatWest profits surge on the back of higher interest rates</h1>
                                    <p>NatWest’s (NWG.L) pre-tax operating profit rose 49% year on year to £1.8bn ($2.2bn) thanks to higher interest rates but tumbling customer deposits disappointed investors and analysts.</p>
                                </a>
                                <a href="/post-indices/442" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-457.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 26, 2023 - 4:06 PM</p>
                                    <h1>Dow Jones Futures Rise On Microsoft, Boeing; First Republic Fights For Survival</h1>
                                    <p>Dow Jones futures and S&P 500 futures rose slightly Wednesday morning while Nasdaq futures climbed solidly as Microsoft (MSFT), Google parent Alphabet (GOOGL) and Boeing headlined big earnings.</p>
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