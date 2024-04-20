import React, { FC } from "react";
import cn from "classnames";
import { ReviewModel } from "@/models/review";

interface Props extends ReviewModel {
  handleClick: (id: string) => void;
}


const ReviewMarker: FC<Props> = ({ handleClick, id, isActive }) => {
  const styling = cn(`border cursor-pointer rounded-full border-[#2C00B9] h-[8px] transition-all`, {
    ["bg-[#2C00B9] w-[45px]"]: isActive,
    "bg-transparent w-[8px]": !isActive,
  });
  return (
    <div
      className={styling}
      onClick={() => {
        handleClick(id);
      }}
    ></div>
  );
};

export default ReviewMarker;
