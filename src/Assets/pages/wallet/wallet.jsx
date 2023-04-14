import React from "react";
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import Wallet1 from '../../components/wallet/01/1';
import Wallet2 from "../../components/wallet/02/2";
import Wallet3 from "../../components/wallet/03/3";

function WalletMainPage()
{
    return(
        <div id="wallet__main__cc">

            <MyHeader />

            <Wallet3 />
            
            <Wallet2 />
            
            <Wallet1 />

            <MyFooter />

        </div>
    )
}
export default WalletMainPage;