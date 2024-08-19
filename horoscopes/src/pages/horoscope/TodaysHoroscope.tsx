import useFetchHoroscope from "../../hooks/useFetchHoroscope"
import { useState } from "react";
import { horoscopeDailyType } from "../../constants";
import DailyHoroscope from "./DailyHoroscope";  
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
type TodaysHoroscopeType = {
  date: string
}

const TodaysHoroscope = ({ date  }: TodaysHoroscopeType) => {
  const [isLoading, setIsLoading] = useState(true)
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
      <div className="mycontainer font-raleway">
        <Helmet>
          <title>{zodiacSign} Horoscopes: Today | horozest.com</title>
          <meta
            name="description"
            content={`Check your free daily ${zodiacSign} horoscope on horozest.com. See what the planets reveal about your day today!`}
          />
        </Helmet>
        {category === "luck" ? (
          <p>Your luck prediction is in progress.</p> // You can customize this message or component
        ) : (
          <DailyHoroscope
            title={`Today's ${capitalizeFirstLetter(
              category
            )} ${zodiacSign} Horoscope`}
            horoscope={horoscopeValue.prediction[category] as string}
            isLoading={isLoading}
            zodiacSign={zodiacSignValue}
            date={date}
            activeHoroscope={1}
            time="today"
            category={category}
          />
        )}
      </div>
    );
};

export default TodaysHoroscope;
