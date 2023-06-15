import React from "react";
import './ncxcard.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import CardFirstNew from "../../components/cardpage/newcardpagedesign/new_firstsection";
import CardBoxSection from '../../components/cardpage/newcardpagedesign/cardbox';
import NCXContact from "../../components/cardpage/newcardpagedesign/contact";
import CardNewFaqSection from "../../components/cardpage/newcardpagedesign/faq";
import CardLogoSlider from "../../components/cardpage/newcardpagedesign/scroll_set";
import PremiumProtectionCard from "../../components/cardpage/newcardpagedesign/protection";
import CryptoCardSecondSection from "../../components/cardpage/newcardpagedesign/CryptoCardSet";
import NCXCardRanges from "../../components/cardpage/newcardpagedesign/card_ranges";
import CardNewPageFirst from "../../components/cardpage/newcardpagedesign/main_section";
import PremiumExperience from "../../components/cardpage/newcardpagedesign/third_sect";
import IntegrationPlay from "../../components/cardpage/newcardpagedesign/AppleGoogleplay";
import NCXCardExperience from "../../components/cardpage/newcardpagedesign/premium-exp";
import AllOfNeeds from "../../components/cardpage/newcardpagedesign/allofneeds";

function NCXCardPage()
{
    return(
        <div className="new_cverd">
            <MyHeader />

            <CardFirstNew />

            <CardNewPageFirst />

            <CryptoCardSecondSection />

            <NCXCardExperience />

            {/* <PremiumExperience /> */}

            <NCXCardRanges />

            <AllOfNeeds />

            {/* <div className="mbl_vevrf">
                <CardLogoSlider />
            </div> */}

            {/* <PremiumProtectionCard /> */}

            <CardLogoSlider />

            <CardBoxSection />

            <NCXContact />

            <IntegrationPlay />

            <div className="mbdx_v">
                <NCXContact />
            </div>

            <CardNewFaqSection />

            <MyFooter />
        </div>
    )
}

export default NCXCardPage;