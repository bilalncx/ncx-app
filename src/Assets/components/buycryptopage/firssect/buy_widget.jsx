import React from "react";

function BuyWidfet(){
    return(
        <div id="buy_crypto" className="bbuss">
            <iframe
            src="https://buy.onramper.com/?apiKey=pk_prod_01GV5X7Q5Y8130N3WEBJA4JFAV"
            
            height="660px"
            width="482px"
            title="Onramper widget"
            frameborder="0"
            allow="accelerometer; autoplay; camera; gyroscope; payment"
            >
            </iframe>
        </div>
    )
}

export default BuyWidfet;