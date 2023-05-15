import React from "react";
// import './market_ff';
import { ReactComponent as SearchIcon } from '../../images/market_searchicon.svg';
import { useTranslation } from "react-i18next";

function HomePageMarketSection()
{
    const api_url =
	"https://b2t-api-cmc-ncxdigital.flexprotect.org/marketdata/cmc/v1/summary";

    async function getapi(url) {
	
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	
	if (response) {
		hideloader();
	}
	show(data);
    }
    
    function show(data) {
        
        // ETH / USDT
        const ETH1 = data.ETH_USD.id;
        const ETH_ID = ETH1.replace(/_/g, " / ");  
        
        const eth2 = data.ETH_USD.last;
        const ETH_Price = parseFloat(eth2);
        const ETH_Pricenew = parseFloat(eth2).toFixed(2);
        
        const ETH3 = data.ETH_USD.high24hr;
        const ETH_High = parseFloat(ETH3).toFixed(4);
        
        const ETH4 = data.ETH_USD.low24hr;
        const ETH_Low = parseFloat(ETH4).toFixed(4);
        
        // const ETH5 = data.ETH_USD.quoteVolume;
        // const ETH_Volume = parseFloat(ETH5).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        const change = data.ETH_USD.percentChange * 100;
        const EthChanged = parseFloat(change).toFixed(4);
        
        // MANA / USDT
        const MANA1 = data.MANA_USDT.id;
        const MANA_ID = MANA1.replace(/_/g, " / ");  
        
        const MANA2 = data.MANA_USDT.last;
        const MANA_Price = parseFloat(MANA2);
        const MANA_Pricenew = parseFloat(MANA2).toFixed(2);
        
        const MANA3 = data.MANA_USDT.high24hr;
        const MANA_High = parseFloat(MANA3).toFixed(4);
        
        const MANA4 = data.MANA_USDT.low24hr;
        const MANA_Low = parseFloat(MANA4).toFixed(4);

        const MANAchange = data.MANA_USDT.percentChange * 100;
        const MANAChanged = parseFloat(MANAchange).toFixed(4);

        // DOGE / USDT
        const DOGE1 = data.DOGE_USDT.id;
        const DOGE_ID = DOGE1.replace(/_/g, " / ");  
        
        const DOGE2 = data.DOGE_USDT.last;
        const DOGE_Price = parseFloat(DOGE2);
        const DOGE_Pricenew = parseFloat(DOGE2).toFixed(2);
        
        const DOGE3 = data.DOGE_USDT.high24hr;
        const DOGE_High = parseFloat(DOGE3).toFixed(4);
        
        const DOGE4 = data.DOGE_USDT.low24hr;
        const DOGE_Low = parseFloat(DOGE4).toFixed(4);

        const DOGE5 = data.DOGE_USDT.percentChange * 100;
        const DOGEChanged = parseFloat(DOGE5).toFixed(4);

        // BUSD / USDT
        const BUSD1 = data.BUSD_USDT.id;
        const BUSD_ID = BUSD1.replace(/_/g, " / ");  
        
        const BUSD2 = data.BUSD_USDT.last;
        const BUSD_Price = parseFloat(BUSD2);
        const BUSD_Pricenew = parseFloat(BUSD2).toFixed(2);
        
        const BUSD3 = data.BUSD_USDT.high24hr;
        const BUSD_High = parseFloat(BUSD3).toFixed(4);
        
        const BUSD4 = data.BUSD_USDT.low24hr;
        const BUSD_Low = parseFloat(BUSD4).toFixed(4);

        const BUSD5 = data.BUSD_USDT.percentChange * 100;
        const BUSDChanged = parseFloat(BUSD5).toFixed(4);

        // XRP / USD
        const XRP1 = data.XRP_USD.id;
        const XRP_ID = XRP1.replace(/_/g, " / ");  
        
        const XRP2 = data.XRP_USD.last;
        const XRP_Price = parseFloat(XRP2);
        const XRP_Pricenew = parseFloat(XRP2).toFixed(2);
        
        const XRP3 = data.XRP_USD.high24hr;
        const XRP_High = parseFloat(XRP3).toFixed(4);
        
        const XRP4 = data.XRP_USD.low24hr;
        const XRP_Low = parseFloat(XRP4).toFixed(4);

        const XRP5 = data.XRP_USD.percentChange * 100;
        const XRPChanged = parseFloat(XRP5).toFixed(4);

        // LTC / USDT
        const LTC1 = data.LTC_USDT.id;
        const LTC_ID = LTC1.replace(/_/g, " / ");  
        
        const LTC2 = data.LTC_USDT.last;
        const LTC_Price = parseFloat(LTC2);
        const LTC_Pricenew = parseFloat(LTC2).toFixed(2);
        
        const LTC3 = data.LTC_USDT.high24hr;
        const LTC_High = parseFloat(LTC3).toFixed(4);
        
        const LTC4 = data.LTC_USDT.low24hr;
        const LTC_Low = parseFloat(LTC4).toFixed(4);

        const LTC5 = data.LTC_USDT.percentChange * 100;
        const LTCChanged = parseFloat(LTC5).toFixed(4);

        // YFI / USDT
        const YFI1 = data.YFI_USDT.id;
        const YFI_ID = YFI1.replace(/_/g, " / ");  
        
        const YFI2 = data.YFI_USDT.last;
        const YFI_Price = parseFloat(YFI2);
        const YFI_Pricenew = parseFloat(YFI2).toFixed(2);
        
        const YFI3 = data.YFI_USDT.high24hr;
        const YFI_High = parseFloat(YFI3).toFixed(4);
        
        const YFI4 = data.YFI_USDT.low24hr;
        const YFI_Low = parseFloat(YFI4).toFixed(4);

        const YFI5 = data.YFI_USDT.percentChange * 100;
        const YFIChanged = parseFloat(YFI5).toFixed(4);

        // ETH / BTC
        const EBTC1 = data.ETH_BTC.id;
        const EBTC_ID = EBTC1.replace(/_/g, " / ");  
        
        const EBTC2 = data.ETH_BTC.last;
        const EBTC_Price = parseFloat(EBTC2);
        const EBTC_Pricenew = parseFloat(EBTC2).toFixed(2);
        
        const EBTC3 = data.ETH_BTC.high24hr;
        const EBTC_High = parseFloat(EBTC3).toFixed(4);
        
        const EBTC4 = data.ETH_BTC.low24hr;
        const EBTC_Low = parseFloat(EBTC4).toFixed(4);

        const EBTC5 = data.ETH_BTC.percentChange * 100;
        const EBTCChanged = parseFloat(EBTC5).toFixed(4);

        // LINK / USDT
        const LINK1 = data.LINK_USDT.id;
        const LINK_ID = LINK1.replace(/_/g, " / ");  
        
        const LINK2 = data.LINK_USDT.last;
        const LINK_Price = parseFloat(LINK2);
        const LINK_Pricenew = parseFloat(LINK2).toFixed(2);
        
        const LINK3 = data.LINK_USDT.high24hr;
        const LINK_High = parseFloat(LINK3).toFixed(4);
        
        const LINK4 = data.LINK_USDT.low24hr;
        const LINK_Low = parseFloat(LINK4).toFixed(4);

        const LINK5 = data.LINK_USDT.percentChange * 100;
        const LINKChanged = parseFloat(LINK5).toFixed(4);

        // XMR / USDT
        const XMR1 = data.XMR_USDT.id;
        const XMR_ID = XMR1.replace(/_/g, " / ");  
        
        const XMR2 = data.XMR_USDT.last;
        const XMR_Price = parseFloat(XMR2);
        const XMR_Pricenew = parseFloat(XMR2).toFixed(2);
        
        const XMR3 = data.XMR_USDT.high24hr;
        const XMR_High = parseFloat(XMR3).toFixed(4);
        
        const XMR4 = data.XMR_USDT.low24hr;
        const XMR_Low = parseFloat(XMR4).toFixed(4);

        const XMR5 = data.XMR_USDT.percentChange * 100;
        const XMRChanged = parseFloat(XMR5).toFixed(4);

        // DAI / USD
        const DAI1 = data.DAI_USD.id;
        const DAI_ID = DAI1.replace(/_/g, " / ");  
        
        const DAI2 = data.DAI_USD.last;
        const DAI_Price = parseFloat(DAI2);
        const DAI_Pricenew = parseFloat(DAI2).toFixed(2);
        
        const DAI3 = data.DAI_USD.high24hr;
        const DAI_High = parseFloat(DAI3).toFixed(4);
        
        const DAI4 = data.DAI_USD.low24hr;
        const DAI_Low = parseFloat(DAI4).toFixed(4);

        const DAI5 = data.DAI_USD.percentChange * 100;
        const DAIChanged = parseFloat(DAI5).toFixed(4);

        // BAT / USDT
        const BAT1 = data.BAT_USDT.id;
        const BAT_ID = BAT1.replace(/_/g, " / ");  
        
        const BAT2 = data.BAT_USDT.last;
        const BAT_Price = parseFloat(BAT2);
        const BAT_Pricenew = parseFloat(BAT2).toFixed(2);
        
        const BAT3 = data.BAT_USDT.high24hr;
        const BAT_High = parseFloat(BAT3).toFixed(4);
        
        const BAT4 = data.BAT_USDT.low24hr;
        const BAT_Low = parseFloat(BAT4).toFixed(4);

        const BAT5 = data.BAT_USDT.percentChange * 100;
        const BATChanged = parseFloat(BAT5).toFixed(4);

        // BNB / USDT
        const BNB1 = data.BNB_USDT.id;
        const BNB_ID = BNB1.replace(/_/g, " / ");  
        
        const BNB2 = data.BNB_USDT.last;
        const BNB_Price = parseFloat(BNB2);
        const BNB_Pricenew = parseFloat(BNB2).toFixed(2);
        
        const BNB3 = data.BNB_USDT.high24hr;
        const BNB_High = parseFloat(BNB3).toFixed(4);
        
        const BNB4 = data.BNB_USDT.low24hr;
        const BNB_Low = parseFloat(BNB4).toFixed(4);

        const BNB5 = data.BNB_USDT.percentChange * 100;
        const BNBChanged = parseFloat(BNB5).toFixed(4);

        // USDT / USDC
        const USDT1 = data.USDT_USDC.id;
        const USDT_ID = USDT1.replace(/_/g, " / ");  
        
        const USDT2 = data.USDT_USDC.last;
        const USDT_Price = parseFloat(USDT2);
        const USDT_Pricenew = parseFloat(USDT2).toFixed(2);
        
        const USDT3 = data.USDT_USDC.high24hr;
        const USDT_High = parseFloat(USDT3).toFixed(4);
        
        const USDT4 = data.USDT_USDC.low24hr;
        const USDT_Low = parseFloat(USDT4).toFixed(4);

        const USDT5 = data.USDT_USDC.percentChange * 100;
        const USDTChanged = parseFloat(USDT5).toFixed(4);

        // XRPUSDT / USDT
        const XRPUSDT1 = data.XRP_USDT.id;
        const XRPUSDT_ID = XRPUSDT1.replace(/_/g, " / ");  
        
        const XRPUSDT2 = data.XRP_USDT.last;
        const XRPUSDT_Price = parseFloat(XRPUSDT2);
        const XRPUSDT_Pricenew = parseFloat(XRPUSDT2).toFixed(2);
        
        const XRPUSDT3 = data.XRP_USDT.high24hr;
        const XRPUSDT_High = parseFloat(XRPUSDT3).toFixed(4);
        
        const XRPUSDT4 = data.XRP_USDT.low24hr;
        const XRPUSDT_Low = parseFloat(XRPUSDT4).toFixed(4);

        const XRPUSDT5 = data.XRP_USDT.percentChange * 100;
        const XRPUSDTChanged = parseFloat(XRPUSDT5).toFixed(4);

        // BAND / USDT
        const BAND1 = data.BAND_USDT.id;
        const BAND_ID = BAND1.replace(/_/g, " / ");  
        
        const BAND2 = data.BAND_USDT.last;
        const BAND_Price = parseFloat(BAND2);
        const BAND_Pricenew = parseFloat(BAND2).toFixed(2);
        
        const BAND3 = data.BAND_USDT.high24hr;
        const BAND_High = parseFloat(BAND3).toFixed(4);
        
        const BAND4 = data.BAND_USDT.low24hr;
        const BAND_Low = parseFloat(BAND4).toFixed(4);

        const BAND5 = data.BAND_USDT.percentChange * 100;
        const BANDChanged = parseFloat(BAND5).toFixed(4);

        // USDC / USD
        const USDCUSD1 = data.USDC_USD.id;
        const USDCUSD_ID = USDCUSD1.replace(/_/g, " / ");  
        
        const USDCUSD2 = data.USDC_USD.last;
        const USDCUSD_Price = parseFloat(USDCUSD2);
        const USDCUSD_Pricenew = parseFloat(USDCUSD2).toFixed(2);
        
        const USDCUSD3 = data.USDC_USD.high24hr;
        const USDCUSD_High = parseFloat(USDCUSD3).toFixed(4);
        
        const USDCUSD4 = data.USDC_USD.low24hr;
        const USDCUSD_Low = parseFloat(USDCUSD4).toFixed(4);

        const USDCUSD5 = data.USDC_USD.percentChange * 100;
        const USDCUSDChanged = parseFloat(USDCUSD5).toFixed(4);

        // BTC / USD
        const BTC1 = data.BTC_USD.id;
        const BTC_ID = BTC1.replace(/_/g, " / ");  
        
        const BTC2 = data.BTC_USD.last;
        const BTC_Price = parseFloat(BTC2);
        const BTC_Pricenew = parseFloat(BTC2).toFixed(2);
        
        const BTC3 = data.BTC_USD.high24hr;
        const BTC_High = parseFloat(BTC3).toFixed(4);
        
        const BTC4 = data.BTC_USD.low24hr;
        const BTC_Low = parseFloat(BTC4).toFixed(4);

        const BTC5 = data.BTC_USD.percentChange * 100;
        const BTCChanged = parseFloat(BTC5).toFixed(4);

        // BCH / BTC
        const BCH1 = data.BCH_BTC.id;
        const BCH_ID = BCH1.replace(/_/g, " / ");  
        
        const BCH2 = data.BCH_BTC.last;
        const BCH_Price = parseFloat(BCH2);
        const BCH_Pricenew = parseFloat(BCH2).toFixed(2);
        
        const BCH3 = data.BCH_BTC.high24hr;
        const BCH_High = parseFloat(BCH3).toFixed(4);
        
        const BCH4 = data.BCH_BTC.low24hr;
        const BCH_Low = parseFloat(BCH4).toFixed(4);

        const BCH5 = data.BCH_BTC.percentChange * 100;
        const BCHChanged = parseFloat(BCH5).toFixed(4);

        // TUSD / USDT
        const TUSD1 = data.TUSD_USDT.id;
        const TUSD_ID = TUSD1.replace(/_/g, " / ");  
        
        const TUSD2 = data.TUSD_USDT.last;
        const TUSD_Price = parseFloat(TUSD2);
        const TUSD_Pricenew = parseFloat(TUSD2).toFixed(2);
        
        const TUSD3 = data.TUSD_USDT.high24hr;
        const TUSD_High = parseFloat(TUSD3).toFixed(4);
        
        const TUSD4 = data.TUSD_USDT.low24hr;
        const TUSD_Low = parseFloat(TUSD4).toFixed(4);

        const TUSD5 = data.TUSD_USDT.percentChange * 100;
        const TUSDChanged = parseFloat(TUSD5).toFixed(4);

        // REN / USDT
        const REN1 = data.REN_USDT.id;
        const REN_ID = REN1.replace(/_/g, " / ");  
        
        const REN2 = data.REN_USDT.last;
        const REN_Price = parseFloat(REN2);
        const REN_Pricenew = parseFloat(REN2).toFixed(2);
        
        const REN3 = data.REN_USDT.high24hr;
        const REN_High = parseFloat(REN3).toFixed(4);
        
        const REN4 = data.REN_USDT.low24hr;
        const REN_Low = parseFloat(REN4).toFixed(4);

        const REN5 = data.REN_USDT.percentChange * 100;
        const RENChanged = parseFloat(REN5).toFixed(4);

        // LRC / USDT
        const LRC1 = data.LRC_USDT.id;
        const LRC_ID = LRC1.replace(/_/g, " / ");  
        
        const LRC2 = data.LRC_USDT.last;
        const LRC_Price = parseFloat(LRC2);
        const LRC_Pricenew = parseFloat(LRC2).toFixed(2);
        
        const LRC3 = data.LRC_USDT.high24hr;
        const LRC_High = parseFloat(LRC3).toFixed(4);
        
        const LRC4 = data.LRC_USDT.low24hr;
        const LRC_Low = parseFloat(LRC4).toFixed(4);

        const LRC5 = data.LRC_USDT.percentChange * 100;
        const LRCChanged = parseFloat(LRC5).toFixed(4);

        // BCH / USDT
        const BCHUSDT1 = data.BCH_USDT.id;
        const BCHUSDT_ID = BCHUSDT1.replace(/_/g, " / ");  
        
        const BCHUSDT2 = data.BCH_USDT.last;
        const BCHUSDT_Price = parseFloat(BCHUSDT2);
        const BCHUSDT_Pricenew = parseFloat(BCHUSDT2).toFixed(2);
        
        const BCHUSDT3 = data.BCH_USDT.high24hr;
        const BCHUSDT_High = parseFloat(BCHUSDT3).toFixed(4);
        
        const BCHUSDT4 = data.BCH_USDT.low24hr;
        const BCHUSDT_Low = parseFloat(BCHUSDT4).toFixed(4);

        const BCHUSDT5 = data.BCH_USDT.percentChange * 100;
        const BCHUSDTChanged = parseFloat(BCHUSDT5).toFixed(4);

        // AAVE / USDT
        const AAVE1 = data.AAVE_USDT.id;
        const AAVE_ID = AAVE1.replace(/_/g, " / ");  
        
        const AAVE2 = data.AAVE_USDT.last;
        const AAVE_Price = parseFloat(AAVE2);
        const AAVE_Pricenew = parseFloat(AAVE2).toFixed(2);
        
        const AAVE3 = data.AAVE_USDT.high24hr;
        const AAVE_High = parseFloat(AAVE3).toFixed(4);
        
        const AAVE4 = data.AAVE_USDT.low24hr;
        const AAVE_Low = parseFloat(AAVE4).toFixed(4);

        const AAVE5 = data.AAVE_USDT.percentChange * 100;
        const AAVEChanged = parseFloat(AAVE5).toFixed(4);

        // MKR / USDT
        const MKR1 = data.MKR_USDT.id;
        const MKR_ID = MKR1.replace(/_/g, " / ");  
        
        const MKR2 = data.MKR_USDT.last;
        const MKR_Price = parseFloat(MKR2);
        const MKR_Pricenew = parseFloat(MKR2).toFixed(2);
        
        const MKR3 = data.MKR_USDT.high24hr;
        const MKR_High = parseFloat(MKR3).toFixed(4);
        
        const MKR4 = data.MKR_USDT.low24hr;
        const MKR_Low = parseFloat(MKR4).toFixed(4);

        const MKR5 = data.MKR_USDT.percentChange * 100;
        const MKRChanged = parseFloat(MKR5).toFixed(4);

        // ZEC / USDT
        const ZEC1 = data.ZEC_USDT.id;
        const ZEC_ID = ZEC1.replace(/_/g, " / ");  
        
        const ZEC2 = data.ZEC_USDT.last;
        const ZEC_Price = parseFloat(ZEC2);
        const ZEC_Pricenew = parseFloat(ZEC2).toFixed(2);
        
        const ZEC3 = data.ZEC_USDT.high24hr;
        const ZEC_High = parseFloat(ZEC3).toFixed(4);
        
        const ZEC4 = data.ZEC_USDT.low24hr;
        const ZEC_Low = parseFloat(ZEC4).toFixed(4);

        const ZEC5 = data.ZEC_USDT.percentChange * 100;
        const ZECChanged = parseFloat(ZEC5).toFixed(4);

        // BTC / USDC
        const BTCUSDC1 = data.BTC_USDC.id;
        const BTCUSDC_ID = BTCUSDC1.replace(/_/g, " / ");  
        
        const BTCUSDC2 = data.BTC_USDC.last;
        const BTCUSDC_Price = parseFloat(BTCUSDC2);
        const BTCUSDC_Pricenew = parseFloat(BTCUSDC2).toFixed(2);
        
        const BTCUSDC3 = data.BTC_USDC.high24hr;
        const BTCUSDC_High = parseFloat(BTCUSDC3).toFixed(4);
        
        const BTCUSDC4 = data.BTC_USDC.low24hr;
        const BTCUSDC_Low = parseFloat(BTCUSDC4).toFixed(4);

        const BTCUSDC5 = data.BTC_USDC.percentChange * 100;
        const BTCUSDCChanged = parseFloat(BTCUSDC5).toFixed(4);

        // SNX / USDT
        const SNX1 = data.SNX_USDT.id;
        const SNX_ID = SNX1.replace(/_/g, " / ");  
        
        const SNX2 = data.SNX_USDT.last;
        const SNX_Price = parseFloat(SNX2);
        const SNX_Pricenew = parseFloat(SNX2).toFixed(2);
        
        const SNX3 = data.SNX_USDT.high24hr;
        const SNX_High = parseFloat(SNX3).toFixed(4);
        
        const SNX4 = data.SNX_USDT.low24hr;
        const SNX_Low = parseFloat(SNX4).toFixed(4);

        const SNX5 = data.SNX_USDT.percentChange * 100;
        const SNXChanged = parseFloat(SNX5).toFixed(4);

        // MATIC / USDT
        const MATIC1 = data.MATIC_USDT.id;
        const MATIC_ID = MATIC1.replace(/_/g, " / ");  
        
        const MATIC2 = data.MATIC_USDT.last;
        const MATIC_Price = parseFloat(MATIC2);
        const MATIC_Pricenew = parseFloat(MATIC2).toFixed(2);
        
        const MATIC3 = data.MATIC_USDT.high24hr;
        const MATIC_High = parseFloat(MATIC3).toFixed(4);
        
        const MATIC4 = data.MATIC_USDT.low24hr;
        const MATIC_Low = parseFloat(MATIC4).toFixed(4);

        const MATIC5 = data.MATIC_USDT.percentChange * 100;
        const MATICChanged = parseFloat(MATIC5).toFixed(4);

        // DASH / USDT
        const DASH1 = data.DASH_USDT.id;
        const DASH_ID = DASH1.replace(/_/g, " / ");  
        
        const DASH2 = data.DASH_USDT.last;
        const DASH_Price = parseFloat(DASH2);
        const DASH_Pricenew = parseFloat(DASH2).toFixed(2);
        
        const DASH3 = data.DASH_USDT.high24hr;
        const DASH_High = parseFloat(DASH3).toFixed(4);
        
        const DASH4 = data.DASH_USDT.low24hr;
        const DASH_Low = parseFloat(DASH4).toFixed(4);

        const DASH5 = data.DASH_USDT.percentChange * 100;
        const DASHChanged = parseFloat(DASH5).toFixed(4);

        // SUSHI / USDT
        const SUSHI1 = data.SUSHI_USDT.id;
        const SUSHI_ID = SUSHI1.replace(/_/g, " / ");  
        
        const SUSHI2 = data.SUSHI_USDT.last;
        const SUSHI_Price = parseFloat(SUSHI2);
        const SUSHI_Pricenew = parseFloat(SUSHI2).toFixed(2);
        
        const SUSHI3 = data.SUSHI_USDT.high24hr;
        const SUSHI_High = parseFloat(SUSHI3).toFixed(4);
        
        const SUSHI4 = data.SUSHI_USDT.low24hr;
        const SUSHI_Low = parseFloat(SUSHI4).toFixed(4);

        const SUSHI5 = data.SUSHI_USDT.percentChange * 100;
        const SUSHIChanged = parseFloat(SUSHI5).toFixed(4);

        // XLM / USDT
        const XLM1 = data.XLM_USDT.id;
        const XLM_ID = XLM1.replace(/_/g, " / ");  
        
        const XLM2 = data.XLM_USDT.last;
        const XLM_Price = parseFloat(XLM2);
        const XLM_Pricenew = parseFloat(XLM2).toFixed(2);
        
        const XLM3 = data.XLM_USDT.high24hr;
        const XLM_High = parseFloat(XLM3).toFixed(4);
        
        const XLM4 = data.XLM_USDT.low24hr;
        const XLM_Low = parseFloat(XLM4).toFixed(4);

        const XLM5 = data.XLM_USDT.percentChange * 100;
        const XLMChanged = parseFloat(XLM5).toFixed(4);

        // COMP / USDT
        const COMP1 = data.COMP_USDT.id;
        const COMP_ID = COMP1.replace(/_/g, " / ");  
        
        const COMP2 = data.COMP_USDT.last;
        const COMP_Price = parseFloat(COMP2);
        const COMP_Pricenew = parseFloat(COMP2).toFixed(2);
        
        const COMP3 = data.COMP_USDT.high24hr;
        const COMP_High = parseFloat(COMP3).toFixed(4);
        
        const COMP4 = data.COMP_USDT.low24hr;
        const COMP_Low = parseFloat(COMP4).toFixed(4);

        const COMP5 = data.COMP_USDT.percentChange * 100;
        const COMPChanged = parseFloat(COMP5).toFixed(4);

        // XRP / BTC
        const XRPBTC1 = data.XRP_BTC.id;
        const XRPBTC_ID = XRPBTC1.replace(/_/g, " / ");  
        
        const XRPBTC2 = data.XRP_BTC.last;
        const XRPBTC_Price = parseFloat(XRPBTC2);
        const XRPBTC_Pricenew = parseFloat(XRPBTC2).toFixed(2);
        
        const XRPBTC3 = data.XRP_BTC.high24hr;
        const XRPBTC_High = parseFloat(XRPBTC3).toFixed(4);
        
        const XRPBTC4 = data.XRP_BTC.low24hr;
        const XRPBTC_Low = parseFloat(XRPBTC4).toFixed(4);

        const XRPBTC5 = data.XRP_BTC.percentChange * 100;
        const XRPBTCChanged = parseFloat(XRPBTC5).toFixed(4);

        // BTC / USD
        const BTCUSD1 = data.BTC_USD.id;
        const BTCUSD_ID = BTCUSD1.replace(/_/g, " / ");  
        
        const BTCUSD2 = data.BTC_USD.last;
        const BTCUSD_Price = parseFloat(BTCUSD2);
        const BTCUSD_Pricenew = parseFloat(BTCUSD2).toFixed(2);
        
        const BTCUSD3 = data.BTC_USD.high24hr;
        const BTCUSD_High = parseFloat(BTCUSD3).toFixed(4);
        
        const BTCUSD4 = data.BTC_USD.low24hr;
        const BTCUSD_Low = parseFloat(BTCUSD4).toFixed(4);

        const BTCUSD5 = data.BTC_USD.percentChange * 100;
        const BTCUSDChanged = parseFloat(BTCUSD5).toFixed(4);

        // USDT / USD
        const USDTUSD1 = data.USDT_USD.id;
        const USDTUSD_ID = USDTUSD1.replace(/_/g, " / ");  
        
        const USDTUSD2 = data.USDT_USD.last;
        const USDTUSD_Price = parseFloat(USDTUSD2);
        const USDTUSD_Pricenew = parseFloat(USDTUSD2).toFixed(2);
        
        const USDTUSD3 = data.USDT_USD.high24hr;
        const USDTUSD_High = parseFloat(USDTUSD3).toFixed(4);
        
        const USDTUSD4 = data.USDT_USD.low24hr;
        const USDTUSD_Low = parseFloat(USDTUSD4).toFixed(4);

        const USDTUSD5 = data.USDT_USD.percentChange * 100;
        const USDTUSDChanged = parseFloat(USDTUSD5).toFixed(4);

        // USDP / USDT
        const USDP1 = data.USDP_USDT.id;
        const USDP_ID = USDP1.replace(/_/g, " / ");  
        
        const USDP2 = data.USDP_USDT.last;
        const USDP_Price = parseFloat(USDP2);
        const USDP_Pricenew = parseFloat(USDP2).toFixed(2);
        
        const USDP3 = data.USDP_USDT.high24hr;
        const USDP_High = parseFloat(USDP3).toFixed(4);
        
        const USDP4 = data.USDP_USDT.low24hr;
        const USDP_Low = parseFloat(USDP4).toFixed(4);

        const USDP5 = data.USDP_USDT.percentChange * 100;
        const USDPChanged = parseFloat(USDP5).toFixed(4);

        // GRT / USDT
        const GRT1 = data.GRT_USDT.id;
        const GRT_ID = GRT1.replace(/_/g, " / ");  
        
        const GRT2 = data.GRT_USDT.last;
        const GRT_Price = parseFloat(GRT2);
        const GRT_Pricenew = parseFloat(GRT2).toFixed(2);
        
        const GRT3 = data.GRT_USDT.high24hr;
        const GRT_High = parseFloat(GRT3).toFixed(4);
        
        const GRT4 = data.GRT_USDT.low24hr;
        const GRT_Low = parseFloat(GRT4).toFixed(4);

        const GRT5 = data.GRT_USDT.percentChange * 100;
        const GRTChanged = parseFloat(GRT5).toFixed(4);

        // TRX / USDT
        const TRX1 = data.TRX_USDT.id;
        const TRX_ID = TRX1.replace(/_/g, " / ");  
        
        const TRX2 = data.TRX_USDT.last;
        const TRX_Price = parseFloat(TRX2);
        const TRX_Pricenew = parseFloat(TRX2).toFixed(2);
        
        const TRX3 = data.TRX_USDT.high24hr;
        const TRX_High = parseFloat(TRX3).toFixed(4);
        
        const TRX4 = data.TRX_USDT.low24hr;
        const TRX_Low = parseFloat(TRX4).toFixed(4);

        const TRX5 = data.TRX_USDT.percentChange * 100;
        const TRXChanged = parseFloat(TRX5).toFixed(4);

        // ZRX / USDT
        const ZRX1 = data.ZRX_USDT.id;
        const ZRX_ID = ZRX1.replace(/_/g, " / ");  
        
        const ZRX2 = data.ZRX_USDT.last;
        const ZRX_Price = parseFloat(ZRX2);
        const ZRX_Pricenew = parseFloat(ZRX2).toFixed(2);
        
        const ZRX3 = data.ZRX_USDT.high24hr;
        const ZRX_High = parseFloat(ZRX3).toFixed(4);
        
        const ZRX4 = data.ZRX_USDT.low24hr;
        const ZRX_Low = parseFloat(ZRX4).toFixed(4);

        const ZRX5 = data.ZRX_USDT.percentChange * 100;
        const ZRXChanged = parseFloat(ZRX5).toFixed(4);

        // ETHUSDT / USD
        const ETHUSDT1 = data.ETH_USDT.id;
        const ETHUSDT_ID = ETHUSDT1.replace(/_/g, " / ");  
        
        const ETHUSDT2 = data.ETH_USDT.last;
        const ETHUSDT_Price = parseFloat(ETHUSDT2);
        const ETHUSDT_Pricenew = parseFloat(ETHUSDT2).toFixed(2);
        
        const ETHUSDT3 = data.ETH_USDT.high24hr;
        const ETHUSDT_High = parseFloat(ETHUSDT3).toFixed(4);
        
        const ETHUSDT4 = data.ETH_USDT.low24hr;
        const ETHUSDT_Low = parseFloat(ETHUSDT4).toFixed(4);

        const ETHUSDT5 = data.ETH_USDT.percentChange * 100;
        const ETHUSDTChanged = parseFloat(ETHUSDT5).toFixed(4);

        // UNI / USD
        const UNI1 = data.UNI_USDT.id;
        const UNI_ID = UNI1.replace(/_/g, " / ");  
        
        const UNI2 = data.UNI_USDT.last;
        const UNI_Price = parseFloat(UNI2);
        const UNI_Pricenew = parseFloat(UNI2).toFixed(2);
        
        const UNI3 = data.UNI_USDT.high24hr;
        const UNI_High = parseFloat(UNI3).toFixed(4);
        
        const UNI4 = data.UNI_USDT.low24hr;
        const UNI_Low = parseFloat(UNI4).toFixed(4);

        const UNI5 = data.UNI_USDT.percentChange * 100;
        const UNIChanged = parseFloat(UNI5).toFixed(4);

        // BTC / USDT
        const BTCUSDT1 = data.BTC_USDT.id;
        const BTCUSDT_ID = BTCUSDT1.replace(/_/g, " / ");  
        
        const BTCUSDT2 = data.BTC_USDT.last;
        const BTCUSDT_Price = parseFloat(BTCUSDT2);
        const BTCUSDT_Pricenew = parseFloat(BTCUSDT2).toFixed(2);
        
        const BTCUSDT3 = data.BTC_USDT.high24hr;
        const BTCUSDT_High = parseFloat(BTCUSDT3).toFixed(4);
        
        const BTCUSDT4 = data.BTC_USDT.low24hr;
        const BTCUSDT_Low = parseFloat(BTCUSDT4).toFixed(4);

        const BTCUSDT5 = data.BTC_USDT.percentChange * 100;
        const BTCUSDTChanged = parseFloat(BTCUSDT5).toFixed(4);


        let tab =
            `
            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${ETH_ID}</h1>
                </td>
                <td>
                    <h1>${ETH_Price}</h1>
                    <p>≈$${ETH_Pricenew}</p>
                </td>
                <td>
                    <h1>${EthChanged}%</h1>
                </td>
                <td>
                    <h1>${ETH_High}</h1>
                    <p>≈$${ETH_High}</p>
                </td>
                <td>
                    <h1>${ETH_Low}</h1>
                    <p>≈$${ETH_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/eth_usd.png" alt="graph" />
                </td>
                <td>
                    <h1>$1,123,32.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${MANA_ID}</h1>
                </td>
                <td>
                    <h1>${MANA_Price}</h1>
                    <p>≈$${MANA_Pricenew}</p>
                </td>
                <td>
                    <h1>${MANAChanged}%</h1>
                </td>
                <td>
                    <h1>${MANA_High}</h1>
                    <p>≈$${MANA_High}</p>
                </td>
                <td>
                    <h1>${MANA_Low}</h1>
                    <p>≈$${MANA_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/mana_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$484,313.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${DOGE_ID}</h1>
                </td>
                <td>
                    <h1>${DOGE_Price}</h1>
                    <p>≈$${DOGE_Pricenew}</p>
                </td>
                <td>
                    <h1>${DOGEChanged}%</h1>
                </td>
                <td>
                    <h1>${DOGE_High}</h1>
                    <p>≈$${DOGE_High}</p>
                </td>
                <td>
                    <h1>${DOGE_Low}</h1>
                    <p>≈$${DOGE_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/doge_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$557,839.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${BUSD_ID}</h1>
                </td>
                <td>
                    <h1>${BUSD_Price}</h1>
                    <p>≈$${BUSD_Pricenew}</p>
                </td>
                <td>
                    <h1>${BUSDChanged}%</h1>
                </td>
                <td>
                    <h1>${BUSD_High}</h1>
                    <p>≈$${BUSD_High}</p>
                </td>
                <td>
                    <h1>${BUSD_Low}</h1>
                    <p>≈$${BUSD_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/busd_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$367,931.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${XRP_ID}</h1>
                </td>
                <td>
                    <h1>${XRP_Price}</h1>
                    <p>≈$${XRP_Pricenew}</p>
                </td>
                <td>
                    <h1>${XRPChanged}%</h1>
                </td>
                <td>
                    <h1>${XRP_High}</h1>
                    <p>≈$${XRP_High}</p>
                </td>
                <td>
                    <h1>${XRP_Low}</h1>
                    <p>≈$${XRP_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/xrp_usd.png" alt="graph" />
                </td>
                <td>
                    <h1>$498,916.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${LTC_ID}</h1>
                </td>
                <td>
                    <h1>${LTC_Price}</h1>
                    <p>≈$${LTC_Pricenew}</p>
                </td>
                <td>
                    <h1>${LTCChanged}%</h1>
                </td>
                <td>
                    <h1>${LTC_High}</h1>
                    <p>≈$${LTC_High}</p>
                </td>
                <td>
                    <h1>${LTC_Low}</h1>
                    <p>≈$${LTC_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/ltc_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$311,217.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${YFI_ID}</h1>
                </td>
                <td>
                    <h1>${YFI_Price}</h1>
                    <p>≈$${YFI_Pricenew}</p>
                </td>
                <td>
                    <h1>${YFIChanged}%</h1>
                </td>
                <td>
                    <h1>${YFI_High}</h1>
                    <p>≈$${YFI_High}</p>
                </td>
                <td>
                    <h1>${YFI_Low}</h1>
                    <p>≈$${YFI_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/yfi_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$354,382.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${EBTC_ID}</h1>
                </td>
                <td>
                    <h1>${EBTC_Price}</h1>
                    <p>≈$${EBTC_Pricenew}</p>
                </td>
                <td>
                    <h1>${EBTCChanged}%</h1>
                </td>
                <td>
                    <h1>${EBTC_High}</h1>
                    <p>≈$${EBTC_High}</p>
                </td>
                <td>
                    <h1>${EBTC_Low}</h1>
                    <p>≈$${EBTC_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/eth_btc.png" alt="graph" />
                </td>
                <td>
                    <h1>$1,263,853.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${LINK_ID}</h1>
                </td>
                <td>
                    <h1>${LINK_Price}</h1>
                    <p>≈$${LINK_Pricenew}</p>
                </td>
                <td>
                    <h1>${LINKChanged}%</h1>
                </td>
                <td>
                    <h1>${LINK_High}</h1>
                    <p>≈$${LINK_High}</p>
                </td>
                <td>
                    <h1>${LINK_Low}</h1>
                    <p>≈$${LINK_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/link_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$284,971.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${XMR_ID}</h1>
                </td>
                <td>
                    <h1>${XMR_Price}</h1>
                    <p>≈$${XMR_Pricenew}</p>
                </td>
                <td>
                    <h1>${XMRChanged}%</h1>
                </td>
                <td>
                    <h1>${XMR_High}</h1>
                    <p>≈$${XMR_High}</p>
                </td>
                <td>
                    <h1>${XMR_Low}</h1>
                    <p>≈$${XMR_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/xmr_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$424,431.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${DAI_ID}</h1>
                </td>
                <td>
                    <h1>${DAI_Price}</h1>
                    <p>≈$${DAI_Pricenew}</p>
                </td>
                <td>
                    <h1>${DAIChanged}%</h1>
                </td>
                <td>
                    <h1>${DAI_High}</h1>
                    <p>≈$${DAI_High}</p>
                </td>
                <td>
                    <h1>${DAI_Low}</h1>
                    <p>≈$${DAI_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/dai_usd.png" alt="graph" />
                </td>
                <td>
                    <h1>$367,392.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${BAT_ID}</h1>
                </td>
                <td>
                    <h1>${BAT_Price}</h1>
                    <p>≈$${BAT_Pricenew}</p>
                </td>
                <td>
                    <h1>${BATChanged}%</h1>
                </td>
                <td>
                    <h1>${BAT_High}</h1>
                    <p>≈$${BAT_High}</p>
                </td>
                <td>
                    <h1>${BAT_Low}</h1>
                    <p>≈$${BAT_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/bat_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$458,299.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${BNB_ID}</h1>
                </td>
                <td>
                    <h1>${BNB_Price}</h1>
                    <p>≈$${BNB_Pricenew}</p>
                </td>
                <td>
                    <h1>${BNBChanged}%</h1>
                </td>
                <td>
                    <h1>${BNB_High}</h1>
                    <p>≈$${BNB_High}</p>
                </td>
                <td>
                    <h1>${BNB_Low}</h1>
                    <p>≈$${BNB_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/bnb_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$1,215,789.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${USDT_ID}</h1>
                </td>
                <td>
                    <h1>${USDT_Price}</h1>
                    <p>≈$${USDT_Pricenew}</p>
                </td>
                <td>
                    <h1>${USDTChanged}%</h1>
                </td>
                <td>
                    <h1>${USDT_High}</h1>
                    <p>≈$${USDT_High}</p>
                </td>
                <td>
                    <h1>${USDT_Low}</h1>
                    <p>≈$${USDT_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/usdt_usdc.png" alt="graph" />
                </td>
                <td>
                    <h1>$983,842.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${XRPUSDT_ID}</h1>
                </td>
                <td>
                    <h1>${XRPUSDT_Price}</h1>
                    <p>≈$${XRPUSDT_Pricenew}</p>
                </td>
                <td>
                    <h1>${XRPUSDTChanged}%</h1>
                </td>
                <td>
                    <h1>${XRPUSDT_High}</h1>
                    <p>≈$${XRPUSDT_High}</p>
                </td>
                <td>
                    <h1>${XRPUSDT_Low}</h1>
                    <p>≈$${XRPUSDT_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/xrp_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$498,916.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${BAND_ID}</h1>
                </td>
                <td>
                    <h1>${BAND_Price}</h1>
                    <p>≈$${BAND_Pricenew}</p>
                </td>
                <td>
                    <h1>${BANDChanged}%</h1>
                </td>
                <td>
                    <h1>${BAND_High}</h1>
                    <p>≈$${BAND_High}</p>
                </td>
                <td>
                    <h1>${BAND_Low}</h1>
                    <p>≈$${BAND_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/band_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$562,226.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${USDCUSD_ID}</h1>
                </td>
                <td>
                    <h1>${USDCUSD_Price}</h1>
                    <p>≈$${USDCUSD_Pricenew}</p>
                </td>
                <td>
                    <h1>${USDCUSDChanged}%</h1>
                </td>
                <td>
                    <h1>${USDCUSD_High}</h1>
                    <p>≈$${USDCUSD_High}</p>
                </td>
                <td>
                    <h1>${USDCUSD_Low}</h1>
                    <p>≈$${USDCUSD_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/usdc_usd.png" alt="graph" />
                </td>
                <td>
                    <h1>$1,108,348.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${BTC_ID}</h1>
                </td>
                <td>
                    <h1>${BTC_Price}</h1>
                    <p>≈$${BTC_Pricenew}</p>
                </td>
                <td>
                    <h1>${BTCChanged}%</h1>
                </td>
                <td>
                    <h1>${BTC_High}</h1>
                    <p>≈$${BTC_High}</p>
                </td>
                <td>
                    <h1>${BTC_Low}</h1>
                    <p>≈$${BTC_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/btc_usd.png" alt="graph" />
                </td>
                <td>
                    <h1>$1,310,484.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${BCH_ID}</h1>
                </td>
                <td>
                    <h1>${BCH_Price}</h1>
                    <p>≈$${BCH_Pricenew}</p>
                </td>
                <td>
                    <h1>${BCHChanged}%</h1>
                </td>
                <td>
                    <h1>${BCH_High}</h1>
                    <p>≈$${BCH_High}</p>
                </td>
                <td>
                    <h1>${BCH_Low}</h1>
                    <p>≈$${BCH_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/bch_btc.png" alt="graph" />
                </td>
                <td>
                    <h1>$348,432.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${TUSD_ID}</h1>
                </td>
                <td>
                    <h1>${TUSD_Price}</h1>
                    <p>≈$${TUSD_Pricenew}</p>
                </td>
                <td>
                    <h1>${TUSDChanged}%</h1>
                </td>
                <td>
                    <h1>${TUSD_High}</h1>
                    <p>≈$${TUSD_High}</p>
                </td>
                <td>
                    <h1>${TUSD_Low}</h1>
                    <p>≈$${TUSD_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/tusd_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$587,982.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${REN_ID}</h1>
                </td>
                <td>
                    <h1>${REN_Price}</h1>
                    <p>≈$${REN_Pricenew}</p>
                </td>
                <td>
                    <h1>${RENChanged}%</h1>
                </td>
                <td>
                    <h1>${REN_High}</h1>
                    <p>≈$${REN_High}</p>
                </td>
                <td>
                    <h1>${REN_Low}</h1>
                    <p>≈$${REN_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/ren_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$343,235.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${LRC_ID}</h1>
                </td>
                <td>
                    <h1>${LRC_Price}</h1>
                    <p>≈$${LRC_Pricenew}</p>
                </td>
                <td>
                    <h1>${LRCChanged}%</h1>
                </td>
                <td>
                    <h1>${LRC_High}</h1>
                    <p>≈$${LRC_High}</p>
                </td>
                <td>
                    <h1>${LRC_Low}</h1>
                    <p>≈$${LRC_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/lrc_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$363,673.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${BCHUSDT_ID}</h1>
                </td>
                <td>
                    <h1>${BCHUSDT_Price}</h1>
                    <p>≈$${BCHUSDT_Pricenew}</p>
                </td>
                <td>
                    <h1>${BCHUSDTChanged}%</h1>
                </td>
                <td>
                    <h1>${BCHUSDT_High}</h1>
                    <p>≈$${BCHUSDT_High}</p>
                </td>
                <td>
                    <h1>${BCHUSDT_Low}</h1>
                    <p>≈$${BCHUSDT_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/bch_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$289,849.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${AAVE_ID}</h1>
                </td>
                <td>
                    <h1>${AAVE_Price}</h1>
                    <p>≈$${AAVE_Pricenew}</p>
                </td>
                <td>
                    <h1>${AAVEChanged}%</h1>
                </td>
                <td>
                    <h1>${AAVE_High}</h1>
                    <p>≈$${AAVE_High}</p>
                </td>
                <td>
                    <h1>${AAVE_Low}</h1>
                    <p>≈$${AAVE_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/aave_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$261,470.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${MKR_ID}</h1>
                </td>
                <td>
                    <h1>${MKR_Price}</h1>
                    <p>≈$${MKR_Pricenew}</p>
                </td>
                <td>
                    <h1>${MKRChanged}%</h1>
                </td>
                <td>
                    <h1>${MKR_High}</h1>
                    <p>≈$${MKR_High}</p>
                </td>
                <td>
                    <h1>${MKR_Low}</h1>
                    <p>≈$${MKR_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/mkr_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$455,250.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${ZEC_ID}</h1>
                </td>
                <td>
                    <h1>${ZEC_Price}</h1>
                    <p>≈$${ZEC_Pricenew}</p>
                </td>
                <td>
                    <h1>${ZECChanged}%</h1>
                </td>
                <td>
                    <h1>${ZEC_High}</h1>
                    <p>≈$${ZEC_High}</p>
                </td>
                <td>
                    <h1>${ZEC_Low}</h1>
                    <p>≈$${ZEC_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/zec_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$279,327.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${BTCUSD_ID}</h1>
                </td>
                <td>
                    <h1>${BTCUSD_Price}</h1>
                    <p>≈$${BTCUSD_Pricenew}</p>
                </td>
                <td>
                    <h1>${BTCUSDChanged}%</h1>
                </td>
                <td>
                    <h1>${BTCUSD_High}</h1>
                    <p>≈$${BTCUSD_High}</p>
                </td>
                <td>
                    <h1>${BTCUSD_Low}</h1>
                    <p>≈$${BTCUSD_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/btc_usd.png" alt="graph" />
                </td>
                <td>
                    <h1>$1,310,484.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${BTCUSDC_ID}</h1>
                </td>
                <td>
                    <h1>${BTCUSDC_Price}</h1>
                    <p>≈$${BTCUSDC_Pricenew}</p>
                </td>
                <td>
                    <h1>${BTCUSDCChanged}%</h1>
                </td>
                <td>
                    <h1>${BTCUSDC_High}</h1>
                    <p>≈$${BTCUSDC_High}</p>
                </td>
                <td>
                    <h1>${BTCUSDC_Low}</h1>
                    <p>≈$${BTCUSDC_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/btc_usdc.png" alt="graph" />
                </td>
                <td>
                    <h1>$864,539.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${SNX_ID}</h1>
                </td>
                <td>
                    <h1>${SNX_Price}</h1>
                    <p>≈$${SNX_Pricenew}</p>
                </td>
                <td>
                    <h1>${SNXChanged}%</h1>
                </td>
                <td>
                    <h1>${SNX_High}</h1>
                    <p>≈$${SNX_High}</p>
                </td>
                <td>
                    <h1>${SNX_Low}</h1>
                    <p>≈$${SNX_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/snx_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$276,328.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${MATIC_ID}</h1>
                </td>
                <td>
                    <h1>${MATIC_Price}</h1>
                    <p>≈$${MATIC_Pricenew}</p>
                </td>
                <td>
                    <h1>${MATICChanged}%</h1>
                </td>
                <td>
                    <h1>${MATIC_High}</h1>
                    <p>≈$${MATIC_High}</p>
                </td>
                <td>
                    <h1>${MATIC_Low}</h1>
                    <p>≈$${MATIC_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/matic_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$319,375.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${DASH_ID}</h1>
                </td>
                <td>
                    <h1>${DASH_Price}</h1>
                    <p>≈$${DASH_Pricenew}</p>
                </td>
                <td>
                    <h1>${DASHChanged}%</h1>
                </td>
                <td>
                    <h1>${DASH_High}</h1>
                    <p>≈$${DASH_High}</p>
                </td>
                <td>
                    <h1>${DASH_Low}</h1>
                    <p>≈$${DASH_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/dash_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$280,910.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${SUSHI_ID}</h1>
                </td>
                <td>
                    <h1>${SUSHI_Price}</h1>
                    <p>≈$${SUSHI_Pricenew}</p>
                </td>
                <td>
                    <h1>${SUSHIChanged}%</h1>
                </td>
                <td>
                    <h1>${SUSHI_High}</h1>
                    <p>≈$${SUSHI_High}</p>
                </td>
                <td>
                    <h1>${SUSHI_Low}</h1>
                    <p>≈$${SUSHI_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/sushi_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$389,909.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${XLM_ID}</h1>
                </td>
                <td>
                    <h1>${XLM_Price}</h1>
                    <p>≈$${XLM_Pricenew}</p>
                </td>
                <td>
                    <h1>${XLMChanged}%</h1>
                </td>
                <td>
                    <h1>${XLM_High}</h1>
                    <p>≈$${XLM_High}</p>
                </td>
                <td>
                    <h1>${XLM_Low}</h1>
                    <p>≈$${XLM_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/xlm_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$376,938.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${COMP_ID}</h1>
                </td>
                <td>
                    <h1>${COMP_Price}</h1>
                    <p>≈$${COMP_Pricenew}</p>
                </td>
                <td>
                    <h1>${COMPChanged}%</h1>
                </td>
                <td>
                    <h1>${COMP_High}</h1>
                    <p>≈$${COMP_High}</p>
                </td>
                <td>
                    <h1>${COMP_Low}</h1>
                    <p>≈$${COMP_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/comp_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$377,931.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${XRPBTC_ID}</h1>
                </td>
                <td>
                    <h1>${XRPBTC_Price}</h1>
                    <p>≈$${XRPBTC_Pricenew}</p>
                </td>
                <td>
                    <h1>${XRPBTCChanged}%</h1>
                </td>
                <td>
                    <h1>${XRPBTC_High}</h1>
                    <p>≈$${XRPBTC_High}</p>
                </td>
                <td>
                    <h1>${XRPBTC_Low}</h1>
                    <p>≈$${XRPBTC_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/xrp_btc.png" alt="graph" />
                </td>
                <td>
                    <h1>$458,321.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${BTCUSDT_ID}</h1>
                </td>
                <td>
                    <h1>${BTCUSDT_Price}</h1>
                    <p>≈$${BTCUSDT_Pricenew}</p>
                </td>
                <td>
                    <h1>${BTCUSDTChanged}%</h1>
                </td>
                <td>
                    <h1>${BTCUSDT_High}</h1>
                    <p>≈$${BTCUSDT_High}</p>
                </td>
                <td>
                    <h1>${BTCUSDT_Low}</h1>
                    <p>≈$${BTCUSDT_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/btc_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$1,223,312.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${USDTUSD_ID}</h1>
                </td>
                <td>
                    <h1>${USDTUSD_Price}</h1>
                    <p>≈$${USDTUSD_Pricenew}</p>
                </td>
                <td>
                    <h1>${USDTUSDChanged}%</h1>
                </td>
                <td>
                    <h1>${USDTUSD_High}</h1>
                    <p>≈$${USDTUSD_High}</p>
                </td>
                <td>
                    <h1>${USDTUSD_Low}</h1>
                    <p>≈$${USDTUSD_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/usdt_usd.png" alt="graph" />
                </td>
                <td>
                    <h1>$1,244,431.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${USDP_ID}</h1>
                </td>
                <td>
                    <h1>${USDP_Price}</h1>
                    <p>≈$${USDP_Pricenew}</p>
                </td>
                <td>
                    <h1>${USDPChanged}%</h1>
                </td>
                <td>
                    <h1>${USDP_High}</h1>
                    <p>≈$${USDP_High}</p>
                </td>
                <td>
                    <h1>${USDP_Low}</h1>
                    <p>≈$${USDP_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/usdp_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$376,249.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${GRT_ID}</h1>
                </td>
                <td>
                    <h1>${GRT_Price}</h1>
                    <p>≈$${GRT_Pricenew}</p>
                </td>
                <td>
                    <h1>${GRTChanged}%</h1>
                </td>
                <td>
                    <h1>${GRT_High}</h1>
                    <p>≈$${GRT_High}</p>
                </td>
                <td>
                    <h1>${GRT_Low}</h1>
                    <p>≈$${GRT_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/grt_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$467,366.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${TRX_ID}</h1>
                </td>
                <td>
                    <h1>${TRX_Price}</h1>
                    <p>≈$${TRX_Pricenew}</p>
                </td>
                <td>
                    <h1>${TRXChanged}%</h1>
                </td>
                <td>
                    <h1>${TRX_High}</h1>
                    <p>≈$${TRX_High}</p>
                </td>
                <td>
                    <h1>${TRX_Low}</h1>
                    <p>≈$${TRX_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/trx_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$489,375.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${ZRX_ID}</h1>
                </td>
                <td>
                    <h1>${ZRX_Price}</h1>
                    <p>≈$${ZRX_Pricenew}</p>
                </td>
                <td>
                    <h1>${ZRXChanged}%</h1>
                </td>
                <td>
                    <h1>${ZRX_High}</h1>
                    <p>≈$${ZRX_High}</p>
                </td>
                <td>
                    <h1>${ZRX_Low}</h1>
                    <p>≈$${ZRX_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/zrx_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$367,983.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${ETHUSDT_ID}</h1>
                </td>
                <td>
                    <h1>${ETHUSDT_Price}</h1>
                    <p>≈$${ETHUSDT_Pricenew}</p>
                </td>
                <td>
                    <h1>${ETHUSDTChanged}%</h1>
                </td>
                <td>
                    <h1>${ETHUSDT_High}</h1>
                    <p>≈$${ETHUSDT_High}</p>
                </td>
                <td>
                    <h1>${ETHUSDT_Low}</h1>
                    <p>≈$${ETHUSDT_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/eth_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$1,123,32.00</h1>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="star-svg">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28912 0.446631C8.48263 -0.148878 9.3251 -0.148876 9.51861 0.446631L11.1774 5.55189C11.2639 5.81822 11.5121 5.99851 11.7921 5.99851H17.1601C17.7863 5.99851 18.0466 6.79977 17.54 7.16781L13.1973 10.323C12.9707 10.4876 12.8759 10.7794 12.9624 11.0457L14.6212 16.151C14.8147 16.7465 14.1332 17.2417 13.6266 16.8736L9.2838 13.7184C9.05725 13.5538 8.75048 13.5538 8.52393 13.7184L4.18114 16.8736C3.67458 17.2417 2.993 16.7465 3.18648 16.151L4.84528 11.0457C4.93181 10.7794 4.83701 10.4876 4.61048 10.323L0.267682 7.16781C-0.238887 6.79977 0.0214564 5.99851 0.64761 5.99851H6.0156C6.29563 5.99851 6.5438 5.81822 6.63032 5.55189L8.28912 0.446631Z" fill="#C6C6D3"/>
                        </svg>
                    </span>
                    <h1>${UNI_ID}</h1>
                </td>
                <td>
                    <h1>${UNI_Price}</h1>
                    <p>≈$${UNI_Pricenew}</p>
                </td>
                <td>
                    <h1>${UNIChanged}%</h1>
                </td>
                <td>
                    <h1>${UNI_High}</h1>
                    <p>≈$${UNI_High}</p>
                </td>
                <td>
                    <h1>${UNI_Low}</h1>
                    <p>≈$${UNI_Low}</p>
                </td>
                <td>
                    <img src="https://ncx.cx/images/new-graphs/uni_usdt.png" alt="graph" />
                </td>
                <td>
                    <h1>$574,994.00</h1>
                </td>
            </tr>



            `;

            // Setting innerHTML as tab variable
            document.getElementById("ncx_market_table").innerHTML = tab;
        
    }

    getapi(api_url);

    function hideloader() {
        document.getElementById('loadingssss').style.display = 'none';
    }
    const { t } = useTranslation();
    return(
        <section className="market_pag">
            <div className="container">
                <div className='table_search_tabs'>
                    <div className="col">
                        <button id="all_btn" className='active_all'>All Pairs</button>
                        <button id="usdt_btn">USDT Pairs</button>
                        <button id="usd_btn">USD Pairs</button>
                        <button id="btc_btn">BTC Pairs</button>
                        <button id="usdc_btn">USDC Pairs</button>
                    </div>
                    <div className="col">
                        <div class="searchinput">
                            <SearchIcon />
                            <input  type="text" id="search" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <table id="table_divddd">
                    <thead>
                        <tr>
                            <th>{t("pairs")}</th>
                            <th>{t("latest_price")}</th>
                            <th>{t("Change")}</th>
                            <th>{t("high")} [24H]</th>
                            <th>{t("low")} [24H]</th>
                            <th>{t("price_trend")}</th>
                            <th>24H {t("volume")}</th>
                        </tr>
                    </thead>
                    <div className="home_spinner">
                        <div class="spinner-border" 
                            role="status" id="loadingssss">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <tbody id="ncx_market_table"></tbody>

                </table>
            </div>
        </section>
    )
}
export default HomePageMarketSection;