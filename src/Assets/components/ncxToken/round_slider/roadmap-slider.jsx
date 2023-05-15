import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ReactComponent as CardArrow } from '../../../images/roadmap-next.svg';
import './roadmap_slider.css';
import { useTranslation } from "react-i18next";
import 'pure-react-carousel/dist/react-carousel.es.css';

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
                    totalSlides={33}
                    step={3}
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
                                <h3>Q2 2021</h3>
                                <div className="active border-map"></div>
                                <h3>July 2021</h3>
                                <p><span>Creation of a NCX Digital Exchange</span><span>Discovery Phase - Product Concept</span></p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="single_map">
                                <h3>Q3 2021</h3>
                                <div className="active border-map"></div>
                                <h3>Q3 2021</h3>
                                <p><span>Pre-Development Phase</span><span>Software Architecture</span></p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="single_map">
                                <h3>Q4 2021</h3>
                                <div className="active border-map"></div>
                                <h3>Q4 2021</h3>
                                <p><span>Product Backlog</span><span>CI/CD Workflow, BPMN</span><span>User Flow Development</span></p>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="single_map">
                                <h3>Q1 2022</h3>
                                <div className="active border-map"></div>
                                <h3>January 2022</h3>
                                <p><span>Product Development Stage</span><span>Platform Backend Development</span></p>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="single_map">
                                <h3>Q1 2022</h3>
                                <div className="active border-map"></div>
                                <h3>March 2022</h3>
                                <p><span>Frontend Development</span><span>Mobile App Architecture</span></p>
                            </div>
                        </Slide>
                        <Slide index={5}>
                            <div className="single_map">
                                <h3>Q3 2022</h3>
                                <div className="active border-map"></div>
                                <h3>April 2022</h3>
                                <p><span>App Development</span><span>DEX Development</span><span>Cross-asset Liquidity Integration</span></p>
                            </div>
                        </Slide>
                        <Slide index={6}>
                            <div className="single_map">
                                <h3>Q3 2022</h3>
                                <div className="active border-map"></div>
                                <h3>July 2022</h3>
                                <p><span>Testing Stage</span><span>NCX Platform Beta</span></p>
                            </div>
                        </Slide>
                        <Slide index={7}>
                            <div className="single_map">
                                <h3>Q3 2022</h3>
                                <div className="active border-map"></div>
                                <h3>September 2022</h3>
                                <p><span>NCX Cross-Chain</span><span>DEX Beta</span></p>
                            </div>
                        </Slide>
                        <Slide index={8}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>October 2022</h3>
                                <p>Development of NCX DeFi Wallet</p>
                            </div>
                        </Slide>
                        <Slide index={9}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>October 2022</h3>
                                <p>Deployment of NCX CEX & Spot Trading</p>
                            </div>
                        </Slide>
                        <Slide index={10}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>November 2022</h3>
                                <p><span>NCX Token (NCXT) Smart</span><span>Contact Architecture</span></p>
                            </div>
                        </Slide>
                        <Slide index={11}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>November 2023</h3>
                                <p><span>Launch of NCX</span><span>Cross-Chain DEX</span></p>
                            </div>
                        </Slide>
                        <Slide index={12}>
                            <div className="single_map">
                                <h3>Q1 2023</h3>
                                <div className="active border-map"></div>
                                <h3>February 2022</h3>
                                <p>
                                    <span>Launch of Institutional</span>
                                    <span>Services and NCX OTC</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={13}>
                            <div className="single_map">
                                <h3>Q2 2023</h3>
                                <div className="active border-map"></div>
                                <h3>March 2023</h3>
                                <p>
                                    <span>NCX DeFi Wallet</span>
                                    <span>Architecture & Development</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={14}>
                            <div className="single_map">
                                <h3>Q2 2023</h3>
                                <div className="border-map"></div>
                                <h3>May 2023</h3>
                                <p>
                                    <span>NCX App Release </span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={15}>
                            <div className="single_map">
                                <h3>Q2 2023</h3>
                                <div className="border-map"></div>
                                <h3>May 2023</h3>
                                <p>
                                    <span>Launch of NCXT</span>
                                    <span>Token Private Sale</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={16}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>June 2023</h3>
                                <p>
                                    <span>Deployment of NCX</span>
                                    <span>Derivatives Trading</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={17}>
                            <div className="single_map">
                                <h3>Q2 2023</h3>
                                <div className="border-map"></div>
                                <h3>June 2023</h3>
                                <p>
                                    <span>NCX Derivatives Trading</span>
                                    <span>App on Release on iOS and Android</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={18}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>Growth of Platform User-base through Global Marketing Campaigns</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={19}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>Release of NCX</span>
                                    <span>DeFi Wallet App</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={20}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>NCXT Token Generation </span>
                                    <span>Event, Liquidity Lockup</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={21}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>NCXT Release,</span>
                                    <span>Token Allocation & Distribution</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={22}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>NCXT DEX Listings</span>
                                    <span>Launch of NCXT </span>
                                    <span>Spot Trading on NCX </span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={23}>
                            <div className="single_map">
                                <h3>Q3  2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>Deployment of Liquidity</span>
                                    <span>Pools and Yield Farms on NCX DEX</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={24}>
                            <div className="single_map">
                                <h3>Q1 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>Launch of NCXT</span>
                                    <span>Staking Program</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={25}>
                            <div className="single_map">
                                <h3>Q1 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>Release of NCX</span>
                                    <span>DeFi Wallet Web App and Chrome Extension</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={26}>
                            <div className="single_map">
                                <h3>Q2 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q4  2023</h3>
                                <p>
                                    <span>Growth of NCX Ecosystem</span>
                                    <span>User-base and Marketshare</span>
                                    <span>Partnerships and Integrations</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={27}>
                            <div className="single_map">
                                <h3>Q2 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q4 2023</h3>
                                <p>
                                    <span>NCXT CEX Listings</span>
                                    <span>Expansion of User-base target Regions through Regional Marketing Campaigns</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={28}>
                            <div className="single_map">
                                <h3>Q2 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q1 2024</h3>
                                <p>
                                    <span>Deployment NCXT</span>
                                    <span>Buy Back & Burn Mechanism</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={29}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="border-map"></div>
                                <h3>Q1 2024</h3>
                                <p>
                                    <span>Launch of NCX</span>
                                    <span>Crypto Debit Card</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={30}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="border-map"></div>
                                <h3>Q2 2024</h3>
                                <p>
                                    <span>Addition of New Spot and</span>
                                    <span>Derivatives Trading</span>
                                    <span>Assets and Instruments</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={31}>
                            <div className="single_map">
                                <h3>Q4 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2024</h3>
                                <p>
                                    <span>Launch of NCX</span>
                                    <span>Earn Program</span>
                                    <span>Launch of NCX Lending</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={32}>
                            <div className="single_map">
                                <h3>Q4 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q4 2024</h3>
                                <p>
                                    <span>Major NCX App Update - NCX App 2.0</span>
                                </p>
                            </div>
                        </Slide>
                    </Slider>
                    <ButtonBack className="tokenback"><CardArrow /></ButtonBack>
                    <ButtonNext className="tokennext"><CardArrow /></ButtonNext>
                </CarouselProvider>
                <CarouselProvider
                    className="mobile"
                    visibleSlides={2}
                    totalSlides={33}
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
                                <h3>Q2 2021</h3>
                                <div className="active border-map"></div>
                                <h3>July 2021</h3>
                                <p><span>Creation of a NCX Digital Exchange</span><span>Discovery Phase - Product Concept</span></p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="single_map">
                                <h3>Q3 2021</h3>
                                <div className="active border-map"></div>
                                <h3>Q3 2021</h3>
                                <p><span>Pre-Development Phase</span><span>Software Architecture</span></p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="single_map">
                                <h3>Q4 2021</h3>
                                <div className="active border-map"></div>
                                <h3>Q4 2021</h3>
                                <p><span>Product Backlog</span><span>CI/CD Workflow, BPMN</span><span>User Flow Development</span></p>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="single_map">
                                <h3>Q1 2022</h3>
                                <div className="active border-map"></div>
                                <h3>January 2022</h3>
                                <p><span>Product Development Stage</span><span>Platform Backend Development</span></p>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="single_map">
                                <h3>Q1 2022</h3>
                                <div className="active border-map"></div>
                                <h3>March 2022</h3>
                                <p><span>Frontend Development</span><span>Mobile App Architecture</span></p>
                            </div>
                        </Slide>
                        <Slide index={5}>
                            <div className="single_map">
                                <h3>Q3 2022</h3>
                                <div className="active border-map"></div>
                                <h3>April 2022</h3>
                                <p><span>App Development</span><span>DEX Development</span><span>Cross-asset Liquidity Integration</span></p>
                            </div>
                        </Slide>
                        <Slide index={6}>
                            <div className="single_map">
                                <h3>Q3 2022</h3>
                                <div className="active border-map"></div>
                                <h3>July 2022</h3>
                                <p><span>Testing Stage</span><span>NCX Platform Beta</span></p>
                            </div>
                        </Slide>
                        <Slide index={7}>
                            <div className="single_map">
                                <h3>Q3 2022</h3>
                                <div className="active border-map"></div>
                                <h3>September 2022</h3>
                                <p><span>NCX Cross-Chain</span><span>DEX Beta</span></p>
                            </div>
                        </Slide>
                        <Slide index={8}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>October 2022</h3>
                                <p>Development of NCX DeFi Wallet</p>
                            </div>
                        </Slide>
                        <Slide index={9}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>October 2022</h3>
                                <p>Deployment of NCX CEX & Spot Trading</p>
                            </div>
                        </Slide>
                        <Slide index={10}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>November 2022</h3>
                                <p><span>NCX Token (NCXT) Smart</span><span>Contact Architecture</span></p>
                            </div>
                        </Slide>
                        <Slide index={11}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>November 2023</h3>
                                <p><span>Launch of NCX</span><span>Cross-Chain DEX</span></p>
                            </div>
                        </Slide>
                        <Slide index={12}>
                            <div className="single_map">
                                <h3>Q1 2023</h3>
                                <div className="active border-map"></div>
                                <h3>February 2022</h3>
                                <p>
                                    <span>Launch of Institutional</span>
                                    <span>Services and NCX OTC</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={13}>
                            <div className="single_map">
                                <h3>Q2 2023</h3>
                                <div className="active border-map"></div>
                                <h3>March 2023</h3>
                                <p>
                                    <span>NCX DeFi Wallet</span>
                                    <span>Architecture & Development</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={14}>
                            <div className="single_map">
                                <h3>Q2 2023</h3>
                                <div className="border-map"></div>
                                <h3>May 2023</h3>
                                <p>
                                    <span>NCX App Release </span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={15}>
                            <div className="single_map">
                                <h3>Q2 2023</h3>
                                <div className="border-map"></div>
                                <h3>May 2023</h3>
                                <p>
                                    <span>Launch of NCXT</span>
                                    <span>Token Private Sale</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={16}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>June 2023</h3>
                                <p>
                                    <span>Deployment of NCX</span>
                                    <span>Derivatives Trading</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={17}>
                            <div className="single_map">
                                <h3>Q2 2023</h3>
                                <div className="border-map"></div>
                                <h3>June 2023</h3>
                                <p>
                                    <span>NCX Derivatives Trading</span>
                                    <span>App on Release on iOS and Android</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={18}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>Growth of Platform User-base through Global Marketing Campaigns</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={19}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>Release of NCX</span>
                                    <span>DeFi Wallet App</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={20}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>NCXT Token Generation </span>
                                    <span>Event, Liquidity Lockup</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={21}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>NCXT Release,</span>
                                    <span>Token Allocation & Distribution</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={22}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>NCXT DEX Listings</span>
                                    <span>Launch of NCXT </span>
                                    <span>Spot Trading on NCX </span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={23}>
                            <div className="single_map">
                                <h3>Q3  2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>Deployment of Liquidity</span>
                                    <span>Pools and Yield Farms on NCX DEX</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={24}>
                            <div className="single_map">
                                <h3>Q1 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>Launch of NCXT</span>
                                    <span>Staking Program</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={25}>
                            <div className="single_map">
                                <h3>Q1 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>Release of NCX</span>
                                    <span>DeFi Wallet Web App and Chrome Extension</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={26}>
                            <div className="single_map">
                                <h3>Q2 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q4  2023</h3>
                                <p>
                                    <span>Growth of NCX Ecosystem</span>
                                    <span>User-base and Marketshare</span>
                                    <span>Partnerships and Integrations</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={27}>
                            <div className="single_map">
                                <h3>Q2 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q4 2023</h3>
                                <p>
                                    <span>NCXT CEX Listings</span>
                                    <span>Expansion of User-base target Regions through Regional Marketing Campaigns</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={28}>
                            <div className="single_map">
                                <h3>Q2 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q1 2024</h3>
                                <p>
                                    <span>Deployment NCXT</span>
                                    <span>Buy Back & Burn Mechanism</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={29}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="border-map"></div>
                                <h3>Q1 2024</h3>
                                <p>
                                    <span>Launch of NCX</span>
                                    <span>Crypto Debit Card</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={30}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="border-map"></div>
                                <h3>Q2 2024</h3>
                                <p>
                                    <span>Addition of New Spot and</span>
                                    <span>Derivatives Trading</span>
                                    <span>Assets and Instruments</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={31}>
                            <div className="single_map">
                                <h3>Q4 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2024</h3>
                                <p>
                                    <span>Launch of NCX</span>
                                    <span>Earn Program</span>
                                    <span>Launch of NCX Lending</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={32}>
                            <div className="single_map">
                                <h3>Q4 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q4 2024</h3>
                                <p>
                                    <span>Major NCX App Update - NCX App 2.0</span>
                                </p>
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