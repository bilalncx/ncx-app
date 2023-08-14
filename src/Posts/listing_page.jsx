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
                            <a href="/post-commodities/614" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692021727/ncx-blog-1088_q0qal4.webp"/></div>
                                    <p className="dat">August 14, 2023 - 4:48 PM</p>
                                    <h1>Oil Falls as Concerns About China Spur Volatility Across Markets</h1>
                                    <p>(Bloomberg) -- Oil declined in a volatile session where sentiment was being driven by renewed worries surrounding China’s property sector.</p>
                                </a>
                            <a href="/post-crypto/651" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692003885/ncx-blog-1064_lgslyy.jpg" alt="art_pic"/></div>
                                    <p className="dat">  August 14, 2023</p>
                                    <h1>Ethereum: Are institutional investors in the U.S shunning ETH?</h1>
                                    <p>(Bloomberg) -- Oil was on track to end the week little changed, after touching the highest since November in recent days, as the International Energy Agency’s monthly snapshot pointed to a robust market.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/650" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692003636/ncx-blog-1063_ymd4zb.png" alt="art_pic"/></div>
                                    <p className="dat"> August 14, 2023</p>
                                    <h1>Uniswap: Founder Hayden not here to make ‘FRENS’ with latest update</h1>
                                    <p>Uniswap faces market uncertainty due to a developer’s controversial actions around the FRENS token. While Uniswap’s activity declined post-controversy…</p>
                                </a>
                            <a href="/post-crypto/649" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692003307/ncx-blog-1062_ow9qei.png" alt="art_pic"/></div>
                                    <p className="dat">  August 14, 2023</p>
                                    <h1>Solana vs Polygon: How is 2023 turning out to be for both?</h1>
                                    <p>Polygon had more daily active addresses than Solana for three consecutive months, but SOL outshined MATIC in a few areas.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/643" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692016137/ncx-blog-1080_f18nzh.jpg" alt="art_pic"/></div>
                                    <p className="dat"> August 14, 2023 - 1:08 PM</p>
                                    <h1>Stocks, Bond Climb as China Takes Action on Debt: Markets Wrap</h1>
                                    <p>(Bloomberg) -- Stocks and bonds rose as China moved to address a worsening property slump, shoring up confidence in global markets.</p>
                                </a>
                            <a href="/post-markets/642" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692015934/ncx-blog-1079_vgvlro.jpg" alt="art_pic"/></div>
                                    <p className="dat">  August 14, 2023 - 9:38 AM</p>
                                    <h1>Stock market today: Global markets mixed after stronger US inflation revives fears of rate hike</h1>
                                    <p>BEIJING (AP) — Global stock markets were mixed Monday after stronger U.S. inflation revived worries the Federal Reserve might hike interest rates again.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br"> 
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-markets/641" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692015077/ncx-blog-1078_upu5ux.webp" alt="art_pic"/></div>
                                <p className="dat">August 14, 2023 - 8:01 AM</p>
                                <h1>India Adani Group stocks hit by first auditor quitting over Hindenburg report</h1>
                                <p>BENGALURU (Reuters) -Shares of Adani Group companies fell between 3% and 6% on Monday after Deloitte resigned as auditor of Adani Ports, the first such move at the Gautam Adani-led conglomerate since U.S. short-seller Hindenburg's report on the company in January.</p>
                            </a>
                            <a href="/post-markets/640" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692014613/ncx-blog-1077_tezgja.webp"/></div>
                                <p className="dat"> August 14, 2023 - 8:00 AM</p>
                                <h1>U.S. Office Woes and China’s Slowdown Rattle Singapore’s REIT Market</h1>
                                <p>SINGAPORE—One of Asia’s largest markets for real-estate investment trusts is reeling from America’s office slump and China’s slowing economy.</p>
                            </a>
                            <a href="/post-markets/639" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692014201/ncx-blog-1076_anxvjx.webp" alt="art_pic"/></div>
                                <p className="dat"> August 14, 2023 - 8:00 AM</p>
                                <h1>ECB Still Seen Delivering One Last Hike in September, Poll Shows</h1>
                                <p>(Bloomberg) -- Unmoved by recent signs that inflation pressure is abating, economists continue to predict that the European Central Bank will deliver one final increase in interest rates next month.</p>
                            </a>
                            <a href="/post-markets/638" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692013754/ncx-blog-1075_duslvn.webp" alt="art_pic"/></div>
                                <p className="dat">August 14, 2023 - 7:20 AM</p>
                                <h1>A $4.3 Billion India Fund’s Long Search for New CEO Stirs Worry</h1>
                                <p>(Bloomberg) -- National Investment & Infrastructure Fund’s long-drawn hunt for a new Chief Executive Officer is raising concerns among investors, according to people familiar with the matter, potentially posing a risk to the government’s plans for the business.</p>
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
                            <a href="/post-forex/619" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692005064/ncx-blog-1067_nlcrg1.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 14, 2023 - 11:03 AM</p>
                                    <h1>Yen Slides Toward Intervention Zone on Wide Japan-US Yield Gap</h1>
                                    <p>(Bloomberg) -- The yen touched its weakest in nine months as Japan’s interest-rate gap with the US pushes the currency toward levels that last year saw intervention by authorities in Tokyo.</p>
                                </a>
                            <a href="/post-forex/618" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692004522/ncx-blog-1066_zpvw8q.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 14, 2023 - 7:34 AM</p>
                                    <h1>Embattled Peso Seeks Relief as Philippines to Weigh Rate Hike</h1>
                                    <p>(Bloomberg) -- A rebound in the dollar has hit the peso harder than most of its peers and the losses may get exacerbated if policymakers at the Philippine central bank hold interest rates this week.</p>
                                </a>
                            <a href="/post-forex/617" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692004307/ncx-blog-1065_zbno7j.webp" alt="art_pic"/></div>
                                    <p className="dat">August 14, 2023 - 6:58 AM</p>
                                    <h1>Hedge Funds Turned Long Aussie Dollar at Just the Wrong Time</h1>
                                    <p>(Bloomberg) -- Hedge funds turned the most bullish on the Australian dollar than they’ve been at any point this year, just before concerns over a slowing Chinese economy dragged the currency to a nine-month low.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/613" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692021385/ncx-blog-1087_lrrd1g.webp" alt="art_pic"/></div>
                                    <p className="dat">August 14, 2023 - 4:43 PM</p>
                                    <h1>Five Key Charts to Watch in Global Commodities This Week</h1>
                                    <p>(Bloomberg) -- A year ago this week, US President Joe Biden signed into law the landmark Inflation Reduction Act, pouring hundreds of billions of dollars into efforts to respond to the climate crisis and boost the nation’s reliance on clean energy.</p>
                                </a>   
                            <a href="/post-commodities/612" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692020277/ncx-blog-1086_wcibm2.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 14, 2023 - 3:02 PM</p>
                                    <h1>11 Cheap Gold Stocks To Buy According to Analysts</h1>
                                    <p>In this article, we discuss the 11 cheap gold stocks to buy according to analysts. To skip the detailed analysis of the gold industry, go directly to the 5 Cheap Gold Stocks To Buy According to Analysts.</p>
                                </a>   
                            <a href="/post-commodities/611" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692020018/ncx-blog-1085_t5ztkp.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 14, 2023 - 4:53 AM</p>
                                    <h1>Oil slips as China worries, stronger dollar weigh</h1>
                                    <p>LONDON (Reuters) -Oil prices slipped about 1% on Monday as concerns about China's faltering economic recovery and a stronger dollar, after seven weeks of gains driven by tightening supply from OPEC+ cuts.</p>
                                </a>                   
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/595" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692018061/ncx-blog-1083_onaxoo.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 14, 2023 - 4:15 PM</p>
                                    <h1>Dow Jones Futures Rise As Rally Tries To Survive: Tesla, Steel Giant Move On News</h1>
                                    <p>Dow Jones futures rose slightly Monday morning, along with S&P 500 futures and Nasdaq futures. Tesla (TSLA) cut Model Y prices in China while U.S. Steel rejected a takeover bid.</p>
                                </a>
                            <a href="/post-indices/594" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692017778/ncx-blog-1082_fvzyc9.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 14, 2023 - 7:48 AM</p>
                                    <h1>Stock market today: Asia follows Wall Street lower after US data revive fears about rate hike</h1>
                                    <p>BEIJING (AP) — Asian stock markets tumbled Monday after mixed U.S. economic data revived worries the Federal Reserve might hike interest rates again.</p>
                                </a>
                            <a href="/post-indices/593" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692017241/ncx-blog-1081_yxzj5e.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 13, 2023 - 1:39 PM</p>
                                    <h1>Earnings Follow Superstar Stocks like NVIDIA and Super Micro</h1>
                                    <p>But, when it comes to the best of breed outlier companies, earnings follow superstar stocks. And you can spot them following institutional demand.</p>
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