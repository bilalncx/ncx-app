import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXLogo from '../../../images/ncx-black-logo.svg';
import './cardslider.css';
// import CardSlide from './cardslidercomponent';
// import CardHorizontal from '..';
// import './horixx.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import WhiteCard from '../../../images/ncx-whitecard.png';
import BlackCard from '../../../images/ncx-blackcard.png';
import WhiteGold from '../../../images/ncx-whitegoldcard.png';
import Platinum from '../../../images/ncx-platniumcard.png';
import { ReactComponent as CardArrow } from '../../../images/ncx-cardarrow.svg';
  

function HomepageCardSection()
{
    return(
        <div className="ncxcarddiv">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <div className="ncx-equities">
                        <img className="ncx-blacklogo" src={NCXLogo} alt="ncx-main-logo" />
                        <p>Card</p>
                    </div>
                </AnimationOnScroll>
            </div>
            <div id="cardarticles">
                <div id="NCXCreditCardSlider">
                    <CarouselProvider
                        visibleSlides={3}
                        totalSlides={4}
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
                    <Slider className="slider">
                        <Slide index={0}>
                            <article className='ncxcard01'>
                                <img className='cardimg01' src={WhiteCard} alt="NCX Black Card" />
                                <div className='cardtitle'>
                                    <h1>NCX<span>Select</span></h1>
                                </div>
                                <div className='card-features'>
                                    <div><p>Monthly Limit<span>$10,000</span></p></div>
                                    <div><p>ATM Withdrawals<span>$2,500 Monthly</span></p></div>
                                    <div><p>Free Premium Metal Card</p></div>
                                    <div><p>24/7 Support</p></div>
                                    <a href="https://ncx.cx/" className='card-learnmore'>
                                        Learn More
                                    </a>
                                </div>
                            </article>
                        </Slide>
                        <Slide index={1}>
                            <article className='ncxcard01'>
                                <img className='cardimg01' src={Platinum} alt="NCX Black Card" />
                                <div className='cardtitle'>
                                    <h1>NCX<span>Platinum</span></h1>
                                </div>
                                <div className='card-features'>
                                    <div><p>Monthly Limit<span>$25,000</span></p></div>
                                    <div><p>ATM Withdrawals<span>$5,000 Monthly</span></p></div>
                                    <div><p>Trading Fee Discount<span>10%</span></p></div>
                                    <div><p>Free Wire Transfer</p></div>
                                    <a href="https://ncx.cx/" className='card-learnmore'>
                                        Learn More
                                    </a>
                                </div>
                            </article>
                        </Slide>
                        <Slide index={2}>
                            <article className='ncxcard01'>
                                <img className='cardimg01' src={WhiteGold} alt="NCX Black Card" />
                                <div className='cardtitle'>
                                    <h1>NCX<span>Gold</span></h1>
                                </div>
                                <div className='card-features'>
                                    <div><p>Monthly Limit<span>$50,000</span></p></div>
                                    <div><p>ATM Withdrawals<span>$10,000 Monthly</span></p></div>
                                    <div><p>Trading Fee Discount<span>15%</span></p></div>
                                    <div><p>Free Premium Metal Card</p></div>
                                    <a href="https://ncx.cx/" className='card-learnmore'>
                                        Learn More
                                    </a>
                                </div>
                            </article>
                        </Slide>
                        <Slide index={3}>
                            <article className='ncxcard01'>
                                <img className='cardimg01' src={BlackCard} alt="NCX Black Card" />
                                <div className='cardtitle'>
                                    <h1>NCX<span>Black</span></h1>
                                </div>
                                <div className='card-features'>
                                    <div><p>Monthly Limit<span>$100,000</span></p></div>
                                    <div><p>ATM Withdrawals<span>$15,000 Monthly</span></p></div>
                                    <div><p>Trading Fee Discount<span>20%</span></p></div>
                                    <div><p>Free<span>Spotify</span> Subscription</p></div>
                                    <a href="https://ncx.cx/" className='card-learnmore'>
                                        Learn More
                                    </a>
                                </div>
                            </article>
                        </Slide>
                    </Slider>
                    <ButtonBack className="buttonBack"><CardArrow /></ButtonBack>
                    <ButtonNext className="buttonNext"><CardArrow /></ButtonNext>
                    </CarouselProvider>
                </div>
                <div id="NCXCreditCardSlider" className="mobile-ss">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={4}
                        step={1}
                        // naturalSlideWidth={300}
                        // naturalSlideHeight={500}
                        // hasMasterSpinner
                        // isPlaying={true}
                        // interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirectio="forward"
                    >
                    <Slider className="slider">
                        <Slide index={0}>
                            <article className='ncxcard01'>
                                <img className='cardimg01' src={WhiteCard} alt="NCX Black Card" />
                                <div className='cardtitle'>
                                    <h1>NCX<span>Select</span></h1>
                                </div>
                                <div className='card-features'>
                                    <div><p>Monthly Limit<span>$10,000</span></p></div>
                                    <div><p>ATM Withdrawals<span>$2,500 Monthly</span></p></div>
                                    <div><p>Free Premium Metal Card</p></div>
                                    <div><p>24/7 Support</p></div>
                                    <a href="https://ncx.cx/" className='card-learnmore'>
                                        Learn More
                                    </a>
                                </div>
                            </article>
                        </Slide>
                        <Slide index={1}>
                            <article className='ncxcard01'>
                                <img className='cardimg01' src={Platinum} alt="NCX Black Card" />
                                <div className='cardtitle'>
                                    <h1>NCX<span>Platinum</span></h1>
                                </div>
                                <div className='card-features'>
                                    <div><p>Monthly Limit<span>$25,000</span></p></div>
                                    <div><p>ATM Withdrawals<span>$5,000 Monthly</span></p></div>
                                    <div><p>Trading Fee Discount<span>10%</span></p></div>
                                    <div><p>Free Wire Transfer</p></div>
                                    <a href="https://ncx.cx/" className='card-learnmore'>
                                        Learn More
                                    </a>
                                </div>
                            </article>
                        </Slide>
                        <Slide index={2}>
                            <article className='ncxcard01'>
                                <img className='cardimg01' src={WhiteGold} alt="NCX Black Card" />
                                <div className='cardtitle'>
                                    <h1>NCX<span>Gold</span></h1>
                                </div>
                                <div className='card-features'>
                                    <div><p>Monthly Limit<span>$50,000</span></p></div>
                                    <div><p>ATM Withdrawals<span>$10,000 Monthly</span></p></div>
                                    <div><p>Trading Fee Discount<span>15%</span></p></div>
                                    <div><p>Free Premium Metal Card</p></div>
                                    <a href="https://ncx.cx/" className='card-learnmore'>
                                        Learn More
                                    </a>
                                </div>
                            </article>
                        </Slide>
                        <Slide index={3}>
                            <article className='ncxcard01'>
                                <img className='cardimg01' src={BlackCard} alt="NCX Black Card" />
                                <div className='cardtitle'>
                                    <h1>NCX<span>Black</span></h1>
                                </div>
                                <div className='card-features'>
                                    <div><p>Monthly Limit<span>$100,000</span></p></div>
                                    <div><p>ATM Withdrawals<span>$15,000 Monthly</span></p></div>
                                    <div><p>Trading Fee Discount<span>20%</span></p></div>
                                    <div><p>Free<span>Spotify</span> Subscription</p></div>
                                    <a href="https://ncx.cx/" className='card-learnmore'>
                                        Learn More
                                    </a>
                                </div>
                            </article>
                        </Slide>
                    </Slider>
                    <ButtonBack className="buttonBack"><CardArrow /></ButtonBack>
                    <ButtonNext className="buttonNext"><CardArrow /></ButtonNext>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}
export default HomepageCardSection;