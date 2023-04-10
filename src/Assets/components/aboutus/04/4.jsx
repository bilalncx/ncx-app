import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AboutAccord from './4faq';
import './4.css';
import { ReactComponent as AboutLogo } from '../../../images/about_logo.svg';

function AboutAccordian()
{
    return(
        <div id="accord" className="accord-sect">
            <div className="container">
                <div className="row">
                    <AnimationOnScroll className="trading_col" animateIn="animate__fadeIn">
                        <div className="about_logo">
                            <AboutLogo />
                            <h1>Trading Solutions</h1>
                        </div>
                    </AnimationOnScroll>
                    <div className="accord-about">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <AboutAccord />
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAccordian;