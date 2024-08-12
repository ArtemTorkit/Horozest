import { polygon } from '../assets';
import Horoscope from '../components/Horoscope';

const Home = () => {
  return (
    <div className="mycontainer">
      <div className="text-center mt-[40px]">
        <h1 className="font-radlay text-6xl">Choose Your <span><img src={polygon} alt="polygon" className='relative bottom-2 inline-block h-[50px] '/></span> Zodiac Sign</h1>
      </div>
      <div className="">
        <Horoscope/>
      </div>
    </div>
  );
}

export default Home
