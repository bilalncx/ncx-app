import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ReactComponent as CardArrow } from '../../images/ncx-cardarrow.svg';

function ModalMarketPage()
{
    return(
        <div className="support_articles">
            <CarouselProvider
                id="artiles_faq"
                visibleSlides={1}
                totalSlides={7}
                dragStep={1}
                // naturalSlideWidth={264}
                // naturalSlideHeight={300}
                isPlaying={true}
                interval={4000}
                orientation="horizontal"
                infinite
                loop
                moveThreshol={0.5}
                transition="all 4s"
                playDirection="forward"
            >
                <Slider className="slider">
                    <Slide>
                        <div className="faq-mod">
                            <p>How to Sign Up via Desktop</p>
                            <a href="#">FAQs</a>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="faq-mod">
                            <p>How to Sign Up via Mobile App</p>
                            <a href="#">FAQs</a>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="faq-mod">
                            <p>How to Add Two-Factor Authentication</p>
                            <a href="#">FAQs</a>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="faq-mod">
                            <p>How to Change Password</p>
                            <a href="#">FAQs</a>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="faq-mod">
                            <p>How to Reset Password</p>
                            <a href="#">FAQs</a>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="faq-mod">
                            <p>How to Add Anti Phishing Cod</p>
                            <a href="#">FAQs</a>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="faq-mod">
                            <p>How to Add Address Whitelisting</p>
                            <a href="#">FAQs</a>
                        </div>
                    </Slide>
                </Slider>
                <ButtonBack className="moveback"><CardArrow /></ButtonBack>
                <ButtonNext className="movenxt"><CardArrow /></ButtonNext>
            </CarouselProvider>
        </div>
    )
}
export default ModalMarketPage;