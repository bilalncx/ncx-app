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
                            <a href="/post-crypto/674" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692622376/ncx-blog-1132_wsjtww.png"/></div>
                                    <p className="dat"> August 21, 2023</p>
                                    <h1>Why now is the best time to invest in altcoins</h1>
                                    <p>While fear among investors was dominant in the market, a few of the altcoins’ metrics turned bullish, suggesting a possible bull rally.</p>
                                </a>
                            <a href="/post-crypto/673" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692621947/ncx-blog-1131_ndmccb.png" alt="art_pic"/></div>
                                    <p className="dat"> August 21, 2023</p>
                                    <h1>Solana vs Dogecoin: What to expect as the race heats up</h1>
                                    <p>Solana and Dogecoin’s market caps remained close to each other with only a difference of a few thousand dollars.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/672" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692621094/ncx-blog-1130_ndybef.jpg" alt="art_pic"/></div>
                                    <p className="dat">  August 21, 2023</p>
                                    <h1>Bitcoin: Analyzing how the next halving might affect BTC</h1>
                                    <p>Bitcoin’s value was worth only about 0.2 of what it should ideally be as per the stock-to-flow model, suggesting room for exponential growth.</p>
                                </a>
                            <a href="/post-crypto/675" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692622722/ncx-blog-1133_aocfqf.png" alt="art_pic"/></div>
                                <p className="dat"> August 21, 2023</p>
                                <h1>What Monero’s northbound momentum tells you</h1>
                                <p>Monero’s performance on the social front was commendable, while its price rallied by 2%, suggesting a continued bull run.</p>
                            </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/658" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692693142/ncx-blog-1152_xewjmw.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 21, 2023 - 9:52 PM</p>
                                    <h1>US borrowing costs highest since 2007 amid interest rate fears</h1>
                                    <p>Joe Biden’s US government faces its highest borrowing costs since before the global financial crisis amid concerns that the Federal Reserve will keep interest rates higher for longer.</p>
                                </a>
                            <a href="/post-markets/657" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692688218/ncx-blog-1151_xmzlyw.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 21, 2023 - 2:33 PM</p>
                                    <h1>Bond Bulls at JPMorgan, Allianz Double Down on a Bet Gone Bad</h1>
                                    <p>(Bloomberg) -- Convinced a recession in the US was near, some of the world’s most prominent money managers loaded up on government bonds this year in a bold bet that would atone for the punishing losses suffered in 2022.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br"> 
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-indices/603" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692627220/ncx-blog-1141_xiclqx.webp" alt="art_pic"/></div>
                                <p className="dat">August 21, 2023 - 4:20 PM</p>
                                <h1>Dow Jones Futures Rise: Market In Correction As Nvidia Earnings, Powell Speech Loom; What To Do</h1>
                                <p>Dow Jones futures rose modestly Monday morning, along with S&P 500 futures and Nasdaq futures, even as Treasury yields rebounded. Nvidia (NVDA) earnings and a big speech from Fed chief Jerome Powell lie ahead.</p>
                            </a>
                            <a href="/post-forex/629" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692624772/ncx-blog-1137_lqd9pm.webp"/></div>
                                <p className="dat">August 21, 2023 - 3:25 PM</p>
                                <h1>JPMorgan sees Japan threshold for yen intervention at around 150 yen per dollar</h1>
                                <p>LONDON (Reuters) - Japan's threshold for currency market intervention on the yen is likely to be around 150 per dollar, investment bank JPMorgan's analysts said on Monday.</p>
                            </a>
                            <a href="/post-markets/656" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692687613/ncx-blog-1150_dtym0u.jpg" alt="art_pic"/></div>
                                <p className="dat">August 21, 2023 - 2:16 PM</p>
                                <h1>Nvidia earnings will be major test for AI demand, market rally</h1>
                                <p>(Reuters) -Nvidia investors expect the chip designer to forecast quarterly revenue above estimates when it reports results on Wednesday. Their only question is, by how much?</p>
                            </a>
                            <a href="/post-markets/655" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692687087/ncx-blog-1149_mqbnh7.webp" alt="art_pic"/></div>
                                <p className="dat"> August 21, 2023 - 1:10 PM</p>
                                <h1>Credit Suisse Shuts Japan Equity Trading for Hedge Funds</h1>
                                <p>(Bloomberg) -- Credit Suisse is shutting its cash equity sales business in Japan, and has told hedge funds and other institutional clients it would no longer be taking orders as UBS Group AG proceeds with a global overhaul.</p>
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
                            <a href="/post-forex/628" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692624417/ncx-blog-1136_orf6tv.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 21, 2023 - 3:16 PM</p>
                                    <h1>Pound has peaked and will come under renewed pressure, says HSBC</h1>
                                    <p>The pound has peaked and will come under pressure in the coming months as the housing market stumbles and consumer resilience fades, according to HSBC.</p>
                                </a>
                            <a href="/post-forex/627" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692624087/ncx-blog-1135_h3ft9u.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 21, 2023 - 9:27 AM</p>
                                    <h1>Rupee Outperforms EM Asia Peers Even as It Nears Record Low</h1>
                                    <p>(Bloomberg) -- The Indian rupee is within a whisker of a record low, but it’s still a favored emerging-market currency with some investors.</p>
                                </a>
                            <a href="/post-forex/626" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692623828/ncx-blog-1134_lmdzwg.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 21, 2023 - 4:48 AM</p>
                                    <h1>Dollar retreats from 2-month high, yuan turns higher</h1>
                                    <p>LONDON (Reuters) - The dollar fell from a two-month high on Monday following five straight weeks of gains, as risk sentiment improved in Europe, with attention already turning to the Federal Reserve's Jackson Hole symposium which kicks off on Friday.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/621" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692628732/ncx-blog-1144_y5hocp.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 21, 2023 - 5:03 PM</p>
                                    <h1>Oil Rises for Third Day as Tighter Market Vies With Demand Risks</h1>
                                    <p>(Bloomberg) -- Oil rose for a third day as signs the physical market is tightening offset growing demand risks in China and the US.</p>
                                </a>   
                            <a href="/post-commodities/620" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692628495/ncx-blog-1143_mv9exd.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 21, 2023 - 7:55 AM</p>
                                    <h1>Analysis-China LNG buyers expand trading after adding more US, Qatari contracts</h1>
                                    <p>SINGAPORE/LONDON (Reuters) - China's liquefied natural (LNG) gas importers are starting up or expanding trading desks in London and Singapore to better manage their growing and diversified supply portfolios in an increasingly volatile global market.</p>
                                </a>   
                            <a href="/post-commodities/619" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692628144/ncx-blog-1142_mnxddl.webp" alt="art_pic"/></div>
                                    <p className="dat">August 21, 2023 - 5:00 AM</p>
                                    <h1>Diesel Is Pricing a Scarcity With Winter Demand Looming</h1>
                                    <p>(Bloomberg) -- At any other time in history, the current state of the global diesel market would have sent some countries into a panic.</p>
                                </a>                   
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/602" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692626319/ncx-blog-1140_g6p3zo.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 21, 2023 - 3:18 PM</p>
                                    <h1>LIVE: FTSE 100 and European markets rise as UK house prices fall</h1>
                                    <p>Stocks in Europe moved higher by the afternoon on Monday in London as further evidence of price falls in the UK housing market hit.</p>
                                </a>
                            <a href="/post-indices/598" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692625628/ncx-blog-1139_je7p70.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 21, 2023 - 2:15 PM</p>
                                    <h1>Stocks bounce higher, Treasury yields extend run, as markets track Fed, China risks</h1>
                                    <p>Stocks look set to start the week as they ended on Friday: focused on Fed rate risks and China's weakening post-Covid recovery.</p>
                                </a>
                            <a href="/post-indices/597" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692625114/ncx-blog-1138_dmpve2.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 21, 2023 - 1:09 PM</p>
                                    <h1>U.S. Stock Futures Gain, Nasdaq Leads, With Nvidia in Focus</h1>
                                    <p>U.S. stock futures were rising early on Monday after another losing week. Earnings from Nvidia and messages from the Jackson Hole symposium of central bankers are set to be the highlights of the week.</p>
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