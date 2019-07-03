import React from 'react';

import './MenuItem.scss';

const MenuItem = ({id,title,size,itemNum,img}) => {
  // console.log(props)
  return (
    <div 
    style={{
      backgroundImage : `url(${img})`
    }}
    className={`menu-item menu-item-${size} menu-item-${itemNum}`}>
      <div className="content">
        <div className={`contentContainer contentContainer-${size}`}>
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;