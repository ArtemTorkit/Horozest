import { useEffect, useState } from 'react';

type FetchHoroscopeProps<T> = {
  zodiacSign: string;
  date: string;
  endpoint?: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  responseType: T; // Тип відповіді
};

const useFetchHoroscope = <T>({ zodiacSign, date, endpoint, setIsLoading }: FetchHoroscopeProps<T>) => {
  const [horoscope, setHoroscope] = useState<T | undefined>(undefined);

  useEffect(() => {
  const data = {
    zodiacSign: zodiacSign,
    date: date,
    endpoint: endpoint,
  };

fetch('http://localhost:3000/horoscope', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result.horoscope);
  setHoroscope(result.horoscope)
  setIsLoading(false)
})
  .catch(error => {
  // setIsLoading(false)
  console.error('Error:', error);
});

  }, [zodiacSign, date, endpoint, setIsLoading]);

  return { horoscope };
};

export default useFetchHoroscope;
