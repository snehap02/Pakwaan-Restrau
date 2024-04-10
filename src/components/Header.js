import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import logoImg from "./images/logo.png"

const Header = () => {
  const [logo] = useTypewriter({
    words: ["Pakwaan", "पकवान"],
    loop: false,
    delaySpeed: 1500,
  });
  return (
    <div className="header">
      <div className="logo flex items-center px-8">
        <div className="text text-2xl mt-6">
          <span>{logo}</span>
          {/* <Cursor cursorStyle={"|"} /> */}
        </div>
        <div className="logo-img -ml-3">
            <img src={logoImg} alt="logo image" className="w-14"/>
        </div>
      </div>
      <div className="nav-items">
        <ul className="nav-links">
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
