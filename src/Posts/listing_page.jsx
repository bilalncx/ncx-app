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
                                <a href="/post-indices/501" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-463.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 28, 2023 - 6:03 PM</p>
                                    <h1>Dow Jones Reverses After Key Inflation Data. Amazon Dives, While First Solar Plunges 12% On Earnings Miss</h1>
                                    <p>The Dow Jones Industrial Average reversed higher Friday as a pair of closely watched inflation gauges were released. Amazon.com (AMZN) stock sold off after its Q1 earnings, while First Solar (FSLR) plunged on an earnings miss.</p>
                                </a>
                                <a href="/post-forex/502" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-465.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 27, 2023 - 4:37 PM</p>
                                    <h1>EUR/USD Forecast – Euro Continues to Threaten Upside Breakout</h1>
                                    <p>The Euro initially rallied during the trading session on Thursday but still sees a lot of noise just above that could cause some headaches. Ultimately, the market does look a little stretched, but if we do take off and break above the 1.11 level, the market could open up and move to the 1.1250 level, perhaps even further than that.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                                <a href="/post-crypto/500" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-459.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 27, 2023</p>
                                    <h1>Bitcoin leveraged longs liquidated after brief mid-week recovery above $30,000</h1>
                                    <p>Bitcoin’s long liquidations on 26 April soared to their highest level so far in April. The liquidations also triggered a sharp drop in the estimated leverage ratio as leverage traders quickly shifted to the side of caution.</p>
                                </a>
                                <a href="/post-crypto/440" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-455.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 25, 2023 - 4:05 PM</p>
                                    <h1>Bitcoin-Tether Pair Is Most Liquid on Binance Even as TUSD Pair Sees Higher Volume</h1>
                                    <p>Trading volume on Binance of bitcoin (BTC) denominated in ArchBlock's dollar-pegged stablecoin trueUSD (TUSD) has surged over the past four weeks after the crypto exchange introduced zero trading fees in the pair on March 23 while simultaneously reintroducing fees for all other pairs.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                                <a href="/post-markets/439" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-454.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 26, 2023 - 2:10 PM</p>
                                    <h1>US Futures Rise as Big-Tech Earnings Bolster Mood: Markets Wrap</h1>
                                    <p>(Bloomberg) -- US equity futures gained as strong earnings from tech majors Alphabet Inc. and Microsoft Corp. after the Wall Street close offered investors some reassurance amid continued concerns over the health of the economy.</p>
                                </a>
                                <a href="/post-markets/438" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-453.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 26, 2023 - 12:38 PM</p>
                                    <h1>Microsoft Sees AI Reshaping Search as Google Calms Investors</h1>
                                    <p>(Bloomberg) -- Alphabet Inc.’s Google and Microsoft Corp., whose quarterly earnings each got a boost from their established search and cloud-computing businesses, used their time with investors to emphasize what’s next: artificial intelligence.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br">
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="https://ncx.cx/insights/442" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-457.jpg" alt="art_pic"/></div>
                                <p className="dat">Apr 26, 2023 - 4:06 PM</p>
                                <h1>Dow Jones Futures Rise On Microsoft, Boeing; First Republic Fights For Survival</h1>
                                <p>Dow Jones futures and S&P 500 futures rose slightly Wednesday morning while Nasdaq futures climbed solidly as Microsoft (MSFT), Google parent Alphabet (GOOGL) and Boeing headlined big earnings.</p>
                            </a>
                            <a href="https://ncx.cx/insights/442" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-457.jpg" alt="art_pic"/></div>
                                <p className="dat">Apr 26, 2023 - 4:06 PM</p>
                                <h1>Dow Jones Futures Rise On Microsoft, Boeing; First Republic Fights For Survival</h1>
                                <p>Dow Jones futures and S&P 500 futures rose slightly Wednesday morning while Nasdaq futures climbed solidly as Microsoft (MSFT), Google parent Alphabet (GOOGL) and Boeing headlined big earnings.</p>
                            </a>
                            <a href="https://ncx.cx/insights/442" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-457.jpg" alt="art_pic"/></div>
                                <p className="dat">Apr 26, 2023 - 4:06 PM</p>
                                <h1>Dow Jones Futures Rise On Microsoft, Boeing; First Republic Fights For Survival</h1>
                                <p>Dow Jones futures and S&P 500 futures rose slightly Wednesday morning while Nasdaq futures climbed solidly as Microsoft (MSFT), Google parent Alphabet (GOOGL) and Boeing headlined big earnings.</p>
                            </a>
                            <a href="https://ncx.cx/insights/442" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-457.jpg" alt="art_pic"/></div>
                                <p className="dat">Apr 26, 2023 - 4:06 PM</p>
                                <h1>Dow Jones Futures Rise On Microsoft, Boeing; First Republic Fights For Survival</h1>
                                <p>Dow Jones futures and S&P 500 futures rose slightly Wednesday morning while Nasdaq futures climbed solidly as Microsoft (MSFT), Google parent Alphabet (GOOGL) and Boeing headlined big earnings.</p>
                            </a>
                            <a href="https://ncx.cx/insights/442" className="col">
                                <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-457.jpg" alt="art_pic"/></div>
                                <p className="dat">Apr 26, 2023 - 4:06 PM</p>
                                <h1>Dow Jones Futures Rise On Microsoft, Boeing; First Republic Fights For Survival</h1>
                                <p>Dow Jones futures and S&P 500 futures rose slightly Wednesday morning while Nasdaq futures climbed solidly as Microsoft (MSFT), Google parent Alphabet (GOOGL) and Boeing headlined big earnings.</p>
                            </a>

                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Forex</h1>
                            <div className="art_grf row">
                                <a href="/post-forex/501" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-464.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 27, 2023 - 4:32 PM</p>
                                    <h1>AUDUSD Forecast – Australian Dollar Bounces</h1>
                                    <p>The Australian dollar has bounced a bit during the trading session on Thursday, as the 0.66 level has offered support previously. At this point, we are trying to determine whether or not we are going to break down below that level and continue to go further down.</p>
                                </a>
                                <a href="/post-forex/425" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-440.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 24, 2023 - 4:25 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Rallies Against Yen</h1>
                                    <p>The US dollar has rallied a bit during the trading session on Monday, as it continues its upward pressure against the Japanese yen. Ultimately, this is a pair that is trying to determine whether the longer-term trend will continue or if the recent pullback is something a bit bigger.</p>
                                </a>
                                <a href="/post-forex/426" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-441.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 24, 2023 - 4:20 PM</p>
                                    <h1>GBP to USD Forecast – British Pound Continues to Grind Sideways</h1>
                                    <p>The British pound has gone back and forth during the trading session on Monday, as we continue to look at the market between the 1.24 level and the 1.25 level as trying to fight through a barrier.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                                <a href="/post-commodities/436" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-451.jpg" alt="art_pic"/></div>
                                    <p className="dat"> Apr 24, 2023 - 11:32 PM</p>
                                    <h1>Oil Kicks Off Higher After Biggest Weekly Loss Since Bank Scare</h1>
                                    <p>(Bloomberg) -- Oil recouped some of last week’s slump in lower-volume trading as many investors took a pause while awaiting further clues to demand.</p>
                                </a>
                                <a href="/post-commodities/418" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-432.jpg" alt="art_pic"/></div>
                                    <p className="dat">19, 2023 - 10:43 PM</p>
                                    <h1>Gold Price Outlook for April 2023</h1>
                                    <p>The tide appears to have turned, just as it did at the crucial moment in 2008. And just like it was the case back then, it seems that most people missed it.</p>
                                </a>
                                <a href="/post-commodities/420" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-434.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 17, 2023 - 11:02 PM</p>
                                    <h1>Oil Dips as Demand Signs, Strong Dollar Leave Traders ‘Cautious’</h1>
                                    <p>(Bloomberg) -- Oil lost ground amid signs of tepid demand, with a stronger dollar and key technical measures also putting a lid on the commodity’s recent rally.</p>
                                </a>
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                                <a href="/post-indices/500" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-462.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 28, 2023 - 1:50 PM</p>
                                    <h1>FTSE 100: NatWest profits surge on the back of higher interest rates</h1>
                                    <p>NatWest’s (NWG.L) pre-tax operating profit rose 49% year on year to £1.8bn ($2.2bn) thanks to higher interest rates but tumbling customer deposits disappointed investors and analysts.</p>
                                </a>
                                <a href="/post-indices/442" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-457.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 26, 2023 - 4:06 PM</p>
                                    <h1>Dow Jones Futures Rise On Microsoft, Boeing; First Republic Fights For Survival</h1>
                                    <p>Dow Jones futures and S&P 500 futures rose slightly Wednesday morning while Nasdaq futures climbed solidly as Microsoft (MSFT), Google parent Alphabet (GOOGL) and Boeing headlined big earnings.</p>
                                </a>
                                <a href="https:/post-indices/443" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-458.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 26, 2023 - 12:01 AM</p>
                                    <h1>Stocks sink, Nasdaq slumps as all eyes on tech earnings: Stock market news today</h1>
                                    <p>U.S. stocks sank on Tuesday, led by the Nasdaq as tech conglomerates were set to highlight a busy earnings week.</p>
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