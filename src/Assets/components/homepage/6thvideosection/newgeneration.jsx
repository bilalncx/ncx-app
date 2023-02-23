import  React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Button from "@mui/material/Button";
import './newgeneration.css';
import { ReactComponent as NCXInfoIcon } from '../../../images/ncx-infosign.svg';

function Home6thVideoSection(){
    return(
        <div className="new-generation">
            <div className="container">
                <div className="generate-div">
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <h1>Complete Tasks</h1>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <h1>Earn NCX Tokens</h1>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <p>Sign Up, Complete Tasks, reach new Levels while earning NCXT along the way with NCX Rewards Program. One of the most through after Rewards Programs built for the Traders and Community.</p>
                    </AnimationOnScroll>
                    
                    <div className="ncxtask row">
                        <div className="taskdiv one">
                            <h3>10,000 <span>NCXT</span></h3>
                            <div className="taskdiv11">
                                <div className="text212">
                                    <h4>Sign Up and Verify</h4>
                                    <p>For new user only</p>
                                </div>
                                <div className="buttoninfo">
                                    <Button href="https://ncx.cx/task-rewards" alt="NCX Task Start">Start Task</Button>
                                    <NCXInfoIcon />
                                </div>
                            </div>
                        </div>
                        <div className="taskdiv">
                            <h3 className="secondtask">1,250 <span>NCXT</span></h3>
                            <div className="text212">
                                <h4>Reach $10,000+ in Derivatives Trading Volume </h4>
                                <div className="buttoninfo">
                                    <p>For new user only</p>
                                    <NCXInfoIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="generate-video">
                    <video 
                        id='ncx-main-video'
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        poster="https://ncx.cx/images/ncx_mainvideo_poster.png"
                        >
                        <source src={require('../../../images/ncx-mainvideo.mp4')} type="video/mp4" />
                    </video>
                    <video 
                        id='ncx-main-video-mobile'
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        poster="https://ncx.cx/images/ncx_mainvideo_poster.png"
                        >
                        <source src={require('../../../images/ncx_mainvideo_mbl.mp4')} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}
export default Home6thVideoSection;