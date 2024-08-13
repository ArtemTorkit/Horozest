import Horoscope from '../components/Horoscope';

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
      </div>
    </div>
  );
}

export default Home
