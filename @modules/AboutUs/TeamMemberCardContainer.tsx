import React, { FC } from "react";
import teamMembersData from "../../json-data/team-members.json";
import TeamMemberCard from "./TeamMemberCard";
import Container from "@/@shared/ui-components/Container";
import Button from "@/@shared/ui-components/Button";
import Link from "next/link";
import { NavLinks } from "@/@shared/constants";

const TeamMemberCardContainer: FC = () => {
  return (
    <section className="py-16 text-center">
      <Container>
        <h2 className="text-3xl font-semibold mb-12">Meet the Team</h2>

        <div className="flex gap-8 gap-y-12 flex-wrap mx-auto w-full max-w-[800px] justify-center">
          {teamMembersData.map((tm, idx) => (
            <TeamMemberCard {...tm} key={idx} />
          ))}
        </div>

        <div className="pt-20 flex flex-col gap-7">
          <h2 className="text-3xl max-sm:text-xl font-semibold mb-2">
            Interested in joining our team?
          </h2>
          <div className="w-full mx-auto max-w-[300px]">
            <p className="text-sm mb-3">Explore our open roles:</p>

            <Link href={NavLinks.careers.link}>
              <Button title="Careers" fullWidth />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamMemberCardContainer;
