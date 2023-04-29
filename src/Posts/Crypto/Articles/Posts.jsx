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
// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
// import PostsData from '../data.json';

// function PostListPage() {
    
//     function  handleWindow() {
//         window.scrollTo(0, 0);
//     }
    

//     return (
//           <ul>
//             {PostsData.map((post) => (
//               <li key={post.id}>
//                 <div className='art__ff'>
//                     <Link onClick={handleWindow} to={`/post-crypto/${post.title}/${post.id}`}>
//                         <img className='cvr_art' src={post.cover} alt='cover' />
//                             <div className="blg__cnt">
//                             <p className='date'>{post.date}</p>
//                             <h3>{post.title}</h3>
//                             <p>{post.excerpt}</p>
//                         </div>
//                     </Link>
//                 </div>
//               </li>
//             ))}
//           </ul>
//       );
//     }

//     export default PostListPage;