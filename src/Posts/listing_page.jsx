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
                                <a href="/post-markets/535" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-633.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 10, 2023 - 1:09 AM</p>
                                    <h1>Stock Market Action Plan June 12-16: Fed Meeting, Earnings From Lennar, Oracle Adobe</h1>
                                    <p>The Fed's Wednesday policy news will be the market's focal point for the week, along with earnings from Adobe, Oracle and Lennar.</p>
                                </a>
                                <a href="/post-indices/524" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-632.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 10, 2023 - 3:58 AM</p>
                                    <h1>Dow Jones Futures: Bullish Market Trend, But Fed Meeting Looms; Watch Tesla, Nvidia, Biogen</h1>
                                    <p>A broader market rally is a reason to be bullish long term, but the Fed meeting is one reason to be cautious now. Biogen jumped late Friday. Watch Tesla and Nvidia.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                            <a href="/post-crypto/555" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-627.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 9, 2023 - 5:14 PM</p>
                                    <h1>Weekly Market Wrap: SEC crackdown on Binance, Coinbase ‘can’t stop’ Bitcoin as it trades above US$26,000</h1>
                                    <p>Bitcoin fell 2% from June 2 to June 9 to trade at US$26,598 at 7:45 p.m. Friday in Hong Kong.</p>
                                </a>
                            <a href="/post-crypto/554" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-624.jpg" alt="art_pic"/></div>
                                    <p className="dat">  June 9, 2023 - 1:35 PM</p>
                                    <h1>Bitcoin rises, Ether slips, most top 10 cryptos begin to pick up after SEC crackdown</h1>
                                    <p>Bitcoin rose and Ether fell during Friday afternoon trading hours in Hong Kong, while most of the top 10 non-stablecoin cryptocurrencies by market</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/538" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-636.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 10, 2023 - 4:54 PM</p>
                                    <h1>The bull market in stocks wont last long - and theres a 99% chance of a US recession, top economist David Rosenberg says</h1>
                                    <p>The stock market's powerful rally is unfounded, and the US economy is virtually guaranteed to sink into recession, David Rosenberg has warned.</p>
                                </a>
                            <a href="/post-markets/537" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-635.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 10, 2023 - 1:45 AM</p>
                                    <h1>MasterCard (MA) Outpaces Stock Market Gains: What You Should Know</h1>
                                    <p>MasterCard (MA) closed the most recent trading day at $369.22, moving +0.44% from the previous trading session.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-markets/536" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-634.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 10, 2023 - 1:45 AM</p>
                                <h1>Amazon (AMZN) Stock Sinks As Market Gains: What You Should Know</h1>
                                <p>Amazon (AMZN) closed the most recent trading day at $123.43, moving -0.66% from the previous trading session.</p>
                            </a>
                            <a href="/post-crypto/556" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-626.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 9, 2023</p>
                                <h1>Why Bitcoin’s transactions are soaring today</h1>
                                <p>Bitcoin transactions hit the highest point in almost two months amid regulatory heat. Yet, money flowed out of the market.</p>
                            </a>
                            <a href="/post-crypto/558" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-629.jpg" alt="art_pic"/></div>
                                <p className="dat">  June 8, 2023 - 9:26 PM</p>
                                <h1>Kraken NFT Marketplace Launches With Support for Ethereum, Solana and Polygon Collections</h1>
                                <p>Cryptocurrency exchange Kraken has officially launched its NFT marketplace out of beta testing, supporting over 250 non-fungible tokens (NFTs) across the Ethereum, Solana and Polygon blockchains.</p>
                            </a>
                            <a href="/post-commodities/525" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-640.jpg" alt="art_pic"/></div>
                                <p className="dat"> June 8, 2023 - 7:25 AM</p>
                                <h1>Gold jumps as US dollar, yields dip after jobless claims data</h1>
                                <p>(Reuters) - Gold prices climbed more than 1% on Thursday as the dollar and bond yields slipped after data showed U.S. weekly jobless claims surged last week,</p>
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
                            <a href="/post-forex/531" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-616.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 6, 2023 - 6:15 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Finds Buyers on the Dip</h1>
                                    <p>The US dollar initially tried to fall against the Japanese yen during the trading session on Tuesday, but then turned around to show signs of life again.</p>
                                </a>
                            <a href="/post-forex/530" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-617.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 6, 2023 - 6:08 PM</p>
                                    <h1>GBP to USD Forecast – British Pound Gives Up Early Gain</h1>
                                    <p>The British pound initially tried to rally during the trading session on Tuesday but gave back gain rather quickly. At this point, the market is likely to see the 50-Day</p>
                                </a>
                            <a href="/post-forex/529" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-610.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 5, 2023 - 6:02 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Threatens Another Breakout</h1>
                                    <p>The US dollar has rallied a bit during the trading session early on Monday, as the Japanese yen continues to lose value. That being said, there is a little bit of pushback,</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                                <a href="/post-commodities/528" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-638.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 9, 2023 - 2:30 PM</p>
                                    <h1>Natural Gas ETF Buying Spree Has Traders Fearing Wild Swings</h1>
                                    <p>(Bloomberg) -- A buying spree in ETFs tied to natural gas is spurring concern that the securities risk destabilizing a market that up until now has been the province of energy pros.</p>
                                </a>
                                <a href="/post-commodities/527" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-639.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 9, 2023 - 7:31 AM</p>
                                    <h1>Gold heads for best week in five on Fed rate pause bets</h1>
                                    <p>(Reuters) - Gold eased on Friday on a stronger dollar and higher yields but was set for its best week since early May after weaker jobs data</p>
                                </a>
                            <a href="/post-commodities/526" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-637.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 9, 2023 - 5:36 AM</p>
                                    <h1>Oil posts second weekly decline as demand concerns overshadow Saudi cut</h1>
                                    <p>BENGALURU (Reuters) - Oil prices fell more than a dollar a barrel on Friday to record a second straight weekly decline, as disappointing Chinese data</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/523" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-631.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 10, 2023 - 12:55 AM</p>
                                    <h1>Dow Jones Today: Index Inches Up Ahead of Fed Meeting</h1>
                                    <p>The Dow Jones Industrial Average (DJIA) ticked up about 0.1%, or 44 points, on below-average volume as investors await next week's inflation reading and an interest rate decision from the Federal Reserve.</p>
                                </a>  
                            <a href="/post-indices/522" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-630.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 10, 2023 - 12:02 AM</p>
                                    <h1>S&P 500 finishes week at highest level since August, as Nasdaq logs 7th-straight winning week: Stock market news today</h1>
                                    <p>Stocks rose on Friday as investors digested a pairing between two of the largest American automakers and prepared for the Federal Reserve's next decision on rate hikes.</p>
                                </a>  
                            <a href="/post-indices/521" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-622.jpg" alt="art_pic"/></div>
                                    <p className="dat"> June 7, 2023 - 3:54 PM</p>
                                    <h1>Dow Jones Futures: Indexes Mask Broad Market Rally; Cathie Wood Loads Up Coinbase</h1>
                                    <p>The stock market rally had a slightly positive session on big-cap indexes Tuesday. But small-cap and midcap stocks had a big day.</p>
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