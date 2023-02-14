import React from "react";
import './ncxcard.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import VideoSect from '../../components/cardpage/cardvideo/cardpage';
import AllDebitCards from '../../components/cardpage/allcards/allcards';
import CardNewsletter from '../../components/cardpage/fourthsect/fourth';
import CompleteTaskVidoSection from '../../components/homepage/6thvideosection/newgeneration';
import NCXEarnSection from '../../components/homepage/EarnNCX/earnncx';
import NCXCardFAQ from '../../components/cardpage/card-faq/faq';

function NCXDebitCreditCardPage()
{
    return(
        <div className="ncxdebitcreditcardpage">
            <MyHeader />

            <VideoSect />

            <AllDebitCards />

            <CardNewsletter />

            <CompleteTaskVidoSection />

            <NCXEarnSection />

            <NCXCardFAQ />

            <MyFooter />
        </div>
    )
}

export default NCXDebitCreditCardPage;