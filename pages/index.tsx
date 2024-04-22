import Banner from "@/@modules/Home/Banner/Banner";
import DigitalMarketingContainer from "@/@modules/Home/DigitalMarketingContainer/DigitalMarketingContainer";
import FieldFocusContainer from "@/@modules/Home/FieldFocusContainer";
import HelpClients from "@/@modules/Home/HelpClients/HelpClients";
import OurApproachContainer from "@/@modules/Home/OurApproachContainer";
import ReviewsSection from "@/@modules/Home/ReviewsSection";
import AppHead from "@/@shared/components/AppHead";
import AppLayout from "@/@shared/layout/AppLayout";
import { NextPage } from "next";

const Home:NextPage = () => {
  return (
    <>
      <AppHead />
      <AppLayout>
        <Banner />
        <HelpClients />
        <DigitalMarketingContainer />
        <OurApproachContainer />
        <FieldFocusContainer />
        <ReviewsSection />
      </AppLayout>
    </>
  );
}

export default Home
