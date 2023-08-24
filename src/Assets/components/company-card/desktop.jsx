import React from "react";
import './style.css';
import '../cardpage/newcardpagedesign/style.css';
import Button from "@mui/material/Button";
import CardBox from '../cardpage/newcardpagedesign/CryptoCardSet';
import { ReactComponent as WhiteTick } from '../../images/white-tick.svg';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ReactComponent as CardLeftArrow } from '../../images/card_leftarrow.svg';
import { ReactComponent as CardRightArrow } from '../../images/card_rightarrow.svg';
import { useTranslation } from "react-i18next";

function AccountingDesktop(){
    
    const { t } = useTranslation();

    return(
        <div className="accnt__pg">
            <div className="accnt__v one">
                <div className="container">
                    <div className="row">
                        <div className="col sdf">
                            <h2>Company Crypto Debit <span>Cards for your Business</span></h2>
                            <ul>
                                <li>Spending Limits up to $150,000 per month per card</li>
                                <li>Free corporate cards included in all our plans</li>
                                <li>Customer support 24 hours 7 days a week</li>
                            </ul>
                            <Button href="#">Compare Cards</Button>
                        </div>
                        <div className="col mgi">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692876501/15_2_orwci6.png" alt="ncx"/>
                        </div>
                    </div>
                </div>
            </div>

            <div id="compare-cards" className="range_cards">
                <div className="container">
                <h1 className="rnag_gg">NCX Company Crypto Debit Cards Range</h1>
                    <div className="card_bt">
                        <div className="vwexx">
                            <div className="qwrc"></div>
                            <div className="qwrc">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card4_keteg6.png" alt="ncx-card"/>
                                <p>{t("select_card")}</p>
                            </div>
                            <div className="qwrc">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card5_cmrw2c.png" alt="ncx-card"/>
                                <p>{t("gold_card")}</p>
                            </div>
                            <div className="qwrc">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card3_mibabk.png" alt="ncx-card"/>
                                <p>{t("plantinum_card")}</p>
                            </div>
                            <div className="qwrc">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card2_zcdgg0.png" alt="ncx-card"/>
                                <p>{t("black_card")}</p>
                            </div>
                        </div>
                        <div className="vwexx">
                            <div className="qwrc fcisc">
                                <p>Card Payment Limits</p>
                                <span>Per calendar month</span>
                            </div>
                            <div className="qwrc">
                                <p>$15,000</p>
                            </div>
                            <div className="qwrc">
                                <p>$35,000</p>
                            </div>
                            <div className="qwrc">
                                <p>$75,000</p>
                            </div>
                            <div className="qwrc">
                                <p>$150,000</p>
                            </div>
                        </div>
                        <div className="vwexx">
                            <div className="qwrc fcisc">
                                <p>Cash Withdrawal Limits</p>
                                <span>Per calendar month</span>
                            </div>
                            <div className="qwrc">
                                <p>$2,500</p>
                            </div>
                            <div className="qwrc">
                                <p>$5,000</p>
                            </div>
                            <div className="qwrc">
                                <p>$10,000</p>
                            </div>
                            <div className="qwrc">
                                <p>$20,000</p>
                            </div>
                        </div>
                        <div className="vwexx">
                            <div className="qwrc fcisc">
                            <p>Cash Withdrawals Included</p>
                                <span>Then $2 excl. VAT per withdrawal</span>
                            </div>
                            <div className="qwrc">
                                <p>0</p>
                            </div>
                            <div className="qwrc">
                                <p>5</p>
                            </div>
                            <div className="qwrc">
                                <p>10</p>
                            </div>
                            <div className="qwrc">
                                <p>Unlimited</p>
                            </div>
                        </div>
                        <div className="vwexx">
                            <div className="qwrc fcisc">
                                <p>Compatible with Apple Pay, Google Pay </p>
                            </div>
                            <div className="qwrc">
                                <WhiteTick />
                            </div>
                            <div className="qwrc">
                                <WhiteTick />
                            </div>
                            <div className="qwrc">
                                <WhiteTick />
                            </div>
                            <div className="qwrc">
                                <WhiteTick />
                            </div>
                        </div>
                    </div>

                    <div className="card_rnag_mbl">
                        <CarouselProvider
                            visibleSlides={1}
                            totalSlides={4}
                            step={1}
                            naturalSlideWidth={300}
                            naturalSlideHeight={500}
                            // hasMasterSpinner
                            isPlaying={true}
                            interval={3000}
                            orientation="horizontal"
                            infinite
                            playDirection="forward"
                        >
                            <div className="cscs__bt">
                                <ButtonBack className="mht"><CardLeftArrow /></ButtonBack>
                                <ButtonNext className="ertgb"><CardRightArrow /></ButtonNext>
                            </div>

                            <Slider 
                            className="pjiur"
                            classNameAnimation="scroll"
                            >
                                <Slide index={0} className="yuio">
                                    <div className="qwrc">
                                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card4_keteg6.png" alt="ncx-card"/>
                                        <p>{t("select_card")}</p>
                                    </div>
                                    <div className="mjhgf">
                                        <div className="ytrew">
                                            <div className="vyth">
                                            <p>Card Payment Limits</p>
                                                <span>Per calendar month</span>
                                            </div>
                                            <div className="tujhg">
                                                <p>$15,000</p>
                                            </div>
                                        </div>

                                        <div className="ytrew">
                                            <div className="vyth">
                                                <p>Cash Withdrawal Limits</p>
                                                <span>Per calendar month</span>
                                            </div>
                                            <div className="tujhg">
                                                <p>$2,500</p>
                                            </div>
                                        </div>

                                        <div className="ytrew">
                                            <div className="vyth">
                                            <p>Cash Withdrawals Included</p>
                                                <span>Then $2 excl. VAT per withdrawal</span>
                                            </div>
                                            <div className="tujhg">
                                                <p>0</p>
                                            </div>
                                        </div>

                                        <div className="ytrew">
                                            <div className="vyth">
                                                <p>Compatible with Apple Pay,Google Pay </p>
                                            </div>
                                            <div className="tujhg">
                                                <WhiteTick />
                                            </div>
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={1} className="yuio">
                                    <div className="qwrc">
                                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card5_cmrw2c.png" alt="ncx-card"/>
                                        <p>{t("gold_card")}</p>
                                    </div>
                                    <div className="mjhgf">
                                        <div className="ytrew">
                                            <div className="vyth">
                                            <p>Card Payment Limits</p>
                                                <span>Per calendar month</span>
                                            </div>
                                            <div className="tujhg">
                                                <p>$35,000</p>
                                            </div>
                                        </div>

                                        <div className="ytrew">
                                            <div className="vyth">
                                                <p>Cash Withdrawal Limits</p>
                                                <span>Per calendar month</span>
                                            </div>
                                            <div className="tujhg">
                                                <p>$5,000</p>
                                            </div>
                                        </div>

                                        <div className="ytrew">
                                            <div className="vyth">
                                            <p>Cash Withdrawals Included</p>
                                                <span>Then $2 excl. VAT per withdrawal</span>
                                            </div>
                                            <div className="tujhg">
                                                <p>5</p>
                                            </div>
                                        </div>

                                        <div className="ytrew">
                                            <div className="vyth">
                                                <p>Compatible with Apple Pay,Google Pay </p>
                                            </div>
                                            <div className="tujhg">
                                                <WhiteTick />
                                            </div>
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={2} className="yuio">
                                    <div className="qwrc">
                                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card3_mibabk.png" alt="ncx-card"/>
                                        <p>{t("plantinum_card")}</p>
                                    </div>
                                    <div className="mjhgf">
                                        <div className="ytrew">
                                            <div className="vyth">
                                            <p>Card Payment Limits</p>
                                                <span>Per calendar month</span>
                                            </div>
                                            <div className="tujhg">
                                                <p>$75,000</p>
                                            </div>
                                        </div>

                                        <div className="ytrew">
                                            <div className="vyth">
                                                <p>Cash Withdrawal Limits</p>
                                                <span>Per calendar month</span>
                                            </div>
                                            <div className="tujhg">
                                                <p>$10,000</p>
                                            </div>
                                        </div>

                                        <div className="ytrew">
                                            <div className="vyth">
                                            <p>Cash Withdrawals Included</p>
                                                <span>Then $2 excl. VAT per withdrawal</span>
                                            </div>
                                            <div className="tujhg">
                                                <p>10</p>
                                            </div>
                                        </div>

                                        <div className="ytrew">
                                            <div className="vyth">
                                                <p>Compatible with Apple Pay,Google Pay </p>
                                            </div>
                                            <div className="tujhg">
                                                <WhiteTick />
                                            </div>
                                        </div>
                                    </div>
                                </Slide>

                                <Slide index={3} className="yuio">
                                    <div className="qwrc">
                                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card2_zcdgg0.png" alt="ncx-card"/>
                                        <p>{t("black_card")}</p>
                                    </div>
                                    <div className="mjhgf">
                                        <div className="ytrew">
                                            <div className="vyth">
                                            <p>Card Payment Limits</p>
                                                <span>Per calendar month</span>
                                            </div>
                                            <div className="tujhg">
                                                <p>$150,000</p>
                                            </div>
                                        </div>

                                        <div className="ytrew">
                                            <div className="vyth">
                                                <p>Cash Withdrawal Limits</p>
                                                <span>Per calendar month</span>
                                            </div>
                                            <div className="tujhg">
                                                <p>$20,000</p>
                                            </div>
                                        </div>

                                        <div className="ytrew">
                                            <div className="vyth">
                                            <p>Cash Withdrawals Included</p>
                                                <span>Then $2 excl. VAT per withdrawal</span>
                                            </div>
                                            <div className="tujhg">
                                                <p>Unlimited</p>
                                            </div>
                                        </div>

                                        <div className="ytrew">
                                            <div className="vyth">
                                                <p>Compatible with Apple Pay,Google Pay </p>
                                            </div>
                                            <div className="tujhg">
                                                <WhiteTick />
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </Slider>

                        </CarouselProvider>
                    </div>
                </div>
            </div>

            <div className="accnt__v tw">
                <div className="container">
                    <div className="row xcm">
                        <div className="col mla">
                            <h2>Supervise your spending</h2>
                            <ul>
                                <li>Block and unblock corporate cards in just a few clicks</li>
                                <li>Set payment limits and track your expenses in real-time</li>
                                <li>Approve transactions directly from the app - all backed by 3-D Secure technology</li>
                            </ul>
                            <div className="rtD">
                                <Button href="#">Compare our Plans</Button>
                            </div>
                        </div>
                        <div className="col">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692687037/31-min_y9urtu.png" alt="ncx"/>
                        </div>
                    </div>
                </div>
            </div>

            <CardBox />

            <div className="accnt__v asczz">
                <h2>Save time. For yourself and for your team.</h2>
                <div id="cardarticles">
                    <div id="NCXCreditCardSlider">
                        <CarouselProvider
                            visibleSlides={3}
                            totalSlides={4}
                            step={1}
                            naturalSlideWidth={300}
                            naturalSlideHeight={500}
                        >
                        <Slider className="slider">
                            <Slide index={0}>
                                <article className='ncxcard01'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692857270/06_acmk4i.png" alt="ncx"/>
                                    <h3>Digitize your receipts</h3>
                                    <p>No more holding onto your receipts. Instead, scan and upload them to your account. Digital receipts possess official certification and hold equivalent legal validity to traditional paper receipts.</p>
                                    <a href="#">Simplify your bookkeeping</a>
                                </article>
                            </Slide>
                            <Slide index={1}>
                                <article className='ncxcard01'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692857270/07_wsx88g.png" alt="ncx"/>
                                    <h3>Optimised invoice management</h3>
                                    <p>Save valuable time by eliminating the manual entry of customer and supplier information. Our system will even automatically identify your Value Added Tax (VAT) for your convenience.</p>
                                    <a href="#">Discover invoice management</a>
                                </article>
                            </Slide>
                            <Slide index={2}>
                                <article className='ncxcard01'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692857270/08_dg02dl.png" alt="ncx"/>
                                    <h3>Bookkeeping in a flash</h3>
                                    <p>Streamline your workflow and save time by linking NCX with your preferred accounting software, facilitating seamless data integration with NCX effortless bookkeeping.</p>
                                    <a href="#">Discover NCX bookkeeping tools</a>
                                </article>
                            </Slide>
                            <Slide index={3}>
                                <article className='ncxcard01 vb'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692857270/61_qwowq8.png" alt="ncx"/>
                                    <h3>Pre-defined access rights</h3>
                                    <p>Asset manager, trader, accountant, business manager or employee - give your team exactly the access rights and limits they need to use NCX Platform as per your set requirements, get notified of opened/closed positions with push notifications.</p>
                                    <a href="#">Access rights</a>
                                </article>
                            </Slide>
                        </Slider>
                        <ButtonBack className="buttonBack"><CardLeftArrow /></ButtonBack>
                        <ButtonNext className="buttonNext"><CardRightArrow /></ButtonNext>
                        </CarouselProvider>
                    </div>
                    <div id="NCXCreditCardSlider" className="mobile-ss">
                        <CarouselProvider
                            visibleSlides={1}
                            totalSlides={4}
                            step={1}
                            // naturalSlideWidth={300}
                            // naturalSlideHeight={500}
                            // hasMasterSpinner
                            // isPlaying={true}
                            // interval={3000}
                            orientation="horizontal"
                            infinite
                            playDirectio="forward"
                        >
                        <Slider className="slider">
                            <Slide index={0}>
                                <article className='ncxcard01'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692857270/06_acmk4i.png" alt="ncx"/>
                                    <h3>Digitize your receipts</h3>
                                    <p>No more holding onto your receipts. Instead, scan and upload them to your account. Digital receipts possess official certification and hold equivalent legal validity to traditional paper receipts.</p>
                                    <a href="#">Simplify your bookkeeping</a>
                                </article>
                            </Slide>
                            <Slide index={1}>
                                <article className='ncxcard01'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692857270/07_wsx88g.png" alt="ncx"/>
                                    <h3>Optimised invoice management</h3>
                                    <p>Save valuable time by eliminating the manual entry of customer and supplier information. Our system will even automatically identify your Value Added Tax (VAT) for your convenience.</p>
                                    <a href="#">Discover invoice management</a>
                                </article>
                            </Slide>
                            <Slide index={2}>
                                <article className='ncxcard01'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692857270/08_dg02dl.png" alt="ncx"/>
                                    <h3>Bookkeeping in a flash</h3>
                                    <p>Streamline your workflow and save time by linking NCX with your preferred accounting software, facilitating seamless data integration with NCX effortless bookkeeping.</p>
                                    <a href="#">Discover NCX bookkeeping tools</a>
                                </article>
                            </Slide>
                            <Slide index={3}>
                                <article className='ncxcard01 vb'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692857270/61_qwowq8.png" alt="ncx"/>
                                    <h3>Pre-defined access rights</h3>
                                    <p>Asset manager, trader, accountant, business manager or employee - give your team exactly the access rights and limits they need to use NCX Platform as per your set requirements, get notified of opened/closed positions with push notifications.</p>
                                    <a href="#">Access rights</a>
                                </article>
                            </Slide>
                        </Slider>
                        <div className="bvb">
                            <ButtonBack className="buttonBack"><CardLeftArrow /></ButtonBack>
                            <ButtonNext className="buttonNext"><CardRightArrow /></ButtonNext>
                        </div>
                        </CarouselProvider>
                    </div>
                </div>
            </div>

            <div className="aerv">
                <div className="container">
                    <div className="row aeewf">
                        <div className="col verhnb">
                        <h1>Your Questions <br/>about corporate <br/>cards</h1>
                        </div>
                        <div className="col vwev">
                            <div className="accordian">
                                <details open>
                                    <summary>How do I withdraw money with my NCX business card?
                                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.311311 0.418754C0.622234 0.0619783 1.12633 0.0619783 1.43725 0.418754L8.03968 7.99547L14.6421 0.418754C14.953 0.0619783 15.4571 0.0619783 15.768 0.418754C16.0789 0.77553 16.0789 1.35405 15.768 1.71082L8.60264 9.93358C8.29174 10.2904 7.78762 10.2904 7.47672 9.93358L0.311311 1.71082C0.000396326 1.35405 0.000396326 0.77553 0.311311 0.418754Z" fill="#FAFAFA"/>
                                    </svg>
                                    </summary>
                                    <div className='contt'>
                                        <p>ATM Withdrawals up to  $20,000 per month per card, depending on the card tier. You can set limits on weekly or monthly ATM withdrawals for each card - depending on your preferences - to help you better manage your team's budget.</p>
                                    </div>
                                </details>
                                <details>
                                    <summary>How much does a NCX card cost?
                                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.311311 0.418754C0.622234 0.0619783 1.12633 0.0619783 1.43725 0.418754L8.03968 7.99547L14.6421 0.418754C14.953 0.0619783 15.4571 0.0619783 15.768 0.418754C16.0789 0.77553 16.0789 1.35405 15.768 1.71082L8.60264 9.93358C8.29174 10.2904 7.78762 10.2904 7.47672 9.93358L0.311311 1.71082C0.000396326 1.35405 0.000396326 0.77553 0.311311 0.418754Z" fill="#FAFAFA"/>
                                        </svg>
                                    </summary>
                                    <div className='contt'>
                                        <p>NCX Cards are free and only offered to users with 30,000+ staked NCXT, depending on the amount of staked NCXT users are eligible for one of the 4 card tiers that offer different spending and ATM withdrawal limits, as well as Free Netflix and Spotify Subscriptions, Concierge Service & Lounge Access. </p>
                                    </div>
                                </details>
                                <details>
                                    <summary>How secure is my NCX card?
                                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.311311 0.418754C0.622234 0.0619783 1.12633 0.0619783 1.43725 0.418754L8.03968 7.99547L14.6421 0.418754C14.953 0.0619783 15.4571 0.0619783 15.768 0.418754C16.0789 0.77553 16.0789 1.35405 15.768 1.71082L8.60264 9.93358C8.29174 10.2904 7.78762 10.2904 7.47672 9.93358L0.311311 1.71082C0.000396326 1.35405 0.000396326 0.77553 0.311311 0.418754Z" fill="#FAFAFA"/>
                                        </svg>
                                    </summary>
                                    <div className='contt'>
                                        <p>NCX cards are secured with 3-D Secure technology. 3-D Secure requires at least two separate verification methods from you (the user) across multiple devices. This assists us in ensuring that the one utilizing the card is indeed you, while also aiding in more effectively recognizing any possible unauthorized transactions on your account.</p>
                                    </div>
                                </details>
                                <details>
                                    <summary>How can I block my card?
                                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.311311 0.418754C0.622234 0.0619783 1.12633 0.0619783 1.43725 0.418754L8.03968 7.99547L14.6421 0.418754C14.953 0.0619783 15.4571 0.0619783 15.768 0.418754C16.0789 0.77553 16.0789 1.35405 15.768 1.71082L8.60264 9.93358C8.29174 10.2904 7.78762 10.2904 7.47672 9.93358L0.311311 1.71082C0.000396326 1.35405 0.000396326 0.77553 0.311311 0.418754Z" fill="#FAFAFA"/>
                                        </svg>
                                    </summary>
                                    <div className='contt'>
                                        <p>If you suspect your card information may have fallen into the wrong hands, you can easily block your card directly from your NCX account.</p>
                                        <ul className="czP">
                                            <li>Go to the Business Account section on your app, then click on Cards</li>
                                            <li>Select the card you want to block and click on Report lost/stolen, at the bottom of the right-hand side.</li>
                                            <li>Select Report as lost or Report as stolen.</li>
                                            <li>Enter your password to authenticate the block request.</li>
                                        </ul>
                                        <p className="bnR"><strong>What is the difference between a debit card and a credit card?</strong></p>
                                        <p>NCX provides its users with debit cards, not credit cards. Unlike credit cardholders who receive a credit line entailing interest payments, debit cards access funds directly from your account. NCX allows Businesses to convert Cryptocurrencies into USD, EUR or other local currency to fund their Corporate Cards.</p>
                                    </div>
                                </details>
                                <details>
                                    <summary>What are company payment cards?
                                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.311311 0.418754C0.622234 0.0619783 1.12633 0.0619783 1.43725 0.418754L8.03968 7.99547L14.6421 0.418754C14.953 0.0619783 15.4571 0.0619783 15.768 0.418754C16.0789 0.77553 16.0789 1.35405 15.768 1.71082L8.60264 9.93358C8.29174 10.2904 7.78762 10.2904 7.47672 9.93358L0.311311 1.71082C0.000396326 1.35405 0.000396326 0.77553 0.311311 0.418754Z" fill="#FAFAFA"/>
                                        </svg>
                                    </summary>
                                    <div className='contt'>
                                        <p>Company payment cards are cards issued by the company to employees for business-related expenses. The company manages these cards by setting spending limits, managing access and permissions, and blocking them whenever needed. This simplifies the requirement for team members to gather and present receipts for reimbursement from the finance team.</p>
                                    </div>
                                </details>
                                <details>
                                    <summary>How do card payments work?
                                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.311311 0.418754C0.622234 0.0619783 1.12633 0.0619783 1.43725 0.418754L8.03968 7.99547L14.6421 0.418754C14.953 0.0619783 15.4571 0.0619783 15.768 0.418754C16.0789 0.77553 16.0789 1.35405 15.768 1.71082L8.60264 9.93358C8.29174 10.2904 7.78762 10.2904 7.47672 9.93358L0.311311 1.71082C0.000396326 1.35405 0.000396326 0.77553 0.311311 0.418754Z" fill="#FAFAFA"/>
                                        </svg>
                                    </summary>
                                    <div className='contt'>
                                        <p>When you make a payment with your card, key details about your transaction are sent to and approved by different institutions. The payment is first sent to the acquirer for approval, then is sent onto the card issuing bank. The payment might be declined due to insufficient funds or a blocked account, or the bank will issue approval to the acquirer, finalizing the transaction.</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AccountingDesktop;