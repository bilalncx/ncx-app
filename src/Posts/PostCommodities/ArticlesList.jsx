import React, { useState } from 'react';
import '../Crypto/style.css';
import Button from "@mui/material/Button";
import Empty from './Empty/empty';
import ArticleList from './Articles/Posts';
import data from './CommoditiesData';
import MyHeader from '../../Assets/components/header/header';
import MyFooter from '../../Assets/components/footer/footer';
import '../paginate';

const Home = () => {
  const [articles] = useState(data);

  return (
        <div className='article-page'>
            <MyHeader />

            <div className="blo__btns">
                <div className="container">
                    <h1>Commodities</h1>
                    <div className="blg__btn">
                        <Button href="/market-insights">Latest Articles</Button>
                        <Button href="/post-crypto">Crypto</Button>
                        <Button href="/post-markets">Markets</Button>
                        <Button href="/post-forex">Forex</Button>
                        <Button href="/post-commodities">Commodities</Button>
                        <Button href="/post-indices">Indices</Button>
                    </div>
                </div>
            </div>


            <div className="container blog__articles">
                <div className="articles__gg">
                    {!articles.length ? <Empty /> : <ArticleList articles={articles} />}  
                </div>
                <div class="pagination"></div>
            </div>
            
            <MyFooter />
        </div>
    );
};

export default Home;
