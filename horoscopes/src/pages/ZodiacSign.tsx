
import { zodiacSignsInfo } from '../constants'
import { Link } from 'react-router-dom';
import SideContent from '../components/SideContent';

const ZodiacSign = () => {

  return (
    <section className="mycontainer mt-9">
      <h1 className="text-center font-radlay text-4xl">
        Your Guide to the Zodiac: Traits, Symbols, and More
      </h1>
      <div className="">
        {zodiacSignsInfo.map((sign) => (
          <div className="" key={sign.name}>
            <div className="bg-blue rounded-xl mt-[50px] text-white p-4 flex justify-between">
              <div className="flex gap-4 items-center">
                <img src={sign.sign} className="w-[40px]" alt="" />
                <div className="">
                  <div className="text-xl uppercase font-bold">{sign.name}</div>
                  <div className="text-gray-200">({sign.dates})</div>
                </div>
              </div>
              <div className=" w-[160px]">
                <div className="">
                  <span className="font-bold">Element:</span> {sign.element}
                </div>
                <div className="">
                  <span className="font-bold">Symbol:</span> {sign.symbol}
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-[90%]">
                <div className="mt-4 text-lg">
                  <div className=" flex flex-col gap-2">
                    <p>
                      <span className="font-bold">Traits:</span> {sign.traits}
                    </p>
                    <p>
                      <span className="font-bold">Strengths:</span>{" "}
                      {sign.strengths.map((strenght) => (
                        <span key={strenght}>{strenght}, </span>
                      ))}
                    </p>
                    <p>
                      <span className="font-bold">Chalanges:</span>{" "}
                      {sign.challenges.map((challenge) => (
                        <span key={challenge}>{challenge}, </span>
                      ))}
                    </p>
                  </div>
                  <div className="mt-6 ">
                    <p className="text-xl font-bold">
                      {sign.name} Sign Description
                    </p>
                    <p className="mt-2 text-lg">{sign.description}</p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/horoscopes/daily/today/personal/${sign.name}`}
                      className="px-4 bg-blue rounded-lg py-1 text-white ">
                      {sign.name.toUpperCase()} HOROSCOPE
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-4 shadow shadow-xl">
                <img src={sign.image} className="rounded-xl" loading='lazy' alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <SideContent/>
    </section>
  );
}

export default ZodiacSign
