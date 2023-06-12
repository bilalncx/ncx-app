import React from "react";
import Button from "@mui/material/Button";
import './fly.css';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

function MartFlyer()
{
    return(
        <div className="mart_fly">
            <div className="container">
                <div className="mart_row">
                    <div className="mkij mart1">
                        <p className="tag_lst">
                            New Listing
                        </p>
                        <div className="nhqwe">
                            <h1 className="title_lst">Linear Finance LINA/USDT</h1>
                            <Button className="trd_btn" href="https://trade.ncx.cx">Trade</Button>
                        </div>
                    </div>

                    <div className="mkij mart2">
                        <p className="tag_lst">
                            New Listing
                        </p>
                        <div className="nhqwe">
                            <h1 className="title_lst">Ordinals Token ODRI/USDT</h1>
                            <Button className="trd_btn" href="https://trade.ncx.cx">Trade</Button>
                        </div>
                    </div>

                    <div className="mkij mart3">
                        <p className="tag_lst">
                            Ethereum 2.0
                        </p>
                        <div className="nhqwe">
                            <h1 className="title_lst">Buy stETH on Spot and Earn 6% APR Yield</h1>
                            <Button className="trd_btn" href="https://trade.ncx.cx">Trade</Button>
                        </div>
                    </div>

                    <div className="mkij mart4">
                        <p className="tag_lst">
                            Referrals
                        </p>
                        <div className="nhqwe">
                            <h1 className="title_lst">Referrals to Rewards <span>Earn free 1,000 NCXT</span></h1>
                            <Button className="trd_btn" href="https://ncx.cx/rewards">Rewards</Button>
                        </div>
                    </div>
                </div>

                <div id="market__flyes" className="sbff">
                    <CarouselProvider
                            visibleSlides={1}
                            totalSlides={4}
                            step={1}
                            naturalSlideWidth={300}
                            // naturalSlideHeight={250}
                            isIntrinsicHeight={true}
                            // hasMasterSpinner
                            loop
                            isPlaying={true}
                            interval={2000}
                            orientation="horizontal"
                            infinite
                            playDirection="forward"
                        >
                        
                        <Slider>
                            <Slide index={0} className="bgrvs__dd">
                                <div className="mkij mart1">
                                    <p className="tag_lst">
                                        New Listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Linear Finance LINA/USDT</h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={1} className="bgrvs__dd">
                                <div className="mkij mart2">
                                    <p className="tag_lst">
                                        New Listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Ordinals Token ODRI/USDT</h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={2} className="bgrvs__dd">
                                <div className="mkij mart3">
                                    <p className="tag_lst">
                                        Ethereum 2.0
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Buy stETH on Spot and Earn 6% APR Yield</h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={3} className="bgrvs__dd">
                                <div className="mkij mart4">
                                    <p className="tag_lst">
                                        Referrals
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Referrals to Rewards <span>Earn free 1,000 NCXT</span></h1>
                                        <Button className="trd_btn" href="https://ncx.cx/rewards">Rewards</Button>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>

                        <DotGroup />
                        
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}

export default MartFlyer;