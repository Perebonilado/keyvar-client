import React, { FC } from "react";
import cn from "classnames";
import { ReviewModel } from "@/models/review";
import Image from "next/image";

interface Props extends ReviewModel {
  handleClick: (id: string) => void;
}

const ReviewItem: FC<Props> = ({
  isActive,
  id,
  handleClick,
  body,
  subBody,
  title,
  logo,
}) => {
  const cardStyling = cn(
    `relative cursor-pointer w-[350px] max-sm:w-[320px] h-[500px] border border-[#7D7D7D] rounded-xl bg-white transition-transform p-3 flex flex-col gap-6 `,
    {
      "scale-[0.85] opacity-[0.4]": !isActive,
    }
  );
  return (
    <div className="translate-x-1/2">
      <div
        onClick={() => {
          handleClick(id);
        }}
        className={cardStyling}
      >
        <p className="mt-14 font-semibold">{title}</p>
        <p className="text-[#7D7D7D] text-[15px]">{body}</p>
        <p className="text-[#7D7D7D] text-[15px]">{subBody}</p>

        <div className="border-t-[3px] border-t-[#2C00B9] pt-6">
          <div className="relative w-full h-[60px]">
            <Image
              layout="fill"
              objectFit="contain"
              objectPosition="50% 0%"
              style={{
                cursor: "pointer",
              }}
              src={logo}
              alt={"business logo"}
            />
          </div>
        </div>

        {/* <div className="absolute top-12 left-1/2 -translate-x-1/2">
          <div className="relative w-[250px] h-[80px]">
            <Image
              layout="fill"
              objectFit="contain"
              objectPosition="50% 0%"
              style={{
                cursor: "pointer",
              }}
              src={"/assets/shared/quotes.png"}
              alt={"business logo"}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ReviewItem;
