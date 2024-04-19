import React from 'react';
import { IMG_URL } from '../utils/constants';

const BannerImg = (props) => {
    const {bannerData} = props;
    const {imageId} = bannerData;
  return (
    <div>
        <img src={IMG_URL + imageId} alt="img" className="lg:min-w-[12rem] min-w-[8rem]" />
    </div>
  )
}

export default BannerImg