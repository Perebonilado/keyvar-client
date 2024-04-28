import React, { FC } from "react";

interface Props {
  workMode: string;
  title: string;
  description: string[];
}

const CareerCard: FC<Props> = ({ description, title, workMode }) => {
  return (
    <div className="w-full border border-gray-400 h-fit rounded-2xl flex flex-col  p-6 gap-5">
      <p className="text-[#2C00B9] font-bold">{workMode}</p>

      <div>
        <h2 className="text-3xl font-semibold max-md:text-xl">{title}:</h2>
        <p className="font-semibold text-sm py-2 italic">Role Description:</p>
        <ul className="list-disc px-5  text-sm flex flex-col gap-3">
          {description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerCard;
