import React, { FC } from "react";

export const AppLoader: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen fixed z-[8000] top-0 left-0 w-screen bg-black bg-opacity-25">
      <div className="border-8 border-solid border-gray-300 border-t-[#2C00B9] rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};
