import React from "react";
import './style.css';
import Button from "@mui/material/Button";
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import Promo1 from '../../images/promo-1.png';
import Promo2 from '../../images/promo-2.png';
import Promo3 from '../../images/promo-3.png';
import Promo4 from '../../images/promo-4.png';
import Promo5 from '../../images/promo-5.png';
import Promo6 from '../../images/promo-6.png';
import Promo7 from '../../images/promo-7.png';
import Promo8 from '../../images/promo-8.png';
import Promo9 from '../../images/promo-9.png';
import Promo10 from '../../images/promo-10.png';
import {ReactComponent as BTNArrow} from '../../images/btn_arow.svg';

function DigitalBusinessAcnt()
{
    return(
        <div className="dig-B">
            <div className="qwm one">
                <div className="container">
                    <div className="row caz">
                        <div className="col">
                            <h2>Optimize your business <br/>with NCX Digital Assets<br/>Business Account </h2>
                            <p>Incorporate Digital Assets into your corporate legal structure as part of a strategic investment approach. Mitigate tax liability by formally integrating cryptocurrency investments into your long-term business strategy and company balance sheet. Adhere to tax regulations by ensuring timely filing of Profit and Loss (PNL) reports.</p>
                            <Button href="#">Compare our Plans</Button>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="partner va">
                    <CarouselProvider
                        visibleSlides={6}
                        totalSlides={10}
                        step={1}
                        naturalSlideWidth={300}
                        naturalSlideHeight={150}
                        // hasMasterSpinner
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >

                    <Slider>
                        <Slide index={0} className="qsfg">
                            <img src={Promo1} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={1} className="qsfg">
                            <img src={Promo2} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={2} className="qsfg">
                            <img src={Promo3} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={3} className="qsfg forth">
                            <img src={Promo4} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={4} className="qsfg">
                            <img src={Promo5} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={5} className="qsfg">
                            <img src={Promo6} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={6} className="qsfg">
                            <img src={Promo7} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={7} className="qsfg eght">
                            <img src={Promo8} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={8} className="qsfg">
                            <img src={Promo9} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={9} className="qsfg">
                            <img src={Promo10} alt="ncx-partner"/>
                        </Slide>

                    </Slider>

                    </CarouselProvider>
                </div>
            </div>

            <div id="qwPcX" className="partner va">
                    <CarouselProvider
                        visibleSlides={2}
                        totalSlides={10}
                        step={1}
                        naturalSlideWidth={300}
                        naturalSlideHeight={150}
                        // hasMasterSpinner
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >

                    <Slider>
                        <Slide index={0} className="qsfg">
                            <img src={Promo1} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={1} className="qsfg">
                            <img src={Promo2} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={2} className="qsfg">
                            <img src={Promo3} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={3} className="qsfg forth">
                            <img src={Promo4} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={4} className="qsfg">
                            <img src={Promo5} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={5} className="qsfg">
                            <img src={Promo6} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={6} className="qsfg">
                            <img src={Promo7} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={7} className="qsfg eght">
                            <img src={Promo8} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={8} className="qsfg">
                            <img src={Promo9} alt="ncx-partner"/>
                        </Slide>

                        <Slide index={9} className="qsfg">
                            <img src={Promo10} alt="ncx-partner"/>
                        </Slide>

                    </Slider>

                    </CarouselProvider>
                </div>

            <div className="qwn tow">
                <div className="container">
                    <h2>NCX Digital Assets Business Account</h2>
                    <div className="row asPo">
                        <div className="col">
                            <div className="er">
                                <div className="img-bx">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692891135/5_3_graoqd.png" alt="ncx"/>
                                </div>
                                <div className="txt-bx">
                                    <h3>Company Crypto Debit Cards</h3>
                                    <p>Give your employees more freedom by <br />providing them with NCX Company <br />Crypto Debit Cards.</p>
                                    <div className="vrF">
                                        <a href="#">Discover more <BTNArrow /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="er">
                                <div className="img-bx">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692891135/5_3_graoqd.png" alt="ncx"/>
                                </div>
                                <div className="txt-bx">
                                    <h3>Company Crypto Debit Cards</h3>
                                    <p>Give your employees more freedom by <br />providing them with NCX Company <br />Crypto Debit Cards.</p>
                                    <div className="vrF">
                                        <a href="#">Discover more <BTNArrow /></a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row asPo">
                        <div className="col">
                            <div className="er">
                                <div className="img-bx">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692891164/RENDER_1_3_ndm2jb.png" alt="ncx"/>
                                </div>
                                <div className="txt-bx">
                                    <h3>Digital Assets Payment Settlement</h3>
                                    <p>Pay your Invoices, Salaries, Suppliers in <br />Crypto, ideal for cross border payments <br />and remote team members payroll.</p>
                                    <div className="vrF">
                                        <a href="#">Discover more <BTNArrow /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="er">
                                <div className="img-bx">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692891135/7_4_ob426b.png" alt="ncx"/>
                                </div>
                                <div className="txt-bx">
                                    <h3>No more tracking down <br />missing receipts</h3>
                                    <p>Save time and energy. We’ll follow up with <br />employees about missing receipts for you.</p>
                                    <div className="vrF">
                                        <a href="#">Discover more <BTNArrow /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="qwn three">
                <div className="container">
                    <h2>With NCX Digital Assets Business Account, there is something for everyone</h2>
                    <div className="row asoOp">
                        <div className="col ma">
                            <div className="er">
                                <div className="img-bx">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692943069/45_s8nnmu.png" alt="ncx"/>
                                </div>
                                <div className="txt-bx">
                                    <h3>CEO/Business Owners</h3>
                                    <p>Open a business account with NCX and we guarantee a simple, streamlined payment system for your company transactions. You will be able to settle & raise your invoices, pay your team members and accept payments in Crypto. The account will enable your business to align your bookkeeping records with 30+ accounting software integrations. Manage, track in real time and issue Crypto debit cards for your employees and set daily, weekly or monthly transactions limits according to your business needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb">
                            <div className="er">
                                <div className="img-bx">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692943069/46_wwzulo.png" alt="ncx"/>
                                </div>
                                <div className="txt-bx">
                                    <h3>Investors and Corporate Entities </h3>
                                    <p>Incorporate Digital Assets into your corporate legal structure as part of a strategic investment approach. Mitigate tax liability by formally integrating cryptocurrency investments into your long-term business strategy and company balance sheet. Adhere to tax regulations by ensuring timely filing of Profit and Loss (PNL) reports. Offset tax liability by investing profits in Digital Assets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row asoOp">
                        <div className="col mc">
                            <div className="er">
                                <div className="img-bx">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692943069/Frame_1410128846_fhrfyy.png" alt="ncx"/>
                                </div>
                                <div className="txt-bx">
                                    <h3>Portfolio Managers and Traders</h3>
                                    <p>Gain efficiency and independence by directly managing your clients portfolio on NCX. Let your clients chose the level of autonomy they are comfortable with, by letting them open a Digital Assets Business Account on NCX. They can assign rights they are most comfortable with to the Portfolio Managers and Traders, whilst still enabling them to have full control of their own assets by preventing withdrawals or entering larger than their set limit positions without client’s authorisation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col md">
                            <div className="er">
                                <div className="img-bx">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692943069/48_hymton.png" alt="ncx"/>
                                </div>
                                <div className="txt-bx">
                                    <h3>Start Ups and VCs</h3>
                                    <p>NCX helps start-ups and venture capital firms raising funds via Digital Assets, successfully manage fund allocations, daily transactions, financial records, invoicing, digital receipts, team payroll, and vesting schedules. VC’s gain the ability to diversify investments across several projects via NCX, ensuring adherence to tax regulations through prompt tax report submissions and maintaining investment balance sheets in accordance with tax requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="qwn four">
                <div className="container">
                    <h2>Boost your business with pro Digital Assets Business Account </h2>
                    <div className="row sxRR">
                        <div className="col qw">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692948750/cwq_xtcmgu.png" alt="ncx"/>
                            <h3>Assign budgets and track spending</h3>
                            <p>Take full control of your team expenditure usage by setting spending limits. Track the spending by integrating your invoices and receipts with bookkeeping software in order to see the daily, weekly, monthly spend and assign budget limits for each cardholder.</p>
                        </div>
                        <div className="col qr">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692948226/20_cjk7l1.png" alt="ncx"/>
                            <h3>Pre-defined access rights let you delegate with peace of mind</h3>
                            <p>Asset manager, trader, accountant, business manager or employee - give your team exactly the limits and access they need to use NCX Platform as per your set requirements. Let your portfolio managers and traders open/close positions within certain limits or with your confirmation.</p>
                        </div>
                        <div className="col qt">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692948226/21_unmpca.png" alt="ncx"/>
                            <h3>Boost your efficiency by empowering your team</h3>
                            <p>We've made delegating easy and efficient by creating specific access rights for your managers and traders. Put them in charge of the trading, while you maintain a close view of your company trades and expenses. Allow only certain transactions and get notified of each opened/closed position in real time with NCX App push notifications. </p>
                        </div>
                    </div>
                    <div className="caz cta"><Button href="#">Comapre Plans</Button></div>
                </div>
            </div>
            
            <div className="qwn five">
                <div className="container">
                    <div className="row vUU">
                        <div className="col im">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692949546/8_3_ytqfvr.png" alt="ncx"/>
                        </div>
                        <div className="col tx">
                            <h2>Provide team members with company cards and manage spending limits</h2>
                            <h3>Tailor Company Crypto Debit Cards to your employees' needs</h3>
                            <p>Use physical and virtual cards for business expenses settled in crypto.</p>
                            <div className="qmR">
                                <a href="#">Compare Cards <BTNArrow /></a>
                            </div>
                            <h3>Real-time control of spending and payment limits</h3>
                            <p>Set the limits and permissions of each card in real time: <span>per month, per day and even per transaction.</span></p>
                            <div className="qmRv">
                                <a href="#">Compare Cards <BTNArrow /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="qwn six">
                <div className="container">
                    <h2>Simplify finance management with business team accounts</h2>
                    <div class="werPP row">
                        <div class="col">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692952423/transparency_salwbw.png" alt="global" />
                            <h3>Transparency</h3>
                            <p>Control your budgets with ease: enjoy full visibility and set the rules yourself</p>
                        </div>
                        <div class="col">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692952423/team_la6rsl.png" alt="global" />
                            <h3>Team Spirit</h3>
                            <p>Empower your employees with team budgets and the means of payment they need</p>
                        </div>
                        <div class="col">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692952423/peace_seus3a.png" alt="global" />
                            <h3>Peace of mind</h3>
                            <p>Worry less about expenses by delegating management to your teams, within the boundaries you set</p>
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
                                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692952423/transparency_salwbw.png" alt="global" />
                                        <h3>Transparency</h3>
                                        <p>Control your budgets with ease: enjoy full visibility and set the rules yourself</p>
                                    </div>
                                </Slide>
                                <Slide index={1} className="mnl__cx">
                                    <div className="azx">
                                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692952423/team_la6rsl.png" alt="global" />
                                        <h3>Team Spirit</h3>
                                        <p>Empower your employees with team budgets and the means of payment they need</p>
                                    </div>
                                </Slide>
                                <Slide index={2} className="mnl__cx">
                                    <div className="azx">
                                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692952423/peace_seus3a.png" alt="global" />
                                        <h3>Peace of mind</h3>
                                        <p>Worry less about expenses by delegating management to your teams, within the boundaries you set</p>
                                    </div>
                                </Slide>
                            </Slider>
                            <DotGroup />
                        </CarouselProvider>
                    </div>
                </div>
            </div>

            <div className="qwn seven">
                <div className="container">
                    <h2>NCX Digital Assets Business Account</h2>
                    <div className="row sxRR">
                        <div className="col qw">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692954007/28-min_e5kro7.png" alt="ncx"/>
                            <h3>Settle payments, invoices and payroll in crypto</h3>
                            <p>Benefit from fast cross-border payments settled in crypto, with fees as low as $0.1 and settlement time just under few minutes in comparison with multiple business days using traditional SWIFT, making it ideal for payments to international suppliers, remote team members, investing and managing your company’s digital assets portfolio.</p>
                            <div className="qmRv">
                                <a href="#">Compare Plans<BTNArrow /></a>
                            </div>
                        </div>
                        <div className="col qr">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692954007/29-min_y4b53o.png" alt="ncx"/>
                            <h3>A complete digital assets business account</h3>
                            <p>Corporate account, digital assets and derivatives trading, DeFi wallet, crypto payments and payroll settlement, book-keeping and expense management, company crypto direct cards for the whole team.... and so much more!</p>
                            <div className="qmRv">
                                <a href="#">Compare Plans<BTNArrow /></a>
                            </div>
                        </div>
                        <div className="col qt">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692954007/30-min_w2zhft.png" alt="ncx"/>
                            <h3>Save 10s of hours per month on your bookkeeping</h3>
                            <p>Upload scans of your receipts in a just few clicks. Automate your supplier invoice processing and data entry. Connect your accounting software with your NCX account and accelerate the reconciliation process</p>
                            <div className="qmRv">
                                <a href="#">Compare Plans<BTNArrow /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DigitalBusinessAcnt;