import React from "react";
import './2ndsection.css';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, Dot, DotGroup } from 'pure-react-carousel';
import ExchangeIcon from '../../../images/orders-min.png';
import DerivativeIcon from '../../../images/deri_icon.png';
import WalletIcon from '../../../images/wallet_icon.png';
import DebitIcon from '../../../images/debit_icon.png';
import GlobalMarket2 from '../../../images/purchase-icon.png';
import { Wallet } from "@mui/icons-material";

function Indices2()
{
    const { t } = useTranslation();
    return(
        <div id="hme__gg__ff">
            <div className="container">
                <h1 className="fg__rer">{t("first_all_in_one_hybrid_cex_dex")}</h1>
                <div className="rf__aab row">
                    <div className="col">
                        <img src={ExchangeIcon} alt="ncx"/>
                        <h3>{t("crypto_exchange")}</h3>
                        <p>{t("trade_over_200_cryptocurrency_pairs")}</p>
                    </div>
                    <div className="col">
                        <img src={DerivativeIcon} alt="ncx" />
                        <h3>{t("derivatives_trading")}</h3>
                        <p>{t("trade_over_500_markets")}</p>
                    </div>
                    <div className="col">
                        <img src={WalletIcon} alt="ncx" />
                        <h3>{t("defi_wallet")}</h3>
                        <p>{t("defi_wallet_text")}</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket2} alt="ncx" />
                        <h3>{t("crypto_debit_card")}</h3>
                        <p>{t("crypto_debit_card_text_1")}</p>
                    </div>
                </div>

                <div className="mbl__sec__cr">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={4}
                        step={1}
                        naturalSlideWidth={300}
                        isIntrinsicHeight={true}
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >
                        <Slider className="global__row row">
                            <Slide index={0}>
                                <div className="col">
                                    <img src={ExchangeIcon} alt="ncx"/>
                                    <h3>{t("crypto_exchange")}</h3>
                                    <p>{t("trade_over_200_cryptocurrency_pairs")}</p>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="col">
                                    <img src={DerivativeIcon} alt="ncx" />
                                    <h3>{t("derivatives_trading")}</h3>
                                    <p>{t("trade_over_500_markets")}</p>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="col">
                                    <img src={WalletIcon} alt="ncx" />
                                    <h3>{t("defi_wallet")}</h3>
                                    <p>{t("defi_wallet_text")}</p>
                                </div>
                            </Slide>

                            <Slide index={3}>
                                <div className="col">
                                    <img src={DebitIcon} alt="ncx" />
                                    <h3>{t("crypto_debit_card")}</h3>
                                    <p>{t("crypto_debit_card_text_1")}</p>
                                </div>
                            </Slide>
                        </Slider>

                        <DotGroup />
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}

export default Indices2;