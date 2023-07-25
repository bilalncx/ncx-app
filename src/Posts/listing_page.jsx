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
                            <a href="/post-markets/610" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690204658/ncx-blog-937_x5qxzc.jpg"/></div>
                                    <p className="dat"> July 24, 2023 - 4:24 PM</p>
                                    <h1>Bonds Gain, Stocks Muted After Weak European Data: Markets Wrap</h1>
                                    <p>(Bloomberg) -- Global bonds rallied and stock markets were muted Monday, as sharp declines in manufacturing and services gauges across Europe fanned concerns about economic growth.</p>
                                </a>
                            <a href="/post-crypto/621" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690202508/ncx-blog-936_a8b3wu.webp" alt="art_pic"/></div>
                                    <p className="dat">   July 24, 2023 - 4:58 AM</p>
                                    <h1>Bitcoin reclaims US$30,000, Ether gains, Cardano leads winners as top 10 crypto rise</h1>
                                    <p>Bitcoin rose in early Monday morning trading in Asia to reclaim the US$30,000 support level, but later retreated. Ether moved higher to near US$1,900, while most other top 10 non-stablecoin cryptocurrencies logged gains.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/620" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690201694/ncx-blog-935_kx7ks3.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 23, 2023 - 4:30 PM</p>
                                    <h1>A bitcoin positive-feedback loop could more than quadruple the price beyond $120,000, analyst says</h1>
                                    <p>Bitcoin miners are creating a virtuous circle that could propel the token's price beyond already-bullish forecasts, Standard Chartered analyst Geoff Kendrick told Insider.</p>
                                </a>
                            <a href="/post-crypto/619" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690200959/ncx-blog-934_hswx8o.png" alt="art_pic"/></div>
                                    <p className="dat">  July 22, 2023</p>
                                    <h1>Final countdown to Shibarium Mainnet means SHIB can expect to…</h1>
                                    <p>Usage of SHIB has increased since the Shibarium development team provided an update. Here’s what else you can expect now…</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/609" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690205115/ncx-blog-939_wzxrnz.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 24, 2023 - 7:44 AM</p>
                                    <h1>India Reliance eases off record highs as Q1 profit disappoints</h1>
                                    <p>BENGALURU (Reuters) -Shares of Reliance Industries, India's largest company by market capitalisation, fell nearly 3% on Monday, the most in nearly two weeks, after the conglomerate posted a bigger-than-expected drop in profit late.</p>
                                </a>
                            <a href="/post-markets/608" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690204790/ncx-blog-938_k15kig.webp" alt="art_pic"/></div>
                                    <p className="dat">   July 24, 2023 - 4:50 AM</p>
                                    <h1>Alibaba to Stay on Sidelines of Ant’s $6 Billion Stock Buyback</h1>
                                    <p>(Bloomberg) -- Alibaba Group Holding Ltd. has decided not to sell any part of its one-third stake in Ant Group Co. during the Chinese fintech leader’s imminent share buyback, saying it wants to maintain its slice of an important partner.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br"> 
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-markets/607" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689919607/ncx-blog-924_qoilss.webp" alt="art_pic"/></div>
                                <p className="dat">  July 21, 2023 - 1:33 AM</p>
                                <h1>GE Stock Soars 70% With Earnings On Deck — Is It A Buy?</h1>
                                <p>The "new GE," GE Aerospace, will emerge in 2024. GE stock has rallied due to momentum in General Electric's aviation unit.</p>
                            </a>
                            <a href="/post-markets/606" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689917386/ncx-blog-920_ftzfay.webp"/></div>
                                <p className="dat"> July 21, 2023 - 12:51 AM</p>
                                <h1>Netflix Declines the Most This Year as Outlook Disappoints</h1>
                                <p>(Bloomberg) -- Netflix Inc. shares fell the most this year after the company projected third-quarter revenue that fell short of Wall Street estimates, suggesting a crackdown on password sharing and a new advertising tier aren’t</p>
                            </a>
                            <a href="/post-markets/603" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689920287/ncx-blog-925_yne8vx.webp" alt="art_pic"/></div>
                                <p className="dat"> July 20, 2023 - 4:04 AM</p>
                                <h1>Japan exports underwhelm in June, global weakness drags on economy</h1>
                                <p>TOKYO (Reuters) -Japan's annual exports grew much-less than expected in June, highlighting weak Chinese and Western demand that continues to undercut the post-COVID recovery in the world's third-biggest economy.</p>
                            </a>
                            <a href="/post-markets/602" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689918587/ncx-blog-922_jobrmq.webp" alt="art_pic"/></div>
                                <p className="dat">  July 20, 2023 - 3:51 AM</p>
                                <h1>Wednesday ETF Winners And Losers: Small-Cap Fund Flows - QQQE, Little Cousin Of Invesco QQQ, Adds $173.17 Million</h1>
                                <p>We performed a screening of small-cap ETFs - defined as having Assets Under Management (AUM) between $400 million and $2 billion - to determine what funds had the largest change in net assets on the week,</p>
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
                            <a href="/post-forex/591" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690212211/ncx-blog-942_hxuqky.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 24, 2023 - 6:15 PM</p>
                                    <h1>Interest rate rises to halve UK growth, think tank forecasts</h1>
                                    <p>The impact of the Bank of England's interest rate rises is likely to have a long-term effect on economic growth in the UK, EY Item Club said, as it more than halved its forecast for 2024.</p>
                                </a>
                            <a href="/post-forex/590" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690211816/ncx-blog-941_guoqbt.webp" alt="art_pic"/></div>
                                    <p className="dat">   July 24, 2023 - 12:07 PM</p>
                                    <h1>Worsening euro zone business downturn reignites recession fears</h1>
                                    <p>LONDON (Reuters) -Euro zone business activity shrank much more than expected in July as demand in the bloc's dominant services industry declined while factory output fell at the fastest pace since COVID-19 first took hold, a survey showed.</p>
                                </a>
                            <a href="/post-forex/589" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690211394/ncx-blog-940_dninl7.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 24, 2023 - 4:56 AM</p>
                                    <h1>Euro drops after weak business activity data, central banks in focus</h1>
                                    <p>SYDNEY/LONDON (Reuters) - The euro slid on Monday after activity data in key economies came in much softer than expected, giving markets a jolt at the start of a week packed with central bank meetings at which investors</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/586" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690213115/ncx-blog-944_rgvqaf.webp" alt="art_pic"/></div>
                                    <p className="dat">July 24, 2023 - 5:05 AM</p>
                                    <h1>Oil prices rise as tight supply counters expected rate hikes</h1>
                                    <p>LONDON (Reuters) -Oil prices rose on Monday as tightening supply and hopes for Chinese stimulus measures underpinned Brent at well above $80 a barrel, even as traders expected more rate hikes from U.S. and European central banks.</p>
                                </a>   
                            <a href="/post-commodities/585" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690212470/ncx-blog-943_a6vw5w.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 23, 2023 - 10:19 PM</p>
                                    <h1>Newmont Corporation (NYSE:NEM) Q2 2023 Earnings Call Transcript</h1>
                                    <p>Newmont Corporation (NYSE:NEM) Q2 2023 Earnings Call Transcript July 20, 2023. Newmont Corporation misses on earnings expectations. Reported EPS is $0.33 EPS, expectations were $0.44.</p>
                                </a>   
                            <a href="/post-commodities/584" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689845730/ncx-blog-895_yedulx.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 19, 2023 - 5:20 PM</p>
                                    <h1>Oil & Gas Stock Roundup: Exxon Denbury Buyout, Shell Oil Find & More</h1>
                                    <p>It was another week when oil prices moved up while natural gas futures marked a loss.</p>
                                </a>                   
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/574" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690264380/ncx-blog-947_wljqpi.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 24, 2023 - 7:45 PM</p>
                                    <h1>European Shares Subdued; Spain’s IBEX Drops on Inconclusive Vote</h1>
                                    <p>(Bloomberg) -- European stocks were subdued at the start of the busiest week of the earnings season, with investors also awaiting key central bank policy meetings. Spanish stocks fell after an inconclusive election outcome.</p>
                                </a>
                            <a href="/post-indices/573" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690263793/ncx-blog-946_enskmh.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 24, 2023 - 7:40 PM</p>
                                    <h1>How Nasdaq 100 Special Rebalance Punishes The Magnificent 7</h1>
                                    <p>One of the so-called "Magnificent Seven" stocks, Meta Platforms, dodges the pending changes, says an analysis by Bespoke Investment Group. Meta's weight in the Nasdaq 100 will actually rise slightly. The Nasdaq 100 owns the</p>
                                </a>
                            <a href="/post-indices/572" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690213758/ncx-blog-945_k98896.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 24, 2023 - 6:11 PM</p>
                                    <h1>Chevron Surprise: Dow Jones Oil Giant Announces Leadership Shake-Up As Earnings Tumble Nearly 50%</h1>
                                    <p>Chevron surprised markets Sunday, releasing better-than-expected second-quarter figures early, along with changes to its leadership structure.</p>
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