import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Button from "@mui/material/Button";
import data from './CommoditiesData';
import Empty from './Empty/empty';
import MyHeader from '../../Assets/components/header/header';
import MyFooter from '../../Assets/components/footer/footer';
import { ReactComponent as BackIcon } from '../../Assets/images/back.svg';
import {useNavigate} from 'react-router-dom';

const BlogArticle = () => {
  const { id } = useParams();
  const [article, setarticle] = useState(null);

  useEffect(() => {
    let article = data.find((article) => article.id === parseInt(id));
    if (article) {
      setarticle(article);
    }
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
		navigate(-1);
	}

  return (
    <>
    <div id="articledetailsHeader">
      <MyHeader />
      <div className='single__page'>
            <div className="container">
                <div className="blg__btn">
                  <Button href="/market-insights">Latest Articles</Button>
                  <Button href="/post-crypto">Crypto</Button>
                  <Button href="/post-markets">Markets</Button>
                  <Button href="/post-forex">Forex</Button>
                  <Button href="/post-commodities">Commodities</Button>
                  <Button href="/post-indices">Indices</Button>
                </div>

              {article ? (
                <div className='article-wrap'>
                  <div className="back_ff">
                    <BackIcon />
                    <a onClick={goBack} className='bakc_sig'>Go Back</a>
                  </div>
                  <h1 className='article-title'>{article.title}</h1>
                  <div className="meta_g">
                    <p>Author:<a href={article.authorurl} rel="noreferrer" target="_blank">{article.authorName}</a></p>
                    <p className='article-date'>Published {article.createdAt}</p>
                  </div>
                  
                  <div className='cover-image'>
                    <img src={article.cover} alt='cover' />
                  </div>
                  {article.content}
                </div>
                ) : (
                <Empty />
              )}
            </div>
          </div>
      <MyFooter />
    </div>
    </>
  );
};

export default BlogArticle;
