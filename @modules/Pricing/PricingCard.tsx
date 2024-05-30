import { PricingCategory } from "@/models/Pricing";
import AnimateRightTransition from "@/transitions/AnimateRight";
import React, { FC } from "react";

interface Props {
  title: string;
  service: string;
  idealFor: string;
  price: string;
  category: PricingCategory;
}

const PricingCard: FC<Props> = ({ title, idealFor, price, service }) => {
  return (
    <AnimateRightTransition>
      <div className="w-full max-w-[380px] px-4 py-6 border border-gray-400 rounded-3xl">
        <h3 className="mb-7 text-lg font-semibold">{title}</h3>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold">Service:</h4>
            <p>{service}</p>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-semibold">Ideal for:</h4>
            <p>{idealFor}</p>
          </div>

          <h4 className="font-semibold">Starting at ${Number(price).toLocaleString()}</h4>
        </div>
      </div>
    </AnimateRightTransition>
  );
};

export default PricingCard;
