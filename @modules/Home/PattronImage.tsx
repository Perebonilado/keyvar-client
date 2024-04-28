import Image from "next/image";
import React, { FC } from "react";

const PattronImage: FC = () => {
  return (
    <div className="absolute w-[100px] h-[100px] right-[130px] top-1/2 -translate-y-1/2 max-md:top-full max-md:left-[40px]">
      <div className="relative w-[100px] h-[100px]">
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="0% 100%"
          src={"/assets/home/pattron.png"}
          alt="Pattron"
        />
      </div>
    </div>
  );
};

export default PattronImage;
