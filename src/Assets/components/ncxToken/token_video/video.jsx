import  React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Button from "@mui/material/Button";
import '../../homepage/6thvideosection/newgeneration.css';
import { ReactComponent as NCXInfoIcon } from '../../../images/ncx-infosign.svg';
import { useTranslation } from "react-i18next";

function Home6thVideoSection(){

    const { t } = useTranslation();

    return(
        <div id="token_video" className="new-generation">
            <div className="container">
                <div className="generate-div">
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <h1>{t("complete_tasks")}</h1>
                        <h1>{t("earn_ncx_tokens")}</h1>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <p>{t("tasks_complete_paragraph")}</p>
                    </AnimationOnScroll>
                    
                    <div className="ncxtask row">
                        <div className="taskdiv one">
                            <h3>4,000 <span>NCXT</span></h3>
                            <div className="taskdiv11">
                                <div className="text212">
                                    <h4>{t("sign_up_verify")}</h4>
                                    <p>{t("new_user_must_complete_at_least_one_purchase")}</p>
                                </div>
                                <div className="buttoninfo">
                                    <Button href="/rewards" alt="NCX Task Start">{t("start_task")}</Button>
                                    <NCXInfoIcon />
                                </div>
                            </div>
                        </div>
                        <div className="taskdiv two">
                            <h3>1,250 <span>NCXT</span></h3>
                            <div className="taskdiv11">
                                <div className="text212">
                                    <h4>{t("reach_$10000_in_derivatives_trading_volume")}</h4>
                                    <p>{t("for_new_users_only")}</p>
                                </div>
                                <div className="buttoninfo">
                                    <Button href="/rewards" alt="NCX Task Start">{t("view_all")}</Button>
                                    <NCXInfoIcon />
                                </div>
                            </div>
                        </div>
                        {/* <div className="taskdiv">
                            <h3 className="secondtask">1,250 <span>NCXT</span></h3>
                            <div className="text212">
                                <h4>Reach $10,000+ in Derivatives Trading Volume </h4>
                                <div className="buttoninfo">
                                    <p>For new user only</p>
                                    <NCXInfoIcon />
                                </div>
                            </div>
                        </div> */}
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