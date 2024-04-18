import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import logoImg from "./images/logo.png";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LoginIcon from "@mui/icons-material/Login";
import { OFFERS } from "../utils/constants";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const [logo] = useTypewriter({
    words: ["Pakwaan", "पकवान"],
    loop: false,
    delaySpeed: 1500,
  });
  return (
    <div className="header top-0 sticky z-[999] bg-white shadow-md shadow-neutral-200 py-2">
      <div className="flex justify-around irems-center h-20 w-[100%]">
        <div className="logo flex items-center xl:px-40 lg:px-16 px-10 fixed left-0">
          <div className="text text-2xl mt-6">
            <Link to="/">{logo}</Link>
          </div>
          <div className="logo-img -ml-3">
            <img src={logoImg} alt="logo image" className="w-14" />
          </div>
        </div>
        <div className="nav-items right-0 fixed xl:px-40 lg:px-16">
          <ul className="nav-links lg:flex items-center hidden uppercase leading-[4.4rem] gap-12 text-sm">
            <li>Online Status:</li>
            <li className="flex gap-2 justify-center items-center">
              <Link to="/about">About Us</Link>
              <PersonIcon
                sx={{ color: "#F06C21" }}
                className="cursor-pointer -mt-[3px]"
              />
            </li>
            <li className="flex gap-2 justify-center items-center">
              <Link to="/about">Offers</Link>
              <img src={OFFERS} alt="offers" />
            </li>
            <li className="flex gap-2 justify-center items-center">
              <Link to="/about">Sign In</Link>
              <LoginIcon
                sx={{ color: "#F06C21" }}
                className="cursor-pointer -mt-[3px]"
              />
            </li>
            <li className="flex gap-2 justify-center items-center">
              <Link to="/about">Cart</Link>
              <ShoppingBasketIcon
                sx={{ color: "#F06C21" }}
                className="cursor-pointer -mt-[3px]"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
