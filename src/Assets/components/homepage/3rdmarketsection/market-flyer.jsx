import React from "react";
import Button from "@mui/material/Button";
import './fly.css';
import { CarouselProvider, Slider, Slide, DotGroup, Dot } from 'pure-react-carousel';

function MartFlyer()
{
    return(
        <div className="mart_fly">
            <div className="container">
                <div className="mart_row">
                    <CarouselProvider
                        visibleSlides={4}
                        totalSlides={12}
                        step={1}
                        naturalSlideWidth={300}
                        // naturalSlideHeight={250}
                        isIntrinsicHeight={true}
                        // hasMasterSpinner
                        loop
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >
                        <Slider>
                            <Slide index={0} className="akmal">
                                <div className="mkij mart1">
                                    <p className="tag_lst">
                                        New Listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Linear Finance <span>LINA/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={1} className="akmal">
                                <div className="mkij mart2">
                                    <p className="tag_lst">
                                        New Listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Ordinals Token <span>ODRI/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={2} className="akmal">
                                <div className="mkij mart3">
                                    <p className="tag_lst">
                                        Ethereum 2.0
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Buy stETH on Spot and <span>Earn 6% APR Yield</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={3} className="akmal">
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
                            <Slide index={4} className="akmal">
                                <div className="mkij mart5">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Algorand <span>ALGO/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={5} className="akmal">
                                <div className="mkij mart6">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">PEPE Token <span>PEPE/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={6} className="akmal">
                                <div className="mkij mart7">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Aptos <span>APT/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={7} className="akmal">
                                <div className="mkij mart8">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Kusama <span>KSM/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={8} className="akmal">
                                <div className="mkij mart9">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Floki Inu <span>FLOKI/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={9} className="akmal">
                                <div className="mkij mart10">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Harmony <span>ONE/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={10} className="akmal">
                                <div className="mkij mart11">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Shiba Inu <span>SHIB/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={11} className="akmal">
                                <div className="mkij mart12">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Yearn.Finance <span>YFI/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <DotGroup disableActiveDots={false} showAsSelectedForCurrentSlideOnly={true} />
                    </CarouselProvider>

                </div>

                <div id="market__flyes" className="sbff">
                    <CarouselProvider
                            visibleSlides={1}
                            totalSlides={12}
                            step={1}
                            naturalSlideWidth={300}
                            // naturalSlideHeight={250}
                            isIntrinsicHeight={true}
                            // hasMasterSpinner
                            loop
                            isPlaying={true}
                            interval={3000}
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
                                        <h1 className="title_lst">Linear Finance <span>LINA/USDT</span></h1>
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
                                        <h1 className="title_lst">Ordinals Token <span>ODRI/USDT</span></h1>
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
                                        <h1 className="title_lst">Buy stETH on Spot and <span>Earn 6% APR Yield</span></h1>
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
                            <Slide index={4} className="bgrvs__dd">
                                <div className="mkij mart5">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Algorand <span>ALGO/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={5} className="bgrvs__dd">
                                <div className="mkij mart6">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">PEPE Token <span>PEPE/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={6} className="bgrvs__dd">
                                <div className="mkij mart7">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Aptos <span>APT/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={7} className="bgrvs__dd">
                                <div className="mkij mart8">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Kusama <span>KSM/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={8} className="bgrvs__dd">
                                <div className="mkij mart9">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Floki Inu <span>FLOKI/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={9} className="bgrvs__dd">
                                <div className="mkij mart10">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Harmony <span>ONE/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={10} className="bgrvs__dd">
                                <div className="mkij mart11">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Shiba Inu <span>SHIB/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={11} className="bgrvs__dd">
                                <div className="mkij mart12">
                                    <p className="tag_lst">
                                        New listing
                                    </p>
                                    <div className="nhqwe">
                                        <h1 className="title_lst">Yearn.Finance <span>YFI/USDT</span></h1>
                                        <Button className="trd_btn" href="https://trade.ncx.cx/">Trade</Button>
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