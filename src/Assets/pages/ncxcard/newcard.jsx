import React from "react";
import './ncxcard.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import CardBoxSection from '../../components/cardpage/newcardpagedesign/cardbox';
import NCXContact from "../../components/cardpage/newcardpagedesign/contact";
import CardNewFaqSection from "../../components/cardpage/newcardpagedesign/faq";
import CardLogoSlider from "../../components/cardpage/newcardpagedesign/scroll_set";
import PremiumProtectionCard from "../../components/cardpage/newcardpagedesign/protection";
import CryptoCardSecondSection from "../../components/cardpage/newcardpagedesign/CryptoCardSet";
import NCXCardRanges from "../../components/cardpage/newcardpagedesign/card_ranges";
import CardNewPageFirst from "../../components/cardpage/newcardpagedesign/main_section";
import PremiumExperience from "../../components/cardpage/newcardpagedesign/third_sect";

function NCXCardPage()
{
    return(
        <div className="ncxdebitcreditcardpage">
            <MyHeader />

            <CardNewPageFirst />

            <CryptoCardSecondSection />

            <PremiumExperience />

            <NCXCardRanges />

            <PremiumProtectionCard />

            <CardLogoSlider />

            <CardBoxSection />

            <NCXContact />

            <CardNewFaqSection />

            <MyFooter />
        </div>
    )
}

export default NCXCardPage;