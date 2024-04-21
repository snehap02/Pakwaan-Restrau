import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESTRAU_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import Banner from "./Banner";
import food from "./images/food.png";
import TopRestrau from "./TopRestrau";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [resTitle, setResTitle] = useState([]);

  useEffect(() => {
    loadBanner();
  }, []);

  const loadBanner = async () => {
    const data = await fetch(RESTRAU_URL);
    const json = await data.json();
    console.log(json);
    const resTitles = json?.data?.cards[1]?.card?.card?.title;
    // console.log(arr1);
    setResTitle(resTitles);
  };
  return (
    <div className="w-full h-full flex flex-col overflow-x-hidden">
      <div className="banner">
        <div className="text-img relative">
          <img
            src={food}
            alt="food"
            className="w-full object-cover h-62 lg:h-80"
          />
          <h2 className="text-center px-20 sm:px-72 sm:text-2xl md:text-4xl lg:text-6xl lg:px-20 font-extrabold py-14 uppercase tracking-widest bg-white bg-opacity-30 absolute w-full sm:w-[80rem]">
            Delight your taste buds with our delicious creations!
          </h2>
        </div>
        <Banner />
        <div className="flex flex-col lg:flex-row justify-center 1208:justify-between items-center px-10 lg:px-32 mt-8 py-10">
          <h1 className="res-title text-lg lg:text-2xl font-bold text-center md:text-left">
            {resTitle}
          </h1>
          <button className="top-restrau py-3 px-4 rounded-full shadow-md shadow-neutral-600 text-lg lg:text-2xl font-medium bg-[#f5d649]">Top Rated Restaurants</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
