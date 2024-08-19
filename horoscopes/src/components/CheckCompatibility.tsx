
import { briefcase, checkCompatibility, gemini, heart, pisces } from '../assets'
import { Link } from 'react-router-dom';

const CheckCompatibility = () => {
  return (
    <section className="mycontainer flex gap-[60px] mt-[100px] flex-col md:flex-row">
      <div className=" flex flex-col justify-center gap-9 order-2 md:order-1">
        <h2 className="font-radlay text-4xl">
          Check Your Zodiac Sign Compatibility
        </h2>
        <p className="text-gray-700">
          Check how your zodiac sign aligns with others. Uncover the potential
          strengths and challenges in your relationships. Explore the cosmic
          connection between you and your partner. Gain insights into your love
          compatibility and see what the stars have in store for your future
          together.
        </p>
        <div className="flex gap-4 font-raleway flex-wrap">
          <Link
            to={"/zodiac-signs/love/compatibility"}
            className="bg-blue rounded-lg px-4 py-1 text-white flex gap-2 ">
            <img src={heart} loading="lazy" className="w-full h-full" alt="" />
            <div className="">LOVE</div>
          </Link>
          <Link
            to={"/zodiac-signs/career/compatibility"}
            className="bg-blue rounded-lg px-4 py-1 text-white flex gap-2 ">
            <img src={heart} loading="lazy" className="w-full h-full" alt="" />
            <div className="">SEX</div>
          </Link>
          <Link
            to={"/zodiac-signs/friendship/compatibility"}
            className="bg-blue rounded-lg px-4 py-1 text-white flex gap-2 ">
            <img
              src={briefcase}
              loading="lazy"
              className="w-full h-full"
              alt=""
            />
            <div className="">FRIENDSHIP</div>
          </Link>
        </div>
      </div>
      <div className="md:block hidden ">
        <div className="order-1 md:order-2 rounded-full flex justify-center align-center border border-dashed border-gray-300 border-2 p-9 relative w-[319px] h-[319px]">
          <div className="absolute top-[40px] rotate-[35deg] right-0 compatibility-one p-4 rounded-full">
            <img
              loading="lazy"
              src={pisces}
              className="w-[25px] h-[25px] "
              alt=""
            />
          </div>
          <div className=" w-[240px] h-[240px] rounded-full flex justify-center align-center border  border-2 border-gray-300 p-6">
            <div className="absolute top-[10px] rotate-[-25deg] right-[100px] compatibility-two p-4 rounded-full">
              <img
                loading="lazy"
                src={gemini}
                className="w-[25px] h-[25px] "
                alt=""
              />
            </div>
            <img
              loading="lazy"
              src={checkCompatibility}
              className="w-full h-full rounded-full object-cover "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckCompatibility
