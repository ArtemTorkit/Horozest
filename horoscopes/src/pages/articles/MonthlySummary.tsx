import { useEffect, useState } from "react";
import { horoscopeMonthlyType } from "../../constants";
import { loading } from "../../assets";
import { zodiacSigns } from "../../constants";
import SideContent from "../../components/SideContent";
import { Helmet } from "react-helmet";
const MonthlySummary = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [horoscopeData, setHoroscopeData] = useState<horoscopeMonthlyType | null>(null);
  const [zodiacSign, setZodiacSign] = useState<string>("Aries");

  useEffect(() => {
    const bodyData = {
      zodiacSign: zodiacSign || 'Aries',
    };

    fetch("http://localhost:3000/monthly-summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setIsLoading(false);
        setHoroscopeData(data.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [zodiacSign]);

    return (
      <section className="mycontainer">
        <Helmet>
          <title>Monthly Horoscope Summary | horozest.com</title>
          <meta
            name="description"
            content="Get your monthly horoscope summary on horozest.com. Discover the key astrological highlights and insights for your zodiac sign this month."
          />
        </Helmet>
        <h1 className="font-radlay text-4xl mt-9">Monthly Horoscope Summary</h1>
        <select
          id="zodiac-select"
          value={zodiacSign}
          className="px-4 rounded-xl border bg-[#ececec] text-xl mt-4"
          onChange={(e) => setZodiacSign(e.target.value)}>
          {zodiacSigns.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <div className="mt-6 ">
          {!isLoading ? (
            <div className="text-lg">
              <p className="mt-2">
                {horoscopeData?.monthly_horoscope.personal}
              </p>
              <h2 className="text-xl mt-9">HEALTH</h2>
              <div className="mt-4 v">
                {horoscopeData?.monthly_horoscope.health}
              </div>
              <h2 className="text-xl mt-9">PROFESSION</h2>
              <div className="mt-4 text-lg">
                {horoscopeData?.monthly_horoscope.profession}
              </div>
              <h2 className="text-xl mt-9">EMOTIONS</h2>
              <div className="mt-4 text-lg">
                {horoscopeData?.monthly_horoscope.emotions}
              </div>
              <h2 className="text-xl mt-9">TRAVEL</h2>
              <div className="mt-4 text-lg">
                {horoscopeData?.monthly_horoscope.travel}
              </div>
              <h2 className="text-xl mt-9">LUCK</h2>
              <div className="mt-4">
                {horoscopeData?.monthly_horoscope.luck.map((text: string) => (
                  <p key={text} className="mt-1 text-lg">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center align-center">
              <img src={loading} className="w-[40px] h-[40px]" alt="" />
            </div>
          )}
        </div>
        <SideContent />
      </section>
    );
};

export default MonthlySummary;
