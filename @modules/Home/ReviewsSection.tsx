import Container from "@/@shared/ui-components/Container";
import React, { FC, useState } from "react";
import ReviewItemContainer from "./ReviewItemContainer";
import ReviewMarker from "./ReviewMarker";

const ReviewsSection: FC = () => {
  const [data, setData] = useState([
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
    { id: 4, isActive: false },
    { id: 5, isActive: false },
  ]);

  const handleClickCard = (data: { id: number; isActive: boolean }[]) => {
    setData(data);
  };

  return (
    <section className="bg-[#020228] pt-16">
      <div className="bg-[#FBF9F0] rounded-t-3xl py-20 text-center">
        <Container className="relative overflow-x-hidden">
          <h2 className="text-4xl max-md:text-3xl font-semibold">
            What our clients say
          </h2>

          <div className="w-full max-w-[800px] translate-x-[30%] max-md:translate-x-[3%] mx-auto">
            <ReviewItemContainer data={data} handleClick={handleClickCard} />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ReviewsSection;
