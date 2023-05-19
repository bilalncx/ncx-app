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
                                <a href="/post-markets/516" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-544.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 19, 2023 - 3:46 PM</p>
                                    <h1>Dow Jones Futures: S&P 500 Hits 2023 High As Nvidia, Netflix, Palantir Soar, But Dont Do This</h1>
                                    <p>Dow Jones futures rose slightly early Friday, along with S&P 500 futures and Nasdaq futures.</p>
                                </a>
                                <a href="/post-indices/512" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-538.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 19, 2023 - 12:00 PM</p>
                                    <h1>FTSE 100 rises amid strong consumer confidence</h1>
                                    <p>The FTSE 100 and European stocks opened higher, extending rallies on Wall Street fuelled by optimism over talks to avert a catastrophic US debt default.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/527" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-542.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 19, 2023 - 7:32 AM</p>
                                    <h1>XRP gains; Lift-off for Space Pepe NFTs; US investor sentiment up on positive debt talks</h1>
                                    <p>Bitcoin and Ether prices fell on Friday morning in Asia. After a bullish run, Litecoin joined most other top 10 non-stablecoin cryptocurrencies in recording losses. XRP was the sole winner.</p>
                                </a>
                            <a href="/post-crypto/526" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-540.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 18, 2023 - 1:36 PM</p>
                                    <h1>Matic leads crypto rise despite Ledger security concerns</h1>
                                    <p>Bitcoin and Ether rose during afternoon trading in Asia, along with most of the top 10 non-stablecoin cryptocurrencies by market capitalization. Polygon’s Matic token led the gains.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/515" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-543.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 19, 2023 - 1:57 AM</p>
                                    <h1>Nvidia, AMD, Micron lead chip sector higher with AI, Japan in focus</h1>
                                    <p>(Reuters) - Shares in Nvdia Corp, Advanced Micro Devices and Micron Technology on Thursday provided the biggest boosts to the chip sector, which outperformed the broader market as investors looked for ways to invest in artificial intelligence and in Japan.</p>
                                </a>
                                <a href="/post-markets/514" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-531.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 17, 2023 - 3:00 AM</p>
                                    <h1>Wall Streets Biggest Banks Face a Harsh Reality Check in China</h1>
                                    <p>(Bloomberg) -- More than three years after China’s grand financial opening, it’s becoming clear to Wall Street giants that their dreams of windfall profits from the $60 trillion market are more elusive than ever.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/525" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-528.jpg" alt="art_pic"/></div>
                                <p className="dat">May 17, 2023 - 5:25 AM</p>
                                <h1>XRP gains as SEC motion denied; NFT index down; US investors anticipate debt ceiling deal</h1>
                                <p>Bitcoin prices fell on Wednesday morning in Asia but remained above the US$27,000 line. Ether gained but still posted a weekly drop.</p>
                            </a>
                            <a href="/post-markets/514" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-531.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 17, 2023 - 3:00 AM</p>
                                <h1>Wall Streets Biggest Banks Face a Harsh Reality Check in China</h1>
                                <p>(Bloomberg) -- More than three years after China’s grand financial opening, it’s becoming clear to Wall Street giants that their dreams of windfall profits from the $60 trillion market are more elusive than ever.</p>
                            </a>
                            <a href="/post-indices/509" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-532.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 17, 2023 - 12:37 AM</p>
                                <h1>Dow Jones Losses Worsen As McCarthy Jabs Biden Over Debt Ceiling; Warren Buffett Buys This Bank Stock</h1>
                                <p>Losses grew in late trading for the Dow Jones Industrial Average as component Home Depot (HD) disappointed investors with its latest report.</p>
                            </a>
                            <a href="/post-forex/515" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-536.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 16, 2023 - 5:01 PM</p>
                                <h1>EUR/USD Forecast – Euro Testing 50 Day EMA</h1>
                                <p>The euro initially tried to rally during the session on Tuesday but gave back gains as we continue to see a lot of noisy behavior around the 50-Day EMA.</p>
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
                            <a href="/post-forex/518" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-537.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 18, 2023 - 4:59 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Threatening to Break Out Against Yen</h1>
                                    <p>The US dollar initially pulled back just a bit during the trading session on Thursday but then turned around to show signs of life again.</p>
                                </a>
                            <a href="/post-forex/517" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-534.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 16, 2023 - 5:19 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Continues to Stabilize After Move Higher</h1>
                                    <p>The US dollar has pulled back just a bit against the Japanese yen during the session Tuesday, as we continue to see the uptrend play out, and traders come in to try to stabilize the move higher.</p>
                                </a>
                            <a href="/post-forex/516" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-535.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 16, 2023 - 5:12 PM</p>
                                    <h1>GBP to USD Forecast – Pound Continues to Reach for the Upside</h1>
                                    <p>The British pound has gone back and forth during the trading session on Tuesday, as the 50-Day EMA underneath continues to offer a little bit of support, but at the end of the day, there’s probably even more support at the 1.2350 level.</p>
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
                            <a href="/post-indices/508" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-526.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 13, 2023 - 1:06 PM</p>
                                    <h1>Nasdaq Bear Market: 5 Exceptional Growth Stocks Youll Regret Not Buying on the Dip</h1>
                                    <p>A sizable dip in the innovation-driven Nasdaq Composite is the perfect excuse for investors to pounce on some phenomenal deals.</p>
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