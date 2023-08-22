import React from "react";
import Desktop from '../../components/accounting/desktop';
import MyHeader from '../../components/header/header';
import MyFooter from "../../components/footer/footer";

function AccountingPage(){
    return(
        <div>
        <MyHeader />
        <Desktop />
        <MyFooter />
        </div>
    )
}
export default AccountingPage;