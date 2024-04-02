import Button from "@/@shared/ui-components/Button";
import Container from "@/@shared/ui-components/Container";
import Link from "next/link";
import React, { FC } from "react";

const ViewInsightContentContainer: FC = () => {
  return (
    <section>
      <Container>
        <div className="min-h-screen"></div>

        <Link href={"/insights"}>
          <Button
            title="Back to insights"
            variant="text"
            className="mx-auto mt-14 mb-10 !gap-2"
            starticon={<div className="text-black">{"<"}</div>}
          />
        </Link>
      </Container>
    </section>
  );
};

export default ViewInsightContentContainer;
