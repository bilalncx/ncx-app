import React from "react";
import './partner.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as AboutLogo } from '../../../images/about_logo.svg';
import { ReactComponent as Partnership1 } from '../../../images/ncx-part1.svg';
import { ReactComponent as Partnership2 } from '../../../images/ncx-part2.svg';
import { ReactComponent as Partnership3 } from '../../../images/ncx-part3.svg';
import { ReactComponent as Partnership4 } from '../../../images/ncx-part4.svg';
import { ReactComponent as Partnership5 } from '../../../images/ncx-part5.svg';
import { ReactComponent as Partnership6 } from '../../../images/ncx-part6.svg';
import { ReactComponent as Partnership7 } from '../../../images/ncx-part7.svg';
import { ReactComponent as Partnership8 } from '../../../images/ncx-part8.svg';
import Partnership9 from '../../../images/ncx-part9.png';
import { ReactComponent as Partnership10 } from '../../../images/ncx-part10.svg';

function NCXPartnerships()
{
    return(
        <div className="ncx-partnerships">
            <div className="container">
                <AnimationOnScroll className="trading_col" animateIn="animate__fadeIn">
                    <div className="about_logo">
                        <AboutLogo />
                        <h1>Partnerships</h1>
                    </div>
                </AnimationOnScroll>
                <div className="partnerships row">
                    <div className="col partner-logo">
                        <Partnership1 />
                    </div>
                    <div className="col partner-logo">
                        <Partnership2 />
                    </div>
                    <div className="col partner-logo">
                        <Partnership3 />
                    </div>
                    <div className="col partner-logo">
                        <Partnership4 />
                    </div>
                </div>
                <div className="partnerships row">
                    <div className="col partner-logo">
                        <Partnership5 />
                    </div>
                    <div className="col partner-logo">
                        <Partnership6 />
                    </div>
                    <div className="col partner-logo">
                        <Partnership7 />
                    </div>
                    <div className="col partner-logo">
                        <Partnership8 />
                    </div>
                </div>
                <div className="partnerships row">
                    <div className="col partner-logo">
                        <img src={Partnership9} alt="partnership" />
                    </div>
                    <div className="col partner-logo">
                        <Partnership10 />
                    </div>
                    <div className="col partner-logo"></div>
                    <div className="col partner-logo"></div>
                </div>
            </div>
        </div>
    )
}
export default NCXPartnerships;