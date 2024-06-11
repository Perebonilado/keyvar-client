import React, { FC } from "react";
import ServiceCard from "./ServiceCard";

interface Props {
  data: {
    title: string;
    content: string[];
    icon: React.ReactNode;
  }[];
}

const ServiceCardContainer: FC<Props> = ({ data }) => {
  return (
    <section className="pt-12 pb-20 flex items-start justify-center flex-wrap gap-8 w-full">
      {data.map((item, idx) => {
        return <ServiceCard {...item} key={idx} />;
      })}
    </section>
  );
};

export default ServiceCardContainer;
