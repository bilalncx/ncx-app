import React from "react";
import Button from "@mui/material/Button";
import './fly.css';
import { CarouselProvider, Slider, Slide, DotGroup, Dot } from 'pure-react-carousel';
import MblMartBan1 from '../../../images/mban1.png';
import MblMartBan2 from '../../../images/mban2.png';
import MblMartBan3 from '../../../images/mban3.png';
import MblMartBan4 from '../../../images/mban4.png';
import MblMartBan5 from '../../../images/mban5.png';
import MblMartBan6 from '../../../images/mban6.png';
import MblMartBan7 from '../../../images/mban7.png';
import MblMartBan8 from '../../../images/mban8.png';
import MblMartBan9 from '../../../images/mban9.png';
import MblMartBan10 from '../../../images/mban10.png';
import MblMartBan11 from '../../../images/mban11.png';
import MblMartBan12 from '../../../images/mban12.png';

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
                                <img src={MblMartBan1} alt="ncx"/>
                            </Slide>
                            <Slide index={1} className="bgrvs__dd">
                                <img src={MblMartBan2} alt="ncx"/>
                            </Slide>
                            <Slide index={2} className="bgrvs__dd">
                                <img src={MblMartBan3} alt="ncx"/>
                            </Slide>
                            <Slide index={3} className="bgrvs__dd">
                                <img src={MblMartBan4} alt="ncx"/> 
                            </Slide>
                            <Slide index={4} className="bgrvs__dd">
                                <img src={MblMartBan5} alt="ncx"/>
                            </Slide>
                            <Slide index={5} className="bgrvs__dd">
                                <img src={MblMartBan6} alt="ncx"/>
                            </Slide>
                            <Slide index={6} className="bgrvs__dd">
                                <img src={MblMartBan7} alt="ncx"/>
                            </Slide>
                            <Slide index={7} className="bgrvs__dd">
                                <img src={MblMartBan8} alt="ncx"/>
                            </Slide>
                            <Slide index={8} className="bgrvs__dd">
                                <img src={MblMartBan9} alt="ncx"/>
                            </Slide>
                            <Slide index={9} className="bgrvs__dd">
                                <img src={MblMartBan10} alt="ncx"/>
                            </Slide>
                            <Slide index={10} className="bgrvs__dd">
                                <img src={MblMartBan11} alt="ncx"/>
                            </Slide>
                            <Slide index={11} className="bgrvs__dd">
                                <img src={MblMartBan12} alt="ncx"/>
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