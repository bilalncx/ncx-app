import React from 'react';
import './empty.css';

const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src='https://ncx.cx/images/empty-folder.png' alt='empty' />
    <h2>Not Found</h2>
  </div>
);

export default EmptyList;
