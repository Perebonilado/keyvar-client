import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const AltLogo: FC = () => {
  return (
    <Link href={"/"}>
      <div className="relative h-14 w-14">
        {" "}
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="-50% 50%"
          style={{
            cursor: "pointer",
          }}
          src={"/assets/shared/alt-logo.png"}
          alt="keyvar logo"
        />
      </div>
    </Link>
  );
};

export default AltLogo;
