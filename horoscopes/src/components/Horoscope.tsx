import { useState } from 'react'

import zodiacSigns from '../constants'
import { Link } from 'react-router-dom'

type zodiacSignType = {
    name: string,
    startDate: string,
    endDate: string,
    sign: string,
}

const horoscopeButtons = [
  { name: "YESTERDAY", link: "/yesterday" },
  { name: "TODAY", link: "/today" },
  { name: "TOMORROW", link: "/today" },
  { name: "WEEKLY", link: "/today" },
  { name: "MONTHLY", link: "/today" },
  { name: "CHOOSE DATE", link: "/today" },
];

const Horoscope = () => {
    const [horoscope, setHoroscope] = useState<string>('')
    const [activeOptoin, setActiveOption] = useState<number>(1)
    const [degrees, setDegree] = useState<number>(
      45
    );

    const handleActiveHoroscope = (link:string, index:number) => {
        setDegree(Math.floor(Math.random() * 360));
        setHoroscope(link)
        setActiveOption(index)
    }

    console.log('render horoscope component')

  return (
    <div className="mycontainer mt-9 ">
      <div className="font-raleway flex flex-wrap justify-center gap-6 border-b border-[#D9D9D9] pb-2">
        {horoscopeButtons.map((button, index) => (
          <button
            key={button.name}
            type="button"
            onClick={() => handleActiveHoroscope(button.link, index)}
            className={`${
              activeOptoin == index
                ? "bg-purple font-bold text-white"
                : "hover:text-purple hover:scale-[1.05]"
            } transition px-4 rounded-xl`}>
            {button.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 mt-4 gap-4">
        {zodiacSigns.map((sign: zodiacSignType) => (
          <Link
            to={`${horoscope}/${sign.name}`}
            key={sign.name}
            className="text-center cursor-pointer">
            <div className="relative mx-auto flex align-center justify-center">
              <div className="w-[100px] h-[100px] shadow shadow-xl rounded-full">
                <div
                  className=" w-[100px] h-[100px] transition duration-500 rounded-full  border border-[#D9D9D9] mx-auto "
                  style={{
                    backgroundImage: `linear-gradient(45deg, #ff7e5f, #feb47b)`,
                    transform: `rotate(${degrees}deg)`,
                  }}></div>
              </div>
                <div className="absolute w-full h-full flex align-center justify-center">
                    <img src={sign.sign} alt={sign.name} className=" w-[40px] " />
                </div>
            </div>

            <div>{sign.name}</div>
            <div className="text-gray-400">
              {sign.startDate} - {sign.endDate}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Horoscope
