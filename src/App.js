// import './App.css';
// import { Redirect, Route, Switch } from 'react-router-dom';
// import Home from './Assets/pages/home';
// import './Assets/pages/markets';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './Assets/pages/blog/blog';
import Home from './Assets/pages/home';
import Market from './Assets/pages/markets';
import Press from './Assets/pages/bloglisting';

const App = () => {
  return (
    <div className='roo-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/blog' element={<Press />}/>
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/market' element={Market}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

