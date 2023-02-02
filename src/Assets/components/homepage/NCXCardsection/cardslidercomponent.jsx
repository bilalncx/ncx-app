import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import data from '../../../../config/ncxcard';
import './cardslider.css';
import { ReactComponent as CardArrow } from '../../../images/ncx-cardarrow.svg';
import { Forward } from '@mui/icons-material';
import { color } from '@mui/system';


function HomeNCXCardSection() {
    const [carddata]  = useState(data);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
    <div id="NCXCardHomepageSlide">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        // itemsToShow={1}
        // itemsToScroll={1}
        // loop
        // useNativeDriver
        autoplay={true}
        infinite={true}
        loop={true}
        autoplayDelay={3000}
        autoplayInterval={3000}
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
        speed={400}
        easing="linear"
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 6,
              width: 6,
              borderRadius: "50%",
              border: 0,
              color: "#D9D9D9",
              padding: 0,
              margin: 2,
            }
          },
          activeItemBtnProps: {
            style: {
              height: 6,
              width: 6,
              borderRadius: "50%",
              border: 0,
              background: "#34A9FF",
              padding: 0,
              margin: 2,
            }
          }
        }}
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
            {carddata.map((item, indexpeople) => {
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
      </ReactSimplyCarousel>
    </div>
  );
}

export default HomeNCXCardSection;