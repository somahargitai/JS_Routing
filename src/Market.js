import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

export const Market = props => {
  
  let params = new URLSearchParams(window.location.search);

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get`
    );

    const items = await data.json();
    console.log("items: ", items.items);
    setItems(items.items);
  };

  return (
    <div>
    location
  {window.location.search}
  params
  <div>
  {params.get("item")  }

  </div>
      {items.map(item => (
        <h1 key={item.itemid}>
           <Link to={`/market/item?item=${item.itemid}`}>{item.name}</Link> 
          {/* <Link to={{ pathname: `/market`, search: `item=${item.itemid}` }}>{item.name}</Link> */}
        </h1>
      ))}
    </div>
  );
};

export default Market;
