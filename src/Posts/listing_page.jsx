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
                            <a href="/post-markets/587" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-858.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 12, 2023 - 12:39 AM</p>
                                    <h1>Stocks close higher in wait for inflation data: Stock market news today</h1>
                                    <p>Stocks closed higher Tuesday in the countdown to inflation reports that could give the Federal Reserve cause to consider ending its interest rate hikes sooner.</p>
                                </a>
                            <a href="/post-crypto/609" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-856.jpg" alt="art_pic"/></div>
                                    <p className="dat">   July 11, 2023</p>
                                    <h1>Digital assets report: Inflows rise even as crypto market stagnates</h1>
                                    <p>Inflows from digital asset investment products totaled $136 million last week, bringing the third consecutive week of inflows to $470 million, CoinShares found in a new report.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/608" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-855.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 11, 2023</p>
                                    <h1>Cardano: Sinking development activity, price dips and more</h1>
                                    <p>Though Cardano’s development activity went down, its weekly report highlighted the efforts made by the developers in the last seven days.</p>
                                </a>
                            <a href="/post-crypto/607" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-854.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 11, 2023</p>
                                    <h1>Why SHIB could be skating on thin ice as Voyager reopens withdrawals</h1>
                                    <p>Huge amounts of funds get taken out by users as Voyager reactivates withdrawals on its network. Large amounts of cryptocurrencies still remain on the platform, with SHIB coming in fourth place after BTC, ETH, and USDC.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/586" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-857.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 12, 2023 - 12:03 AM</p>
                                    <h1>JPMorgan, Wells Fargo Near Buy Points With Q2 Earnings Fuse Lit</h1>
                                    <p>JPMorgan, Wells Fargo and Citigroup kick off bank earnings early Friday. JPM stock, WFC and C shares are near buy points.</p>
                                </a>
                            <a href="/post-markets/585" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-859.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 11, 2023 - 2:12 AM</p>
                                    <h1>Market heavyweights dip ahead of Nasdaq 100 rebalance</h1>
                                    <p>(Reuters) - Shares of Apple, Microsoft and other heavyweight companies dipped on Monday after Nasdaq Inc said it would rebalance its Nasdaq 100 index to address the benchmark's "overconcentration."</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/606" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-853.jpg" alt="art_pic"/></div>
                                <p className="dat"> July 11, 2023 - 1:56 PM</p>
                                <h1>Bitcoin steady above US$30,000, all top 10 cryptos rise on market optimism</h1>
                                <p>Bitcoin prices gained in Tuesday afternoon trade in Asia to remain above US$30,000. Ether and all other top 10 non-stablecoin cryptocurrencies strengthened in the past 24 hours on market expectations of a rally in Bitcoin</p>
                            </a>
                            <a href="/post-forex/569" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-850.jpg" alt="art_pic"/></div>
                                <p className="dat">  July 10, 2023 - 5:02 PM</p>
                                <h1>EUR/USD Forecast – Euro Quiet to Open Up the Week</h1>
                                <p>The euro has gone back and forth during the trading session on Monday, as we continue to hang around the 1.10 level, but cannot seem to break above it. All things being equal, we are in the midst of forming a bit of a bullish flag,</p>
                            </a>
                            <a href="/post-markets/584" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-861.jpg" alt="art_pic"/></div>
                                <p className="dat">  July 10, 2023 - 3:22 PM</p>
                                <h1>Citigroup downgrades US stocks amid recession risks, upgrades Europe</h1>
                                <p>(Reuters) -Citigroup on Monday downgraded U.S. stocks in anticipation of a pullback in growth stocks and a recession in the fourth quarter of the year, while betting on beaten-down counterparts in Europe with an upgrade.</p>
                            </a>
                            <a href="/post-markets/583" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-860.jpg" alt="art_pic"/></div>
                                <p className="dat"> July 10, 2023 - 9:43 AM</p>
                                <h1>What people are saying about Ant Groups $984 million fine and share buyback</h1>
                                <p>(Reuters) - China's Ant Group has announced a surprise share buyback that values the fintech giant at $78.5 billion, well below the $315 billion touted in an abandoned IPO in 2020, in a move that may let some investors exit.</p>
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
                            <a href="/post-forex/572" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-847.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 11, 2023 - 2:10 PM</p>
                                    <h1>Pound hits 15-month high as UK wages rise</h1>
                                    <p>The pound (GBPUSD=X) hit a 15-month high against the dollar on Tuesday as UK wage growth reached a record 7.3%.</p>
                                </a>
                            <a href="/post-forex/571" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-848.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 10, 2023 - 5:22 PM</p>
                                    <h1>GBP/USD Forecast – British Pound Pulled Back</h1>
                                    <p>The British pound has pulled back just a bit during the trading session on Monday, as it looks like we are trying to form a bit of a double top. The 1.2650 level is an area underneath it could offer quite a bit of support, and of course</p>
                                </a>
                            <a href="/post-forex/570" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-849.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 10, 2023 - 5:13 PM</p>
                                    <h1>GBP/JPY Forecast – British Pound Gives Up Early Gains Against Japanese Yen</h1>
                                    <p>The British pound initially tried to rally during the trading session on Monday, but then gave back gains to show signs of hesitation. Quite frankly, I think this is a market that’s simply trying to pull back in order to find value,</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/569" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-852.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 10, 2023 - 11:19 PM</p>
                                    <h1>Oil Falls as Light Summer Trading Hardens Technical Resistance</h1>
                                    <p>(Bloomberg) -- Oil dropped as light summer trading volumes exacerbated pressure from technical resistance levels.</p>
                                </a>
                            <a href="/post-commodities/568" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-851.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 10, 2023 - 5:13 PM</p>
                                    <h1>Oil dips 1% on US interest rate fears but OPEC+ cuts limit fall</h1>
                                    <p>HOUSTON (Reuters) -Oil prices eased 1% on Monday on the increasing likelihood of more U.S. interest rate hikes, but crude supply cuts from top oil exporters Saudi Arabia and Russia limited the losses.</p>
                                </a>   
                            <a href="/post-commodities/567" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-830.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 7, 2023 - 11:19 PM</p>
                                    <h1>Oil Reaches Monthly High as OPEC+ Leaders Tighten Crude Exports</h1>
                                    <p>(Bloomberg) -- Oil posted a second weekly gain as evidence mounted that the decision by OPEC+ leaders Saudi Arabia and Russia to tighten supplies was making a mark across physical markets.</p>
                                </a>                      
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/560" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-844.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 11, 2023 - 3:34 PM</p>
                                    <h1>Nasdaq 100 Plans Special Rebalance To Curb Dominance Of Magnificent Seven</h1>
                                    <p>A Nasdaq 100 special rebalance will take place July 24. Apple, Microsoft and the other "magnificent seven" stocks hold a 55% weight now.</p>
                                </a>  
                            <a href="/post-indices/559" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-846.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 11, 2023 - 11:34 AM</p>
                                    <h1>LIVE: FTSE higher as UK wage growth piles pressure on Bank of England</h1>
                                    <p>European stocks and the FTSE 100 opened in the green on Tuesday as the latest UK wage growth figures delivered a blow to the Bank of England’s bid to bring down inflation.</p>
                                </a>
                            <a href="/post-indices/558" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-845.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 11, 2023 - 12:21 AM</p>
                                    <h1>Dow Jones Today: Index Gains Despite Tech Drop</h1>
                                    <p>Members of the Federal Reserve indicated in public statements that inflation continued to be a problem that could require further interest rate hikes, and the Federal Reserve’s Vice Chair, Michael Barr, said that banks could</p>
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