import { React, useState } from "react";
import './seven.css';
import '../../homepage/accordian/accordian.css';
import BackVideo from '../../../images/ncx-firstslidervideo.mp4';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXLogo from '../../../images/about_logo.svg';
import '../../homepage/NCXOTC/otc.css';
import { ReactComponent as OTC2 } from '../../../images/ncx-otc2.svg';
import { ReactComponent as OTC4 } from '../../../images/ncx-otc4.svg';
import { ReactComponent as OTC5 } from '../../../images/ncx-otc5.svg';
import { ReactComponent as OTC6 } from '../../../images/ncx-otc6.svg';
import { useTranslation } from "react-i18next";
import {ReactComponent as SafeArrow} from '../../../images/safe-arrow.svg';

function NCXAssetManagement()
{
    const { t } = useTranslation();

    // const [selected, setselected] = useState(null);
    // const toggle = (i) => {
    //     if(selected === i){
    //         return setselected(null)
    //     }

    //     setselected(i)
    // }
    return(
        <div id="trading_solutions" className="assets_management">
            <div className="backgrdound-video">
                <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    poster="https://ncx.cx/images/ncx_line_poster.png"
                    >
                    <source src={BackVideo} type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <div className="trading-sol-row">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-otc">
                                <img className="ncx-whitelogo" src={NCXLogo} alt="ncx-whitelogo" />
                                <p>{t("assets_management")}</p>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <div className="accordian_maindiv">
                            <div className="accordian">
                                <details>
                                    <summary>{t("assets_management")}
                                        <span className='red'>
                                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className='contt'>
                                        {t("assets_management_text")}
                                    </div>
                                </details>
                                <details>
                                    <summary>{t("custody_count")}
                                        <span className='red'>
                                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className='contt'>
                                        {t("custody_count_text")}
                                    </div>
                                </details>
                                {/* {data.map((item, i) => (
                                    <div className="item">
                                        <div className='title' onClick={() => toggle(i)}>
                                            <h2>{item.question}</h2>
                                            <span className={selected === i ? 'svg transform' : 'svg'}>
                                                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className={selected === i ? 'content show' : 'content'}>
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                ))} */}
                            </div>
                        </div>
                    </div>
                </div>


                <div id="data__ana" className="why__choose__Otc">
                    <div className="container">
                    <div className="row">
                        <div className="col first">
                            <div className="cho__log">
                                <p>{t("corporations")}</p>
                                <SafeArrow />
                            </div>
                            <div className="trs">
                                <h1>{t("corporations")}</h1>
                                <p>Corporations allocating funds into digital assets and cryptocurrencies as part of their corporate treasury strategy. NCX Custody and Asset Management Service supports corporations to safeguard their digital assets on their balance sheet to hedge against inflation.</p>
                            </div>
                        </div>
                        <div className="col second">
                            <div className="cho__log">
                                <p>{t("cryptocurrency_miners")}</p>
                                <SafeArrow />
                            </div>
                            <div className="trs">
                                <h1>{t("cryptocurrency_miners")}</h1>
                                <p>{t("cryptocurrency_miners_text")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cho__log">
                                <p>High Net-worth Investors</p>
                                <SafeArrow />
                            </div>
                            <div className="trs">
                                <h1>High Networth Investors</h1>
                                <p>Custody and Asset Management service support investors to grant access to their sub-accounts to third-party professional trading or advisory team for treasury management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/* <div className="our_advantages">
                    <h1>{t("our_advantages")}</h1>
                    <div className="OTCsect row">
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>{t("fast_settlement")}</h2>
                                    <p>{t("fast_settlement_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC4 />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>{t("regulatory_compliance")}</h2>
                                    <p>{t("regulatory_compliance_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC5 />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>{t("cryptocurrency_miners")}</h2>
                                    <p>{t("cryptocurrency_miners_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC6 />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>{t("corporations")}</h2>
                                    <p>{t("corporations_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC2 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="OTCsect row mobile assets1">
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>{t("fast_settlement")}</h2>
                                    <p>{t("fast_settlement_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC4 />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>{t("regulatory_compliance")}</h2>
                                    <p>{t("regulatory_compliance_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC5 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="OTCsect row mobile assets2">
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>{t("cryptocurrency_miners")}</h2>
                                    <p>{t("cryptocurrency_miners_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC6 />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>{t("corporations")}</h2>
                                    <p>{t("corporations_text")}</p>
                                </div>
                                <div className="otc-image">
                                    <OTC2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )   
}

// const data = [
//     {
//         question: 'Assets Management',
//         answer: 
//         <div>
//             <p>Investors can create managed subaccounts and grant access rights to your professional trading or advisory team for treasury management. The volume generated during the binding period will be allocated to the trading team's parent account and the account tier will be upgraded in accordance with the transaction volume. Your managed subaccount can enjoy the rate of the trading team's parent account VIP tier.</p>
//         </div>,
//     },
//     {
//         question: 'Custody Account',
//         answer: 
//         <div>
//             <p>Any investment funds or companies that are looking to enhance the security level of their digital assets or need to meet the compliance requirements can use NCX Custody Service. Register your interest with your account manager to apply for custody account.</p>
//         </div>,
//     },
// ]

export default NCXAssetManagement;