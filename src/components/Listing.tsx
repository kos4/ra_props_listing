import React from "react";
import ListItem from "./ListItem.tsx";
import json from '../data.json';

export default function Listing() {
  return (
    <div className="item-list">
      {json.map((item) => <ListItem key={item.listing_id} item={item}/>)}
    </div>
  );
}