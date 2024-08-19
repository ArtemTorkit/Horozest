
import { checkCompatibility, coffeeCup } from '../../assets';
import { Link } from 'react-router-dom';
import SideContent from '../../components/SideContent';
import { Helmet } from 'react-helmet';

const Articles = () => {
  return (
    <section className="mycontainer">
      <Helmet>
        <title>Horoscope & Astrology Articles | horozest.com</title>
        <meta
          name="description"
          content="Explore insightful horoscope and astrology articles on horozest.com. Discover in-depth analyses, guides, and tips to understand the stars."
        />
      </Helmet>
      <h1 className="text-4xl font-radlay mt-9 text-center">
        Astrology Articles
      </h1>
      <div className="mt-6 flex flex-wrap gap-6 justify-center">
        <Link to={"/articles/coffee-cup-reading"} className="">
          <div className="max-w-[300px] bg-gray-200 p-2 rounded-xl">
            <div className="bg-[#F74A46] px-2 rounded-xl object-cover h-[200px]">
              <img src={coffeeCup} alt="" />
            </div>
            <h2 className="">Coffe Cup Reading</h2>
          </div>
        </Link>
        <Link to={"/articles/monthly-summary"} className="">
          <div className="max-w-[300px] bg-gray-200 p-2 rounded-xl">
            <div className=" px-2 rounded-xl object-cover h-[200px] rounded-xl">
              <img
                src={checkCompatibility}
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <h2 className="">Monthly Horoscope Summary</h2>
          </div>
        </Link>
        <Link to={"/zodiac-signs"} className="">
          <div className="max-w-[300px] bg-gray-200 p-2 rounded-xl">
            <div className=" px-2 rounded-xl object-cover h-[200px] rounded-xl">
              <img
                src={checkCompatibility}
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <h2 className="">
              Your Guide to the Zodiac: Traits, Symbols, and More
            </h2>
          </div>
        </Link>
      </div>
      <SideContent />
    </section>
  );
}

export default Articles
