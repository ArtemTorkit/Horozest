import { useParams } from "react-router-dom";
import HoroscopeNavigation from "./HoroscopeNavigation";
import useFetchDailyHoroscope from "../../hooks/useFetchDailyHoroscope"
import { useState } from "react";
import { loading } from "../../assets";

type TodaysHoroscopeType = {
  date: string
}

const TodaysHoroscope = ({ date }: TodaysHoroscopeType) => {
  const [isLoading, setIsLoading] = useState(true)
  const { zodiacSign } = useParams();

  const zodiacSignValue = zodiacSign || "Aries";

  const { horoscope } = useFetchDailyHoroscope({
    zodiacSign: zodiacSignValue,
    date: date,
    setIsLoading: setIsLoading,
  });


  return (
    <div className="mycontainer">
      <h1 className="text-4xl font-radlay font-bold mt-9 text-center">
        Daily {zodiacSign} Horoscope{" "}
      </h1>
      <p className="text-center mt-2 text-gray-400">
        ({zodiacSign}, {date})
      </p>
      <div className="mt-6 font-raleway flex gap-4">
        <div className="max-w-[65%]">
          <HoroscopeNavigation
            baseLink="/horoscopes/daily/today/"
            zodiacSign={zodiacSign ?? "Aries"}
            activeHoroscope={1}
          />

          <div className="mt-6">
            <h2 className="font-bold text-xl">
              Personal {zodiacSign} horoscope
            </h2>
            {!isLoading ? (
              <p className="mt-2">{horoscope?.prediction.personal}</p>
            ) : (
              <div className="flex justify-center align-center">
                <img src={loading} className="w-[40px] h-[40px]" alt="" />
              </div>
            )}
          </div>
          {/* <div className="mt-6">
            <h2 className="font-bold text-xl">
              Emotional {zodiacSign} horoscope
            </h2>
            <p className="mt-2">
              <span>{horoscope?.prediction.emotions}</span>
            </p>
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-xl">
              Traveling {zodiacSign} horoscope
            </h2>
            <p className="mt-2">
              <span>{horoscope?.prediction.travel}</span>
            </p>
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-xl">
              Profesional {zodiacSign} horoscope
            </h2>
            <p className="mt-2">
              <span>{horoscope?.prediction.profession}</span>
            </p>
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-xl">Health {zodiacSign} horoscope</h2>
            <p className="mt-2">
              <span>{horoscope?.prediction.health}</span>
            </p>
          </div> */}
        </div>
        <div className="bg-gray-200 w-full text-center max-w-[35%]">
          advertisement
        </div>
      </div>
    </div>
  );
};

export default TodaysHoroscope;
