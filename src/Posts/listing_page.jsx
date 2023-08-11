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
                            <a href="/post-crypto/645" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691743371/ncx-blog-1039_htuwha.png"/></div>
                                    <p className="dat">August 11, 2023</p>
                                    <h1>SHIB surges to new highs amid speculation around the launch of…</h1>
                                    <p>Anticipation builds for the Shibarium launch as soaring prices mark a vibrant August while transaction dynamics reshape the landscape.</p>
                                </a>
                            <a href="/post-commodities/609" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691755439/ncx-blog-1055_oskf5x.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 11, 2023 - 12:57 PM</p>
                                    <h1>Oil Holds Near $83 as IEA Sees Consumption at a Record</h1>
                                    <p>(Bloomberg) -- Oil was on track to end the week little changed, after touching the highest since November in recent days, as the International Energy Agency’s monthly snapshot pointed to a robust market.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/644" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691743088/ncx-blog-1038_dqfiqr.png" alt="art_pic"/></div>
                                    <p className="dat"> August 11, 2023</p>
                                    <h1>L1 vs L2: Will Ethereum emerge unscathed?</h1>
                                    <p>L2s are beginning to surge in dominance as L1 cryptocurrencies lag behind. The market cap and sentiment of most tokens remain unaffected.</p>
                                </a>
                            <a href="/post-crypto/643" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691742400/ncx-blog-1037_bgcbwe.png" alt="art_pic"/></div>
                                    <p className="dat">  August 11, 2023</p>
                                    <h1>Cardano’s TVL surges thanks to stablecoin adoption but there’s a catch</h1>
                                    <p>Cardano’s TVL embarked on its rally after the launch of the DJED and iUSD stablecoins. Furthermore, ADA’s TVL has been steadily growing since then and it just reached a 12-month high. However, concerns may still loom around ADA’s future.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/630" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691758633/ncx-blog-1058_wyclh4.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 11, 2023 - 1:35 AM</p>
                                    <h1>US stocks rise after CPI shows inflation came in cooler than expected in July</h1>
                                    <p>US stocks jumped on Thursday as July Consumer Price Index data showed inflation rose last month at a slower rate than economists were predicting.</p>
                                </a>
                            <a href="/post-markets/629" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691758078/ncx-blog-1057_hz5web.webp" alt="art_pic"/></div>
                                    <p className="dat">   August 10, 2023 - 6:16 PM</p>
                                    <h1>Alibaba Grows Income from Operations by 70%, Pushing Stock Higher</h1>
                                    <p>Alibaba Group Holdings Ltd. (BABA) delivered serious gains in the quarter ended June 30, with income from operations up 70% year-over-year, sending its stock up nearly 7% this morning.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br"> 
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/642" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691742049/ncx-blog-1036_ztcxtd.png" alt="art_pic"/></div>
                                <p className="dat"> August 11, 2023</p>
                                <h1>Aptos stalls at range-high: Can sellers gain more ground?</h1>
                                <p>APT was holding steady at the mid-range but could present a shorting opportunity if BTC drops below the $29.5k range-low.</p>
                            </a>
                            <a href="/post-markets/641" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691741523/ncx-blog-1035_t5qac6.webp"/></div>
                                <p className="dat"> August 11, 2023 - 5:15 AM</p>
                                <h1>Slowing US inflation data inspires hope for a crypto price rally</h1>
                                <p>Bitcoin dipped on Friday morning in Asia, falling below the US$29,500 threshold. Ether also edged down as other top 10 non-stablecoin cryptocurrencies traded mixed. Market experts expect Bitcoin and Ether to remain steady</p>
                            </a>
                            <a href="/post-commodities/606" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691754384/ncx-blog-1052_sv5h03.webp" alt="art_pic"/></div>
                                <p className="dat"> August 11, 2023 - 12:00 AM</p>
                                <h1>JPMorgan Predicts Record Highs for Gold — Should You Invest Now?</h1>
                                <p>Gold has always been in demand, for both its beauty and its utility. It’s also often used as a diversification tool, or even as a speculative stand-alone investment. But its price is often hard to predict.</p>
                            </a>
                            <a href="/post-commodities/605" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691753926/ncx-blog-1051_yjndgj.webp" alt="art_pic"/></div>
                                <p className="dat">August 10, 2023 - 8:35 PM</p>
                                <h1>European Gas Declines as Market Cools After Fears of LNG Strikes</h1>
                                <p>(Bloomberg) -- European natural gas declined Thursday as traders took stock of an extreme price swing in the previous session, fueled by the possibility of strikes in Australia that could disrupt supplies.</p>
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
                            <a href="/post-forex/616" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691747235/ncx-blog-1047_j0tpfs.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 11, 2023 - 10:16 AM</p>
                                    <h1>UK economy grows 0.2% in second quarter, avoiding recession</h1>
                                    <p>The UK's economy grew 0.2% in the second quarter, with gross domestic product (GDP) also growing 0.5% in June, according to the latest figures from the Office for National Statistics.</p>
                                </a>
                            <a href="/post-forex/615" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691746895/ncx-blog-1046_zeyvpw.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 10, 2023 - 10:57 PM</p>
                                    <h1>JPMorgan Stock Top Stories: Commercial Real Estate Debt Challenges and Goldman Sachs Frozen Assets</h1>
                                    <p>Big banks, including JPMorgan, are grappling with a potential crisis in the commercial real estate sector. Efforts to offload commercial real estate loans have been met with challenges, as interested buyers are scarce.</p>
                                </a>
                            <a href="/post-forex/614" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691746572/ncx-blog-1045_xauxc5.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 10, 2023 - 7:06 PM</p>
                                    <h1>Yen Dips to Weakest Since 2008 Against Euro, Eyes 145 Per Dollar</h1>
                                    <p>(Bloomberg) -- The yen fell to the weakest against the euro since 2008 on Thursday, extending losses after tame US inflation data and putting traders on guard for jawboning from Japanese officials.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/609" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691755439/ncx-blog-1055_oskf5x.webp" alt="art_pic"/></div>
                                    <p className="dat">August 11, 2023 - 12:57 PM</p>
                                    <h1>Oil Holds Near $83 as IEA Sees Consumption at a Record</h1>
                                    <p>(Bloomberg) -- During periods of turmoil, gold tends to make headlines as fans of the precious metal argue it can act as a safe haven. But is it also an inflation hedge? Is it considered a risk asset?</p>
                                </a>   
                            <a href="/post-commodities/608" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691754950/ncx-blog-1054_u3cwim.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 11, 2023 - 6:26 AM</p>
                                    <h1>Gold stays near 1-month lows as US dollar, yields hold ground</h1>
                                    <p>(Reuters) - Gold prices held near one-month lows on Friday, shrugging off cooler-than-expected U.S. inflation figures for last month, with bullion staying on course to wrap up its worst week in seven as the U.S. dollar and bond yields stood strong.</p>
                                </a>   
                            <a href="/post-commodities/607" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691754719/ncx-blog-1053_zmcixx.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 11, 2023 - 4:38 AM</p>
                                    <h1>Oil holds near highs on upbeat demand growth forecasts</h1>
                                    <p>LONDON (Reuters) - Oil prices held near recent highs on Friday amid optimistic demand forecasts from the OPEC producer group and the International Energy Agency (IEA).</p>
                                </a>                   
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/592" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691750612/ncx-blog-1050_uioaqw.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 11, 2023 - 12:32 AM</p>
                                    <h1>Dow Jones Closes Near Session Low; Cathie Wood Loads Up On This Stock Despite 23% Plunge</h1>
                                    <p>The Dow Jones Industrial Average closed near session lows after ceding ground early as Walt Disney (DIS) jumped following its report. Famed fund manager Cathie Wood loaded up on Roblox (RBLX) despite a huge plunge for the stock. China stock Alibaba (BABA) vaulted after earnings.</p>
                                </a>
                            <a href="/post-indices/591" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691749787/ncx-blog-1049_sggmje.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 10, 2023 - 6:26 PM</p>
                                    <h1>FTSE 100 and European markets in the green as US inflation ticks up</h1>
                                    <p>The FTSE 100 and stocks across Europe built on gains from the day before on Thursday, in spite of evident pain in the UK housing market and fresh data showing inflation is creeping up in the US.</p>
                                </a>
                            <a href="/post-indices/590" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691749464/ncx-blog-1048_zmjafu.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 8, 2023 - 6:27 PM</p>
                                    <h1>FTSE and Wall Street slip amid weak US and China trade</h1>
                                    <p>European stock markets were in negative territory on Tuesday as UK retail data showed that like-for-like sales slowed during July, rising 1.8% but well below the three-month average of 3.3%.</p>
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