import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
import LeadFormContainer from "./LeadFormContainer";
import Link from "next/link";
import Button from "@/@shared/ui-components/Button";

const LeadContainer: FC = () => {
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-center max-md:text-2xl md:text-4xl font-bold">
          We are delighted to work with you!
        </h1>

        <p className="text-center max-md:text-sm mt-7 mb-14">
          All information provided is kept confidential and secure
        </p>

        <LeadFormContainer />

        <div>
          <Link href={"/"}>
            <Button
              title="Home"
              variant="text"
              className="mx-auto mt-14 !gap-2"
              starticon={<div className="text-black">{"<"}</div>}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default LeadContainer;
