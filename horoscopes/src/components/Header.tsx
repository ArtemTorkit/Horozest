import { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Header = () => {
  const [burger, setBurger] = useState<boolean>(false);

  return (
    <header>
      <div className="container flex lg:block">
        <div className="w-full flex justify-between my-6 items-center">
          <div className="lg:w-[200px] lg:block hidden"></div>
          <div className="flex-1 flex justify-center">
            <img src={logo} alt="Logo" className="h-[33px]" />
          </div>
          <div className="lg:w-[200px] flex justify-end ">
            <div
              className={`burger-menu lg:hidden ${burger ? "active" : ""}`}
              onClick={() => setBurger(!burger)}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <nav
          className={` fixed  right-0  top-[30vh] lg:top-0  lg:relative raleway font-[500] text-[15px] max-w-[777px] mx-auto 
          ${
            burger
              ? "block"
              : "hidden lg:block"
          } bg-white lg:bg-transparent shadow-md lg:shadow-none w-[200px] lg:w-auto rounded-l-[10px]`}>
          <ul className="flex text-center gap-4 lg:gap-9 lg:justify-center flex-col lg:flex-row p-4 lg:p-0">
            <li className="transition hover:text-purple hover:scale-[1.05]">
              <Link to="/">HOME PAGE</Link>
            </li>
            <li className="transition hover:text-purple hover:scale-[1.05]">
              <Link to="/articles">ARTICLES</Link>
            </li>
            <li className="transition hover:text-purple hover:scale-[1.05]">
              <Link to="/zodiac-signs/aries">ZODIAC SIGNS</Link>
            </li>
            <li className="transition hover:text-purple hover:scale-[1.05]">
              <Link to="/horoscopes/daily/aries">HOROSCOPES</Link>
            </li>
            <li className="transition hover:text-purple hover:scale-[1.05]">
              <Link to="/zodiac-signs/love/compatibility">COMPATIBILITY</Link>
            </li>
            <li className="transition hover:text-purple hover:scale-[1.05]">
              <Link to="/zodiac-signs/love/compatibility">DAILY ASTROLOGY</Link>
            </li>
            <li
              onClick={() => setBurger(false)}
              className="cursor-pointer lg:hidden mt-2">
              CLOSE
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
