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
                                <a href="/post-markets/522" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-568.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 28, 2023 - 7:16 AM</p>
                                    <h1>Investors react to tentative US debt ceiling deal</h1>
                                    <p>NEW YORK (Reuters) - U.S. President Joe Biden and top congressional Republican Kevin McCarthy have reached a tentative deal to raise the federal government's $31.4 trillion</p>
                                </a>
                                <a href="/post-commodities/513" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-567.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 27, 2023 - 6:00 PM</p>
                                    <h1>Saudi Arabia, Russia Ties Under Strain Over Oil-Production Cuts</h1>
                                    <p>Tensions are rising between Saudi Arabia and Russia as Moscow keeps pumping huge volumes of cheaper crude into the market</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/536" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-570.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 27, 2023 - 10:51 PM</p>
                                    <h1>This Week in Coins: Bitcoin and Ethereum See Fourth Flat Week as TRON and Tether Surge</h1>
                                    <p>It was the fourth consecutive week of flat prices. A generally slow news cycle meant that market leaders Bitcoin and Ethereum remained where they were last weekend.</p>
                                </a>
                            <a href="/post-crypto/535" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-569.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 27, 2023 - 8:40 PM</p>
                                    <h1>Bitcoin and Ethereum: Two titans battle for NFT supremacy</h1>
                                    <p>This past weekend, two major cryptocurrency/non-fungible tokens events happened, Veecon Indianapolis 2023 and the BTC Miami/Ordinals Conference 2023.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/520" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-565.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 26, 2023 - 1:39 PM</p>
                                    <h1>Stocks Slip Lower, Inflation In Focus, Costco Earnings, Fed Bank Lending, Debt Ceiling Deal - 5 Things To Know</h1>
                                    <p>Stock futures edge lower as traders eye debt deal reports; Fed inflation gauge in focus as rate hike bets quicken; Costco lower after Q3 earnings miss on muted big ticket spending</p>
                                </a>
                                <a href="/post-markets/519" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-566.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 26, 2023 - 11:29 AM</p>
                                    <h1>Stock market today: Tech leads more gains in early trading on Wall Street</h1>
                                    <p>NEW YORK (AP) — Stocks rose in morning trading on Wall Street Friday, led by more gains in technology stocks as another chipmaker reported strong demand related to artificial intelligence.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/533" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-557.jpg" alt="art_pic"/></div>
                                <p className="dat">May 26, 2023</p>
                                <h1>BNB drops below this key support level as Binance halts…</h1>
                                <p>Binance, on 25 May, decided to suspend transactions for some assets. This impact BNB’s price action which wasn’t doing well either given the sell pressure in the last two days.</p>
                            </a>
                            <a href="/post-markets/521" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-564.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 26, 2023 - 4:00 PM</p>
                                <h1>Nvidia Just Left Warren Buffett In The Dust Again</h1>
                                <p>Nvidia's insane stock rally Thursday put $184 billion into investors' pockets in one day. More notably: It pushed Nvidia stature in the S&P 500 past Warren Buffett's Berkshire Hathaway — again.</p>
                            </a>
                            <a href="/post-forex/521" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-559.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 25, 2023 - 4:06 PM</p>
                                <h1>EUR/USD Forecast – Euro Continues to Fall</h1>
                                <p>The euro has fallen again during the trading session on Thursday, as it looks like we’re going to head down to the 200-Day EMA.</p>
                            </a>
                            <a href="/post-indices/514" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-549.jpg" alt="art_pic"/></div>
                                <p className="dat"> May 22, 2023 - 4:16 PM</p>
                                <h1>Dow Jones Futures Rise: Biden-McCarthy Debt-Ceiling Talks Loom; China Move Hits Micron</h1>
                                <p>Dow Jones futures tilted higher Monday morning, along with S&P 500 futures and Nasdaq futures. President Joe Biden and House Speaker Kevin McCarthy will meet today for face-to-face debt-ceiling talks.</p>
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
                            <a href="/post-forex/523" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-561.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 25, 2023 - 4:18 PM</p>
                                    <h1>GBP to USD Forecast – British Pound Tests Support Level</h1>
                                    <p>The British pound has gone back and forth during the trading session on Thursday as we continue to dance around the 1.2350 level.</p>
                                </a>
                            <a href="/post-forex/522" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-560.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 25, 2023 - 4:13 PM</p>
                                    <h1>GBP/JPY Forecast – British Pound Continues to Find Buyers on Dips Against Yen</h1>
                                    <p>The British pound has fallen initially against the Japanese yen during the trading session on Thursday, and it looks as if we are going to continue to see pressure to the upside </p>
                                </a>
                            <a href="/post-forex/521" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-559.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 25, 2023 - 4:06 PM</p>
                                    <h1>EUR/USD Forecast – Euro Continues to Fall</h1>
                                    <p>The euro has fallen again during the trading session on Thursday, as it looks like we’re going to head down to the 200-Day EMA.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                                <a href="/post-commodities/512" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-563.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 26, 2023 - 4:45 AM</p>
                                    <h1>Oil ticks up amid OPEC+ supply cut uncertainty</h1>
                                    <p>LONDON (Reuters) -Oil prices ticked up on Friday, as the market weighed conflicting messages on supply from Russia and Saudi Arabia ahead of the next OPEC+ policy meeting.</p>
                                </a>
                            <a href="/post-commodities/511" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-553.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 23, 2023 - 5:38 PM</p>
                                    <h1>Oil rises as US gasoline supplies tighten, Saudi says: watch out</h1>
                                    <p>BENGALURU (Reuters) -Oil prices rose on Tuesday on forecasts for a tighter gasoline market and a warning from the Saudi energy minister to speculators that raised the prospect of further OPEC+ output cuts.</p>
                                </a>
                            <a href="/post-commodities/510" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-530.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 17, 2023 - 4:37 AM</p>
                                    <h1>Oil steady as demand worries face tight supply outlook</h1>
                                    <p>LONDON (Reuters) -Oil prices were steady on Wednesday after a surprise rise in U.S. crude inventories stoked demand concerns as economic worries competed with a tighter supply outlook for later in the year.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                                <a href="/post-indices/515" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-562.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 26, 2023 - 6:10 PM</p>
                                    <h1>Dow Jones Rallies 275 Points After Hot Inflation Data; Ulta Beauty Dives On Sales Miss</h1>
                                    <p>The Dow Jones Industrial Average rallied 275 points Friday after hot inflation data, with the release of critical consumer pricing data.</p>
                                </a>
                            <a href="/post-indices/514" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-549.jpg" alt="art_pic"/></div>
                                    <p className="dat"> May 22, 2023 - 4:16 PM</p>
                                    <h1>Dow Jones Futures Rise: Biden-McCarthy Debt-Ceiling Talks Loom; China Move Hits Micron</h1>
                                    <p>Dow Jones futures tilted higher Monday morning, along with S&P 500 futures and Nasdaq futures. President Joe Biden and House Speaker Kevin McCarthy will meet today for face-to-face debt-ceiling talks. China sanctions vs. Micron Technology (MU) weighed on chip stocks.</p>
                                </a> 
                            <a href="/post-indices/513" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-550.jpg" alt="art_pic"/></div>
                                    <p className="dat">May 22, 2023 - 11:47 AM</p>
                                    <h1>Wall Street and FTSE 100 mixed as traders monitor US debt talks</h1>
                                    <p>Wall Street, European stocks and the FTSE 100 were mixed on Monday as investors continue to worry about the US defaulting on its debt amid ongoing talks.</p>
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