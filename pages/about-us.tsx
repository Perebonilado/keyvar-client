import Banner from "@/@modules/AboutUs/Banner/Banner";
import OurCommitmentContainer from "@/@modules/AboutUs/OurCommitmentContainer";
import SubBanner from "@/@modules/AboutUs/SubBanner";
import TeamMemberCardContainer from "@/@modules/AboutUs/TeamMemberCardContainer";
import AppHead from "@/@shared/components/AppHead";
import AppLayout from "@/@shared/layout/AppLayout";
import { NextPage } from "next";
import React from "react";

const AboutUs: NextPage = () => {
  return (
    <>
      <AppHead title="About Us" />
      <AppLayout>
        <Banner />
        <SubBanner />
        <OurCommitmentContainer />
        <TeamMemberCardContainer />
      </AppLayout>
    </>
  );
};

export default AboutUs;
