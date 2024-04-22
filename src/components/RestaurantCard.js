import React from "react";
import { IMG_URL } from "../utils/constants";
import StarsIcon from "@mui/icons-material/Stars";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData?.info;
  const { slaString } = resData?.info.sla;
  return (
    <div className="restaurant-card flex flex-col justify-center w-96 h-96">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="res images"
        className="object-cover w-[22rem] h-56 rounded-2xl"
      />
      <h1 className="name">{name}</h1>
      <div className="ratings-and-time flex gap-2">
        <div className="rate flex">
          <StarsIcon sx={{ color: "#FFC700" }} />
          <h2>{avgRating} | </h2>
        </div>
        <div className="time-of-delivery">
          <h2>{slaString}</h2>
        </div>
      </div>
      <h2 className="cuisines">
        {cuisines.join(",")}
      </h2>
      <h2 className="place">
        {areaName}
      </h2>
    </div>
  );
};

export default RestaurantCard;
