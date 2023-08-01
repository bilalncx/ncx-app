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
                            <a href="/post-markets/618" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690803814/ncx-blog-974_v5m2eu.webp"/></div>
                                    <p className="dat"> July 31, 2023 - 11:07 AM</p>
                                    <h1>Panasonic Q1 profit jumps, maintains FY forecast</h1>
                                    <p>TOKYO (Reuters) - Japan's Panasonic Holdings posted a 42% rise in first quarter profit on Monday, buoyed by a weaker yen and stronger sales in its automotive and energy segments, while it stuck to its full-year outlook.</p>
                                </a>
                            <a href="/post-crypto/628" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690793490/ncx-blog-969_plqpzt.png" alt="art_pic"/></div>
                                    <p className="dat">   July 31, 2023</p>
                                    <h1>Optimism: How Worldcoin, Coinbase helped to lure in users to the protocol</h1>
                                    <p>Interest in Optimism soared as TVL neared $1 billion. However, DEX volumes declined, signaling room for more growth in the DeFi sector.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/629" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690797639/ncx-blog-970_v2goh7.png" alt="art_pic"/></div>
                                    <p className="dat">  July 31, 2023</p>
                                    <h1>BNB network remains resilient despite market uncertainty</h1>
                                    <p>Activity on the BNBchain remains consistent. However, risky dApps and bearish sentiment may act as hurdles to BNB’s growth.</p>
                                </a>
                            <a href="/post-crypto/627" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690792884/ncx-blog-968_z56hvu.png" alt="art_pic"/></div>
                                    <p className="dat">  July 30, 2023</p>
                                    <h1>Uniswap: How high can the bullish streak go?</h1>
                                    <p>Uniswap’s recovery hit Q2 price ceiling but overall price action was bullish – Which way will price sway?</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/617" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690803603/ncx-blog-973_ovbkmm.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 31, 2023 - 9:30 AM</p>
                                    <h1>Goldman, Morgan Stanley See BOJ Tweak Boosting Japan Stocks</h1>
                                    <p>(Bloomberg) -- Strategists at Morgan Stanley and Goldman Sachs Group Inc. see the Bank of Japan’s tweak of yield-curve control as providing clarity that will support further gains in the nation’s equity market.</p>
                                </a>
                            <a href="/post-markets/616" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690803374/ncx-blog-972_moosem.webp" alt="art_pic"/></div>
                                    <p className="dat">   July 31, 2023 - 8:39 AM</p>
                                    <h1>Stock market today: European shares open mixed after Asia rallies on hopes for Chinese stimulus</h1>
                                    <p>BANGKOK (AP) — Shares were mixed in Europe after most Asian markets logged gains Monday on hopes for more stimulus from Beijing for the sluggish Chinese economy.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br"> 
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-indices/578" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690880977/ncx-blog-984_umpiai.webp" alt="art_pic"/></div>
                                <p className="dat"> July 31, 2023 - 10:39 AM</p>
                                <h1>Japan megabanks eye BOJ boost after solid first quarter</h1>
                                <p>TOKYO (Reuters) -Two of Japan's megabanks reported solid quarterly profits on Monday amid hopes the Bank of Japan's (BOJ) nudge towards policy normalisation will herald a sea change in their business after years of being squeezed by rock-bottom interest rates.</p>
                            </a>
                            <a href="/post-commodities/591" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690871258/ncx-blog-975_i6bvha.webp"/></div>
                                <p className="dat"> July 31, 2023 - 4:37 AM</p>
                                <h1>Oil prices hit multi-month highs on tightening supply</h1>
                                <p>BENGALURU (Reuters) -Oil prices rallied to a fresh three-month high on Monday and recorded their steepest monthly gains since January 2022, supported by signs of tightening global supply and rising demand through the rest of this year.</p>
                            </a>
                            <a href="/post-markets/615" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690802068/ncx-blog-971_d6ld1i.webp" alt="art_pic"/></div>
                                <p className="dat"> July 30, 2023 - 3:00 PM</p>
                                <h1>Apple, Amazon, Starbucks to Report in Packed Earnings Week</h1>
                                <p>During the week, 170 S&P 500 companies, including four Dow Jones Industrial Average components, are scheduled to report. So far, 51% of S&P 500 companies have reported their earnings, according to FactSet.</p>
                            </a>
                            <a href="/post-indices/577" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690879886/ncx-blog-983_rbrm5b.webp" alt="art_pic"/></div>
                                <p className="dat"> July 29, 2023 - 7:12 PM</p>
                                <h1>AI Stock Marvell And Eli Lilly Lead 5 Names Near Buy Points As S&P 500 Rallies On</h1>
                                <p>Top AI stock Marvell Technology and Eli Lilly lead this weekend's watch list of five stocks near buy points as the new S&P 500 bull market revs back up.</p>
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
                            <a href="/post-forex/600" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690878606/ncx-blog-982_hnhnfv.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 31, 2023 - 6:07 PM</p>
                                    <h1>Bank of England likely to raise interest rates to new high</h1>
                                    <p>The Bank of England (BoE) is likely to raise interest rates by 0.25% to 5.25% when the monetary policy committee (MPC) meets on Thursday.</p>
                                </a>
                            <a href="/post-forex/599" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690878400/ncx-blog-981_v9uavz.webp" alt="art_pic"/></div>
                                    <p className="dat">    July 28, 2023 - 8:04 PM</p>
                                    <h1>GBP/JPY Weekly Forecast – British Pound Shows Immense Strength</h1>
                                    <p>The British pound has fallen during the week, especially on Friday when the Bank of Japan announced that it was losing its yield curve control. That being said, the market is turned right back around to show signs of strength again,</p>
                                </a>
                            <a href="/post-forex/598" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690878206/ncx-blog-980_fcadgt.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 28, 2023 - 8:00 PM</p>
                                    <h1>AUD/USD Weekly Forecast – Australian Dollar Continues to Consolidate</h1>
                                    <p>The Australian dollar has been very noisy as of late and the past week was no different. All things being equal, it looks like we are bouncing around between the 0.66 level on the bottom and the 0.69 level on the top.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/594" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690877258/ncx-blog-978_nz1xh2.webp" alt="art_pic"/></div>
                                    <p className="dat">July 31, 2023 - 5:09 PM</p>
                                    <h1>UK to issue hundreds of new oil, gas licences in North Sea</h1>
                                    <p>The UK government said Monday it would issue "hundreds" of new oil and gas licences in the North Sea to secure energy reserves while still aiming for net zero carbon emissions by 2050.</p>
                                </a>   
                            <a href="/post-commodities/593" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690872089/ncx-blog-977_wsszei.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 31, 2023 - 3:01 PM</p>
                                    <h1>Oil to drift lower as slower growth offsets OPEC+ cuts: Reuters poll</h1>
                                    <p>(Reuters) - Oil prices will stall this year as weak economic growth is expected to curb demand and offset the impact of OPEC+ production cuts on supply, a Reuters poll showed on Monday.</p>
                                </a>   
                            <a href="/post-commodities/592" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690871612/ncx-blog-976_auu6qe.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 31, 2023 - 9:23 AM</p>
                                    <h1>Gold set for best month in four as rate-hike cycle nears end</h1>
                                    <p>(Reuters) - Gold prices rose on Monday, putting them on track for their best month in four, helped by a weaker dollar and expectations that major global central banks are nearing a peak with interest rate hikes.</p>
                                </a>                   
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/581" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690883063/ncx-blog-987_ottrjf.webp" alt="art_pic"/></div>
                                    <p className="dat"> July 31, 2023 - 7:37 PM</p>
                                    <h1>US stocks up as FTSE closes higher amid unexpected UK mortgage approval rates</h1>
                                    <p>Stock indexes across Europe finished the day in the green on Monday in London, as the market parsed positive inflation readings in the bloc and higher than expected mortgage approval rates among Britons.</p>
                                </a>
                            <a href="/post-indices/580" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690882960/ncx-blog-986_dj17rv.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 31, 2023 - 5:59 PM</p>
                                    <h1>Dow Jones Falls In Final Day Of July; 6 Best Stocks To Buy And Watch</h1>
                                    <p>The Dow Jones Industrial Average dropped Monday, with the stock market set to end July with gains. Best stocks to buy and watch include Dow Jones giant Boeing.</p>
                                </a>
                            <a href="/post-indices/579" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690881249/ncx-blog-985_rjt98l.webp" alt="art_pic"/></div>
                                    <p className="dat">  July 31, 2023 - 2:46 PM</p>
                                    <h1>Zacks Industry Outlook Highlights CME Group, Intercontinental Exchange, Cboe Global Markets, Nasdaq and Coinbase Global</h1>
                                    <p>Chicago, IL – July 31, 2023 – Today, Zacks Equity Research discusses CME Group CME, Intercontinental Exchange ICE, Cboe Global Markets CBOE, Nasdaq NDAQ and Coinbase Global Inc. COIN.</p>
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