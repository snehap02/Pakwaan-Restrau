import React, { useEffect, useState } from "react";
import { RESTRAU_URL } from "../utils/constants";
import BannerImg from "./BannerImg";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

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
  };

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    //slide to left upto 500px,  same for right
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="banner-comp py-2 mt-6">
      <div className="flex flex-col justify-center">
        <div className="div1 flex justify-between items-center px-10 lg:px-32">
          <h1 className="title text-2xl font-bold">Got Any Cravings?</h1>
          <div className="next-prev flex items-center gap-2">
            <KeyboardArrowLeftRoundedIcon sx={{fontSize: "30px"}} className="hover:bg-neutral-300 hover:rounded-full p-1 cursor-pointer" onClick = {slideLeft}/>
            <KeyboardArrowRightRoundedIcon sx={{fontSize: "30px"}} className="hover:bg-neutral-300 hover:rounded-full p-1 cursor-pointer" onClick={slideRight}/>
          </div>
        </div>
        <div id="slider" className="slider flex w-[80%] h-full scroll-smooth gap-[1.5rem] lg:gap-[3rem] h-42 overflow-x-scroll overflow-y-hidden lg:mx-28 xl:mx-40 mx-14 no scrollbar">
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
