import React from "react";
// import HorizontalPagsss from '../../components/homepage/horizontalscrollsection/horizontal';
// import SwiperSlider from '../../components/homepage/horizontalscrollsection/slidecard';
import NCXAppDeis from '../../components/homepage/NCXapp/ncxapp';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function HorizontalPage()
{  
    return(
        <div id="pageContinesr">
            <Header />
            <div id="newHorzialdiv">
                <NCXAppDeis />
            </div>
            <Footer />
        </div>
    )

}
 export default HorizontalPage;