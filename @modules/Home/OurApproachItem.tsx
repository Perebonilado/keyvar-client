import AnimateRightTransition from "@/transitions/AnimateRight";
import React, { FC } from "react";

interface Props {
  title: string;
  subTitle: string;
  body: string;
}

const OurApproachItem: FC<Props> = ({ body, subTitle, title }) => {
  return (
    <AnimateRightTransition>
      <div className="w-full z-1 relative max-w-[350px] h-[110px] bg-[#FBF9F0] rounded-xl p-3 text-sm flex flex-col justify-end">
        <div className="flex flex-col absolute border-[2px] border-[#2C00B9] w-1/2 h-[70px] left-0 -top-[64%] translate-y-1/2 rounded-xl">
          <p
            className="text-semibold font-semibold flex items-center px-2"
            style={{ flex: 1 }}
          >
            {title}
          </p>
          <p
            className="italic text-xs font-semibold flex items-center px-2"
            style={{ flex: 1 }}
          >
            {subTitle}
          </p>
        </div>

        <p className="text-[#494949] text-sm">{body}</p>

        <div className="absolute w-[90%] h-full bg-white rounded-xl border border-[#FDD78B] left-1 top-2 -z-[1] shadow-md"></div>
      </div>
    </AnimateRightTransition>
  );
};

export default OurApproachItem;
