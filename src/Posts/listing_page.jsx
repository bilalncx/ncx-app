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
                            <a href="/post-commodities/637" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693290601/ncx-blog-1235_p4y1g8.webp"/></div>
                                    <p className="dat">August 28, 2023 - 11:17 PM</p>
                                    <h1>Oil Nudged Higher by Equities as Thin Trading Amplifies Swings</h1>
                                    <p>(Bloomberg) -- Oil edged up alongside equities as thin summer trading left the commodity to follow broader markets.</p>
                                </a>
                            <a href="/post-commodities/636" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693294135/ncx-blog-1239.jpg_y5sdzp.png" alt="art_pic"/></div>
                                    <p className="dat">August 28, 2023 - 6:06 PM</p>
                                    <h1>Iran inaugurates last phase of mega-gas field</h1>
                                    <p>Iranian President Ebrahim Raisi inaugurated on Monday the last phase of the South Pars gas field, one of the world's largest natural gas condensate field and the country's biggest.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/699" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693289139/ncx-blog-1234_qtlcvm.png" alt="art_pic"/></div>
                                    <p className="dat">  August 28, 2023</p>
                                    <h1>ApeCoin’s tale of accumulation and selling sparks market speculation</h1>
                                    <p>Amidst ApeCoin’s dance between accumulation and selling, a dedicated supporter’s bold move meets a fading surge in activity. Sentiment ripples, leaving traders speculating on its dynamic fate.</p>
                                </a>
                            <a href="/post-crypto/698" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693288297/ncx-blog-1233_ytdlr6.jpg" alt="art_pic"/></div>
                                <p className="dat"> August 28, 2023</p>
                                <h1>How Litecoin emerged as the popular crypto for payments</h1>
                                <p>Litecoin’s share of the global payments jumped from 23% in March to a little over 34% by the end of July.</p>
                            </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/679" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693298404/ncx-blog-1246_znnueq.webp" alt="art_pic"/></div>
                                    <p className="dat">August 28, 2023 - 6:21 PM</p>
                                    <h1>StanChart to Sell Jet Lessor to Saudi PIF Unit for $3.6 Billion</h1>
                                    <p>(Bloomberg) -- Standard Chartered Plc agreed to sell its aviation finance business to a unit of Saudi Arabia’s sovereign wealth fund for $3.6 billion and inked a separate deal to offload a portfolio of loans as part of efforts to boost returns.</p>
                                </a>
                            <a href="/post-markets/678" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693298177/ncx-blog-1245_wkp76w.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 28, 2023 - 1:18 PM</p>
                                    <h1>China’s 5.5% Stock Rally Fizzles in Blow to Market Rescue Effort</h1>
                                    <p>(Bloomberg) -- Chinese stocks pared most of their early gains on Monday, showing once again that Beijing’s efforts to boost markets are falling flat in the face of economic worries.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br"> 
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-commodities/633" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693291021/ncx-blog-1236_rad1cf.webp" alt="art_pic"/></div>
                                <p className="dat"> August 28, 2023 - 10:00 AM</p>
                                <h1>China’s Zijin Mulls $3.8 Billion Expansion of Serbia Copper Mine</h1>
                                <p>(Bloomberg) -- China’s Zijin Mining Group Co. is developing plans to expand its copper mine in eastern Serbia due to demand for the metal considered vital to the global energy transition — an effort that could cost billions of dollars.</p>
                            </a>
                            <a href="/post-markets/677" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693297625/ncx-blog-1244_wltuhr.webp"/></div>
                                <p className="dat">August 28, 2023 - 8:46 AM</p>
                                <h1>SoftBank Plans AI Tour for Founders to Boost Technology Adoption</h1>
                                <p>(Bloomberg) -- SoftBank Group Corp. will take a group of its Indian startup founders to Silicon Valley next month for an artificial intelligence tour as the Japanese investor steps up efforts to infuse its portfolio companies with the technology.</p>
                            </a>
                            <a href="/post-markets/676" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693297400/ncx-blog-1243_i4zwth.webp" alt="art_pic"/></div>
                                <p className="dat"> August 28, 2023 - 5:36 AM</p>
                                <h1>Evergrande loses $2 billion in value as trade resumes; extends creditor voting</h1>
                                <p>HONG KONG (Reuters) - China Evergrande Group lost $2.2 billion, or 79% of its market value, on Monday after its shares resumed trading in a crucial step for the world's most indebted property firm to restructure its offshore debt.</p>
                            </a>
                            <a href="/post-crypto/695" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693234282/ncx-blog-1230_wty1dd.png" alt="art_pic"/></div>
                                <p className="dat"> August 27, 2023</p>
                                <h1>XLM maintains its downtrend: Will prices dip further?</h1>
                                <p>XLM retested previous range-high of $0.13 as a resistance and could head lower towards the range-low and bullish OB.</p>
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
                            <a href="/post-forex/652" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693045625/ncx-blog-1202_o7xk8c.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 26, 2023 - 12:28 AM</p>
                                    <h1>Powell Pushes Dollar to Longest Weekly Win Streak in 15 Months</h1>
                                    <p>(Bloomberg) -- The greenback climbed while US Treasuries slipped after Federal Reserve Chair Jerome Powell said policymakers are prepared to raise interest rates further if needed in the fight to reign in inflation.</p>
                                </a>
                            <a href="/post-forex/651" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693045397/ncx-blog-1201_qflsdl.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 25, 2023 - 6:08 PM</p>
                                    <h1>GBP/JPY Weekly Forecast – British Pounds Shows Hesitation</h1>
                                    <p>The British pound has initially tried to rally during the course of the week we gave back gains to show a little bit of hesitation against the Japanese yen. That being said, this is a market that is still very well supported by interest rate differentials, and I look at this through the prism of buying on the dip.</p>
                                </a>
                            <a href="/post-forex/650" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693045246/ncx-blog-1200_tkmjnu.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 25, 2023 - 6:04 PM</p>
                                    <h1>AUD/USD Weekly Forecast – Australian Dollar Continues to Test Support</h1>
                                    <p>The Australian dollar has gone back and forth during the course of the week, as we continue to see a lot of noisy trading. It looks as if the 0.65 level in the 0.64 level both offer a barrier that the market will have to deal with.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/636" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693294135/ncx-blog-1239.jpg_y5sdzp.png" alt="art_pic"/></div>
                                    <p className="dat"> August 28, 2023 - 6:06 PM</p>
                                    <h1>Iran inaugurates last phase of mega-gas field</h1>
                                    <p>Iranian President Ebrahim Raisi inaugurated on Monday the last phase of the South Pars gas field, one of the world's largest natural gas condensate field and the country's biggest.</p>
                                </a>   
                            <a href="/post-commodities/635" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693292799/ncx-blog-1238_dyxr5n.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 28, 2023 - 5:01 PM</p>
                                    <h1>Global clean energy shift won hit Reliance oil business- Ambani</h1>
                                    <p>NEW DELHI (Reuters) - Reliance Industries Ltd will continue to operate its refineries and petrochemical projects profitably, even as fossil fuel demand wanes due to a gradual global shift to clean energy, Chairman Mukesh Ambani said on Friday.</p>
                                </a>   
                            <a href="/post-commodities/634" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693291670/ncx-blog-1237_xg9qkz.webp" alt="art_pic"/></div>
                                    <p className="dat">August 28, 2023 - 4:26 PM</p>
                                    <h1>Asia Up, Europe Up, Commodities Up - Global Markets Today While US Was Sleeping</h1>
                                    <p>On Friday, August 25, the U.S. markets closed higher after Federal Reserve Chair Jerome Powell's Jackson Hole Symposium speech, where he indicated a willingness to raise interest rates when necessary.</p>
                                </a>                   
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/612" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693295185/ncx-blog-1241_oweeaa.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 28, 2023 - 6:20 PM</p>
                                    <h1>Dow Jones Rallies 300 Points With Jobs, Inflation Data On Deck; Tesla Rival Xpeng Surges On Didi Deal</h1>
                                    <p>The Dow Jones Industrial Average rallied as much as 300 points Monday, as China-based Tesla rival Xpeng Motors (XPEV) soared on news it plans to buy the smart vehicle unit of ride-hailing app Didi Global.</p>
                                </a>
                            <a href="/post-indices/611" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693294790/ncx-blog-1240_q6t2ol.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 28, 2023 - 3:39 PM</p>
                                    <h1>Traders Have S&P 500 Comebacks Fading at Historic Pace</h1>
                                    <p>(Bloomberg) -- Surprised that the S&P 500 swung into the green Friday? Don’t worry. Just wait. It’ll fall again after the next opening bell.</p>
                                </a>  
                            <a href="/post-indices/610" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693048879/ncx-blog-1205_kx9jvb.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 25, 2023 - 7:57 PM</p>
                                    <h1>Dow Jones Off Session Lows As Powell Talks Tough; AI Stocks Nvidia, Marvell Technology Hit Hard</h1>
                                    <p>The Dow Jones Industrial Average was volatile Friday as Wall Street weighed comments by Federal Reserve Chair Jerome Powell at the Jackson Hole Economic Symposium. Gainers in the stock market today included Netflix (NFLX), which got a nice price target hike from Loop Capital.</p>
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