import LeadContainer from "@/@modules/Leads/LeadContainer";
import AppHead from "@/@shared/components/AppHead";
import AppLayout from "@/@shared/layout/AppLayout";
import { NextPage } from "next";

const Leads: NextPage = () => {
  return (
    <>
      <AppHead title="Leads" />
      <AppLayout>
        <LeadContainer />
      </AppLayout>
    </>
  );
};

export default Leads;
