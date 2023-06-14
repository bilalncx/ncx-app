import  React from "react";
import '../styles/home.css';
import '../styles/media-query.css'
import "animate.css/animate.min.css";
import '../components/homepage/3rdmarketsection/market.css';
import MyFooter from '../components/footer/footer';
import MyHeader from '../components/header/header';
import SplashPage from '../components/splash/splash';
// import HomeCEXDEXTableSection from '../components/homepage/5thdextablesection/cexdex';
import HomeFirstSection from '../components/homepage/1stsection/bb_video';
import Home2ndSection from '../components/homepage/2ndsection/new';
import Home6thVideoSection from '../components/homepage/6thvideosection/newgeneration';
import NCXEarn from '../components/homepage/EarnNCX/earnncx';
import NCXOTCSection from '../components/homepage/NCXOTC/otc';
import WhatWeDoSection from '../components/homepage/whatwedo/whatwe';
import NCXPoweredByCrypto from '../components/homepage/sect_poweredby/powered';
import NCXNewHomeMarketSection from '../components/our_markets/home_market';
import HomeAssets from '../components/indices/01/1';
import FeaturedMarkets from '../components/our_markets/featured_market';
import Home5thSection from '../components/homepage/5thdextablesection/new__set';
import HomeTrdingDerivatives from '../components/indices/06/6';
import HomeWallet from '../components/homepage/coinslide/coin';
import HomeGlobalMarkets from '../components/indices/04/4';
import HomeWalletStakes from '../components/ncxToken/section-2/staking_ncxt';
import HomeBannerSection from "../components/homepage/banner/ban";
import NCXCardRanges from "../components/homepage/HomeCardRanges/cardranges";
import NewFeatureSection from "../components/homepage/5thdextablesection/newtable";
import HomeNCXCardBox from "../components/homepage/HomeCardBox/cardbox";
import HomeCardVideo from "../components/homepage/HomeCardBox/homecardvideo";
import ImageScrollHome from "../components/homepage/Imagescroll/scroll";
import MartFlyer from "../components/homepage/3rdmarketsection/market-flyer";
import HomeMobilePartner from "../components/homepage/banner/partner";


function MainHome()
{
    return(
          <section className="bg-dark">
            <SplashPage />
            
            <MyHeader />

            <HomeFirstSection />

            <Home2ndSection />

            <div id="market" className="market-exchange">

                {/* <FeaturedMarkets /> */}

                <MartFlyer />

                <div className="container">
                    <NCXNewHomeMarketSection />
                </div>
            </div>

            <HomeWallet />

            <HomeAssets />

            <Home5thSection />

            <HomeTrdingDerivatives />

            {/* <HomeCEXDEXTableSection /> */}

            <ImageScrollHome />

            <NewFeatureSection />

            <HomeCardVideo />

            <HomeNCXCardBox />

            <NCXCardRanges />

            <div className="bbn__bm">
                <HomeBannerSection />
            </div>

            <HomeGlobalMarkets />
            
            <div id="hgff">
                <Home6thVideoSection />
            </div>

            <div id="hyres">
                <NCXEarn />
            </div>

            <HomeWalletStakes />

            <HomeBannerSection />

            <HomeMobilePartner />
            
            <MyFooter />

          </section>
    )
}
export default MainHome;