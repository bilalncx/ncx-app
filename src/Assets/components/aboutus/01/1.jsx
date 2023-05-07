import {React} from "react";
import '../../ambassador/first/first.css';
import Button from "@mui/material/Button";
import CryptoCard1 from '../../../images/crypto_card_2.png';
import CryptoCard2 from '../../../images/ncx-derivatives-trading.png';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import VideSection from '../../../images/home__newvideo.mp4';



function FirstVideo()
{
    const { t } = useTranslation();

    return(
        <div className="crypto_card">
            {/* <div className="ambassador_card row">
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>{t("about_us")}</h1>
                        <p>{t("about_us_text")}</p>
                        <div className="bbttn">
                            <Button href="#" className="card_apply">{t("sign_up")}</Button>
                            <Button href="#about_institution" className="card_learn">{t("learn_more")}</Button>
                        </div>
                    </div>
                </div>
                <div className="col card_imga">
                    <img className="ab_mbl_ex" src={CryptoCard1} alt="ncx_crypto_card" />
                </div>
                <div className="col card_imgb">
                    <img src={CryptoCard2} alt="ncx_crypto_card" />
                </div>
            </div> */}
            <div className="new__ambass">
                <div className="desktop">
                    <video 
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                        >
                        <source src={VideSection} type="video/mp4" />
                    </video>
                </div>
                <div className="container">
                    <div className="insse">
                        <h1>About NCX Hybrid CEX | DEX Trading Platform & DeFi Ecosystem</h1>
                        <Button href="https://my.ncx.cx/register" target="_blank" rel="noreferrer">Sign Up</Button>
                    </div>
                </div>
            </div>

            <div id="mobileSlider">
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>{t("about_us")}</h1>
                        <p>{t("about_us_text")}</p>
                        <div className="bbttn">
                            <Button href="#" className="card_apply">{t("sign_up")}</Button>
                            <Button href="#about_institution" className="card_learn">{t("learn_more")}</Button>
                        </div>
                    </div>
                </div>
                <CarouselProvider
                        visibleSlides={1}
                        totalSlides={2}
                        step={1}
                        naturalSlideWidth={300}
                        naturalSlideHeight={400}
                        // hasMasterSpinner
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >
                    <Slider className="slider">
                        <Slide index={0}>
                            <img src={CryptoCard2} alt="ncx_crypto_card" />
                        </Slide>
                        <Slide index={1}>
                            <img src={CryptoCard1} alt="ncx_crypto_card" />
                        </Slide>
                    </Slider>
                    <ButtonBack className="age"><div className="circle"></div></ButtonBack>
                    <ButtonNext className="pich"><div className="circle"></div></ButtonNext>
                </CarouselProvider>
            </div>
        </div>
    )
}
export default FirstVideo;