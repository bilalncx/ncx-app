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
                            <a href="/post-markets/618" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690803814/ncx-blog-974_v5m2eu.webp"/></div>
                                    <p className="dat"> July 31, 2023 - 11:07 AM</p>
                                    <h1>Panasonic Q1 profit jumps, maintains FY forecast</h1>
                                    <p>TOKYO (Reuters) - Japan's Panasonic Holdings posted a 42% rise in first quarter profit on Monday, buoyed by a weaker yen and stronger sales in its automotive and energy segments, while it stuck to its full-year outlook.</p>
                                </a>
                            <a href="/post-crypto/628" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690793490/ncx-blog-969_plqpzt.png" alt="art_pic"/></div>
                                    <p className="dat">   July 31, 2023</p>
                                    <h1>Optimism: How Worldcoin, Coinbase helped to lure in users to the protocol</h1>
                                    <p>Interest in Optimism soared as TVL neared $1 billion. However, DEX volumes declined, signaling room for more growth in the DeFi sector.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/629" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690797639/ncx-blog-970_v2goh7.png" alt="art_pic"/></div>
                                    <p className="dat">  July 31, 2023</p>
                                    <h1>BNB network remains resilient despite market uncertainty</h1>
                                    <p>Activity on the BNBchain remains consistent. However, risky dApps and bearish sentiment may act as hurdles to BNB’s growth.</p>
                                </a>
                            <a href="/post-crypto/627" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690792884/ncx-blog-968_z56hvu.png" alt="art_pic"/></div>
                                    <p className="dat">  July 30, 2023</p>
                                    <h1>Uniswap: How high can the bullish streak go?</h1>
                                    <p>Uniswap’s recovery hit Q2 price ceiling but overall price action was bullish – Which way will price sway?</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/617" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690803603/ncx-blog-973_ovbkmm.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 31, 2023 - 9:30 AM</p>
                                    <h1>Goldman, Morgan Stanley See BOJ Tweak Boosting Japan Stocks</h1>
                                    <p>(Bloomberg) -- Strategists at Morgan Stanley and Goldman Sachs Group Inc. see the Bank of Japan’s tweak of yield-curve control as providing clarity that will support further gains in the nation’s equity market.</p>
                                </a>
                            <a href="/post-markets/616" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690803374/ncx-blog-972_moosem.webp" alt="art_pic"/></div>
                                    <p className="dat">   July 31, 2023 - 8:39 AM</p>
                                    <h1>Stock market today: European shares open mixed after Asia rallies on hopes for Chinese stimulus</h1>
                                    <p>BANGKOK (AP) — Shares were mixed in Europe after most Asian markets logged gains Monday on hopes for more stimulus from Beijing for the sluggish Chinese economy.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br"> 
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-markets/615" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690802068/ncx-blog-971_d6ld1i.webp" alt="art_pic"/></div>
                                <p className="dat"> July 30, 2023 - 3:00 PM</p>
                                <h1>Apple, Amazon, Starbucks to Report in Packed Earnings Week</h1>
                                <p>During the week, 170 S&P 500 companies, including four Dow Jones Industrial Average components, are scheduled to report. So far, 51% of S&P 500 companies have reported their earnings, according to FactSet.</p>
                            </a>
                            <a href="/post-markets/614" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690544455/ncx-blog-967_ogjnah.webp" alt="art_pic"/></div>
                                <p className="dat">   July 28, 2023 - 1:37 PM</p>
                                <h1>Global Bond Markets Creak as Bank of Japan Eases YCC Policy</h1>
                                <p>(Bloomberg) -- A shift in the last global anchor of low yields has sent a shiver down the spines of bond bulls worldwide.</p>
                            </a>
                            <a href="/post-markets/613" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690543882/ncx-blog-966_m5cnd8.webp"/></div>
                                <p className="dat"> July 28, 2023 - 1:00 PM</p>
                                <h1>European Stocks Track Longest Weekly Winning Streak Since April</h1>
                                <p>(Bloomberg) -- European stocks were lower on Friday, although still on track to complete their third straight weekly gain in the busiest period for earnings so far this season.</p>
                            </a>
                            <a href="/post-crypto/626" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690473227/ncx-blog-957_xlctxu.png" alt="art_pic"/></div>
                                <p className="dat">   July 27, 2023</p>
                                <h1>Will DOGE outplay SHIB, PEPE, and FLOKI on this front?</h1>
                                <p>Dogecoin observes a rally as hype around X and Twitter begins to rise. Other memecoins such as SHIBA, FLOKI and PEPE fail to see the same growth.</p>
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