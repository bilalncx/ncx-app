import React from 'react';
import ArticleItem from './Post';

const ArticleList = ({ articles }) => {
  return (
        <div className='wrap'>
            {articles.map((article) => (
                <ArticleItem article={article} />
            ))}
        </div>
    );
};

export default ArticleList;