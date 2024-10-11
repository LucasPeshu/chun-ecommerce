import React from "react";
import imagen from "../../assets/pexels-martabranco-1295572.jpg";

const HomeBanner = () => {
  return (
    <div
      className="relative w-full h-56 lg:h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${imagen})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mx-auto px-6 sm:px-4 lg:px-48">
        <h1 className="text-2xl md:text-5xl font-bold mb-2 text-purple-400">
          Promovemos hábitos de alimentación saludable
        </h1>
        <p className="text-lg md:text-2xl text-white">
          Alimentarse bien es el primer paso hacia una vida más saludable.
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
