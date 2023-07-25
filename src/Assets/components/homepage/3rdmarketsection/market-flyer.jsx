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
                                        <Button className="trd_btn" href="https://exchange.ncx.cx/trade">Trade</Button>
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
                                        <Button className="trd_btn" href="https://exchange.ncx.cx/trade">Trade</Button>
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
                                        <Button className="trd_btn" href="https://exchange.ncx.cx/trade">Trade</Button>
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
                                        <Button className="trd_btn" href="https://exchange.ncx.cx/trade/">Trade</Button>
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
                                        <Button className="trd_btn" href="https://exchange.ncx.cx/trade/">Trade</Button>
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
                                        <Button className="trd_btn" href="https://exchange.ncx.cx/trade/">Trade</Button>
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
                                        <Button className="trd_btn" href="https://exchange.ncx.cx/trade/">Trade</Button>
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
                                        <Button className="trd_btn" href="https://exchange.ncx.cx/trade/">Trade</Button>
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
                                        <Button className="trd_btn" href="https://exchange.ncx.cx/trade/">Trade</Button>
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
                                        <Button className="trd_btn" href="https://exchange.ncx.cx/trade/">Trade</Button>
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
                                        <Button className="trd_btn" href="https://exchange.ncx.cx/trade/">Trade</Button>
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
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689412601/mban1_fjjzyw.png" alt="ncx"/>
                            </Slide>
                            <Slide index={1} className="bgrvs__dd">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689412601/mban2_ardqbh.png" alt="ncx"/>
                            </Slide>
                            <Slide index={2} className="bgrvs__dd">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689412601/mban3_ljjkym.png" alt="ncx"/>
                            </Slide>
                            <Slide index={3} className="bgrvs__dd">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689412601/mban4_jkslkr.png" alt="ncx"/> 
                            </Slide>
                            <Slide index={4} className="bgrvs__dd">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689412601/mban5_xzfykg.png" alt="ncx"/>
                            </Slide>
                            <Slide index={5} className="bgrvs__dd">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689412601/mban6_gtcnwm.png" alt="ncx"/>
                            </Slide>
                            <Slide index={6} className="bgrvs__dd">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689412601/mban7_cbaew1.png" alt="ncx"/>
                            </Slide>
                            <Slide index={7} className="bgrvs__dd">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689412601/mban8_due02u.png" alt="ncx"/>
                            </Slide>
                            <Slide index={8} className="bgrvs__dd">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689412601/mban9_qdh3b2.png" alt="ncx"/>
                            </Slide>
                            <Slide index={9} className="bgrvs__dd">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689412602/mban10_ohhwnz.png" alt="ncx"/>
                            </Slide>
                            <Slide index={10} className="bgrvs__dd">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689412601/mban11_a4gb6n.png" alt="ncx"/>
                            </Slide>
                            <Slide index={11} className="bgrvs__dd">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689412601/mban12_qmodde.png" alt="ncx"/>
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