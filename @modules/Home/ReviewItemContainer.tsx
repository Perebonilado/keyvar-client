import React, { FC, useRef, ElementRef } from "react";
import ReviewItem from "./ReviewItem";
import { ReviewModel } from "@/models/review";

interface Props {
  data: ReviewModel[];
  handleClick: (data: ReviewModel[]) => void;
}

const ReviewItemContainer: FC<Props> = ({ data, handleClick }) => {
  const sliderRef = useRef<ElementRef<"div">>(null);
  const sliderContainerRef = useRef<ElementRef<"div">>(null);

  const onSlideChange = (id: string, idx: number) => {
    const index = idx;
    const newXtranslateNumber = index * 350;

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${newXtranslateNumber}px)`;
      const mutatedData = data.map((item) =>
        item.id === id
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      );
      handleClick(mutatedData);
    }
  };

  return (
    <>
      <div className="overflow-x-hidden w-full flex justify-center" ref={sliderContainerRef}>
        <div
          className={"w-fit min-w-full flex justify-center py-14 transition-transform"}
          ref={sliderRef}
        >
          {data.map((item, idx) => {
            return (
              <ReviewItem
                {...item}
                handleClick={(id) => {
                  onSlideChange(id, idx);
                }}
                key={idx}
                idx={idx}
                onSlideChange={onSlideChange}
                data={data}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ReviewItemContainer;
