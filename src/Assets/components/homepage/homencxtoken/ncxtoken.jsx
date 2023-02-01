import  React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './ncxtoken.css';
import {ReactComponent as NCXLogo} from '../../../images/NCX-logo.svg';

function HomeNCXToken()
{
    return(
        <div className="ncxtoken">
            <div className="container">
                <div className="row tokenrow">
                    <div className="col">
                        <div className="ncx-tokenlogo">
                            <NCXLogo />
                            <p>Token</p>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h2>Trade Futures with up to 100x Leverage</h2>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeNCXToken;