const blogListdata = [
    {
      id: 1,
      title: 'Binance’s bitcoin reserves are fully collateralized according to auditing firm Mazars',
      category: 'News',
      subCategory: ['binance news', 'bitcoin', 'Mazars'],
      description: <div className="blog-desc">
        <p>Auditing firm <a href="https://www.mazars.com/" target="_blank" rel="noreferrer">Mazars</a> has released 
        a <a href="https://veritas.mazars.com/binance/Binance_POR_Report_7_December_2022.pdf" target="_blank" rel="noreferrer">report</a>  about Binance’s BTC reserves. The auditing firm has reached the same conclusion as Binance itself. As of November 
        22 at 23:59 UTC, Binance held enough bitcoins and wrapped bitcoins to cover all users’s balances on the exchange.</p>
      </div>,
      authorName: 'Romain Dillet',
      authorurl: 'https://techcrunch.com/author/romain-dillet/',
      authorAvatar: 'https://techcrunch.com/wp-content/uploads/2021/08/Screen-Shot-2021-08-20-at-6.46.18-PM.png?w=200&h=200&crop=1',
      authorContent: <div>Romain Dillet is a Senior Writer at TechCrunch. He has written over 2,500 articles on technology and tech startups and has established himself as an influential voice on the European tech scene. He has a deep background in startups, privacy, blockchain, security, fintech, mobile, social and media.</div>,
      createdAt: 'Dec 7, 2022 - 7:04 PM',
      cover: 'https://techcrunch.com/wp-content/uploads/2022/11/GettyImages-1244424369.jpg?w=1390&crop=1',
      content: <div className="blog-content">
        <p>Auditing firm <a href="https://www.mazars.com/" target="_blank" rel="noreferrer">Mazars</a> has released 
        a <a href="https://veritas.mazars.com/binance/Binance_POR_Report_7_December_2022.pdf" target="_blank" rel="noreferrer">report</a> about Binance’s BTC reserves. The auditing firm has reached the same conclusion as Binance itself. As of November 
        22 at 23:59 UTC, Binance held enough bitcoins and wrapped bitcoins to cover all users’s balances on the exchange.</p>
        <p>Binance had already launched a proof-of-reserves website nearly two weeks ago to reassure its users following 
          the collapse of FTX. Today’s audit just confirms that Binance doesn’t appear to be lying, according to Mazars</p>
        <p>As always, there are some limitations with these proof-of-reserves exercises. The biggest caveat is that Binance 
            is only focusing on BTC assets for now. If you hold other cryptocurrencies, there is no proof-of-reserves system 
            just yet.</p>
        <p>While bitcoin is still the most popular cryptocurrency, Binance offers hundreds of different crypto assets. So let’s 
          hope this is just a first step.</p>
        <p>Similarly, both Binance and Mazars looked at the BTC reserves on November 22 at 23:59 UTC. While it’s hard to provide 
          an instant snapshot, Binance hasn’t committed to a timeline for its proof-of-reserves reports. For instance, the crypto 
          exchange could share data every week or every month.</p>
        <p>Now that you are aware of all that, let’s talk about what’s in Binance’s proof-of-reserves system and the Mazars 
          auditing report. Binance uses a Merkle tree to include all individual user accounts and generate a cryptographic seal. 
          This Merkle tree covers user balances across several Binance products — Spot, Funding, Margin, Futures, Earn and Options 
          Wallet.</p>
        <p>Binance also listed all the wallets that hold customer assets. Blockchain explorers let you obtain the balance of 
          crypto wallets just by looking at the public addresses of those wallets.</p>
        <p>Binance found that its users collectively held 575,742.4228 BTC ($9.7 billion at today’s exchange rate) and that it 
          has enough BTC and wrapped BTC to cover 101% of these funds. It then contacted Mazars so the auditing firm could 
          independently verify what the crypto exchange was saying.</p>
        <p>Mazars asked Binance to perform tiny transactions at a specific time to show that the wallets were indeed under 
          the control of Binance. For some wallets, it used a different method. In that case, Mazars used Etherscan and BSCscan 
          to check that the ETH and BSC wallets belong to Binance.</p>
        <p>The auditing firm checked the scripts that Binance is using to extract the total value in user accounts. Mazars 
          checked that there wasn’t any duplication of user IDs and constructed its own Merkle tree using this open source 
          script developed by SilverSixpence.</p>
        <p>Some users have a negative BTC balance because they have been using the margin and loan service with other crypto 
          assets as collateral. “Binance’s margin and loan products are always over-collateralized and subject to additional 
          risk controls (such as auto liquidation). These products ONLY utilize funds from customers actively using Binance 
          Earn products such as savings whose terms permit this,” Binance said as a comment in the auditing report.</p>
        <p>If you take everything into account, Mazars and Binance reach the same conclusion when it comes to BTC reserves. 
          This is a good step when it comes to transparency. Now, let’s hope there will be more announcements in the coming weeks.</p>
      </div>,
    },
    {
      id: 2,
      title: 'Binance Bitcoin Reserves Are Overcollateralized, New Report Says',
      category: 'News',
      subCategory: ['binance news', 'bitcoin', 'Reports'],
      description: <div className="blog-desc">
        <p>Binance, the world’s largest crypto exchange by trading volume, released a new report on Wednesday from global 
          financial audit, tax and advisory firm Mazars showing that Binance's customer bitcoin (<a href="https://www.coindesk.com/price/bitcoin/" target="_blank" rel="noreferrer">BTC</a>) reserves are 
          overcollateralized.</p>
      </div>,
      authorName: 'Helene Braun',
      authorurl: 'https://www.coindesk.com/author/helene-braun/',
      authorAvatar: 'https://www.coindesk.com/resizer/WRCkPzzL6ensJY3fMsnmdAZfy_w=/408x408/filters:quality(80):format(webp)/s3.amazonaws.com/arc-authors/coindesk/4dee834f-1c7e-4115-bedc-3e763850d5d1.jpg  ',
      authorContent: <div>Helene is a U.S. markets reporter at CoinDesk, covering the US economy, the Fed, and bitcoin. She is a recent graduate of New York University's business and economic reporting program.</div>,
      createdAt: 'Dec 7, 2022 - 6:38 PM',
      cover: 'https://techcrunch.com/wp-content/uploads/2020/05/NSussman_Techcrunch_Exchange_v3-BLU.jpg?w=1390&crop=1',
      content: <div className="blog-content">
        <p>Binance, the world’s largest crypto exchange by trading volume, released a new report on Wednesday from global 
          financial audit, tax and advisory firm Mazars showing that Binance's customer bitcoin (<a href="https://www.coindesk.com/price/bitcoin/" target="_blank" rel="noreferrer">BTC</a>) reserves are 
          overcollateralized.</p>
        <p>"At the time of assessment, Mazars observed Binance controlled in-scope assets in excess of 100% of their total 
          platform liabilities," Mazars said <a href="https://veritas.mazars.com/binance/" target="_blank" rel="noreferrer">in an announcement</a>. 
          The exact percentage was 101%.</p>
        <p>The collapse of centralized crypto exchange FTX because of liquidity issues has rivals rushing to improve the 
          transparency of their financial reserves. The report from Mazars was meant to assure customers that their bitcoin 
          is collateralized, exist on the blockchain and is in Binance’s control.</p>
        <p>However, the assessment is not an official audit, according to Francine McKenna, lecturer in financial accounting 
          at The Wharton School at the University of Pennsylvania. "They did a comparison of balances per public key address 
          from a list they got from management. They did not compare any balances in independent banks or custodians or 
          depositories," said McKenna.</p>
        <p>"This is more worthless than even the Tether or USDC report," she added. In September, Friedman LLP, a New York-based 
          accounting firm that provided <a href="https://www.coindesk.com/policy/2022/09/26/tethers-former-auditor-fined-1m-by-sec-for-sloppy-accounting/" target="_blank" rel="noreferrer">auditing services for the stablecoin issuer Tether in 2017</a> was accused of “serial 
          violations of the federal securities laws” and “improper professional conduct,” by the U.S. Securities and Exchange 
          Commission, which fined the auditor $1 million. Tether <a href="https://www.coindesk.com/business/2022/08/18/tether-swaps-accounting-firms-says-it-will-publish-monthly-attestation-on-stablecoin-backing/" target="_blank" rel="noreferrer">hired BDO Italia to take over its regular attestation reports</a> in August.</p>
        <p>Mazars took a snapshot of Binance’s total reserves and liabilities on Nov. 22 to perform a collateralization analysis. 
          Assets included were customers’ spot, options, margin, futures, funding, loan and earn accounts for BTC and wrapped 
          bitcoin held on the Bitcoin, Ethereum, BNB Chain and Binance Smart Chain blockchains.</p>
      </div>,
    },
    {
      id: 3,
      title: 'Bitcoin Retraces 3 Weeks of Gains as Analysts Blame Macroeconomic Turmoil',
      category: 'Press',
      subCategory: ['Markets', 'News', 'Reports'],
      description: <div className="blog-desc">
        <p>Bitcoin is holding at around $21,340 after slumping for the sixth consecutive day.</p>
      </div>,
      authorName: 'Jimmy He',
      authorurl: 'https://www.coindesk.com/author/helene-braun/',
      authorAvatar: 'https://downloads.coindesk.com/cd3/author-page/avatar-placeholder.png',
      authorContent: <div>Helene is a U.S. markets reporter at CoinDesk, covering the US economy, the Fed, and bitcoin. She is a recent graduate of New York University's business and economic reporting program.</div>,
      createdAt: 'Aug 20, 2022 - 1:10 AM',
      cover: 'https://www.coindesk.com/resizer/eybDUdPzHvpb0rLILvXz8G29GJs=/3168x2376/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/TPZCHNV7SVAO3KV5G4XTPHPNJU.jpg',
      content: <div className="blog-content">
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/33CVXSIQNVC5FFCJRXCSN5MUDE.png" alt="bitcoin-retraces 3 weeks of gains as analysts blame macroeconomic turmoil" />
        <p>Bitcoin (<a href="https://www.coindesk.com/price/bitcoin/" target="_blank" rel="noreferrer">BTC</a>) erased three weeks of gains after plunging 8.4%, its biggest single-digit decline in two months.</p>
        <p>The largest cryptocurrency by market capitalization is now trading at about $21,340.</p>
        <p>Two analysts with whom CoinDesk spoke said investor concerns about inflation and the likelihood of continued 
          monetary hawkishness by the U.S. Federal Reserve had spurred the decline in crypto prices and other riskier assets. 
          The tech-heavy Nasdaq index, whose fluctuations have largely correlated with bitcoin this year, recently fell over 2%. 
          The S&P 500, which has a strong tech component, was down about 1.2%.</p>
        <p>Paul McCaffery, co-head of equities for investment bank Keefe, Bruyette & Woods, noted the connection between plunging 
          asset prices and Wednesday’s release of minutes from the Federal Open Market Committee’s (FOMC) July meeting showing 
          the U.S. Federal Reserve continues to be concerned about inflation and might not slow the pace of <a href="https://www.coindesk.com/markets/2022/08/17/us-federal-reserve-minutes-show-more-rate-hikes-coming-concern-about-stablecoin-risks/" target="_blank" rel="noreferrer">interest rate hikes</a> 
          soon. Bitcoin’s price rose last week after an encouraging Consumer Price Index (CPI) suggested the Fed could ratchet 
          back its approach because of easing inflation.</p>
        <p>McCaffery said crypto performance will depend on macroeconomic conditions and the ongoing development of regulation.</p>
        <p>“The reality is that for now the space is highly correlated to risk assets, so price action will follow the macro 
          narrative for the most part, with the additional factor of global regulatory action weighing on the sector,” McCaffery 
          wrote in an email.</p>
        <p>Sylvia Jablonski, Defiance ETFs co-founder, CEO and chief investment officer, also highlighted voting and non-voting 
          Fed members’ vocal unease with inflation, which remains at near four-decade highs despite the recent improvement shown 
          by the CPI.</p>
        <p>“Crypto is now on that list of thoughtful, innovative, disruptive technologies and it's viewed as sort of high risk by 
          the average retail trader,” Jablonski said. “So what happens is they get this bad news, they sort of take it in and, lo 
          and behold, the price of bitcoin falls.”</p>
        <p>Ether (<a href="https://www.coindesk.com/price/ethereum/" target="_blank" rel="noreferrer">ETH</a>), the second-largest crypto by market value, had risen sharply over the past month on enthusiasm about 
          the expected September Ethereum protocol change known as the Merge. However, even ether recently fell to around $1,700, 
          down 9.1% over the past 24 hours.</p>
      </div>,
    },
    {
      id: 4,
      title: 'Binance Bitcoin Reserves Are Overcollateralized, New Report Says',
      category: 'News',
      subCategory: ['vacation', 'holidays', 'sight seeing'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '../Assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: 'https://cdn-gmaph.nitrocdn.com/awUROinaMuUZjuokHApFepEHtdYvFKyg/assets/static/optimized/rev-2bda6ba/wp-content/uploads/2022/05/AB_BlogImages-08-Small.png',
    },
  ];
  
  export default blogListdata;