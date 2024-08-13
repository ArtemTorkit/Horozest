import useFetchDailyHoroscope from "../../hooks/useFetchDailyHoroscope";
import { useParams } from 'react-router-dom';
import HoroscopeNavigation from './HoroscopeNavigation';
import { useState } from 'react';
import { loading } from "../../assets";

const WeeklyHoroscope = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { zodiacSign } = useParams<{ zodiacSign?: string }>();
  const zodiacSignValue = zodiacSign || "Aries";
  const { horoscope } = useFetchDailyHoroscope({
    zodiacSign: zodiacSignValue,
    date: "current",
    setIsLoading: setIsLoading,
    endpoint: "https://divineapi.com/api/1.0/get_weekly_horoscope.php",
  });
  return (
    <div className="mycontainer">
      <h1 className="text-4xl font-radlay font-bold mt-9 text-center">
        Tomorrows {zodiacSign} Horoscope
      </h1>
      <p className="text-center mt-2 text-gray-400">
        ({zodiacSign}, {horoscope?.week})
      </p>
      <div className="mt-6 font-raleway flex gap-4">
        <div className="max-w-[65%]">
          <HoroscopeNavigation
            baseLink="/horoscopes/weekly/"
            zodiacSign={zodiacSign ?? "Aries"}
            activeHoroscope={3}
          />

          <div className="mt-6">
            <h2 className="font-bold text-xl">
              Personal {zodiacSign} horoscope
            </h2>
            {!isLoading ? (
            
            <p className="mt-2">{horoscope?.weekly_horoscope.personal}</p>
            ) : (
                <div className="flex justify-center align-center">
                  <img src={loading} className="w-[40px] h-[40px]" alt="" />
                </div>
            )}

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
