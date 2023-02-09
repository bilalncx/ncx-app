import React from "react";
import './trends.css';

const Card = ({ item }) => {            
    // destructuring props
    return (
        <div className="container-fluid">
            <div className="row">
                {item.map((Val) => {
                    return (
                        <div className='trend-card' key={Val.id}>
                            <p className="trend-featured">{Val.featured}</p>
                            <img className='trend-img' src={Val.img} alt={Val.title} />
                            <div className='trend-title'>{Val.title}</div>
                            <div className='trend-bydate row'>
                                <div className="col">
                                    <div className="by-date">
                                        <p>By: <span><img src={Val.by} alt="ncx-trends"/></span></p>
                                        <p>{Val.date}</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <a href={Val.seemore} className='trend-seemore'>
                                        See More
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Card;