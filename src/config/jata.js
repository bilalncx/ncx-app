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
      cover: 'https://cdn01.vulcanpost.com/wp-uploads/2022/11/binance-reserves.jpg',
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
    // {
    //   id: 3,
    //   title: 'Bitcoin Retraces 3 Weeks of Gains as Analysts Blame Macroeconomic Turmoil',
    //   category: 'Press',
    //   subCategory: ['Markets', 'News', 'Reports'],
    //   description: <div className="blog-desc">
    //     <p>Bitcoin is holding at around $21,340 after slumping for the sixth consecutive day.</p>
    //   </div>,
    //   authorName: 'Jimmy He',
    //   authorurl: 'https://www.coindesk.com/author/helene-braun/',
    //   authorAvatar: 'https://downloads.coindesk.com/cd3/author-page/avatar-placeholder.png',
    //   authorContent: <div>Helene is a U.S. markets reporter at CoinDesk, covering the US economy, the Fed, and bitcoin. She is a recent graduate of New York University's business and economic reporting program.</div>,
    //   createdAt: 'Aug 20, 2022 - 1:10 AM',
    //   cover: 'https://www.coindesk.com/resizer/eybDUdPzHvpb0rLILvXz8G29GJs=/3168x2376/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/TPZCHNV7SVAO3KV5G4XTPHPNJU.jpg',
    //   content: <div className="blog-content">
    //     <img src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/33CVXSIQNVC5FFCJRXCSN5MUDE.png" alt="bitcoin-retraces 3 weeks of gains as analysts blame macroeconomic turmoil" />
    //     <p>Bitcoin (<a href="https://www.coindesk.com/price/bitcoin/" target="_blank" rel="noreferrer">BTC</a>) erased three weeks of gains after plunging 8.4%, its biggest single-digit decline in two months.</p>
    //     <p>The largest cryptocurrency by market capitalization is now trading at about $21,340.</p>
    //     <p>Two analysts with whom CoinDesk spoke said investor concerns about inflation and the likelihood of continued 
    //       monetary hawkishness by the U.S. Federal Reserve had spurred the decline in crypto prices and other riskier assets. 
    //       The tech-heavy Nasdaq index, whose fluctuations have largely correlated with bitcoin this year, recently fell over 2%. 
    //       The S&P 500, which has a strong tech component, was down about 1.2%.</p>
    //     <p>Paul McCaffery, co-head of equities for investment bank Keefe, Bruyette & Woods, noted the connection between plunging 
    //       asset prices and Wednesday’s release of minutes from the Federal Open Market Committee’s (FOMC) July meeting showing 
    //       the U.S. Federal Reserve continues to be concerned about inflation and might not slow the pace of <a href="https://www.coindesk.com/markets/2022/08/17/us-federal-reserve-minutes-show-more-rate-hikes-coming-concern-about-stablecoin-risks/" target="_blank" rel="noreferrer">interest rate hikes</a> 
    //       soon. Bitcoin’s price rose last week after an encouraging Consumer Price Index (CPI) suggested the Fed could ratchet 
    //       back its approach because of easing inflation.</p>
    //     <p>McCaffery said crypto performance will depend on macroeconomic conditions and the ongoing development of regulation.</p>
    //     <p>“The reality is that for now the space is highly correlated to risk assets, so price action will follow the macro 
    //       narrative for the most part, with the additional factor of global regulatory action weighing on the sector,” McCaffery 
    //       wrote in an email.</p>
    //     <p>Sylvia Jablonski, Defiance ETFs co-founder, CEO and chief investment officer, also highlighted voting and non-voting 
    //       Fed members’ vocal unease with inflation, which remains at near four-decade highs despite the recent improvement shown 
    //       by the CPI.</p>
    //     <p>“Crypto is now on that list of thoughtful, innovative, disruptive technologies and it's viewed as sort of high risk by 
    //       the average retail trader,” Jablonski said. “So what happens is they get this bad news, they sort of take it in and, lo 
    //       and behold, the price of bitcoin falls.”</p>
    //     <p>Ether (<a href="https://www.coindesk.com/price/ethereum/" target="_blank" rel="noreferrer">ETH</a>), the second-largest crypto by market value, had risen sharply over the past month on enthusiasm about 
    //       the expected September Ethereum protocol change known as the Merge. However, even ether recently fell to around $1,700, 
    //       down 9.1% over the past 24 hours.</p>
    //   </div>,
    // },
    {
      id: 4,
      title: 'Hong Kong Stock Exchange debuts ‘Asia’s first’ crypto futures ETFs',
      category: 'News',
      subCategory: ['Stock Exchange', 'ETFs', 'Crypto'],
      description: <div className="blog-desc">
        <p>The Hong Kong Exchanges and Clearing Ltd. launched two exchange-traded funds (ETFs) tracking cryptocurrency</p>
      </div>,
      authorName: 'Timmy Shen',
      authorurl: '',
      authorAvatar: 'https://downloads.coindesk.com/cd3/author-page/avatar-placeholder.png',
      authorContent: '',
      createdAt: 'Dec 16, 2022 - 07:43 AM',
      cover: 'https://s.yimg.com/ny/api/res/1.2/HqBM4T5k6_sziTv8aV1lHw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzODtjZj13ZWJw/https://media.zenfs.com/en/forkast_news_articles_672/5baa28927095b77c90d9a0620175b46a',
      content: <div className="blog-content">
        <p>The Hong Kong Exchanges and Clearing Ltd. launched two exchange-traded funds (ETFs) tracking cryptocurrency futures on Friday, becoming the first “in Asia to offer crypto asset exposure through ETFs,” the exchange <a href="https://www.hkex.com.hk/News/News-Release/2022/221216news?sc_lang=en" target="_blank" rel="noreferrer">said</a>.</p>
        <p>See related article: <a href="https://forkast.news/headlines/hong-kongs-virtual-asset-licensing-regime-to-take-effect-next-june/" target="_blank" rel="noreferrer">Hong Kong’s virtual asset licensing regime to take effect next June</a></p>
        <h3>Fast Facts</h3>
        <ul>
          <li>The two ETFs — <a href="https://www.hkex.com.hk/Market-Data/Securities-Prices/Exchange-Traded-Products/Exchange-Traded-Products-Quote?sym=3066&sc_lang=en" target="_blank" rel="noreferrer">CSOP Bitcoin Futures ETF</a> and <a href="https://www.hkex.com.hk/Market-Data/Securities-Prices/Exchange-Traded-Products/Exchange-Traded-Products-Quote?sym=3068&sc_lang=en" target="_blank" rel="noreferrer">CSOP Ether Futures ETF</a> — respectively track the Bitcoin futures contracts and Ether futures contracts traded on the Chicago Mercantile Exchange, and are both managed by CSOP Asset Management Ltd., a Hong Kong unit of Chinese state-backed asset manager China Southern Asset Management Co. Ltd.</li>
          <li>The two attracted a combined US$73.6 million in investment ahead of their Friday debut, CSOP said in a <a href="https://www.businesswire.com/news/home/20221214006108/en/CSOP-Bitcoin-Futures-ETF-3066.HK-and-CSOP-Ether-Futures-ETF-3068.HK-to-List-on-HKEX" target="_blank" rel="noreferrer">Thursday statement</a>.</li>
          <li>“They provide investors with exposure to the digital asset space for the first time in Asia and reflect both our ongoing commitment to, and the market’s appetite for, the digital economy,” Wilfred Yiu, chief operating officer and co-head of markets of Hong Kong Exchanges and Clearing, or HKEX, said in a <a href="https://www.hkex.com.hk/News/News-Release/2022/221216news?sc_lang=en" target="_blank" rel="noreferrer">Friday statetment</a>.</li>
          <li>The city’s first crypto-linked ETFs come after Hong Kong in October <a href="https://forkast.news/hong-kong-announces-policies-to-win-back-role-as-digital-asset-hub/" target="_blank" rel="noreferrer">said</a> it would work to regain its role as a cryptocurrency hub in Asia. Financial Secretary Paul Chan last month <a href="https://forkast.news/headlines/hong-kong-continues-to-welcome-virtual-assets-after-ftx-debacle/" target="_blank" rel="noreferrer">doubled</a> down on the government’s position despite the <a href="https://forkast.news/u-s-senator-elizabeth-warren-submits-crypto-know-your-customer-bill-in-wake-of-ftx-collapse/" target="_blank" rel="noreferrer">collapse</a> of the FTX.com exchange.</li>
          <li>Last week, Hong Kong’s Legislative Council <a href="https://forkast.news/headlines/hong-kongs-virtual-asset-licensing-regime-to-take-effect-next-june/" target="_blank" rel="noreferrer">passed an amendment to the bill</a> that includes a licensing regime for virtual asset service providers, which will come into effect on June 1, 2023.</li>
        </ul>
        <p>See related article: <a href="https://forkast.news/headlines/hong-kong-mulls-regulatory-requirements-for-local-licensed-crypto-exchanges-report/" target="_blank" rel="noreferrer">Hong Kong mulls regulatory requirements for local licensed crypto exchanges: report</a></p>
      </div>,
    },
    {
      id: 5,
      title: 'Japan plans to ease corporate tax rates for cryptocurrency issuers',
      category: 'News',
      subCategory: ['Crypto Tax', 'ETFs', 'Crypto'],
      description: <div className="blog-desc">
        <p>Japan’s ruling Liberal Democratic Party approved a proposal on Thursday that exempts companies issuing cryptocurrencies...</p>
      </div>,
      authorName: 'Danny Park',
      authorurl: '',
      authorAvatar: 'https://downloads.coindesk.com/cd3/author-page/avatar-placeholder.png',
      authorContent: '',
      createdAt: 'Dec 16, 2022 - 07:26 AM',
      cover: 'https://s.yimg.com/ny/api/res/1.2/n5SEJgUdRmEAyLoYE0rmuw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://media.zenfs.com/en/forkast_news_articles_672/f6821a2168bd28ef3c47c595b22310de',
      content: <div className="blog-content">
        <p>Japan’s ruling Liberal Democratic Party approved a proposal on Thursday that exempts companies issuing cryptocurrencies from taxes on unrealized capital gains for tokens they retain on their books, Bloomberg reported, citing party member Akihisa Shiozaki.</p>
        <p>See related article: <a href="https://forkast.news/headlines/japan-lawmaker-regulatory-clarity-ftx/" target="_blank" rel="noreferrer">Japan ruling party lawmaker calls for regulatory clarity after FTX debacle</a></p>
        <h3>Fast Facts</h3>
        <ul>
          <li>The proposal reviewed by the ruling party’s tax committee aims to improve business conditions for companies issuing cryptocurrencies,<a href="https://www.bloomberg.com/news/articles/2022-12-15/japan-moves-closer-to-easing-tax-on-corporate-crypto-holdings?leadSource=uverify%20wall" target="_blank" rel="noreferrer">Shiozaki told Bloomberg</a>.</li>
          <li>Currently, Japan imposes a levy of around 30% on companies sitting on unrealized gains from cryptocurrency holdings.</li>
          <li>Prime Minister Fumio Kishida’s administration is expected to finalize its annual tax policy guidelines before the end of this year, while tax code amendments are usually submitted to parliament in January.</li>
          <li>The tax legislation indicates the authorities are pursuing earlier announced plans to cut some of the red tape on the crypto industry to encourage innovation and investment, despite the collapse of the FTX.com crypto exchange, which had an operation in Japan.</li>
          <li>Japan’s Virtual and Crypto assets Exchange Association (JVCEA), the self-regulatory body that oversees local crypto exchanges, <a href="https://forkast.news/headlines/japan-eases-token-vetting-process-crypto/" target="_blank" rel="noreferrer">said</a> in October it would relax its screening process for crypto token listings.</li>
          <li>Kishida, who became prime minister in September 2021, has been a supporter of digital finance and blockchain adoption, recently announcing further investments in the non-fungible token (NFT) and metaverse industry. He included crypto in plans to reinvigorate the economy, under his “new capitalism” mandate.</li>
        </ul>
        <p>See related article: <a href="https://forkast.news/headlines/japan-eases-token-vetting-process-crypto/" target="_blank" rel="noreferrer">Japan eases token vetting process to expand crypto offerings: report</a></p>
      </div>,
    },
    {
      id: 6,
      title: 'PayPal (PYPL) Integrates With MetaMask, Boosts Crypto Efforts',
      category: 'News',
      subCategory: ['Paypal', 'Metamask', 'Crypto'],
      description: <div className="blog-desc">
        <p>PayPal PYPL joined forces with ConsenSys in a bid to expand its offerings in the booming cryptocurrency space..</p>
      </div>,
      authorName: 'Zacks Equity Research',
      authorurl: '',
      authorAvatar: 'https://downloads.coindesk.com/cd3/author-page/avatar-placeholder.png',
      authorContent: '',
      createdAt: 'Dec 15, 2022 - 07:16 PM',
      cover: 'https://s.yimg.com/ny/api/res/1.2/CayJj5PaeoLu8rKyuR5_4A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTQ0MztjZj13ZWJw/https://media.zenfs.com/en/zacks.com/924e7d5074a2a8293801aacbdea3f652',
      content: <div className="blog-content">
        <p>PayPal PYPL joined forces with ConsenSys in a bid to expand its offerings in the booming cryptocurrency space and expand its customer reach.</p>
        <p>Per the terms, PayPal has been added as an option for cryptocurrency transactions to ConsenSys’ MetaMask, which is a digital cryptocurrency wallet.</p>
        <p>Notably, users of MetaMask will now be able to buy and transfer the second-most-popular cryptocurrency called Ether seamlessly by just tapping the “buy” button and logging into their PayPal accounts.</p>
        <p>The underlined integration will aid MetaMask in expanding its reach to customers using Web3 applications like play-to-earn games and metaverse applications, among others.</p>
        <p>Similarly, PayPal will also be able to gain traction among Web3 application users, whose number is rising rapidly.</p>
        <p>Currently, the PayPal option within MetaMask is available to selected U.S. users. The feature will be rolled out eventually across the United States.</p>
        <h3>PayPal Holdings, Inc. Price and Consensus</h3>
        <img src="https://s.yimg.com/ny/api/res/1.2/CayJj5PaeoLu8rKyuR5_4A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTQ0MztjZj13ZWJw/https://media.zenfs.com/en/zacks.com/924e7d5074a2a8293801aacbdea3f652" alt="Paypal holdings, Inc. Price and Consensus"/>
        <p>PayPal Holdings, Inc. price-consensus-chart | PayPal Holdings, Inc. Quote</p>
        <h3>Growing Crypto Efforts</h3>
        <p>The latest move bodes well for the company’s strengthening crypto initiatives.</p>
        <p>Apart from the latest move, PayPal offers a feature called crypto on Venmo, which lets Venmo customers buy, hold and sell cryptocurrency directly within the Venmo app. Customers can also check cryptocurrency trends from the app. </p>
        <p>Further, the company offers its cryptocurrency service in the United Kingdom, which allows users to buy, hold and sell digital currencies like bitcoin, bitcoin cash, Ethereum and Litecoin directly from their PayPal accounts.</p>
        <p>PayPal’s acquisition of a digital asset security technology provider — Curv — remains noteworthy.</p>
        <p>The unveiling of a feature called Checkout with Crypto, which allows customers to seamlessly convert their cryptocurrency holdings into fiat currency at the checkout, is another positive.</p>
        <p>With all these endeavors, PayPal remains well-poised to penetrate the booming cryptocurrency market rapidly amid the pandemic, which has highlighted the importance of digital currency transactions.</p>
        <p>Per a report by Grand View Research, the global cryptocurrency market is expected to witness a CAGR of 12.2% between 2022 and 2030.</p>
        <h3>Competitive Scenario</h3>
        <p>We note that the latest move, along with the above-mentioned efforts, is likely to strengthen PayPal’s competitive position against one of its biggest peers, Block SQ.</p>
        <p>Block facilitates the buying and selling of bitcoins via its Cash App. It also intends to develop a bitcoin mining system, with the help of which it strives to carry out the processes of mining, maintaining, setting up and purchasing bitcoin efficiently.</p>
        <p>Apart from Square, Shopify SHOP is also leaving no stone unturned to gain a strong foothold in the cryptocurrency space.</p>
        <p>Shopify allows its merchants to accept payments in bitcoin, Litecoin, Ethereum and many other cryptocurrencies. It recently took a step further in the crypto market by making its platform NFT-enabled, which allows users to mint and trade collectibles.</p>
        <p>Nevertheless, PayPal’s strong crypto initiatives and the growing crypto volume are likely to strengthen its position in the intensifying cryptocurrency battle against the above-mentioned companies.</p>
        <h3>Zacks Rank & Other Stocks to Consider</h3>
        <p>Currently, PayPal carries a Zacks Rank #3 (Hold).</p>
        <p>Investors interested in the broader Zacks Computer & Technology sector can consider a better-ranked stock like Arista Networks ANET, which sports a Zacks Rank #1 (Strong Buy). You can see the complete list of today’s Zacks #1 Rank stocks here.</p>
        <p>Arista Networks has lost 8.9% in the year-to-date period. The long-term earnings growth rate for ANET is currently projected at 17.5%.</p>
        <p>Want the latest recommendations from Zacks Investment Research? Today, you can download 7 Best Stocks for the Next 30 Days. <a href="https://www.zacks.com/registration/pfp/?ALERT=RPT_7BEST_YHOSYND&ADID=SYND_YAHOO_7BEST_ANALYSTBLOG_253&cid=CS-YAHOO-FT-analyst_blog|company_news_tech_sector-2029196" target="_blank" rel="noreferrer">Click to get this free report</a></p>
        <p><a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&d_alert=ZER_CONF&t=ANET&ADID=SYND_YAHOO_TCK_ANALYSTBLOG_253&cid=CS-YAHOO-FT-analyst_blog|company_news_tech_sector-2029196" target="_blank" rel="noreferrer">Arista Networks, Inc. (ANET) : Free Stock Analysis Report</a></p>
        <p><a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&d_alert=ZER_CONF&t=PYPL&ADID=SYND_YAHOO_TCK_ANALYSTBLOG_253&cid=CS-YAHOO-FT-analyst_blog|company_news_tech_sector-2029196" target="_blank" rel="noreferrer">PayPal Holdings, Inc. (PYPL) : Free Stock Analysis Report</a></p>
        <p><a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&d_alert=ZER_CONF&t=SHOP&ADID=SYND_YAHOO_TCK_ANALYSTBLOG_253&cid=CS-YAHOO-FT-analyst_blog|company_news_tech_sector-2029196" target="_blank" rel="noreferrer">Shopify Inc. (SHOP) : Free Stock Analysis Report</a></p>
        <p><a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&d_alert=ZER_CONF&t=SQ&ADID=SYND_YAHOO_TCK_ANALYSTBLOG_253&cid=CS-YAHOO-FT-analyst_blog|company_news_tech_sector-2029196" target="_blank" rel="noreferrer">Block, Inc. (SQ) : Free Stock Analysis Report</a></p>
        <p><a href="https://www.zacks.com/stock/news/2029196/paypal-pypl-integrates-with-metamask-boosts-crypto-efforts?cid=CS-YAHOO-FT-analyst_blog|company_news_tech_sector-2029196" target="_blank" rel="noreferrer">To read this article on Zacks.com click here.</a></p>
        <p><a href="https://www.zacks.com/" target="_blank" rel="noreferrer">Zacks Investment Research</a></p>
      </div>,
    },
    {
      id: 7,
      title: 'Spike in Network Activity for Several Altcoins: Santiment Report',
      category: 'News',
      subCategory: ['Spike network', 'Santiment report', 'Crypto'],
      description: <div className="blog-desc">
        <p>“big upticks in address activity and dormant wallets awakening to move their funds.”</p>
      </div>,
      authorName: 'Steven Walgenbach',
      authorurl: 'https://coinedition.com/author/steven-walgenbach/',
      authorAvatar: 'https://downloads.coindesk.com/cd3/author-page/avatar-placeholder.png',
      authorContent: 'Steven has been involved in the crypto space since 2014 and has coded, invested in, and mined crypto. He is now keen to play apart in the global narrative for crypto.',
      createdAt: 'Dec 16, 2022 - 08:26 PM',
      cover: 'https://coinedition.com/wp-content/uploads/2022/12/Several-altcoins-are-seeing-big-upticks.jpg',
      content: <div className="blog-content">
        <p>A tweet by the blockchain intelligence firm, Santiment in the past day shows that several altcoins have seen “big upticks in address activity and dormant wallets awakening to move their funds.” The tweet read: “Others [altcoins] are staying stuck in the mud and are more likely to fall behind.”</p>
        <p>Santiment focused on three altcoins in its latest report such as Uniswap (UNI), Ren (REN), and yearn.finance (YFI).</p>
        <p>One example of an altcoin that has seen its network activity increase quite impressively after a consolidation period is YFI, according to the blockchain intelligence firm.</p>
        <p></p>
        <img src="https://coinedition.com/wp-content/uploads/2022/12/SANTIMENT-1920x650.png" alt="Spike in Network Activity" />
        <p>Meanwhile, the report showed that network activity for REN did not pick up as much as YFI because of the project’s “complicated financial situation.”</p>
        <p>Lastly, UNI experienced strong growth before when the project announced its NFT marketplace. Network activity for UNI has continued to grow, even compared with the NFT-related pump, according to the report.</p>
        <p>At press time, YFI is trading at $6,257.01 following a 2.63% drop in price over the last 24 hours. This is according to the crypto market tracking website, CoinMarketCap. The altcoin’s price has also weakened against Bitcoin (BTC) and Ethereum (ETH) by 0.80% and 0.98%, respectively.</p>
        <p>REN on the other hand, is up 2.88% over the last 24 hours. In addition to strengthening against the U.S. dollar, REN’s price has become resilient against BTC and ETH by 4.80% and 4.61%, respectively.</p>
        <p>UNI is also currently down 1.52%, but, it strengthened against Bitcoin by 0.44% and also strengthened against ETH by 0.24% over the same time period.</p>
        <p><strong>Disclaimer:</strong> The views and opinions, as well as all the information shared in this price analysis, are published in good faith. Readers must do their own research and due diligence. Any action taken by the reader is strictly at their own risk. Coin Edition and its affiliates will not be held liable for any direct or indirect damage or loss.</p>
      </div>,
    },
    {
      id: 8,
      title: '13% of Americans have now held crypto: JPMorgan research',
      category: 'News',
      subCategory: ['American', 'Morgan', 'Crypto'],
      description: <div className="blog-desc">
        <p>The JPMorgan report is based on a study of cash transfers from banks to crypto accounts for over 5 million customers.</p>
      </div>,
      authorName: 'TOM BLACKSTONE',
      authorurl: 'https://cointelegraph.com/authors/tom-blackstone',
      authorAvatar: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=300/https://s3.cointelegraph.com/storage/uploads/view/fcc228ab484f6733d5208bb3df2e94e7.jpg',
      authorContent: 'Tom Blackstone has been writing about finance and technology since 2014. His areas of expertise include: crypto regulations, wallet security, public/private cryptography, the history of cryptocurrencies, and blockchain video games.',
      createdAt: 'Dec 16, 2022 - 08:26 PM',
      cover: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2022-12/36a51ff2-4004-482f-9e8b-6f1c84b7dc58.jpg',
      content: <div className="blog-content">
        <p>Around 13% of the American population — or 43 million people — have held cryptocurrency at some point in their lives, new research from JPMorgan Chase has revealed.</p>
        <p>According to a Dec. 13 report titled "The Dynamics and Demographics of U.S. Household Crypto-Asset Use,” this number has risen dramatically since before 2020, when the figure was only around 3%.</p>
        <p>The latest data from JPMorgan comes from analyzing checking account transfers from a sample of over 5 million customers. It found that 600,000 customers in this sample group transferred cash to crypto accounts at some point during period from 2020 to 2022.</p>
        <p>The study also noted that cryptocurrency holders typically made their first crypto purchases during spikes in crypto prices. During this time, the amount of cash being sent into crypto exchange accounts typically far outweigh the cash being removed. In other words, most people were holding onto their crypto during this time period.</p>
        <p>This changed in early 2022 as crypto prices fell, according to JPMorgan. In recent months, cash transfers into crypto exchanges have only slightly exceeded cash transfers out of them.</p>
        <p>JPMorgan says that this is a result of both price declines in crypto and a broader trend of the savings rate declining in the United States since the pandemic:</p>
        <p>“We view the rise and fall of crypto use since the onset of COVID as consistent with the joint relationship between retail flows and market prices seen in prior research. Additionally, the trend in crypto flows also tracks dynamics of household savings, which spiked to historic highs early in the pandemic but has begun to reverse.”</p>
        <h3>Who's buying?</h3>
        <p>The report also weighed in on whether certain demographic groups are more likely to buy crypto. It found that men of all ages buy significantly more crypto than women, and that younger people buy significantly more than older people. For example, the report found that over 25% of millennial men have bought crypto, whereas only around 12% of millennial women and 5% of male baby boomers have.</p>
        <img src="https://s3.cointelegraph.com/uploads/2022-12/5a822161-3af7-4b27-8a3c-54c08517f7b5.png" alt="breakdown of crpto" />
        <p>A breakdown of crypto ownership by demographic. Source: JP Morgan Chase</p>
        <p>he research also found that crypto holdings were relatively minor for most individuals, with median flows equal to less than one week’s worth of take-home pay. </p>
        <p>On the other hand, about 15% of crypto owners had more than a month’s pay invested in crypto</p>
        <p><strong>Related: <a href="https://cointelegraph.com/news/arthur-hayes-bitcoin-bottomed-as-everyone-who-could-go-bankrupt-has-gone-bankrupt" target="_blank" rel="noreferrer">Arthur Hayes says Bitcoin has bottomed as “everyone who could go bankrupt has gone bankrupt”</a></strong></p>
        <p>The crypto market has gone through a dramatic fall in 2022. Bitcoin has fallen from a 2022 high of $47,459 in March to $17,208 at the time of writing, while Ether has fallen from $3,521 in April to $1,273 at the time of writing.</p>
        <p>This fall in the crypto market has been the result of market shocks such as TerraUSD (UST) stablecoin <a href="https://cointelegraph.com/news/terra-peg-mechanism-in-doubt-as-ust-crashes-to-67-cents" target="_blank" rel="noreferrer">losing its peg</a> in May and crypto exchange <a href="https://cointelegraph.com/news/bankruptcy-court-told-ftx-and-alameda-owe-blockfi-1b-but-it-s-complicated" target="_blank" rel="noreferrer">FTX going bankrupt</a> in November.</p>
        <p>Trading fees have fallen on many crypto exchanges, and Coinbase has even stated that its <a href="https://cointelegraph.com/news/coinbase-ceo-says-trading-revenue-has-fallen-to-roughly-half-what-it-was-last-year" target="_blank" rel="noreferrer">revenue has fallen</a> by nearly 50%.</p>
        <p>But despite this decline in crypto prices and trading activity, this new report indicates that crypto ownership has still increased over the course of the last few years.</p>
      </div>,
    },
    {
      id: 9,
      title: 'DEXs see increase in trading volume as investors tread carefully around CEXes',
      category: 'Press',
      subCategory: ['American', 'Morgan', 'Crypto'],
      description: <div className="blog-desc">
        <p>With the recent events in the crypto space, investors seem to be putting more faith in DEXes</p>
      </div>,
      authorName: 'Suzuki Shillsalot',
      authorurl: 'https://ambcrypto.com/author/suzuki-shillsalot/',
      authorAvatar: 'https://ambcrypto.com/wp-content/uploads/2022/08/image-1-300x300.jpeg',
      authorContent: 'Ser Suzuki Shillsalot has 8 years of experience working as a Senior Investigative journalist at The SpamBot Times. He completed a two-hour course in journalism from a popular YouTube video and was one of the few to give it a positive rating. Shillsalot writings mainly focus on shilling his favourite cryptos and trolling anyone who disagrees with him. P.S - There is a slight possibility the profile pic is AI-generated.',
      createdAt: 'Nov 25, 2022 - 12:26 PM',
      cover: 'https://ambcrypto.com/wp-content/uploads/2022/11/pexels-anna-nekrashevich-6801874-scaled-e1669363554617.jpg',
      content: <div className="blog-content">
        <p>With the recent events in the crypto space, investors seem to be putting more faith in DEXes</p>
        <p>DEXes has seen recently seen an increase in trading volume and TVL in recent time</p>
        <p>Investors have started viewing <a href="https://ambcrypto.com/chainalysis-report-reveals-this-about-centralized-vs-decentralized-exchanges/" target="_blank" rel="noreferrer">centralized exchanges</a> (CEXes) with skepticism as fear and uncertainty have engulfed the cryptocurrency market. However, despite the current state of CEXes, their decentralized equivalent seems to be thriving. According to data by Messari, decentralized exchanges (DEXes) have recently experienced a significant spike in volume. But how significant have these spikes been?</p>
        <h3>DEXes trade volume surge</h3>
        <p>Messari’s statistics revealed that the top three DEXes, <a href="https://ambcrypto.com/uniswap-is-changing-tactics-to-pursue-more-growth-beyond-l1-l2-heres-how/" target="_blank" rel="noreferrer">Uniswap</a>, Balancer, and <a href="https://ambcrypto.com/sushiswap-investors-going-long-can-expect-this-in-the-coming-week/" target="_blank" rel="noreferrer" >Sushiswap</a> had a combined transaction volume of nearly $7 billion over the previous 30 days. However, a closer look at each one showed how much growth had occurred.</p>
        <p>In terms of transaction volume and TVL, <a href="https://ambcrypto.com/uniswap-user-and-dev-activity-lack-of-profitability-and-everything-in-between/" target="_blank" rel="noreferrer">Uniswap</a> was ranked first among all DEXes. The trading volume for Uniswap revealed that there had been noticeable rises in recent weeks. This demonstrates the platform’s increased trading activity.</p>
        <p>The trading volume for the DEX reached approximately $300 million, which was a record for the year so far, according to the trade volume chart.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/11/ao-tv-blue-pink.png" alt="Dex sees inceases in trading volume"/>
        <p>It had experienced $3.57 billion in trade volume over the previous 30 days, a rise of 65.32%. Although the TVL showed a modest dip, it still had $2.6 billion, at the time of writing.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/11/ao-tv-blue-down.png" alt="Dex sees inceases in trading volume"/>
        <p>In the previous 30 days, its revenue had likewise climbed by over 64%.</p>
        <p>Additionally, a glance at Balancer revealed that the DEX experienced a sharp increase in trade volume. Trading volume reached its all-time high during this time, rising by a staggering 730.38% in the past 30 days to reach $2.09 billion</p>
        <p>The overall revenue climbed by 40.68% and was $1.09 million during the same time frame. Also, TVL had <a href="https://messari.io/protocol/balancer-v2" target="_blank" rel="noreferrer">grown</a> by almost 600% and was worth $699 million, as of this writing. </p>
        <h3>Overall TVL sees an uptrend</h3>
        <p>It was also evident that there had been a rise in total TVL during November, according to DefiLlama data. From the statistics, it was clear that there had been a reduction in recent months. Starting from $57 billion in October, the TVL observed at the time of this writing was above $92 billion.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/11/ao-tv-blue-up.png" alt="breakdown of crpto" />
        <p>The obvious increase in these DEXes’ trading volumes is evidence of how recently that area has come to receive a lot more attention. The increased interest could lead to a more balanced crypto economy and encourage participation outside of centralized exchanges.</p>
        <p>This is not meant to minimize or overlook the significance of centralized exchanges within the ecosystem; rather, DEXes provide investors with different options.</p>
      </div>,
    },
    {
      id: 10,
      title: 'What does Aave’s growth on Arbitrum mean for the current state of L2s',
      category: 'Press',
      subCategory: ['American', 'Morgan', 'Crypto'],
      description: <div className="blog-desc">
        <p>According to new data from Dune Analytics, Aave [AAVE] users on Arbitrum witnessed major growth. </p>
      </div>,
      authorName: 'Suzuki Shillsalot',
      authorurl: 'https://ambcrypto.com/author/suzuki-shillsalot/',
      authorAvatar: 'https://ambcrypto.com/wp-content/uploads/2022/08/image-1-300x300.jpeg',
      authorContent: 'Ser Suzuki Shillsalot has 8 years of experience working as a Senior Investigative journalist at The SpamBot Times. He completed a two-hour course in journalism from a popular YouTube video and was one of the few to give it a positive rating. Shillsalot writings mainly focus on shilling his favourite cryptos and trolling anyone who disagrees with him. P.S - There is a slight possibility the profile pic is AI-generated.',
      createdAt: 'Dec 11, 2022 - 03:56 PM',
      cover: 'https://ambcrypto.com/wp-content/uploads/2022/12/hp-fi.jpg',
      content: <div className="blog-content">
        <p>Aave grew on the Arbitrum network but declined on Ethereum</p>
        <p>Arbitrum’s TVL witnessed growth, and the number of transactions on the protocol rose</p>
        <p>According to new data from <a href="https://dune.com/queries/1238683/2122874" target="_blank" rel="noreferrer">Dune Analytics</a>, <a href="https://ambcrypto.com/?s=aave" target="_blank" rel="noreferrer">Aave [AAVE]</a> users on Arbitrum witnessed major growth. More and more users have increasingly switched to Arbitrum, indicating that L2 adoption was rapidly rising.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/12/ARB-ETH.jpeg" alt="What does aave growth on arbitrum" />
        <p>Arbitrum is a major layer 2 solution that has been contributing to the growth of the sector. Its TVL grew tremendously over the last few weeks and sat at 1.08 billion at the time of writing after appreciating by 1.24% in the last 24 hours.</p>
        <p>However, despite the TVL growth, Arbitrum’s activity and TPS were unable to rise. The latter declined by 26.78%, according to data from <a href="https://l2beat.com/scaling/projects/arbitrum" target="_blank" rel="noreferrer">L2beats</a>.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/12/hp-image.png" alt="defiLama"/>
        <p>Regardless of the momentary decline in Arbitrum’s TPS, the number of transactions on the protocol grew significantly since September. Even though there was volatility observed in the number of transactions, overall, the number of transactions kept moving in a positive direction.</p>
        <p>Furthermore, the number of unique users on the L2 protocol increased from 1.7 million to 12.16 million in the last month, according to <a href="https://arbiscan.io/chart/address" target="_blank" rel="noreferrer">Arbiscan</a>.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/12/Screenshot-2022-12-11-at-1.28.31-PM.png" alt="arbiscran"/>
        <h3>State of Aave on Ethereum</h3>
        <p>The growing presence of Aave on Arbitrum had a correspondingly negative impact on Aave’s presence on the <a href="https://ambcrypto.com/category/ethereum-news/" target="_blank" rel="noreferrer"></a>Ethereum [ETH] network.</p>
        <p>As can be seen from the image below, the volume for Aave on Ethereum decreased rapidly. Additionally, large addresses also lost interest in Aave. This was indicated by the declining top addresses holding AAVE on the network.</p>
        <p>Aave’s network growth decreased as well, thus, signifying that the number of new users transferring <a href="https://ambcrypto.com/aave-seeks-community-go-ahead-to-list-lidos-wsteth-on-its-liquidity-pool/" target="_blank" rel="noreferrer">the coin</a> for the first time on Ethereum’s network shrank.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/12/Aave-on-Ethereum-AAVE-13.38.02-11-Dec-2022.png" alt="santiment" />
        <p>It remains to be seen whether the growth of <a href="https://ambcrypto.com/despite-growth-aave-could-still-face-these-hurdles-in-q4-2022/" target="_blank" rel="noreferrer">Aave</a> on the Arbitrum network points to a larger shift to L2 networks.</p>
        <p>At the time of writing, <a href="https://ambcrypto.com/predictions/aave-price-prediction" target="_blank" rel="noreferrer">AAVE</a> was trading at $61.52, according to <a href="https://coinmarketcap.com/currencies/aave/" target="_blank" rel="noreferrer">CoinMarketCap</a>.</p>
      </div>,
    },
    {
      id: 11,
      title: 'ALTCOINSSolana showing signs of life even as TVL and SOL’s price decline massively',
      category: 'News',
      subCategory: ['Solana', 'TVL', 'Crypto'],
      description: <div className="blog-desc">
        <p>SOL’s TVL and price suffered a decline while NFT trades ran smoothly.</p>
      </div>,
      authorName: 'Suzuki Shillsalot ',
      authorurl: 'https://ambcrypto.com/author/suzuki-shillsalot/',
      authorAvatar: 'https://ambcrypto.com/wp-content/uploads/2022/08/image-1-80x80.jpeg',
      authorContent: 'Ser Suzuki Shillsalot has 8 years of experience working as a Senior Investigative journalist at The SpamBot Times. He completed a two-hour course in journalism from a popular YouTube video and was one of the few to give it a positive rating. Shillsalot writings mainly focus on shilling his favourite cryptos and trolling anyone who disagrees with him. P.S - There is a slight possibility the profile pic is AI-generated.',
      createdAt: 'Dec 17, 2022 - 02:56 PM',
      cover: 'https://ambcrypto.com/wp-content/uploads/2022/12/solana-e1669974212650.jpg',
      content: <div className="blog-content">
        <p>Solana was on track to bring some developments to its network.</p>
        <p>SOL’s TVL and price suffered a decline while NFT trades ran smoothly.</p>
        <p>Solana [SOL] has been locked in FUD for a long time, affecting its price drastically. However, the network had some positives to show as its development continued.</p>
        <p>After rumors surfaced linking the Solana ecosystem to the troubled <a href="https://ambcrypto.com/ftx-ceo-john-rays-congressional-testimony-reveals-sbfs-poor-management/" target="_blank" rel="noreferrer">FTX and SBF</a> debacle, SOL came under close examination. The FTX incident left a lasting impression on the network, and the corresponding FUD was difficult to dispel.</p>
        <p>It appeared, however, that Solana had not let up on the gas in its pursuit to prove its worth. Given current statistics, how well has this worked out?</p>
        <h3>Upcoming updates</h3>
        <p>The Firedancer is an upcoming improvement <a href="https://messari.io/report/solana-ecosystem-overview?utm_source=twitter_messaricrypto&utm_medium=organic_social&utm_campaign=solana_ecosystem_overview" target="_blank" rel="noreferrer">scheduled</a> for rollout on Solana to bolster the reliability of its network. Formed by Jump Crypto, Firedancer is a decentralized validator client written in C++.</p>
        <p>After going live, Solana will join Ethereum as the second multi-client chain. The likelihood that a flaw may cause severe damage to the network is reduced when numerous sets of code exist that can “run” the chain from scratch. </p>
        <p>Additionally, in the event of a flawed implementation, the network gains from a second, unrelated implementation are less likely to suffer from the same flaws simultaneously. Similarly, Firedancer will be released in 2020 and can provide significant performance boosts.</p>
        <h3>Dev activity resumes an upward trend</h3>
        <p>There was some relief after Solana suffered from a noticeable decline. Development on Solana was steadily picking up, according to the Development Activity statistic at press time. Dev activity, according to the metric, was approximately 20.2.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/12/Solana-SOL-13.33.27-16-Dec-2022.png" alt="santiment" />
        <h3>Active developers reduce on Solana and other blockchains</h3>
        <p>Data from the Token Terminal also showed a decline in developers working on well-known blockchains. Because of the decrease in Solana’s developers from over 2,000 to 75, the number of active developers in the general crypto space fell from 3,700 to roughly 1,600.</p>
        <p>This would imply that the drop in Solana affected the crypto industry.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/12/Solana-active-developers.png" alt="token-terminal" />
        <h3>Price and TVL face sharp decline</h3>
        <p>In recent weeks, SOL’s price has been stagnant at best. It was trading at roughly $13 at the time of this writing, a sharp decline from its $30 price at the start of November 2022.</p>
        <p>The Price Range statistic revealed that Solana lost 60% of its value since the last time it was in the $30 range. The low volume, devoid of any significant spikes – indicated by the volume indicator – showed that the asset had not been traded actively in recent weeks.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/12/SOLUSD_2022-12-16_13-33-39.png" alt="Tradingview" />
        <p>A review of Solana’s Total Value Locked (TVL) also <a href="https://defillama.com/chain/Solana" target="_blank" rel="noreferrer">revealed</a> that it had drastically decreased in value. The TVL observed was still over $1 billion as of October.</p>
        <p>However, it was discovered that the current worth was around $280 million. The TVL showed a severe decline to which the FTX event and the current market trend contributed.</p>
        <h3>NFT trade remains active</h3>
        <p>The NFT measures provided some promise despite the negative trends shown in the SOL price and Solana’s TVL. Solana was still active, as indicated by the Total NFT trade Volume statistic, expressed in USD. The statistic revealed that <a href="https://ambcrypto.com/solana-nfts-enjoy-some-limelight-but-sol-prefers-to-lurk-in-the-shadows/" target="_blank" rel="noreferrer">NFT sales</a> on the network had sales of over $1.4 million on 6 December alone.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/12/Solana-SOL-13.33.20-16-Dec-2022.png" alt="santiment" />
        <p>Additionally, Helium will switch to the Solana network in the first quarter of 2023, according to the Helium Foundation. This is despite the present difficulties of the Solana network. The network hasn’t ceased developing despite its challenges; therefore, it might endure and emerge from the FTX fallout.</p>
      </div>,
    },
    {
      id: 12,
      title: 'These latest Avalanche developments can help AVAX climb up the ladder',
      category: 'News',
      subCategory: ['Avalanche', 'AVAX', 'ncx'],
      description: <div className="blog-desc">
        <p>Avalanche has recently started rolling out new features and forming new alliances to impact the ecosystem.</p>
      </div>,
      authorName: 'Suzuki Shillsalot',
      authorurl: 'https://ambcrypto.com/author/suzuki-shillsalot/',
      authorAvatar: 'https://ambcrypto.com/wp-content/uploads/2022/08/image-1-80x80.jpeg',
      authorContent: 'Ser Suzuki Shillsalot has 8 years of experience working as a Senior Investigative journalist at The SpamBot Times. He completed a two-hour course in journalism from a popular YouTube video and was one of the few to give it a positive rating. Shillsalot writings mainly focus on shilling his favourite cryptos and trolling anyone who disagrees with him. P.S - There is a slight possibility the profile pic is AI-generated.',
      createdAt: 'Dec 15, 2022 - 11:37 AM',
      cover: 'https://ambcrypto.com/wp-content/uploads/2022/12/jeremy-thomas-O6N9RV2rzX8-unsplash-e1671020778574.jpg',
      content: <div className="blog-content">
        <p>Avalanche recently announced the launch of the mobile version of its Core Wallet.</p>
        <p>Avalanche’s latest developments have caused AVAX to rally by over 5% in the last 24 hours.</p>
        <p><a href="https://ambcrypto.com/avalanche-performance-on-this-front-is-to-blame-for-its-bearish-price-action/" target="_blank" rel="noreferrer">Avalanche</a> has recently started rolling out new features and forming new alliances to impact the ecosystem. Owners of AVAX have been forced to grasp onto hope despite these actions because the effects have been minimal if any at all. However, the most recent developments revealed by the ecosystem may attract new users and impact AVAX.</p>
        <h3>Mobile core wallet</h3>
        <p>On 13 December, Avalanche <a href="https://twitter.com/avalancheavax/status/1602720454539874304" target="_blank" rel="noreferrer">announced</a> the release of its Core Wallet app for mobile devices. In its initial release in June of this year, the Core wallet had native Avalanche bridging capabilities, allowing users to connect with dApps on the Avalanche network.</p>
        <p>In the past, users who wished to transfer their assets to the network had to resort to third-party tools like MetaMask, which offered a similar Ethereum-Avalanche bridge.</p>
        <p>Avalanche’s latest change could pave the way for the company to attract more consumers. This has the potential to boost both ecosystem participation and user count.</p>
        <p>The network claimed that the Core wallet’s other distinctive features included the ability to trade Avalanche, <a href="https://ambcrypto.com/bitcoin-traders-can-keep-an-eye-on-these-levels-as-btc-drops-into-a-demand-zone/" target="_blank" rel="noreferrer">Bitcoin</a> easily, and <a href="https://ambcrypto.com/cftc-again-calls-ethereum-eth-a-commodity-in-a-court-filing-details-inside/" target="_blank" rel="noreferrer">Ethereum</a> assets. Also, the transfer of Bitcoin and Ethereum to participate in Avalanche DeFi dApps, and track real-time asset price movements in a unified watchlist. </p>
        <h3>Avalanche’s recent partnership</h3>
        <p>Avalanche has also recently <a href="https://twitter.com/avalancheavax/status/1602745689926008833" target="_blank" rel="noreferrer">launched</a> a learn-and-earn program in collaboration with Robinhood. By incorporating Robinhood’s “learn and earn” feature, the ecosystem would be able to onboard a wider variety of users.</p>
        <p>In related news, Avalanche had also recently <a href="https://ambcrypto.com/avalanche-and-alibaba-partnership-may-have-this-effect-on-avax/" target="_blank" rel="noreferrer">established</a> a relationship with Alibaba Cloud. As a result of the collaboration, the platform would be offering Node-as-a-Service. This service would allow any operator interested in running a node to do so by simply connecting to an already-built architecture without a complex set-up.</p>
        <h3>AVAX in daily timeframe</h3>
        <p>By taking a glance at AVAX in a daily timeframe, it was possible to see more clearly how these feature enhancements and partnerships are yet to have the expected impact.</p>
        <p>The asset’s price movement trend was underwhelming when examined. But it was clear that it had increased by more than 5% over the preceding trading period.</p>
        <p>This would imply a favorable reaction to the network’s most recent news. At the time of this writing, the asset was trading with less than a 1% increase in value, and it appeared to be rising.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/12/AVAXUSD_2022-12-14_12-47-29.png" alt="Trading view" />
      </div>,
    }
  ];
  
  export default blogListdata;