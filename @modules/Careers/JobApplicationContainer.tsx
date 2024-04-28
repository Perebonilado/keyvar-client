import Button from "@/@shared/ui-components/Button";
import Container from "@/@shared/ui-components/Container";
import Link from "next/link";
import React, { FC } from "react";
import JobApplicationForm from "./JobApplicationForm";

const JobApplicationContainer: FC = () => {
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-center max-md:text-2xl md:text-4xl font-bold">
          We always have room for talent!
        </h1>

        <p className="text-center max-md:text-sm mt-7 mb-14">
          All information provided is kept confidential and secure
        </p>

        <JobApplicationForm />

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

export default JobApplicationContainer;
