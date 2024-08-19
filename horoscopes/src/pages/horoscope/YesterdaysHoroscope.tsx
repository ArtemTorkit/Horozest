import { useParams } from "react-router-dom";
import useFetchHoroscope from "../../hooks/useFetchHoroscope";
import { useState } from "react";
import { horoscopeDailyType } from "../../constants";
import DailyHoroscope from "./DailyHoroscope";
import { Helmet } from "react-helmet";

type YesterdaysHoroscopeType = {
  date: string;
};

const YesterdaysHoroscope = ({ date }: YesterdaysHoroscopeType) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { zodiacSign, category = "personal" } = useParams<{
    zodiacSign: string;
    category: keyof horoscopeDailyType["prediction"];
  }>();
  const zodiacSignValue = zodiacSign || "Aries";

  const { horoscope } = useFetchHoroscope<horoscopeDailyType>({
    zodiacSign: zodiacSignValue,
    date: date,
    setIsLoading: setIsLoading,
    responseType: {} as horoscopeDailyType,
  });

  const horoscopeValue = horoscope || {
    sign: "Aries",
    prediction: {
      personal: "try again",
      health: "try again",
      profession: "try again",
      emotions: "try again",
      travel: "try again",
      luck: ["try again"],
    },
  };

      function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      } 
  return (
    <div className="mycontainer">
      <Helmet>
        <title>{zodiacSign} Horoscopes: Yesterday | horozest.com</title>
        <meta
          name="description"
          content={`Review your free ${zodiacSign} horoscope for yesterday on horozest.com. Discover how yesterday's planetary shifts influenced your day.`}
        />
      </Helmet>
      {category === "luck" ? (
        <p>Your luck prediction is in progress.</p>
      ) : (
        <DailyHoroscope
          title={`Tomorrow's ${capitalizeFirstLetter(
            category
          )} ${zodiacSign} Horoscope`}
          horoscope={horoscopeValue.prediction[category] as string}
          isLoading={isLoading}
          zodiacSign={zodiacSignValue}
          date={date}
          activeHoroscope={0}
          time="today"
          category={category}
        />
      )}
    </div>
  );};

export default YesterdaysHoroscope
