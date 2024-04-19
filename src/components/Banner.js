import React, { useEffect, useState } from "react";
import { RESTRAU_URL } from "../utils/constants";
import biryani from "./images/biryani.png";
import BannerImg from "./BannerImg";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    loadBanner();
  }, []);

  const loadBanner = async () => {
    const res = await fetch(RESTRAU_URL);
    const json = await res.json();
    const arr = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    console.log(arr);
    setBanner(arr);
    // console.log(arr[0]?.imageId);
  };
  return (
    <div className="banner-comp">
      <div className="flex flex-col">
        <div className="div1 flex justify-between items-center">
          {/* <div className="title">{banner}</div> */}
          <h1 className="title">Got Any Cravings?</h1>
          {/* <div className="search">skjdhk</div> */}
        </div>
        <div className="div2 flex w-[80%] h-full scroll-smooth gap-20 h-42 overflow-x-scroll overflow-y-hidden lg:mx-28 xl:mx-40 mx-16">
          {banner?.map((item) => {
            return (
              <div key={item?.id} className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <a href={item?.action?.link} target="blank">
                    <BannerImg key={item.id} bannerData={item} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
