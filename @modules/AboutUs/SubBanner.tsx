import BreadCrumb from "@/@shared/components/BreadCrumb/BreadCrumb";
import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";

const SubBanner: FC = () => {
  return (
    <section className="bg-[#020228] py-8">
      <Container>
        <BreadCrumb />
      </Container>
    </section>
  );
};

export default SubBanner;
