import React from 'react'
import { friendshipCompatibility, heart, user } from '../../assets';
import { Link } from 'react-router-dom';

const FriendshipCompatibility = () => {
  return (
    <div>
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
    </div>
  );
}

export default FriendshipCompatibility
