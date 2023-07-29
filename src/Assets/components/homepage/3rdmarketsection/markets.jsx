// import react from 'react';
import './market.css';

function MarketPage(){
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d')
    .then(res => res.json())
    .then(json => {

        const container = document.querySelector('#table-market tbody');
        const coins = Object.getOwnPropertyNames(json);

        for (let coin of coins) {

            const coinInfo = json[`${coin}`];
            
            const name = coinInfo.id;
            // const coinname = name.replace(/string/g, "");
            
            const coinsymbol = coinInfo.symbol;
            
            const price = coinInfo.current_price;
            const priceformatted = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            
            const changetwentyfour = coinInfo.price_change_percentage_24h_in_currency;
            const twentyfourchangepriceformatted = changetwentyfour.toLocaleString('en-US');
            
            // $('.currrency_24change h2').each(function(){
            //     if($(this).text().indexOf('-') >= 0)
            //     $(this).css('color', '#FA652D')
            //     else{
            //         $(this).css('color', '#44BD22')
            //     }
            // });
            
            const sevendaychange = coinInfo.price_change_percentage_7d_in_currency;
            
            const sevenpriceformatted = sevendaychange.toLocaleString('en-US');
            
            // $('.currrency_7daychange h2').each(function(){
            //     if($(this).text().indexOf('-') >= 0)
            //     $(this).css('color', '#FA652D')
            //     else{
            //         $(this).css('color', '#44BD22')
            //     }
            // });
            
            const marketcap = coinInfo.market_cap;
            const formatted = marketcap.toLocaleString('en-US');

            container.innerHTML += `

                        <tr>
                            <td class="currrency_name">
                                <span class="star-svg">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" color=""><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>

                                </span>
                                <h2>${name} <span>${coinsymbol}</span></h2>
                            </td>
                            <td class="currrency_price">
                                <h2>$ <span>${priceformatted}</span></h2>
                            </td>
                            <td class="currrency_24change">
                                <h2>${twentyfourchangepriceformatted} <span>%</span></h2>
                            </td>
                            <td class="currrency_7daychange">
                                <h2> ${sevenpriceformatted} %</h2>
                            </td>
                            <td class="currrency_marketcap">
                                <h2>$ <span>${formatted}</span></h2>
                            </td>
                        </tr>
            `;

    }

});


    return(
        <section>
            <div class="market-table">
                <table id="table-market">
                    <thead>
                        <tr>
                            <th>Cryptocurrency</th>
                            <th>Price</th>
                            <th>24 Change</th>
                            <th>7 Day Change</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <button className='btn01'><a href="https://ncx.cx/market">View More Market
                    <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.29289 1.12883C-0.09763 1.51936 -0.09763 2.15252 0.29289 2.54305L8.5858 10.8359L0.29289 19.1288C-0.09763 19.5193 -0.09763 20.1525 0.29289 20.543C0.68342 20.9335 1.3166 20.9335 1.7071 20.543L10.7071 11.543C11.0976 11.1525 11.0976 10.5193 10.7071 10.1288L1.7071 1.12883C1.3166 0.738308 0.68342 0.738308 0.29289 1.12883Z" fill="white"/>
                    </svg>
                </a></button>
            </div>
        </section>       
    )
}
export default MarketPage;