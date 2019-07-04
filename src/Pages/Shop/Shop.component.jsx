import React, { Component } from 'react';
import SHOPDATA from './SHOPDATA';

import './Shop.scss';

const CollectionItem = (item) => {
  console.log(item)
  return (
    <div className="collection-item">
      <div style={{backgroundImage : `url(${item.imageUrl})`}}
      className="collection-image">
      </div>
      <div className="collection-content">
        <span>{item.name}</span>
        <span>{item.price}</span>
      </div>
    </div>
  );
}

const Collection = (collection) => {
  return (
    <div key={collection.id} className="collection">
      <h1 className="collection-title">{collection.title}</h1>
      {collection.items.slice(0,4).map(item => {
        return(
          <CollectionItem key={item.id} {...item}/>
        );
      })}
    </div>  
  );
}


class Shop extends Component {

  state = {
    collections : SHOPDATA
  }

  render() {
    return (
      <div className="shop-container">
        {this.state.collections.map(collection => {
          return (
            <Collection key={collection.id} {...collection}/>
          )
        })}
      </div>
    );
  }
}

export default Shop;