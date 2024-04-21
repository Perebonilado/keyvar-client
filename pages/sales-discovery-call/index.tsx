import LeadContainer from "@/@modules/Leads/LeadContainer";
import AppHead from "@/@shared/components/AppHead";
import { NavLinks } from "@/@shared/constants";
import AppLayout from "@/@shared/layout/AppLayout";
import { NextPage } from "next";

const Leads: NextPage = () => {
  return (
    <>
      <AppHead title={NavLinks.salesDiscoveryCall.title} />
      <AppLayout>
        <LeadContainer />
      </AppLayout>
    </>
  );
};

export default Leads;
