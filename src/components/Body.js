import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESTRAU_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import Banner from "./Banner";
import food from "./images/food.png";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    loadBanner();
  }, []);

  const loadBanner = async () => {
    const data = await fetch(RESTRAU_URL);
    const json = await data.json();
    console.log(json);
    const arr1 = json?.data?.cards[0]?.card?.card?.header?.title;
    console.log(arr1);
    setListOfRestaurants(arr1);
  };
  return  (
    <div className="w-full h-full flex flex-col">
      <div className="banner">
      <div className="text-img">
        <img src={food} alt="food" className="w-full object-cover relative h-96" />
        <h2 className="text-center font-extrabold absolute lg:text-7xl py-14 uppercase tracking-widest px-80 -mt-80 object-top bg-red-950 bg-opacity-10">Delight your taste buds with our delicious creations!</h2>
      </div>
      
        <Banner/>
      </div>
    </div>
  );
};

export default Body;
