import AnimateUpTransition from "@/transitions/AnimateUp";
import React, { FC } from "react";

interface Props {
  title: string;
  content: string[];
  icon: React.ReactNode;
}

const ServiceCard: FC<Props> = ({ title, content, icon }) => {
  return (
    <AnimateUpTransition>
      <div className="px-4 py-7 bg-white text-black w-full sm:w-[350px] h-[450px] flex items-center text-center flex-col gap-5 rounded-xl">
        {icon}

        <h3 className="text-xl font-bold text-center">{title}</h3>

        <ul className="flex flex-col gap-3 text-left text-sm list-disc px-5 pt-4">
          {content.map((c, idx) => {
            return (
              <li key={idx} className="text-base">
                {c}
              </li>
            );
          })}
        </ul>
      </div>
    </AnimateUpTransition>
  );
};

export default ServiceCard;
