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
                    totalSlides={34}
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
                                <h3>{t("july_2021")}</h3>
                                <p><span>{t("creation_of_a_ncx_digital_exchange")}</span><span>{t("discovery_phase_product_concept")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="single_map">
                                <h3>Q3 2021</h3>
                                <div className="active border-map"></div>
                                <h3>Q3 2021</h3>
                                <p><span>{t("pre_development_phase")}</span><span>{t("software_architecture")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="single_map">
                                <h3>Q4 2021</h3>
                                <div className="active border-map"></div>
                                <h3>Q4 2021</h3>
                                <p><span>{t("product_backlog")}</span><span>{t("ci_cd_workflow_bpmn")}</span><span>{t("user_flow_development")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="single_map">
                                <h3>Q1 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("january_2022")}</h3>
                                <p><span>{t("product_development_stage")}</span><span>{t("platform_backend_development")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="single_map">
                                <h3>Q1 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("march_2022")}</h3>
                                <p><span>{t("frontend_development")}</span><span>{t("mobile_app_architecture")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={5}>
                            <div className="single_map">
                                <h3>Q3 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("april_2022")}</h3>
                                <p><span>{t("app_development")}</span><span>{t("dex_development")}</span><span>{t("cross_asset_liquidity_integration")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={6}>
                            <div className="single_map">
                                <h3>Q3 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("july_2022")}</h3>
                                <p><span>{t("testing_stage")}</span><span>{t("ncx_platform_beta")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={7}>
                            <div className="single_map">
                                <h3>Q3 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("september_2022")}</h3>
                                <p><span>{t("ncx_cross_chain")}</span><span>{t("dex_beta")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={8}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("october_2022")}</h3>
                                <p>{t("development_of_ncx_defi_wallet")}</p>
                            </div>
                        </Slide>
                        <Slide index={9}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("october_2022")}</h3>
                                <p>{t("deployment_of_ncx_cex_spot_trading")}</p>
                            </div>
                        </Slide>
                        <Slide index={10}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("november_2022")}</h3>
                                <p><span>{t("ncx_token_ncxt_smart")}</span><span>{t("contact_architecture")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={11}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("november_2023")}</h3>
                                <p><span>{t("launch_of_ncx")}</span><span>{t("cross_chain_dex")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={12}>
                            <div className="single_map">
                                <h3>Q1 2023</h3>
                                <div className="active border-map"></div>
                                <h3>{t("february_2022")}</h3>
                                <p>
                                    <span>{t("launch_of_institutional")}</span>
                                    <span>{t("services_and_ncx_otc")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={13}>
                            <div className="single_map">
                                <h3>Q2 2023</h3>
                                <div className="active border-map"></div>
                                <h3>{t("march_2022")}</h3>
                                <p>
                                    <span>{t("ncx_app_release")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={14}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="active border-map"></div>
                                <h3>{t("april_2023")}</h3>
                                <p>
                                    <span>{t("ncx_defi_wallet")}</span>
                                    <span>{t("architecture_&_development")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={15}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>{t("july_2023")}</h3>
                                <p>
                                    <span>{t("ncx_app_2.0")}</span>
                                    <span>{t("release")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={16}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>{t("august_2023")}</h3>
                                <p>
                                    <span>{t("launch_of_ncxt")}</span>
                                    <span>{t("token_private_sale")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={17}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("deployment_of_ncx")}</span>
                                    <span>{t("derivatives_trading")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={18}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("ncx_derivatives_trading")}</span>
                                    <span>{t("app_on_release_on_ios_and_android")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={19}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("growth_of_platform_user_base_through_global_marketing_campaigns")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={20}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("release_of_ncx")}</span>
                                    <span>{t("defi_wallet_app")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={21}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("ncxt_token_generation")}</span>
                                    <span>{t("event_liquidity_lockup")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={22}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("ncxt_release")}</span>
                                    <span>{t("token_allocation_distribution")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={23}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("ncxt_dex_listings")}</span>
                                    <span>{t("launch_of_ncxt")}</span>
                                    <span>{t("spot_trading_on_ncx")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={24}>
                            <div className="single_map">
                                <h3>Q3  2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("deployment_of_liquidity")}</span>
                                    <span>{t("pools_and_yield_farms_on_ncx_dex")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={25}>
                            <div className="single_map">
                                <h3>Q1 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("launch_of_ncxt")}</span>
                                    <span>{t("staking_program")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={26}>
                            <div className="single_map">
                                <h3>Q1 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("release_of_ncx")}</span>
                                    <span>{t("defi_wallet_web_app_and_chrome_extension")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={27}>
                            <div className="single_map">
                                <h3>Q2 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q4  2023</h3>
                                <p>
                                    <span>{t("growth_of_ncx_ecosystem")}</span>
                                    <span>{t("user_base_and_marketshare")}</span>
                                    <span>{t("partnerships_and_integrations")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={28}>
                            <div className="single_map">
                                <h3>Q2 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q4 2023</h3>
                                <p>
                                    <span>{t("ncxt_cex_listings")}</span>
                                    <span>{t("expansion_of_user_base_target_regions_through_regional_marketing_campaigns")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={29}>
                            <div className="single_map">
                                <h3>Q2 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q1 2024</h3>
                                <p>
                                    <span>{t("deployment_ncxt")}</span>
                                    <span>{t("buy_back_burn_mechanism")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={30}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="border-map"></div>
                                <h3>Q1 2024</h3>
                                <p>
                                    <span>{t("launch_of_ncx")}</span>
                                    <span>{t("crypto_debit_card")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={31}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="border-map"></div>
                                <h3>Q2 2024</h3>
                                <p>
                                    <span>{t("addition_of_new_spot_and")}</span>
                                    <span>{t("derivatives_trading")}</span>
                                    <span>{t("assets_and_instruments")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={32}>
                            <div className="single_map">
                                <h3>Q4 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2024</h3>
                                <p>
                                    <span>{t("launch_of_ncx")}</span>
                                    <span>{t("earn_program")}</span>
                                    <span>{t("launch_of_ncx_lending")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={33}>
                            <div className="single_map">
                                <h3>Q4 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q4 2024</h3>
                                <p>
                                    <span>{t("major_ncx_app_update_ncx_app_2.0")}</span>
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
                    totalSlides={34}
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
                                <h3>{t("july_2021")}</h3>
                                <p><span>{t("creation_of_a_ncx_digital_exchange")}</span><span>{t("discovery_phase_product_concept")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="single_map">
                                <h3>Q3 2021</h3>
                                <div className="active border-map"></div>
                                <h3>Q3 2021</h3>
                                <p><span>{t("pre_development_phase")}</span><span>{t("software_architecture")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="single_map">
                                <h3>Q4 2021</h3>
                                <div className="active border-map"></div>
                                <h3>Q4 2021</h3>
                                <p><span>{t("product_backlog")}</span><span>{t("ci_cd_workflow_bpmn")}</span><span>{t("user_flow_development")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="single_map">
                                <h3>Q1 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("january_2022")}</h3>
                                <p><span>{t("product_development_stage")}</span><span>{t("platform_backend_development")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="single_map">
                                <h3>Q1 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("march_2022")}</h3>
                                <p><span>{t("frontend_development")}</span><span>{t("mobile_app_architecture")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={5}>
                            <div className="single_map">
                                <h3>Q3 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("april_2022")}</h3>
                                <p><span>{t("app_development")}</span><span>{t("dex_development")}</span><span>{t("cross_asset_liquidity_integration")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={6}>
                            <div className="single_map">
                                <h3>Q3 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("july_2022")}</h3>
                                <p><span>{t("testing_stage")}</span><span>{t("ncx_platform_beta")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={7}>
                            <div className="single_map">
                                <h3>Q3 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("september_2022")}</h3>
                                <p><span>{t("ncx_cross_chain")}</span><span>{t("dex_beta")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={8}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("october_2022")}</h3>
                                <p>{t("development_of_ncx_defi_wallet")}</p>
                            </div>
                        </Slide>
                        <Slide index={9}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("october_2022")}</h3>
                                <p>{t("deployment_of_ncx_cex_spot_trading")}</p>
                            </div>
                        </Slide>
                        <Slide index={10}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("november_2022")}</h3>
                                <p><span>{t("ncx_token_ncxt_smart")}</span><span>{t("contact_architecture")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={11}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="active border-map"></div>
                                <h3>{t("november_2023")}</h3>
                                <p><span>{t("launch_of_ncx")}</span><span>{t("cross_chain_dex")}</span></p>
                            </div>
                        </Slide>
                        <Slide index={12}>
                            <div className="single_map">
                                <h3>Q1 2023</h3>
                                <div className="active border-map"></div>
                                <h3>{t("february_2022")}</h3>
                                <p>
                                    <span>{t("launch_of_institutional")}</span>
                                    <span>{t("services_and_ncx_otc")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={13}>
                            <div className="single_map">
                                <h3>Q2 2023</h3>
                                <div className="active border-map"></div>
                                <h3>{t("march_2022")}</h3>
                                <p>
                                    <span>{t("ncx_app_release")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={14}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="active border-map"></div>
                                <h3>{t("april_2023")}</h3>
                                <p>
                                    <span>{t("ncx_defi_wallet")}</span>
                                    <span>{t("architecture_&_development")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={15}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>{t("july_2023")}</h3>
                                <p>
                                    <span>{t("ncx_app_2.0")}</span>
                                    <span>{t("release")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={16}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>{t("august_2023")}</h3>
                                <p>
                                    <span>{t("launch_of_ncxt")}</span>
                                    <span>{t("token_private_sale")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={17}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("deployment_of_ncx")}</span>
                                    <span>{t("derivatives_trading")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={18}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("ncx_derivatives_trading")}</span>
                                    <span>{t("app_on_release_on_ios_and_android")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={19}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("growth_of_platform_user_base_through_global_marketing_campaigns")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={20}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("release_of_ncx")}</span>
                                    <span>{t("defi_wallet_app")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={21}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("ncxt_token_generation")}</span>
                                    <span>{t("event_liquidity_lockup")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={22}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("ncxt_release")}</span>
                                    <span>{t("token_allocation_distribution")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={23}>
                            <div className="single_map">
                                <h3>Q3 2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("ncxt_dex_listings")}</span>
                                    <span>{t("launch_of_ncxt")}</span>
                                    <span>{t("spot_trading_on_ncx")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={24}>
                            <div className="single_map">
                                <h3>Q3  2023</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("deployment_of_liquidity")}</span>
                                    <span>{t("pools_and_yield_farms_on_ncx_dex")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={25}>
                            <div className="single_map">
                                <h3>Q1 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("launch_of_ncxt")}</span>
                                    <span>{t("staking_program")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={26}>
                            <div className="single_map">
                                <h3>Q1 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2023</h3>
                                <p>
                                    <span>{t("release_of_ncx")}</span>
                                    <span>{t("defi_wallet_web_app_and_chrome_extension")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={27}>
                            <div className="single_map">
                                <h3>Q2 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q4  2023</h3>
                                <p>
                                    <span>{t("growth_of_ncx_ecosystem")}</span>
                                    <span>{t("user_base_and_marketshare")}</span>
                                    <span>{t("partnerships_and_integrations")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={28}>
                            <div className="single_map">
                                <h3>Q2 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q4 2023</h3>
                                <p>
                                    <span>{t("ncxt_cex_listings")}</span>
                                    <span>{t("expansion_of_user_base_target_regions_through_regional_marketing_campaigns")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={29}>
                            <div className="single_map">
                                <h3>Q2 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q1 2024</h3>
                                <p>
                                    <span>{t("deployment_ncxt")}</span>
                                    <span>{t("buy_back_burn_mechanism")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={30}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="border-map"></div>
                                <h3>Q1 2024</h3>
                                <p>
                                    <span>{t("launch_of_ncx")}</span>
                                    <span>{t("crypto_debit_card")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={31}>
                            <div className="single_map">
                                <h3>Q4 2022</h3>
                                <div className="border-map"></div>
                                <h3>Q2 2024</h3>
                                <p>
                                    <span>{t("addition_of_new_spot_and")}</span>
                                    <span>{t("derivatives_trading")}</span>
                                    <span>{t("assets_and_instruments")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={32}>
                            <div className="single_map">
                                <h3>Q4 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q3 2024</h3>
                                <p>
                                    <span>{t("launch_of_ncx")}</span>
                                    <span>{t("earn_program")}</span>
                                    <span>{t("launch_of_ncx_lending")}</span>
                                </p>
                            </div>
                        </Slide>
                        <Slide index={33}>
                            <div className="single_map">
                                <h3>Q4 2024</h3>
                                <div className="border-map"></div>
                                <h3>Q4 2024</h3>
                                <p>
                                    <span>{t("major_ncx_app_update_ncx_app_2.0")}</span>
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