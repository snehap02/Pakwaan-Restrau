import React from "react";
import { IMG_URL } from "../utils/constants";
import StarsIcon from "@mui/icons-material/Stars";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData?.info;
  const { slaString } = resData?.info.sla;
  return (
    <div className="restaurant-card flex flex-col justify-start w-[23rem] h-[25rem] border-2 p-2 rounded-xl shadow-lg shadow-neutral-300 cursor-pointer hover:scale-95 transition-all hover:delay-150 hover:duration-300">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="res images"
        className="object-cover w-[22rem] h-[14rem] rounded-2xl"
      />
      <h1 className="name text-[1.29rem] font-medium tracking-wide mt-3">{name}</h1>
      <div className="ratings-and-time flex gap-2 text-sm tracking-wide text-neutral-800">
        <div className="rate flex">
          <StarsIcon sx={{ color: "#FFC700" }} />
          <h2 className="font-medium">{avgRating} | </h2>
        </div>
        <div className="time-of-delivery text-sm tracking-wide text-neutral-800">
          <h2 className="font-medium">{slaString}</h2>
        </div>
      </div>
      <h2 className="cuisines text-sm tracking-wide text-neutral-800">
        {cuisines.join(", ")}
      </h2>
      <h2 className="place text-sm text-neutral-800">
        {areaName}
      </h2>
    </div>
  );
};

export default RestaurantCard;
