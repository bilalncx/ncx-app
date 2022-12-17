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
    }
  ];
  
  export default blogListdata;