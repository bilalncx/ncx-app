import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ReactComponent as CardArrow } from '../../../images/roadmap-next.svg';
import './roadmap_slider.css';
import { useTranslation } from "react-i18next";

function RoadmapSlider()
{
    const { t } = useTranslation();

    return(
        <div className="roadMap_slider">
            <div className="container">
                <h1 className="road-head">{t("road_map")}</h1>
                <CarouselProvider
                    className="desktop"
                    visibleSlides={4}
                    totalSlides={5}
                    step={1}
                    naturalSlideWidth={300}
                    naturalSlideHeight={500}
                    // hasMasterSpinner
                    // isPlaying={true}
                    // interval={3000}
                    // orientation="horizontal"
                    // infinite
                    // playDirectio="forward"
                    >
                    <Slider className="road_slider">
                        <Slide index={0}>
                            <div className="single_map">
                                <h3>{t("q1_2023")}</h3>
                                <div className="active border-map"></div>
                                <h3>{t("jan_apr_2023")}</h3>
                                <p>{t("road_map_para1")}</p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="single_map">
                                <h3>{t("q1_2023")}</h3>
                                <div className="active border-map"></div>
                                <h3>{t("jul_aug_2023")}</h3>
                                <p>{t("road_map_para2")}</p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="single_map">
                                <h3>{t("q1_2023")}</h3>
                                <div className="border-map"></div>
                                <h3>{t("q3_2023")}</h3>
                                <p>{t("road_map_para1")}</p>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="single_map">
                                <h3>{t("q1_2023")}</h3>
                                <div className="border-map"></div>
                                <h3>{t("q4_2023")}</h3>
                                <p>{t("road_map_para3")}</p>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="single_map">
                                <h3>{t("q1_2022")}</h3>
                                <div className="border-map"></div>
                                <h3>{t("january_2022")}</h3>
                                <p>{t("road_map_para4")}</p>
                            </div>
                        </Slide>
                    </Slider>
                    <ButtonBack className="tokenback"><CardArrow /></ButtonBack>
                    <ButtonNext className="tokennext"><CardArrow /></ButtonNext>
                </CarouselProvider>
                <CarouselProvider
                    className="mobile"
                    visibleSlides={2}
                    totalSlides={5}
                    step={1}
                    naturalSlideWidth={300}
                    naturalSlideHeight={500}
                    // hasMasterSpinner
                    // isPlaying={true}
                    // interval={3000}
                    // orientation="horizontal"
                    // infinite
                    // playDirectio="forward"
                    >
                    <Slider className="road_slider">
                        <Slide index={0}>
                            <div className="single_map">
                                <h3>{t("q1_2023")}</h3>
                                <div className="active border-map"></div>
                                <h3>{t("jan_apr_2023")}</h3>
                                <p>{t("road_map_para1")}</p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="single_map">
                                <h3>{t("q1_2023")}</h3>
                                <div className="active border-map"></div>
                                <h3>{t("jul_aug_2023")}</h3>
                                <p>{t("road_map_para2")}</p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="single_map">
                                <h3>{t("q1_2023")}</h3>
                                <div className="border-map"></div>
                                <h3>{t("q3_2023")}</h3>
                                <p>{t("road_map_para1")}</p>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="single_map">
                                <h3>{t("q1_2023")}</h3>
                                <div className="border-map"></div>
                                <h3>{t("q4_2023")}</h3>
                                <p>{t("road_map_para3")}</p>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="single_map">
                                <h3>{t("q1_2022")}</h3>
                                <div className="border-map"></div>
                                <h3>{t("january_2022")}</h3>
                                <p>{t("road_map_para4")}</p>
                            </div>
                        </Slide>
                    </Slider>
                    <ButtonBack className="tokenback"><CardArrow /></ButtonBack>
                    <ButtonNext className="tokennext"><CardArrow /></ButtonNext>
                </CarouselProvider>
            </div>
        </div>
    )
}
export default RoadmapSlider;