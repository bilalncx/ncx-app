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
import SpotTrading1 from '../../../images/spot-trading-1.png';
import SpotTrading2 from '../../../images/spot-trading-2.png';
import SpotTrading3 from '../../../images/spot-trading-3.png';
import SpotWeb1 from '../../../images/spot-web1.png';
import SpotWeb2 from '../../../images/spot-web2.png';
import SpotWeb3 from '../../../images/spot-web3.png';
import SpotWeb4 from '../../../images/spot-web4.png';
import SpotWeb5 from '../../../images/spot-web5.png';
import SpotWeb6 from '../../../images/spot-web6.png';
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
                                <div className="ncx-trends">
                                    <img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                    <p>{t("faq")}</p>
                                </div>

                                <div className="faq_nav">
                                    <a href="/faq">{t("faq")}</a>
                                    <div className="arr_sv">
                                        <CardArrow />
                                    </div>
                                    <p>{t("spot_trading")}</p>
                                </div>

                                <ul className="details_faqul">
                                    <li>
                                        <button
                                            className={toggleState === 1 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(1)}
                                        >
                                        {t("order_types")}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 2 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(2)}
                                        >
                                        {t("how_to_trade_spot_on_web")}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 3 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(3)}
                                        >
                                        {t("how_to_trade_spot_on_app")}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 4 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(4)}
                                        >
                                        {t("what_is_taker_&_maker")}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 5 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(5)}
                                        >
                                        {t("definitions_calculation_last_trade_price")}
                                        </button>
                                    </li>
                                </ul>

                                <h1 className="support_ticket">{t("open_support_ticket")}</h1>
                                <p className="support_txt">{t("open_support_ticket_text")}<a href="mailto:support@ncx.cx">support@ncx.cx</a></p>
                                <a className="support_signin" href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">{t("sign_in")}</a>

                                <div className="social-icons">
                                    <div class="icons"><a href="https://t.me/NCX_Official" target="_blank" rel="noreferrer"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                                    <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                                    <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col sect">
                            <div className={toggleState === 1 ? "sprt-content active" : "sprt-content"}>
                                <h1>{t("different_order_types")}</h1>
                                <p>{t("different_order_types_text")}</p>
                                <p><strong>{t("what_is_market_order")}</strong></p>
                                <p>{t("market_order_text_1")}</p>
                                <p>{t("market_order_text_2")}</p>
                                <img src={SpotTrading1} alt="ncx-spot-trading" />
                                <p><strong>{t("what_is_limit_order")}</strong></p>
                                <p>{t("limit_order_text_1")}</p>
                                <p>{t("limit_order_text_2")}</p>
                                <p>{t("limit_order_text_3")}</p>
                                <img src={SpotTrading2} alt="ncx-spot-trading" />
                                <p><strong>{t("what_is_stop_limit_order_?")}</strong></p>
                                <p>{t("stop_limit_order_text_1")}</p>
                                <p>{t("stop_limit_order_text_2")}</p>
                                <img src={SpotTrading3} alt="ncx-spot-trading" />
                                <p><strong>{t("what_is_an_oco")}</strong></p>
                                <p>{t("oco_text_1")}</p>
                                <p>{t("oco_text_2")}</p>
                                <p><strong>{t("what_is_trailing_stop_order")}</strong></p>
                                <p>{t("trailing_stop_order_text_1")}</p>
                                <p>{t("trailing_stop_order_text_2")}</p>
                            </div>
                            <div className={toggleState === 2 ? "sprt-content active" : "sprt-content"}>
                                <h1>{t("how_trade_spot_on_ncx")}</h1>
                                <p>{t("trade_spot_on_ncx_text_1")}</p>
                                <p>{t("trade_spot_on_ncx_text_2")}</p>
                                <img src={SpotWeb1} alt="ncx-spot-trading" />
                                <h3>{t("what_is_limit_order")}</h3>
                                <ol>
                                    <li>{t("select_trading_pair")}</li>
                                    <li>{t("trading_view_graphs")}</li>
                                    <li>{t("sell_order_book")}</li>
                                    <li>{t("buy_order_book")}</li>
                                    <li>{t("favorite_trading_pairs")}</li>
                                    <li>{t("assets")}</li>
                                    <li>{t("type_of_order_limit_market_spot_oco")}</li>
                                    <li>{t("select_trading_pair")}</li>
                                    <li>{t("place_buy_order")}</li>
                                    <li>{t("place_sell_order")}</li>
                                    <li>{t("your_order_history")}</li>
                                    <li>{t("menu")}</li>
                                    <li>{t("custom_workspaces")}</li>
                                    <li>{t("customise_your_trading_interface")}</li>
                                    <li>{t("help_tips")}</li>
                                    <li>{t("notifications")}</li>
                                    <li>{t("reset_trading_widgets")}</li>
                                    <li>{t("settings")}</li>
                                    <li>{t("sign_out")}</li>
                                </ol>
                                <p>{t("custom_workspaces")}</p>
                                <img src={SpotWeb2} alt="ncx-spot-trading" />
                                <p>{t("customise_your_trading_interface")}</p>
                                <img src={SpotWeb3} alt="ncx-spot-trading" />
                                <p>{t("help_tips")}Help and Tips</p>
                                <img src={SpotWeb4} alt="ncx-spot-trading" />
                                <p>{t("notifications")}Notifications</p>
                                <img src={SpotWeb5} alt="ncx-spot-trading" />
                                <p>{t("reset_trading_widgets")}</p>
                                <img src={SpotWeb6} alt="ncx-spot-trading" />
                            </div>
                            <div className={toggleState === 3 ? "sprt-content active" : "sprt-content"}>
                                <h2>{t("")}How to Trade Spot on NCX App</h2>
                            </div>
                            <div className={toggleState === 4 ? "sprt-content active" : "sprt-content"}>
                                <h1>{t("what_is_taker_&_maker")}</h1>
                                <p>{t("taker_&_maker_note")}</p>
                                <h3>{t("taker")}1.</h3>
                                <p>{t("taker_text_1")}</p>
                                <p>{t("taker_text_2")}</p>
                                <h3>{t("maker")}2. </h3>
                                <p>{t("maker_text_1")}</p>
                                <p>{t("maker_text_2")}</p>
                            </div>
                            <div className={toggleState === 5 ? "sprt-content active" : "sprt-content"}>
                                <h1>{t("definitions_calculation_last_trade_price")}</h1>
                                <div className="calculation_table">
                                    <table>
                                        <tr>
                                            <th><p><strong>{t("type")}</strong></p></th>
                                            <th><p><strong>{t("function")}</strong></p></th>
                                            <th><p><strong>{t("calculation")}</strong></p></th>
                                        </tr>
                                        <tr>
                                            <td><p><strong>{t("last_trade_price")}</strong></p></td>
                                            <td><p>{t("last_trade_price_text_1")}</p></td>
                                            <td><p>{t("last_trade_price_text_2")}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p><strong>{t("index_price")}</strong></p></td>
                                            <td><p>{t("index_price_text_1")}</p></td>
                                            <td><p>{t("index_price_text_2")}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p><strong>{t("marking_price")}<span> {t("reasonable_price")}</span></strong></p></td>
                                            <td><p>{t("marking_price_text_1")}</p></td>
                                            <td><p><strong>{t("marking_price_text_2")}</strong></p></td>
                                        </tr>
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