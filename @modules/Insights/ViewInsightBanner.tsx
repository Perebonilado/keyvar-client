import Avatar from "@/@shared/components/Avatar";
import Container from "@/@shared/ui-components/Container";
import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";

interface Props {
  title?: string;
  author?: string;
  authorImage?: string;
}

import React, { FC } from "react";

const ViewInsightBanner: FC<Props> = ({ title, author, authorImage }) => {
  return (
    <section className="bg-[#020228]">
      <Container className="pt-20 pb-10">
        <h1 className="text-3xl max-md:text-2xl leading-relaxed text-white font-bold w-full max-w-[610px]">
          {title}
        </h1>

        <div className="flex justify-between items-center gap-3 mt-6 max-sm:flex-col max-sm:items-start">
          <div className="flex items-center gap-1">
            <Avatar
              fallBack={author ?? ""}
              imageUrl={authorImage ?? ""}
              alt="author image"
              size="sm"
            />
            <p className="text-white ml-2 border-b pb-2">By {author ?? ""}</p>
          </div>

          <div>
            <p className="text-[#7D7D7D] mb-1">Share</p>
            <div className="flex items-center gap-2">
              <FacebookIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ViewInsightBanner;
