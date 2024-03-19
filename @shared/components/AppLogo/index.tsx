import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

export const AppLogo: FC = () => {
  return (
    <Link href={"/"}>
      <div className="relative h-10 w-10">
        {" "}
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="-50% 50%"
          style={{
            cursor: "pointer",
          }}
          src={"/assets/shared/logo.png"}
          alt="keyvar logo"
        />
      </div>
    </Link>
  );
};
