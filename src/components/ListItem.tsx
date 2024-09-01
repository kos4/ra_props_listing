import React from "react";
import {ListType} from "../types/ListType.ts";

export default function ListItem({item}: {item: ListType}) {
  const title = item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title;
  let price = item.price;

  switch (item.currency_code) {
    case 'USD':
      price = '$' + price;
      break;
    case 'EUR':
      price = '€' + price;
      break;
    default:
      price += ' ' + item.currency_code;
  }

  let classQuantity = 'item-quantity';
  if (item.quantity <= 10) {
    classQuantity += ' level-low';
  } else if(item.quantity <= 20) {
    classQuantity += ' level-medium';
  } else {
    classQuantity += ' level-high';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage['url_570xN']} alt={item.title}/>
        </a>
      </div>
      <div className="item-details">
      <p className="item-title">{title}</p>
        <p className="item-price">{price}</p>
        <p className={classQuantity}>{item.quantity} left</p>
      </div>
    </div>
  )
}