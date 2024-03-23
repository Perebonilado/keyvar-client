import Banner from "@/@modules/Home/Banner/Banner";
import HelpClients from "@/@modules/Home/HelpClients/HelpClients";
import AppLayout from "@/@shared/layout/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <Banner />
      <HelpClients />
    </AppLayout>
  );
}
