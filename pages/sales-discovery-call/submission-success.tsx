import LeadSuccessContainer from "@/@modules/Leads/LeadSuccessContainer";
import AppHead from "@/@shared/components/AppHead";
import AppLayout from "@/@shared/layout/AppLayout";
import { NextPage } from "next";
import React from "react";

const SubmissionSuccess: NextPage = () => {
  return (
    <>
      <AppHead title="Sales Discovery Call Submission Success" />
      <AppLayout>
        <LeadSuccessContainer />
      </AppLayout>
    </>
  );
};

export default SubmissionSuccess;
