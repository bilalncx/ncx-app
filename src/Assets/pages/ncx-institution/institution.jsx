import React from "react";
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import InstitutionMobile from '../../components/institution/inst-files/mobile';
import InstitutionDesktop from '../../components/institution/inst-files/desktop'

function NCXInstitution()
{
    return(
        <div id="ncx_institution">

            <MyHeader />

            <div className="inst_desktop">

                <InstitutionDesktop />

            </div>


            <div className="inst_mbl">
                
                <InstitutionMobile />

            </div>

            <MyFooter />
            
        </div>
    )
}
export default NCXInstitution;