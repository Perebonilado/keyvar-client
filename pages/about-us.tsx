import Banner from "@/@modules/AboutUs/Banner/Banner";
import SubBanner from "@/@modules/AboutUs/SubBanner";
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
      </AppLayout>
    </>
  );
};

export default AboutUs;
