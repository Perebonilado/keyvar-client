import Image from "next/image";
import React, { FC } from "react";

const FrannemsImage: FC = () => {
  return (
    <div className="absolute w-[50px] h-[50px] right-[300px] top-1/2 md:translate-y-[70px] max-md:top-full max-md:left-[180px]">
      <div className="relative w-[50px] h-[50px]">
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="0% 100%"
          src={"/assets/home/frannems.png"}
          alt="Frannems"
        />
      </div>
    </div>
  );
};

export default FrannemsImage;
