import React from "react";
import Myheader from '../../components/header/header';
import Myfooter from '../../components/footer/footer';
import Desktop from '../../components/accounting/desktop';

function BookKeep()
{
    return(
        <div className="book-keep">
            
            <Myheader />

            <Desktop />

            <Myfooter />

        </div>
    )
}

export default BookKeep;