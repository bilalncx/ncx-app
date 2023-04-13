import React from "react";
import Wallet1 from '../../components/wallet/01/1';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer'

function WalletMainPage()
{
    return(
        <div id="wallet__main__cc">

            <MyHeader />

            <Wallet1 />

            <MyFooter />

        </div>
    )
}
export default WalletMainPage;