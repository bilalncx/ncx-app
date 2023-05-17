import {React} from "react";
import Button from "@mui/material/Button";
import CryptoCard1 from '../../../images/ncx-derivatives-trading.png';
import CryptoCard2 from '../../../images/crypto_card_2.png';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import NCXAPPVideo from '../../../images/ncx_app_vi.mp4';
import OTCMobileVideo from '../../../images/buy_page.mp4';
import VideSection from '../../../images/home__newvideo.mp4';

function FirstVideo()
{
    const { t } = useTranslation();

    return(
        <div className="institutional__ser">
            {/* <div className="ambassador_card row">
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>{t("NCX")}</h1>
                        <h1>{t("institutional")}</h1>
                        <h1>{t("services")}</h1>
                        <div className="bbttn">
                            <Button href="#" className="card_apply">{t("contact_us")}</Button>
                            <Button href="#solutions_institutional" className="card_learn">{t("learn_more")}</Button>
                        </div>
                    </div>
                </div>
                <div className="col card_imga">
                    <video
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        >
                        <source src={NCXAPPVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="col card_imgb">
                    <img src={CryptoCard1} alt="ncx_crypto_card" />
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
                        <h1>{t("ncx_institutional_services_for_commercial_entities_funds_brokerages_xchange_hnwi")}</h1>
                        <Button href="mailto: support@ncx.cx">{t("apply")}</Button>
                    </div>
                </div>
            </div>

            <div id="mobileSlider">
                <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    >
                    <source src={VideSection} type="video/mp4" />
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
                        <h1>{t("ncx_institutional_services_for_commercial_entities_funds_brokerages_xchange_hnwi")}</h1>
                        {/* <div className="bbttn">
                            <Button href="#" className="card_apply">{t("apply_now")}</Button>
                            <Button href="#solutions_institutional" className="card_learn">{t("learn_more")}</Button>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FirstVideo;