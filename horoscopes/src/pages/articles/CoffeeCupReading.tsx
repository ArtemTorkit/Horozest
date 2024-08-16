import React from 'react'
import { useState, useEffect } from 'react'
import { loading, reload } from '../../assets'
import CheckCompatibility from '../../components/CheckCompatibility'

const CoffeeCupReading = () => {
  const [coffeeData, setCoffeeData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
     const formData = new FormData();
     formData.append("api_key", import.meta.env.VITE_DIVINE_API_KEY);

     fetch("https://divineapi.com/api/1.0/get_coffee_cup_reading.php", {
       method: "POST",
       body: formData,
     })
       .then((response) => response.json())
       .then((data) => {
           console.log(data.data); // Handle the response data
           setCoffeeData(data.data)
           setIsLoading(false)
       })
         .catch((error) => {
           setIsLoading(false);
           
         console.error("Error:", error); // Handle any errors that occur
       });
  }, [])
    return (
      <section className="mycontainer">
        <h1 className="text-center font-radlay text-4xl mt-9">
          Random Coffee Cup Reading
        </h1>
        {isLoading ? (
          <div className="flex justify-center">
            <img src={loading} className="w-[200px]" alt="" />
          </div>
        ) : (
          <div className="">
            <div className="mt-[100px]">
              <div className="flex flex-col md:flex-row gap-9">
                <div className="flex flex-col lg:flex-row gap-9 items-center">
                  <img
                    src={coffeeData?.prediction.present_image}
                    className="cursor-pointer max-w-[300px] rounded-full coffe-cup-reading-img "
                    loading="lazy"
                    alt="Coffee Cup image"
                  />
                  <div className="ml-4 text-center">
                    <h2 className="font-radlay text-3xl">
                      {coffeeData?.prediction.present_title}
                    </h2>
                    <p className="mt-4">
                      {coffeeData?.prediction.present_content}
                    </p>
                    <button
                      onClick={() => window.location.reload()}
                      className="px-4 py-1 flex gap-2 mx-auto mt-4 bg-blue rounded-lg text-white shadow shadow-xl">
                      <img src={reload} className="" alt="" />
                      <p>ANOTHER COFFEE</p>
                    </button>
                  </div>
                </div>
                <div className="md:w-[300px]">
                  <img
                    src={coffeeData?.prediction.present_image}
                    className="opacity-0 cursor-pointer max-w-[300px] rounded-full coffe-cup-reading-img "
                    loading="lazy"
                    alt="Coffee Cup image"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <CheckCompatibility />
      </section>
    );
}

export default CoffeeCupReading
