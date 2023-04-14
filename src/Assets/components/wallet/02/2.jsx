import React from "react";
import './style.css';
import {ReactComponent as SafeArrow} from '../../../images/safe-arrow.svg';

function Wallet2()
{
    return(
        <div className="second__sec">
            <div className="container">
                <div className="bss__row">
                    <div className="sxx__ttr store__sdf">
                        <a href="#">
                            <div className="logo__arw">
                                <div className="styles_animationWrapper__lVd6v">
                                    <div class="styles_box__6vTlK">
                                        <div class="styles_rect__Ofqqe styles_rectTl__sXSPT"></div>
                                        <div class="styles_rect__Ofqqe styles_rectTr__iOHFT"></div>
                                        <div class="styles_rect__Ofqqe styles_rectBl__IldI3"></div>
                                        <div class="styles_rect__Ofqqe styles_rectBr__YmRAl"></div>
                                        <div class="styles_rect__Ofqqe styles_rectCenter__rAuP0"></div>
                                    </div>
                                </div>
                                <SafeArrow />
                            </div>
                            <h1>Store</h1>
                            <p>Store, Send, Receive Crypto Assets and NFT’s across 12 Blockchains</p>
                        </a>
                    </div>

                    <div className="sxx__ttr swap__sdf">
                        <a href="#">
                            <div className="logo__arw">
                                <div class="styles_animationWrapper__lVd6v">
                                    <div class="styles_box__mJpAP">
                                        <div class="styles_rect__2fT8k styles_rectTl__af71P"></div>
                                        <div class="styles_rect__2fT8k styles_rectTr__Mktpk"></div>
                                        <div class="styles_rect__2fT8k styles_rectBl__ZaXNf"></div>
                                        <div class="styles_rect__2fT8k styles_rectBr__s0CLR"></div>
                                    </div>
                                </div>
                                <SafeArrow />
                            </div>
                            <h1>Swap</h1>
                            <p>Store, Send, Receive over 500+k Crypto Assets across 12 Blockchains</p>
                        </a>
                    </div>

                    <div className="sxx__ttr buy__sdf">
                        <a href="#">
                            <div className="logo__arw">
                                <div class="styles_animationWrapper__lVd6v">
                                    <div class="styles_box__NE4Wm">
                                        <div class="styles_rect__XvrMy styles_rectTr__istVZ"></div>
                                        <div class="styles_rect__XvrMy styles_rectCenter__hBI_M"></div>
                                        <div class="styles_rect__XvrMy styles_rectBl__j_wv1"></div>
                                    </div>
                                </div>
                                <SafeArrow />
                            </div>
                            <h1>Buy</h1>
                            <p>Store, Send, Receive over 500+k Crypto Assets across 12 Blockchains</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Wallet2;