import { React, useState} from "react";
import '../../../pages/support/support.css';
import MyHeader from '../../../components/header/header';
import MyFooter from '../../../components/footer/footer';
import SearchModal from '../../../components/support/autosearch';
import ArticleSlider from '../article_slide';
import NCXLogo from '../../../images/new_sitelogo_black.svg';
import Telegram from '../../../components/footer/telegram.svg';
import Twitter from '../../../components/footer/twitter.svg';
import Instagram from '../../../images/instagram.svg';
import { ReactComponent as CardArrow } from '../../../images/ncx-cardarrow.svg';
import CoinData from '.././deposit-payout-table';
import { useTranslation } from "react-i18next";


function SupportPageSet()
{
    const { t } = useTranslation();
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div id="support_faqdetails">

            <MyHeader />

            <SearchModal />

            <div id="insight_page" className="details_faqs">
                <div className="container">
                    <div className="row">
                        <div className="col fest">
                            <div className="support_leftbar">
                                <div className="trend">
                                    <img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                    <h3>{t("faq")}</h3>
                                </div>

                                <div className="faq_nav">
                                    <a href="/faq">{t("faq")}</a>
                                    <div className="arr_sv">
                                        <CardArrow />
                                    </div>
                                    <p>{t("withdrawal")}</p>
                                </div>

                                <ul className="details_faqul">
                                    <li>
                                        <button
                                            className={toggleState === 1 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(1)}
                                        >
                                        {t("withdrawals_on_desktop")}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 2 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(2)}
                                        >
                                        {t("withdrawals_on_mobile_app")}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 3 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(3)}
                                        >
                                        {t("minimum_withdrawal")}
                                        </button>
                                    </li>
                                </ul>

                                <h1 className="support_ticket">{t("open_support_ticket")}</h1>
                                <p className="support_txt">{t("open_support_ticket_text")}<a href="mailto:support@ncx.cx">support@ncx.cx</a></p>
                                <a className="support_signin" href="https://exchange.ncx.cx/login" target="_blank" rel="noreferrer">{t("sign_in")}</a>

                                <div className="social-icons">
                                    <div class="icons"><a href="https://t.me/NCX_Official" target="_blank" rel="noreferrer"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                                    <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                                    <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col sect">
                            <div className={toggleState === 1 ? "sprt-content active" : "sprt-content"}>
                                <h1>{t("make_a_withdrawal")}</h1>
                                <p>{t("follow_step_to_withdrawal")}</p>
                                <p>{t("withdrawal_step_1")}</p>
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689404031/withdrwal1_xyylf8.png" alt="ncx-deposits" />
                                <p>{t("withdrawal_step_2")}</p>
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689404031/withdrwal2_xfvtgp.png" alt="ncx-deposits" />
                                <p>{t("withdrawal_step_3")}</p>
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689404030/withdrwal3_wyagzt.png" alt="ncx-deposits" />
                                <p>{t("withdrawal_step_4")}</p>
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689404030/withdrwal4_eguxgf.png" alt="ncx-deposits" />
                                <p>{t("withdrawal_step_5")}</p>
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689404030/withdrwal5_yz0qhk.png" alt="ncx-deposits" />
                                <p>{t("withdrawal_step_6")}</p>
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689404030/withdrwal6_likfhm.png" alt="ncx-deposits" />
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689404031/withdrwal7_av3gfr.png" alt="ncx-deposits" />
                                <p>{t("withdrawal_step_7")}</p>
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689404031/withdrwal8_guniwb.png" alt="ncx-deposits" />
                            </div>
                            <div className={toggleState === 2 ? "sprt-content active" : "sprt-content"}>
                                <h2>{t("how_make_withdrawal_on_mobile")}</h2>
                            </div>
                            <div className={toggleState === 3 ? "sprt-content active" : "sprt-content"}>
                                <h2>{t("minimum_withdrawal")}</h2>
                                <div className="coin-wrapper">
                                    <table>
                                        <tr className="coin-headrow">
                                            <th>{t("name")}</th>
                                            <th>{t("blockchain")}</th>
                                            <th>{t("deposit_payout_min")}</th>
                                            <th>{t("block_explorer")}</th>
                                        </tr>
                                        {CoinData.map((coin, i) => (
                                        <tr className="coin-row">
                                            <td className="logo-title">
                                                <img src={coin.logo} alt="coin-symbol" />
                                                <p>{coin.title}</p>
                                            </td>
                                            <td><p>{coin.blockchain}</p></td>
                                            <td><p>{coin.depostpayout}</p></td>
                                            <td><a href={coin.blockexplorer} target="_blank" rel="noreferrer">{t("block_explorer")}</a></td>
                                        </tr>
                                    ))}
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col thest">
                            <ArticleSlider />
                        </div>
                    </div>
                </div>
            </div>

            <MyFooter />

        </div>
    )
}

export default SupportPageSet;