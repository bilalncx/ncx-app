import React from "react";
import './institution.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import FirstSection from '../../components/institution/first/first';
import SecondSection from '../../components/institution/second/second';
import ThirdSection from '../../components/institution/third/third';
import FourthSection from '../../components/institution/fourth/fourth';
import FifthSection from '../../components/institution/fifth/fifth';
import SixthSection from '../../components/institution/sixth/six';
import SeventhSection from '../../components/institution/seventh/seven';

function NCXInstitution()
{
    return(
        <div id="ncx_institution">

            <MyHeader />

            <FirstSection />

            <SecondSection />

            <ThirdSection />

            <FourthSection />

            <FifthSection />

            <SixthSection />

            <SeventhSection />

            <MyFooter />
            
        </div>
    )
}
export default NCXInstitution;