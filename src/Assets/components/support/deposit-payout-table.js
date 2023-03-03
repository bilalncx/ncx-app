const coinslist = [
    {
        id: '0',
        logo: 'https://ncx.cx/images/btc.svg',
        title: 'Bitcoin',
        blockchain: 'Bitcoin',
        depostpayout: '0.0001',
        blockexplorer: 'https://www.blockchain.com'
    },
    {
        id: '1',
        logo: 'https://ncx.cx/images/bch.svg',
        title: 'Bitcoin Cash',
        blockchain: 'Bitcoin Cash',
        depostpayout: '0.0001',
        blockexplorer: 'https://blockchair.com'
    },
    {
        id: '2',
        logo: 'https://ncx.cx/images/bnb.svg',
        title: 'Binance Coin',
        blockchain: 'Binance Smart Chain',
        depostpayout: '0.002',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '3',
        logo: 'https://ncx.cx/images/bnb.svg',
        title: 'Binance Coin',
        blockchain: 'Binance Chain',
        depostpayout: '0.000375',
        blockexplorer: 'https://binance.mintscan.io'
    },
    {
        id: '4',
        logo: 'https://ncx.cx/images/dash.svg',
        title: 'Dash',
        blockchain: 'Dash',
        depostpayout: '0.0001',
        blockexplorer: 'https://live.blockcypher.com'
    },
    {
        id: '5',
        logo: 'https://ncx.cx/images/doge.svg',
        title: 'Dogecoin',
        blockchain: 'Dogecoin',
        depostpayout: '2',
        blockexplorer: 'https://live.blockcypher.com'
    },
    {
        id: '6',
        logo: 'https://ncx.cx/images/eth.svg',
        title: 'Ethereum',
        blockchain: 'Ethereum',
        depostpayout: '0.002',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '7',
        logo: 'https://ncx.cx/images/ltc.svg',
        title: 'Litecoin',
        blockchain: 'Litecoin',
        depostpayout: '0.0001',
        blockexplorer: 'https://live.blockcypher.com'
    },
    {
        id: '8',
        logo: 'https://ncx.cx/images/xmr.svg',
        title: 'Monero',
        blockchain: 'Monero',
        depostpayout: '0.01',
        blockexplorer: 'https://blockchair.com'
    },
    {
        id: '9',
        logo: 'https://ncx.cx/images/xrp.svg',
        title: 'XRP',
        blockchain: 'XRP',
        depostpayout: '0.0055',
        blockexplorer: 'https://xrpscan.com'
    },
    {
        id: '10',
        logo: 'https://ncx.cx/images/xlm.svg',
        title: 'Stellar',
        blockchain: 'Stellar',
        depostpayout: '0.00002',
        blockexplorer: 'https://stellarchain.io'
    },
    {
        id: '11',
        logo: 'https://ncx.cx/images/trx.svg',
        title: 'Tron',
        blockchain: 'TRON',
        depostpayout: '2',
        blockexplorer: 'https://tronscan.org'
    },
    {
        id: '12',
        logo: 'https://ncx.cx/images/zec.svg',
        title: 'Zcash',
        blockchain: 'Zcash',
        depostpayout: '0.0001',
        blockexplorer: 'https://explorer.zcha.in'
    },
    {
        id: '13',
        logo: 'https://ncx.cx/images/busd.svg',
        title: 'Binance USD',
        blockchain: 'Binance Smart Chain',
        depostpayout: '10',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '14',
        logo: 'https://ncx.cx/images/busd.svg',
        title: 'Binance USD',
        blockchain: 'Ethereum',
        depostpayout: '25',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '15',
        logo: 'https://ncx.cx/images/dai.svg',
        title: 'Dai',
        blockchain: 'Binance Smart Chain',
        depostpayout: '10',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '16',
        logo: 'https://ncx.cx/images/dai.svg',
        title: 'Dai',
        blockchain: 'Ethereum',
        depostpayout: '25',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '17',
        logo: 'https://ncx.cx/images/paxos.svg',
        title: 'Pax Dollar',
        blockchain: 'Binance Smart Chain',
        depostpayout: '10',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '18',
        logo: 'https://ncx.cx/images/paxos.svg',
        title: 'Pax Dollar',
        blockchain: 'Ethereum',
        depostpayout: '25',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '19',
        logo: 'https://ncx.cx/images/usdt.svg',
        title: 'TetherUS',
        blockchain: 'Binance Smart Chain',
        depostpayout: '10',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '20',
        logo: 'https://ncx.cx/images/usdt.svg',
        title: 'TetherUS',
        blockchain: 'Ethereum',
        depostpayout: '25',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '21',
        logo: 'https://ncx.cx/images/usdt.svg',
        title: 'TetherUS',
        blockchain: 'TRON',
        depostpayout: '10',
        blockexplorer: 'https://tronscan.org'
    },
    {
        id: '22',
        logo: 'https://ncx.cx/images/usdc.svg',
        title: 'USD Coin',
        blockchain: 'Binance Smart Chain',
        depostpayout: '10',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '23',
        logo: 'https://ncx.cx/images/usdc.svg',
        title: 'USD Coin',
        blockchain: 'Ethereum',
        depostpayout: '25',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '24',
        logo: 'https://ncx.cx/images/usdc.svg',
        title: 'USD Coin',
        blockchain: 'TRON',
        depostpayout: '15',
        blockexplorer: 'https://tronscan.org'
    },
    {
        id: '25',
        logo: 'https://ncx.cx/images/eurt.svg',
        title: 'Tether EURt',
        blockchain: 'Ethereum',
        depostpayout: '25',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '26',
        logo: 'https://ncx.cx/images/eurs.svg',
        title: 'STASIS EURO',
        blockchain: 'Ethereum',
        depostpayout: '25',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '27',
        logo: 'https://ncx.cx/images/gbpt.svg',
        title: 'Pound Token',
        blockchain: 'Ethereum',
        depostpayout: '20',
        blockexplorer: 'https://etherscan.io'
    },
    // Tokens
    {
        id: '28',
        logo: 'https://ncx.cx/images/0x.svg',
        title: '0x',
        blockchain: 'Ethereum',
        depostpayout: '33',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '29',
        logo: 'https://ncx.cx/images/aave.svg',
        title: 'AAVE',
        blockchain: 'Ethereum',
        depostpayout: '0.1',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '30',
        logo: 'https://ncx.cx/images/akro.svg',
        title: 'Akropolis',
        blockchain: 'Ethereum',
        depostpayout: '1400',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '31',
        logo: 'https://ncx.cx/images/alpha.svg',
        title: 'Alpha Finance Lab',
        blockchain: 'Binance Smart Chain',
        depostpayout: '18',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '32',
        logo: 'https://ncx.cx/images/alpha.svg',
        title: 'Alpha Finance Lab',
        blockchain: 'Ethereum',
        depostpayout: '45',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '33',
        logo: 'https://ncx.cx/images/band.svg',
        title: 'Band Protocol',
        blockchain: 'Binance Smart Chain',
        depostpayout: '1.8',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '34',
        logo: 'https://ncx.cx/images/band.svg',
        title: 'Band Protocol',
        blockchain: 'Ethereum',
        depostpayout: '8.25',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '35',
        logo: 'https://ncx.cx/images/bat.svg',
        title: 'Basic Attention Token',
        blockchain: 'Binance Smart Chain',
        depostpayout: '9.3',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '36',
        logo: 'https://ncx.cx/images/bat.svg',
        title: 'Basic Attention Token',
        blockchain: 'Ethereum',
        depostpayout: '23.3',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '37',
        logo: 'https://ncx.cx/images/link.svg',
        title: 'Chainlink',
        blockchain: 'Binance Smart Chain',
        depostpayout: '0.4',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '38',
        logo: 'https://ncx.cx/images/link.svg',
        title: 'Chainlink',
        blockchain: 'Ethereum',
        depostpayout: '1',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '39',
        logo: 'https://ncx.cx/images/chr.svg',
        title: 'Chromia',
        blockchain: 'Ethereum',
        depostpayout: '35',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '40',
        logo: 'https://ncx.cx/images/comp.svg',
        title: 'Compound',
        blockchain: 'Ethereum',
        depostpayout: '0.13',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '41',
        logo: 'https://ncx.cx/images/mana.svg',
        title: 'Decentraland',
        blockchain: 'Ethereum',
        depostpayout: '8.3',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '42',
        logo: 'https://ncx.cx/images/ftt.svg',
        title: 'FTX Token',
        blockchain: 'Ethereum',
        depostpayout: '0.5',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '43',
        logo: 'https://ncx.cx/images/lrc.svg',
        title: 'Loopring',
        blockchain: 'Ethereum',
        depostpayout: '20',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '44',
        logo: 'https://ncx.cx/images/mkr.svg',
        title: 'Maker',
        blockchain: 'Binance Smart Chain',
        depostpayout: '0.004',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '45',
        logo: 'https://ncx.cx/images/mkr.svg',
        title: 'Maker',
        blockchain: 'Ethereum',
        depostpayout: '0.01',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '46',
        logo: 'https://ncx.cx/images/matic.svg',
        title: 'Polygon',
        blockchain: 'Ethereum',
        depostpayout: '10.75',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '47',
        logo: 'https://ncx.cx/images/reef.svg',
        title: 'Reef',
        blockchain: 'Binance Smart Chain',
        depostpayout: '650',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '48',
        logo: 'https://ncx.cx/images/reef.svg',
        title: 'Reef',
        blockchain: 'Ethereum',
        depostpayout: '1650',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '49',
        logo: 'https://ncx.cx/images/ren.svg',
        title: 'Ren',
        blockchain: 'Ethereum',
        depostpayout: '50',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '50',
        logo: 'https://ncx.cx/images/rsr.svg',
        title: 'Reserve Rights',
        blockchain: 'Ethereum',
        depostpayout: '1000',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '51',
        logo: 'https://ncx.cx/images/srm.svg',
        title: 'Serum',
        blockchain: 'Ethereum',
        depostpayout: '7.8',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '52',
        logo: 'https://ncx.cx/images/shib.svg',
        title: 'SHIBA INU',
        blockchain: 'Ethereum',
        depostpayout: '830000',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '53',
        logo: 'https://ncx.cx/images/sushi.svg',
        title: 'SushiSwap',
        blockchain: 'Binanace Smart Chain',
        depostpayout: '1.5',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '54',
        logo: 'https://ncx.cx/images/sushi.svg',
        title: 'SushiSwap',
        blockchain: 'Ethereum',
        depostpayout: '3.7',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '55',
        logo: 'https://ncx.cx/images/sxr.svg',
        title: 'Swipe',
        blockchain: 'Binance Smart Chain',
        depostpayout: '6.5',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '56',
        logo: 'https://ncx.cx/images/sxr.svg',
        title: 'Swipe',
        blockchain: 'Ethereum',
        depostpayout: '15.5',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '57',
        logo: 'https://ncx.cx/images/snx.svg',
        title: 'Synthetix',
        blockchain: 'Ethereum',
        depostpayout: '2',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '58',
        logo: 'https://ncx.cx/images/snx.svg',
        title: 'Synthetix',
        blockchain: 'Ethereum',
        depostpayout: '5',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '59',
        logo: 'https://ncx.cx/images/grt.svg',
        title: 'The Graph',
        blockchain: 'Ethereum',
        depostpayout: '42',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '60',
        logo: 'https://ncx.cx/images/sand.svg',
        title: 'The Sandbox',
        blockchain: 'Ethereum',
        depostpayout: '5.25',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '61',
        logo: 'https://ncx.cx/images/uni.svg',
        title: 'Uniswap',
        blockchain: 'Binance Smart Chain',
        depostpayout: '0.65',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '62',
        logo: 'https://ncx.cx/images/uni.svg',
        title: 'Uniswap',
        blockchain: 'Ethereum',
        depostpayout: '1.6',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '63',
        logo: 'https://ncx.cx/images/yfi.svg',
        title: 'yearn.finance',
        blockchain: 'Ethereum',
        depostpayout: '0.0003',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '64',
        logo: 'https://ncx.cx/images/yfi.svg',
        title: 'yearn.finance',
        blockchain: 'Ethereum',
        depostpayout: '0.00075',
        blockexplorer: 'https://etherscan.io'
    },
    {
        id: '65',
        logo: 'https://ncx.cx/images/ftm.svg',
        title: 'Fantom',
        blockchain: 'Binance Smart Chain',
        depostpayout: '3',
        blockexplorer: 'https://bscscan.com'
    },
    {
        id: '65',
        logo: 'https://ncx.cx/images/ftm.svg',
        title: 'Fantom',
        blockchain: 'Ethereum',
        depostpayout: '7.6',
        blockexplorer: 'https://etherscan.io'
    },
]
export default coinslist;