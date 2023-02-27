import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import blogListdata from '../../../config/jata';
import Chip from '../../../blogcomponents/common/Chip/chip';
import EmptyList from '../../../blogcomponents/common/EmptyList/empty';
import './blog.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import { ReactComponent as NCXLogo } from '../../images/NCX-logo.svg';
import SearchBar from '../../../blogcomponents/homeblog/SearchBar/searchbar';
import Button from "@mui/material/Button";
import { ReactComponent as Telegram } from '../../components/footer/telegram.svg';
import { ReactComponent as Twitter } from '../../components/footer/twitter.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';
import BlogSliders from '../../../blogcomponents/homeblog/BlogSlider/blogslider';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogListdata.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  const [blogs, setBlogs] = useState(blogListdata);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogListdata;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogListdata);
    setSearchKey('');
  };

  return (
    <>
    <div id="BlogdetailsHeader"><MyHeader /></div>
    <div className='blog_detailspage'>
      <div className="container">
        <div className="row">
          <div className="col first">
            <div className="leftsidebar">
              <div className="trend">
                <NCXLogo />
                <h3>Insights</h3>
              </div>
              <ul>
                <li><a href="#a" alt="latest articles">Latest Articles</a></li>
                <li><a href="#a" alt="News & Insights">Press Room</a></li>
                <li><a href="#a" alt="Press Room">Announcements</a></li>
              </ul>
              <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
              />
              <h1>High-Yield Crypto Savings</h1>
              <p className='left-text'>Earn a steady interest in your favorite crypto. Accrue per minute, no lockup!</p>
              <Button className="btn01 signup">Sign Up</Button>
              <div className="social-links">
                <a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><Twitter /></a>
                <a href="https://ncx.cx/" target="_blank" rel="noreferrer"><Telegram /></a>
                <a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><Instagram /></a>
              </div>
            </div>
          </div>
          <div className="col second">
            {blog ? (
              <div className='blog-wrap'>
                <h1 className='blog-title'>{blog.title}</h1>
                <p className='blog-date'>Published {blog.createdAt}</p>
                <div className='cover-image'>
                  <img src={blog.cover} alt='cover' />
                </div>
                <div className='blog-subCategory'>
                  {blog.subCategory.map((category, i) => (
                    <div key={i}>
                      <Chip label={category} />
                    </div>
                  ))}
                </div>
                {blog.content}
                <div className="author-details">
                  <div className="profile">
                    <img src={blog.authorAvatar} alt={blog.authorName} />
                    <h1><a href={blog.authorurl} target="_blank">{blog.authorName}</a></h1>
                  </div>
                  <p className='author-content'>{blog.authorContent}</p>
                </div>
              </div>
              ) : (
              <EmptyList />
            )}
          </div>
          <div className="col third">
            <div className="rightsidebar">
              <h1>Latest Articles</h1>
              <BlogSliders />
            </div>
          </div>
        </div>
      </div>
    </div>
    <MyFooter />
    </>
  );
};

export default Blog;
