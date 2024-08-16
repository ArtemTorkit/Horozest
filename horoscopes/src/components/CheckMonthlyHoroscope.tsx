import React from 'react'
import { Link } from 'react-router-dom';
import { checkMonthlySummary } from '../assets';

const CheckMonthlyHoroscope = () => {
  return (
    <section className="">
      <Link
        to={"/"}
        className="bg-[#000] flex flex-col items-center lg:items-start lg:flex-row lg:gap-9 rounded-xl px-9 mt-[100px] shadow-xl">
        <div className="lg:py-2 py-4 text-white flex flex-col justify-center text-center lg:text-left ">
          <h2 className="text-4xl font-radlay mb-2">
            Monthly Horoscope Summary
          </h2>
          <p className="text-lg">
            A monthly horoscope summary provides an overview of the astrological
            influences affecting your life over the entire month. It covers key
            areas like luck, emotions, health, and relationships, offering
            insights into the month ahead. This guide helps you plan for
            significant events and align with the broader cosmic energies at
            play.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={checkMonthlySummary}
            loading="lazy"
            className="  lg:h-[12rem] lg:w-auto "
            alt="Coffee Cup"
          />
        </div>
      </Link>
    </section>
  );
}

export default CheckMonthlyHoroscope
