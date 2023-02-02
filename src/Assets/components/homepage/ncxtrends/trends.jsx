import {React, useState} from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './trends.css';
import {ReactComponent as NCXLogo} from '../../../images/NCX-logo.svg';
import Button  from "@mui/material/Button";
import TrendingCard from './card';

function NCXHomePageTrendsSection()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div className="homencxtrends">
            <div className="container">
                <div className="row trendsrow">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-trends">
                                <NCXLogo />
                                <p>Trends</p>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <p className="trending-text">Follow latest Market News & Analytics with NCX Trends</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col view-all">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <Button href="#">View All</Button>
                        </AnimationOnScroll>
                    </div>
                </div>

                <div className="blogcard">
                    <div className="blog-tabs">
                        <button
                            className={toggleState === 1 ? "trens-tabs active" : "trens-tabs"}
                            onClick={() => toggleTab(1)}
                        >
                        News
                        </button>
                        <button
                            className={toggleState === 2 ? "trens-tabs active" : "trens-tabs"}
                            onClick={() => toggleTab(2)}
                        >
                        Press Mentions
                        </button>
                        <button
                            className={toggleState === 3 ? "trens-tabs active" : "trens-tabs"}
                            onClick={() => toggleTab(3)}
                        >
                        Crypto
                        </button>
                        <button
                            className={toggleState === 4 ? "trens-tabs active" : "trens-tabs"}
                            onClick={() => toggleTab(4)}
                        >
                        Markets
                        </button>
                        <button
                            className={toggleState === 5 ? "trens-tabs active" : "trens-tabs"}
                            onClick={() => toggleTab(5)}
                        >
                        Trens
                        </button>
                        <button
                            className={toggleState === 6 ? "trens-tabs active" : "trens-tabs"}
                            onClick={() => toggleTab(6)}
                        >
                        NCX
                        </button>
                        <button
                            className={toggleState === 7 ? "trens-tabs active" : "trens-tabs"}
                            onClick={() => toggleTab(7)}
                        >
                        Bitcoin
                        </button>
                        <button
                            className={toggleState === 8 ? "trens-tabs active" : "trens-tabs"}
                            onClick={() => toggleTab(8)}
                        >
                        Ethereum
                        </button>
                    </div>
                    <div className="content-tabs">
                        <div className={toggleState === 1 ? "trade-content  active" : "trade-content"}>
                            <TrendingCard />
                        </div>
                        <div className={toggleState === 2 ? "trade-content  active" : "trade-content"}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXHomePageTrendsSection;