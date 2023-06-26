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
                                <a href="/post-indices/544" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-746.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 26, 2023 - 1:41 PM</p>
                                    <h1>LIVE: FTSE 100 and European stocks mixed as Primark-owner ABF lifts profit outlook</h1>
                                    <p>European stocks and the FTSE 100 were mainly lower on Monday as Primark-owner Associated British Foods (ABF.L) raised its profit outlook after lifting prices.</p>
                                </a>
                                <a href="/post-crypto/586" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-748.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 26, 2023 - 4:33 AM</p>
                                    <h1>Bitcoin treads water above US$30,000; SEC approves first leveraged Bitcoin futures ETF</h1>
                                    <p>Bitcoin dipped but held above the US$30,000 threshold on Monday morning in Asia, with nearly all other top 10 non-stablecoin cryptocurrencies rising.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/587" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-749.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 26, 2023</p>
                                    <h1>Binance market share at 1-year low: Kaiko</h1>
                                    <p>Binance’s market share hits near a one-year low as it reels under the pressure of regulatory scrutiny across countries.</p>
                                </a>
                            <a href="/post-crypto/585" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-751.jpg" alt="art_pic"/></div>
                                    <p className="dat">   June 25, 2023</p>
                                    <h1>Ethereum: Here’s the silver lining to its declining trends</h1>
                                    <p>Ethereum’s triumphant ascent breathes new life into the market, yet the dwindling exchange supply adds intrigue. Long-term holders seek profitability amidst challenges.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/560" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-752.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 26, 2023 - 6:13 PM</p>
                                    <h1>Dow Jones Reverses After Last Weeks Losses; Tesla Stock Slides On Another Downgrade</h1>
                                    <p>The Dow Jones Industrial Average again moved lower Monday, falling after last week's stock market losses. Google-parent Alphabet (GOOGL) and Tesla stock dropped on analyst downgrades.</p>
                                </a>
                            <a href="/post-markets/559" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-753.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 26, 2023 - 4:31 PM</p>
                                    <h1>Siemens Energy share sell-off deepens, takes market value loss to $8 billion</h1>
                                    <p>FRANKFURT (Reuters) -Siemens Energy shares fell for a second consecutive session on Monday, hit by a raft of target price cuts and rating downgrades in the wake of deeper-than-expected problems at its wind</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-markets/558" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-754.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 26, 2023 - 2:56 PM</p>
                                <h1>German central bank risks bailout after money printing spree</h1>
                                <p>Germany’s central bank may need a bailout to cover losses on the debt it hoovered up as part of the European Central Bank’s (ECB) massive bond-buying programme, the country’s federal auditor has warned.</p>
                            </a>
                            <a href="/post-forex/557" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-755.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 25, 2023 - 6:01 PM</p>
                                <h1>Amazon may be the largest US retailer in 2024, according to JPMorgan analysts</h1>
                                <p>Amazon (AMZN) is set to hit a major milestone in 2024: Becoming the largest retailer in the US, according to JPMorgan analysts Doug Anmuth and Bryan M. Smilek.</p>
                            </a>
                            <a href="/post-crypto/584" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-750.jpg" alt="art_pic"/></div>
                                <p className="dat">  June 25, 2023</p>
                                <h1>Polygon zkEVM fails to impress, what does the future hold?</h1>
                                <p>Competition intensifies as zkSync Era outperforms Polygon zkEVM. MATIC surges, but network growth decline suggests challenges in retaining interest.</p>
                            </a>
                            <a href="/post-crypto/583" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-737.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 24, 2023 - 12:27 AM</p>
                                <h1>Brazilian Central Bank Adds Crypto Exchange Mercado Bitcoin in CBDC Pilot Including Mastercard</h1>
                                <p>Brazil’s central bank authorized on Thursday the largest local crypto exchange, Mercado Bitcoin, to participate in the pilot of the digital real, the South American country’s central bank digital currency (CBDC).</p>
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
                            <a href="/post-forex/553" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-745.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 23, 2023 - 7:26 PM</p>
                                    <h1>GBP/USD Weekly Forecast – British Pound Pulls Back From 200-Week EMA</h1>
                                    <p>The British pound has pulled back during the course of the week, after initially touching the 200-Week EMA.</p>
                                </a>
                            <a href="/post-forex/552" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-744.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 23, 2023 - 7:17 PM</p>
                                    <h1>EUR/USD Weekly Forecast – Euro Continues to See a Lot of Noisy Behavior</h1>
                                    <p>The euro has been noisy as of late, and it does make a certain amount of sense that we continue to see a lot of volatility as we are between the crucial 200-Week EMA</p>
                                </a>
                            <a href="/post-forex/551" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-743.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 23, 2023 - 7:07 PM</p>
                                    <h1>AUD/USD Weekly Forecast – Australian Dollar Plunges</h1>
                                    <p>The Australian dollar has plunged during the course of the week as we continue to worry about the overall growth of the global economy.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/549" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-757.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 26, 2023 - 6:10 PM</p>
                                    <h1>Gold Nudges Higher as Investors React to Russia Turmoil</h1>
                                    <p>(Bloomberg) -- Gold edged higher as investors assessed increasing geopolitical uncertainty and recessionary signals.</p>
                                </a>
                                <a href="/post-commodities/548" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-756.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 26, 2023 - 3:19 PM</p>
                                    <h1>Oil Climbs As Russia Crisis Rattles Global Energy Markets</h1>
                                    <p>The short-lived threat to Vladimir Putin's leadership in Russia has oil markets on the move Monday, but demand concerns have limited early gains.</p>
                                </a>
                            <a href="/post-commodities/547" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-742.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 24, 2023 - 12:00 PM</p>
                                    <h1>Iran’s Oil Supplies Are One More Challenge for OPEC+</h1>
                                    <p>Oil markets have been buzzing over a potential return of Iranian oil to the market amid press reports of renewed U.S.-Iranian talks.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/543" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-747.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 26, 2023 - 8:04 AM</p>
                                    <h1>Stock market today: Global shares decline after armed rebellion quelled in Russia</h1>
                                    <p>TOKYO (AP) — Global shares mostly fell Monday after a short-lived armed rebellion in Russia added to uncertainties over the war in Ukraine.</p>
                                </a>
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
                                    <p>The Dow Jones Industrial Average briefly dropped more than 250 points Friday after key economic data, with the major stock indexes eyeing a losing week as investors</p>
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