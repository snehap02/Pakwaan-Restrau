import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESTRAU_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import Banner from "./Banner";

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
        <Banner/>
      </div>
    </div>
  );
};

export default Body;
