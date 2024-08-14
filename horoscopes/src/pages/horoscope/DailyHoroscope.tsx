import HoroscopeNavigation from './HoroscopeNavigation'
import { loading } from '../../assets'
import { Link } from "react-router-dom";
import { horoscopeCategoryButtons } from "../../constants";

type DaillyHoroscopeType = {
    title: string
    zodiacSign: string
    horoscope: string
    isLoading: boolean
    date: string
    activeHoroscope: number
    time: string
    category: string
}

const DailyHoroscope = ({
  title,
  zodiacSign,
  horoscope,
  isLoading,
  date,
  activeHoroscope,
  time,
  category
}: DaillyHoroscopeType) => {

function capitalizeFirstLetter(string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  return (
    <div>
      <h1 className="text-4xl font-radlay font-bold mt-9 text-center">
        {title}
      </h1>
      <p className="text-center mt-2 text-gray-400">
        ({zodiacSign}, {date})
      </p>
      <div className="mt-6 font-raleway flex flex-col md:flex-row gap-4 ">
        <div className="md:max-w-[65%]">
          <HoroscopeNavigation
            baseLink={`/horoscopes/daily/${time}/${category}/`}
            zodiacSign={zodiacSign ?? "Aries"}
            activeHoroscope={activeHoroscope}
            category={category}
          />

          <div className="mt-6">
            <h2 className="font-bold text-xl">
              {capitalizeFirstLetter(category)} {zodiacSign} horoscope
            </h2>
            {!isLoading ? (
              <p className="mt-2">{horoscope}</p>
            ) : (
              <div className="flex justify-center align-center">
                <img src={loading} className="w-[40px] h-[40px]" alt="" />
              </div>
            )}
          </div>

          <h2 className="font-bold text-xl mt-6">
            More {zodiacSign} Horoscope
          </h2>
          <div className="flex flex-wrap gap-4 mt-4">
            {horoscopeCategoryButtons.map((button) => (
              <Link
                key={button.name}
                to={`/horoscopes/daily/${time}/${button.link}/${zodiacSign}`}
                className={`${
                  category == button.name.toLocaleLowerCase()
                    ? "bg-gray-400"
                    : "bg-blue hover:bg-[#2f52c4]"
                }  shadow shadow-lg hover:shadow-sm transition uppercase text-white rounded-lg px-4 py-1 flex gap-2 align-center`}>
                {" "}
                <img
                  src={button.icon}
                  className="relative bottom-[1px] w-[20px]"
                  alt=""
                />
                <div className="">{button.name}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-gray-200 w-full text-center md:max-w-[35%]">
          advertisement
        </div>
      </div>
    </div>
  );
};

export default DailyHoroscope
