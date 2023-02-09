import React from "react";
import HorizontalPagsss from '../../components/homepage/horizontalscrollsection/horizontal';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function HorizontalPage()
{  
    return(
        <div id="pageContinesr">
            <Header />
            <div id="newHorzialdiv">
                <HorizontalPagsss />
            </div>
            <Footer />
        </div>
    )

}
 export default HorizontalPage;