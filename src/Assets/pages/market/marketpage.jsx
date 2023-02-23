import React from "react";
import './marketpage.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import OldMarketSection from '../../components/homepage/3rdmarketsection/market';
import Flyers from '../../components/homepage/market/flyers';
import PopularMarkets from "../../components/our_markets/popular_markets";
import ModalMarketPage from "../../components/our_markets/modal";

function CryptoMarketPage()
{
    return(
        <div id="cryptomarket_page">
            
            <MyHeader />

            <div className="market_header">
                <h1 className="page_heading">Markets</h1>
                <PopularMarkets />
            </div>

            <div className="market_sess">
                <ModalMarketPage />
                <Flyers />
                <OldMarketSection />
            </div>

            <MyFooter />    

        </div>
    )
}

export default CryptoMarketPage;