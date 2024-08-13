import { useEffect, useState } from 'react';
import { horoscopeType } from '../constants';

type FetchDailyHoroscopeProps = {
  zodiacSign: string;
  date: string;
  endpoint?: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const FetchDailyHoroscopeProps = ({ zodiacSign, date, endpoint, setIsLoading}: FetchDailyHoroscopeProps) => {
  const [horoscope, setHoroscope] = useState<horoscopeType>();

  useEffect(() => {
    const formData = new FormData();

    if (zodiacSign && date) {
      formData.append("sign", zodiacSign.toUpperCase());
      formData.append("api_key", import.meta.env.VITE_DIVINE_API_KEY);
      formData.append("date", date);
      if (!endpoint) {
        formData.append("timezone", "1");
      }
      if (endpoint == 'https://divineapi.com/api/1.0/get_weekly_horoscope.php') {
        formData.append("week", 'current')
      }
      if (endpoint == 'https://divineapi.com/api/1.0/get_monthly_horoscope.php') {
        formData.append("month", 'current')
        
      }
    }

    const fetchHoroscope = async () => {
      try {
        const response = await fetch( endpoint || 'https://divineapi.com/api/1.0/get_daily_horoscope.php', {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        console.log(data)
        setHoroscope(data.data);
        setIsLoading(false)
      } catch (error) {
          setIsLoading(false)
          console.log(error)
      }
    };

    if (zodiacSign && date) {
      fetchHoroscope();
    }
  }, [zodiacSign, date]);

  return { horoscope };
};

export default FetchDailyHoroscopeProps;
