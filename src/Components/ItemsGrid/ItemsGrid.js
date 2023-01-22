import React from 'react'
import './ItemsGrid.scss'
import { Card } from "../Card/Card";

const ItemsGrid = props => (

  <div className="card-list">   
   {props.items.map(item => (
      <Card key={item.id} item={item} />
    ))}
  </div>
)

export default ItemsGrid