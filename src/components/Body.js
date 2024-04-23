import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESTRAU_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import Banner from "./Banner";
import food from "./images/food.png";
import TopRestrau from "./TopRestrau";
import RestaurantCard from "./RestaurantCard";

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
    const resTitles = json?.data?.cards[2]?.card?.card?.title;
    const res =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(res);
    // console.log(arr1);
    setListOfRestaurants(res);
    setResTitle(resTitles);
  };
  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="w-full h-full flex flex-col overflow-x-hidden overflow-y-hidden">
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
        <div className="flex flex-col 1208:flex-row gap-5 justify-center 1208:justify-between items-center px-10 lg:px-32 py-8">
          <h1 className="res-title text-lg lg:text-2xl font-bold text-center md:text-left">
            {resTitle}
          </h1>
          <button
            className="top-restrau py-3 px-4 rounded-full shadow-md shadow-neutral-600 text-lg lg:text-xl font-medium bg-[#f5d649]"
            onClick={() => {}}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="restrau-container flex flex-wrap justify-center items-center px-6 gap-8 pb-20">
          {listOfRestaurants?.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
