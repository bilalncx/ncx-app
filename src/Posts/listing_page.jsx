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
                            <a href="/post-markets/590" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-865.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 14, 2023 - 9:34 AM</p>
                                    <h1>Stocks Set for Best Week Since November; Yen Gains: Markets Wrap</h1>
                                    <p>(Bloomberg) -- Global stocks headed for their best weekly gains since November on bets that the US monetary tightening cycle is nearing an end. The yen rallied for a seventh day.</p>
                                </a>
                            <a href="/post-crypto/612" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-863.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 14, 2023 - 7:04 AM</p>
                                    <h1>Ether Pushes Past $2K as Ripple Partial Win Against SEC Invigorates Market</h1>
                                    <p>Ether (ETH) is trading hands above $2,000, a three-month high, as the market picked up renewed optimism after a U.S. court found that sales of Ripple’s XRP tokens on exchanges and through algorithms did not constitute</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/611" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-862.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 14, 2023 - 6:04 AM</p>
                                    <h1>Bitcoin, Ether surge after Ripple notched partial win against SEC; Ripple’s XRP leads crypto rally</h1>
                                    <p>Bitcoin surged on Friday morning in Asia to breach the US$31,000 resistance level, after Ripple Labs achieved a partial victory in its three-year lawsuit against the U.S. Securities and Exchange Commission (SEC).</p>
                                </a>
                            <a href="/post-crypto/610" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-864.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 13, 2023 - 10:36 PM</p>
                                    <h1>XRP soars 61% after a judge says the cryptocurrency is not a security in a big win over the SEC</h1>
                                    <p>XRP soared as much as 61% on Thursday after a US judge ruled that certain trades of Ripple's crypto token did not constitute the sale of a security.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/589" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-867.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 14, 2023 - 12:27 AM</p>
                                    <h1>Tech Stocks Lead Market Higher After Inflation Falls</h1>
                                    <p>Stocks marched higher Thursday after investors received data—for a second consecutive day—showing that inflation is moderating to its slowest pace in years.</p>
                                </a>
                            <a href="/post-markets/588" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-866.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 13, 2023 - 7:24 PM</p>
                                    <h1>Russia economy is in shambles and its oil exports are collapsing — but its crude oil just smashed a crucial price cap</h1>
                                    <p>Russia's economy is struggling, but the commodities giant could be getting an uptick in its flagship oil price — the Urals crude oil price just breached a crucial cap for the first time since December 5.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-forex/573" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-868.jpg" alt="art_pic"/></div>
                                <p className="dat"> July 13, 2023 - 6:46 AM</p>
                                <h1>Rupee ends higher for fourth session on broad dollar weakness</h1>
                                <p>BENGALURU (Reuters) - The Indian rupee ended higher for a fourth straight session on Thursday, driven by broad weakness in the dollar, while demand for the greenback from importers limited gains.</p>
                            </a>
                            <a href="/post-commodities/571" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689332878/ncx-blog-875_usmfcl.webp" alt="art_pic"/></div>
                                <p className="dat">  July 12, 2023 - 8:29 PM</p>
                                <h1>India restricts imports of plain gold jewellery</h1>
                                <p>MUMBAI (Reuters) -India on Wednesday restricted imports on plain gold jewellery, as the world's second-largest consumer of the precious metal tries to plug loopholes in its trade policy.</p>
                            </a>
                            <a href="/post-markets/587" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-858.jpg" alt="art_pic"/></div>
                                <p className="dat">  July 12, 2023 - 12:39 AM</p>
                                <h1>Stocks close higher in wait for inflation data: Stock market news today</h1>
                                <p>Stocks closed higher Tuesday in the countdown to inflation reports that could give the Federal Reserve cause to consider ending its interest rate hikes sooner.</p>
                            </a>
                            <a href="/post-markets/586" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-857.jpg" alt="art_pic"/></div>
                                <p className="dat"> July 12, 2023 - 12:03 AM</p>
                                <h1>JPMorgan, Wells Fargo Near Buy Points With Q2 Earnings Fuse Lit</h1>
                                <p>JPMorgan, Wells Fargo and Citigroup kick off bank earnings early Friday. JPM stock, WFC and C shares are near buy points.</p>
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
                            <a href="/post-forex/576" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-871.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 13, 2023 - 6:11 PM</p>
                                    <h1>GBP/USD Forecast – British Pound Continues to Power Through Resistance</h1>
                                    <p>The British pound has rallied significantly during the trading session on Thursday, as we continue to see inflation in the United States cool off, and therefore it’s likely that we continue to see the US dollar drop a bit.</p>
                                </a>
                            <a href="/post-forex/575" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-870.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 13, 2023 - 5:53 PM</p>
                                    <h1>AUD/USD Forecast – Australian Dollar Blasts Through Resistance</h1>
                                    <p>The Australian dollar has rallied significantly during the trading session on Thursday, blasting through the 0.68 level. This is an area that previously was resistance, and the fact that we have shot through there suggests that</p>
                                </a>
                            <a href="/post-forex/574" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-869.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 13, 2023 - 5:14 PM</p>
                                    <h1>EUR/USD Forecast – Euro Continues to Climb</h1>
                                    <p>The euro initially tried to rally during the trading session on Thursday, and it looks like we may have a little bit of follow-through. At this point, the market is likely to get looking to the 1.1250 level, an area that of course is a large,</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/574" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689339571/ncx-blog-877_tnyleu.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 14, 2023 - 3:35 PM</p>
                                    <h1>Oil Heads for Third Weekly Gain as Africa, Russia Crimp Supply</h1>
                                    <p>(Bloomberg) -- Oil headed for a third weekly gain as supply disruptions in Africa and a reduction in shipments from Russia tightened the market.</p>
                                </a>
                            <a href="/post-commodities/573" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689340901/ncx-blog-878_te7oos.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 14, 2023 - 5:52 AM</p>
                                    <h1>Russia is about to overtake Saudi Arabia as the top OPEC+ producer</h1>
                                    <p>Russia is about to surpass Saudi Arabia as the top OPEC+ oil producer, according to the International Energy Agency.</p>
                                </a>   
                            <a href="/post-commodities/572" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689341318/ncx-blog-879_zttgkr.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 13, 2023 - 10:59 PM</p>
                                    <h1>Production at Libya’s Second-Largest Oil Field Halted</h1>
                                    <p>(Bloomberg) -- Libya’s second-biggest oil field is in the process of shutting as protests disrupt supplies in the North African country.</p>
                                </a>                      
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/563" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-873.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 14, 2023 - 12:25 AM</p>
                                    <h1>Dow Jones Gains Amid Disney TV Shock; This Cathie Wood Stock Hits Buy Zone As She Loads Up</h1>
                                    <p>The Dow Jones gained as Disney CEO Bob Iger spoke about its TV business. A Cathie Wood stock hit a buy zone. Nvidia stock cleared an entry.</p>
                                </a>  
                            <a href="/post-indices/562" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-872.jpg" alt="art_pic"/></div>
                                    <p className="dat">  July 13, 2023 - 6:38 PM</p>
                                    <h1>FTSE closes higher as pound soars and Wall Street holds gains</h1>
                                    <p>The FTSE 100 (^FTSE) ticked up on Thursday as the pound (GBPUSD=X) hit a 15-month high against the dollar, rising past the $1.30 mark.</p>
                                </a>
                            <a href="/post-indices/561" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-874.jpg" alt="art_pic"/></div>
                                    <p className="dat"> July 13, 2023 - 6:22 PM</p>
                                    <h1>S&P 500 on Track to Hit Record High Before Year-End, Goldman Flood Says</h1>
                                    <p>(Bloomberg) -- With the S&P 500 up 25% in nine months and sitting at its best level since April 2022, people want to know: is an all-time high next? John Flood, a partner at Goldman Sachs Group Inc., thinks so.</p>
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