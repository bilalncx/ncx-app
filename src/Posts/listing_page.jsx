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
                                <a href="/post-markets/534" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-621.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 7, 2023 - 1:03 PM</p>
                                    <h1>China Stocks Too Cheap to Ignore for JPMorgan Asset, Invesco</h1>
                                    <p>(Bloomberg) -- The bearish tide against Chinese equities is growing but for some money managers, the stocks are value for money.</p>
                                </a>
                                <a href="/post-commodities/521" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-612.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 7, 2023 - 7:01 AM</p>
                                    <h1>Gold dips on firm dollar, markets look for Fed cues</h1>
                                    <p>(Reuters) - Gold prices eased in a narrow range on Wednesday as the dollar held firm and traders refrained from taking big bets as they looked for clear signals on the U.S. Federal Reserve's rate path.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/552" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-618.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 7, 2023 - 4:32 AM</p>
                                    <h1>Bitcoin, Ether most other top crypto bounce back even as Coinbase joins Binance as SEC lawsuit target</h1>
                                    <p>Bitcoin recovered to above US$27,000 on Wednesday morning in Asia, with nearly all other top 10 non-stablecoin cryptocurrencies rebounding even as U.S. regulators</p>
                                </a>
                            <a href="/post-crypto/551" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-619.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 6, 2023 - 5:07 PM</p>
                                    <h1>Crypto industry reacts to SEC’s lawsuit against Binance</h1>
                                    <p>The cryptocurrency industry faced another jolt as the U.S. Securities and Exchange Commission (SEC) launched its latest enforcement action against Binance, the world’s largest cryptocurrency exchange.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/533" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-620.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 7, 2023 - 7:17 AM</p>
                                    <h1>Chinas exports tumble in May as global demand falters</h1>
                                    <p>BEIJING (Reuters) -China's exports shrank much faster than expected in May while imports extended declines with a grim outlook for global demand,</p>
                                </a>
                            <a href="/post-markets/532" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-605.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 5, 2023 - 11:22 PM</p>
                                    <h1>How Apples stock reacted to Vision Pro announcement</h1>
                                    <p>Apple's stock fell after it unveiled its new Vision Pro mixed reality headset. Yahoo Finance markets reporter Jared Blikre breaks down the charts.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/550" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-607.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 6, 2023 - 1:58 PM</p>
                                <h1>Investors race to withdraw deposits from Binance amid web of deception claims - latest updates</h1>
                                <p>Investors have pulled around $780m (£628.4m) from crypto exchange Binance in the last 24 hours, data company Nansen has said, as US regulators </p>
                            </a>
                            <a href="/post-crypto/549" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-606.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 6, 2023 - 4:23 AM</p>
                                <h1>Bitcoin, Ether skid; BNB drops more than 10% after U.S. securities regulator sues Binance</h1>
                                <p>Bitcoin fell almost 6% and Ether lost 5% in a broad market fall by all top 10 non-stablecoin cryptocurrencies on Tuesday morning in Asia after the U.S.</p>
                            </a>
                            <a href="/post-commodities/519" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-602.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 5, 2023 - 2:33 AM</p>
                                <h1>Oil rises on Saudi plan to deepen output cuts from July</h1>
                                <p>LONDON (Reuters) -Oil prices rose by more than $1 a barrel on Monday after top crude exporter Saudi Arabia pledged to cut production by a further 1 million barrels per day (bpd) from July</p>
                            </a>
                            <a href="/post-markets/531" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-601.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 5, 2023 - 12:31 PM</p>
                                <h1>Teslas China-made EV sales rose 2.4% in May from April - CPCA</h1>
                                <p>BEIJING (Reuters) - U.S. automaker Tesla Inc delivered 77,695 China-made electric vehicles (EVs) in May, a 2.4% jump from April, data from the China Passenger Car Association (CPCA) showed on Monday.</p>
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
                            <a href="/post-forex/531" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-616.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 6, 2023 - 6:15 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Finds Buyers on the Dip</h1>
                                    <p>The US dollar initially tried to fall against the Japanese yen during the trading session on Tuesday, but then turned around to show signs of life again.</p>
                                </a>
                            <a href="/post-forex/530" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-617.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 6, 2023 - 6:08 PM</p>
                                    <h1>GBP to USD Forecast – British Pound Gives Up Early Gain</h1>
                                    <p>The British pound initially tried to rally during the trading session on Tuesday but gave back gain rather quickly. At this point, the market is likely to see the 50-Day</p>
                                </a>
                            <a href="/post-forex/529" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-610.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 5, 2023 - 6:02 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Threatens Another Breakout</h1>
                                    <p>The US dollar has rallied a bit during the trading session early on Monday, as the Japanese yen continues to lose value. That being said, there is a little bit of pushback,</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                                <a href="/post-commodities/520" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-611.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 7, 2023 - 5:04 AM</p>
                                    <h1>Oil extends losses as economic slowdown concerns return</h1>
                                    <p>TOKYO/SINGAPORE (Reuters) -Oil fell for a second day on Wednesday as concerns over global economic headwinds deepened, </p>
                                </a>
                                <a href="/post-commodities/522" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-613.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 5, 2023 - 8:22 PM</p>
                                    <h1>10 Best Copper Stocks to Buy</h1>
                                    <p>The copper mining industry is experiencing significant market trends that have far-reaching implications for the global landscape.</p>
                                </a>
                            <a href="/post-commodities/519" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-602.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 5, 2023 - 2:33 AM</p>
                                    <h1>Oil rises on Saudi plan to deepen output cuts from July</h1>
                                    <p>LONDON (Reuters) -Oil prices rose by more than $1 a barrel on Monday after top crude exporter Saudi Arabia pledged to cut production by a further 1 million</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/521" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-622.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 7, 2023 - 3:54 PM</p>
                                    <h1>Dow Jones Futures: Indexes Mask Broad Market Rally; Cathie Wood Loads Up Coinbase</h1>
                                    <p>The stock market rally had a slightly positive session on big-cap indexes Tuesday. But small-cap and midcap stocks had a big day.</p>
                                </a>
                            <a href="/post-indices/520" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-623.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 7, 2023 - 1:55 AM</p>
                                    <h1>Nasdaq Inches Up, Lags Boom In Banks, Small Caps; Fluence Energy Leads As These 3 Growth Stocks Break Out</h1>
                                    <p>The stock market traded mildly higher amid a relatively quiet day of news on Tuesday. Perhaps the most interesting feature of the day's market action:</p>
                                </a>  
                            <a href="/post-indices/519" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-604.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 6, 2023 - 1:00 PM</p>
                                    <h1>U.S. Stock Futures Slip Amid Recession Worries</h1>
                                    <p>S&P 500 futures were down 0.2%, with contracts tracking the tech-heavy Nasdaq 0.1% in the red. Optimism that gripped markets and sent stocks higher after a stronger-</p>
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