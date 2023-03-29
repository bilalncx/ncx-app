import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ReactComponent as CardArrow } from '../../../images/roadmap-next.svg';
import './roadmap_slider.css';

function RoadmapSlider()
{
    return(
        <div className="roadMap_slider">
            <div className="container">
                <h1 className="road-head">Roadmap</h1>
                <CarouselProvider
                    className="desktop"
                    visibleSlides={4}
                    totalSlides={5}
                    step={1}
                    naturalSlideWidth={300}
                    naturalSlideHeight={500}
                    // hasMasterSpinner
                    // isPlaying={true}
                    // interval={3000}
                    // orientation="horizontal"
                    // infinite
                    // playDirectio="forward"
                    >
                    <Slider className="road_slider">
                        <Slide index={0}>
                            <div className="single_map">
                                <h3>Q1 2023</h3>
                                <div className="active border-map"></div>
                                <h3>Jan - Apr 2023</h3>
                                <p>Creation of a decentralize martketplace to neural network adjacent coefficients.</p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="single_map">
                                <h3>Q1 2023</h3>
                                <div className="active border-map"></div>
                                <h3>Jul - Aug 2023</h3>
                                <p>Start of the ICO Crypto Platform Development and Introduction of advertiser auctions</p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="single_map">
                                <h3>Q1 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>Creation of a decentralize martketplace to neural network adjacent coefficients.</p>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="single_map">
                                <h3>Q1 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q4 2023</h3>
                                <p>Launch of the mobile Best versions of the Publisher application and Press Tour.</p>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="single_map">
                                <h3>Q1 2022</h3>
                                <div className="border-map"></div>
                                <h3>January 2022</h3>
                                <p>Product Development Stage Platform Backend and Software Development</p>
                            </div>
                        </Slide>
                    </Slider>
                    <ButtonBack className="tokenback"><CardArrow /></ButtonBack>
                    <ButtonNext className="tokennext"><CardArrow /></ButtonNext>
                </CarouselProvider>
                <CarouselProvider
                    className="mobile"
                    visibleSlides={2}
                    totalSlides={5}
                    step={1}
                    naturalSlideWidth={300}
                    naturalSlideHeight={500}
                    // hasMasterSpinner
                    // isPlaying={true}
                    // interval={3000}
                    // orientation="horizontal"
                    // infinite
                    // playDirectio="forward"
                    >
                    <Slider className="road_slider">
                        <Slide index={0}>
                            <div className="single_map">
                                <h3>Q1 2023</h3>
                                <div className="active border-map"></div>
                                <h3>Jan - Apr 2023</h3>
                                <p>Creation of a decentralize martketplace to neural network adjacent coefficients.</p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="single_map">
                                <h3>Q1 2023</h3>
                                <div className="active border-map"></div>
                                <h3>Jul - Aug 2023</h3>
                                <p>Start of the ICO Crypto Platform Development and Introduction of advertiser auctions</p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="single_map">
                                <h3>Q1 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>Creation of a decentralize martketplace to neural network adjacent coefficients.</p>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="single_map">
                                <h3>Q1 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q4 2023</h3>
                                <p>Launch of the mobile Best versions of the Publisher application and Press Tour.</p>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="single_map">
                                <h3>Q1 2022</h3>
                                <div className="border-map"></div>
                                <h3>January 2022</h3>
                                <p>Product Development Stage Platform Backend and Software Development</p>
                            </div>
                        </Slide>
                    </Slider>
                    <ButtonBack className="tokenback"><CardArrow /></ButtonBack>
                    <ButtonNext className="tokennext"><CardArrow /></ButtonNext>
                </CarouselProvider>
            </div>
        </div>
    )
}
export default RoadmapSlider;