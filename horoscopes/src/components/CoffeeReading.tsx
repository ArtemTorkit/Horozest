import { Link } from 'react-router-dom';
import { coffeeCup } from '../assets';

const CoffeeReading = () => {
 

    return (
      <section className="">
        <Link
          to={"/articles/coffee-cup-reading"}
          className="bg-[#F74A46] flex flex-col items-center lg:items-start lg:flex-row lg:gap-9 rounded-xl px-9 mt-[100px] shadow-xl">
          <div className="flex-shrink-0">
            <img
              src={coffeeCup}
              loading='lazy'
              className="lg:h-[12rem] lg:w-auto "
              alt="Coffee Cup"
            />
          </div>
          <div className="lg:py-2 py-4 text-white flex flex-col justify-center text-center lg:text-left ">
            <h2 className="text-4xl font-radlay mb-2">
              Astrology Coffee Cup Readings
            </h2>
            <p className="text-lg">
              Get ready for a touch of cosmic insight with a randomly selected
              coffee cup reading. Each reading offers a unique glimpse into your
              future, revealing hidden patterns and messages from the universe.
              Embrace the chance to explore your destiny with a fresh
              perspective from the stars.
            </p>
          </div>
        </Link>
      </section>
    );
}

export default CoffeeReading
