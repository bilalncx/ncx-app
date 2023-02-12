import React from "react";
import './earn.css';
import Fuji from '../../../images/ncx-fuji.png';
import Rainer from '../../../images/ncx-rainer.png';
import Elbrus from '../../../images/ncx-elbrus.png';
import Denali from '../../../images/ncx-denali.png';
import Everest from '../../../images/ncx-everest.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXTask from './tasks';

function HomeEarnNCXSection()
{
    return(
        <div className="earnncx">
            <div className="container">
                <div className="earnheading">
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <h1>Earn NCX every time you complete a level!</h1>
                    </AnimationOnScroll>
                </div>
                <div className="earnbadge row">
                    <div className="col fuji">
                        <div className="badgeimg">
                            <img src={Fuji} alt="NCX Fuji" />
                        </div>
                        <div className="complete-bar"></div>
                        <div className="completetext">
                            <p>Tasks Completed</p>
                            <p>0 <span>/ 5</span></p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="badgeimg">
                            <img src={Rainer} alt="NCX Rainer" />
                        </div>
                        <p>Bonus</p>
                        <h3>1,000 NCXT</h3>
                    </div>
                    <div className="col">
                        <div className="badgeimg">
                            <img src={Elbrus} alt="NCX Elbrus" />
                        </div>
                        <p>Bonus</p>
                        <h3>2,000 NCXT</h3>
                    </div>
                    <div className="col">
                        <div className="badgeimg">
                            <img src={Denali} alt="NCX Denali" />
                        </div>
                        <p>Bonus</p>
                        <h3>4,000 NCXT</h3>
                    </div>
                    <div className="col">
                        <div className="badgeimg">
                            <img src={Everest} alt="NCX Everest" />
                        </div>
                        <p>Bonus</p>
                        <h3>8,000 NCXT</h3>
                    </div>
                </div>
                <div className="earnbadge row mobile">
                    <div className="col fuji">
                        <div className="badgeimg">
                            <img src={Fuji} alt="NCX Fuji" />
                        </div>
                        <div className="complete-bar"></div>
                        <div className="completetext">
                            <p>Tasks Completed</p>
                            <p>0 <span>/ 5</span></p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="badgeimg">
                            <img src={Rainer} alt="NCX Rainer" />
                        </div>
                        <p>Bonus</p>
                        <h3>1,000 NCXT</h3>
                    </div>
                </div>
                <div className="earnbadge row mobile">
                    <div className="col">
                        <div className="badgeimg">
                            <img src={Elbrus} alt="NCX Elbrus" />
                        </div>
                        <p>Bonus</p>
                        <h3>2,000 NCXT</h3>
                    </div>
                    <div className="col">
                        <div className="badgeimg">
                            <img src={Denali} alt="NCX Denali" />
                        </div>
                        <p>Bonus</p>
                        <h3>4,000 NCXT</h3>
                    </div>
                </div>
            </div>
            <NCXTask />
        </div>
    )
}
export default HomeEarnNCXSection;