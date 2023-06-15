import React from "react";
import '../../indices/04/4.css';
import GlobalMarket1 from '../../../images/travel-icon.png';
import GlobalMarket2 from '../../../images/purchase-icon.png';
import GlobalMarket3 from '../../../images/fraud-icon.png';
import GlobalMarket4 from '../../../images/luggage-icon.png';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

function AllOfNeeds()
{
    return(
        <div className="global__mart ncx__card__page">
            <div className="container">
                <h1 className="az__ml__mm">Premium Protection for all your needs</h1>
                <div className="global__row row">
                    <div className="col">
                        <img src={GlobalMarket1} alt="global"/>
                        <h2>Travel Protection</h2>
                        <p>World class Travel Protection with NCX. Get compensated up to $800 per flight if your flight is delayed or cancelled.</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket2} alt="global"/>
                        <h2>Purchase Protection</h2>
                        <p>We’ll compensate you for up to $2,500 per year (or up to $1,250 per article) in lost or damaged goods purchased with your NCX Card.</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket3} alt="global"/>
                        <h2>Fraud Protection</h2>
                        <p>We’ll reimburse you up to $3,000 per year in the event your NCX Card is stolen or lost and used to make fraudulent purchases.</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket4} alt="global"/>
                        <h2>Luggage Protection</h2>
                        <p>We got you covered. Get compensated up to $1,000 if ever your luggage is lost, damaged or stolen.</p>
                    </div>
                </div>

                <div className="mbl__sec__cr">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={4}
                        step={1}
                        naturalSlideWidth={300}
                        isIntrinsicHeight={true}
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >
                        <Slider>
                            <Slide index={0} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket1} alt="global"/>
                                    <h2>Travel Protection</h2>
                                    <p>World class Travel Protection with NCX. Get compensated up to $800 per flight if your flight is delayed or cancelled.</p>
                                </div>
                            </Slide>
                            <Slide index={1} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket2} alt="global"/>
                                    <h2>Purchase Protection</h2>
                                    <p>We’ll compensate you for up to $2,500 per year (or up to $1,250 per article) in lost or damaged goods purchased with your NCX Card.</p>
                                </div>
                            </Slide>
                            <Slide index={2} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket3} alt="global"/>
                                    <h2>Fraud Protection</h2>
                                    <p>We’ll reimburse you up to $3,000 per year in the event your NCX Card is stolen or lost and used to make fraudulent purchases.</p>
                                </div>
                            </Slide>
                            <Slide index={3} className="mnl__cx">
                                <div className="azx">
                                    <img src={GlobalMarket4} alt="global"/>
                                    <h2>Luggage Protection</h2>
                                    <p>We got you covered. Get compensated up to $1,000 if ever your luggage is lost, damaged or stolen.</p>
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

export default AllOfNeeds;