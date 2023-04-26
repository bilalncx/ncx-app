import {React} from "react";
import './new.css';
import Button from "@mui/material/Button";
import CryptoCard1 from '../../../images/ncx-derivatives-trading.png';
import CryptoCard2 from '../../../images/crypto_card_2.png';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import NCXAPPVideo from '../../../images/ncx-wallet-video.mp4';
import OTCMobileVideo from '../../../images/ncx-wallet-video.mp4';
import NCXMarketMvideo from '../../../images/ncx-wallet-video-mbl.mp4';

function FirstVideo()
{
    const { t } = useTranslation();

    return(
        <div id="mkt__mkr__ndd">
            <div className="ambassador_card row">
                <div className="col card_txt">
                <div className="inns-div">
                        <h1>NCX Market Maker</h1>
                        <p>Professional entities who trade with API services and reach a monthly trading volume of 5,000,000 USD in spot/derivatives markets are welcome to apply and become NCX Market Maker.</p>
                        <div className="bbttn">
                            <Button href="#" className="card_apply">{t("apply_now")}</Button>
                            <Button href="#" className="card_learn">{t("learn_more")}</Button>
                        </div>
                    </div>
                </div>
                <div className="col card_imga">
                    {/* <img src={CryptoCard2} alt="ncx_crypto_card" /> */}
                    <img src={CryptoCard1} alt="ncx_crypto_card" />
                </div>
                <div className="col card_imgb">
                    <video
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        >
                        <source src={NCXAPPVideo} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div id="mobileSlider">
                <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    >
                    <source src={NCXMarketMvideo} type="video/mp4" />
                </video>
                {/* <CarouselProvider
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
                </CarouselProvider> */}
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>NCX Market Maker</h1>
                        <p>Professional entities who trade with API services and reach a monthly trading volume of 5,000,000 USD in spot/derivatives markets are welcome to apply and become NCX Market Maker.</p>

                        <div className="bbttn">
                            <Button href="#" className="card_apply">{t("apply_now")}</Button>
                            <Button href="#" className="card_learn">{t("learn_more")}</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FirstVideo;