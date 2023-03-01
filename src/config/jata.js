const blogListdata = [
    {
      id: 1,
      title: 'Binance’s bitcoin reserves are fully collateralized according to auditing firm Mazars',
      slug: 'binance’s-bitcoin-reserves-are-fully-collateralized-according-to-auditing-firm-mazars',
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
      slug: 'binance-bitcoin-reserves-are-overcollateralized-new-report-says',
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
      cover: 'https://ncx.cx/images/binance_bnb.png',
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
      title: 'Hong Kong Stock Exchange debuts ‘Asia’s first’ crypto futures ETFs',
      slug: 'hong-kong-stock-exchange-debuts-Asia-first-crypto-futures-etfs',
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
      id: 4,
      title: 'Japan plans to ease corporate tax rates for cryptocurrency issuers',
      slug: 'japan-plans-to-ease-corporate-tax-rates-for-cryptocurrency-issuers',
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
      id: 5,
      title: 'PayPal (PYPL) Integrates With MetaMask, Boosts Crypto Efforts',
      slug: 'paypal-(PYPL)-integrates-with-metaMask-boosts-crypto-efforts',
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
      id: 6,
      title: 'Spike in Network Activity for Several Altcoins: Santiment Report',
      slug: 'spike-in-network-activity-for-several-altcoins-santiment-report',
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
      id: 7,
      title: '13% of Americans have now held crypto: JPMorgan research',
      slug: '13%-of-americans-have-now-held-crypto-JPMorgan-research',
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
      id: 8,
      title: 'DEXs see increase in trading volume as investors tread carefully around CEXes',
      slug: 'DEXs-see-increase-in-trading-volume-as-investors-tread-carefully-around-CEXes',
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
      id: 9,
      title: 'What does Aave’s growth on Arbitrum mean for the current state of L2s',
      slug: 'what-does-aaves-growth-on-arbitrum-mean-for-the-current-state-of-l2s',
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
        <p>The growing presence of Aave on Arbitrum had a correspondingly negative impact on Aave’s presence on the <a href="https://ambcrypto.com/category/ethereum-news/" target="_blank" rel="noreferrer">Ethereum [ETH]</a> network.</p>
        <p>As can be seen from the image below, the volume for Aave on Ethereum decreased rapidly. Additionally, large addresses also lost interest in Aave. This was indicated by the declining top addresses holding AAVE on the network.</p>
        <p>Aave’s network growth decreased as well, thus, signifying that the number of new users transferring <a href="https://ambcrypto.com/aave-seeks-community-go-ahead-to-list-lidos-wsteth-on-its-liquidity-pool/" target="_blank" rel="noreferrer">the coin</a> for the first time on Ethereum’s network shrank.</p>
        <img src="https://ambcrypto.com/wp-content/uploads/2022/12/Aave-on-Ethereum-AAVE-13.38.02-11-Dec-2022.png" alt="santiment" />
        <p>It remains to be seen whether the growth of <a href="https://ambcrypto.com/despite-growth-aave-could-still-face-these-hurdles-in-q4-2022/" target="_blank" rel="noreferrer">Aave</a> on the Arbitrum network points to a larger shift to L2 networks.</p>
        <p>At the time of writing, <a href="https://ambcrypto.com/predictions/aave-price-prediction" target="_blank" rel="noreferrer">AAVE</a> was trading at $61.52, according to <a href="https://coinmarketcap.com/currencies/aave/" target="_blank" rel="noreferrer">CoinMarketCap</a>.</p>
      </div>,
    },
    {
      id: 10,
      title: 'ALTCOINSSolana showing signs of life even as TVL and SOL’s price decline massively',
      slug: 'altcoinssolana-showing-signs-of-life-even-as-TVL-and-SOLs-price-decline-massively',
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
      id: 11,
      title: 'These latest Avalanche developments can help AVAX climb up the ladder',
      slug: 'these-latest-avalanche-developments-can-help-avax-climb-up-the-ladder',
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
    },
    {
      id: 12,
      title: 'Bitcoin, Ether prices rise as crypto market stages rebound; Solana biggest gainer among top 10',
      slug: 'bitcoin-Ether-prices-rise-as-crypto-market-stages-rebound-solana-biggest-gainer-among-top-10',
      category: 'News',
      subCategory: ['Market', 'Bitcoin', 'Crypto'],
      description: <div className="blog-desc">
        <p>Bitcoin and Ether rebounded in Thursday morning trading in Asia amid broad gains in the top 10 non-stablecoin cryptocurrencies after a bout of profit-taking and mixed economic indicators sent prices lower on Wednesday.</p>
      </div>,
      authorName: 'Danny Park',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Jan 26, 2023 - 11:37 AM',
      cover: 'https://ncx.cx/images/bitcoin-cloud.png',
      content: <div className="blog-content">
        <p>Bitcoin and Ether rebounded in Thursday morning trading in Asia amid broad gains in the top 10 non-stablecoin cryptocurrencies after a bout of profit-taking and mixed economic indicators sent prices lower on Wednesday. Solana, Polygon and Cardano led gains among the top 10 by market capitalization. U.S. equities were mixed overnight. Tesla beat earnings forecasts but the poor outlook from Microsoft on Wednesday and an interest rate hike expected next week kept a lid on trading.</p>
        <h3>Fast facts</h3>
        <ul>
          <li>Bitcoin rose 2% to US$23,096 in the 24 hours to 8 a.m. in Hong Kong. The world’s biggest cryptocurrency by market capitalization has risen 11.66% in the seven days to date and resumed a strong run up since the start of the year after hitting a speed bump on Wednesday. Ether added 3.43% to US$1,610, up 6.36% in the same week, according to <a href="https://coinmarketcap.com/" target="_blank" rel="noreferrer">CoinMarketCap data</a>.</li>
          <li>Solana jumped 7.78% to US$24.56 to post a week-to-date growth of 17.9%. Solana recently opened pre-orders for its blockchain-focused mobile phone Solana Saga, which is expected to launch as early as Q1 this year.</li>
          <li>Polygon added 3.85% to US$0.99 after the Fractal NFT gaming site on Wednesday said it was expanding onto the Polygon network. Cardano rose by 3.91% to US$0.37.</li>
          <li>The total crypto market capitalization grew 2.72% to US$1.05 trillion, while trading volume saw a 12% increase to US$61.86 billion.</li>
          <li>U.S. equity markets had a mixed day on Wednesday. The Dow Jones Industrial Average rose 0.03%, while the S&P 500 and the Nasdaq Composite both dipped almost 0.2%.</li>
          <li>More economic indicators are out on Thursday in the U.S., including GDP, durable goods orders and jobless claims, which could provide direction to equities through the end of the week.</li>
          <li>Members of the U.S. Federal Reserve are in a so-called blackout period before they meet next week – Jan. 31 to Feb. 1 – to decide the next move on interest rates. Analysts from CME Group predict a 99.8% chance of an increase of 25 basis points.</li>
          <li>Last month, the Fed raised interest rates by 50-basis points to between 4.25% and 4.5%, the highest in 15 years, to try and slow the pace of inflation and a number of indicators suggest that slowdown is happening. However, some investors remain concerned about the U.S. economy, the world’s biggest, tipping into a recession.</li>
        </ul>
      </div>
    },
    {
      id: 13,
      title: 'Ethereum [ETH] metric sees correction: Hopes of a bull run rise',
      slug: 'rthereum-ETH-metric-sees-correction-Hopes-of-a-bull-run-rise',
      category: 'News',
      subCategory: ['Market', 'Bitcoin', 'Crypto'],
      description: <div className="blog-desc">
        <p>Bitcoin and Ether rebounded in Thursday morning trading in Asia amid broad gains in the top 10 non-stablecoin cryptocurrencies after a bout of profit-taking and mixed economic indicators sent prices lower on Wednesday.</p>
      </div>,
      authorName: 'Suzuki Shillsalot',
      authorurl: 'https://ambcrypto.com/author/suzuki-shillsalot/',
      authorAvatar: 'https://ncx.cx/images/suzuki.jpeg',
      authorContent: 'Ser Suzuki Shillsalot has 8 years of experience working as a Senior Investigative journalist at The SpamBot Times. He completed a two-hour course in journalism from a popular YouTube video and was one of the few to give it a positive rating. Shillsalot writings mainly focus on shilling his favourite cryptos and trolling anyone who disagrees with him. P.S - There is a slight possibility the profile pic is AI-generated.',
      createdAt: 'Jan 21, 2023 - 1:37 AM',
      cover: 'https://ncx.cx/images/ncx-news1.png',
      content: <div className="blog-content">
        <p>The S&P 500 metric showed a price correction while Ethereum continued an uptrend.</p>
        <p>Percent Supply in Profit was over 67% at press time, representing a four-month high for Ethereum.</p>
        <p>The price of <a href="https://ambcrypto.com/?s=ethereum" target="_blank" rel="noreferrer">Ethereum [ETH]</a> rose dramatically over the last few days, which indicated a bull trend. Consequently, the recent activity of the S&P 500 metric and its correlation with crypto may provide some indication as to the same.</p>
        <h3>Ethereum and equity prices go in opposite directions</h3>
        <p>Recent information indicated that Ethereum’s price was trending opposite to the S&P 500. Per Santiment’s data, at press time, the price of the S&P 500 index underwent a correction following its previous rising trajectory.</p>
        <p>When the S&P 500 (a proxy for equities) and cryptocurrency show no relationship to one another, a bull market is said to have begun.</p>
        <img src="https://ncx.cx/images/ethereum_metrics-1.png" alt="Ethereum_metrics"/>
        <p>The Standard & Poor’s 500 (S&P 500) measures the collective stock market performance of 500 of the largest publicly traded corporations in the United States. The index components are chosen by Standard & Poor’s, an S & P Global division, and broadly represent the U.S. stock market.</p>
        <h3>Percent Supply in Profit hits four-month high</h3>
        <p>Besides the stock market’s movement, the percentage of supply in profit is a leading sign of an Ethereum bull run. Over 67% of the Percent Supply was profitable, as evidenced by data from Glassnode.</p>
        <p>The graph also showed that the present level of the Percent Supply in profit was at its highest in four months. The significance of this statistic in evaluating the Ethereum bull run is that the greater the Percent Supply in profit, the more likely a bull run is in play.</p>
        <img src="https://ncx.cx/images/ethereum_metrics-2.png" alt="Ethereum_metrics"/>
        <h3>MVRV shows reduced loss</h3>
        <p>When the 365-day Market Value to Realized Value (MVRV) ratio is included, the case for a bull market becomes stronger. The MVRV ratio was roughly 6.3% at the time of writing. The current MVRV level indicated a 6% decrease in the value of <a href="https://ambcrypto.com/ethereums-latest-update-could-get-eth-holders-excited-for-2023-because/" target="_blank" rel="noreferrer">Ethereum</a>.</p>
        <p>Though a loss, the stretch to recoup the earlier loss suggested a bull market. However, it would be a complete run when it turned the holdings in the 365-day period into profit.</p>
        <img src="https://ncx.cx/images/ethereum_metrics-3.png" alt="Ethereum_metrics"/>
        <h3>Ethereum remains in the overbought zone</h3>
        <p>A daily timeframe chart of Ethereum’s price showed that it was trading near $1,550 as of this writing. The current price region represented a gain of nearly 30% at press time, as calculated using the Price Range tool.</p>
        <p>Furthermore, Ethereum’s Relative Strength Index (RSI) readings indicated that the price was relatively stable in the overbought territory.</p>
        <img src="https://ncx.cx/images/ethereum_metrics-4.png" alt="Ethereum_metrics"/>
      </div>
    },
    {
      id: 14,
      title: 'S&P 500: On The Verge Of A Bullish Breakout - Week Starting Jan. 16th (Technical Analysis)',
      slug: 'rthereum-ETH-metric-sees-correction-Hopes-of-a-bull-run-rise',
      category: 'News',
      subCategory: ['Breakout', 'graphics', 'Crypto'],
      description: <div className="blog-desc">
        <p>This article is the first in what I hope will be a regular weekend series. A variety of technical analysis techniques will be used to look at probable moves for the S&P 500 (SPY) in the week ahead. No personal bias will be shown and no predictions will be made either.</p>
      </div>,
      authorName: 'Andrew McElroy',
      authorurl: 'https://seekingalpha.com/author/andrew-mcelroy/?source=content_type%3Areact%7Csection%3Aauthor%7Cbutton%3Aname%7Cfirst_level_url%3Aarticle',
      authorAvatar: 'https://ncx.cx/images/andrew_mc.png',
      authorContent: 'Chief Analyst at Matrixtrade.com. Author of the ebook Fractal Market Mastery. Trend follower and market timer. All time frames, all instruments. Wherever I see an edge, I trade it.',
      createdAt: 'Jan 15, 2023 - 3:32 AM',
      cover: 'https://ncx.cx/images/ncx-news2.png',
      content: <div className="blog-content">
        <h3>Summary</h3>
        <ul>
          <li>A technical guide to the week ahead for the S&P 500.</li>
          <li>The daily chart is breaking out of the downtrend following last week's positive CPI release.</li>
          <li>Price is also now above the daily 200MA.</li>
          <li>Resistance on the weekly chart still needs to be cleared.</li>
        </ul>
        <img src="https://ncx.cx/images/sp.png" alt="bitcoin s&p"/>
        <p>This article is the first in what I hope will be a regular weekend series. A variety of technical analysis techniques will be used to look at probable moves for the S&P 500 (<a href="https://seekingalpha.com/symbol/SPY?hasComeFromMpArticle=false&source=content_type%253Areact%257Csection%253Amain_content%257Cbutton%253Abody_link" target="_blank" rel="noreferrer">SPY</a>) in the week ahead. No personal bias will be shown and no predictions will be made either. Rather, the market will be viewed in probable outcomes using inflection points - if it is going down, where is it likely to go? If it is going up, where is it likely to test? Likewise, if it breaks a key level to the downside, what does that tell us about the market and where is it likely to go?</p>
        <p>The technical analysis itself will be kept fairly simple. After all, one line drawn from the early 2022 top and through the peaks has been the main technical barrier all last year and continues to be important. Tried and tested techniques such as classic patterns, trendlines, major moving averages and horizontal support form the body of the analysis. Demark systems are also used to detect exhaustion and volume profile shows additional areas of interest.</p>
        <p>The S&P 500 chart will be analyzed on monthly, weekly and daily timeframes, then the information collated into an actionable summary at the end.</p>
        <h3>The Market Narrative</h3>
        <p>While the focus of this article is primarily on technical analysis, a more complete picture combines it with fundamental and sentiment studies.</p>
        <p>Last week saw the sixth consecutive drop in inflation and there is now plenty evidence it should continue to fall. The Fed won this particular battle. However, the labor market, and particularly wage growth, remain a risk to any further shift away from the hawkish stance. For now, the message from the Fed is that rates will stay high for an extended period.</p>
        <p>But is this warning just a bluff to keep markets from getting too bullish too quickly? The market seems to think so - the expectation is that the Fed are going to slow the pace of hikes to a halt over the coming months and then start cutting in the second half of the year.</p>
        <p>The question next week and beyond is whether this situation merits the bullish breakout brewing on the charts. Sentiment has improved drastically in recent months and is reflected already in today's price. A Fed pivot has been a primary driver for months. What is left to continue the rally? Easing in the labor market and confirmed dovish signals from the Fed would complete the bullish narrative, but neither are going to happen next week. Personally, I wouldn't trust the rally until a weekly close above 4050.</p>
        <h3>S&P 500 Monthly</h3>
        <img src="https://ncx.cx/images/s&p-1.png" alt="Ethereum_metrics"/>
        <p>The monthly chart shows the SPX trading inside the range set in December. Resistance is at the range high of 4101 and beyond that, 4325 at the high of August. Support is at December's low of 3764 and the 3491 low.</p>
        <p>There are no exhaustion signals in either direction (using Demark methods).</p>
        <h3>S&P 500 Weekly</h3>
        <img src="https://ncx.cx/images/s&p-2.png" alt="Ethereum_metrics"/>
        <p>Last week's bar closed near the highs. This gives an upside bias into early next week to at least take out last week's 4003 high.</p>
        <p>Resistance comes in at 4048.5 at the 50ma, which will drop to around 4045 next week. There is also trendline resistance (or the neckline of an inverse head and shoulders pattern) near the same level at 4040. If this area is broken, 4101 is the next resistance, then 4203 at the large weekly gap. Support is at the 3764 pivot low and the 200ma at 3680.</p>
        <p>Again, there are no exhaustion signals in either direction.</p>
        <p>The trend is down (lower lows and lower highs).</p>
        <h3>S&P 500 Daily</h3>
        <img src="https://ncx.cx/images/s&p-3.png" alt="Ethereum_metrics"/>
        <p>The daily chart is at a very important juncture. Friday's session closed at 3999 which was above the 200dma at 3981 and above the trendline at the same level.</p>
        <p>Resistance has been cleared and now only comes from higher timeframe references. Initial support is at 3928 and the gap, then last Tuesday's low of 3877.</p>
        <p>There are no exhaustion signals but a sell set up is now on bar 6. This could become active on Tuesday and Wednesday (bars 8 and 9) and suggests a pause/pullback could materialize.</p>
        <p>The trend is neutral/up. Price is above all major MAs and the bearish trendline.</p>
        <h3>Scenarios for Next Week</h3>
        <strong>Bullish</strong>
        <p>As mentioned earlier, there is a bullish bias due to the strong weekly close and the close above the daily 200ma and trendline. A test of weekly resistance at 4040-45 therefore looks likely. If this breaks, it should bring the monthly resistance of 4101 into play, with 4203 a stretched target above that.</p>
        <strong>Bearish</strong>
        <p>Exhaustion signals could trigger on Tuesday/Wednesday should there be a rally early in the week. Failure to break 4040-45 could flip the view bearish/neutral if it leads to a drop back under 3975-80 and the 200dma/trendline which is declining by around 3 points a day. Daily references of 3928 and 3877 could then be tested, with 3764 good weekly support and unlikely to be broken.</p>
        <strong>Conclusion</strong>
        <p>The S&P 500 is testing very important technical resistance and looks to be making a bullish breakout following the positive CPI report last week. One thing to note is that this is a rather obvious and closely watched move and it still needs to clear weekly resistance at 4040-45 and hold its gains to cement a bullish look.</p>
      </div>
    },
    {
      id: 15,
      title: 'BNB steady after a 7% plunge – bulls must now handle this fresh hurdle',
      slug: 'BNB steady after a 7% plunge – bulls must now handle this fresh hurdle',
      category: 'News',
      subCategory: ['Binanve Coin', 'BNB', 'Crypto'],
      description: <div className="blog-desc">
        <p>Bitcoin [BTC] dropped from $23k to below $22.5k on Tuesday, pulling the altcoin market into a short-term plunge. Binance Coin [BNB] declined by 9% in the same period, dropping from $323 to $293. </p>
      </div>,
      authorName: 'Suzuki Shillsalot',
      authorurl: 'https://ambcrypto.com/author/suzuki-shillsalot/',
      authorAvatar: 'https://ncx.cx/images/suzuki.jpeg',
      authorContent: 'Ser Suzuki Shillsalot has 8 years of experience working as a Senior Investigative journalist at The SpamBot Times. He completed a two-hour course in journalism from a popular YouTube video and was one of the few to give it a positive rating. Shillsalot writings mainly focus on shilling his favourite cryptos and trolling anyone who disagrees with him. P.S - There is a slight possibility the profile pic is AI-generated.',
      createdAt: 'Jan 25, 2023 - 12:54 AM',
      cover: 'https://ncx.cx/images/ncx-news6.png',
      content: <div className="blog-content">
        <p>Disclaimer: The information presented does not constitute financial, investment, trading, or other types of advice and is solely the writer’s opinion.</p>
        <p>BNB could oscillate in a range in the next few hours/days.</p>
        <p>Short-term holders saw a sharp decline in profits after Tuesday’s sudden drop.</p>
        <p>Bitcoin [BTC] dropped from $23k to below $22.5k on Tuesday, pulling the altcoin market into a short-term plunge. <a href="https://ambcrypto.com/?s=BNB" target="_blank" rel="noreferrer">Binance Coin [BNB]</a> declined by 9% in the same period, dropping from $323 to $293. </p>
        <p>However, bulls found steady support of around $297 and launched a price recovery. At press time, BNB’s value was $303.6o and could oscillate in the range below for the next few hours/days. </p>
        <h3>BNB remained steady at the $300 – $310 range</h3>
        <img src="https://ncx.cx/images/bnb_steady1.png" alt="Ethereum_metrics"/>
        <p>On the three-hour chart, the Relative Strength Index (RSI) rebounded from the 40 level and showed that buying pressure increased after dropping to the 40-mark.</p>
        <p>In addition, the Chaikin Money Flow (CMF) was rejected at the zero mark, forcing it into an uptick on the positive side, which indicated that the BNB market was strengthening.</p>
        <p>Therefore, BNB could oscillate between the demand zone ($293 – $300) and $310 in the next couple of hours. BNB has traded within this range since 21 January, only to witness a false breakout on 24 January. A retest of the $319 could also be likely if BTC reclaims the $23k zone.</p>
        <p>However, BNB could drop below the demand zone if BTC breaks below $22.5k, invalidating the bias described above. But such a drop could settle on the 100-period EMA (exponential moving average) or $286.9 level.</p>
        <p>Swing traders should therefore track RSI rejection at the 50-mark, CMF crossover, and BTC price action to minimize risk exposure.</p>
        <h3>Short-term holders’ profits tanked and sentiment flipped into negative</h3>
        <img src="https://ncx.cx/images/bnb_steady2.png" alt="Ethereum_metrics"/>
        <p>According to Santiment, BNB’s 30-day MVRV (market value to realized value) dropped from 36% to 6% at press time. Short-term holders’ profit tanked by 30% as BNB’s price correction wiped out recent gains.</p>
        <p>The price decline was also followed by an elevated negative weighted sentiment and a drop in demand in the derivatives market, as evidenced by the drop in the Funding Rate. However, the Funding Rate rested on the neutral line and any increment could boost BNB’s recovery.</p>
        <p>Alternatively, a further drop in the Funding Rate could set BNB to retest the demand zone below $300. Moreover, the active address in the past 24 hours also dropped, but there was a slight uptick at press time. Any further increase in active addresses could boost the recovery momentum.</p>
        <img src="https://ncx.cx/images/bnb_steady3.png" alt="Ethereum_metrics"/>
      </div>
    },
    {
      id: 16,
      title: 'US STOCKS-Wall Street gains as solid GDP data offsets signs of economic weakness',
      slug: 'US STOCKS-Wall Street gains as solid GDP data offsets signs of economic weakness',
      category: 'News',
      subCategory: ['US Stock', 'Markets', 'Economy'],
      description: <div className="blog-desc">
        <p>NEW YORK, Jan 26 (Reuters) - Wall Street advanced in choppy trading on Thursday as investors grappled with an onslaught of economic data and a string of mixed corporate earnings, all while eyeing the clock as it ticks down toward next week's Federal Reserve monetary policy meeting.</p>
      </div>,
      authorName: 'Stephen Culp',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Jan 25, 2023 - 12:54 AM',
      cover: 'https://ncx.cx/images/ncx-news5.png',
      content: <div className="blog-content">
        <p>(For a Reuters live blog on U.S., UK and European stock markets, click or type LIVE/ in a news window.)</p>
        <p>*</p>
        <p>Tesla leads S&P, Nasdaq higher</p>
        <p>*</p>
        <p>Jobless claims unexpectedly dip</p>
        <p>*</p>
        <p>IBM announces job cuts, asset divestment</p>
        <p>*</p>
        <p>Chevron to bump up share buybacks</p>
        <p>*</p>
        <p>Indexes up: Dow 0.26%, S&P 0.60%, Nasdaq 1.08%</p>
        <p>(New throughout; adds NEW YORK dateline; changes byline)</p>
        <p>By Stephen Culp</p>
        <p>NEW YORK, Jan 26 (Reuters) - Wall Street advanced in choppy trading on Thursday as investors grappled with an onslaught of economic data and a string of mixed corporate earnings, all while eyeing the clock as it ticks down toward next week's Federal Reserve monetary policy meeting.</p>
        <p>While all three major U.S. stock indexes were green, megacap momentum stocks, buoyed by Tesla Inc's earnings beat and upbeat sales forecast, helped put the Nasdaq in the lead.</p>
        <p>A raft of data showed the U.S. economy fared better in the fourth quarter than analysts expected, and the labor market remains tight, despite some signs of weakening demand. This is a double-edged sword for investors, as it could embolden the Fed to keep key interest rates at restrictive levels for longer.</p>
        <p>While financial markets have largely priced in a 25 basis point rate from the central bank next Wednesday, that sentiment is not unanimous.</p>
        <p>The data "suggests a 50-basis-point rate hike next week and 25 basis points in March, and then possibly an end to the tightening cycle," said Peter Cardillo, chief market economist at Spartan Capital Securities in New York. "I think the Fed wants to make sure that the markets don’t get ahead of themselves."</p>
        <p>"(The Fed tightening) hasn't worked its way through the system, but you’re beginning to see cracks in consumption and inflation," Cardillo added. "I'm sure the Fed is going to take note of that."</p>
        <p>Fourth-quarter earnings season has hit full stride, with more than one fourth of the companies in the S&P 500 having reported. Of those, 69% have beaten consensus estimates, up from 67% on Wednesday, according to Refinitiv.</p>
        <p>Analysts now see aggregate fourth quarter earnings falling 2.7%, worse than the 1.6% year-on-year decline seen on Jan. 1, but an improvement over the 3% annual decline as of Wednesday, per Refinitiv.</p>
        <p>The Dow Jones Industrial Average rose 87.4 points, or 0.26%, to 33,831.24, the S&P 500 gained 24 points, or 0.60%, to 4,040.22 and the Nasdaq Composite added 122.49 points, or 1.08%, to 11,435.85.</p>
        <p>Among the 11 major sectors of the S&P 500, energy led the percentage gainers, boosted by rising crude prices due to signs of increasing demand from China.</p>
        <p>Tesla Inc provided the most upside muscle to the S&P 500 and the Nasdaq, its shares jumping 9.4% in the wake of its earnings report.</p>
        <p>Chevron Corp announced it would triple its budget for share buybacks, which sent the oil major's stock up 4.4%.</p>
        <p>Among losers, IBM Corp fell 4.3% in the wake of its announcement that it would cut jobs divest some assets after falling short of its annual cash target.</p>
        <p>Southwest Airlines Co slid 4.0% after warning of current quarter losses.</p>
        <p>And despite forecasts of strong demand for air travel in 2023, the broader S&P 1500 Airlines index was off 1.6%.</p>
        <p>That might have something to do with Mastercard Inc's disappointing current quarter revenue forecast, cited an expected diminishing pent-up travel demand. The consumer payments company's shares were down 1.7%.</p>
        <p>Mastercard rival Visa Inc is due to post results after the bell, as is chip bellwether Intel Corp.</p>
        <p>Advancing issues outnumbered declining ones on the NYSE by a 1.72-to-1 ratio; on Nasdaq, a 1.18-to-1 ratio favored advancers.</p>
        <p>The S&P 500 posted 22 new 52-week highs and no new lows; the Nasdaq Composite recorded 89 new highs and 26 new lows (Reporting by Stephen Culp; Additional reporting by Johann M Cherian and Shreyashi Sanyal in Bengaluru; Editing by Aurora Ellis)</p>
      </div>
    },
    {
      id: 17,
      title: 'MarketsBitcoin, Ether fall as 2-year bond nears 15-year high',
      slug: 'Markets: Bitcoin, Ether fall as 2-year bond nears 15-year high',
      category: 'Market',
      subCategory: ['Market', 'Bitcoin', 'Crypto'],
      description: <div className="blog-desc">
        <p>Bitcoin and Ether fell in Wednesday morning trading in Asia along with all other top 10 non-stablecoin cryptocurrencies by market capitalization. Polygon saw the biggest drop, while BNB dropped the least.</p>
      </div>,
      authorName: 'Lachlan Keller',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 22, 2023 - 6:44 AM',
      cover: 'https://ncx.cx/images/bitcoin-fall.png',
      content: <div className="blog-content">
        <p>Bitcoin and Ether fell in Wednesday morning trading in Asia along with all other top 10 non-stablecoin cryptocurrencies by market capitalization. Polygon saw the biggest drop, while BNB dropped the least. A series of economic data in the U.S. released on Tuesday, including earnings reports from retail giants and the rising rate of some Treasury bills, weighed down on equity markets.</p>
        <h3>Fast facts</h3>
        <ul>
          <li>Bitcoin fell 1.6% in the last 24 hours to trade at US$24,442 as of 8 a.m. in Hong Kong, though it was still up 10% over the past week, <a href="https://coinmarketcap.com/" target="_blank" rel="noreferrer">according to CoinMarketCap</a>. Ethereum fell 2.6% to US$1,658, rising 6.5% over the past seven days.</li>
          <li>Polygon lost 6.1% to US$1.39, though it still booked 10% gains over the past seven days. BNB fell 1.2% to US$311.48, but was still up 5.2% for the week.</li>
          <li>The total crypto market capitalization dropped 1.8% to US$1.11 trillion at 8 a.m. in Hong Kong. The total trading volume over the past 24 hours was up by 3.3% to US$66.70 billion.</li>
          <li>U.S. equities closed lower on Tuesday, which was the first trading day of the week, as markets closed on Monday for President’s Day. The Dow Jones Industrial Average fell 2.1%, the S&P 500 Index dropped 2% and the Nasdaq Composite Index finished the day down 2.5%.</li>
          <li><a href="https://www.cnbc.com/2023/02/20/stock-market-today-live-updates.html" target="_blank" rel="noreferrer">The three key indices</a> posted the biggest single-day losses since Dec. 15 as the S&P 500 cut its year-to-date gains in half while the Dow Jones wiped out almost all of its 2023 gains.</li>
          <li>The two-year Treasury note yield rose to 4.7% on Tuesday, the highest level since 2007, while the 10-year Treasury yield climbed to 3.9%. Elevated levels in Treasury bond yields represent a larger upside risk for yields, placing downward pressure on equities.</li>
          <li>The U.S. Federal Reserve will release the minutes from its Jan. 31 to Feb. 1 policy meeting on Wednesday, which investors will look to for hints on how the central bank may act to tackle inflation.</li>
          <li>Retail giants Walmart Inc. and Home Depot Inc., released their holiday season earnings reports on Tuesday. Walmart’s revenue rose 7.3% to US$164 billion from the previous year, while Home Depot fell short of expectations, reporting US$35 billion in Q4 revenue. Both companies projected a challenging quarter ahead due to headwinds from supply chain shortages and ongoing inflation in the economy.</li>
          <li>Economic <a href="https://www.reuters.com/markets/us/us-business-activity-rebounds-eight-month-high-february-sp-global-survey-2023-02-21/" target="_blank" rel="noreferrer">data released on Tuesday</a> suggested that business activity in the U.S. is expanding. The S&P Global services purchasing managers index (PMI) rose to an 8-month high of 50.5 in February, up from 46.8 in the previous month, while the manufacturing PMI rose to a four-month high of 47.8 from 46.9.</li>
          <li>The Fed raised interest rates to the range of 4.5%-4.75% on Feb.1 to fight the inflation, the highest level since October 2007, with the latest Consumer Price Index data up 6.4% in January from a year ago, down from 6.5% in December and 7.1% in November.</li>
          <li>Analysts at the <a href="https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html?redirect=/trading/interest-rates/countdown-to-fomc.html" target="_blank" rel="noreferrer">CME Group predict</a> a roughly 75% chance that the Fed will raise rates by another 25 basis points next month.</li>
        </ul>
      </div>
    },
    {
      id: 18,
      title: 'Stocks moving in after-hours: Coinbase, Palo Alto Networks, Caesars, Toll Brothers',
      slug: 'Stocks moving in after-hours: Coinbase, Palo Alto Networks, Caesars, Toll Brothers',
      category: 'Market',
      subCategory: ['Market', 'Bitcoin', 'Crypto'],
      description: <div className="blog-desc">
        <p>Coinbase Global shares jumped after the crypto exchange’s fourth-quarter revenue of $629.1 million came in above Wall Street expectations of $581.1 million, according to data compiled by Bloomberg.</p>
      </div>,
      authorName: 'Ines Ferré',
      authorurl: 'https://www.yahoo.com/author/ines-ferre',
      authorAvatar: 'https://ncx.cx/images/Ines Ferré.png',
      authorContent: '',
      createdAt: 'Feb 22, 2023 - 2:25 AM',
      cover: 'https://ncx.cx/images/stocks-moving.png',
      content: <div className="blog-content">
        <h3>Coinbase (COIN)</h3>
        <p>Coinbase Global shares jumped after <a href="https://finance.yahoo.com/news/coinbase-earnings-revenue-losses-beat-expectations-as-volumes-plunge-to-cap-2022-215528339.html" target="_blank" rel="noreferrer">the crypto exchange’s fourth-quarter revenue of $629.1 million came in above Wall Street expectations of $581.1 million</a>, according to data compiled by Bloomberg .</p>
        <p>The bar was set relatively low for Coinbase amid a sharp fall in trading volumes last quarter following a decline in crypto prices, the collapse of FTX.com, and increased regulatory scrutiny.</p>
        <p>“Coinbase and crypto proved to be largely resilient in 2022 despite major shocks to the system,” read the company’s shareholder letter. “Idiosyncratic events throughout 2022 exacerbated already weak macro conditions.”</p>
        <p>Coinbase slashed about 20% of its staff in January. The company says it expects a decrease in expenses of more than 30% given its reduced headcount.</p>
        <p>Coinbase shares, which lost about two-thirds of their value over the last year, have rallied sharply since the start of 2023, up roughly 80%. The rise comes amid a resurgence in the price of Bitcoin (BTC-USD), which currently hovers above $24,300 per token.</p>
        <h3>Palo Alto Networks (PANW)</h3>
        <p>Palo Alto Networks’ total revenue <a href="https://finance.yahoo.com/news/palo-alto-networks-sees-strong-213114754.html" target="_blank" rel="noreferrer">for the fiscal second quarter 2023 grew 26% year over year to $1.7 billion</a>. Shares of the cybersecurity firm rallied in after hours.</p>
        <p>"We continue to see our teams execute well in the midst of macroeconomic challenges, helping customers consolidate their security architectures," said Nikesh Arora, chairman and CEO of Palo Alto Networks said in the company’s earnings release.</p>
        <p>Year-to-date shares of the Palo Alto-based firm are up about 20% amid an overall rise in tech equities. Cybersecurity firms held up relatively well last year compared to the rest of technology stocks, as demand for keeping networks safe grows amid rising geo-political tensions.</p>
        <h3>Caesars Entertainment (CZR)</h3>
        <p>Caesars Entertainment posted fourth quarter net revenue of $2.8 billion, in line with Wall Street expectations.</p>
        <p>The gambling company’s results were positively impacted by a continued consumer shift towards spending in services and experiences, from goods.</p>
        <p>"Our fourth quarter delivered another set of strong operating results as both our Las Vegas and Regional segments each set a new fourth quarter record for Adjusted EBITDA,” Tom Reeg, CEO of Caesars Entertainment said in the company’s earnings release.</p>
        <h3>Toll Brothers (TOL)</h3>
        <p>Toll Brothers <a href="https://finance.yahoo.com/news/toll-brothers-reports-fy-2023-213000282.html" target="_blank" rel="noreferrer">posted first-quarter earnings per share of $1.70 compared to $1.24 for the same period last year</a>. The home builder also gave upbeat guidance after the housing market started to slow down last year.</p>
        <img src="https://ncx.cx/images/stocks-moving.png" alt="ncx-stocks"/>
        <p>“Since the start of the calendar year, we have seen a marked increase in demand beyond normal seasonality as buyer confidence appears to be improving,” Douglas Yearley, Jr., chairman and CEO of Toll Brothers, said in the company's earnings release.</p>
        <p>Toll Brothers reaffirmed its full-year 2023 guidance for an adjusted gross margin of 27% and an earnings per share range between $8.00 and $9.00.</p>
        <p>U.S. existing home sales fell to the lowest level in more than 12 years in January, <a href="https://finance.yahoo.com/news/u-existing-home-sales-fall-150228036.html" target="_blank" rel="noreferrer">according to a report released by the National Association of Realtors</a>. However the pace of decline slowed, signaling the housing market slowdown could could soon be bottoming.</p>
      </div>
    },
    {
      id: 19,
      title: 'Bitcoin exceeds 154,000 inscriptions in a month as Litecoin Ordinals launches',
      slug: 'Bitcoin exceeds 154,000 inscriptions in a month as Litecoin Ordinals launches',
      category: 'News',
      subCategory: ['Bitcoin', 'Litecoin', 'Crypto'],
      description: <div className="blog-desc">
        <p>The Bitcoin Network has recorded over 154,554 inscriptions since the launch of Bitcoin Ordinals on Jan. 21, a fork that enables digital assets to be inscribed on satoshis (sats), which is the lowest denomination of a Bitcoin.</p>
      </div>,
      authorName: 'Zoltan Vardai',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 21, 2023 - 7:05 AM',
      cover: 'https://ncx.cx/images/bitcoin-inscriptions.png',
      content: <div className="blog-content">
        <p>The <a href="https://forkast.news/headlines/bitcoin-gains-returns-to-us25000/" target="_blank" rel="noreferrer">Bitcoin</a> Network has recorded over 154,554 inscriptions since the launch of Bitcoin Ordinals on Jan. 21, a fork that enables digital assets to be inscribed on satoshis (sats), which is the lowest denomination of a Bitcoin.</p>
        <h3>Fast facts</h3>
        <ul>
          <li><a href="https://docs.ordinals.com/" target="_blank" rel="noreferrer">Ordinal Inscriptions</a> are similar to <a href="https://forkast.news/video-audio/what-else-can-you-do-with-an-nft/" target="_blank" rel="noreferrer">non-fungible tokens (NFTs)</a> on Bitcoin, as they allow users to mint images, videos, and even video games on satoshis, which benefit from the inherent immutability of the network.</li>
          <li>The upgrade was developed in the past year by software engineer Caser Rodarmor and relies on Bitcoin’s SegWit and <a href="https://forkast.news/video-audio/taproot-unlocks-bitcoin-mintable-aims-big/" target="_blank" rel="noreferrer">Taproot</a> upgrades to function.</li>
          <li>As interest in NFTs on proof-of-work blockchains strengthens, software engineer Anthony Guerrera launched Ordinals on the Litecoin network on Feb.19, motivated by the 22 Litecoin (US$2,066) bounty posted by pseudonymous Twitter user Indigo Nakamotoist.</li>
          <li>Guerrera told <a href="https://decrypt.co/121789/litecoin-ordinals-inscriptions-nfts-blockchain" target="_blank" rel="noreferrer">Decrypt</a> that Litecoin was the only other blockchain that could support Ordinals because it also included Bitcoin’s SegWit and Taproot upgrades.</li>
          <li>Bitcoin was down 0.56% in the 24 hours to 7:45 p.m. Hong Kong time, trading at US$24,686. Litecoin was down 3.76% trading at US$93.86, according to <a href="https://coinmarketcap.com/" target="_blank" rel="noreferrer">CoinMarketCap</a>.</li>
        </ul>
      </div>
    },
    {
      id: 20,
      title: 'Bitcoin gains, returns to US$25,000; XRP biggest winner in top 10 cryptos',
      slug: 'Bitcoin gains, returns to US$25,000; XRP biggest winner in top 10 cryptos',
      category: 'Market',
      subCategory: ['Bitcoin', 'Dollars', 'Crypto'],
      description: <div className="blog-desc">
        <p>Bitcoin and Ether prices rose in Tuesday afternoon trade in Asia, while all other top 10 non-stablecoin cryptocurrencies were mixed. XRP led gains at 2.37%, while Solana and Polygon dropped saw the largest declines.</p>
      </div>,
      authorName: 'Pradipta Mukherjee',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 21, 2023 - 9:15 AM',
      cover: 'https://ncx.cx/images/pizza-bitcoin.png',
      content: <div className="blog-content">
        <p>Bitcoin and Ether prices rose in Tuesday afternoon trade in Asia, while all other top 10 non-stablecoin cryptocurrencies were mixed. XRP led gains at 2.37%, while Solana and Polygon dropped saw the largest declines. Bitcoin returned to the US$25,000 price level a day after it <a href="https://forkast.news/headlines/bitcoin-surpasses-visas-market-cap-11th-largest-asset-in-the-world/" target="_blank" rel="noreferrer">became the 11th largest asset in the world</a>, surpassing payments giant Visa’s market cap.</p>
        <h3>Fast facts</h3>
        <ul>
          <li>Bitcoin (BTC) gained 1.97% to US$25,002 in 24 hours to 4 p.m. in Hong Kong, and has gained 14.79% on the week. Ether inched up 0.46% to US$1,704, gaining 13.2% over the last seven days, according to CoinMarketCap data.</li>
          <li>“BTC repeated its March 2020 downside wicking depth below the 200-day MA (moving average),” <a href="https://twitter.com/rektcapital/status/1627011221097525248/photo/1" target="_blank" rel="noreferrer">wrote</a> pseudonymous crypto analyst Rekt Capital, adding that Bitcoin will rally once it reclaims the 200-day MA as support, which is around US$25,000.</li>
          <li>XRP rose the most, gaining 2.37% to US$0.3998, and strengthened 7.85% on the week. Ripple Labs, which developed the Ripple payment network powered by XRP, <a href="https://twitter.com/Ripple/status/1627471853412315137?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1627471853412315137%7Ctwgr%5E01a487764bae3c39b41dde8451bbd21dfb541c8e%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fu.today%2Fripple-on-hiring-spree-as-focus-on-utility-broadens" target="_blank" rel="noreferrer">said on Monday</a> it is hiring engineers and has about <a href="https://ripple.com/careers/all-jobs/" target="_blank" rel="noreferrer">75 open positions</a>.</li>
          <li>Solana dropped the most among top 10 non-stablecoin cryptos, by 1.78% to US$26, but gained 23.84% in the last seven days. Polygon’s Matic fell 1.46% to US$1.47, but strengthened 24.54% on the week.</li>
          <li>Asian markets were mixed on Tuesday. The Shenzhen Component Index gained 0.12% while the Shanghai Composite strengthened by 0.49%.</li>
          <li>“While the current macroeconomic environment may cast a shadow over global exports, and the Fed may still continue with its rate hikes, China’s domestic demand remains robust,” Jack Lee, China A-shares fund manager of Schroders, said.</li>
          <li>Hong Kong’s <a href="https://www.hsi.com.hk/eng" target="_blank" rel="noreferrer">Hang Seng</a> Index dropped 1.71% at Tuesday’s close while Japan’s <a href="https://indexes.nikkei.co.jp/en/nkave" target="_blank" rel="noreferrer">Nikkei 225</a> lost 0.21%.</li>
          <li>European shares declined in anticipation of Eurozone manufacturing and services activity data and the ZEW economic sentiment index. Germany’s DAX 40 retreated 0.2% while Stoxx 600 fell 0.3%.</li>
          <li>Investors are anticipating the minutes of the meeting of U.S. Federal Reserve, which would shed light on the direction of the economy and interest rates. The central bank has been consistently increasing interest rates since last year and is expected to raise rates by 25 basis points next month. Currently, interest rates in the world’s largest economy stand at 4.5% to 4.75%, and Fed officials had earlier said that may increase to as high as 5%.</li>
        </ul>
      </div>
    },
    {
      id: 21,
      title: 'Bitcoin Layer 2 Stacks Networks STX Token Spikes 50% as Ordinals Boom',
      slug: 'Bitcoin Layer 2 Stacks Networks STX Token Spikes 50% as Ordinals Boom',
      category: 'News',
      subCategory: ['Bitcoin', 'Ordinal Boom', 'STX Token'],
      description: <div className="blog-desc">
        <p>STX, the native token of Bitcoin layer 2 Stacks Network, is surging as the recent arrival of the Ordinals protocol has unleashed a new narrative of non-fungible tokens (NFTs) and smart contracts on the Bitcoin blockchain.</p>
      </div>,
      authorName: 'Omkar Godbole',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 21, 2023 - 9:15 AM',
      cover: 'https://ncx.cx/images/stx-token.webp',
      content: <div className="blog-content">
        <p>STX, the native token of Bitcoin layer 2 Stacks Network, is surging as the recent arrival of the <a href="https://www.coindesk.com/business/2023/02/07/the-ordinals-protocol-has-caused-a-resurgence-in-bitcoin-development/" target="_blank" rel="noreferrer">Ordinals protocol</a> has unleashed a new narrative of non-fungible tokens (NFTs) and smart contracts on the Bitcoin blockchain.</p>
        <p>Stacks Network is a Bitcoin layer 2 for smart contracts focused on establishing the world's biggest and oldest blockchain programmable – a dominant feature of Ethereum and its competitors like Solana, which currently account for a majority of global NFT and decentralized finance (DeFi) activity.</p>
        <p>Stacks has a separate ledger to store data outside the Bitcoin blockchain, allowing developers to build applications similar to those on Ethereum and Solana. STX, known for being the first token offering qualified by the U.S. Securities and Exchange Commission (SEC), is used to incentivize Stacks miners and participants in the <a href="https://www.coindesk.com/tech/2022/12/29/step-aside-ethereum-blockchain-project-stacks-wants-to-bring-smart-contracts-to-bitcoin/" target="_blank" rel="noreferrer">proposed</a> Stacks bitcoin (sBTC) system, which is aimed at making bitcoin fully programmable.</p>
        <p>The token has risen nearly 50% to $0.60 in the past 24 hours, taking the month-to-date gain to 125%. Prices were quoted as high as $0.84 early Monday, the highest since May, <a href="https://www.coindesk.com/price/stacks/" target="_blank" rel="noreferrer">CoinDesk</a> data show. Meanwhile, market leader bitcoin (BTC) has risen just 6% this month.</p>
        <p>The outsized move comes as the crypto community goes gaga over Ordinals, which went live on Jan. 21, allowing users to inscribe references to digital art into small transactions on the Bitcoin blockchain. In other words, Ordinals are like drawing artwork directly on satoshi (sats), the lowest denomination of a bitcoin, while NFTs on Ethereum are analogous to an authenticity certificate from the creator that is separate from ether.</p>
        <p>The number of newly created Ordinals or NFTs inscribed directly into Satoshis on Bitcoin crossed the 100,000 mark last week, causing network congestion on the Bitcoin blockchain.</p>
        <p>Per Muneeb Ali, co-founder of Stacks, the growing popularity of Ordinals would bode well for layer 2 solutions.</p>
        <p>"Ordinals on Bitcoin L1 are complementary to Bitcoin NFTs on L2s like Stacks. Ordinals have a natural limit on the L1 scale, and L2s provide a clear scalability path," <a href="https://twitter.com/muneeb/status/1627501257324654592" target="_blank" rel="noreferrer">Ali tweeted</a> Monday. "Wallets like Xverse and & Hiro are amongst the first to release or work on Ordinals."</p>
        <p>Activity in NFTs on Stacks has picked up in the wake of the Ordinals' rising popularity. Data from DappRadar shows trading volume on Gamma.io, a Stack-based Bitcoin NFT marketplace, has increased by more than 1,000% in the past 30 days. Meanwhile, volumes on Megapont have increased by 125%. Per data tweeted by Ali, there is an active community of artists and creators on Stacks and people have minted 650K Bitcoin NFTs on the layer 2 solution.</p>
        <p>"Ordinals NFT on Bitcoin blockchain has been very successful, leading to a general Bitcoin NFT fever," CK Cheung, investment analyst at DeFiance Capital, said. "Stacks is a beneficiary of this as it is an L2 supporting smart contracts built on top of the Bitcoin Network. People could mint new Bitcoin NFTs on top of Stacks with a lower cost and higher speed."</p>
        <p>Last week, the bitcoin-focused Web 3 wallet Xverse rolled out support for Ordinals. At the same time, Hiro Wallet added support for inscriptions on its testnet, with Ali describing the same as Metamask for Bitcoin.</p>
        <p>Early this month, <a href="http://gamma.io/" target="_blank" rel="noreferrer">Gamma.io</a> unveiled a no-code creator platform for NFTs on native Bitcoin through the use of ordinals, opening doors for users to create inscriptions without having to run a full Bitcoin node or write any code. Gamma's new launch essentially made Ordinals accessible to everyone.</p>
        <p>"Ordinals (inscriptions) are similar to NFTs, are digital assets inscribed on the smallest value of Bitcoin (satoshis). This is now opening up the use case for NFTs and merging them with the Bitcoin network security layer," Markus Thielen, head of research and strategy at crypto services provider Matrixport, said in an email while pointing to the upcoming "Building on Bitcoin Hackathon" as the <a href="https://twitter.com/clarity_lang/status/1626661763671371779" target="_blank" rel="noreferrer">key event</a> to watch out for in the short term.</p>
        <p>The hackathon, scheduled from Feb. 24 to March 7, will have participants build their own smart contracts using Clarity, programming language for writing smart contracts on the Stacks 2.0 blockchain.</p>
        <p>"This virtual hackathon is driving a lot of attention as Stacks uses 'Clarity,' a programming language for writing smart contracts that might be easier to learn than Solidity. The hackathon will reveal in the next two weeks if everybody can now build smart contracts without too much technical knowledge," Thielen noted.</p>
        <p>Finally, on top of all this, STX is seemingly drawing a haven bid, according to Dubai-based crypto analyst and trader Reetika Malik.</p>
        <p>"STX is also one of the rare tokens approved by the SEC. So in these uncertain times when the regulator is going after a lot of crypto companies, an SEC-approved token also sounds like a good thing to the market," Malik said.</p>
      </div>
    },
    {
      id: 22,
      title: 'Bitcoin price nears $25,000 as crypto market reaches $1.17tn',
      slug: 'Bitcoin price nears $25,000 as crypto market reaches $1.17tn',
      category: 'News',
      subCategory: ['Bitcoin', 'Ordinal Boom', 'STX Token'],
      description: <div className="blog-desc">
        <p>Bitcoin is closing in on $25,000 per coin as the entire cryptocurrency market capitalisation rose to $1.17tn.</p>
      </div>,
      authorName: 'Brian McGleenon',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 20, 2023 - 6:55 AM',
      cover: 'https://ncx.cx/images/ncx-blog-22.webp',
      content: <div className="blog-content">
        <p>Bitcoin is closing in on $25,000 per coin as the entire <a href="https://uk.yahoo.com/topics/crypto/" target="_blank" rel="noreferrer">cryptocurrency</a> market capitalisation rose to $1.17tn.</p>
        <p>Bitcoin (BTC-USD), the world's largest digital asset by market capitalisation was trading at $24,500 on Monday, up 12.4% in the past week.</p>
        <p>The second largest cryptocurrency ethereum <a href="https://uk.finance.yahoo.com/quote/ETH-USD" target="_blank" rel="noreferrer">(ETH-USD)</a> stood at $1,689 as of the time of writing, up 11.7% in the last seven days.</p>
        <p>Bitcoin shot above $25,000 late on Sunday evening UK time as Asia began the working week, revealing a positive price-movement signal.</p>
        <p>Other cryptocurrencies such as Solana <a href="https://finance.yahoo.com/quote/SOL-USD/" target="_blank" rel="noreferrer">(SOL-USD)</a>, Polkadot <a href="https://finance.yahoo.com/quote/DOT-USD/" target="_blank" rel="noreferrer">(DOT-USD)</a>, and Polygon <a href="https://finance.yahoo.com/quote/MATIC-USD/" target="_blank" rel="noreferrer">(MATIC-USD)</a> also experienced gains, with increases of 20%, 19%, and 18.5% in the past week respectively.</p>
        <p>Joe DiPasquale, CEO of crypto fund manager BitBull Capital, told Coindesk that $23,000 was bitcoin’s new support level, adding that the coming week would decide whether the digital asset would hit $30,000 or not.</p>
        <p>He said: “It was critical for bitcoin to reclaim $23,000 if we were to see more upside action.</p>
        <p>“With February coming to an end, another bullish monthly close may be what the market needs for bitcoin to test $30,000.”</p>
        <p>On Monday morning bitcoin trader Matthew Hyland tweeted: "Bitcoin lower time frame, really hard to tell if the big breakout above $25.2k comes right here."</p>
        <p>Hyland tweeted a chart that suggested bitcoin would drop to a low of around $22,000 before rebounding above $25,000.</p>
        <p>Bitcoin is heading into a quiet week in terms of macroeconomic triggers that could affect the price. There are a few US data releases, such as the Personal Consumption Expenditures (PCE) Index, coming up.</p>
        <p>All eyes are on the next Federal Open Market Committee (FOMC) meeting being held on 15 and 16 March where a decision for the next benchmark interest rate hike will be made. Futures markets are pricing in a less hawkish Federal Reserve, forecasting a 25 basis point rate hike at the meeting in March.</p>
        </div>
    },
    {
      id: 23,
      title: 'Bitcoin dips below US$24,000 to start the trading week in Asia',
      slug: 'Bitcoin dips below US$24,000 to start the trading week in Asia',
      category: 'Market',
      subCategory: ['Bitcoin', 'Trading', 'Asia'],
      description: <div className="blog-desc">
        <p>Bitcoin fell below US$24,000 in a mixed morning for the top 10 non-stablecoin cryptocurrencies by market capitalization on Monday in Asia. Solana posted the most gains in that list while leading memecoin Dogecoin dropped the most.</p>
      </div>,
      authorName: 'Lachlan Keller',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 20, 2023 - 8:39 AM',
      cover: 'https://ncx.cx/images/ncx-blog-23.webp',
      content: <div className="blog-content">
        <p>Bitcoin fell below US$24,000 in a mixed morning for the top 10 non-stablecoin cryptocurrencies by market capitalization on Monday in Asia. Solana posted the most gains in that list while leading memecoin Dogecoin dropped the most.</p>
        <h3>Fast Facts</h3>
        <ul>
          <li>Bitcoin fell 2.76% in the last 24 hours to trade at US$23,927 as of 9:15 a.m. in Hong Kong, but was still up 11.9% over the past week, according to CoinMarketCap. Ethereum lost 0.97% to US$1,661, and has gained 11.2% over the past seven days.</li>
          <li>Solana was up 4.6% to US$24.62, a weekly gain of 15.6%. The network has been holding its “Build through the Bear” <a href="https://solana.com/grizzlython" target="_blank" rel="noreferrer">hackathon this month</a>, which invites community members to build on the blockchain, offering US$50,000 in USDC for the top prize. The hackathon ends on March 14.</li>
          <li>Dogecoin fell 2% to US$0.087, but was still trading up 6.6% over the past seven days. XRP slipped 1.7% to US$0.38, though was still trading 3% higher for the past week.</li>
          <li>The total crypto market capitalization reached US$1.13 trillion overnight, the highest since August 2022, before falling to US$1.12 trillion at 9:15 a.m. in Hong Kong. The total trading volume over the past 24 hours was up by 14.4% to US$54.9 billion.</li>
          <li>U.S. equities had a mixed day of trading on Friday. The Dow Jones Industrial Average rose 0.4%, but the S&P 500 Index fell 0.3%, and the Nasdaq Composite Index closed the day down 0.6%. Wall Street will be closed on Monday for Presidents’ Day.</li>
          <li>Many major U.S. retailers are slated to release their holiday season <a href="https://www.cnbc.com/2023/02/19/walmart-home-depot-earnings-preview.html" target="_blank" rel="noreferrer">earnings this week</a>, starting with Walmart Inc. and Home Depot Inc. on Tuesday.</li>
          <li>The earning reports are set to come amid growing recessionary concerns in the U.S., as the Federal Reserve has raised interest rates from near zero to 4.5% to 4.75% to tamp down on inflation. While some have criticized the Fed for raising rates too sharply, the central bank maintains it will be able to achieve a “<a href="https://www.bloomberg.com/news/articles/2023-02-10/fed-s-harker-favors-rates-above-5-says-soft-landing-odds-grow" target="_blank" rel="noreferrer">soft landing</a>” to bring down inflation without triggering a recession.</li>
          <li>The latest Consumer Price Index data showed that inflation was up 6.4% in January from a year ago, down from 6.5% in December and 7.1% in November.</li>
          <li>Analysts at the <a href="https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html?redirect=/trading/interest-rates/countdown-to-fomc.html" target="_blank" rel="noreferrer">CME Group predict</a> an 85% chance that the Fed will raise rates by another 25 basis points next month.</li>
        </ul>
        </div>
    },
    {
      id: 24,
      title: 'Bitcoin rises above US$23,000 after its first weekly ‘death cross’',
      slug: 'Bitcoin rises above US$23,000 after its first weekly ‘death cross’',
      category: 'Market',
      subCategory: ['Bitcoin', 'Market wrap', 'Asia'],
      description: <div className="blog-desc">
        <p>Bitcoin, the world’s largest cryptocurrency by market capitalization, rose 8.86% in the week from Feb. 10 to Feb. 17, trading at US$23,764  at 7 p.m. on Friday in Hong Kong. Ether strengthened 7.86% in the same period to change hands at US$1,665.</p>
      </div>,
      authorName: 'Zoltan Vardai',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 17, 2023 - 5:27 AM',
      cover: 'https://ncx.cx/images/ncx-blog-24.webp',
      content: <div className="blog-content">
        <p><a href="https://forkast.news/headlines/bitcoin-changes-little-as-u-s-inflation-cools/" target="_blank" rel="noreferrer">Bitcoin</a>, the world’s largest cryptocurrency by market capitalization, rose 8.86% in the week from Feb. 10 to Feb. 17, trading at US$23,764  at 7 p.m. on Friday in Hong Kong. <a href="https://forkast.news/what-is-ethereum-and-how-can-it-become-the-future-of-blockchain/" target="_blank" rel="noreferrer">Ether</a> strengthened 7.86% in the same period to change hands at US$1,665.</p>
        <img src="https://ncx.cx/images/ncx-blog-24-1.webp" alt="ncx-blog"/>
        <p>Bitcoin saw this week’s second-biggest gains among the 10 largest non-stablecoin cryptocurrencies, followed by Polygon’s Matic that rose 13.33% to US$1.44.</p>
        <p>“I am expecting a slightly sideways move. The market has to calm a little before any further impulses,” wrote Aziz Kenjaev, head of partnerships at decentralized crypto derivatives exchange <a href="https://gammax.exchange/" target="_blank" rel="noreferrer">GammaX</a>, in a LinkedIn response to Forkast.</p>
        <p>“There is massive support and a strong buy orders wall which might push Bitcoin further towards US$29,000-30,000 in early March. However, there also is a strong support zone at US$22,250. If that support withholds, we might see another impulse toward US$25,300,” wrote Kenjaev, adding that “there will be more speculations over the SEC and Paxos, so keep your newsfeed open.”</p>
        <p>Kenjaev sees less correlation between traditional and crypto markets, as prices are mainly driven by industry developments.</p>
        <p>“The cryptocurrency market is more focused on developments inside its own ecosystem and the connectivity of this decentralized ecosystem to the centralized one. Hence, every development related to the regulators vs crypto companies, especially U.S. regulators, does and will affect the crypto market,” wrote Kenjaev.</p>
        <p>“Be mindful of the release, testing, deployment and adoption of central bank digital currencies (CBDCs). The major macroeconomic data I would like to see is the national debt. There has been a lot of money spent in recent years and governments will be looking to recover it,” wrote Kanjaev, adding that “the government knows that there is a good portion of funds floating in Web3.”</p>
        <p>The global crypto market cap stood at US$1.09 trillion on Friday at 7 p.m. in Hong Kong, up 6.86% from US$1.02 trillion a week ago, according to CoinMarketCap data. Bitcoin’s US$458 billion market cap represented 42.2% of the market, while Ether accounted for 18.7%.</p>
        <h3>Biggest Gainers</h3>
        <p>Astar Network’s Astr token was this week’s biggest gainer among the top 100 coins by market capitalization listed on CoinMarketCap. Astar Network is a multi-chain smart contract network focused on Web3 innovation.</p>
        <p>Astr rallied 51.72% this past week to change hands at US$0.1099 after the announcement of its partnership with Sony to launch a Web3 incubation program to support developers building Web3 projects.</p>
        <p>Decentralized gaming developer <a href="https://treasure.lol/" target="_blank" rel="noreferrer">Treasure</a>’s Magic token was the second biggest gainer, up 44.94% to trade at US$2.18. The token started its rally on Feb. 13, after the company <a href="https://twitter.com/Treasure_DAO/status/1616558704299761664" target="_blank" rel="noreferrer">launched</a> a new Game Builders Program supported by Arbitrum to incentivize high-potential games building on Treasure, by offering developers access to open-source code as well as advisory and marketing support.</p>
        <h3>Next Week</h3>
        <p>For the first time in Bitcoin’s history, a “death cross” appeared on its weekly chart. This meant that the 50-week small moving average (SMA), a key technical indicator, stood below the 200-week SMA for the first time.</p>
        <p>Kasper Vandeloock, chief executive officer of quantitative trading firm <a href="https://www.musca.capital/" target="_blank" rel="noreferrer">Musca Capital</a>, said that the death cross “gives very little input,” since it only shows that Bitcoin price performed better in the last 50 weeks compared to the last 200 weeks.</p>
        <p>Bitcoin prices charted another significant formation, with its first “golden cross” on the daily timeframe since the beginning of the crypto bear market in November 2021. A golden cross means that the 50-day SMA is above the 200-day SMA. Historically, Bitcoin has charted multiple golden crosses in previous cycles before a sustained rally.</p>
        <p>“A record high 66.9% of circulating BTC has not moved in over a year,” tweeted Joe Burnett, head analyst at Blockware Solutions, adding that “Bitcoin bear markets end when there are no sellers remaining, the price slowly starts drifting up due to (any) marginal buyer, and the next wave of adopters learn BTC is the least uncertain money.”</p>
        <p>According to Kenjaev, this suggests that Bitcoin holders were more conservative. “They are waiting for the right time to sell and are hedging over the upcoming recession. The state of the global economic conditions now leads to more uncertainty than during the Covid-19 pandemic. The reason why the situation is not changing with current global developments is that investors do not see the same scenario happening. Current market conditions look risk-attractive and favorable, although it’s very early to call it the next bull run. We shall at the very least wait for improvements from regulatory bodies globally.”</p>
        <p>“Some patterns suggest that an ideal scenario for Bitcoin would be to drop near US$19,500-19,300,” he added, hoping for “a decline to US$19,500 and a jump to US$30,000.”</p>
        <p>On Feb. 12, Blockstream chief executive officer Adam Back <a href="https://twitter.com/adam3us/status/1624844122363244544" target="_blank" rel="noreferrer">predicted</a> that Bitcoin would exceed US$200 million in market cap, bringing BTC prices to US$10 million by 2032.</p>
        </div>
    },
    {
      id: 25,
      title: 'Binance secretly moved $400 million from its US partner to a trading firm managed by the crypto giants boss CZ, report says',
      slug: 'Binance secretly moved $400 million from its US partner to a trading firm managed by the crypto giants boss CZ, report says',
      category: 'Market',
      subCategory: ['Binance', 'Crypto Giant', 'Trading'],
      description: <div className="blog-desc">
        <p>Binance secretly moved $400 million from its US partner to a trading firm owned by boss Changpeng Zhao, according to Reuters.</p>
      </div>,
      authorName: 'George Glover',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 17, 2023 - 9:21 AM',
      cover: 'https://ncx.cx/images/ncx-blog-25.webp',
      content: <div className="blog-content">
        <p>Binance sent $400 million to a supposedly independent US trading firm managed by CEO Changpeng Zhao, according to Reuters.REUTERS/Darrin Zammit Lupi</p>
        <ul>
          <li>Binance secretly moved $400 million from its US partner to a trading firm owned by boss Changpeng Zhao, according to Reuters.</li>
          <li>A US-based executive called the transfers "unexpected", saying that "no one mentioned them".</li>
          <li>It's not clear why the money was sent or if any of the funds belonged to US customers.</li>
        </ul>
        <p>Binance secretly moved large sums of money from its supposedly independent US partner to a company managed by the crypto giant's boss Changpeng Zhao, according to <a href="https://www.reuters.com/technology/crypto-giant-binance-moved-400-million-us-partner-firm-managed-by-ceo-zhao-2023-02-16/" target="_blank" rel="noreferrer">Reuters.</a></p>
        <p>The publication said Thursday that Binance's US partner started transferring money to Merit Peak in 2020 and sent the trading firm over $400 million in the first quarter of 2021, citing banking records and company messages.</p>
        <p>Merit Peak is a market-maker trading firm owned by Binance CEO Zhao, who's often referred to by his initials CZ.</p>
        <p>Binance claims that Merit Peak and Binance's US partner Binance.US operate independently from the global exchange, which CZ co-founded in 2017.</p>
        <p>But Binance.US executives didn't know that it had been sending money to Merit Peak and were concerned when this came to light, according to company messages seen by Reuters.</p>
        <p>Then-CEO Catherine Coley reportedly asked a Binance executive for an explanation in late 2020, calling the transfers "unexpected" and saying that "no one mentioned them".</p>
        <p>The Securities and Exchange Commission has previously probed ties between Binance.US, Merit Peak, and another CZ-owned trading firm called Sigma Chain AG, according to a Wall Street Journal report published in February 2022.</p>
        <p>Binance.US did not immediately respond to Insider's request to comment.</p>
        <p>It's not clear why the money was sent from Binance.US to Merit Peak or if any of the funds belonged to US customers.</p>
        <p>Reuters reported in November that FTX founder <a href="https://markets.businessinsider.com/news/currencies/ftx-crash-client-funds-alameda-binance-sbf-sec-cftc-probe-2022-11?utm_medium=referral&utm_source=yahoo.com" target="_blank" rel="noreferrer">Sam Bankman-Fried had used at least $4 billion of customers' money to prop up Alameda Research</a>, a supposedly independent trading firm that he managed.</p>
        <p>FTX had already filed for bankruptcy when that story broke but Bankman-Fried was subsequently arrested in the Bahamas and extradited to the US to face eight counts of fraud.</p>
        <p>Read the original article on <a href="https://www.businessinsider.com/binance-crypto-exchange-secret-transfer-changpeng-zhao-cz-ftx-alameda-2023-2" target="_blank" rel="noreferrer">Business Insider</a></p>
        </div>
    },
    {
      id: 26,
      title: 'Top 5 China Stocks To Buy And Watch Now',
      slug: 'Top 5 China Stocks To Buy And Watch Now',
      category: 'Market',
      subCategory: ['Binance', 'Crypto Giant', 'Trading'],
      description: <div className="blog-desc">
        <p>China is the world's No. 2 economy and home to dozens of companies that trade in the U.S. Right now, Pinduoduo parent PDD Holdings (PDD), Canadian Solar (CSIQ), BYD (BYDDF), Tencent Holdings (TCEHY) and Baidu (BIDU) are China stocks worth watching or potentially buying.</p>
      </div>,
      authorName: 'ED CARSON',
      authorurl: 'https://www.investors.com/author/carsone/',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 17, 2023 - 9:21 AM',
      cover: 'https://ncx.cx/images/ncx-blog-26.webp',
      content: <div className="blog-content">
        <p>China is the world's No. 2 economy and home to dozens of companies that trade in the U.S. Right now, Pinduoduo parent PDD Holdings (<a href="https://research.investors.com/quote.aspx?symbol=PDD">PDD</a>), Canadian Solar (<a href="https://research.investors.com/quote.aspx?symbol=CSIQ" target="_blank" rel="noreferrer">CSIQ</a>), BYD (<a href="https://research.investors.com/quote.aspx?symbol=BYDDF" target="_blank" rel="noreferrer">BYDDF</a>), Tencent Holdings (<a href="https://research.investors.com/quote.aspx?symbol=TCEHY" target="_blank" rel="noreferrer">TCEHY</a>) and Baidu (<a href="https://research.investors.com/quote.aspx?symbol=BIDU" target="_blank" rel="noreferrer">BIDU</a>) are China stocks worth watching or potentially buying.</p>
        <p>It's been a tough couple of years for Chinese stocks. The Covid pandemic, and Beijing's zero-Covid policy, have slammed the economy. Meanwhile, regulatory crackdowns vs. technology and data-centric firms such as <a href="https://www.investors.com/research/alibaba-stock-buy-now/" target="_blank" rel="noreferrer">Alibaba</a> (<a href="https://research.investors.com/quote.aspx?symbol=BABA" target="_blank" rel="noreferrer">BABA</a>), Tencent (<a href="https://research.investors.com/quote.aspx?symbol=TCEHY" target="_blank" rel="noreferrer">TCEHY</a>) and NetEase (<a href="https://research.investors.com/quote.aspx?symbol=NTES" target="_blank" rel="noreferrer">NTES</a>) have been a major headwind. The tech crackdown seems to have eased.</p>
        <p>U.S. tensions are a concern. In recent months, the White House has barred shipments of key chip technology to China, adding to tariffs and other curbs on Chinese goods. </p>
        <p>Meanwhile, China has rolled back Covid restrictions significantly. With an end to lockdowns and other severe controls, a massive wave of infections took hold. But investors are looking beyond to brighter days ahead. With China New Year holidays out of the way, will the Chinese economy finally rebound?</p>
        <p>While the current top China stocks to buy or watch are dominated by e-commerce plays, don't forget EV startups such as Nio (NIO) and Li Auto (LI). Like global giant BYD (BYDDF), all are taking on Tesla (TSLA) in the world's largest EV market.</p>
        <h3>Tencent Stock</h3>
        <p>Tencent is China's messaging and gaming giant, with major payments exposure and with key holdings in an array of Chinese companies, including JD.com.</p>
        <p>Earnings have declined for the past four quarters, and revenue for the past two, as a big crackdown on internet platforms and new mobile games took a toll. Earnings growth is expected to return in 2023.</p>
        <p>JD.com stock peaked at 94.46 in February 2021, tumbling to a five-year low of 23.52 on Oct. 24, 2022. Since then shares have doubled, vaulting above moving averages</p>
        <p>Shares hit 52.88 on Jan. 27 and have pulled back. TECHY stock has fallen below its 50-day line.</p>
        <p>Ideally, Tencent would forge a new base after its big run.</p>
        <p>Tencent stock is listed in Hong Kong and trades over the counter in the U.S.</p>
        <p><a href="https://www.investors.com/news/top-china-stocks-to-buy-now/?src=A00220" target="_blank" rel="noreferrer">Continue reading</a></p>
        </div>
    },
    {
      id: 27,
      title: 'Bitcoin, Ether little changed; Polygon’s Matic token leads losers in top ten',
      slug: 'Bitcoin, Ether little changed; Polygon’s Matic token leads losers in top ten',
      category: 'Market',
      subCategory: ['Bitcoin', 'Polygon', 'Token Leads'],
      description: <div className="blog-desc">
        <p>Bitcoin and Ether traded little-changed on Tuesday morning in Asia, while most other top 10 non-stablecoin cryptocurrencies fell. Polygon led the losers, along with Solana and Shiba Inu. U.S. equities gained ground on Monday after last week’s slump.</p>
      </div>,
      authorName: 'Tom Zuo',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 28, 2023 - 7:23 AM',
      cover: 'https://ncx.cx/images/ncx-blog-27.webp',
      content: <div className="blog-content">
        <p>Bitcoin and Ether traded little-changed on Tuesday morning in Asia, while most other top 10 non-stablecoin cryptocurrencies fell. Polygon led the losers, along with Solana and Shiba Inu. U.S. equities gained ground on Monday after last week’s slump.</p>
        <h3>Fast Facts</h3>
        <ul>
          <li>Bitcoin dipped 0.23% in the past 24 hours to trade little changed at US$23,509 as of 8 a.m. in Hong Kong. The leading token is holding a seven day loss of 5.34%, according to CoinMarketCap data. Ethereum also treaded water at US$1,634, off 0.41%. The token is down 4.05% in the past seven days.</li>
          <li>Polygon’s Matic token posed the biggest drop among the top ten cryptocurrencies by market capitalization, falling 3.63% to US$1.24, and extending its weekly loss to 16.27%. Polygon Labs, the developer of the Polygon blockchain, said last week it would lay off 20% of its workforce, which was followed by a reported <a href="https://twitter.com/sandeepnailwal/status/1628522387401482241" target="_blank" rel="noreferrer">glitch on Polygon’s network</a>.</li>
          <li>Solana lost 2.43% to US$22.69, posting a weekly loss of 13.41%. Solana developers are <a href="https://solana.com/news/02-25-23-solana-mainnet-beta-outage-report" target="_blank" rel="noreferrer">investigating</a> a network failure on the Solana Mainet Beta last Saturday, which forced it to restart the network and downgrade it from a recent update.</li>
          <li>Shiba Inu dropped 2.53% after analytics firm Lookonchain reported a wallet moving 182 billion Shiba Inu tokens to crypto exchanges on Monday, usually the sign of preparation for selling that can drive prices lower. Last time the same wallet transferred over 200 billion Shiba Inu in December 2022 the price fell more than 7% on the day, according to Lookonchain. The token is down 7.21% for the seven day period.</li>
          <li>The total crypto market capitalization edged 0.15% lower to US$1.07 trillion, while the total trading volume jumped 34.55% over the past 24 hours to US$45.70 billion.</li>
          <li>U.S. equities edged higher on Monday after last week’s tumble on concerns about indicators showing inflation remains entrenched. The Dow Jones Industrial Average rose 0.22%, the S&P 500 gained 0.31% and the Nasdaq Composite Index added 0.63%.</li>
          <li>Janet Yellen, the U.S. Treasury Secretary, <a href="https://edition.cnn.com/2023/02/27/economy/yellen-inflation-debt-ceiling-ukraine/index.html" target="_blank" rel="noreferrer">told CNN</a> on Monday that U.S. inflation remains too high, but the economy can achieve a soft landing. She said the Federal Reserve’s attempt to curb inflation through higher interest rates while maintaining a strong labor market appears achievable.</li>
          <li>U.S. interest rates are now between 4.5% to 4.75%, the highest since October 2007. The January <a href="https://www.federalreserve.gov/monetarypolicy/files/fomcminutes20230201.pdf" target="_blank" rel="noreferrer">Federal Reserve</a> meeting minutes released last Wednesday showed policymakers agreed to slow down the pace of interest rate hikes, but warned the tightening cycle is not over.</li>
          <li>The U.S. Census Bureau announced its latest monthly <a href="https://www.census.gov/manufacturing/m3/adv/pdf/durgd.pdf" target="_blank" rel="noreferrer">report</a> on durable goods on Monday, with orders for manufactured goods – excluding transportation – rising 0.7% in January, or below expectations in a sign of a slowdown in the growth that has been feeding inflation.</li>
          <li>Analysts at the <a href="https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html?redirect=/trading/interest-rates/countdown-to-fomc.html" target="_blank" rel="noreferrer">CME Group</a> predict a 76.7% likelihood the Fed will raise rates by another 25 basis points in March. They also predict a 23.3% chance for a raise of 50 basis points, a decrease from 27.7% as reported on Monday.</li>
        </ul>
      </div>
    },
    {
      id: 28,
      title: 'Bitcoin, Ether gain; Polygon, XRP biggest losers',
      slug: 'Bitcoin, Ether gain; Polygon, XRP biggest losers',
      category: 'Market',
      subCategory: ['Bitcoin', 'Polygon', 'XRP'],
      description: <div className="blog-desc">
        <p>Bitcoin and Ethereum rose in Monday afternoon trade in Asia along with most of the top 10 non-stablecoin cryptocurrencies by market capitalization. Asian markets dropped on Monday, following last Friday’s Wall Street selloff, as investors brace for more interest rate hikes in the U.S. due to persistently high inflation.</p>
      </div>,
      authorName: 'Pradipta Mukherjee',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 27, 2023 - 3:28 AM',
      cover: 'https://ncx.cx/images/blog_28_ncx.webp',
      content: <div className="blog-content">
        <p>Bitcoin and Ethereum rose in Monday afternoon trade in Asia along with most of the top 10 non-stablecoin cryptocurrencies by market capitalization. Asian markets dropped on Monday, following last Friday’s Wall Street selloff, as investors brace for more interest rate hikes in the U.S. due to persistently high inflation.</p>
        <h3>Fast Facts</h3>
        <ul>
          <li>Bitcoin, the biggest cryptocurrency by market capitalization, rose 1.18% to US$23,441 in the 24 hours to 4 p.m. on Monday in Hong Kong, although it dropped 4.4% on the week. Ethereum gained the most among the top 10 cryptos at 2.28% to US$1,637, but lost 3.54% in the last seven days, according to <a href="https://coinmarketcap.com/" target="_blank" rel="noreferrer">CoinMarketCap data</a>.</li>
          <li>Polygon’s Matic slipped 0.74% in 24 hours to US$1.26 and has dropped 15.74% over the past seven days. XRP fell 0.71% to US$0.3754, after posting a weekly loss of 3.9%.</li>
          <li>The global cryptocurrency market capitalization rose 1.05% to US$1.07 trillion while total crypto market volume gained 0.57% to US$36.09 billion.</li>
          <li>Asian equity markets ended lower on Monday, following the release of the U.S. personal consumption expenditures January price index last Friday, which rose 4.7% on the year.</li>
          <li>The <a href="https://www.szse.cn/English/" target="_blank" rel="noreferrer">Shenzhen Component Index</a> dropped 0.73% while the Shanghai Composite slipped 0.28%.</li>
          <li>Japan’s <a href="https://indexes.nikkei.co.jp/en/nkave" target="_blank" rel="noreferrer">Nikkei 225</a> dropped 0.11%, while South Korea’s Kospi ended the day 0.87% lower.</li>
          <li><a href="https://www.hsi.com.hk/eng" target="_blank" rel="noreferrer">Hang Seng</a> Index slipped 0.33% after Hong Kong announced that its exports <a href="https://www.scmp.com/news/hong-kong/hong-kong-economy/article/3211687/hong-kongs-exports-fall-367-cent-january-marking-biggest-monthly-drop-70-years" target="_blank" rel="noreferrer">dropped 36.7%</a> in January compared to a year ago. The decline in exports is the largest monthly fall in 70 years.</li>
          <li>The U.S. Federal Reserve is expected to increase interest rates further to tackle inflation at its next meeting on Mar. 21 and 22. Currently, interest rates in the world’s largest economy are at 4.5% to 4.75%, the highest since October 2007. The central bank has said interest rates could go as high as 5% to tame inflation.</li>
          <li>U.S. Treasury Secretary Janet Yellen <a href="https://www.reuters.com/markets/us/yellen-says-us-inflation-fight-not-straight-line-after-price-rise-data-2023-02-25/" target="_blank" rel="noreferrer">said</a> on Saturday that the fight against inflation “is not a straight line” and that more work is necessary.</li>
        </ul>
      </div>
    },
    {
      id: 29,
      title: 'BNB Chain’s Second-Largest DeFi Protocol Venus to Accept Floki Tokens as Lending',
      slug: 'BNB Chain’s Second-Largest DeFi Protocol Venus to Accept Floki Tokens as Lending',
      category: 'Market',
      subCategory: ['Floki Tokens', 'DeFi Protocol', 'BNB'],
      description: <div className="blog-desc">
        <p>Tokens of Shiba Inu-themed Floki can soon be used as collateral to borrow a basket of cryptocurrencies on Venus Protocol, the second-largest lending platform on the BNB Chain, Floki developers told CoinDesk on Friday.</p>
      </div>,
      authorName: 'Pradipta Mukherjee',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 24, 2023 - 5:37 AM',
      cover: 'https://ncx.cx/images/ncx-blog-29.webp',
      content: <div className="blog-content">
        <p>Tokens of Shiba Inu-themed Floki can soon be used as collateral to borrow a basket of cryptocurrencies on Venus Protocol, the second-largest lending platform on the BNB Chain, Floki developers told CoinDesk on Friday.</p>
        <p>The move is part of a broader plan to make FLOKI, which was originally a meme coin named after billionaire Elon Musk's pet dog, as a serious decentralized-finance (<a href="https://www.coindesk.com/learn/what-is-defi/" target="_blank" rel="noreferrer">DeFi</a>) token.</p>
        <p>Venus provides a simple-to-use crypto asset lending and borrowing product that allows users to directly borrow against collateral at a high speed while losing less to transaction fees. It held over $800 million in locked tokens as of Friday.</p>
        <p>Venus will be integrating FLOKI in its money-market platform, thereby allowing FLOKI holders on the BNB Chain to borrow USDT, USDC, BNB and a basket of other cryptocurrencies while using their FLOKI tokens as collateral.</p>
        <p>This allows FLOKI token holders to easily access liquidity without having to sell their tokens.</p>
        <p>The move is expected to benefit FLOKI holders, developers say, as they continue to build and seek strategic partnerships that ultimately benefit the token’s value.</p>
        <p>The FLOKI integration process on Venus has started, and is expected to be completed in March. After that, FLOKI holders will be able to seamlessly lend and borrow on Venus while using their FLOKI tokens as collateral.</p>
        <p>FLOKI has so far been one of the strongest crypto performers this year, tripling in value over a 30-day rolling period, according to CoinGecko. Interest in the tokens has heightened in recent months following a <a href="https://www.coindesk.com/markets/2023/01/30/floki-inu-dao-passes-proposal-to-burn-over-100m-worth-of-tokens/" target="_blank" rel="noreferrer">$100 million token burn</a> and a push to target Valhalla, Floki’s metaverse game, to the <a href="https://www.coindesk.com/web3/2023/02/07/shiba-inu-themed-floki-to-release-chinese-version-of-its-upcoming-valhalla-game/" target="_blank" rel="noreferrer">multibillion-dollar</a> <a href="https://www.coindesk.com/web3/2023/02/07/shiba-inu-themed-floki-to-release-chinese-version-of-its-upcoming-valhalla-game/" target="_blank" rel="noreferrer">Chinese gaming market</a>.</p>
      </div>
    },
    {
      id: 30,
      title: 'DeFi Liquidity Protocol Synthetix Deploys Version 3 on Ethereum',
      slug: 'DeFi Liquidity Protocol Synthetix Deploys Version 3 on Ethereum',
      category: 'Market',
      subCategory: ['Floki Tokens', 'DeFi Protocol', 'BNB'],
      description: <div className="blog-desc">
        <p>On-chain liquidity and derivatives trading protocol Synthetix has deployed version 3 (v3) on the Ethereum mainnet following security audits, developers said Wednesday.</p>
      </div>,
      authorName: 'Shaurya Malwa',
      authorurl: '',
      authorAvatar: 'https://ncx.cx/images/avatar-placeholder.svg',
      authorContent: '',
      createdAt: 'Feb 23, 2023 - 2:49 PM',
      cover: 'https://ncx.cx/images/ncx-blog-30.webp',
      content: <div className="blog-content">
        <p>On-chain liquidity and derivatives trading protocol Synthetix has deployed version 3 (v3) on the Ethereum mainnet following security audits, developers said Wednesday.</p>
        <p>Synthetix (SNX) is a protocol that enables the issuance of synthetic assets on the Ethereum blockchain – allowing users to mint, hold, and trade a wide range of derivatives – including commodities, fiat currencies, and even stocks.</p>
        <p>The protocol holds over $450 million in locked tokens over the Ethereum and Optimism blockchains as of Thursday. It held just shy of $3 billion in total locked value (TVL) at its February 2021 record high.</p>
        <p>Developers previously stated said that Synthetix v3 will have much more efficient architecture to allow developers to create faster, complex and more efficient decentralized financial (DeFi) applications.</p>
        <p>V3 will allow the creation of products that offer a liquid market for any financial derivative that developers want to build, from traditional financial markets to more exotic markets such as no-loss lotteries or even wholly separate protocols.</p>
        <p>V3 will also offer simplified staking and differentiated debt pools, allowing network stakers to supply collateral to, and receive fees from, specific asset pools without having to be exposed to every Spartan Council-supported asset.</p>
        <p>The Spartan Council (SC) is the central governing body of the Synthetix protocol that votes on overall improvement proposals and parameter changes.</p>
        <p>Synthetix’s native SNX tokens saw nominal price changes in the past 24 hours.</p>
        </div>
    },
  ];
  
  export default blogListdata;