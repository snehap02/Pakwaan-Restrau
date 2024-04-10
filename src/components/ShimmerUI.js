import React from "react";
import RamenDiningIcon from "@mui/icons-material/RamenDining";

const ShimmerUI = () => {
  return (
    <div className="shimmer-effect px-8 min-h-[100vh] w-full mt-8">
      <div className="banner w-full h-52 bg-amber-500 flex justify-center items-center flex-col">
        <div className="icon ring-8 ring-red-900 rounded-full p-4 animate-bounce">
          <RamenDiningIcon sx={{ fontSize: "40px", color: "brown" }} />
        </div>
        <h2 className="banner-text sm:text-xl lg:text-2xl pt-2 text-red-950">Searching for delicious cuisine......</h2>
      </div>
      <div className="other-details"></div>
    </div>
  );
};

export default ShimmerUI;
