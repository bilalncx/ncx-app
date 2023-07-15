import {React} from "react";
import '../../ambassador/first/first.css';
import Button from "@mui/material/Button";
import CryptoCard2 from '../../../images/ncx-derivatives-trading.png';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';



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
                    <img className="ab_mbl_ex" src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689418805/crypto_card_2_odjj5j.png" alt="ncx_crypto_card" />
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
                        <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689417010/home__newvideo_tan229.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="container">
                    <div className="insse">
                        <h1>{t("about_ncx_hybrid_cex_dex_ecosystem")}</h1>
                        <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer">{t("sign_up")}</Button>
                    </div>
                </div>
            </div>

            <div id="mobileSlider">
                <video 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                    >
                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689417010/home__newvideo_tan229.mp4" type="video/mp4" />
                </video>
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>{t("about_us")}</h1>
                        <p>{t("about_us_text")}</p>
                        {/* <div className="bbttn">
                            <Button href="#" className="card_apply">{t("sign_up")}</Button>
                            <Button href="#about_institution" className="card_learn">{t("learn_more")}</Button>
                        </div> */}
                    </div>
                </div>
                {/* <CarouselProvider
                        visibleSlides={1}
                        totalSlides={2}
                        step={1}
                        naturalSlideWidth={300}
                        naturalSlideHeight={400}
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
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689418805/crypto_card_2_odjj5j.png" alt="ncx_crypto_card" />
                        </Slide>
                    </Slider>
                    <ButtonBack className="age"><div className="circle"></div></ButtonBack>
                    <ButtonNext className="pich"><div className="circle"></div></ButtonNext>
                </CarouselProvider> */}
            </div>
        </div>
    )
}
export default FirstVideo;