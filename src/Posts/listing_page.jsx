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
                                <a href="https://ncx.cx/insights/442" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-457.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 26, 2023 - 4:06 PM</p>
                                    <h1>Dow Jones Futures Rise On Microsoft, Boeing; First Republic Fights For Survival</h1>
                                    <p>Dow Jones futures and S&P 500 futures rose slightly Wednesday morning while Nasdaq futures climbed solidly as Microsoft (MSFT), Google parent Alphabet (GOOGL) and Boeing headlined big earnings.</p>
                                </a>
                                <a href="https://ncx.cx/insights/439" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-454.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 26, 2023 - 2:10 PM</p>
                                    <h1>US Futures Rise as Big-Tech Earnings Bolster Mood: Markets Wrap</h1>
                                    <p>(Bloomberg) -- US equity futures gained as strong earnings from tech majors Alphabet Inc. and Microsoft Corp. after the Wall Street close offered investors some reassurance amid continued concerns over the health of the economy.</p>
                                </a>
                            </div>
                            <Button href="#" className="red__mor">Read More</Button>
                        </div>


                        <div className="category_se">
                            <h1 className="tile_hed">Crypto</h1>
                            <div className="art_grf row">
                                <a href="https://ncx.cx/insights/438" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-453.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 26, 2023 - 12:38 PM</p>
                                    <h1>Microsoft Sees AI Reshaping Search as Google Calms Investors</h1>
                                    <p>(Bloomberg) -- Alphabet Inc.’s Google and Microsoft Corp., whose quarterly earnings each got a boost from their established search and cloud-computing businesses, used their time with investors to emphasize what’s next: artificial</p>
                                </a>
                                <a href="https://ncx.cx/insights/437" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-452.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 26, 2023 - 12:09 AM</p>
                                    <h1>Alphabet first quarter earnings top estimates, announces $70B stock buyback</h1>
                                    <p>Alphabet (GOOG, GOOGL) reported first quarter earnings on Tuesday that beat expectations on the top- and bottom-lines, while also authorizing a massive $70 billion stock buyback. Alphabet stock rose as much as 5% in after hours trading on</p>
                                </a>
                            </div>
                            <Button href="#" className="red__mor">Read More</Button>
                        </div>

                        <div className="category_se">
                            <h1 className="tile_hed">Markets</h1>
                            <div className="art_grf row">
                                <a href="https://ncx.cx/insights/433" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-448.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 25, 2023 - 6:31 AM</p>
                                    <h1>Stocks waver, dollar flat as investors weigh earnings, data</h1>
                                    <p>HONG KONG (Reuters) - Stocks fell broadly and the U.S. dollar also weakened early on Tuesday, reflecting investors' uncertainty in a busy week for corporate earnings and economic data.</p>
                                </a>
                                <a href="https://ncx.cx/insights/432" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-447.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 25, 2023 - 5:24 AM</p>
                                    <h1>Dow Jones Futures: First Republic Bank Crashes 20% On Unprecedented Deposit Flight</h1>
                                    <p>Dow Jones futures were little changed ahead of Tuesday's open, with a busy week of earnings results ahead that includes tech titans Google-parent Alphabet (GOOGL), Amazon (AMZN), Facebook-owner Meta Platforms (META) and</p>
                                </a>
                            </div>
                            <Button href="#" className="red__mor">Read More</Button>
                        </div>
                    </div>
                    <div className="col rght_br">
                        <div className="bardd"></div>
                    </div>
                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Forex</h1>
                            <div className="art_grf row">
                                <a href="https://ncx.cx/insights/433" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-448.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 25, 2023 - 6:31 AM</p>
                                    <h1>Stocks waver, dollar flat as investors weigh earnings, data</h1>
                                    <p>HONG KONG (Reuters) - Stocks fell broadly and the U.S. dollar also weakened early on Tuesday, reflecting investors' uncertainty in a busy week for corporate earnings and economic data.</p>
                                </a>
                                <a href="https://ncx.cx/insights/432" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-447.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 25, 2023 - 5:24 AM</p>
                                    <h1>Dow Jones Futures: First Republic Bank Crashes 20% On Unprecedented Deposit Flight</h1>
                                    <p>Dow Jones futures were little changed ahead of Tuesday's open, with a busy week of earnings results ahead that includes tech titans Google-parent Alphabet (GOOGL), Amazon (AMZN), Facebook-owner Meta Platforms (META) and</p>
                                </a>
                                <a href="https://ncx.cx/insights/432" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-447.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 25, 2023 - 5:24 AM</p>
                                    <h1>Dow Jones Futures: First Republic Bank Crashes 20% On Unprecedented Deposit Flight</h1>
                                    <p>Dow Jones futures were little changed ahead of Tuesday's open, with a busy week of earnings results ahead that includes tech titans Google-parent Alphabet (GOOGL), Amazon (AMZN), Facebook-owner Meta Platforms (META) and</p>
                                </a>
                            </div>
                            <Button href="#" className="red__mor">Read More</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Commodities</h1>
                            <div className="art_grf row">
                                <a href="https://ncx.cx/insights/433" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-448.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 25, 2023 - 6:31 AM</p>
                                    <h1>Stocks waver, dollar flat as investors weigh earnings, data</h1>
                                    <p>HONG KONG (Reuters) - Stocks fell broadly and the U.S. dollar also weakened early on Tuesday, reflecting investors' uncertainty in a busy week for corporate earnings and economic data.</p>
                                </a>
                                <a href="https://ncx.cx/insights/432" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-447.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 25, 2023 - 5:24 AM</p>
                                    <h1>Dow Jones Futures: First Republic Bank Crashes 20% On Unprecedented Deposit Flight</h1>
                                    <p>Dow Jones futures were little changed ahead of Tuesday's open, with a busy week of earnings results ahead that includes tech titans Google-parent Alphabet (GOOGL), Amazon (AMZN), Facebook-owner Meta Platforms (META) and</p>
                                </a>
                                <a href="https://ncx.cx/insights/432" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-447.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 25, 2023 - 5:24 AM</p>
                                    <h1>Dow Jones Futures: First Republic Bank Crashes 20% On Unprecedented Deposit Flight</h1>
                                    <p>Dow Jones futures were little changed ahead of Tuesday's open, with a busy week of earnings results ahead that includes tech titans Google-parent Alphabet (GOOGL), Amazon (AMZN), Facebook-owner Meta Platforms (META) and</p>
                                </a>
                            </div>
                            <Button href="#" className="red__mor">Read More</Button>
                        </div>
                    </div>

                    <div className="full__blog">
                        <div className="category_se">
                            <h1 className="tile_hed">Indices</h1>
                            <div className="art_grf row">
                                <a href="https://ncx.cx/insights/433" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-448.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 25, 2023 - 6:31 AM</p>
                                    <h1>Stocks waver, dollar flat as investors weigh earnings, data</h1>
                                    <p>HONG KONG (Reuters) - Stocks fell broadly and the U.S. dollar also weakened early on Tuesday, reflecting investors' uncertainty in a busy week for corporate earnings and economic data.</p>
                                </a>
                                <a href="https://ncx.cx/insights/432" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-447.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 25, 2023 - 5:24 AM</p>
                                    <h1>Dow Jones Futures: First Republic Bank Crashes 20% On Unprecedented Deposit Flight</h1>
                                    <p>Dow Jones futures were little changed ahead of Tuesday's open, with a busy week of earnings results ahead that includes tech titans Google-parent Alphabet (GOOGL), Amazon (AMZN), Facebook-owner Meta Platforms (META) and</p>
                                </a>
                                <a href="https://ncx.cx/insights/432" className="col">
                                    <div className="fdd-d"><img src="https://ncx.cx/images/ncx-blog-447.jpg" alt="art_pic"/></div>
                                    <p className="dat">Apr 25, 2023 - 5:24 AM</p>
                                    <h1>Dow Jones Futures: First Republic Bank Crashes 20% On Unprecedented Deposit Flight</h1>
                                    <p>Dow Jones futures were little changed ahead of Tuesday's open, with a busy week of earnings results ahead that includes tech titans Google-parent Alphabet (GOOGL), Amazon (AMZN), Facebook-owner Meta Platforms (META) and</p>
                                </a>
                            </div>
                            <Button href="#" className="red__mor">Read More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostListingSection;