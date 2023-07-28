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
                            <a href="/post-markets/614" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690544455/ncx-blog-967_ogjnah.webp"/></div>
                                    <p className="dat"> July 28, 2023 - 1:37 PM</p>
                                    <h1>Global Bond Markets Creak as Bank of Japan Eases YCC Policy</h1>
                                    <p>(Bloomberg) -- A shift in the last global anchor of low yields has sent a shiver down the spines of bond bulls worldwide.</p>
                                </a>
                            <a href="/post-crypto/625" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690472647/ncx-blog-956_rlptvy.png" alt="art_pic"/></div>
                                    <p className="dat">   July 27, 2023</p>
                                    <h1>MATIC falls to key 50% Fib support level – Is a recovery likely?</h1>
                                    <p>Polygon [MATIC] failed in its attempt to flip its price action bullish on the higher timeframes. A 21% drop from the $0.8923 price level took MATIC to the 50% Fib level. The extension of the retracement saw MATIC erase its gains from the price pump on 13 July.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/624" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690472079/ncx-blog-955_qqz63g.png" alt="art_pic"/></div>
                                    <p className="dat">  July 27, 2023</p>
                                    <h1>Has USDT managed to restore investor confidence? Data suggests…</h1>
                                    <p>USDT extended its dominance in the stablecoin market. But as Binance faced BUSD’s extinction, it agreed to offer another option.</p>
                                </a>
                            <a href="/post-crypto/626" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690473227/ncx-blog-957_xlctxu.png" alt="art_pic"/></div>
                                    <p className="dat">  July 27, 2023</p>
                                    <h1>Will DOGE outplay SHIB, PEPE, and FLOKI on this front?</h1>
                                    <p>Dogecoin observes a rally as hype around X and Twitter begins to rise. Other memecoins such as SHIBA, FLOKI and PEPE fail to see the same growth.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/614" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690544455/ncx-blog-967_ogjnah.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 28, 2023 - 1:37 PM</p>
                                    <h1>Global Bond Markets Creak as Bank of Japan Eases YCC Policy</h1>
                                    <p>(Bloomberg) -- A shift in the last global anchor of low yields has sent a shiver down the spines of bond bulls worldwide.</p>
                                </a>
                            <a href="/post-markets/613" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690543882/ncx-blog-966_m5cnd8.webp" alt="art_pic"/></div>
                                    <p className="dat">   July 28, 2023 - 1:00 PM</p>
                                    <h1>European Stocks Track Longest Weekly Winning Streak Since April</h1>
                                    <p>(Bloomberg) -- European stocks were lower on Friday, although still on track to complete their third straight weekly gain in the busiest period for earnings so far this season.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br"> 
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-markets/612" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690519927/ncx-blog-959_z7bdp8.webp" alt="art_pic"/></div>
                                <p className="dat"> July 27, 2023 - 12:58 PM</p>
                                <h1>Meta rallies as AI-powered ad sales drive monster forecast</h1>
                                <p>(Reuters) -Meta shares surged nearly 8% on Thursday as a rosy revenue forecast showed that artificial intelligence was helping the social media giant boost engagement and ad sales even in an uncertain economy.</p>
                            </a>
                            <a href="/post-markets/611" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690519411/ncx-blog-958_ist2tk.webp" alt="art_pic"/></div>
                                <p className="dat">   July 26, 2023 - 8:28 PM</p>
                                <h1>J.P. Morgan Recommends These 2 ‘Strong Buy’ Stocks — Including One With 90% Upside Potential</h1>
                                <p>Despite the market’s big comeback in 2023, there is still one issue keeping positive sentiment in check; the prospect of a looming recession remains real. Nevertheless, J.P. Morgan Wealth Management’s Global Investment</p>
                            </a>
                            <a href="/post-forex/593" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690468842/ncx-blog-949_rtdm7t.webp"/></div>
                                <p className="dat"> July 26, 2023 - 5:15 PM</p>
                                <h1>EUR/USD Forecast – Euro Attempts a Bounce Waiting for Powell</h1>
                                <p>The euro has rallied a bit during the trading session on Wednesday as we wait for the Federal Reserve announcement later in the day. That being said, the market did stabilize a bit during the Tuesday session,</p>
                            </a>
                            <a href="/post-crypto/622" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690470911/ncx-blog-953_xoc8ix.jpg" alt="art_pic"/></div>
                                <p className="dat">   July 26, 2023</p>
                                <h1>Bitcoin whales in a predicament as prices hover near $30k: To buy or to sell?</h1>
                                <p>As BTC struggles to cross over the $30,000 price mark, some whales have intensified accumulation, while others have reduced their risk exposure.</p>
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
                            <a href="/post-forex/596" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690469934/ncx-blog-952_m9ixwg.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 26, 2023 - 6:37 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Testing 50-Day EMA</h1>
                                    <p>The US dollar fell a bit during the trading session on Wednesday, as we are waiting on the Federal Reserve interest rate decision. This obviously has a major influence on the US dollar,</p>
                                </a>
                            <a href="/post-forex/595" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690469359/ncx-blog-951_fewlzh.webp" alt="art_pic"/></div>
                                    <p className="dat">   July 26, 2023 - 6:24 PM</p>
                                    <h1>GBP/JPY Forecast – British Pound Continues to Grind Sideways Against Japanese Yen</h1>
                                    <p>In the trading session on Wednesday, the British pound pulled back a bit against the Japanese yen, hinting at a consolidation phase. Despite this temporary retreat, market analysis indicates that potential buyers may reenter the market,</p>
                                </a>
                            <a href="/post-forex/594" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690469104/ncx-blog-950_zo4sqc.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 26, 2023 - 6:15 PM</p>
                                    <h1>AUD/USD Forecast – The Australian Dollar Pulls Back Heading Toward the Fed Meeting</h1>
                                    <p>The Australian dollar initially tried to rally a bit during the trading session on Wednesday, but gave back gains near the 0.68 level. At that point, we then fell to the 50-Day EMA, but keep in mind that the Federal Reserve</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/590" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690521883/ncx-blog-963_vunyik.webp" alt="art_pic"/></div>
                                    <p className="dat">July 27, 2023 - 11:31 PM</p>
                                    <h1>Oil Rallies to $80 as US Economic Growth Improves Demand Outlook</h1>
                                    <p>(Bloomberg) -- Oil rose to the highest since April as signs of economic strength in the US improved the outlook for demand, outweighing concerns about a price correction based on technical factors.</p>
                                </a>   
                            <a href="/post-commodities/589" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690521630/ncx-blog-962_tgrsfm.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 27, 2023 - 8:01 AM</p>
                                    <h1>Gold hits 2-week low as upbeat US data lifts dollar, yields</h1>
                                    <p>(Reuters) - Gold prices slipped more than 1% to a two-week low on Thursday, weighed down by a stronger dollar and an uptick in bond yields after better-than-expected U.S. economic data.</p>
                                </a>   
                            <a href="/post-commodities/588" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690521272/ncx-blog-961_i9mzxk.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 26, 2023 - 5:01 PM</p>
                                    <h1>Rusoro Mining Ltd.s (CVE:RML) 20% gain last week benefited both retail investors who own 47% as well as insiders</h1>
                                    <p>A look at the shareholders of Rusoro Mining Ltd. (CVE:RML) can tell us which group is most powerful. And the group that holds the biggest piece of the pie are retail investors with 47% ownership.</p>
                                </a>                   
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/576" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690541017/ncx-blog-964_dzh0vu.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 28, 2023 - 1:00 AM</p>
                                    <h1>Dow Jones Sees Win Streak End, Microsoft Stock Near Buy Point; IPO Cava Up 137% Since IPO</h1>
                                    <p>Southwest Airlines flashed a sell signal. At the session low near 329, MSFT stock dipped notably below its sharply rising 50-day moving average and 10-week moving average.</p>
                                </a>
                            <a href="/post-indices/575" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690543565/ncx-blog-965_mm2mkb.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 28, 2023 - 12:32 AM</p>
                                    <h1>Dow Jones Today: Index Plunges, Ending Streak, on Concern About Rate Hikes</h1>
                                    <p>Dow Jones falls more than 200 points, ending the historic 13-day rally, on investor fears that strong economic data could bring more rate hikes.</p>
                                </a>
                            <a href="/post-indices/574" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690264380/ncx-blog-947_wljqpi.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 24, 2023 - 7:45 PM</p>
                                    <h1>European Shares Subdued; Spain’s IBEX Drops on Inconclusive Vote</h1>
                                    <p>(Bloomberg) -- European stocks were subdued at the start of the busiest week of the earnings season, with investors also awaiting key central bank policy meetings. Spanish stocks fell after an inconclusive election outcome.</p>
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