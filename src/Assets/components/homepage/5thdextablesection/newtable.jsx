import {React, useState} from "react";
import './newtable.css';
import Button from "@mui/material/Button";
import {ReactComponent as WhiteTick} from '../../../images/tickvector.svg';
import {ReactComponent as Blankvector} from '../../../images//dashvector.svg';
import OldDEXTable from './cexdex';
import { useTranslation } from "react-i18next";

function NewFeatureSection()
{
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);

    return(
        <div id="features" className="feature__dx">
            <div className="mki__bh">
                <h1 className="feature__dd">{t("features")}</h1>
                <div className="feat__gg">
                    <div className="sticky_pos">
                        <div className="lkj head container">
                            <div className="uiop">
                                <h3>{t("features")}</h3>
                            </div>
                            <div className="uiop clr">
                                <h3>NCX</h3>
                            </div>
                            <div className="uiop">
                                <h3>Binance</h3>
                            </div>
                            <div className="uiop">
                                <h3>Uniswap</h3>
                            </div>
                            <div className="uiop">
                                <h3>Bitfinex</h3>
                            </div>
                            <div className="uiop">
                                <h3>Pancakeswap</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="tlbe__bb">
                            <div id="ngbv" className="lkj head">
                                <div className="uiop"></div>
                                <div className="uiop clr">
                                    <Button href="#" className="open_acnt">{t("open_an_account")}</Button>
                                </div>
                                <div className="uiop">
                                    <div className="bynt">
                                        <p>$5bn </p>
                                        <span>{t("daily_trading_volume")}</span>
                                    </div>
                                </div>
                                <div className="uiop">
                                    <div className="bynt">
                                        <p>$500m </p>
                                        <span>{t("daily_trading_volume")}</span>
                                    </div>
                                </div>
                                <div className="uiop">
                                    <div className="bynt">
                                        <p>$200m </p>
                                        <span>{t("daily_trading_volume")}</span>
                                    </div>
                                </div>
                                <div className="uiop">
                                    <div className="bynt">
                                        <p>$250m </p>
                                        <span>{t("daily_trading_volume")}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("fees")}</p></div>
                                <div className="uiop clr"><p>0.12%</p></div>
                                <div className="uiop"><p>0.10%</p></div>
                                <div className="uiop"><p>0.30%</p></div>
                                <div className="uiop"><p>0.20%</p></div>
                                <div className="uiop"><p>0.25%</p></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("margin_trading")}</p></div>
                                <div className="uiop tick clr"><WhiteTick /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("transaction_congestion")}</p></div>
                                <div className="uiop clr"><p>{t("low")}</p></div>
                                <div className="uiop"><p>{t("low")}</p></div>
                                <div className="uiop"><p>{t("high")}</p></div>
                                <div className="uiop"><p>{t("low")}</p></div>
                                <div className="uiop"><p>{t("high")}</p></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("transaction_confirmation_latency")}</p></div>
                                <div className="uiop clr"><p>{t("low")}</p></div>
                                <div className="uiop"><p>{t("low")}</p></div>
                                <div className="uiop"><p>{t("high")}</p></div>
                                <div className="uiop"><p>{t("low")}</p></div>
                                <div className="uiop"><p>{t("high")}</p></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("staking")}</p></div>
                                <div className="uiop clr"><p>{t("decentalised")}</p></div>
                                <div className="uiop"><p>{t("centalised")}</p></div>
                                <div className="uiop"><p>{t("decentalised")}</p></div>
                                <div className="uiop"><p>{t("centalised")}</p></div>
                                <div className="uiop"><p>{t("decentalised")}</p></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">DEX</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("cross_chain_swap")}</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("supported_networks_on_dex")}</p></div>
                                <div className="uiop clr"><p>10</p></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><p>5</p></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><p>1</p></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("crypto_debit_card")}</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("defi_wallet")}</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("fiat_deposits_withdrawal")}</p></div>
                                <div className="uiop tick clr"><WhiteTick /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("equities_trading")} <span>(USA, EU, ASIA Stock Market)</span></p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("forex_trading")}</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("indices_trading")}</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("etfs_trading")}</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("metals_trading")}</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("energies_trading")}</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("otc_trading")}</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("instituional_services")}</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("24_7_support")}</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                            <div className="lkj">
                                <div className="uiop"><p className="nhgt">{t("account_recovery")}</p></div>
                                <div className="uiop clr tick"><WhiteTick /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                                <div className="uiop tick"><WhiteTick /></div>
                                <div className="uiop"><Blankvector /></div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div id="mb__feat">
                <div className="container">
                    <h1>{t("features")}</h1>
                    <div className="m33C__v">
                        <h2>{t("features")}</h2>
                        <h2>NCX</h2>
                        <h2>CEX</h2>
                        <h2>DEX</h2>
                    </div>
                    <div className="row">
                        <div className="rtt__rr">
                            <h3>{t("security")}</h3>
                            <h3>{t("margin_trading")}</h3>
                            <h3>{t("fees")}</h3>
                            <h3 className="hh__qa">{t("user_interface")}</h3>
                            <h3 className="hh__qa">{t("transaction_congestion")}</h3>
                            <h3 className="hh__qa">{t("daily_trading_volume")}</h3>
                            <h3 className="hh__qa">{t("transaction_confirmation_latency")}</h3>
                            <h3>{t("staking")}</h3>
                            <h3>{t("cross_chain_swap")}</h3>
                            <h3>{t("crypto_debit_card")}</h3>
                            <h3>{t("defi_wallet")}</h3>
                            <h3>{t("derivatives_trading")}</h3>
                            <h3 className="hh__qa">{t("fiat_deposits_withdrawal")}</h3>
                            <h3 className="hh__qa">{t("equities_trading")}<span>(USA, EU, ASIA Stock Market)</span></h3>
                            <h3>{t("metals_trading")}</h3>
                            <h3>{t("energies_trading")}</h3>
                            <h3>{t("forex_trading")}</h3>
                            <h3>{t("etfs_trading")}</h3>
                            <h3>{t("otc_trading")}</h3>
                            <h3>{t("instituional_services")}</h3>
                            <h3>{t("24_7_support")}</h3>
                        </div>
                        <div className="ww__ncx">
                            <h3>{t("high")}</h3>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <h3>{t("low")}</h3>
                            <h3 className="hh__qa">{t("user_freindly")}</h3>
                            <h3 className="hh__qa">{t("low")}</h3>
                            <h3 className="hh__qa">{t("high")}</h3>
                            <h3 className="hh__qa">{t("low")}</h3>
                            <h3>{t("decentalised")}</h3>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc hh__qa">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc hh__qa">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                        </div>
                        <div className="ww__cex">
                            <h3>{t("low")}</h3>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <h3>{t("low")}</h3>
                            <h3 className="hh__qa">{t("user_friendly")}</h3>
                            <h3 className="hh__qa">{t("low")}</h3>
                            <h3 className="hh__qa">{t("high")}</h3>
                            <h3 className="hh__qa">{t("low")}</h3>
                            <h3>{t("centalised")}</h3>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__cc hh__qa">
                                <WhiteTick />
                            </div>
                            <div className="ww__xx hh__qa">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                        </div>
                        <div className="ww__dex">
                            <h3>{t("high")}</h3>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <h3>{t("high")}</h3>
                            <h3 className="hh__qa">{t("complex")}</h3>
                            <h3 className="hh__qa">{t("high")}</h3>
                            <h3 className="hh__qa">{t("low")}</h3>
                            <h3 className="hh__qa">{t("high")}</h3>
                            <h3>{t("decentalised")}</h3>
                            <div className="ww__cc">
                                <WhiteTick />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx hh__qa">
                                <Blankvector />
                            </div>
                            <div className="ww__xx hh__qa">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                            <div className="ww__xx">
                                <Blankvector />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewFeatureSection;