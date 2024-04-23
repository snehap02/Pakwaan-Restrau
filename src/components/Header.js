import React, { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import logoImg from "./images/logo.png";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LoginIcon from "@mui/icons-material/Login";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [logo] = useTypewriter({
    words: ["Pakwaan", "पकवान"],
    loop: false,
    delaySpeed: 1500,
  });
  return (
    <div className="header top-0 sticky z-[999] bg-white shadow-md shadow-neutral-200 py-2">
      <div className="flex justify-around irems-center h-20 w-[100%]">
        <div className="logo flex justify-between items-center xl:px-40 lg:px-16 px-10 fixed left-0">
          <div className="flex">
            <div className="text text-2xl mt-6 flex justify-between">
              <Link to="/">{logo}</Link>
            </div>
            <div className="logo-img -ml-3">
              <img src={logoImg} alt="logo image" className="w-14" />
            </div>
          </div>
          <div className="lg:hidden flex fixed right-0 px-8 w-10 h-10 z-50" onClick={() => setOpen(!open)}>
          
          </div>
        </div>
        <div className="nav-items lg:right-0 lg:fixed xl:px-40 lg:px-16">
          <ul className="nav-links lg:flex items-center hidden uppercase leading-[4.4rem] gap-12 text-sm">
            <li>Online Status:</li>
            <li className="flex gap-2 justify-center items-center hover:text-[#F06C21] hover:font-semibold">
              <Link to="/about">About Us</Link>
              <PersonIcon
                sx={{ color: "#F06C21" }}
                className="cursor-pointer -mt-[3px]"
              />
            </li>
            <li className="flex gap-2 justify-center items-center hover:text-[#F06C21] hover:font-semibold">
              <Link to="/search">Search</Link>
              <SearchRoundedIcon
                sx={{ color: "#F06C21" }}
                className="cursor-pointer -mt-[3px]"
              />
            </li>
            <li className="flex gap-2 justify-center items-center hover:text-[#F06C21] hover:font-semibold">
              <button className="uppercase"><Link to="/login">Sign In</Link></button>
              <LoginIcon
                sx={{ color: "#F06C21" }}
                className="cursor-pointer -mt-[3px]"
              />
            </li>
            <li className="flex gap-2 justify-center items-center hover:text-[#F06C21] hover:font-semibold">
              <Link to="/cart">Cart</Link>
              <ShoppingBasketIcon
                sx={{ color: "#F06C21" }}
                className="cursor-pointer -mt-[3px]"
              />
            </li>
          </ul>
          {/* mobile nav links */}
          <ul
            className="nav-links uppercase lg:hidden flex bg-white border-t-2 border-neutral-200 shadow-xl shadow-neutral-800 w-full bottom-0 text-lg fixed left-0 justify-center items-center py-6 gap-10 md:gap-28"
          >
            <li className="flex gap-2 justify-center items-center hover:text-[#F06C21] hover:font-semibold">
              <Link to="/about">
              <PersonIcon
                sx={{ color: "#F06C21" , fontSize: "30px" }}
                className="cursor-pointer -mt-[3px]"
              />
              </Link>
            </li>
            <li className="flex gap-2 justify-center items-center hover:text-[#F06C21] hover:font-semibold">
              <Link to="/search">
              <SearchRoundedIcon
                sx={{ color: "#F06C21" , fontSize: "30px" }}
                className="cursor-pointer -mt-[3px]"
              />
              </Link>
            </li>
            <li className="flex gap-2 justify-center items-center hover:text-[#F06C21] hover:font-semibold">
              <Link to="/login">
              <LoginIcon
                sx={{ color: "#F06C21" , fontSize: "30px" }}
                className="cursor-pointer -mt-[3px]"
              />
              </Link>
            </li>
            <li className="flex gap-2 justify-center items-center hover:text-[#F06C21] hover:font-semibold">
              <Link to="/cart">
              <ShoppingBasketIcon
                sx={{ color: "#F06C21" , fontSize: "30px" }}
                className="cursor-pointer -mt-[3px]"
              />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
