import Button from "@/@shared/ui-components/Button";
import Container from "@/@shared/ui-components/Container";
import Link from "next/link";
import React, { FC } from "react";
import { sanitize } from "dompurify";

interface Props {
  blogData: string;
}

const ViewInsightContentContainer: FC<Props> = ({ blogData }) => {
  return (
    <section>
      <Container>
        <div
          className="min-h-screen py-10"
          dangerouslySetInnerHTML={{ __html: sanitize && sanitize(blogData) }}
        ></div>

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
