import React from 'react';
import { IMG_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, slaString, cuisines, areaName } = resData?.info;
  return (
    <div className='restaurant-card'>
        <img src={IMG_URL + cloudinaryImageId} alt="" className='object-cover w-[25rem] h-60 rounded-2xl'/>
    </div>
  )
}

export default RestaurantCard