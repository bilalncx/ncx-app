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
                            <a href="/post-crypto/635" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691075606/ncx-blog-1006_oowiap.png"/></div>
                                    <p className="dat"> August 3, 2023</p>
                                    <h1>Ripple gives two cents on SEC ruling, locks new set of XRP</h1>
                                    <p>Ripple’s official response to the partial win against the SEC called the regulatory’s authority’s lawsuit nothing but a propaganda. Days after the win, XRP didn’t seem in the best of spirits.</p>
                                </a>
                            <a href="/post-commodities/599" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691128217/ncx-blog-1011_a6c4la.webp" alt="art_pic"/></div>
                                    <p className="dat">    August 3, 2023 - 3:31 PM</p>
                                    <h1>Warren Buffett Favorite Energy Stock Reported Profits Falling Nearly 80% in Q2</h1>
                                    <p>Warren Buffett stock Occidental Petroleum (OXY) reported mixed second-quarter financials Wednesday, slightly missing on profit expectations while matching revenue expectations, as low oil and natural gas prices in the first</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/634" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691075190/ncx-blog-1005_gvl8lt.png" alt="art_pic"/></div>
                                    <p className="dat">  August 3, 2023</p>
                                    <h1>Why LTC’s post halving price action may leave investors feeling bitter</h1>
                                    <p>A trip down memory lane reveals that Litecoin’s previous halving events in 2015 and 2019 did not yield much of an impact on its price action. In 2019 the price continued dipping days after the halving, A confirmation that the halving barely influenced the price</p>
                                </a>
                            <a href="/post-crypto/633" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691074517/ncx-blog-1004_gm2sig.png" alt="art_pic"/></div>
                                    <p className="dat">  August 3, 2023</p>
                                    <h1>ETH tumbles despite the cheer around Ethereum’s ETF license. Assessing…</h1>
                                    <p>Ethereum faces a bearish storm amid shifting tides, but an influx of new traders through its ETF could change its direction.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/621" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691072012/ncx-blog-1000_fimhs3.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 3, 2023 - 9:44 AM</p>
                                    <h1>BOJ Intervenes for Second Time This Week to Slow Yield Spike</h1>
                                    <p>(Bloomberg) -- The Bank of Japan came into the market for the second time this week to slow gains in benchmark sovereign bond yields, underscoring its determination to curb sharp moves in rates even as it makes room for them to rise.</p>
                                </a>
                            <a href="/post-markets/620" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691070628/ncx-blog-999_q6bk3p.webp" alt="art_pic"/></div>
                                    <p className="dat">   August 3, 2023 - 4:49 AM</p>
                                    <h1>Goldman Sachs Predicts Over 60% Upside for These 2 Stocks — Here’s Why They Have Solid Upside</h1>
                                    <p>Such has been the unpredictable nature of the markets and the economy in 2023, that’s it’s hard to guess what’s coming next.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br"> 
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/632" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691074168/ncx-blog-1003_kflgds.png" alt="art_pic"/></div>
                                <p className="dat"> August 3, 2023</p>
                                <h1>wBTC transaction volume spikes. This is what it means for BTC…</h1>
                                <p>Whales make waves as wBTC surges, stirring BTC trend questions. Positive exchange flow meets bearish resistance.</p>
                            </a>
                            <a href="/post-crypto/631" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691073703/ncx-blog-1002_d3hkqu.png"/></div>
                                <p className="dat"> August 3, 2023</p>
                                <h1>ADA stuck at key support, can bulls break through?</h1>
                                <p>ADA remained stuck at a critical price level, with Bollinger Bands suggesting a breakout move was imminent.</p>
                            </a>
                            <a href="/post-indices/582" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691065893/ncx-blog-994_fef3fv.webp" alt="art_pic"/></div>
                                <p className="dat"> August 2, 2023 - 8:02 PM</p>
                                <h1>Stock Market Losses Deepen At Midday As Nasdaq Tumbles 2.3%; These Stocks Are Damaged</h1>
                                <p>Stock market losses grew at midday Wednesday as a downgrade of U.S. government debt and strong jobs data and earnings reports rattled bulls' confidence. The Nasdaq composite led losses with a 2.3% drop at midday.</p>
                            </a>
                            <a href="/post-commodities/595" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691126306/ncx-blog-1007_arpfke.webp" alt="art_pic"/></div>
                                <p className="dat">August 2, 2023 - 7:37 AM</p>
                                <h1>Gold retreats as dollar, bond yields resume climb</h1>
                                <p>(Reuters) - Gold prices slipped on Wednesday as the dollar rose and bond yields strengthened after data showed U.S. private payrolls increased more than expected in July.</p>
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
                            <a href="/post-forex/605" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691065103/ncx-blog-992_fatc5y.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 3, 2023 - 11:36 AM</p>
                                    <h1>Rupee hits 2-1/2 month low tracking Asian peers; RBI caps losses</h1>
                                    <p>MUMBAI/BENGALURU (Reuters) - The Indian rupee fell for a third straight session on Thursday, weakening to its lowest level in two-and-a-half months, tracking broad losses in Asian peers, but likely dollar sales by the country's central bank capped losses in the currency.</p>
                                </a>
                            <a href="/post-forex/604" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691064250/ncx-blog-991_axmblc.webp" alt="art_pic"/></div>
                                    <p className="dat">    August 2, 2023 - 6:32 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Balances After Initial Fall</h1>
                                    <p>The US dollar has initially pulled back a bit during the trading session on Wednesday, but the ¥142.50 level has offered a bit of support yet again, an area that has been important previously. </p>
                                </a>
                            <a href="/post-forex/603" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691063901/ncx-blog-990_z1teud.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 2, 2023 - 6:26 PM</p>
                                    <h1>GBP/USD Forecast – British Pound Continues to Drift Lower</h1>
                                    <p>The British pound has initially tried to rally during the day on Wednesday, but continues to drift a little bit lower after turning around. We broke below the 50-Day EMA, but quite frankly I don’t think it means much, as there are</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/598" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691127756/ncx-blog-1010_r3cwou.webp" alt="art_pic"/></div>
                                    <p className="dat">August 3, 2023 - 2:32 PM</p>
                                    <h1>Russian oil price cap under growing scrutiny as prices rise</h1>
                                    <p>When the West rolled out its unprecedented price cap on Russian oil late last year, it hoped to starve Moscow of much-needed revenue while minimising the impact on other countries.</p>
                                </a>   
                            <a href="/post-commodities/597" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691126962/ncx-blog-1008_z0yzdn.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 3, 2023 - 11:52 AM</p>
                                    <h1>Gold gains reverse after US credit rating downgrade</h1>
                                    <p>Gold prices reversed some of its gains on Thursday after Fitch Ratings downgraded the US credit rating, which weighed on the US dollar, and had boosted the safe-haven asset.</p>
                                </a>   
                            <a href="/post-commodities/596" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691127308/ncx-blog-1009_jbhon8.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 3, 2023 - 3:01 AM</p>
                                    <h1>UK petrol prices rise as oil price jumps to $85</h1>
                                    <p>Commuting got more expensive again in July as petrol prices rose for the second consecutive month while diesel remained stable, according to new data from RAC Fuel Watch.</p>
                                </a>                   
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/585" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691066986/ncx-blog-997_wj538c.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 3, 2023 - 4:46 PM</p>
                                    <h1>LIVE: FTSE and pound sink as Bank of England hikes interest rates to 15-year high</h1>
                                    <p>The FTSE 100 (^FTSE) was in the red on Thursday, with the pound (GBPUSD=X) also trading lower, as traders digested news that the Bank of England had increased interest rates from 5% to 5.25%.</p>
                                </a>
                            <a href="/post-indices/584" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691066800/ncx-blog-996_remwz7.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 3, 2023 - 2:22 PM</p>
                                    <h1>U.S. Stock Futures Continue Downgrade Slump With Big Tech Earnings in Focus</h1>
                                    <p>U.S. stock futures remained in a slump on Thursday as the U.S. credit rating downgrade by Fitch continued to sour sentiment, with investors looking ahead to earnings results out of Big Tech in the day ahead.</p>
                                </a>
                            <a href="/post-indices/583" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691066328/ncx-blog-995_dqa1aq.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 3, 2023 - 12:33 AM</p>
                                    <h1>Dow Jones Today: Index Dives on Rating Cut</h1>
                                    <p>Investors reacted to the Fitch Rating agency’s downgrade of U.S. credit, sending long-term bonds higher and the Dow Jones lower by about 1%, or 350 points.</p>
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