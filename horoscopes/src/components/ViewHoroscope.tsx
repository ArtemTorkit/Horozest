import { Link } from 'react-router-dom'
import { viewHoroscope } from '../assets';

const ViewHoroscope = () => {
  return (
    <section className="mycontainer mt-[100px]">
      <div className="flex items-center gap-4">
        <div className="w-full">
          <h2 className="text-3xl font-radlay">Discover Your Horoscope</h2>
          <p className="mt-6 text-gray-700 max-w-[700px]">
            Curious about what the stars have in store for you? Click the button
            below to explore your personalized horoscope and uncover insights
            about your day, week, or even month ahead.
          </p>
          <div className="w-full text-white uppercase flex mt-6 gap-4 flex flex-wrap">
            <Link
              to={"/horoscopes/daily/yesterday/personal/Aries"}
              className="bg-blue px-4 py-2 rounded-lg shadow-xl">
              Yesterday
            </Link>
            <Link
              to={"/horoscopes/daily/today/personal/aries"}
              className="bg-blue px-4 py-2 rounded-lg shadow-xl">
              Today
            </Link>
            <Link
              to={"/horoscopes/daily/tomorrow/personal/aries"}
              className="bg-blue px-4 py-2 rounded-lg shadow-xl">
              Tomorrow
            </Link>
            <Link
              to={"/horoscopes/daily/yesterday/prediction/aries"}
              className="bg-blue px-4 py-2 rounded-lg shadow-xl">
              Weekly
            </Link>
            <Link
              to={"/horoscopes/daily/yesterday/prediction/aries"}
              className="bg-blue px-4 py-2 rounded-lg shadow-xl">
              monthly
            </Link>
          </div>
        </div>
        <div className=" hidden md:block w-[400px] h-[250px]">
          <img
            src={viewHoroscope}
            className="rounded-xl w-full h-full object-cover object-top"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default ViewHoroscope
