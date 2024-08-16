import CheckCompatibility from '../components/CheckCompatibility';
import CheckMonthlyHoroscope from '../components/CheckMonthlyHoroscope';
import CoffeeReading from '../components/CoffeeReading';
import Horoscope from '../components/Horoscope';
import ViewHoroscope from '../components/ViewHoroscope';

const Home = () => {
  return (
    <div className="mycontainer">
      <div className="text-center mt-[30px]">
        <h1 className="font-radlay text-[2rem] sm:text-[2.5rem]">
          Choose Your Horoscope Sign
        </h1>
      </div>
      <div className="">
        <Horoscope />
        <CheckMonthlyHoroscope/>
        <CheckCompatibility />
        <CoffeeReading/>
        <ViewHoroscope/>
      </div>
    </div>
  );
}

export default Home
