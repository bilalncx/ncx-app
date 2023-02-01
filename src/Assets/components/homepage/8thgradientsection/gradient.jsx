import { AnimationOnScroll } from 'react-animation-on-scroll';
import  React from "react";
import './gradient.css';

function Home8thGradientSection(){
    return(
        <div className="gradient">
            <div className="container">
                <div className="gradient-bar">
                    <AnimationOnScroll animateIn="animate__slideInLeft">
                        <div className="gradientbar"></div>
                    </AnimationOnScroll>
                </div>
                <div className="row gradient-text">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-one">
                            <h3>01</h3>
                            <h1>Customizable Interface</h1>
                            <p>Customize the platform interface exactly as you need: change the arrangement of components, select one of the themes and customize notifications.</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-two">
                            <h3>02</h3>
                            <h1>Web | Mobile | iOS App</h1>
                            <p>Enjoy all the features of NCX Platfrom on Desktop, Mobile and advanced Mobile App. Grow your Crypto wealth and keep it secure with NCX, One Platfrom - Unlimited possibilities.</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-three">
                            <h3>03</h3>
                            <h1>Grouping of Volumes</h1>
                            <p>Evaluate the depth of liquidity using grouping feature in the orderbooks on all the available pairs. Get the overview of total cumulative number of opened buy and sell orders with a special widget in the Trading UI.</p>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home8thGradientSection;