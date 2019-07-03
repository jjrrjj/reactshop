import React, { Component } from 'react';

import './Directory.scss';

import MenuItem from '../MenuItem/MenuItem.component';

class Directory extends Component {

  state = {
    sections : [
      {id : 1,title : "Hats",size : "small",itemNum : "one",img : "https://i.dmarge.com/2017/05/newsboy-cap-1.jpg"},
      {id : 2,title : "Shoes",size : "small",itemNum : "two",img : "https://static1.squarespace.com/static/543b99e5e4b0322c11479d13/t/5447c19ee4b03b39f18a131d/1413988767085/oqBnKuB.jpg"},
      {id : 3,title : "Coats",size : "small",itemNum : "three",img : "https://static.fashionbeans.com/wp-content/uploads/2015/03/spring-jacket-styles.jpg"},
      {id : 4,title : "Shorts",size : "big",itemNum : "four",img : "https://cdn.shopify.com/s/files/1/0071/3637/8998/files/model-wearing-pastel-shorts.jpg?10183903036952886346-.jpg"},
      {id : 5,title : "Trainers",size : "big",itemNum : "five",img : "http://i.imgur.com/t5hSGjh.jpg?1"}
    ]
  }

  render() {
    return (
      <div className="directory">
          {this.state.sections.map(section => {
            return (
              <MenuItem key={section.id} {...section}/>
            );
          })}
      </div> 
    );
  }
}

export default Directory;