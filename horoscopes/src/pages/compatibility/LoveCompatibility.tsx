
import { heart, loveCompatibility, user } from '../../assets'
import { Link } from 'react-router-dom';
import SideContent from '../../components/SideContent';
import { Helmet } from "react-helmet";

const LoveCompatibility = () => {
  return (
    <>
      <section className="mycontainer">
        <Helmet>
          <title>Zodiac Sign Love Compatibility | horozest.com</title>
          <meta
            name="description"
            content="Uncover zodiac sign love compatibility on horozest.com. Explore how the stars influence chemistry and connection between signs."
          />
        </Helmet>

        <h1 className="text-center mt-9 text-4xl font-radlay">
          Zodiac Sign Love Compatibility
        </h1>
        <img
          src={loveCompatibility}
          className="mx-auto mt-4"
          alt="love compatibility"
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
    </>
  );
}

export default LoveCompatibility
