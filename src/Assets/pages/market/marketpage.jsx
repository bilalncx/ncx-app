import React from "react";
import './marketpage.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import PopularMarkets from "../../components/our_markets/popular_markets";

function CryptoMarketPage()
{
    return(
        <div id="cryptomarket_page">
            
            <MyHeader />

            <PopularMarkets />
            
            <MyFooter />    

        </div>
    )
}

export default CryptoMarketPage;