import Button from "@/@shared/ui-components/Button";
import Container from "@/@shared/ui-components/Container";
import Link from "next/link";
import React, { FC } from "react";

const LeadSuccessContainer: FC = () => {
  return (
    <Container>
      <section className="flex flex-col justify-between min-h-[80vh] gap-8 pt-24">
        <h1 className="w-full text-3xl font-semibold leading-relaxed mx-auto max-w-[400px] text-center">
          Thanks for your interest in <span className="font-bold text-[#2C00B9]">Keyvar Solutions!</span>
        </h1>

        <div className="w-full mx-auto max-w-[400px] justify-end text-center flex flex-col gap-6">
          <p>
            A team member will reach out to you shortly, via your contact
            preference.
          </p>

          <Link href={"/"}>
            <Button
              title="Home"
              variant="text"
              className="mx-auto mt-14 !gap-2"
              starticon={<div className="text-black">{"<"}</div>}
            />
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default LeadSuccessContainer;
