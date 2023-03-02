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
        title: 'Binance Chain',
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
    // sdfffffffffffffffffffffffffffffffffffffffff
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
]
export default coinslist;