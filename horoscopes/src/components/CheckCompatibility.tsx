import React from 'react'
import { checkCompatibility, pisces } from '../assets'

const CheckCompatibility = () => {
  return (
    <section className="mycontainer flex gap-9 mt-9">
      <div className="rounded-full flex justify-center align-center border border-dashed border-2 p-9 relative">
        <div className="absolute top-[30px] rotate-[35deg] right-0 compatibility-one p-4 rounded-full">
          <img src={pisces} className="w-[32px] h-[32px] " alt="" />
        </div>
        <div className=" w-[270px] h-[270px] rounded-full flex justify-center align-center border border-2 p-6">
          <img src={checkCompatibility} className="w-[90%] h-[90%] rounded-full object-cover " alt="" />
        </div>
      </div>
      <div className="">
              <h2 className='font-radlay text-4xl'>Check Your Compatibility</h2>
              <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptate voluptates earum ut debitis aperiam veniam laudantium deserunt ipsa, explicabo voluptatum voluptatibus, numquam tempora alias optio facere repellendus asperiores eaque?</p>
      </div>
    </section>
  );
}

export default CheckCompatibility
