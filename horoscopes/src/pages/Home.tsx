import Horoscope from '../components/Horoscope';
import SideContent from '../components/SideContent';

const Home = () => {
  return (
    <div className="mycontainer">
      <div className="text-center md:mt-[30px]">
        <h1 className="font-radlay font-bold text-[1.8rem] sm:text-[2.5rem]">
          Choose Your Horoscope Sign
        </h1>
      </div>
      <div className="">
        <Horoscope />
        <SideContent/>
      </div>
    </div>
  );
}

export default Home
