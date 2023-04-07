import React from "react";
import './marketpage.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import PopularMarkets from "../../components/our_markets/popular_markets";
import FeaturedMarket from '../../components/our_markets/featured_market';
// import HomeMarkerPage from '../../components/our_markets/home_market';

function CryptoMarketPage()
{
    return(
        <div id="cryptomarket_page">
            
            <MyHeader />

            {/* <HomeMarkerPage /> */}

            <FeaturedMarket />

            <PopularMarkets />
            
            <MyFooter />    

        </div>
    )
}

export default CryptoMarketPage;