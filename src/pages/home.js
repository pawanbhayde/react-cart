import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero py-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <h6 className="text-lg ">
              <em>Are you hungry</em>
            </h6>
            <h1 className="text-3xl md:text-6xl font-bold">Don't wait</h1>
            <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500">
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <img className="w-4/5" src="/images/pizza.png" alt="" />
          </div>
        </div>
      </div>
      <div className="pb-24">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold text-center">Popular Items</h1>
          <p className="text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            necessitatibus incidunt ut officia soluta voluptate.
          </p>
          <div className="grid grid-cols-3 gap-24 py-8">
            <div>
              <img className="w-full" src="/images/pizza1.png" alt="" />
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-bold">Supreme Pizza</h1>
                <button className="px-3 py-1 bg-yellow-500 text-white font-bold rounded-full">
                  $19.99
                </button>
              </div>
              <p className="text-gray-500">Cheese, Chicken, Vegetables</p>
            </div>
            <div>
              <img className="w-full" src="/images/pizza2.png" alt="" />
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-bold">Hawaiian Paradise</h1>
                <button className="px-3 py-1 bg-yellow-500 text-white font-bold rounded-full">
                  $19.99
                </button>
              </div>
              <p className="text-gray-500">Cheese, Chicken, Vegetables</p>
            </div>
            <div>
              <img
                className="w-full"
                src="/images/pizza.png"
                style={{ height: 45, width: 45 }}
                alt=""
              />
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-bold">Veggie Overload</h1>
                <button className="px-3 py-1 bg-yellow-500 text-white font-bold rounded-full">
                  $19.99
                </button>
              </div>
              <p className="text-gray-500">Cheese, Chicken, Vegetables</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
