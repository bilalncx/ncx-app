import React, { useState } from 'react';
import EmptyList from '../../blogcomponents/common/EmptyList/empty';
import BlogList from '../../blogcomponents/homeblog/BlogList/bloglis';
import Header from '../../blogcomponents/homeblog/Header/blogheader';
import SearchBar from '../../blogcomponents/homeblog/SearchBar/searchbar';
import blogListdata from '../../config/jata';
import MyHeader from '../components/header/header';
import MyFooter from '../components/footer/footer';
import SliderBlog from '../../blogcomponents/homeblog/BlogSlider/blogslider';

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
        <div className="container">
          <div className="blog-search">
            <div className='blog_heading'>
              <h1>Learn More About Us</h1>
              <p>See what the best app development agency in UAE is saying</p>
            </div>
            <div className="blog-buttons">
              <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
              />
            <button className='search-btn'><a href="#">Press</a></button>
            <button className='search-btn'><a href="#">News</a></button>
            </div>
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
