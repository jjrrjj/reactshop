import React from 'react';
import { withRouter } from "react-router-dom";
import './MenuItem.scss';

const MenuItem = ({id,title,size,itemNum,img,history,match}) => { 
  return (
    <div onClick={() => history.push(`/shop/${title}`)}
    className={`menu-item menu-item-${size} menu-item-${itemNum}`}>
      <div className="content">
        <div style={{
      backgroundImage : `url(${img})`
    }} className="bgImage">
        </div>
        <div className={`contentContainer contentContainer-${size}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);