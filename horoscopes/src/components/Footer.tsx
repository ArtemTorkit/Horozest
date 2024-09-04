
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-blue-600 mycontainer mt-[150px] border-t border-gray-300  pt-4">
      <div className="">
        <ul className="flex flex-wrap gap-4 justify-center text-gray-500 ">
          <li className="transition hover:text-purple hover:scale-[1.05]">
            <Link to="/">HOME PAGE</Link>
          </li>
          <li className="transition hover:text-purple hover:scale-[1.05]">
            <Link to="/articles">ARTICLES</Link>
          </li>
          <li className="transition hover:text-purple hover:scale-[1.05]">
            <Link to="/zodiac-signs">ZODIAC SIGNS</Link>
          </li>
          <li className="transition hover:text-purple hover:scale-[1.05]">
            <Link to="/horoscopes/daily/today/personal/aries">HOROSCOPES</Link>
          </li>
          <li className="transition hover:text-purple hover:scale-[1.05]">
            <Link to="/zodiac-signs/love/compatibility">COMPATIBILITY</Link>
          </li>
          <li className="transition hover:text-purple hover:scale-[1.05]">
            <Link to="/privacy">PRIVACY</Link>
          </li>
        </ul>
      </div>
      <p className="text-center my-6 text-gray-400">
        © Copyright 2024 - Horozest.com, All rights reserved
      </p>
    </footer>
  );
}

export default Footer
