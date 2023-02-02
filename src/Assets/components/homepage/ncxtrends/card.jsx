import {React, useState} from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './trends.css';
import Button  from "@mui/material/Button";
import TrendData from './data'

function HomeTrendCard()
{
    const [TrendingCard]  = useState(TrendData);
    return(
        <div className="cardtrend">
            {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
            {TrendingCard.map((item, indexpeople) => {
                    const {id, img, point1, point2, point3, point4, title} = item;
                    return(
                        <article className='ncxcard01' key={id}>
                            <img className='cardimg01' src={img} alt={id} />
                            <div className='cardtitle'>{title}</div>
                            <div className='card-features'>
                                <div>{point1}</div>
                                <div>{point2}</div>
                                <div>{point3}</div>
                                <div>{point4}</div>
                                <a href="https://ncx.cx/" className='card-learnmore'>
                                    Learn More
                                </a>
                            </div>
                        </article>
                    );
                })}
        </div>
    )
}
export default HomeTrendCard;