import React from 'react';
import './real_market.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ReactComponent as CardArrow } from '../../images/ncx-cardarrow.svg';
import 'pure-react-carousel/dist/react-carousel.es.css';
import $ from 'jquery';


function MarketPage(){
    fetch('https://b2t-api-cmc-ncxdigital.flexprotect.org/marketdata/cmc/v1/summary')
    .then(res => res.json())
    .then(json => {

    const trending = document.querySelector('#featured_slider .slider_market');
    const mobiletrending = document.querySelector('#featured_slider_mobile .slider_market');
    const pairs = Object.getOwnPropertyNames(json);

    if (pairs) {
        hideloader();
    } 
    if(pairs){
        hideloadermobile();
    }


    // Function to hide the loader
    function hideloader() {
        document.getElementById('loading_vv').style.display = 'none';
    }
    function hideloadermobile() {
        document.getElementById('loading_vv_mobile').style.display = 'none';
    }

    for (let pair of pairs) {

        const Pairs = json[`${pair}`];
        
        const name = Pairs.id;
        const strname = name.replace(/_/g, " / ");  
        
        const price = Pairs.last;
        const fixedNum = parseFloat(price).toFixed(2);
        
        const change = Pairs.percentChange;
        const changed = parseFloat(change).toFixed(4);

        const hig = Pairs.high24hr;
        const high = parseFloat(hig).toFixed(4);
        
        const loo = Pairs.low24hr;
        const low = parseFloat(loo).toFixed(4);

        const quote = Pairs.quoteVolume;
        const volume = parseFloat(quote).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        trending.innerHTML += `
                <div class="slide">
                    <div class="featured_market">
                        <p class="fet_tag">Featured</p>
                        <div class="trend_pairs">
                            <h1>${strname}</h1>
                            <p>${changed}</p>
                        </div>
                        <div class="price_graph">
                        <div class="prix">
                            <h3>${price}</h3>
                            <p>≈${price}</p>
                        </div>
                        <img src="https://ncx.cx/images/market-graph.png" alt="graph_ncx" />
                    </div>
                    </div>
                </div>
        `;

        mobiletrending.innerHTML += `
        <div class="slide">
            <div class="featured_market">
                <p class="fet_tag">Featured</p>
                <div class="trend_pairs">
                    <h1>${strname}</h1>
                    <p>${changed}</p>
                </div>
                <div class="price_graph">
                <div class="prix">
                    <h3>${price}</h3>
                    <p>≈$${price}</p>
                </div>
                <img src="https://ncx.cx/images/market-graph.png" alt="graph_ncx" />
            </div>
            </div>
        </div>
`;
    }
});
    return(              
        <div className="trending_markets">
            <div className="container desktop">
                <div className='spiner_div'>
                    <div class="spinner-border" 
                        role="status" id="loading_vv">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            <CarouselProvider
                id="featured_slider"
                visibleSlides={5}
                totalSlides={50}
                dragStep={1}
                // naturalSlideWidth={264}
                // naturalSlideHeight={300}
                naturalSlideWidth={300}
                isPlaying={true}
                interval={4000}
                orientation="horizontal"
                infinite
                loop
                moveThreshol={0.5}
                transition="all 4s"
                playDirection="forward"
            >
                <Slider className="slider">
                    <Slide className='slider_market'>
                    </Slide>
                </Slider>
            </CarouselProvider>
            </div>
            <div className="container mobile">
                <div className='spiner_div'>
                    <div class="spinner-border" 
                        role="status" id="loading_vv_mobile">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            <CarouselProvider
                id="featured_slider_mobile"
                visibleSlides={2}
                totalSlides={50}
                dragStep={1}
                // naturalSlideWidth={264}
                // naturalSlideHeight={300}
                naturalSlideWidth={300}
                isPlaying={true}
                interval={4000}
                orientation="horizontal"
                infinite
                loop
                moveThreshol={0.5}
                transition="all 4s"
                playDirection="forward"
            >
                <Slider className="slider">
                    <Slide className='slider_market'>
                    </Slide>
                </Slider>
            </CarouselProvider>
            </div>
        </div>   
    )
}
export default MarketPage;

$(".trend_pairs p").each(function() {
    var val = parseFloat($(this).text());
    $(this).addClass(val < 0 ? 'negative' : 'positive');
  });