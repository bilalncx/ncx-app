import { AnimationOnScroll } from 'react-animation-on-scroll';
import  React from "react";
import '../../homepage/8thgradientsection/gradient.css';
import Button from "@mui/material/Button";
import { ReactComponent as AmbassadorArrow } from '../../../images/ncx-ambassador_arrow.svg';

function Home8thGradientSection(){
    return(
        <div className="gradient">
            <div className="container">
                <h1 className='privileges_head'>Other Privileges</h1>
                <div className="gradient-bar">
                    <AnimationOnScroll animateIn="animate__slideInLeft">
                        <div className="gradientbar"></div>
                    </AnimationOnScroll>
                </div>
                <div className="row gradient-text">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-one">
                            <h3>01</h3>
                            <h1>Exclusive Benefits</h1>
                            <p>40% - 60% Commission Rate , Branding Support, Joint Campaign, Partnership Announcement</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-two">
                            <h3>02</h3>
                            <h1>Official Support</h1>
                            <p>Quality content created by NCX Ambassadors will be supported by NCX’s official and external channels</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-three">
                            <h3>03</h3>
                            <h1>VIP Privileges</h1>
                            <p>VIP Passes to NCX Sponsored Events, Tournaments and Conferences</p>
                        </AnimationOnScroll>
                    </div>
                </div>

                <div className="become_an_ambassador">
                    <h1>Become NCX Ambassador</h1>
                    <div className="ambassador_row">
                        <div className="col one">
                            <h1>1</h1>
                            <p>Click to “Apply for NCX Ambassador”</p>
                        </div>
                        <div className="col two">
                            <AmbassadorArrow />
                        </div>
                        <div className="col three">
                            <h1>2</h1>
                            <p>Click to “Apply for NCX Ambassador”</p>
                        </div>
                        <div className="col four">
                            <AmbassadorArrow />
                        </div>
                        <div className="col five">
                            <h1>3</h1>
                            <p>Click to “Apply for NCX Ambassador”</p>
                        </div>
                    </div>
                    <Button className="referral_applynow" href="mailto:support@ncx.cx">Apply Now</Button>
                </div>
            </div>
        </div>
    )
}
export default Home8thGradientSection;