import React from "react";
import RamenDiningIcon from "@mui/icons-material/RamenDining";

const ShimmerUI = () => {
  return (
    <div className="shimmer-effect px-8 min-h-[100vh] w-full mt-8">
      <div className="banner w-full h-52 bg-amber-500 flex justify-center items-center flex-col">
        <div className="icon ring-8 ring-red-900 rounded-full p-4 animate-bounce">
          <RamenDiningIcon sx={{ fontSize: "40px", color: "brown" }} />
        </div>
        <h2 className="banner-text text-sm sm:text-xl lg:text-2xl pt-2 text-red-950">Searching for delicious cuisine near you ......</h2>
      </div>
      <div className="other-details">
        <div className="top grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 mt-4">
            <div className="bg-gradient-to-r from-neutral-200 to-neutral-100 w-full h-14 rounded-md"></div>
            <div className="bg-gradient-to-r from-neutral-200 to-neutral-100 w-full h-14 rounded-md"></div>
            <div className="bg-gradient-to-r from-neutral-200 to-neutral-100 w-full h-14 rounded-md"></div>
            <div className="bg-gradient-to-r from-neutral-200 to-neutral-100 w-full h-14 rounded-md"></div>
        </div>
        <div className="rest grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 mt-4 mb-10">
            <div className="bg-neutral-300 w-full h-72 rounded-md p-2">
                <div className="img rounded-md w-full h-48 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text1 rounded-md mt-3 w-56 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text2 rounded-md mt-1 w-44 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>                
            </div>
            <div className="bg-neutral-300 w-full h-72 rounded-md p-2">
                <div className="img rounded-md w-full h-48 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text1 rounded-md mt-3 w-56 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text2 rounded-md mt-1 w-44 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
            </div>
            <div className="bg-neutral-300 w-full h-72 rounded-md p-2">
                <div className="img rounded-md w-full h-48 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text1 rounded-md mt-3 w-56 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text2 rounded-md mt-1 w-44 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
            </div>
            <div className="bg-neutral-300 w-full h-72 rounded-md p-2">
                <div className="img rounded-md w-full h-48 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text1 rounded-md mt-3 w-56 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text2 rounded-md mt-1 w-44 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
            </div>
            <div className="bg-neutral-300 w-full h-72 rounded-md p-2">
                <div className="img rounded-md w-full h-48 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text1 rounded-md mt-3 w-56 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text2 rounded-md mt-1 w-44 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
            </div>
            <div className="bg-neutral-300 w-full h-72 rounded-md p-2">
                <div className="img rounded-md w-full h-48 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text1 rounded-md mt-3 w-56 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text2 rounded-md mt-1 w-44 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
            </div>
            <div className="bg-neutral-300 w-full h-72 rounded-md p-2">
                <div className="img rounded-md w-full h-48 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text1 rounded-md mt-3 w-56 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text2 rounded-md mt-1 w-44 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
            </div>
            <div className="bg-neutral-300 w-full h-72 rounded-md p-2">
                <div className="img rounded-md w-full h-48 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text1 rounded-md mt-3 w-56 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
                <div className="text2 rounded-md mt-1 w-44 h-4 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUI;
