import NotificationBar from "@/@modules/Insights/NotificationBar";
import ViewInsightBanner from "@/@modules/Insights/ViewInsightBanner";
import ViewInsightContentContainer from "@/@modules/Insights/ViewInsightContentContainer";
import AppHead from "@/@shared/components/AppHead";
import AppLayout from "@/@shared/layout/AppLayout";
import { NextPage } from "next";
import React from "react";

const ViewInsight: NextPage = () => {
  return (
    <>
      <AppHead title="View Insight" />
      <AppLayout bgColor="white">
        <ViewInsightBanner />
        <ViewInsightContentContainer />
        <NotificationBar />
      </AppLayout>
    </>
  );
};

export default ViewInsight;
