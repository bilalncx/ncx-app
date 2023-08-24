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
                            <a href="/post-markets/663" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692885516/ncx-blog-1193_osb9kd.png"/></div>
                                    <p className="dat"> August 24, 2023 - 7:18 AM</p>
                                    <h1>Bond Buyers Haven’t Had It This Good Since the Financial Crisis</h1>
                                    <p>(Bloomberg) -- The prospect of global interest rates remaining higher for longer is tipping the case for many investors to switch into bonds from stocks.</p>
                                </a>
                            <a href="/post-commodities/630" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692880732/ncx-blog-1186_a0z4wr.webp" alt="art_pic"/></div>
                                    <p className="dat">August 24, 2023 - 5:48 AM</p>
                                    <h1>Gold climbs two-week peak as Jackson Hole looms</h1>
                                    <p>(Reuters) - Gold rose for a fourth straight session to a two-week high on Thursday, extending gains from the previous session fuelled by weaker U.S. data in the run up to likely interest rate guidance from central bankers at Jackson Hole.</p>
                                </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row"> 
                            <a href="/post-crypto/683" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692866878/ncx-blog-1160_y3laqo.png" alt="art_pic"/></div>
                                    <p className="dat">  August 24, 2023</p>
                                    <h1>SOL could regain its lost confidence thanks to Solana’s latest integration</h1>
                                    <p>Solana Pay’s Shopify integration will allow merchants and entrepreneurs to leverage WEB3 payments. However, SOL’s price action didn’t exactly react in the best way to the news.</p>
                                </a>
                            <a href="/post-crypto/682" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692866701/ncx-blog-1159_bm29gf.png" alt="art_pic"/></div>
                                <p className="dat"> August 24, 2023</p>
                                <h1>BNB: All fingers point to CZ as Binance stays atop market minds</h1>
                                <p>The silence of CZ has caused the crypto community to keep pondering if anything was wrong with the exchange and its effect on BNB. What’s the latest?</p>
                            </a>
                            </div>
                            <Button href="/post-crypto" className="red__mor">View All</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                            <a href="/post-markets/662" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692884721/ncx-blog-1192_kijjua.webp" alt="art_pic"/></div>
                                    <p className="dat">August 24, 2023 - 5:14 AM</p>
                                    <h1>Nvidia bets $25 billion that AI boom is far from over</h1>
                                    <p>(Reuters) -Nvidia's CEO Jensen Huang said he expects the artificial intelligence boom will last well into next year and made what could be the largest single bet yet in the tech sector to back up his optimism.</p>
                                </a>
                            <a href="/post-markets/661" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692884198/ncx-blog-1191_lyws0v.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 24, 2023 - 2:00 AM</p>
                                    <h1>Snowflake Trounces Views On 36% Sales Growth; Shares Are Rising</h1>
                                    <p>Snowflake (SNOW) reported second-quarter earnings Wednesday that trounced analyst expectations and showed 36% revenue growth. SNOW stock was up 3% in aftermarket trades.</p>
                                </a>
                            </div>
                            <Button href="/post-markets" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="col rght_br"> 
                        <div className="bardd">
                            <h1 className="ma__rere">Trending Articles</h1>
                            <a href="/post-crypto/681" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692866109/ncx-blog-1158_jqv4wm.png" alt="art_pic"/></div>
                                <p className="dat"> August 23, 2023</p>
                                <h1>Base’s TPS surpasses Ethereum, Optimism and Arbitrum lag</h1>
                                <p>Base’s Transactions Per Second surpassed that of Ethereum on 22 August. Arbitrum and Optimism also had to give way for the Coinbase L2. What drove this flip?</p>
                            </a>
                            <a href="/post-crypto/679" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692863808/ncx-blog-1156_hopddf.png"/></div>
                                <p className="dat">August 23, 2023</p>
                                <h1>Cardano’s development activity impresses despite…</h1>
                                <p>Despite ADA’s vibrant on-chain vitality, price struggles persist, painting a complex portrait of innovation and challenge.</p>
                            </a>
                            <a href="/post-commodities/625" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692878467/ncx-blog-1183_fzifdh.webp" alt="art_pic"/></div>
                                <p className="dat">August 23, 2023 - 12:44 PM</p>
                                <h1>Commodities round-up: Oil prices lower as gold maintains its allure</h1>
                                <p>The state of China’s economy and demand destruction continues to weigh on the minds of investors as China faces a property crisis, falling exports, and weak consumer spending.</p>
                            </a>
                            <a href="/post-commodities/624" className="col">
                                <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692878118/ncx-blog-1182_y74bxh.webp" alt="art_pic"/></div>
                                <p className="dat"> August 23, 2023 - 11:05 AM</p>
                                <h1>Exclusive-Insurers raise premiums for Black Sea tankers as tensions mount - traders</h1>
                                <p>MOSCOW (Reuters) - Insurance companies have notified charterers of ships operating in Russia's Black Sea ports of an increase in additional payments known as "war risk premiums", four traders said.</p>
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
                            <a href="/post-forex/643" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692872755/ncx-blog-1174_vql7hs.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 23, 2023 - 7:03 PM</p>
                                    <h1>Pound and euro fall against dollar as economic data warns of recession</h1>
                                    <p>The pound and euro fell against the US dollar (USD) on Wednesday on the back of disappointing economic data that points to a possible recession over the remainder of the year.</p>
                                </a>
                            <a href="/post-forex/642" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692872376/ncx-blog-1173_dmaijk.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 23, 2023 - 6:16 PM</p>
                                    <h1>USD/JPY Forecast – US Dollar Continues to Look to the Upside Against Yen</h1>
                                    <p>On Wednesday’s trading day, the US dollar started off with a dip, but then it turned around and showed some signs of life. All in all, I’m thinking the market’s looking at the ¥145 level as a possible support point, even though it used to be a big resistance hurdle. </p>
                                </a>
                            <a href="/post-forex/641" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692872131/ncx-blog-1172_khomtp.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 23, 2023 - 6:12 PM</p>
                                    <h1>GBP/USD Forecast – British Pound Gets Hammered</h1>
                                    <p>The British pound has seen a certain amount of negativity over the last 24 hours, specifically after the PMI numbers in the United Kingdom came out much lighter than anticipated. In fact, both of them are contractionary, so now people are running toward the US dollar.</p>
                                </a>
                            </div>
                            <Button href="/post-forex" className="red__mor">View All</Button>
                        </div>
                    </div> 

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                            <a href="/post-commodities/629" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692881688/ncx-blog-1188_klie6c.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 24, 2023 - 4:52 AM</p>
                                    <h1>Another Deadly Coal Accident in China Threatens Output Growth</h1>
                                    <p>(Bloomberg) -- Fatal accidents continue to undermine China’s coal industry, with the latest incident in Shaanxi set to impede plans to raise production if authorities once again ramp up scrutiny of mine safety.</p>
                                </a>   
                            <a href="/post-commodities/628" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692881398/ncx-blog-1187_v4f8s4.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 24, 2023 - 4:37 AM</p>
                                    <h1>Oil steadies, US Fed chief speech in spotlight</h1>
                                    <p>LONDON (Reuters) -Oil prices steadied after earlier declines on Thursday caused bydisappointing economic data from key economies, with investors awaiting a speech by U.S. Federal Reserve Chair Jerome Powell on Friday for clues on interest rate moves.</p>
                                </a>   
                            <a href="/post-commodities/627" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692880358/ncx-blog-1185_wcent9.webp" alt="art_pic"/></div>
                                    <p className="dat">August 24, 2023 - 12:27 AM</p>
                                    <h1>Why Hecla Mining Stock Bounced Back on Wednesday</h1>
                                    <p>With silver prices rebounding, investors saw value in the silver miner after its recent steep fall.</p>
                                </a>                   
                            </div>
                            <Button href="/post-commodities" className="red__mor">View All</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                            <a href="/post-indices/607" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692875967/ncx-blog-1178_x2uuwx.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 24, 2023 - 5:50 AM</p>
                                    <h1>Asian stocks track Wall Street Nvidia-led rally</h1>
                                    <p>HONG KONG (Reuters) -Asian shares rallied on Thursday after blockbuster results from tech darling Nvidia boosted Wall Street and a retreat in U.S. bond yields eased pressure on borrowing costs globally.</p>
                                </a>
                            <a href="/post-indices/606" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692875489/ncx-blog-1177_mpp1hs.webp" alt="art_pic"/></div>
                                    <p className="dat">  August 24, 2023 - 12:29 AM</p>
                                    <h1>Dow Jones Rises, Yields Dive As Powell Jackson Hole Speech Looms; Cathie Wood Zooms In On This Stock</h1>
                                    <p>Major indexes trimmed some gains but ended sharply higher Wednesday ahead of Fed chief Jerome Powell's speech at the Jackson Hole, Wyo., Economic Symposium Friday. The Dow Jones Industrial Average lagged other indexes with a 0.5% gain at the closing bell.</p>
                                </a>
                            <a href="/post-indices/605" className="col">
                                    <div className="fdd-d"><img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692875305/ncx-blog-1176_fis9bf.webp" alt="art_pic"/></div>
                                    <p className="dat"> August 23, 2023 - 6:33 PM</p>
                                    <h1>Dow Jones Rises After Key Economic Data; Tesla Skids On Output Cut; Nvidia Earnings Next</h1>
                                    <p>The Dow Jones Industrial Average rose Wednesday morning after key economic data. Meanwhile, Tesla stock reversed higher after a report said the company's German plant lowered its production target. And Nvidia earnings are due out after the close.</p>
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