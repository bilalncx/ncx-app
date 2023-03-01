import React, { useState } from 'react';
import EmptyList from '../../blogcomponents/common/EmptyList/empty';
import BlogList from '../../blogcomponents/homeblog/BlogList/bloglis';
import Header from '../../blogcomponents/homeblog/Header/blogheader';
import SearchBar from '../../blogcomponents/homeblog/SearchBar/searchbar';
import blogListdata from '../../config/jata';
import MyHeader from '../components/header/header';
import MyFooter from '../components/footer/footer';
import SliderBlog from '../../blogcomponents/homeblog/BlogSlider/blogslider';
import { ReactComponent as NCXLogo } from '../../Assets/images/NCX-logo.svg';
import { ReactComponent as Telegram } from '../components/footer/telegram.svg';
import { ReactComponent as Twitter } from '../components/footer/twitter.svg';
import { ReactComponent as Instagram } from '../images/instagram.svg';
import Buttons from '../pages/blog/search_btns';

const Home = () => {
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


  const menuItems = [...new Set(blogListdata.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = blogListdata.filter((newVal) => {
      return newVal.category === curcat;
    });
    setBlogs(newItem);
  };

  return (
    <div className='blog-page'>
        <MyHeader />
        <div className="blog-header">
          <div className="container">
            <div className="row">
              <div className="row-col">
              <h1>Press & News</h1>
              <p>Subscribe to get NCX Press & News updates</p>
              <Header />
              </div>
              <div className="row-col">
                <SliderBlog />
              </div>
            </div>
          </div>
        </div>
        <div id="insight_page" className="container">
          <div id="fixed_sticky_insights" className='blog_heading'>
            <div className="trend">
              <NCXLogo />
              <h3>Insights</h3>
            </div>
            <ul>
              <Buttons
                filterItem={filterItem}
                setItem={setBlogs}
                menuItems={menuItems}
              />
              {/* <li><a href="#a" alt="latest articles">Latest Articles</a></li>
              <li><a href="#a" alt="News & Insights">Press Room</a></li>
              <li><a href="#a" alt="Press Room">Announcements</a></li> */}
            </ul>
            <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />
            <div className="social-links">
              <a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><Twitter /></a>
              <a href="https://ncx.cx/" target="_blank" rel="noreferrer"><Telegram /></a>
              <a  href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><Instagram /></a>
            </div>
            <SliderBlog />
          </div>
          <div className="blog">
            {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}  
          </div>
        </div>
        <MyFooter />
    </div>
  );
};

export default Home;
