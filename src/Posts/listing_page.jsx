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
                            <a href="/post-crypto/667" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692367538/ncx-blog-1118_v3rv3s.jpg"/></div>
                                    <p className="dat"> August 18, 2023</p>
                                    <h1>Crypto now more stable than oil: Decoding this turn of events</h1>
                                    <p>The 90-day annualized volatility for Bitcoin and Ethereum plummeted to multi-year lows, making them less volatile than crude oil.</p>
                                </a>
                            <a href="/post-crypto/666" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692367137/ncx-blog-1117_ccba2v.png" alt="art_pic"/></div>
                                    <p className="dat">  August 18, 2023</p>
                                    <h1>USDT’s dominance on Tron jumps over 48%; does it mean good news for TRX?</h1>
                                    <p>USDT secured dominance as far as usage on the Tron network is concerned. It even managed to outshine Ethereum which currently accounts for 43% of usage on Tron. The USDT stablecoin is the most dominant asset on the network at 48.6%.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/665" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692366702/ncx-blog-1116_sd8vwj.png" alt="art_pic"/></div>
                                    <p className="dat"> August 18, 2023</p>
                                    <h1>Solana [SOL] bounces from range-low support, what’s next?</h1>
                                    <p>Solana’s [SOL] range-bound price movement continued after another price rejection at the range-high.</p>
                                </a>
                            <a href="/post-crypto/664" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692365993/ncx-blog-1115_y0zz9w.png" alt="art_pic"/></div>
                                    <p className="dat">  August 18, 2023</p>
                                    <h1>Avalanche network activity plummets: Can this development offer respite?</h1>
                                    <p>AVAX staking will reportedly be among the services offered through AvaCloud. In other words, Avalache just unlocked a new corridor that will facilitate AVAX demand for staking which may encourage a long-term bias.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/650" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692370824/ncx-blog-1125_x3zhrd.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 18, 2023 - 8:30 AM</p>
                                    <h1>Vietnam Tycoon Loses $18 Billion After EV Maker’s Shares Sink</h1>
                                    <p>(Bloomberg) -- After an astronomical rise in its first day of trading, VinFast Auto Ltd. is now coming back to Earth — erasing a chunk of its billionaire founder’s fortune.</p>
                                </a>
                            <a href="/post-markets/649" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692370428/ncx-blog-1124_rky3yt.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 18, 2023 - 7:03 AM</p>
                                    <h1>Foreign investors are giving up on China as capital flows reverse</h1>
                                    <p>Foreign investors are giving up on China as the economy's post-COVID recovery continues to fizzle with little hope of relief from Beijing.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br"> 
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/663" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692365450/ncx-blog-1114_v6nzik.png" alt="art_pic"/></div>
                                <p className="dat">August 18, 2023</p>
                                <h1>Shiba Inu’s much awaited Shibarium gets off to a rocky start</h1>
                                <p>Shiba Inu’s Shibarium launch promised to elevate SHIB and BONE beyond memes, but challenges surfaced. Amid hopes and hurdles, the community awaits Shibarium’s evolution.</p>
                            </a>
                            <a href="/post-crypto/662" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692365103/ncx-blog-1113_h3rhpr.png"/></div>
                                <p className="dat"> August 18, 2023</p>
                                <h1>ATOM: As sell pressure wanes near year low, is a recovery in sight?</h1>
                                <p>ATOM has been on a significant bearish downtrend but bulls could take advantage of nearby support and recovery by BTC to rally.</p>
                            </a>
                            <a href="/post-markets/648" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692370303/ncx-blog-1123_d2p5df.webp" alt="art_pic"/></div>
                                <p className="dat"> August 18, 2023 - 3:38 AM</p>
                                <h1>Japan core inflation eases, bolstering view BOJ will stand pat</h1>
                                <p>TOKYO (Reuters) -Japan's core consumer prices slowed in July, supporting expectations the Bank of Japan (BOJ) will be in no rush to phase out monetary easing, even as inflation remains stubbornly above the central bank's target.</p>
                            </a>
                            <a href="/post-forex/622" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692350644/ncx-blog-1095_nstpmv.webp" alt="art_pic"/></div>
                                <p className="dat">August 17, 2023 - 6:40 PM</p>
                                <h1>AUD/USD Forecast – Australian Dollar Pushes Into Support</h1>
                                <p>The Australian dollar has plunged a bit during the trading session on Thursday, to breakdown below the 0.64 level before turning around and showing signs of life. In fact, we are in the midst of a major bounce as I record this video, so it will be interesting to see how this plays out.</p>
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
                            <a href="/post-forex/625" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692351762/ncx-blog-1098_yatxui.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 17, 2023 - 6:51 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Continues to Look Upwards</h1>
                                    <p>In the USD/JPY pair, current signs lean towards a potential upward climb. This upward tilt isn’t surprising when considering the interest rate differences between the respective central banks. With the Bank of Japan showing no inclination towards tightening its monetary stance, this rate disparity remains a pivotal player in shaping market trends.</p>
                                </a>
                            <a href="/post-forex/624" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692351478/ncx-blog-1097_brtg7k.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 17, 2023 - 6:47 PM</p>
                                    <h1>GBP/USD Forecast – British Pound Rises Against USD</h1>
                                    <p>The British pound showcased modest gains in Thursday’s trading, eyeing a potential rise beyond the 50-Day Exponential Moving Average. Yet, the market’s movements remain predictably unpredictable, emphasizing the need for careful strategy formulation.</p>
                                </a>
                            <a href="/post-forex/623" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692350960/ncx-blog-1096_r6yf9f.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 17, 2023 - 6:43 PM</p>
                                    <h1>GBP/JPY Forecast – British Pound Continues to Crush Yen</h1>
                                    <p>This upward push, especially after multiple tries, highlights the growing preference among traders for a “buy on the dips” strategy. This approach anticipates momentary downturns, aligning with the currency’s likely continued ascent. As a result, many are steering clear of shorting this pair.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/618" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692348666/ncx-blog-1092_jk6k4b.webp" alt="art_pic"/></div>
                                    <p className="dat">August 18, 2023 - 5:48 AM</p>
                                    <h1>Oil set to snap 7-week winning streak on US rate outlook, China woes</h1>
                                    <p>SINGAPORE (Reuters) -Oil prices looked set to snap a seven-week winning streak on Friday as concerns about China's slowing economic growth and the possibility of more U.S. interest rate hikes outweighed signs of tightening supply.</p>
                                </a>   
                            <a href="/post-commodities/617" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692348285/ncx-blog-1091_jgjjqm.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 18, 2023 - 12:03 AM</p>
                                    <h1>This Natural Gas Stock Is The Big Winner On New S&P Index Shuffle</h1>
                                    <p>S&P Dow Jones Indices announced late Wednesday that S&P index changes coming Monday would include U.S. natural gas producer Chesapeake Energy (CHK) and defense contractor Mercury Systems (MRCY). CHK jumped on the news while MRCY also edged up Thursday.</p>
                                </a>   
                            <a href="/post-commodities/616" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692347911/ncx-blog-1090_scswhb.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 16, 2023 - 9:54 PM</p>
                                    <h1>Oil prices to hit $91 by year-end, UBS says</h1>
                                    <p>Oil is poised to rally beyond $90 per barrel by the end of the year amid record demand and tightening supply, according to UBS strategists.</p>
                                </a>                   
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/599" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692354523/ncx-blog-1102_yu8muo.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 18, 2023 - 9:00 AM</p>
                                    <h1>Dow Jones Futures: Bears Rule As More Leaders Crack, But Ultimate AI Stock Nvidia Fights On</h1>
                                    <p>Dow Jones futures were little changed early Friday, along with S&P 500 futures and Nasdaq futures.</p>
                                </a>
                            <a href="/post-indices/598" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692353792/ncx-blog-1101_sagos8.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 18, 2023 - 12:25 AM</p>
                                    <h1>Dow Jones Dives Below Critical Level; Cathie Wood Piles Into This Stock After 50% Plunge</h1>
                                    <p>The Dow Jones Industrial Average fell under a key level as Walmart (WMT) reversed lower despite an earnings beat. CVS Health (CVS) cratered after a big insurer tapped rivals including Amazon.com (AMZN) for drugs. Famed fund manager Cathie Wood snapped up shares in a pharma stock despite a big plunge.</p>
                                </a>
                            <a href="/post-indices/597" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692353435/ncx-blog-1100_qotlix.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 17, 2023 - 6:20 PM</p>
                                    <h1>Dow Jones Rises After Jobless Claims; Walmart Drops On Earnings</h1>
                                    <p>The Dow Jones Industrial Average rose Thursday, boosted by the morning's economic data that included lower-than-expected unemployment claims. Meanwhile, Walmart reversed lower despite strong earnings results.</p>
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