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
                                <a href="/post-markets/503" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-477.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 3, 2023 - 12:07 PM</p>
                                    <h1>Chinas AI industry barely slowed by US chip export rules</h1>
                                    <p>(Reuters) - U.S. microchip export controls imposed last year to freeze China's development of supercomputers used to develop nuclear weapons and artificial-intelligence systems like ChatGPT are having only minimal effects on China's tech sector.</p>
                                </a>
                                <a href="/post-crypto/506" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-474.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 3, 2023</p>
                                    <h1>Bitcoin [BTC] staring at an uncertain future in the U.S? New data affirms…</h1>
                                    <p>According to data provided by blockchain analytics firm CryptoQuant, BTC reserves at U.S.-based exchanges declined sharply since the beginning of 2023.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/508" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-481.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 3, 2023</p>
                                    <h1>Assessing Bitcoin’s [BTC] state as Ordinals hit a new record</h1>
                                    <p>Ordinals hit a new all-time high in terms of both daily inscriptions and fees paid. During the episode, BTC’s hashrate also increased, as did miners’ revenue</p>
                                </a>
                            <a href="/post-crypto/507" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-480.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 3, 2023</p>
                                    <h1>BTC traders could be in soup as Bitcoin oscillates between red and green</h1>
                                    <p>As of 1 May, BTC’s hashrate reached a new all-time high of 473.87 EH/s. The spike in hashrate could be attributed to the rising Bitcoin ordinal inscriptions. However, despite this, BTC traded in the red at the time of writing.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                                <a href="/post-markets/504" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-478.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 3, 2023 - 11:54 AM</p>
                                    <h1>UBS weighed Credit Suisse deal as early as December - SEC filing</h1>
                                    <p>ZURICH (Reuters) -UBS was considering the potential impact of buying struggling rival Credit Suisse as early as December, months before the takeover was hastily arranged by Swiss authorities in March, according to a regulatory filing.</p>
                                </a>
                                <a href="/post-markets/505" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-479.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 3, 2023 - 6:24 AM</p>
                                    <h1>Stocks climb out of the red as traders wait on the Fed</h1>
                                    <p>LONDON/ SINGAPORE (Reuters) -U.S. stock futures rose on Wednesday in fragile markets with traders on tenterhooks for any clues from the U.S. Federal Reserve statement today that rate hikes might peak and the soft landing that central banks have been angling for is in sight.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/504" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-472.jpg" alt="art_pic"/></div>
                                <p className="dat">May 2, 2023</p>
                                <h1>ADA bears could have an extended stay amid Cardano’s efforts to lure the bulls</h1>
                                <p>ADA road to recovery may be filled with more bears than expected. At the time of writing, ADA didn’t see any buying pressure from traders despite a satisfactory roundup presented by the Cardano community.</p>
                            </a>
                            <a href="/post-markets/501" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-466.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 1, 2023 - 1:46 PM</p>
                                <h1>US regulators seize First Republic and sell substantially all assets to JPMorgan in largest bank failure since 2008 crisis</h1>
                                <p>Regulators seized First Republic (FRC) early on Monday and sold the bulk of the bank's operations to JPMorgan Chase (JPM) in the largest bank failure since the 2008 financial crisis.</p>
                            </a>
                            <a href="/post-commodities/501" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-471.jpg" alt="art_pic"/></div>
                                <p className="dat">May 1, 2023 - 4:43 AM</p>
                                <h1>Oil drops as economic growth concerns offset OPEC+ cuts</h1>
                                <p>LONDON (Reuters) -Oil fell on Monday as concern over the economic impact of the U.S. Federal Reserve potentially raising interest rates and weaker Chinese manufacturing data outweighed support from OPEC+ supply cuts taking effect this month.</p>
                            </a>
                            <a href="/post-crypto/505" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-473.jpg" alt="art_pic"/></div>
                                <p className="dat">Apr 30, 2023</p>
                                <h1>Assessing Shiba Inu’s [SHIB] status after the whales’ latest buying spree</h1>
                                <p>Over the last 10 days, most large addresses stepped up their game in accumulating SHIB. As of this writing, 615.19 trillion SHIBs were sitting in whales’ wallets.</p>
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
                            <a href="/post-commodities/502" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-475.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 2, 2023 - 11:22 PM</p>
                                    <h1>Why Oil and Gas Majors Chevron, ExxonMobil, and Petrobras Were Plunging Today</h1>
                                    <p>A combination of negative economic data and thin trading in oil markets led to a sharp drop in crude prices Tuesday.</p>
                                </a>
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
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/503" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-476.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 3, 2023 - 3:02 PM</p>
                                    <h1>FTSE 100 Live: ‘Investors are extremely anxious’ ahead of US rates call; oil price falls</h1>
                                    <p>The FTSE 100 index today regained lost ground during a busy session for blue-chip updates.</p>
                                </a>
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