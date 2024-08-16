import React, { useEffect, useState } from "react";
import { horoscopeMonthlyType } from "../../constants";
import useFetchHoroscope from "../../hooks/useFetchHoroscope";
import { loading } from "../../assets";
import { zodiacSigns } from "../../constants";

const MonthlySummary = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [horoscopeData, setHoroscopeData] = useState({});
  const [zodiacSign, setZodiacSign] = useState<string>("Aries");

  // setHoroscopeData(useFetchHoroscope<horoscopeMonthlyType>({
  //     zodiacSign: zodiacSign,
  //     date: "current",
  //     setIsLoading: setIsLoading,
  //     endpoint: "https://divineapi.com/api/1.0/get_monthly_horoscope.php",
  //     responseType: {} as horoscopeMonthlyType,
  // }))

  useEffect(() => {
    const formData = new FormData();

    formData.append("sign", zodiacSign.toUpperCase());
    formData.append("api_key", import.meta.env.VITE_DIVINE_API_KEY);
    formData.append("month", "current");
    fetch("https://divineapi.com/api/1.0/get_monthly_horoscope.php", {
      method: "POST",
      body: formData,
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
        <div className="mt-6 max-w-[70%]">
          {!isLoading ? (
            <div className="">
              <p className="mt-2">
                {horoscopeData?.monthly_horoscope.personal}
              </p>
              <h2 className="text-xl mt-9">HEALTH</h2>
              <div className="mt-4">
                {horoscopeData?.monthly_horoscope.health}
              </div>
              <h2 className="text-xl mt-9">PROFESSION</h2>
              <div className="mt-4">
                {horoscopeData?.monthly_horoscope.profession}
              </div>
              <h2 className="text-xl mt-9">EMOTIONS</h2>
              <div className="mt-4">
                {horoscopeData?.monthly_horoscope.emotions}
              </div>
              <h2 className="text-xl mt-9">TRAVEL</h2>
              <div className="mt-4">
                {horoscopeData?.monthly_horoscope.travel}
              </div>
              <h2 className="text-xl mt-9">LUCK</h2>
              <div className="mt-4">
                {horoscopeData?.monthly_horoscope.luck.map((text: string) => (
                  <p key={text} className="mt-1">{text}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center align-center">
              <img src={loading} className="w-[40px] h-[40px]" alt="" />
            </div>
          )}
        </div>
      </section>
    );
};

export default MonthlySummary;
