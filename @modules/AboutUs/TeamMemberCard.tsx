import Avatar from "@/@shared/components/Avatar";
import { TeamMember } from "@/models/TeamMember";
import AnimateUpTransition from "@/transitions/AnimateUp";
import React, { FC } from "react";

interface Props extends TeamMember {}

const TeamMemberCard: FC<Props> = ({ fullName, imageUrl, role }) => {
  return (
    <AnimateUpTransition>
      <div className="w-[350px] h-[350px] border border-gray-400 rounded-2xl flex flex-col items-center text-center py-10 px-6 gap-5 max-[350px]:w-full">
        <Avatar
          alt="team member"
          fallBack={fullName[0]}
          imageUrl={imageUrl}
          size="lg"
        />

        <h3 className="text-xl font-semibold mt-3">{fullName}</h3>
        <p className="-mt-2">{role}</p>
        <div className="mx-auto w-[80px] h-[2px] bg-[#2C00B9]"></div>
      </div>
    </AnimateUpTransition>
  );
};

export default TeamMemberCard;
