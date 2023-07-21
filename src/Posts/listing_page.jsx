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
                            <a href="/post-markets/607" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689919607/ncx-blog-924_qoilss.webp"/></div>
                                    <p className="dat"> July 21, 2023 - 1:33 AM</p>
                                    <h1>GE Stock Soars 70% With Earnings On Deck — Is It A Buy?</h1>
                                    <p>The "new GE," GE Aerospace, will emerge in 2024. GE stock has rallied due to momentum in General Electric's aviation unit.</p>
                                </a>
                            <a href="/post-markets/605" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689862788/ncx-blog-915_mugjnm.webp" alt="art_pic"/></div>
                                    <p className="dat">   July 20, 2023 - 6:53 AM</p>
                                    <h1>Stocks shuffle sideways, China drips support as property crisis reignites</h1>
                                    <p>LONDON (Reuters) - World share markets shuffled sideways on Thursday as investors looked ahead to a clutch of key central bank meetings, saw Chinese property teeter again and disappointing earnings from Netflix and Tesla</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/618" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689848973/ncx-blog-902_yvoscf.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 19, 2023 - 6:01 PM</p>
                                    <h1>Bitcoin loses grip on US$30,000 as profit-taking kicks in; XRP gains as other top 10 crypto fall</h1>
                                    <p>Bitcoin slipped under US$30,000 in Wednesday morning trading in Asia on the back of profit-taking and liquidation of long positions after the recent run up on optimism spot exchange-traded funds for the token</p>
                                </a>
                            <a href="/post-crypto/617" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689849825/ncx-blog-903_w95j9r.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 19, 2023 - 1:48 AM</p>
                                    <h1>XRP’s 60% Weekly Gain Defies Broader Crypto Slump as Bitcoin Stalls Below $30K</h1>
                                    <p>Ripple’s XRP outperformed most cryptocurrencies Tuesday as the initial market-wide rally following last Thursday’s lawsuit ruling has seemingly fizzled out.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/606" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689917386/ncx-blog-920_ftzfay.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 21, 2023 - 12:51 AM</p>
                                    <h1>Netflix Declines the Most This Year as Outlook Disappoints</h1>
                                    <p>(Bloomberg) -- Netflix Inc. shares fell the most this year after the company projected third-quarter revenue that fell short of Wall Street estimates, suggesting a crackdown on password sharing and a new advertising tier</p>
                                </a>
                            <a href="/post-markets/604" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689865963/ncx-blog-917_s2fy6h.webp" alt="art_pic"/></div>
                                    <p className="dat">   July 20, 2023 - 6:45 AM</p>
                                    <h1>Apple just added $71 billion in market value on news it developing an Apple GPT AI</h1>
                                    <p>Apple stock surged as much as 2.3% to a record high on Wednesday after Bloomberg reported on the company's artificial intelligence ambitions.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
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
                            <a href="/post-markets/601" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689920700/ncx-blog-926_yzmxkm.webp" alt="art_pic"/></div>
                                <p className="dat">  July 20, 2023 - 1:42 AM</p>
                                <h1>US stocks edge higher as traders hope to keep win streak alive ahead of Big Tech earnings</h1>
                                <p>US stocks ticked higher on Wednesday as traders awaited high-profile earnings results from Tesla and Netflix and hoped to keep the market's latest winning streak alive.</p>
                            </a>
                            <a href="/post-markets/600" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689864115/ncx-blog-916_raxvra.webp"/></div>
                                <p className="dat"> July 20, 2023 - 12:28 AM</p>
                                <h1>Nvidia More Than Triples In 2023 On AI Boost — Is It A Buy?</h1>
                                <p>Nvidia (NVDA), a giant in data centers and gaming, continues to sizzle. The chip giant is seen as one of the biggest winners of the AI boom. Is Nvidia stock a buy right now?</p>
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
                            <a href="/post-forex/588" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689858948/ncx-blog-913_w22lxb.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 19, 2023 - 6:47 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Bounces Against Japanese Yen</h1>
                                    <p>The US dollar has rallied significantly to reach the 50-Day EMA during the trading session on Wednesday, as we have reached the 50-Day EMA. The 50-Day EMA sits right around the ¥140 level, so that has a certain amount</p>
                                </a>
                            <a href="/post-forex/587" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689858748/ncx-blog-912_pp06ae.webp" alt="art_pic"/></div>
                                    <p className="dat">   July 19, 2023 - 6:42 PM</p>
                                    <h1>GBP/USD Forecast – British Pound Gets Crushed</h1>
                                    <p>The British pound has fallen rather hard against the US dollar, as we have seen the greenback pick up a bit of strength around the Forex world during the Wednesday session.</p>
                                </a>
                            <a href="/post-forex/586" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689858519/ncx-blog-911_glyv3u.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 19, 2023 - 6:37 PM</p>
                                    <h1>GBP/JPY Forecast – British Pound Continues to See Upward Momentum Against Yen</h1>
                                    <p>During Wednesday’s trading session, the British pound initially attempted to rally against the Japanese yen but faced resistance near the ¥180 level. </p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/584" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689845730/ncx-blog-895_yedulx.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 19, 2023 - 5:20 PM</p>
                                    <h1>Oil & Gas Stock Roundup: Exxon Denbury Buyout, Shell Oil Find & More</h1>
                                    <p>It was another week when oil prices moved up while natural gas futures marked a loss.</p>
                                </a>
                            <a href="/post-commodities/583" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689847917/ncx-blog-900_ybtpth.webp" alt="art_pic"/></div>
                                    <p className="dat">July 19, 2023 - 6:53 PM</p>
                                    <h1>Gold Bounces as Inflation Cools and US Retail Sales Disappoint</h1>
                                    <p>In HYCM’s recent coverage of gold we focused on the sell-off following May’s highs, and attempted to identify price levels that could suggest further downside, or alternatively a bounce to higher-highs.</p>
                                </a>   
                            <a href="/post-commodities/582" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689846491/ncx-blog-896_gcbyu6.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 19, 2023 - 4:03 PM</p>
                                    <h1>Shell (SHEL) Halts Crude Oil Loading at Forcados Terminal</h1>
                                    <p>Shell plc’s (SHEL) subsidiary, Shell Petroleum Development Company (SPDC), halted loadings of Nigeria's Forcados crude oil owing to a probable leak at the export terminal, per a Reuters report.</p>
                                </a>                      
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/571" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689922243/ncx-blog-928_dryxgf.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 20, 2023 - 4:06 PM</p>
                                    <h1>Dow Jones Futures Rise: Market Rally Hits 2023 Highs; Tesla Skids Late On These Elon Musk Comments</h1>
                                    <p>The major indexes hit new 52-week highs, but did pare morning gains. Tesla fell late as Elon Musk spoke on the earnings call. Netflix sold off late.</p>
                                </a>
                            <a href="/post-indices/570" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689924930/ncx-blog-932_ifv2lj.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 20, 2023 - 1:14 PM</p>
                                    <h1>Tesla, Netflix pull Nasdaq and S&P lower, Dow ends higher</h1>
                                    <p>NEW YORK (Reuters) - The S&P 500 and Nasdaq fell on Thursday, weighed down by drops in Tesla and Netflix following their quarterly results, but the Dow advanced for a ninth straight day thanks to gains in Johnson &</p>
                                </a>
                            <a href="/post-indices/569" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689924084/ncx-blog-930_ugxwlb.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 20, 2023 - 8:08 AM</p>
                                    <h1>Dow hits 8-day winning streak as investors hope for more upbeat earnings reports</h1>
                                    <p>Stocks rose Wednesday as earnings season ramped up, with the Dow Jones Industrial Average notching its eighth consecutive gain.</p>
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