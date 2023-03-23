import  React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
// import Sidebtn1 from '../images/rightbtn1.png';
// import Sidebtn2 from '../images/rightbtn2.png';
// import PinkArrow from '../images/pinkarrow.png'; 
import './cexdex.css';
import { ReactComponent as BlueTick } from '../../../images/blue-dex-checkmark.svg';
import { ReactComponent as PurpleTick } from '../../../images/purple-dex-checkmark.svg';
import { ReactComponent as BlackTick } from '../../../images/black-tickmark.svg';
import { ReactComponent as OptionalBox } from '../../../images/optionalbox.svg';
function HomeCEXDEXTableSection()
{
    return(
        <div className="dex-table">
                <div className="container">
                    <div className="text-table">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h1>Advanced CEX, DEX & Trading features on one platform </h1>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <p>Utilising the power of Decentralised Finance with the ease of use & advantages of a traditional Cryptocurrency Exchange</p>
                            <p>and advanced Trading Platform in a single, cutting-edge, all-in-one platform and scalable ecosystem</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="tabledex">
                        <div className="row head">
                            <div className="col one"></div>
                            <div className="col two">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>NCX</h2>
                                </AnimationOnScroll>
                            </div>
                            <div className="col three">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>CEX</h2>
                                </AnimationOnScroll>
                            </div>
                            <div className="col four">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h2>DEX</h2>
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className="row body">
                            {/* <div className="col one">
                                <div className="whitearrow">
                                    <h3>Design + Planning</h3>
                                    <svg width="11" height="288" viewBox="0 0 11 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_634_2285)">
                                        <path d="M6.18338 4.40039H4.83594V285.055H6.18338V4.40039Z" fill="white"/>
                                        <path d="M5.50934 7.66358C6.99769 7.66358 8.20423 6.2025 8.20423 4.40015C8.20423 2.59781 6.99769 1.13672 5.50934 1.13672C4.021 1.13672 2.81445 2.59781 2.81445 4.40015C2.81445 6.2025 4.021 7.66358 5.50934 7.66358Z" fill="white"/>
                                        <path d="M8.60651 281.207L5.51127 286.773L2.41602 281.207L5.36186 282.973L5.51127 283.062L5.66068 282.973L8.60651 281.207Z" fill="white" stroke="white" stroke-width="0.673721"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_634_2285">
                                        <rect width="10" height="287" fill="white" transform="translate(0.5 0.835938)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="pinkarrow">
                                    <h3>Development</h3>
                                    <img src={PinkArrow} alt="ncx-pinkarrow"/>
                                    <svg width="11" height="246" viewBox="0 0 11 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_634_2292)">
                                        <path d="M6.18563 0.835938H4.81641V241.884H6.18563V0.835938Z" fill="#BB6BD9"/>
                                        <path d="M8.60651 238.043L5.51127 244.096L2.41602 238.043L5.36186 239.963L5.51127 240.061L5.66068 239.963L8.60651 238.043Z" fill="#BB6BD9" stroke="#BB6BD9" stroke-width="0.673721"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_634_2292">
                                        <rect width="10" height="245" fill="white" transform="translate(0.5 0.835938)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div> */}
                            <div className="col two">
                                <div className="row body-text">
                                    <div className="txt-cl">
                                        <h3>Security</h3>
                                        <h3>Margin Trading</h3>
                                        <h3>Fees</h3>
                                        <h3>User Interface</h3>
                                        <h3>Transaction Congestion</h3>
                                        <h3>Trading Speed & Volume</h3>
                                        <h3>Transaction Confirmation Latency</h3>
                                        <h3>Cross Chain Swap</h3>
                                        <h3>Staking</h3>
                                        <h3>Equities Trading<span>(USA, EU, ASIA Stock Market)</span></h3>
                                    </div>
                                    <div className="txt-blue">
                                        <h3>High</h3>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Low</h3>
                                        <h3>User Friendly</h3>
                                        <h3>Low</h3>
                                        <h3>High</h3>
                                        <h3>Low</h3>
                                        <h3>Decentalised</h3>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="txt-blue">
                                        <h3>Low</h3>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Low</h3>
                                        <h3>User Friendly</h3>
                                        <h3>Low</h3>
                                        <h3>High</h3>
                                        <h3>Low</h3>
                                        <h3>Centalised</h3>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="txt-blue">
                                        <h3>High</h3>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>High</h3>
                                        <h3>Complex</h3>
                                        <h3>High</h3>
                                        <h3>Low</h3>
                                        <h3>High</h3>
                                        <h3>Decentalised</h3>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="row body-text second">
                                    <div className="txt-cl">
                                        <h3>Derivatives Trading</h3>
                                        <h3>Crypto Debit Card</h3>
                                        <h3>DeFi Wallet</h3>
                                        <h3>Fiat Deposits / Withdrawals</h3>
                                        <h3>Crypto-Fiat Trading Pairs</h3>
                                        <h3>Commodities Trading</h3>
                                        <h3>Forex Trading</h3>
                                        <h3>ETF's Trading</h3>
                                        <h3>OTC Trading</h3>
                                        <h3>Institutional Services</h3>
                                        <h3>24/7 Support</h3>
                                        <h3>Coverage</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Global**</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Regional</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Global</h3>
                                    </div>
                                </div>
                                <div className="agreement-p">
                                    <p>**- NCX Platform is available Globally apart of Restricted Jurisdictions listed in <span><a href="https://ncx.cx/user-agreement">User Agreement</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mobile-tabsection">
                        <div className="btn-dexmbl">
                            <h1>Features</h1>
                            <h1>NCX</h1>
                            <h1>CEX</h1>
                            <h1>DEX</h1>
                        </div>
                        <div className="row">
                            <div className="mbl-dexheading">
                                <h3>Security</h3>
                                <h3>Margin Trading</h3>
                                <h3>Fees</h3>
                                <h3>User Interface</h3>
                                <h3>Transaction Congestion</h3>
                                <h3>Trading Speed & Volume</h3>
                                <h3>Transaction Confirmation Latency</h3>
                                <h3>Cross Chain Swap</h3>
                                <h3>Staking</h3>
                                <h3>Equities Trading <span>(USA, EU, ASIA Stock Market)</span></h3>
                                <h3>Derivatives Trading</h3>
                                <h3>Crypto Debit Card</h3>
                                <h3>DeFi Wallet</h3>
                                <h3>Fiat Deposits / Withdrawals</h3>
                                <h3>Crypto-Fiat Trading Pairs</h3>
                                <h3>Commodities Trading</h3>
                                <h3>Forex Trading</h3>
                                <h3>ETF's Trading</h3>
                                <h3>OTC Trading</h3>
                                <h3>Institutional Services</h3>
                                <h3>24/7 Support</h3>
                                <h3>Coverage</h3>
                            </div>
                            <div className="mbl-dexcont1">
                                <h3>High</h3>
                                <div className="tickbox">
                                    <BlueTick />
                                </div>
                                <h3>Low</h3>
                                <h3>User Friendly</h3>
                                <h3>Low</h3>
                                <h3>High</h3>
                                <h3>Low</h3>
                                <h3>Decentalised</h3>
                                <div className="tickbox">
                                    <BlueTick />
                                </div>
                                <div className="tickbox sas">
                                    <BlueTick />
                                </div>
                                <div className="tickbox purple">
                                    <PurpleTick />
                                </div>
                                <div className="tickbox purple">
                                    <PurpleTick />
                                </div>
                                <div className="tickbox purple">
                                    <PurpleTick />
                                </div>
                                <div className="tickbox purple sas">
                                    <PurpleTick />
                                </div>
                                <div className="tickbox purple sas">
                                    <PurpleTick />
                                </div>
                                <div className="tickbox purple">
                                    <PurpleTick />
                                </div>
                                <div className="tickbox purple">
                                    <PurpleTick />
                                </div>
                                <div className="tickbox purple">
                                    <PurpleTick />
                                </div>
                                <div className="tickbox purple">
                                    <PurpleTick />
                                </div>
                                <div className="tickbox purple">
                                    <PurpleTick />
                                </div>
                                <div className="tickbox purple">
                                    <PurpleTick />
                                </div>
                                <h3 className="purple">Global**</h3>
                            </div>
                            <div className="mbl-dexcont2">
                                <h3>Low</h3>
                                <div className="tickbox">
                                    <BlackTick />
                                </div>
                                <h3>Low</h3>
                                <h3>User Friendly</h3>
                                <h3>Low</h3>
                                <h3>High</h3>
                                <h3>Low</h3>
                                <h3>Centalised</h3>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox sas">
                                    <OptionalBox />
                                </div>
                                <div className="tickbox">
                                    <BlackTick />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="tickbox sas">
                                    <BlackTick />
                                </div>
                                <div className="tickbox sas">
                                    <BlackTick />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="tickbox">
                                    <BlackTick />
                                </div>
                                <div className="tickbox">
                                    <BlackTick />
                                </div>
                                <div className="tickbox">
                                    <BlackTick />
                                </div>
                                <h3>Regional</h3>
                            </div>
                            <div className="mbl-dexcont3">
                                <h3>High</h3>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <h3>High</h3>
                                <h3>Complex</h3>
                                <h3>High</h3>
                                <h3>Low</h3>
                                <h3>High</h3>
                                <h3>Decentalised</h3>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="tickbox sas">
                                    <BlackTick />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox sas">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox sas">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <div className="optionalbox">
                                    <OptionalBox />
                                </div>
                                <h3>Global</h3>
                            </div>
                        </div>
                        <div className="mobile-bp">
                            <p>**- NCX Platform is available Globally apart of Restricted Jurisdictions listed in <span><a href="https://ncx.cx/user-agreement">User Agreement</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default HomeCEXDEXTableSection;