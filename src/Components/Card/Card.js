import React from "react";
import "./Card.scss";
import TextTruncate from 'react-text-truncate'; // recommend
// var TextTruncate = require('react-text-truncate'); 
import { NavLink } from 'react-router-dom'


export function Card(props) {
  return(
    <div className="card-container">    
      <div className="card-top">
        <div className="item-image-div">
          <img className="item-image"
            src={props.item.image}
            alt="item"
          />
        </div>
        <div className="item-specs-div">
          <TextTruncate
            className="item-name"
            line={3}
            element="h4"
            truncateText=""
            text={props.item.title}
            textTruncateChild={<m>…</m>}
          />
          {/* <h4 className="item-name">{props.item.title}</h4> */}
          <p className="item-price">{props.item.price}</p>
        </div>
      </div>
      <div className="card-bottom">
        <NavLink to="/shop"><button className='hero-btn'>Add to Cart</button></NavLink>
      </div>
    </div>
  )
}