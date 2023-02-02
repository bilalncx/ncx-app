import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {ReactComponent as NCXLogo} from '../../../images/NCX-logo.svg';
import CardSlide from './cardslidercomponent';

function HomepageCardSection()
{
    return(
        <div className="ncxcarddiv">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <div className="ncx-equities">
                        <NCXLogo />
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