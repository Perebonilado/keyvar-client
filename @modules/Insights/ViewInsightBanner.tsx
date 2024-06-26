import Avatar from "@/@shared/components/Avatar";
import Button from "@/@shared/ui-components/Button";
import Container from "@/@shared/ui-components/Container";
import CopyIcon from "@/icons/CopyIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";

interface Props {
  title?: string;
  author?: string;
  authorImage?: string;
}

import React, { FC } from "react";
import { toast } from "react-toastify";

const ViewInsightBanner: FC<Props> = ({ title, author, authorImage }) => {
  const handleCopyInsightUrlToClipBoard = () => {
    try {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
      toast.success("Link Copied Successfully");
    } catch (error) {}
  };
  return (
    <section className="bg-[#020228]">
      <Container className="pt-20 pb-10">
        <h1 className="text-4xl max-md:text-2xl leading-relaxed text-white font-bold w-full max-w-[610px]">
          {title}
        </h1>

        <div className="flex justify-between items-center gap-3 mt-6 max-sm:flex-col max-sm:items-start">
          <div className="flex items-center gap-1">
            <Avatar
              fallBack={author ? author[0] : ""}
              imageUrl={authorImage ?? ""}
              alt="author image"
              size="sm"
            />
            <p className="text-white ml-2 border-b pb-2">By {author ?? ""}</p>
          </div>

          <div>
            <Button
              title="Share"
              variant="text"
              onClick={handleCopyInsightUrlToClipBoard}
              className="!text-white"
              starticon={<CopyIcon />}
            />
            {/* <p className="text-[#7D7D7D] mb-1">Share</p>
            <div className="flex items-center gap-2">
              <FacebookIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ViewInsightBanner;
