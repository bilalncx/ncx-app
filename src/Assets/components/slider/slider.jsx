import React, {useState, useEffect} from "react";
import './slider.css';
import data from './data';
import { Slider } from "@mui/material";
import {Animated} from "react-animated-css";

const Sliderfunction = () => {
    const [people]  = useState(data);
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const lastIndex = people.length - 1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000);
        return() => {
            clearInterval(slider);
        };
    }, [index]);

    return(
        <section id="slider">
            <div className="section-center desktop">
                <h1 className="features-include">Feartures include</h1>
                {people.map((item, indexPeople) => {
                    const {id, image, name, tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, icon, content, button, url} = item;
                    let position = "nextSlide";
                    if(indexPeople === item) {
                        position = "activeSlide";
                    }
                    if(indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)){
                        position = "lastSlide";
                    }
                    return(
                        <article className={position} key={id}>
                            <h1>{name}</h1>
                            <div className="tag-class">
                                <h2>{tag1}</h2>
                                <h2>{tag2}</h2>
                                <h2>{tag3}</h2>
                                <h2>{tag4}</h2>
                            </div>
                            <div className="tag-class">
                                <h2>{tag5}</h2>
                                <h2>{tag6}</h2>
                                <h2>{tag7}</h2>
                                <h2>{tag8}</h2>
                                <h2>{tag9}</h2>
                            </div>
                            <div className="row text-image">
                                <div className="tet">
                                    <img src={icon} alt={name} className="tet-icon" />
                                    <p>{content}</p>
                                    <a href={url}>{button}
                                        <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.3536 3.48205C30.5488 3.67731 30.5488 3.99389 30.3536 4.18915L27.1716 7.37113C26.9763 7.56639 26.6597 7.56639 26.4645 7.37113C26.2692 7.17587 26.2692 6.85929 26.4645 6.66403L29.2929 3.8356L26.4645 1.00717C26.2692 0.811907 26.2692 0.495327 26.4645 0.300067C26.6597 0.104797 26.9763 0.104797 27.1716 0.300067L30.3536 3.48205ZM-1.90735e-06 3.3356L30 3.3356V4.3356L-1.90735e-06 4.3356V3.3356Z" fill="black"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="tet-img">
                                    <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
                                        <img src={image} alt={name} className="perspon-img"/>
                                    </Animated>
                                </div>
                            </div>
                        </article>
                    );
                })}
                <div className="moving-btm">
                    <button className="prev" onClick={() => setIndex(index - 1)}>
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7071 1.12883C11.0976 1.51936 11.0976 2.15252 10.7071 2.54305L2.4142 10.8359L10.7071 19.1288C11.0976 19.5193 11.0976 20.1525 10.7071 20.543C10.3166 20.9335 9.6834 20.9335 9.2929 20.543L0.29289 11.543C-0.09763 11.1525 -0.09763 10.5193 0.29289 10.1288L9.2929 1.12883C9.6834 0.738308 10.3166 0.738308 10.7071 1.12883Z" fill="white"/>
                        </svg>
                    </button>
                    <button className="next" onClick={() => setIndex(index + 1)}>
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.29289 1.12883C-0.09763 1.51936 -0.09763 2.15252 0.29289 2.54305L8.5858 10.8359L0.29289 19.1288C-0.09763 19.5193 -0.09763 20.1525 0.29289 20.543C0.68342 20.9335 1.3166 20.9335 1.7071 20.543L10.7071 11.543C11.0976 11.1525 11.0976 10.5193 10.7071 10.1288L1.7071 1.12883C1.3166 0.738308 0.68342 0.738308 0.29289 1.12883Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="section-center mobile">
                <h1 className="include-features">Features Include</h1>
                {people.map((item, indexPeople) => {
                    const {id, image, name, tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, icon, content, button, url} = item;
                    let position = "nextSlide";
                    if(indexPeople === item) {
                        position = "activeSlide";
                    }
                    if(indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)){
                        position = "lastSlide";
                    }
                    return(  
                        <article className={position} key={id}>
                            <h1 id="title">{name}</h1>
                            <div className="tag-class">
                                <h2>{tag1}</h2>
                                <h2>{tag2}</h2>
                                <h2>{tag3}</h2>
                            </div>
                            <div className="tag-class">
                                <h2>{tag4}</h2>
                                <h2>{tag5}</h2>
                                <h2>{tag6}</h2>
                            </div>
                            <div className="tag-class">
                                <h2>{tag7}</h2>
                                <h2>{tag8}</h2>
                                <h2>{tag9}</h2>
                            </div>
                            <div className="row text-image">
                                <div className="tet-img">
                                    <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
                                        <img src={image} alt={name} className="perspon-img"/>
                                    </Animated>
                                </div>
                                <div className="tet">
                                    <img src={icon} alt={name} className="tet-icon" />
                                    <p>{content}</p>
                                    <a href={url}>{button}
                                        <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.3536 3.48205C30.5488 3.67731 30.5488 3.99389 30.3536 4.18915L27.1716 7.37113C26.9763 7.56639 26.6597 7.56639 26.4645 7.37113C26.2692 7.17587 26.2692 6.85929 26.4645 6.66403L29.2929 3.8356L26.4645 1.00717C26.2692 0.811907 26.2692 0.495327 26.4645 0.300067C26.6597 0.104797 26.9763 0.104797 27.1716 0.300067L30.3536 3.48205ZM-1.90735e-06 3.3356L30 3.3356V4.3356L-1.90735e-06 4.3356V3.3356Z" fill="black"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    );
                })}
                <div className="moving-btm">
                    <button className="prev" onClick={() => setIndex(index - 1)}>
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7071 1.12883C11.0976 1.51936 11.0976 2.15252 10.7071 2.54305L2.4142 10.8359L10.7071 19.1288C11.0976 19.5193 11.0976 20.1525 10.7071 20.543C10.3166 20.9335 9.6834 20.9335 9.2929 20.543L0.29289 11.543C-0.09763 11.1525 -0.09763 10.5193 0.29289 10.1288L9.2929 1.12883C9.6834 0.738308 10.3166 0.738308 10.7071 1.12883Z" fill="white"/>
                        </svg>
                    </button>
                    <button className="next" onClick={() => setIndex(index + 1)}>
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.29289 1.12883C-0.09763 1.51936 -0.09763 2.15252 0.29289 2.54305L8.5858 10.8359L0.29289 19.1288C-0.09763 19.5193 -0.09763 20.1525 0.29289 20.543C0.68342 20.9335 1.3166 20.9335 1.7071 20.543L10.7071 11.543C11.0976 11.1525 11.0976 10.5193 10.7071 10.1288L1.7071 1.12883C1.3166 0.738308 0.68342 0.738308 0.29289 1.12883Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Sliderfunction;