import useFetchHoroscope from "../../hooks/useFetchHoroscope";
import { useParams, Link } from 'react-router-dom';
import HoroscopeNavigation from './HoroscopeNavigation';
import { useState } from 'react';
import { loading } from "../../assets";
import { horoscopeWeeklyType } from "../../constants";
import { horoscopeCategoryButtons } from "../../constants";

const WeeklyHoroscope = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { zodiacSign, category='personal' } = useParams();
  const zodiacSignValue = zodiacSign || "Aries";

  const { horoscope } = useFetchHoroscope<horoscopeWeeklyType>({
    zodiacSign: zodiacSignValue,
    date: "current",
    setIsLoading: setIsLoading,
    endpoint: "https://divineapi.com/api/1.0/get_weekly_horoscope.php",
    responseType: {} as horoscopeWeeklyType,
  });

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="mycontainer">
      <h1 className="text-4xl font-radlay font-bold mt-9 text-center">
        Weekly {capitalizeFirstLetter(category)} {zodiacSign} Horoscope
      </h1>
      <p className="text-center mt-2 text-gray-400">
        ({zodiacSign}, {horoscope?.week})
      </p>
      <div className="mt-6 font-raleway flex gap-4">
        <div className="max-w-[65%]">
          <HoroscopeNavigation
            baseLink={`/horoscopes/weekly/${category}/`}
            zodiacSign={zodiacSign ?? "Aries"}
            activeHoroscope={3}
            category={category}
          />

          <div className="mt-6">
            <h2 className="font-bold text-xl">
              {capitalizeFirstLetter(category)} {zodiacSign} horoscope
            </h2>
            {!isLoading ? (
              <p className="mt-2">
                {
                  horoscope?.weekly_horoscope[
                    category as keyof typeof horoscope.weekly_horoscope
                  ]
                }
              </p>
            ) : (
              <div className="flex justify-center align-center">
                <img
                  src={loading}
                  className="w-[40px] h-[40px]"
                  alt="Loading"
                />
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
                to={`/horoscopes/daily/weekly/${button.link}/${zodiacSign}`}
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
        <div className="bg-gray-200 w-full text-center max-w-[35%]">
          advertisement
        </div>
      </div>
    </div>
  );
}

export default WeeklyHoroscope
