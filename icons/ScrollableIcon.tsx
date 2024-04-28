import React, { FC, HTMLAttributes } from "react";
import ChevronUp from "./ChevronUp";
import ChevronDown from "./ChevronDown";

const ScrollableIcon: FC<HTMLAttributes<HTMLSpanElement>> = ({ ...props }) => {
  return (
    <span className={`flex flex-col gap-1 w-fit ${props.className}`}>
      <ChevronUp />
      <ChevronDown />
    </span>
  );
};

export default ScrollableIcon;
