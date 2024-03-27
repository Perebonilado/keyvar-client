import Banner from "@/@modules/Careers/Banner/Banner";
import CareerCardContainer from "@/@modules/Careers/CareerCardContainer";
import AppHead from "@/@shared/components/AppHead";
import SubBanner from "@/@shared/components/SubBanner/SubBanner";
import AppLayout from "@/@shared/layout/AppLayout";
import { NextPage } from "next";
import React from "react";

const Careers: NextPage = () => {
  return (
    <>
      <AppHead title="Careers" />
      <AppLayout>
        <Banner />
        <SubBanner />
        <CareerCardContainer />
      </AppLayout>
    </>
  );
};

export default Careers;
