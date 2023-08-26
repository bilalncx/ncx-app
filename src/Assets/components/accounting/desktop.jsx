import React, {useState} from "react";
import './style.css';
import IntegrateData from "./integration-data";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, DotGroup, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ReactComponent as CardLeftArrow } from '../../images/card_leftarrow.svg';
import { ReactComponent as CardRightArrow } from '../../images/card_rightarrow.svg';
import {ReactComponent as BTNArrow} from '../../images/btn_arow.svg';

function BookDesktop()
{
    const { t } = useTranslation();

    return(
        <div className="book__re">
            <div className="qn_f">
                <div className="container">
                    <div className="tir row">
                        <div className="col">
                            <h1>Effortless <br />bookkeeping</h1>
                            <p>A  better way to get your company’s bookkeeping. <br />Say goodbye to the mountains of <br />paper invoices and receipts.</p>
                            <div className="sha-btn">
                                <Button href="#">Compare Cards</Button>
                            </div>
                        </div>
                        <div className="col">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692687037/31-min_y9urtu.png" alt="ncx" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="accnt__v tw rtyytr">
                <div className="container">
                    <div className="row xcm">
                        <div className="col frdss">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692687062/49_xvl9p4.png" alt="ncx"/>
                        </div>
                        <div className="col mla gthh">
                            <h2>Prepare your bookkeeping in no time</h2>
                            <ul>
                                <li>Upload scans of your receipts in a just few clicks or taps</li>
                                <li>Automate your supplier invoice processing and data entry</li>
                                <li>Connect your accounting software with your NCX account and accelerate the reconciliation process</li>
                            </ul>
                            <div className="cefv b">
                                <Button href="#">Compare Plans</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="qwn six">
                <div className="container">
                    <h2>You’re in good hands</h2>
                    <div class="werPP row">
                        <div class="col">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692969567/qwe1_sz0cwr.png" alt="global" />
                            <h3>Handy</h3>
                            <p>NCX is here to simplify your everyday life. Our features are designed to be easy to use.</p>
                        </div>
                        <div class="col">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692969567/qwe3_ltbrln.png" alt="global" />
                            <h3>Reliable</h3>
                            <p>No human error, no missing attachments. We ensure your bookkeeping is reliable and complete.</p>
                        </div>
                        <div class="col">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692969567/qwe2_rhqwrw.png" alt="global" />
                            <h3>Connected</h3>
                            <p>NCX is compatible with the software you already have. Connect us to all your tools.</p>
                        </div>
                    </div>
                    <div className="mbl__sec__cr">
                        <CarouselProvider
                            visibleSlides={1}
                            totalSlides={3}
                            step={1}
                            naturalSlideWidth={300}
                            isIntrinsicHeight={true}
                            isPlaying={true}
                            interval={3000}
                            orientation="horizontal"
                            infinite
                            playDirection="forward"
                        >
                            <Slider>
                                <Slide index={0} className="mnl__cx">
                                    <div className="azx">
                                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692969567/qwe1_sz0cwr.png" alt="global" />
                                        <h3>Handy</h3>
                                        <p>NCX is here to simplify your everyday life. Our features are designed to be easy to use.</p>
                                    </div>
                                </Slide>
                                <Slide index={1} className="mnl__cx">
                                    <div className="azx">
                                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692969567/qwe3_ltbrln.png" alt="global" />
                                        <h3>Reliable</h3>
                                        <p>No human error, no missing attachments. We ensure your bookkeeping is reliable and complete.</p>
                                    </div>
                                </Slide>
                                <Slide index={2} className="mnl__cx">
                                    <div className="azx">
                                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692969567/qwe2_rhqwrw.png" alt="global" />
                                        <h3>Connected</h3>
                                        <p>NCX is compatible with the software you already have. Connect us to all your tools.</p>
                                    </div>
                                </Slide>
                            </Slider>
                            <DotGroup />
                        </CarouselProvider>
                    </div>
                </div>
            </div>

            <div className="qwn five mjy-r">
                <div className="container">
                    <div className="row vUU">
                        <div className="col tx">
                            <h2>We’ll handle your receipts</h2>
                            <h3>Bin your paper receipts</h3>
                            <div className="qmR">
                                <p><span>Scan your receipts instead:</span> they’re still certified and hold the same legal weight as their paper counterparts.</p>
                            </div>
                            <h3>Automatic supplier invoice processing</h3>
                            <div className="qmR">
                                <p>Import your supplier invoices to NCX from your desktop, inbox, Google Drive, Dropbox — they’ll be instantly linked to the right transaction.</p>
                            </div>
                            <h3>Automatic VAT detection</h3>
                            <p>No more manual VAT entry: let us detect it automatically so you can save time on your bookkeeping.</p>
                            <div className="rtD sdfg">
                                <Button href="#">Compare our Plans</Button>
                            </div>
                        </div>
                        <div className="col im">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692687062/53_bg1ant.png" alt="ncx"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="qwn five vwefbgb">
                <div className="container">
                    <div className="row vUU">
                        <div className="col im">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692971801/54_odwwgm.png" alt="ncx"/>
                        </div>
                        <div className="col tx">
                            <h2>Your time is precious</h2>
                            <h3>Automate VAT and labels</h3>
                            <div className="qmR">
                                <p>Just enter your supplier data once. After that, all related transactions will be <span>classified automatically.</span></p>
                            </div>
                            <h3>No more hunting missing receipts</h3>
                            <div className="qmR">
                                <p>NCX <span>automatically follows up on missing receipts</span> so you can use your time more efficiently.</p>
                            </div>
                            <h3>Your receipts are processed for you</h3>
                            <p>Integrated accounting software automations will send your <span>receipts directly to your NCX account.</span></p>
                            <div className="rtD sdfg">
                                <Button href="#">Compare our Plans</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="qn_f qwPP">
                <div className="container">
                    <div className="tir row">
                        <div className="col">
                            <h1>Keep your accountant happy.<br />NCX has 33 integrated <br />accounting tools.</h1>
                            <p>With such a range of available tools, your accountant already has <br />everything they need. NCX Connect makes data  collection a <br />breeze, with no need to import and export accounting files.</p>
                        </div>
                        <div className="col">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692687062/55_sxibzq.png" alt="ncx" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="uiPP">
                <div className="container">
                    <h2>Accounting Software Integrations</h2>
                    <div className="acnt-integ row">
                        {IntegrateData.map((item) => (
                            <div className="col">
                                <div className="tbnm">
                                    <div className="tx-img">
                                        <img className="rcm" src={item.img} alt="ncx"/>
                                        <div className="tc">
                                            <h3>{item.company}</h3>
                                            <p>{t(item.slug)}</p>
                                        </div>
                                    </div>
                                    <div className="tgb">
                                        <p>{t(item.desc)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mbl_acnt">
                        <div className="acnt__intg">
                            {IntegrateData.map((ncx) => (
                                <details>
                                    <summary>
                                        <div className="tx-img">
                                            <img className="rcm" src={ncx.img} alt="ncx"/>
                                            <div className="tc">
                                                <h3>{ncx.company}</h3>
                                                <p>{t(ncx.slug)}</p>
                                            </div>
                                        </div>
                                        <span className='red'>
                                            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.311311 0.418754C0.622234 0.0619783 1.12633 0.0619783 1.43725 0.418754L8.03968 7.99547L14.6421 0.418754C14.953 0.0619783 15.4571 0.0619783 15.768 0.418754C16.0789 0.77553 16.0789 1.35405 15.768 1.71082L8.60264 9.93358C8.29174 10.2904 7.78762 10.2904 7.47672 9.93358L0.311311 1.71082C0.000396326 1.35405 0.000396326 0.77553 0.311311 0.418754Z" fill="#FAFAFA"></path></svg>
                                        </span>
                                    </summary>
                                    <div className='contt'>
                                        <p>{t(ncx.desc)}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="accnt__v asczz vwefbgb">
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
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692891164/RENDER_1_3_ndm2jb.png" alt="ncx"/>
                                    <h3>Settle payments, invoices and payroll in crypto</h3>
                                    <p className="ved">Benefit from fast cross-border payments settled in crypto, with fees as low as $0.1 and settlement time just under few minutes, making it ideal for payments to international suppliers and remote team members.</p>
                                    <a href="#">Discover the business account</a>
                                </article>
                            </Slide>
                            <Slide index={1}>
                                <article className='ncxcard01'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693029943/57_lgrrcz.png" alt="ncx"/>
                                    <h3>Optimised invoice management</h3>
                                    <p>Save valuable time by eliminating the manual entry of customer and supplier information. Our system will even automatically identify your Value Added Tax (VAT) for your convenience.</p>
                                    <a href="#">Discover invoicing</a>
                                </article>
                            </Slide>
                            <Slide index={2}>
                                <article className='ncxcard01'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692954007/29-min_y4b53o.png" alt="ncx"/>
                                    <h3>Digital assets business account</h3>
                                    <p>Corporate account, digital assets and derivatives trading, DeFi wallet, crypto payments and payroll settlement, book-keeping and expense management, company crypto direct cards for the whole team.... and so much more!</p>
                                    <a href="#">Compare Business Account plans</a>
                                </article>
                            </Slide>
                            <Slide index={3}>
                                <article className='ncxcard01 vb'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692891135/7_4_ob426b.png" alt="ncx"/>
                                    <h3>Simplified team spend</h3>
                                    <p>Take full control of your team expenses by setting card spending limits. Track the spending by integrating your invoices and receipts with bookkeeping software in order to see the daily, weekly, monthly spend. Assign budget limits for each cardholder.</p>
                                    <a href="#">Explore our business account plans</a>
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
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692891164/RENDER_1_3_ndm2jb.png" alt="ncx"/>
                                    <h3>Settle payments, invoices and payroll in crypto</h3>
                                    <p className="ved">Benefit from fast cross-border payments settled in crypto, with fees as low as $0.1 and settlement time just under few minutes, making it ideal for payments to international suppliers and remote team members.</p>
                                    <a href="#">Discover the business account</a>
                                </article>
                            </Slide>
                            <Slide index={1}>
                                <article className='ncxcard01'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1693029943/57_lgrrcz.png" alt="ncx"/>
                                    <h3>Optimised invoice management</h3>
                                    <p>Save valuable time by eliminating the manual entry of customer and supplier information. Our system will even automatically identify your Value Added Tax (VAT) for your convenience.</p>
                                    <a href="#">Discover invoicing</a>
                                </article>
                            </Slide>
                            <Slide index={2}>
                                <article className='ncxcard01'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692954007/29-min_y4b53o.png" alt="ncx"/>
                                    <h3>Digital assets business account</h3>
                                    <p>Corporate account, digital assets and derivatives trading, DeFi wallet, crypto payments and payroll settlement, book-keeping and expense management, company crypto direct cards for the whole team.... and so much more!</p>
                                    <a href="#">Compare Business Account plans</a>
                                </article>
                            </Slide>
                            <Slide index={3}>
                                <article className='ncxcard01 vb'>
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692891135/7_4_ob426b.png" alt="ncx"/>
                                    <h3>Simplified team spend</h3>
                                    <p>Take full control of your team expenses by setting card spending limits. Track the spending by integrating your invoices and receipts with bookkeeping software in order to see the daily, weekly, monthly spend. Assign budget limits for each cardholder.</p>
                                    <a href="#">Explore our business account plans</a>
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
        </div>
    )
}

export default BookDesktop;