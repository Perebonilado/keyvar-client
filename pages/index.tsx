import Banner from "@/@modules/Home/Banner/Banner";
import DigitalMarketingContainer from "@/@modules/Home/DigitalMarketingContainer/DigitalMarketingContainer";
import FieldFocusContainer from "@/@modules/Home/FieldFocusContainer";
import HelpClients from "@/@modules/Home/HelpClients/HelpClients";
import OurApproachContainer from "@/@modules/Home/OurApproachContainer";
import AppHead from "@/@shared/components/AppHead";
import AppLayout from "@/@shared/layout/AppLayout";

export default function Home() {
  return (
    <>
      <AppHead />
      <AppLayout>
        <Banner />
        <HelpClients />
        <DigitalMarketingContainer />
        <OurApproachContainer />
        <FieldFocusContainer />
      </AppLayout>
    </>
  );
}
