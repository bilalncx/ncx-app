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
                                <a href="/post-markets/551" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-702.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 20, 2023 - 7:36 AM</p>
                                    <h1>Treasury Yields Rise as Global Bond Slide Extends Before Powell</h1>
                                    <p>(Bloomberg) -- Treasuries dropped in Asia as they reopened following a US long weekend, extending a global slide that began in the UK where investors grew concerned stubborn inflation will lead to more aggressive monetary tightening.</p>
                                </a>
                                <a href="/post-crypto/578" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-694.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 20, 2023 - 5:02 AM</p>
                                    <h1>Bitcoin gains ground, Ether rises, Solana leads winners, BNB little-changed to lower</h1>
                                    <p>Bitcoin rose in Tuesday morning trading in Asia to hold above support at US$26,000. Ether also logged gains along with most other top 10 non-stablecoin cryptocurrencies.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/577" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-699.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 20, 2023 - 12:06 AM</p>
                                    <h1>Grayscale Bitcoin Trust Gets a Bullish Bump After BlackRock ETF Filing</h1>
                                    <p>Last week, $9.5 trillion asset manager BlackRock made a seismic move by applying to the U.S. Securities and Exchange Commission (SEC) for a Bitcoin exchange-traded fund (ETF).</p>
                                </a>
                            <a href="/post-crypto/576" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-695.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 19, 2023 - 10:46 PM</p>
                                    <h1>Curve Looks To Expand crvUSD Collateral Assets</h1>
                                    <p>Curve, a popular stablecoin-focused decentralized exchange (DEX), is seeking to expand the set of collateral assets supported by its crvUSD stablecoin beyond Ethereum liquid staking tokens,</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/550" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-700.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 20, 2023 - 11:21 AM</p>
                                    <h1>Stocks Lower as Investors Face Gut Check on Rally: Markets Wrap</h1>
                                    <p>(Bloomberg) -- Stocks declined Tuesday as the second-quarter rally met resistance from economic headwinds and signs that positioning is overbought.</p>
                                </a>
                            <a href="/post-markets/549" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-701.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 20, 2023 - 12:33 AM</p>
                                    <h1>Bitcoin Reclaims Over 50% Market Dominance Following BlackRock ETF Filing</h1>
                                    <p>Bitcoin’s market capitalization is once again larger than that of all other cryptocurrencies combined, according to data from TradingView.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/575" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-696.jpg" alt="art_pic"/></div>
                                <p className="dat">  June 19, 2023 - 7:34 PM</p>
                                <h1>Ethereum Scanner Etherscan Adds OpenAI-Based Tool to Analyze Smart Contract Source Code</h1>
                                <p>Etherscan, one of the most commonly used Ethereum blockchain scanning websites, introduced a tool that uses artificial intelligence (AI) to help users interpret the source code of smart contracts,</p>
                            </a>
                            <a href="/post-markets/548" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-703.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 19, 2023 - 1:15 PM</p>
                                <h1>Hong Kong stock exchange debuts yuan-denominated shares as China speeds up push to internationalize its currency and replace the U.S. dollar</h1>
                                <p>International investors in Hong Kong are now able to buy shares denominated in the Chinese renminbi, as part of a new scheme launched by the city’s stock exchange on Monday.</p>
                            </a>
                            <a href="/post-commodities/539" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-712.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 19, 2023 - 8:03 AM</p>
                                <h1>EU countries fail to agree energy reforms after coal subsidy clash</h1>
                                <p>LUXEMBOURG (Reuters) -European Union countries failed on Monday to agree on planned new rules for the bloc's power market, having clashed over a proposal to extend subsidies for coal plants under the reform,</p>
                            </a>
                            <a href="/post-indices/533" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-707.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 19, 2023 - 6:09 AM</p>
                                <h1>Hong Kong’s $1.9 Trillion Stocks Await Boost From Yuan Trading</h1>
                                <p>(Bloomberg) -- Hong Kong is betting that a new program allowing investors to trade equities in the yuan on top of its local currency will help revive its flagging stock market and boost turnover that’s hovering at a four-year low.</p>
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
                            <a href="/post-forex/546" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-711.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 20, 2023 - 8:10 AM</p>
                                    <h1>Yen Pressure Mounts With Trade-Weighted Gauge at Two-Decade Low</h1>
                                    <p>(Bloomberg) -- Weakness in the yen is broadening with a trade-weighted gauge of the currency falling to the lowest in more than two decades as officials in Tokyo issue more warnings about sharp moves.</p>
                                </a>
                            <a href="/post-forex/545" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-710.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 19, 2023 - 5:45 PM</p>
                                    <h1>EU Legislation for Digital Euro Is Put on Hold: Source</h1>
                                    <p>European Union legislation needed to underpin a digital euro, originally due to be published June 28, has been put on hold, CoinDesk has been told.</p>
                                </a>
                            <a href="/post-forex/544" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-709.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 19, 2023 - 5:16 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Continues to Show Strength Against Japanese Yen</h1>
                                    <p>The US dollar has tried to rally a bit during the trading session on Monday, but it’s worth noting that it was Juneteenth in the United States, so a certain amount of liquidity would be missing.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/542" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-717.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 20, 2023 - 6:26 AM</p>
                                    <h1>Surge in China’s Demand for Gold Is Slowing as Economy Stumbles</h1>
                                    <p>(Bloomberg) -- The jitters affecting the world’s second-biggest economy are starting to feed through into China’s gold market.</p>
                                </a>
                                <a href="/post-commodities/541" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-716.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 20, 2023 - 5:13 AM</p>
                                    <h1>Oil rises as Chinese economic indicators offer mixed picture</h1>
                                    <p>LONDON (Reuters) -Oil prices rose on Tuesday after China cut benchmark lending rates in a potential boost to growth but oil demand was seen rising less than expected this year, in a mixed picture for consumption</p>
                                </a>
                            <a href="/post-commodities/540" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-715.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 19, 2023 - 4:23 PM</p>
                                    <h1>Insider Q&A: Lithium batteries have a 4-hour limit. Mateo Jaramillo hopes to solve that</h1>
                                    <p>Wind and solar power are sometimes dinged for not producing electricity 24 hours a day, but one of the most abundant minerals on the planet, iron, could be key to changing that.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/536" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-704.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 20, 2023 - 8:46 AM</p>
                                    <h1>Dow Jones Futures Fall: Market Strong, But Heres What To Do; AMD, Boeing Lead Stocks To Watch</h1>
                                    <p>The market rally has shown bullish action, but be prepared for a pullback in the near term. AMD and Boeing are among stocks to watch.</p>
                                </a>
                            <a href="/post-indices/535" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-706.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 19, 2023 - 7:54 PM</p>
                                    <h1>LIVE: FTSE 100 closes lower as pound hits 10-month high ahead of BoE rate decision</h1>
                                    <p>European stocks and the FTSE 100 finished lower on Monday afternoon as the pound hit a 10-month high versus the euro (GBPEUR=X) with investors anticipating the performance of the currency ahead of UK inflation </p>
                                </a>
                            <a href="/post-indices/534" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-705.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 19, 2023 - 3:00 PM</p>
                                    <h1>Is USAA NASDAQ-100 Index Fund (USNQX) a Strong Mutual Fund Pick Right Now?</h1>
                                    <p>Any investors who are searching for Mutual Fund Equity Report funds should take a look at USAA NASDAQ-100 Index Fund (USNQX). While this fund is not tracked by the Zacks Mutual Fund Rank,</p>
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