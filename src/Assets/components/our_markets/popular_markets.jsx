import { React, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ReactComponent as CardArrow } from '../../images/ncx-cardarrow.svg';
import Button from "@mui/material/Button";
import 'pure-react-carousel/dist/react-carousel.es.css';

function PopularMarkets()
{
    return(
        <div id="PopularMarketTabs">
            <CarouselProvider
                id="popuplar_marketsSlider"
                visibleSlides={5}
                totalSlides={9}
                dragStep={4}
                naturalSlideWidth={264}
                naturalSlideHeight={300}
                // isPlaying={true}
                // interval={1200}
                orientation="horizontal"
                infinite
                loop
                moveThreshol={0.5}
                transition="all 4s"
                playDirection="forward"
                classNameAnimation="sliding_aniaaaa"
            >
                <Slider className="slider">
                    {data.map((item, i) => (
                        <Slide index={item.index}>
                            <div className="pop_coindiv">
                                <div className="popular_coin">
                                    <div className="coin_log0">
                                        <img src={item.logo} alt="coin logo"/>
                                    </div>
                                    <div className="coin_price">
                                        <h1>{item.iconname}</h1>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                                <div className="coin_changing">
                                    <p>{item.change}<span>Today</span></p>
                                </div>
                                <Button href={item.btnurl}>{item.button}</Button>
                            </div>
                        </Slide>
                    ))}
                </Slider>
                <ButtonBack className="goback"><CardArrow /></ButtonBack>
                <ButtonNext className="gonext"><CardArrow /></ButtonNext>
            </CarouselProvider>
        </div>
    )
}

const data = [
    {
        logo: 'https://ncx.cx/images/btc.svg',
        iconname: 'Bitcoin',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '0',
    },
    {
        logo: 'https://ncx.cx/images/eth.svg',
        iconname: 'Ethereum',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '1',
    },
    {
        logo: 'https://ncx.cx/images/bch.svg',
        iconname: 'Bitcoin Cash',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '2',
    },
    {
        logo: 'https://ncx.cx/images/ltc.svg',
        iconname: 'Litecoin',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '3',
    },
    {
        logo: 'https://ncx.cx/images/bnb.svg',
        iconname: 'Binance Coin BNB',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '4',
    },
    {
        logo: 'https://ncx.cx/images/dash.svg',
        iconname: 'DASH',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '5',
    },
    {
        logo: 'https://ncx.cx/images/usdt.svg',
        iconname: 'Tether',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '6',
    },
    {
        logo: 'https://ncx.cx/images/usdc.svg',
        iconname: 'USD Coin',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '7',
    },
    {
        logo: 'https://ncx.cx/images/xrp.svg',
        iconname: 'Ripple',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '8',
    },
    {
        logo: 'https://ncx.cx/images/xrp.svg',
        iconname: 'Ripple',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '8',
    },
    {
        logo: 'https://ncx.cx/images/xrp.svg',
        iconname: 'Ripple',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '8',
    },
    {
        logo: 'https://ncx.cx/images/xrp.svg',
        iconname: 'Ripple',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '8',
    },
    {
        logo: 'https://ncx.cx/images/xrp.svg',
        iconname: 'Ripple',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '8',
    },
    {
        logo: 'https://ncx.cx/images/xrp.svg',
        iconname: 'Ripple',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '8',
    },
    {
        logo: 'https://ncx.cx/images/xrp.svg',
        iconname: 'Ripple',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '8',
    },
    {
        logo: 'https://ncx.cx/images/xrp.svg',
        iconname: 'Ripple',
        price: '$23,432.3232',
        change: '-2.43',
        button: 'Top Performing',
        btnurl: 'https://ncx.cx/',
        index: '8',
    },
]

export default PopularMarkets;