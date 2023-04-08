const api_url =
	"https://b2t-api-cmc-ncxdigital.flexprotect.org/marketdata/cmc/v1/summary";

async function getapi(url) {
	
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	
    console.log(data);
    
    console.log(data.AAVE_USDT);


	if (response) {
		hideloader();
	}
	show(data);
}

getapi(api_url);

function hideloader() {
	document.getElementById('loadingssss').style.display = 'none';
}

function show(data) {
	// Ethereum
	const ETH1 = data.ETH_USD.id;
	const ETH_ID = ETH1.replace(/_/g, " / ");  
	const eth2 = data.ETH_USD.last;
	const ETH_Price = parseFloat(eth2).toFixed(2);
	const ETH3 = data.ETH_USD.high24hr;
	const ETH_High = parseFloat(ETH3).toFixed(4);
	const ETH4 = data.ETH_USD.low24hr;
	const ETH_Low = parseFloat(ETH4).toFixed(4);
	const ETH5 = data.ETH_USD.quoteVolume;
    const ETH_Volume = parseFloat(ETH5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	
	// USDT
	const USDT = data.USDT_USD.id;
	const USDT_ID = USDT.replace(/_/g, " / ");  
	const USDT2 = data.USDT_USD.last;
	const USDT_Price = parseFloat(USDT2).toFixed(2);
	const USDT3 = data.USDT_USD.high24hr;
	const USDT_High = parseFloat(USDT3).toFixed(4);
	const USDT4 = data.USDT_USD.low24hr;
	const USDT_Low = parseFloat(USDT4).toFixed(4);
	const USDT5 = data.USDT_USD.quoteVolume;
    const USDT_Volume = parseFloat(USDT5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	
	// BTC
	const BTC = data.BTC_USDT.id;
	const BTC_ID = BTC.replace(/_/g, " / ");  
	const BTC2 = data.BTC_USDT.last;
	const BTC_Price = parseFloat(BTC2).toFixed(2);
	const BTC3 = data.BTC_USDT.high24hr;
	const BTC_High = parseFloat(BTC3).toFixed(4);
	const BTC4 = data.BTC_USDT.low24hr;
	const BTC_Low = parseFloat(BTC4).toFixed(4);
	const BTC5 = data.BTC_USDT.quoteVolume;
    const BTC_Volume = parseFloat(BTC5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// BCH
	const BCH = data.BCH_USDT.id;
	const BCH_ID = BCH.replace(/_/g, " / ");  
	const BCH2 = data.BCH_USDT.last;
	const BCH_Price = parseFloat(BCH2).toFixed(2);
	const BCH3 = data.BCH_USDT.high24hr;
	const BCH_High = parseFloat(BCH3).toFixed(4);
	const BCH4 = data.BCH_USDT.low24hr;
	const BCH_Low = parseFloat(BCH4).toFixed(4);
	const BCH5 = data.BCH_USDT.quoteVolume;
    const BCH_Volume = parseFloat(BCH5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// MATIC
	const MATIC = data.MATIC_USDT.id;
	const MATIC_ID = MATIC.replace(/_/g, " / ");  
	const MATIC2 = data.MATIC_USDT.last;
	const MATIC_Price = parseFloat(MATIC2).toFixed(2);
	const MATIC3 = data.MATIC_USDT.high24hr;
	const MATIC_High = parseFloat(MATIC3).toFixed(4);
	const MATIC4 = data.MATIC_USDT.low24hr;
	const MATIC_Low = parseFloat(MATIC4).toFixed(4);
	const MATIC5 = data.MATIC_USDT.quoteVolume;
    const MATIC_Volume = parseFloat(MATIC5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// DAI 
	const DAI = data.DAI_USD.id;
	const DAI_ID = DAI.replace(/_/g, " / ");  
	const DAI2 = data.DAI_USD.last;
	const DAI_Price = parseFloat(DAI2).toFixed(2);
	const DAI3 = data.DAI_USD.high24hr;
	const DAI_High = parseFloat(DAI3).toFixed(4);
	const DAI4 = data.DAI_USD.low24hr;
	const DAI_Low = parseFloat(DAI4).toFixed(4);
	const DAI5 = data.DAI_USD.quoteVolume;
    const DAI_Volume = parseFloat(DAI5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// XRP 
	const XRP = data.XRP_USD.id;
	const XRP_ID = XRP.replace(/_/g, " / ");  
	const XRP2 = data.XRP_USD.last;
	const XRP_Price = parseFloat(XRP2).toFixed(2);
	const XRP3 = data.XRP_USD.high24hr;
	const XRP_High = parseFloat(XRP3).toFixed(4);
	const XRP4 = data.XRP_USD.low24hr;
	const XRP_Low = parseFloat(XRP4).toFixed(4);
	const XRP5 = data.XRP_USD.quoteVolume;
    const XRP_Volume = parseFloat(XRP5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// USDC 
	const USDC = data.USDC_USD.id;
	const USDC_ID = USDC.replace(/_/g, " / ");  
	const USDC2 = data.USDC_USD.last;
	const USDC_Price = parseFloat(USDC2).toFixed(2);
	const USDC3 = data.USDC_USD.high24hr;
	const USDC_High = parseFloat(USDC3).toFixed(4);
	const USDC4 = data.USDC_USD.low24hr;
	const USDC_Low = parseFloat(USDC4).toFixed(4);
	const USDC5 = data.USDC_USD.quoteVolume;
    const USDC_Volume = parseFloat(USDC5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// ZEC 
	const ZEC = data.ZEC_USDT.id;
	const ZEC_ID = ZEC.replace(/_/g, " / ");  
	const ZEC2 = data.ZEC_USDT.last;
	const ZEC_Price = parseFloat(ZEC2).toFixed(2);
	const ZEC3 = data.ZEC_USDT.high24hr;
	const ZEC_High = parseFloat(ZEC3).toFixed(4);
	const ZEC4 = data.ZEC_USDT.low24hr;
	const ZEC_Low = parseFloat(ZEC4).toFixed(4);
	const ZEC5 = data.ZEC_USDT.quoteVolume;
    const ZEC_Volume = parseFloat(ZEC5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// BNB 
	const BNB = data.BNB_USDT.id;
	const BNB_ID = BNB.replace(/_/g, " / ");  
	const BNB2 = data.BNB_USDT.last;
	const BNB_Price = parseFloat(BNB2).toFixed(2);
	const BNB3 = data.BNB_USDT.high24hr;
	const BNB_High = parseFloat(BNB3).toFixed(4);
	const BNB4 = data.BNB_USDT.low24hr;
	const BNB_Low = parseFloat(BNB4).toFixed(4);
	const BNB5 = data.BNB_USDT.quoteVolume;
    const BNB_Volume = parseFloat(BNB5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	let tab =
		`
		<tr>
			<td class="mark-pair">
				<img src="https://ncx.cx/images/btc.svg" alt="coin-logo" />
				<h1>${BTC_ID}</h1>
			</td>
			<td class="mark-price">
				<h1>${BTC_Price}</h1>
				<p>≈$${BTC_Price}</p>
			</td>
			<td class="mark-high">
				<h1>${BTC_High}</h1>
				<p>${BTC_High}</p>
			</td>
			<td class="mark-low">
				<h1>${BTC_Low}</h1>
				<p>${BTC_Low}</p>
			</td>
			<td class="mark-graph">
				<img src="https://ncx.cx/images/graphs/btc_usdt.png" alt="graph" />
			</td>
			<td class="mark-volume">
				<h1>${BTC_Volume}</h1>
			</td>
		</tr>

		<tr>
			<td class="mark-pair">
				<img src="https://ncx.cx/images/eth.svg" alt="coin-logo" />
				<h1>${ETH_ID}</h1>
			</td>
			<td class="mark-price">
				<h1>${ETH_Price}</h1>
				<p>≈$${ETH_Price}</p>
			</td>
			<td class="mark-high">
				<h1>${ETH_High}</h1>
				<p>${ETH_High}</p>
			</td>
			<td class="mark-low">
				<h1>${ETH_Low}</h1>
				<p>${ETH_Low}</p>
			</td>
			<td class="mark-graph">
				<img src="https://ncx.cx/images/graphs/eth_usdt.png" alt="graph" />
			</td>
			<td class="mark-volume">
				<h1>${ETH_Volume}</h1>
			</td>
		</tr>

		<tr>
			<td class="mark-pair">
				<img src="https://ncx.cx/images/usdt.svg" alt="coin-logo" />
				<h1>${USDT_ID}</h1>
			</td>
			<td class="mark-price">
				<h1>${USDT_Price}</h1>
				<p>≈$${USDT_Price}</p>
			</td>
			<td class="mark-high">
				<h1>${USDT_High}</h1>
				<p>${USDT_High}</p>
			</td>
			<td class="mark-low">
				<h1>${USDT_Low}</h1>
				<p>${USDT_Low}</p>
			</td>
			<td class="mark-graph">
				<img src="https://ncx.cx/images/graphs/usdt_usd.png" alt="graph" />
			</td>
			<td class="mark-volume">
				<h1>${USDT_Volume}</h1>
			</td>
		</tr>

		<tr>
			<td class="mark-pair">
				<img src="https://ncx.cx/images/bch.svg" alt="coin-logo" />
				<h1>${BCH_ID}</h1>
			</td>
			<td class="mark-price">
				<h1>${BCH_Price}</h1>
				<p>≈$${BCH_Price}</p>
			</td>
			<td class="mark-high">
				<h1>${BCH_High}</h1>
				<p>${BCH_High}</p>
			</td>
			<td class="mark-low">
				<h1>${BCH_Low}</h1>
				<p>${BCH_Low}</p>
			</td>
			<td class="mark-graph">
				<img src="https://ncx.cx/images/graphs/bch_usdt.png" alt="graph" />
			</td>
			<td class="mark-volume">
				<h1>${BCH_Volume}</h1>
			</td>
		</tr>

		<tr>
			<td class="mark-pair">
				<img src="https://ncx.cx/images/bnb.svg" alt="coin-logo" />
				<h1>${BNB_ID}</h1>
			</td>
			<td class="mark-price">
				<h1>${BNB_Price}</h1>
				<p>≈$${BNB_Price}</p>
			</td>
			<td class="mark-high">
				<h1>${BNB_High}</h1>
				<p>${BNB_High}</p>
			</td>
			<td class="mark-low">
				<h1>${BNB_Low}</h1>
				<p>${BNB_Low}</p>
			</td>
			<td class="mark-graph">
				<img src="https://ncx.cx/images/graphs/bnb_usdt.png" alt="graph" />
			</td>
			<td class="mark-volume">
				<h1>${BNB_Volume}</h1>
			</td>
		</tr>

		<tr>
			<td class="mark-pair">
				<img src="https://ncx.cx/images/matic.svg" alt="coin-logo" />
				<h1>${MATIC_ID}</h1>
			</td>
			<td class="mark-price">
				<h1>${MATIC_Price}</h1>
				<p>≈$${MATIC_Price}</p>
			</td>
			<td class="mark-high">
				<h1>${MATIC_High}</h1>
				<p>${MATIC_High}</p>
			</td>
			<td class="mark-low">
				<h1>${MATIC_Low}</h1>
				<p>${MATIC_Low}</p>
			</td>
			<td class="mark-graph">
				<img src="https://ncx.cx/images/graphs/matic_usdt.png" alt="graph" />
			</td>
			<td class="mark-volume">
				<h1>${MATIC_Volume}</h1>
			</td>
		</tr>

		<tr>
			<td class="mark-pair">
				<img src="https://ncx.cx/images/dai.svg" alt="coin-logo" />
				<h1>${DAI_ID}</h1>
			</td>
			<td class="mark-price">
				<h1>${DAI_Price}</h1>
				<p>≈$${DAI_Price}</p>
			</td>
			<td class="mark-high">
				<h1>${DAI_High}</h1>
				<p>${DAI_High}</p>
			</td>
			<td class="mark-low">
				<h1>${DAI_Low}</h1>
				<p>${DAI_Low}</p>
			</td>
			<td class="mark-graph">
				<img src="https://ncx.cx/images/graphs/dai_usdt.png" alt="graph" />
			</td>
			<td class="mark-volume">
				<h1>${DAI_Volume}</h1>
			</td>
		</tr>

		<tr>
			<td class="mark-pair">
				<img src="https://ncx.cx/images/xrp.svg" alt="coin-logo" />
				<h1>${XRP_ID}</h1>
			</td>
			<td class="mark-price">
				<h1>${XRP_Price}</h1>
				<p>≈$${XRP_Price}</p>
			</td>
			<td class="mark-high">
				<h1>${XRP_High}</h1>
				<p>${XRP_High}</p>
			</td>
			<td class="mark-low">
				<h1>${XRP_Low}</h1>
				<p>${XRP_Low}</p>
			</td>
			<td class="mark-graph">
				<img src="https://ncx.cx/images/graphs/xrp_usdt.png" alt="graph" />
			</td>
			<td class="mark-volume">
				<h1>${XRP_Volume}</h1>
			</td>
		</tr>

		<tr>
			<td class="mark-pair">
				<img src="https://ncx.cx/images/usdc.svg" alt="coin-logo" />
				<h1>${USDC_ID}</h1>
			</td>
			<td class="mark-price">
				<h1>${USDC_Price}</h1>
				<p>≈$${USDC_Price}</p>
			</td>
			<td class="mark-high">
				<h1>${USDC_High}</h1>
				<p>${USDC_High}</p>
			</td>
			<td class="mark-low">
				<h1>${USDC_Low}</h1>
				<p>${USDC_Low}</p>
			</td>
			<td class="mark-graph">
				<img src="https://ncx.cx/images/graphs/usdc_usd.png" alt="graph" />
			</td>
			<td class="mark-volume">
				<h1>${USDC_Volume}</h1>
			</td>
		</tr>

		<tr>
			<td class="mark-pair">
				<img src="https://ncx.cx/images/zec.svg" alt="coin-logo" />
				<h1>${ZEC_ID}</h1>
			</td>
			<td class="mark-price">
				<h1>${ZEC_Price}</h1>
				<p>≈$${ZEC_Price}</p>
			</td>
			<td class="mark-high">
				<h1>${ZEC_High}</h1>
				<p>${ZEC_High}</p>
			</td>
			<td class="mark-low">
				<h1>${ZEC_Low}</h1>
				<p>${ZEC_Low}</p>
			</td>
			<td class="mark-graph">
				<img src="https://ncx.cx/images/graphs/zec_usdt.png" alt="graph" />
			</td>
			<td class="mark-volume">
				<h1>${ZEC_Volume}</h1>
			</td>
		</tr>
		`;

	// Setting innerHTML as tab variable
	document.getElementById("market_table_body").innerHTML = tab;
}
