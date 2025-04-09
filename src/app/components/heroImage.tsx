import Image from "next/image";
import React from "react";

export const HeroImage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center object-cover relative">
      <Image
        className="w-full h-full object-cover brightness-75"
        src={"/assets/images/coffeeHero.jpg"}
        width={1000}
        height={1000}
        alt="Coffee Image"
      />
      <div className="absolute w-full h-full text-[#d4c9bb] flex flex-col justify-center items-center bg-black/40">
        <h1 className="text-5xl">VISTA LADERA ESTATE</h1>
        <p className="text-2xl">CAFÉ DE COSTA RICA</p>
        <p className="text-lg">Costa Rican coffee, brewed to perfection</p>
      </div>
    </div>
  );
};
