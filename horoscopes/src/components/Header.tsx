import { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Header = () => {
  const [burger, setBurger] = useState<boolean>(false);

  return (
    <header>
      <div className="mycontainer flex lg:block">
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
          className={` fixed  lg:opacity-100  right-0 transition top-[30vh] lg:top-0  lg:relative raleway font-[500] text-[15px] max-w-[777px] mx-auto 
          ${
            burger
              ? "block translate-x-[0%]"
              : "translate-x-[100%] lg:translate-x-0"
          } bg-white lg:bg-transparent shadow-md lg:shadow-none w-[200px] lg:w-auto rounded-l-[10px]`}>
          <ul className="flex text-center gap-4 lg:gap-9 lg:justify-center flex-col lg:flex-row p-4 lg:p-0">
            <li
              className="transition hover:text-purple hover:scale-[1.05]"
              onClick={() => setBurger(false)}>
              <Link to="/">HOME PAGE</Link>
            </li>
            <li
              className="transition hover:text-purple hover:scale-[1.05]"
              onClick={() => setBurger(false)}>
              <Link to="/articles">ARTICLES</Link>
            </li>
            <li
              className="transition hover:text-purple hover:scale-[1.05]"
              onClick={() => setBurger(false)}>
              <Link to="/zodiac-signs/aries">ZODIAC SIGNS</Link>
            </li>
            <li
              className="transition hover:text-purple hover:scale-[1.05]"
              onClick={() => setBurger(false)}>
              <Link to="/horoscopes/daily/aries">HOROSCOPES</Link>
            </li>
            <li
              className="transition hover:text-purple hover:scale-[1.05]"
              onClick={() => setBurger(false)}>
              <Link
                to="/zodiac-signs/love/compatibility"
                onClick={() => setBurger(false)}>
                COMPATIBILITY
              </Link>
            </li>
            <li
              className="transition hover:text-purple hover:scale-[1.05]"
              onClick={() => setBurger(false)}>
              <Link to="/zodiac-signs/love/compatibility">DAILY ASTROLOGY</Link>
            </li>
            <li
              onClick={() => setBurger(false)}
              className=" hover:scale-[1.05] cursor-pointer lg:hidden text-black hover:text-purple transition flex justify-center">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="current"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                  fill="currentColor"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
