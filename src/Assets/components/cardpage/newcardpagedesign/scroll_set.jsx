import React from "react";
import './style.css';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import Promo1 from '../../../images/promo-1.png';
import Promo2 from '../../../images/promo-2.png';
import Promo3 from '../../../images/promo-3.png';
import Promo4 from '../../../images/promo-4.png';
import Promo5 from '../../../images/promo-5.png';
import Promo6 from '../../../images/promo-6.png';
import Promo7 from '../../../images/promo-7.png';
import Promo8 from '../../../images/promo-8.png';
import Promo9 from '../../../images/promo-9.png';
import Promo10 from '../../../images/promo-10.png';



function CardLogoSlider()
{
    return(
        <div className="slvs">
            <div className="inservv">
                <CarouselProvider
                    visibleSlides={7}
                    totalSlides={10}
                    step={1}
                    // naturalSlideWidth={300}
                    // naturalSlideHeight={500}
                    // hasMasterSpinner
                    isPlaying={true}
                    interval={3000}
                    orientation="horizontal"
                    infinite
                    playDirection="forward"
                >
                    <Slider className="csver">
                        <Slide index={0}>
                            <img src={Promo1} alt="ncx"/>
                        </Slide>
                        <Slide index={1}>
                            <img src={Promo2} alt="ncx"/>
                        </Slide>
                        <Slide index={2}>
                            <img src={Promo3} alt="ncx"/>
                        </Slide>
                        <Slide index={3}>
                            <img src={Promo4} alt="ncx"/>
                        </Slide>
                        <Slide index={4}>
                            <img src={Promo5} alt="ncx"/>
                        </Slide>
                        <Slide index={5}>
                            <img src={Promo6} alt="ncx"/>
                        </Slide>
                        <Slide index={6}>
                            <img src={Promo7} alt="ncx"/>
                        </Slide>
                        <Slide index={7}>
                            <img src={Promo8} alt="ncx"/>
                        </Slide>
                        <Slide index={8}>
                            <img src={Promo9} alt="ncx"/>
                        </Slide>
                        <Slide index={9}>
                            <img src={Promo10} alt="ncx"/>
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    )
}
export default CardLogoSlider;