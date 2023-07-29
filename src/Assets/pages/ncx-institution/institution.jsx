import React from "react";
import './institution.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import FirstSection from '../../components/institution/first/new';
import SecondSection from '../../components/institution/second/second';
import ThirdSection from '../../components/institution/third/third';
// import FourthSection from '../../components/institution/fourth/fourth';
import FifthSection from '../../components/institution/fifth/fifth';
import SixthSection from '../../components/institution/sixth/six';
import SeventhSection from '../../components/institution/seventh/seven';
import TradingAdvantage from '../../components/aboutus/advantages/trading';
import InstitutionMobile from '../../components/institution/mobile/mobile';
import InstitutionDesktop from '../../components/institution/inst-files/desktop'

function NCXInstitution()
{
    return(
        <div id="ncx_institution">

            <MyHeader />

            <div className="inst_desktop">

                <InstitutionDesktop />

                {/* <FirstSection />

                <SecondSection />

                <FifthSection />

                <ThirdSection />

                <TradingAdvantage />

                <SixthSection />

                <SeventhSection /> */}

            </div>


            <div className="inst_mbl">
                
                <InstitutionMobile />

            </div>

            <MyFooter />
            
        </div>
    )
}
export default NCXInstitution;