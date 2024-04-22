import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

export const AppLogo: FC = () => {
  return (
    <Link href={"/"}>
      <div className="relative h-12 w-12">
        {" "}
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="0% 50%"
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
