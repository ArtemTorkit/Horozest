import { Helmet } from 'react-helmet';
import Horoscope from '../components/Horoscope';
import SideContent from '../components/SideContent';

const Home = () => {
  return (
    <div className="mycontainer">
      <div className="text-center md:mt-[30px]">
        <Helmet>
          <title>Horoscopes | find a horoscope for your needs</title>
          <meta
            name="description"
            content="Discover daily, weekly, and monthly horoscopes for free at horozest.com. Explore your astrological forecast and see what the stars have in store for you today!"
          />
        </Helmet>
        <h1 className="font-radlay font-bold text-[1.8rem] sm:text-[2.5rem]">
          Choose Your Horoscope Sign
        </h1>
      </div>
      <div className="">
        <Horoscope />
        <SideContent />
      </div>
    </div>
  );
}

export default Home
