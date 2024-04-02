import BreadCrumb from "@/@shared/components/BreadCrumb/BreadCrumb";
import Container from "@/@shared/ui-components/Container";
import DropDown from "@/@shared/ui-components/Input/DropDown";
import React, { FC } from "react";

const InsightSubBanner: FC = () => {
  return (
    <section className="bg-[#020228] py-8 max-sm:pb-3 max-sm:pt-0">
      <Container className="max-sm:px-0">
        <div className="flex items-center justify-between max-sm:flex-col-reverse max-sm:items-start gap-3">
          <div className="max-sm:px-5">
            <BreadCrumb />
          </div>
          <div className="w-full max-w-[300px] max-sm:max-w-full">
            <DropDown
              variant="regular"
              options={[{ label: "All", value: "" }]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InsightSubBanner;
