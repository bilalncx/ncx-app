import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip/chip';
import './blogitem.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
    slug,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <div className='blog-image'>
        <Link to={`/insights/${id}`}>
          <img className='blogItem-cover' src={cover} alt='cover' />
        </Link>
      </div>
      <Chip label={category} />
      <div className="blog-heading">
        <p>{createdAt}</p>
        <div className="ttdfe">
          <h3>{title}</h3>
          {description}
        </div>
        <Link className='blogItem-link' to={`/insights/${id}`}>
          Read More
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 7.48994L11.7988 15.0001L11.4894 14.6964L19.3589 7.48994L11.4894 0.283459L11.7988 5.84713e-05L20 7.48994Z" fill="#104FF5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.18945H19.5745V7.6181H0V7.18945Z" fill="#104FF5"></path> </svg>
        </Link>
      </div>
      {/* <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default BlogItem;
