import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement | HTMLButtonElement> {
  title: string;
  subTitle: string;
  isActive: boolean;
  headerKey: string;
  handleClick: (title: string) => void;
}

const TabItem: FC<Props> = ({
  title,
  isActive,
  handleClick,
  headerKey,
  subTitle,
  ...props
}) => {
  const textColorStyling = cn({
    ["!text-[#2C00B9]"]: isActive,
    ["!text-[#8B8B8B]"]: !isActive,
  });

  const titleBoxStyling = cn(
    ` flex text-2xl max-md:text-xl font-semibold items-center justify-center text-center h-[60px] px-10 max-sm:px-5 w-full cursor-pointer`,
    {
      ["!border-[#2C00B9] border-b-[4px]"]: isActive,
      ["!border-[#8B8B8B] border-b-[1px]"]: !isActive,
    }
  );

  return (
    <div
      className={textColorStyling}
      {...props}
      onClick={() => {
        handleClick(headerKey);
      }}
    >
      <div className={titleBoxStyling}>
        <p>{title}</p>
      </div>
      <p className="text-base text-center py-4 px-5 max-md:text-xs">{subTitle}</p>
    </div>
  );
};

export default TabItem;
