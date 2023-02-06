import {React, useState} from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './trends.css';
import NCXLogo from '../../../images/ncx-black-logo.svg';
import Button  from "@mui/material/Button";
import Card from './card';
import TrendingCard from './data';
import Buttons from './buttons';

function NCXHomePageTrendsSection(){
    const [item, setItem] = useState(TrendingCard);
    const menuItems = [...new Set(TrendingCard.map((Val) => Val.category))];
    const filterItem = (curcat) => {
        const newItem = TrendingCard.filter((newVal) => {
            return newVal.category === curcat;
            });
        setItem(newItem);
    };
    return(
        <div className="homencxtrends">
            <div className="container">
                <div className="row trendsrow">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-trends">
                                <img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
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

                <div className="buttons-tabs">
                    <Buttons
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={menuItems}
                    />
                </div>
                <div className="cardtrend">
                    <Card item={item} />
                </div>
            </div>
        </div>
    )
}
export default NCXHomePageTrendsSection;