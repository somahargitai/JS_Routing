import React, { useState, useEffect } from 'react';
import './App.css';

const MarketItemDetail = ({ match, location }) => {
  
  const params = new URLSearchParams(location.search);
  useEffect(() => {
    fetchItem();
    console.log('match:', match);
  }, []);
 
  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const data = await fetch(
      // id example: b0967d8-a59cd27-01472ce-2e4f0ec`
      `https://fortnite-public-api.theapinetwork.com/item/get?ids=${ params.get('item') }`
    );

    const item = await data.json();
    setItem(item);
    console.log('item:', item);
  };

  return (
    <div className="Fetched">
      <h1> Item </h1>
      {/** to see data structure, check fetched data in browser Console */}
      <h3>{item.name}</h3>
      <h3>{item.description}</h3>
      <img src={item.images.transparent} alt="transparent" />
      <img src={item.images.information} alt="information" />      
   </div>
  );
}

export default MarketItemDetail;