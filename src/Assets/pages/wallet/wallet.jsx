import React from "react";
import './wallet.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import Wallet1New from '../../components/wallet/01/new';
import Wallet1 from '../../components/wallet/01/1';
import Wallet2 from "../../components/wallet/02/2";
import Wallet3 from "../../components/wallet/03/new";
import Wallet4 from "../../components/wallet/04/4";
import Wallet5 from '../../components/wallet/05/5';
import Wallet6 from '../../components/wallet/06/6';
import Wallet7 from '../../components/wallet/07/7';
import Wallet8 from '../../components/wallet/08/8';
import Wallet9 from '../../components/wallet/09/9';
import Wallet10 from '../../components/wallet/10/10';
import Wallet11 from '../../components/wallet/11/11';
import Wallet12 from '../../components/wallet/12/12';
import Wallet13 from '../../components/wallet/13/13';
import MobileWallet from '../../components/wallet/mbl/mbl';

function WalletMainPage()
{
    return(
        <div id="wallet__main__cc">

            <MyHeader />

            <Wallet1New />

            <Wallet1 />

            <Wallet3 />

            <Wallet6 />
            
            {/* <Wallet2 />

            <Wallet4 />

            <Wallet5 />

            <Wallet7 />

            <Wallet8 />

            <Wallet9 />

            <Wallet10 />

            <Wallet11 />

            <Wallet12 />

            <Wallet13 /> */}

            {/* <MobileWallet /> */}

            <MyFooter />

        </div>
    )
}
export default WalletMainPage;