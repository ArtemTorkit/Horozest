import {useState} from 'react'
import {zodiacSigns} from '../constants'
import { Link } from 'react-router-dom'
import HoroscopeNav from "./HoroscopeNav";

type zodiacSignType = {
    name: string,
    startDate: string,
    endDate: string,
    sign: string,
}

const Horoscope = () => {
    const [horoscope, setHoroscope] = useState<string>("/horoscopes/daily/today/");
    const [degrees, setDegree] = useState<number>(45);
    const [enteredOnSigns, setEnteredOnSigns] = useState<boolean[]>(
      Array(12).fill(false)
    );

    const handleMouseEnter = (index: number) => {
        console.log('over: ', index)
        setEnteredOnSigns((prevSigns) => {
          const newSigns = [...prevSigns];
          newSigns[index] = true;
          return newSigns;
        });
        setTimeout(() => {
            setEnteredOnSigns((prevSigns) => {
              const newSigns = [...prevSigns];
              newSigns[index] = false;
              return newSigns;
            });
        },1000)
    }
    console.log('render horoscope component')

  return (
    <div className="mycontainer mt-9 ">
      <HoroscopeNav setHoroscope={setHoroscope} setDegree={setDegree} />
      <div className="grid grid-cols-3 lg:grid-cols-6 mt-4 gap-4">
        {zodiacSigns.map((sign: zodiacSignType, index) => (
          <Link
            onMouseEnter={() => handleMouseEnter(index)}
            to={`${horoscope}personal/${sign.name}`}
            key={sign.name}
            className={`text-center cursor-pointer select-none 
              }`}>
            <div className="relative mx-auto flex hover:shadow-blink transition ease-in-out align-center  justify-center md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-full">
              <div
                className={`w-full h-full shadow  transition ease-in-out duration-100 rounded-full ${
                  enteredOnSigns[index] ? " shadow-blink" : "shadow-xl"
                }`}>
                <div
                  className="w-full h-full transition duration-500 rounded-full  border border-[#D9D9D9] mx-auto "
                  style={{
                    backgroundImage: `linear-gradient(45deg, #ff7e5f, #feb47b)`,
                    transform: `rotate(${degrees}deg)`,
                  }}></div>
              </div>
              <div className="absolute w-full h-full flex align-center justify-center">
                <img src={sign.sign} alt={sign.name} className=" w-[40px] " />
              </div>
            </div>

            <div className="mt-2">{sign.name}</div>
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
