import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
import AltLogo from "../AppLogo/AltLogo";
import Link from "next/link";
import { NavLinks } from "@/@shared/constants";
import FacebookIcon from "@/icons/FacebookIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import ChevronRight from "@/icons/ChevronRight";
import cn from "classnames";
import { AppLogo } from "../AppLogo";

interface Props {
  bgColor?: "default" | "white";
}

const Footer: FC<Props> = ({ bgColor = "default" }) => {
  const footerRootStyling = cn(`bg-[#020228] text-sm `, {
    ["bg-[#020228] text-white"]: bgColor === "default",
    ["bg-white text-black"]: bgColor === "white",
  });
  return (
    <footer className={footerRootStyling}>
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:hidden pb-14 pt-6 border-b border-b-gray-500">
          <Link href={NavLinks.services.link}>
            <span className="flex justify-between items-center font-semibold">
              {NavLinks.services.title}
              <ChevronRight />
            </span>
          </Link>
          <Link href={NavLinks.aboutUs.link}>
            <span className="flex justify-between items-center font-semibold">
              {NavLinks.aboutUs.title}
              <ChevronRight />
            </span>
          </Link>
          <Link href={NavLinks.pricing.link}>
            <span className="flex justify-between items-center font-semibold">
              {NavLinks.pricing.title}
              <ChevronRight />
            </span>
          </Link>
          <Link href={NavLinks.blog.link}>
            <span className="flex justify-between items-center font-semibold">
              {NavLinks.blog.title}
              <ChevronRight />
            </span>
          </Link>
          <Link href={NavLinks.careers.link}>
            <span className="flex justify-between items-center font-semibold">
              {NavLinks.careers.title}
              <ChevronRight />
            </span>
          </Link>
        </div>
        <div className="max-md:pt-14">
          {bgColor !== "default" ? <AppLogo /> : <AltLogo />}
        </div>
        <div className="py-8 flex">
          <div style={{ flex: 1 }} className="flex flex-col gap-2">
            <p className="font-semibold">Contact</p>
            <a href="mailto:support@keyvarsolutions.com"></a>
            <p>26 S Calvert St., MD 21202</p>
          </div>

          <div style={{ flex: 1 }} className="flex gap-x-[120px] max-md:hidden">
            <div className="flex flex-col gap-5">
              <Link href={NavLinks.aboutUs.link}>
                <span className="font-semibold">{NavLinks.aboutUs.title}</span>
              </Link>
              <Link href={NavLinks.blog.link}>
                <span className="font-semibold">{NavLinks.blog.title}</span>
              </Link>
              <Link href={NavLinks.careers.link}>
                <span className="font-semibold">{NavLinks.careers.title}</span>
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <Link href={NavLinks.services.link}>
                <span className="font-semibold">{NavLinks.services.title}</span>
              </Link>
              <Link href={NavLinks.pricing.link}>
                <span className="font-semibold">{NavLinks.pricing.title}</span>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p>Connect with us:</p>
          <div className="flex gap-3 pt-4">
            <FacebookIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>

        <div className="pt-7 border-b border-b-gray-500 pb-3">
          <div className="flex gap-3">
            <Link href={NavLinks.privacyPolicy.link}>
              <span className="font-semibold">
                {NavLinks.privacyPolicy.title}
              </span>
            </Link>
            <span className="font-semibold">|</span>
            <Link href={NavLinks.cookiePolicy.link}>
              <span className="font-semibold">
                {NavLinks.cookiePolicy.title}
              </span>
            </Link>
          </div>
        </div>
        <p className="pt-3">
          &copy; Copyright Keyvar Solutions LLC All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
