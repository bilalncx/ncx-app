import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXLogo from '../../../images/ncx-black-logo.svg';
import CardSlide from './cardslidercomponent';

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
                <CardSlide />
            </div>
        </div>
    )
}
export default HomepageCardSection;