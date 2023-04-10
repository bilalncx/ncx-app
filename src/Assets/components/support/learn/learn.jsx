import { React, useState} from "react";
import '../../../pages/support/support.css';
import MyHeader from '../../../components/header/header';
import MyFooter from '../../../components/footer/footer';
import SearchModal from '../../../components/support/autosearch';
import ArticleSlider from '../article_slide';
import NCXLogo from '../../../images/ncx-black-logo.svg';
import Telegram from '../../../components/footer/telegram.svg';
import Twitter from '../../../components/footer/twitter.svg';
import Instagram from '../../../images/instagram.svg';
import { ReactComponent as CardArrow } from '../../../images/ncx-cardarrow.svg';
import { useTranslation } from "react-i18next";


function SupportPageSet()
{
    const { t } = useTranslation();
    const [selected, setselected] = useState(null);
    const toggle = (i) => {
        if(selected === i){
            return setselected(null)
        }
        setselected(i)
    }
    return(
        <div id="support_faqdetails">

            <MyHeader />

            <SearchModal />

            <div id="insight_page" className="details_faqs">
                <div className="container">
                    <div className="row">
                        <div className="col fest">
                            <div className="support_leftbar">
                                <div className="ncx-trends">
                                    <img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                    <p>{t("")}FAQs</p>
                                </div>

                                <div className="faq_nav">
                                    <a href="/faq">{t("")}FAQs</a>
                                    <div className="arr_sv">
                                        <CardArrow />
                                    </div>
                                    <p>{t("")}Learn</p>
                                </div>

                                <ul>
                                    <li><a href="https://ncx.cx/faq">{t("")}Registration & KYC</a></li>
                                    <li><a href="https://ncx.cx/faq_security_google_2fa" alt="Settings & Security">{t("")}Settings & Security</a></li>
                                    <li><a href="https://ncx.cx/faq_deposits">{t("")}Deposits</a></li>
                                    <li><a href="https://ncx.cx/faq_withdrawal">{t("")}Withdtrawal</a></li>
                                    <li><a href="https://ncx.cx/faq">{t("")}DEX</a></li>
                                    <li><a href="https://ncx.cx/faq_spot_trading">{t("")}Spot Trading</a></li>
                                    <li><a href="https://ncx.cx/faq">{t("")}Derivatives Trading</a></li>
                                    <li><a href="https://ncx.cx/faq">{t("")}Rewards & Referrals</a></li>
                                    <li><a href="https://ncx.cx/faq_learn">{t("")}Learn</a></li>
                                </ul>

                                <h1 className="support_ticket">{t("")}Open Support Ticket</h1>
                                <p className="support_txt">{t("")}Open Support Ticket via Support Chat section in your NCX Dashboard or reach us at <a href="mailto:support@ncx.cx">support@ncx.cx</a></p>
                                <a className="support_signin" href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">{t("")}Sign In</a>

                                <div className="social-icons">
                                    <div class="icons"><a href="#" target="_blank" rel="noreferrer"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                                    <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                                    <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col sect">
                            <h1>{t("")}Learn FAQ's</h1>
                            <h3 className="sub_title_ss">{t("")}Blockchain, Cryptocurrency, Metaverse, NFTS & more</h3>
                            <div id="learnfaq">
                                <div className="accordian">
                                    {data.map((item, i) => (
                                        <div className="item">
                                            <div className='title' onClick={() => toggle(i)}>
                                                <h2>{item.question}</h2>
                                                <span className={selected === i ? 'svg transform' : 'svg'}>
                                                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className={selected === i ? 'content show' : 'content'}>
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col thest">
                            <ArticleSlider />
                        </div>
                    </div>
                </div>
            </div>

            <MyFooter />

        </div>
    )
}

const data = [
    {
        question: 'What is Cryptocurrency?',
        answer: 
        <div className="faq-ans">
            <p>A form of currency that exists virtually or digitally and uses cryptography to secure transactions. Cryptocurrencies do not have a central regulating or issuing body/authority (like a money currency). Instead, they use decentralized technology (most commonly blockchain technology) to record transactions and release new units.</p>
        </div>
    },
    {
        question: 'What is Cryptocurrency Token?',
        answer:
        <div className="faq-ans">
            <p>Commonly known as “token”, cryptocurrency tokens represent an asset or specific use and reside on their own blockchain. Tokens can be used for investment purposes, to make purchases, or perform operations on the blockchain.</p>
        </div>
    },
    {
        question: 'What are the Common Token Types',
        answer:
        <div className="faq-ans">
            <p>Most commonly, tokens are divided into three types - Utility, Security, and Stable.</p>
            <p><strong>A utility token</strong> serves some use case within a specific ecosystem. These tokens allow users to perform some action on a certain network or platform. Utility tokens are not mineable cryptocurrencies. They are usually pre-mined, created all at once, and distributed in a manner chosen by the people who created them.</p>
            <p><strong>A security token</strong> is a digital asset that represents ownership or other rights and transfers value from an asset, or bundle of assets, to a token. In plain language, security tokens are the digital form of traditional investments like stocks, bonds, or other securitized assets. For example, a company that wishes to raise funds for an expansionary project can decide to issue fractionalized ownership of its company through a digital token instead of issuing stocks.</p>
            <p><strong>A Stablecoin</strong> is a cryptocurrency designed to have a relatively stable price, typically through being pegged to a commodity (for example, gold) or currency (for example, USD) or having its supply regulated by an algorithm.</p>
        </div>
    },
    {
        question: 'What is Cryptocurrency Coin?',
        answer:
        <div className="faq-ans">
            <p>Commonly known as “coin” in the blockchain world, these assets are native to the blockchain that they support and are used to perform operations on this blockchain.</p>
        </div>
    },
    {
        question: 'What is Difference Between Token and Coin?',
        answer:
        <div className="faq-ans">
            <p>The key distinction between coins and tokens is that crypto coins are the native asset of a Blockchain like Bitcoin or Ethereum, whereas crypto tokens are created by platforms and applications that are built on top of an existing Blockchain.</p>
        </div>
    },
    {
        question: 'What is a Blockchain?',
        answer:
        <div className="faq-ans">
            <p>A blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking virtual assets (like coins and tokens) inside a network. The recorded transactions reside inside blocks, each of which is connected to the previous one like a chain, and all data inside all blocks is shared among all network participants - hence the name blockchain. This data can be viewed even to users outside the network via block explorers - websites that show the blockchain transactions. This is why a blockchain is considered 100% transparent in its operations.</p>
        </div>
    },
    {
        question: 'What is a Blockchain Mining?',
        answer:
        <div className="faq-ans">
            <p>Blockchain "mining" is a metaphor for the computational work that blockchain network participants (commonly called nodes and/or miners) undertake to process transactions and earn new tokens. Miners are essentially getting paid for their work as auditors. They are verifying the legitimacy of blockchain transactions.</p>
        </div>
    },
    {
        question: 'What is a GAS?',
        answer:
        <div className="faq-ans">
            <p>GAS refers to the fee, or pricing value, required to successfully conduct a transaction or execute a smart contract on a blockchain platform. Priced in small fractions of the native cryptocurrency of the given blockchain, the GAS is used to allocate resources of the blockchain core so that decentralized applications such as smart contracts can self-execute in a secured but decentralized fashion. The exact price of the GAS is determined by supply and demand between the network's miners, who can decline to process a transaction if the gas price does not meet their threshold, and users of the network who seek to process their transactions.</p>
        </div>
    },
    {
        question: 'What is a Smart Contract?',
        answer:
        <div className="faq-ans">
            <p>A smart contract is a self-executing digital programme with the terms of the agreement between two parties being directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized blockchain network. The code controls the execution, and transactions that happen as a result of this execution are trackable and irreversible.</p>
        </div>
    },
    {
        question: 'What is an NFT?',
        answer:
        <div className="faq-ans">
            <p>Non-fungible tokens (NFTs) are cryptographic assets (like tokens) on a blockchain with unique identification codes and metadata that distinguish them from each other. Unlike tokens, NFTs cannot be exchanged or traded equivalently like other cryptographic assets. For example, 1 BTC is equivalent to another 1 BTC, just like a $100 bill is equivalent to another $100 bill. NFTs are unique in this sense since every single NFT is unique and is NOT equivalent to another NFT.</p>
        </div>
    },
    {
        question: 'What is an Metaverse?',
        answer:
        <div className="faq-ans">
            <p>Metaverse is a network of 3D virtual worlds focused on social connections. In the metaverse, users traverse a virtual world with their 3D avatars that mimics aspects of the physical world using technologies such as virtual reality (VR), augmented reality (AR), AI, social media, and digital currency/cryptocurrency. The internet is something that people "browse." But, to a degree, people can "live" in the metaverse. In this sense, you won't just be on the internet but, “inside” the internet.</p>
        </div>
    },
    {
        question: 'What is an Cryptocurrency Exchange?',
        answer:
        <div className="faq-ans">
            <p>A cryptocurrency exchange, or a digital currency exchange, is a business that allows customers to trade cryptocurrencies or digital currencies for other assets, such as conventional fiat money or other digital currencies.</p>
        </div>
    },
    {
        question: 'What is Fiat?',
        answer:
        <div className="faq-ans">
            <p>Fiat currencies refer to traditional currencies like USD, EUR, AMD, etc. This term is used to quickly distinguish between cryptocurrencies and traditional currencies when talking about money or payments whenever cryptocurrencies are present in the context.</p>
        </div>
    },
    {
        question: 'What is Decentralization in the Blockchain Space?',
        answer:
        <div className="faq-ans">
            <p>In blockchain, decentralization refers to the transfer of control and decision-making from a centralized entity (individual, organization, or group) to a distributed network. An easy way to explain decentralization would be the analogy of the president/king/queen running the country by himself/herself, vs a parliament making all the decisions based on votes. </p>
        </div>
    },
    {
        question: 'What is Web3?',
        answer:
        <div className="faq-ans">
            <p>Web3 (also known as Web 3.0) is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics. The World Wide Web has three iterations - Web 1.0, Web 2.0, and Web 3.0. Web 1.0 is the "read-only Web," Web 2.0 is the "participative social Web," and Web 3.0 is the "read, write, execute Web." This Web interaction and utilization stage moves users away from centralized platforms like Facebook, Google, or Twitter and towards decentralized, nearly anonymous platforms.</p>
        </div>
    },
    {
        question: 'What is Tokenization?',
        answer:
        <div className="faq-ans">
            <p>Tokenization is the process of replacing sensitive data with unique identification symbols that retain all the essential information about the data without compromising its security. Because blockchain technology emerged from the field of data science, many of the terms used in cryptocurrency and tokens are similar to those used in those fields. The term "token" is one of them. A token, in data science, is a value—like a randomly-generated number—assigned to sensitive data to mask the original information. So in a blockchain, a token is a number assigned to data stored within the blockchain. Giving an asset a token is called "tokenization."</p>
        </div>
    },
    {
        question: 'What is Tokenization in Blockchain?',
        answer:
        <div className="faq-ans">
            <p>Within the context of blockchain technology, tokenization is the process of converting something of value into a digital token that's usable on a blockchain application.</p>
        </div>
    },
    {
        question: 'What is Cryptopair?',
        answer:
        <div className="faq-ans">
            <p>A cryptocurrency pair allows each asset in the pair to be valued without using fiat.</p>
        </div>
    },
    {
        question: 'What is the Bid Price?',
        answer:
        <div className="faq-ans">
            <p>It is the price trader is willing to buy a currency pair for.</p>
        </div>
    },
    {
        question: 'What is the Ask Price?',
        answer:
        <div className="faq-ans">
            <p>It is the price trader is willing to sell a currency pair for.</p>
        </div>
    },
    {
        question: 'What is a spread?',
        answer:
        <div className="faq-ans">
            <p>It is the difference between the ask price and the bid price.</p>
        </div>
    },
    {
        question: 'What are the main chart types?',
        answer:
        <div className="faq-ans">
            <p>The chart types used by most traders are:</p>
            <ol>
                <li>Line Chart - a visualisation of where the price has travelled.</li>
                <li>Bar Chart - visually depict the open, high, low, and close prices of an asset or security.</li>
                <li>Candlestick Chart - a technical tool that packs datafor multiple time frames into single price bars.</li>
            </ol>
        </div>
    },
    {
        question: 'What types of market conditions there are?',
        answer:
        <div className="faq-ans">
            <p>There are two types:</p>
            <ol>
                <li>Bullish Market - is a condition of a Pair in which prices are rising or are expected to rise, uptrend represents the Bullish cryptopair.</li>
                <li>Bearish Market - a condition of a Pair in which prices are declining or are expected to fall, downtrend represents the Bearish cryptopair</li>
            </ol>
        </div>
    },
    {
        question: 'What does "Scalping" mean?',
        answer:
        <div className="faq-ans">
            <p>Scalping is reselling for a fast profit off small price changes.</p>
        </div>
    },
    {
        question: 'What is Volatility?',
        answer:
        <div className="faq-ans">
            <p>Volatility refers to the amount of uncertainty or risk related to the size of changes in a security's value. A higher volatility means that a security's value can potentially be spread out over a larger range of values. A lower volatility means that a security's value does not fluctuate dramatically, and tends to be more steady.</p>
        </div>
    },
    {
        question: 'What do Support & Resistance mean?',
        answer:
        <div className="faq-ans">
            <p>The support and resistance are specific price points on a chart expected to attract the maximum amount of either buying or selling. The support price is a price at which one can expect more buyers than sellers. Likewise, the resistance price is a price at which one can expect more sellers than buyers.</p>
        </div>
    },
    
]

export default SupportPageSet;