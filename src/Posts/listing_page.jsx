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
                                <a href="/post-crypto/528" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-545.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 22, 2023 - 6:39 PM</p>
                                    <h1>Bitcoin, Ether fall; Tron trades higher; Investors digest G7, U.S. debt ceiling implications</h1>
                                    <p>Bitcoin fell below US$27,000 on Sunday, dipping further Monday morning in Asia as wider macro developments continue to weigh.</p>
                                </a>
                                <a href="/post-indices/514" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-549.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 22, 2023 - 4:16 PM</p>
                                    <h1>Dow Jones Futures Rise: Biden-McCarthy Debt-Ceiling Talks Loom; China Move Hits Micron</h1>
                                    <p>Dow Jones futures tilted higher Monday morning, along with S&P 500 futures and Nasdaq futures.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/529" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-546.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 22, 2023</p>
                                    <h1>Solana’s ‘secret’ behind overtaking Tron despite low users is…</h1>
                                    <p>The Solana network continued to see improvements and outperformed Tron in various areas. What was driving SOL’s growth?</p>
                                </a>
                            <a href="/post-crypto/527" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-542.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 19, 2023 - 7:32 AM</p>
                                    <h1>XRP gains; Lift-off for Space Pepe NFTs; US investor sentiment up on positive debt talks</h1>
                                    <p>Bitcoin and Ether prices fell on Friday morning in Asia. After a bullish run, Litecoin joined most other top 10 non-stablecoin cryptocurrencies in recording losses. XRP was the sole winner.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/518" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-552.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 22, 2023 - 5:46 PM</p>
                                    <h1>Top 5 China Stocks To Buy And Watch: EV Leaders Show Spark</h1>
                                    <p>China is the world's No. 2 economy and home to dozens of companies that trade in the U.S. Right now, Trip.com (TCOM), Tesla (TSLA) rival BYD (BYDDF), Li Auto (LI) Vipshop (VIPS) and NetEase (NTES) are China stocks worth watching or potentially buying.</p>
                                </a>
                                <a href="/post-markets/517" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-551.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 22, 2023 - 4:41 PM</p>
                                    <h1>Morgan Stanley Says US Rally Isn’t Start of Bull Market</h1>
                                    <p>(Bloomberg) -- Major US stock-market strategists are starting a bull-bear debate, with pessimist Michael Wilson of Morgan Stanley warning that the latest rally is a head fake, while Bank of America’s Savita Subramanian raises her 2023 target for the S&P 500 Index.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-markets/516" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-544.jpg" alt="art_pic"/></div>
                                <p className="dat">May 19, 2023 - 3:46 PM</p>
                                <h1>Dow Jones Futures: S&P 500 Hits 2023 High As Nvidia, Netflix, Palantir Soar, But Dont Do This</h1>
                                <p>Dow Jones futures rose slightly early Friday, along with S&P 500 futures and Nasdaq futures.</p>
                            </a>
                            <a href="/post-indices/512" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-538.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 19, 2023 - 12:00 PM</p>
                                <h1>FTSE 100 rises amid strong consumer confidence</h1>
                                <p>The FTSE 100 and European stocks opened higher, extending rallies on Wall Street fuelled by optimism over talks to avert a catastrophic US debt default.</p>
                            </a>
                            <a href="/post-forex/518" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-537.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 18, 2023 - 4:59 PM</p>
                                <h1>USD/JPY Forecast – US Dollar Threatening to Break Out Against Yen</h1>
                                <p>The US dollar initially pulled back just a bit during the trading session on Thursday but then turned around to show signs of life again.</p>
                            </a>
                            <a href="/post-crypto/526" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-540.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 18, 2023 - 1:36 PM</p>
                                <h1>Matic leads crypto rise despite Ledger security concerns</h1>
                                <p>Bitcoin and Ether rose during afternoon trading in Asia, along with most of the top 10 non-stablecoin cryptocurrencies by market capitalization. Polygon’s Matic token led the gains.</p>
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
                            <a href="/post-forex/520" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-548.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 19, 2023 - 6:07 PM</p>
                                    <h1>USD/JPY Weekly Forecast – US Dollar Breaks Above Resistance</h1>
                                    <p>During the week, the US dollar rallied again, breaking out from a major resistance level at the ¥138 level</p>
                                </a>
                            <a href="/post-forex/519" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-547.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 19, 2023 - 5:51 PM</p>
                                    <h1>EUR/USD Weekly Forecast – Euro Has Had a Tough Week in Volatile Trading</h1>
                                    <p>The euro has gone back and forth during the trading week as we are trying to figure out what’s going on with markets in general.</p>
                                </a>
                            <a href="/post-forex/518" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-537.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 18, 2023 - 4:59 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Threatening to Break Out Against Yen</h1>
                                    <p>The US dollar initially pulled back just a bit during the trading session on Thursday but then turned around to show signs of life again.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/510" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-530.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 17, 2023 - 4:37 AM</p>
                                    <h1>Oil steady as demand worries face tight supply outlook</h1>
                                    <p>LONDON (Reuters) -Oil prices were steady on Wednesday after a surprise rise in U.S. crude inventories stoked demand concerns as economic worries competed with a tighter supply outlook for later in the year.</p>
                                </a>
                            <a href="/post-commodities/509" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-517.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 12, 2023 - 7:47 PM</p>
                                    <h1>Oil market will flip to being undersupplied in coming months, says strategist</h1>
                                    <p>The imbalance between oil supply and demand is likely to reverse going into the summer, says one analyst.</p>
                                </a>
                            <a href="/post-commodities/508" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-518.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 12, 2023 - 7:11 PM</p>
                                    <h1>Europes new energy problem: it now has too much gas</h1>
                                    <p>Europe has come a long way from the frenzied stockpiling driving up natural gas prices a year ago. As of May 9, Europe’s gas storage was full to 62%, and at the current pace of refilling, storage is expected to hit its capacity of about 1,138 terawatt-hours (TWh) by late August, according to estimates by Morgan Stanley. And it is driving down gas prices.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/513" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-550.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 22, 2023 - 11:47 AM</p>
                                    <h1>Wall Street and FTSE 100 mixed as traders monitor US debt talks</h1>
                                    <p>Wall Street, European stocks and the FTSE 100 were mixed on Monday as investors continue to worry about the US defaulting on its debt amid ongoing talks.</p>
                                </a> 
                            <a href="/post-indices/511" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-539.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 19, 2023 - 12:15 AM</p>
                                    <h1>Nasdaq Hits Highs As McCarthy Eyes House Vote; Tech Stocks Lead As Fed Officials See Rate Hike To 5.5%</h1>
                                    <p>The Dow Jones Industrial Average pared early losses, rising 0.3% at closing bell. The index built support at the 50-day moving average, but health leaders in the Dow lagged.</p>
                                </a>
                            <a href="/post-indices/510" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-533.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 17, 2023 - 1:29 PM</p>
                                    <h1>Tokyos Nikkei 225 Hits 33-Year High</h1>
                                    <p>Global stocks traded mixed Wednesday as investors mulled U.S. debt ceiling negotiations and wider economic growth worries.</p>
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