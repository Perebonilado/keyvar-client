import { InsightSummaryModel } from "@/models/Insight";
import Image from "next/image";
import React, { FC } from "react";
import { useRouter } from "next/router";

interface Props extends InsightSummaryModel {}

const InsightItem: FC<Props> = (props) => {
  const router = useRouter();
  return (
    <div
      className="w-full max-w-[320px] cursor-pointer"
      onClick={() => {
        router.push(`/insights/${props.id}`);
      }}
    >
      <div className="h-[180px] w-full border rounded-t-xl relative overflow-hidden">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
          style={{
            cursor: "pointer",
          }}
          src={props.imageUrl}
          alt={props.title}
        />
      </div>
      <div className="p-5 bg-[#fbf9f0] flex flex-col gap-3 rounded-b-xl">
        <h3 className="font-semibold">{props.title}</h3>

        <p className="text-sm line-clamp-3 text-[#666666]">{props.body}</p>

        <div>
          <p className="text-xs mt-2">
            <span className="font-bold text-[#666666]">by {props.author}</span>{" "}
            <span className="text-[#666666]">|</span>{" "}
            <span className="text-[#666666] italic">{props.date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightItem;
