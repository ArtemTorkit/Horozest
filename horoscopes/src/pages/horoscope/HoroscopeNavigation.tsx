import { horoscopeButtons } from '../../constants'
import { Link } from 'react-router-dom';
import { zodiacSigns } from '../../constants';
import { useNavigate } from 'react-router-dom';

type HoroscopeNavigationType = {
  zodiacSign: string,
  activeHoroscope: number
  baseLink: string
  category: string
}

const HoroscopeNavigation = ({
  zodiacSign,
  activeHoroscope,
  baseLink,
  category
}: HoroscopeNavigationType) => {
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`${baseLink}${e.target.value}`);
  }

  return (
    <div className="font-raleway flex flex-wrap justify-center gap-6 border-b border-[#D9D9D9] pb-2 text-[0.8rem] sm:text-[0.7 rem]">
      {horoscopeButtons.map((button, index) => (
        <Link
          key={button.name}
          to={`${button.link}${category}/${zodiacSign}`}
          type="button"
          className={`${
            activeHoroscope == index
              ? "bg-purple font-bold text-white"
              : "hover:text-purple hover:scale-[1.05]"
          } transition px-4 rounded-xl`}>
          {button.name}
        </Link>
      ))}
      <select
        id="zodiac-select"
        value={zodiacSign}
        className="px-4 rounded-xl border bg-[#ececec]"
        onChange={(e) => handleChange(e)}>
        {zodiacSigns.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HoroscopeNavigation
