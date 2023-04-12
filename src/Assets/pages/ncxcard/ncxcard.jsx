import React from "react";
import './ncxcard.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import VideoSect from '../../components/cardpage/cardvideo/cardpage';
import AllDebitCards from '../../components/cardpage/allcards/allcards';
// import CardNewsletter from '../../components/cardpage/fourthsect/fourth';
import CompleteTaskVidoSection from '../../components/homepage/6thvideosection/newgeneration';
import NCXEarnSection from '../../components/homepage/EarnNCX/earnncx';
import NCXCardFAQ from '../../components/cardpage/card-faq/faq';
import NCXCardFirstSection from "../../components/cardpage/first/first";
import NCXPoweredBy from '../../components/cardpage/third/third';

function NCXDebitCreditCardPage()
{
    return(
        <div className="ncxdebitcreditcardpage">
            <MyHeader />

            <NCXCardFirstSection />

            <VideoSect />

            <AllDebitCards />

            <NCXPoweredBy />

            <NCXCardFAQ />

            {/* <CardNewsletter /> */}

            <CompleteTaskVidoSection />

            <NCXEarnSection />

            <MyFooter />
        </div>
    )
}

export default NCXDebitCreditCardPage;