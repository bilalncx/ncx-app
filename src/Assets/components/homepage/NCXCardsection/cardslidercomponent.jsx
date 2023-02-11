import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';
import data from '../../../../config/ncxcard';
import './cardslider.css';
import ReactDOM from "react-dom";
import { ReactComponent as CardArrow } from '../../../images/ncx-cardarrow.svg';
import { Forward } from '@mui/icons-material';
import { color } from '@mui/system';
import { Next } from 'react-bootstrap/esm/PageItem';


function HomeNCXCardSection() {
    const [carddata]  = useState(data);
    const [activeSlideIndex, setActiveSlideIndex] = useState(1);
    return (
    <div id="NCXCardHomepageSlide">
      <Carousel
        SlideIndex={1}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        inactiveSlideScale={3}
        inactiveSlideOpacity={1}
        // inverted
        horizontal
        useNativeDriver
        // autoplay={true}
        // infinite={true}
        // loop={true}
        // autoplayDelay={2000}
        // autoplayInterval={2000}
        showSlidesBeforeInit={true}
        disableNavIfEdgeVisible= {true}
        autoplayDirection={Forward}
        forwardBtnProps={{
          className: 'farworad',
          children: <span><CardArrow /></span>,
        }}
        backwardBtnProps={{
          className: 'backwrod',children: <span><CardArrow /></span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minwidth: 480,
          },
        ]}
        speed={200}
        easing="linear"
        // dotsNav={{
        //   show: true,
        //   itemBtnProps: {
        //     style: {
        //       height: 6,
        //       width: 6,
        //       borderRadius: "50%",
        //       border: 0,
        //       color: "#D9D9D9",
        //       padding: 0,
        //       margin: 2,
        //     }
        //   },
        //   activeItemBtnProps: {
        //     style: {
        //       height: 6,
        //       width: 6,
        //       borderRadius: "50%",
        //       border: 0,
        //       background: "#34A9FF",
        //       padding: 0,
        //       margin: 2,
        //     }
        //   }
        // }}
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
            {carddata.map((item) => {
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
      </Carousel>
    </div>
  );
}

export default HomeNCXCardSection;