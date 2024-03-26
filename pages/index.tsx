import Banner from "@/@modules/Home/Banner/Banner";
import DigitalMarketingContainer from "@/@modules/Home/DigitalMarketingContainer";
import HelpClients from "@/@modules/Home/HelpClients/HelpClients";
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
      </AppLayout>
    </>
  );
}
