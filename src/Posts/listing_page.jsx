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
                            <a href="/post-markets/627" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691328164/ncx-blog-1034_to9yxm.webp"/></div>
                                    <p className="dat">August 6, 2023 - 1:30 PM</p>
                                    <h1>Investors Bet That High Rates Will Linger</h1>
                                    <p>The yield on the benchmark 10-year U.S. Treasury note has surged close to its highest level in more than a decade, lifted by new bets that a strong economy could support years of higher interest rates.</p>
                                </a>
                            <a href="/post-commodities/604" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691324447/ncx-blog-1028_kozogn.webp" alt="art_pic"/></div>
                                    <p className="dat">    August 6, 2023 - 12:00 AM</p>
                                    <h1>World Gold Council on What Drives the Shiny Metal’s Price</h1>
                                    <p>(Bloomberg) -- During periods of turmoil, gold tends to make headlines as fans of the precious metal argue it can act as a safe haven. But is it also an inflation hedge? Is it considered a risk asset?</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/639" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691319331/ncx-blog-1015_flwptp.jpg" alt="art_pic"/></div>
                                    <p className="dat">   August 6, 2023</p>
                                    <h1>Cardano: Why did users decline in Q2?</h1>
                                    <p>Network activity on Cardano trickled downwards in Q2, while transactions count and protocol revenue surged.</p>
                                </a>
                            <a href="/post-crypto/638" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691318624/ncx-blog-1014_bit7uz.png" alt="art_pic"/></div>
                                    <p className="dat">   August 5, 2023</p>
                                    <h1>Ethereum’s ‘quiet time’ should not be taken for weakness: Analysts</h1>
                                    <p>These on-chain analysts opined that an opportunity lies in the ETH market from a technical perspective.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/626" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691327761/ncx-blog-1033_tvuser.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 6, 2023 - 4:39 AM</p>
                                    <h1>What Meta, Amazon, Google, Apple and AMD Are Saying About AI</h1>
                                    <p>Artificial intelligence is unquestionably the next big battleground for big tech. So much hype has surrounded AI that top execs at Amazon, Meta, Apple, and AMD all reported major pushes into AI capabilities and applications in their latest quarterly earnings calls.</p>
                                </a>
                            <a href="/post-markets/625" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691326805/ncx-blog-1031_icdjct.webp" alt="art_pic"/></div>
                                    <p className="dat">   August 6, 2023 - 12:30 AM</p>
                                    <h1>More firms on Wall Street are bracing for a stock sell-off. Here why JPMorgan, Wells Fargo, and others say the market huge gains are at risk.</h1>
                                    <p>Stocks so far have blown past investors' expectations for 2023 – but some analysts are bracing for a sell-off as the market approaches new highs.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br"> 
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/637" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691318143/ncx-blog-1013_k2ncqj.png" alt="art_pic"/></div>
                                <p className="dat">  August 5, 2023</p>
                                <h1>Shiba Inu decouples from the market; Is this catalyst why?</h1>
                                <p>Shiba Inu and Bone ShibaSwap have registered massive growth in terms of price over the last seven days as the Shibarium launch draws closer.</p>
                            </a>
                            <a href="/post-markets/624" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691326132/ncx-blog-1030_zd6tua.webp"/></div>
                                <p className="dat"> August 5, 2023 - 4:00 PM</p>
                                <h1>Earnings Beat of the Week: Toyota Nearly Doubled Its Operating Profit</h1>
                                <p>Toyota Motor Co. (TM), the world's top-selling automaker, nearly doubled its operating profit from a year earlier as better pricing, productivity gains, and supply-chain improvements boosted sales.</p>
                            </a>
                            <a href="/post-markets/623" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691327058/ncx-blog-1032_lztp8z.webp" alt="art_pic"/></div>
                                <p className="dat">August 5, 2023 - 3:39 AM</p>
                                <h1>Exclusive-UBS nears major investment bank restructuring -sources</h1>
                                <p>NEW YORK (Reuters) - UBS Group AG is poised to make sweeping changes to the senior ranks of its investment banking division globally as soon as Monday, marking a new milestone in the process of integrating Credit Suisse,</p>
                            </a>
                            <a href="/post-markets/622" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691325430/ncx-blog-1029_kseunn.webp" alt="art_pic"/></div>
                                <p className="dat">August 5, 2023 - 3:39 AM</p>
                                <h1>Stock Market Week: Disney In A Funk; Earnings Due From Honda Motor, Foreign Airlines</h1>
                                <p>It was a rough and busy week for the stock market. The Stock Trader's Almanac notes that the first nine trading days of August are historically weak, and the big benchmarks were due for a modest pullback. Breadth of leadership</p>
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
                            <a href="/post-forex/609" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691320056/ncx-blog-1019_fiqvm9.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 4, 2023 - 9:27 PM</p>
                                    <h1>USD/JPY Weekly Price Forecast – US Dollar Continues to See Noisy Behavior</h1>
                                    <p>The US dollar continues to show a lot of volatility, and the jobs report coming out on Friday weaker than expected will continue to cause more noise. That being said, the interest rate differential between the two could continue</p>
                                </a>
                            <a href="/post-forex/608" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691319909/ncx-blog-1018_bhjjvn.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 4, 2023 - 9:21 PM</p>
                                    <h1>GBP/USD Weekly Forecast – British Pound Bounces Hard</h1>
                                    <p>The British pound has fallen significantly during the course of the week to reach the 1.2650 level. The 1.2650 level underneath is a large, round, psychologically significant midcentury number, where the market has previously</p>
                                </a>
                            <a href="/post-forex/607" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691319750/ncx-blog-1017_ck0c0k.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 4, 2023 - 9:10 PM</p>
                                    <h1>AUD/USD Weekly Forecast – Australian Dollar Shows a Lot of Volatility for the Week</h1>
                                    <p>The Australian dollar initially shot higher during the course of the week, but found enough resistance near the 0.6750 level, before breaking down rather drastically. After all, the RBA chose not to raise interest rates this past</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/604" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691324447/ncx-blog-1028_kozogn.webp" alt="art_pic"/></div>
                                    <p className="dat">August 6, 2023 - 12:00 AM</p>
                                    <h1>World Gold Council on What Drives the Shiny Metal’s Price</h1>
                                    <p>(Bloomberg) -- During periods of turmoil, gold tends to make headlines as fans of the precious metal argue it can act as a safe haven. But is it also an inflation hedge? Is it considered a risk asset?</p>
                                </a>   
                            <a href="/post-commodities/603" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691323837/ncx-blog-1027_kmeopq.webp" alt="art_pic"/></div>
                                    <p className="dat">August 5, 2023 - 3:42 AM</p>
                                    <h1>Russian oil and grain exports halted after Ukraine drone strike near Black Sea port</h1>
                                    <p>A Ukrainian drone strike damaged a Russian ship near the port of Novorossiysk, forcing the key export hub for Moscow's oil and grain to temporarily halt traffic.</p>
                                </a>   
                            <a href="/post-commodities/602" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691323545/ncx-blog-1026_tfg6sd.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 5, 2023 - 12:41 AM</p>
                                    <h1>Oil prices rise after Saudi Arabia, Russia extend supply cuts</h1>
                                    <p>Saudi Arabia has extended its one million barrel-per-day production cuts into September, while Russia announce it will cut oil exports, sending oil prices higher. Lipow Oil Associates President Andrew Lipow tells Yahoo Finance</p>
                                </a>                   
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/589" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691322388/ncx-blog-1023_rxkszh.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 5, 2023 - 9:59 PM</p>
                                    <h1>Dow Jones Futures: What To Do After Market Skids; 5 Stocks Near Buy Points</h1>
                                    <p>Dow Jones futures will open Sunday evening, along with S&P 500 futures and Nasdaq futures.</p>
                                </a>
                            <a href="/post-indices/588" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691321756/ncx-blog-1022_r8gztk.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 5, 2023 - 10:28 AM</p>
                                    <h1>Greece Returns to Investment-Grade Elite With Scope Rating Upgrade</h1>
                                    <p>(Bloomberg) -- Greece’s investment-grade status was restored by Scope Ratings, evidence of its progress in repairing public finances 13 years after it became the first euro-zone member to be cut to junk.</p>
                                </a>
                            <a href="/post-indices/587" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1691321459/ncx-blog-1021_lrplop.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 5, 2023 - 12:05 AM</p>
                                    <h1>Dow Jones Reverses Lower On Reports Of Cyberattack; Amazon Soars, Apple Plunges</h1>
                                    <p>The Dow Jones Industrial Average reversed lower for a loss of 0.4% Friday on reports that a cyberattack hit hospital computer systems across several states. Top gainers in the Dow Jones included Amgen (AMGN), which</p>
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