import React, { FC } from "react";
import cn from "classnames";

interface Props {
  id: number;
  isActive: boolean;
  handleClick: (id: number) => void;
}

const ReviewItem: FC<Props> = ({ isActive, id, handleClick }) => {
  const cardStyling = cn(`w-[320px] h-[500px] rounded-xl bg-white shadow-md transition-transform`, {
    "scale-[0.8]": !isActive,
  });
  return (
    <div
      onClick={() => {
        handleClick(id);
      }}
      className={cardStyling}
    >{id}</div>
  );
};

export default ReviewItem;
