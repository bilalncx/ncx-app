import React from 'react';
import BlogItem from '../../homeblog/BlogList/BlogItem/blogitem';
import './bloglist.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
