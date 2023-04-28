import React from 'react';
import { Link } from 'react-router-dom';


const ArticleItem = ({
    article: {
        id,
        title,
        description,
        createdAt,
        cover,
    },
    }) => {

    return (
        <div className='article'>
            <div className='art__ff'>
                <Link to={`/post-forex/${id}`}>
                    <img className='cvr_art' src={cover} alt='cover' />
                </Link>
            </div>
            <div className="blg__cnt">
                <p className='date'>{createdAt}</p>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ArticleItem;
