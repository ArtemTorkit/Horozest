import {useState, Dispatch, SetStateAction} from 'react'
import { horoscopeButtons } from '../constants';

type HoroscopeNavType = {
  setHoroscope: Dispatch<SetStateAction<string>>;
  setDegree: Dispatch<SetStateAction<number>>;
};

const HoroscopeNav = ({
  setHoroscope,
  setDegree,
}: HoroscopeNavType) => {
  const [activeOption, setActiveOption] = useState(1);


  const handleActiveHoroscope = (link: string, index: number) => {
    setDegree(Math.floor(Math.random() * 360));
    setHoroscope(link);
    setActiveOption(index);
  };

  return (
    <div className="font-raleway flex flex-wrap justify-center gap-6 border-b border-[#D9D9D9] pb-2 text-[0.8rem] sm:text-[1rem]">
      {horoscopeButtons.map((button, index) => (
        <button
          key={button.name}
          type="button"
          onClick={() => handleActiveHoroscope(button.link, index)}
          className={`${
            activeOption == index
              ? "bg-purple font-bold text-white"
              : "hover:text-purple hover:scale-[1.05]"
          } transition px-4 rounded-xl`}>
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default HoroscopeNav
