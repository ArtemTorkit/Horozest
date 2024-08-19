
import { friendshipCompatibility, heart, user } from '../../assets';
import { Link } from 'react-router-dom';
import SideContent from '../../components/SideContent';
import { Helmet } from "react-helmet";

const FriendshipCompatibility = () => {
  return (
    <div>
      <section className="">
        <Helmet>
          <title>Zodiac Sign Friendship Compatibility | horozest.com</title>
          <meta
            name="description"
            content="Explore zodiac sign friendship compatibility on horozest.com. Find out which signs are the best friends for you based on astrology."
          />
        </Helmet>
        <h1 className="text-center mt-9 text-4xl font-radlay">
          Zodiac Sign Friendship Compatibility
        </h1>
        <img
          src={friendshipCompatibility}
          className="mx-auto mt-4"
          alt="friendship compatibility"
        />
        <div className="flex gap-4 font-raleway justify-center flex-wrap mx-center mt-4">
          <Link
            to={"/zodiac-signs/love/compatibility"}
            className="bg-blue rounded-lg px-4 py-1 text-white flex gap-2 ">
            <img src={heart} loading="lazy" alt="" />
            <div className="">LOVE</div>
          </Link>
          <Link
            to={"/zodiac-signs/career/compatibility"}
            className="bg-blue rounded-lg px-4 py-1 text-white flex gap-2 ">
            <img src={heart} loading="lazy" alt="" />
            <div className="">SEX</div>
          </Link>
          <Link
            to={"/zodiac-signs/friendship/compatibility"}
            className="bg-blue rounded-lg px-4 py-1 text-white flex gap-2 ">
            <img src={user} loading="lazy" alt="" />
            <div className="">FRIENDSHIP</div>
          </Link>
        </div>
      </section>
      <SideContent />
    </div>
  );
}

export default FriendshipCompatibility
