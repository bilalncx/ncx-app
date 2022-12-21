import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import data from '../../../config/jata';
import {Animated} from "react-animated-css";
import { Link } from 'react-router-dom';
import './homepageblogslider.css';
import Health from '../../images/health.png';


function ReactSimplyCarouselExample() {
    const [blogListdata]  = useState(data);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
    return (
    <div id="HMPBlogSlider">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
            className: 'farworad',
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>
            <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.3536 3.48205C30.5488 3.67731 30.5488 3.99389 30.3536 4.18915L27.1716 7.37113C26.9763 7.56639 26.6597 7.56639 26.4645 7.37113C26.2692 7.17587 26.2692 6.85929 26.4645 6.66403L29.2929 3.8356L26.4645 1.00717C26.2692 0.811907 26.2692 0.495327 26.4645 0.300067C26.6597 0.104797 26.9763 0.104797 27.1716 0.300067L30.3536 3.48205ZM-1.90735e-06 3.3356L30 3.3356V4.3356L-1.90735e-06 4.3356V3.3356Z" fill="black"/>
            </svg>
          </span>,
        }}
        backwardBtnProps={{
            className: 'backwrod',
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>
            <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.3536 3.48205C30.5488 3.67731 30.5488 3.99389 30.3536 4.18915L27.1716 7.37113C26.9763 7.56639 26.6597 7.56639 26.4645 7.37113C26.2692 7.17587 26.2692 6.85929 26.4645 6.66403L29.2929 3.8356L26.4645 1.00717C26.2692 0.811907 26.2692 0.495327 26.4645 0.300067C26.6597 0.104797 26.9763 0.104797 27.1716 0.300067L30.3536 3.48205ZM-1.90735e-06 3.3356L30 3.3356V4.3356L-1.90735e-06 4.3356V3.3356Z" fill="black"/>
            </svg>
          </span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
          },
        ]}
        speed={800}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
            {blogListdata.map((item, indexPeople) => {
                    const {id, cover, authorName, authorAvatar, title, createdAt} = item;
                    return(
                        <article className='HPB-l' key={id}>
                            <img className='post-cover-ccc' src={cover} alt={title} />
                            <div className='text-ssrr'>
                                <div className="ddd-ioamges">
                                    <img className='author-ss' src={authorAvatar} alt={authorName} />
                                    <img className='health' src={Health} alt={title} />
                                </div>
                                <h3 className='author-nnn'>{authorName}</h3>
                                <p className='publish-ss'>{createdAt}</p>
                                <h1 className='post-tilelll'>{title}</h1>
                                <p className='reading-fulll'>Read the full Article on 
                                    <a href="https://ncx.cx/blog" className='blogItem-link'>
                                        NCX Trends
                                    </a>
                                </p>
                            </div>
                        </article>
                    );
                })}
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;