import React from "react";
import './style.css';
import Button from "@mui/material/Button";
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import Promo1 from '../../images/promo-1.png';
import Promo2 from '../../images/promo-2.png';
import Promo3 from '../../images/promo-3.png';
import Promo4 from '../../images/promo-4.png';
import Promo5 from '../../images/promo-5.png';
import Promo6 from '../../images/promo-6.png';
import Promo7 from '../../images/promo-7.png';
import Promo8 from '../../images/promo-8.png';
import Promo9 from '../../images/promo-9.png';
import Promo10 from '../../images/promo-10.png';

function DigitalBusinessAcnt()
{
    return(
        <div className="dig-B">
            <div className="qwm one">
                <div className="container">
                    <div className="row caz">
                        <div className="col">
                            <h2>Optimize your business <br/>with NCX Digital Assets<br/>Business Account </h2>
                            <p>Incorporate Digital Assets into your corporate legal structure as part of a strategic investment approach. Mitigate tax liability by formally integrating cryptocurrency investments into your long-term business strategy and company balance sheet. Adhere to tax regulations by ensuring timely filing of Profit and Loss (PNL) reports.</p>
                            <Button href="#">Compare our Plans</Button>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="partner va">
                    <CarouselProvider
                        visibleSlides={6}
                        totalSlides={10}
                        step={1}
                        naturalSlideWidth={300}
                        naturalSlideHeight={150}
                        // hasMasterSpinner
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >

                    <Slider>
                        <Slide index={0} className="qsfg">
                            <img src={Promo1} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={1} className="qsfg">
                            <img src={Promo2} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={2} className="qsfg">
                            <img src={Promo3} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={3} className="qsfg forth">
                            <img src={Promo4} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={4} className="qsfg">
                            <img src={Promo5} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={5} className="qsfg">
                            <img src={Promo6} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={6} className="qsfg">
                            <img src={Promo7} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={7} className="qsfg eght">
                            <img src={Promo8} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={8} className="qsfg">
                            <img src={Promo9} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={9} className="qsfg">
                            <img src={Promo10} alt="ncx-partner"/>
                        </Slide>

                    </Slider>

                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}
export default DigitalBusinessAcnt;