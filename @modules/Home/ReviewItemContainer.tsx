import React, { FC, useRef, useState, ElementRef } from "react";
import ReviewItem from "./ReviewItem";
import ReviewMarker from "./ReviewMarker";

interface Props {
  data: { id: number; isActive: boolean }[];
  handleClick: (data: { id: number; isActive: boolean }[]) => void;
}

const ReviewItemContainer: FC<Props> = ({ data, handleClick }) => {
  const sliderRef = useRef<ElementRef<"div">>(null);
  const sliderContainerRef = useRef<ElementRef<"div">>(null);

  const onSlideChange = (id: number, idx: number) => {
    const index = idx;
    const newXtranslateNumber = index * 320;

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
      <div className="overflow-x-hidden w-full flex " ref={sliderContainerRef}>
        <div
          className={"w-fit flex justify-center py-14 transition-transform"}
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
              />
            );
          })}
        </div>
      </div>
      <div className="w-fit mx-auto flex items-center gap-2 py-4 absolute bottom-0 left-0 translate-x-[115px] max-md:translate-x-[110px]">
        {data.map((item, idx) => {
          return (
            <ReviewMarker
              {...item}
              key={idx}
              handleClick={(id) => {
                onSlideChange(id, idx);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default ReviewItemContainer;
