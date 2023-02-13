import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import './flyer.css';
import { ReactComponent as CardArrow } from '../../../images/ncx-cardarrow.svg';
import Flyer1 from '../../../images/ncx-flyer1.png';
import Flyer2 from '../../../images/ncx-flyer2.png';
import Flyer3 from '../../../images/ncx-flyer3.png';
import Flyer4 from '../../../images/ncx-flyer4.png';
import Flyer5 from '../../../images/ncx-flyer5.png';
import Flyer6 from '../../../images/ncx-flyer6.png';
import Flyer7 from '../../../images/ncx-flyer7.png';
import Flyer8 from '../../../images/ncx-flyer8.png';
import Flyer9 from '../../../images/ncx-flyer9.png';
import Flyer10 from '../../../images/ncx-flyer10.png';
import Flyer11 from '../../../images/ncx-flyer11.png';
import Flyer12 from '../../../images/ncx-flyer12.png';

function MarketSlider()
{
    return(
        <div id="marketslider">
            <CarouselProvider
                visibleSlides={4}
                totalSlides={12}
                dragStep={4}
                naturalSlideWidth={300}
                naturalSlideHeight={500}
                // hasMasterSpinner
                // isPlaying={true}
                // interval={1200}
                orientation="horizontal"
                infinite
                loop
                moveThreshol={0.5}
                transition="all 1s"
                playDirection="forward"
            >
                <Slider className="slider">
                    <Slide index={0}>
                        <img src={Flyer1} alt="NCX Market Flyers" />
                    </Slide>
                    <Slide index={1}>
                        <img src={Flyer2} alt="NCX Market Flyers" />
                    </Slide>
                    <Slide index={2}>
                        <img src={Flyer3} alt="NCX Market Flyers" />
                    </Slide>
                    <Slide index={3}>
                        <img src={Flyer4} alt="NCX Market Flyers" />
                    </Slide>
                    <Slide index={4}>
                        <img src={Flyer5} alt="NCX Market Flyers" />
                    </Slide>
                    <Slide index={5}>
                        <img src={Flyer6} alt="NCX Market Flyers" />
                    </Slide>
                    <Slide index={6}>
                        <img src={Flyer7} alt="NCX Market Flyers" />
                    </Slide>
                    <Slide index={7}>
                        <img src={Flyer8} alt="NCX Market Flyers" />
                    </Slide>
                    <Slide index={8}>
                        <img src={Flyer9} alt="NCX Market Flyers" />
                    </Slide>
                    <Slide index={9}>
                        <img src={Flyer10} alt="NCX Market Flyers" />
                    </Slide>
                    <Slide index={10}>
                        <img src={Flyer11} alt="NCX Market Flyers" />
                    </Slide>
                    <Slide index={11}>
                        <img src={Flyer12} alt="NCX Market Flyers" />
                    </Slide>
                </Slider>
                <ButtonBack className="buttonBack"><CardArrow /></ButtonBack>
                <ButtonNext className="buttonNext"><CardArrow /></ButtonNext>
            </CarouselProvider>
        </div>
    )
}
export default MarketSlider;