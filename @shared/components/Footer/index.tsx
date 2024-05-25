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
import { useActiveNavLink } from "@/hooks/useActiveNavLink";
import FooterLink from "../FooterLink/FooterLink";

interface Props {
  bgColor?: "default" | "white";
}

const Footer: FC<Props> = ({ bgColor = "default" }) => {
  const footerRootStyling = cn(`bg-[#020228] text-sm `, {
    ["bg-[#020228] text-white"]: bgColor === "default",
    ["bg-white text-black"]: bgColor === "white",
  });

  const navLinkContainerStyling = cn(
    `flex justify-between items-center font-semibold hover:fill-[#2C00B9] hover:text-[#2C00B9]`,
    {
      ["fill-white"]: bgColor === "default",
      ["fill-black"]: bgColor === "white",
    }
  );

  return (
    <footer className={footerRootStyling}>
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:hidden pb-14 pt-6 border-b border-b-gray-500">
          <FooterLink
            bgColor={bgColor}
            link={NavLinks.services.link}
            title={NavLinks.services.title}
            hasChevron={true}
          />
          <FooterLink
            bgColor={bgColor}
            link={NavLinks.aboutUs.link}
            title={NavLinks.aboutUs.title}
            hasChevron={true}
          />
          <FooterLink
            bgColor={bgColor}
            link={NavLinks.pricing.link}
            title={NavLinks.pricing.title}
            hasChevron={true}
          />
          <FooterLink
            bgColor={bgColor}
            link={NavLinks.blog.link}
            title={NavLinks.blog.title}
            hasChevron={true}
          />
          <FooterLink
            bgColor={bgColor}
            link={NavLinks.careers.link}
            title={NavLinks.careers.title}
            hasChevron={true}
          />
        </div>
        <div className="max-md:pt-14">
          {bgColor !== "default" ? <AppLogo /> : <AltLogo />}
        </div>
        <div className="py-8 flex">
          <div style={{ flex: 1 }} className="flex flex-col gap-2">
            <p className="font-semibold">Contact</p>
            <a href="mailto:support@keyvarsolutions.com">
              support@keyvarsolutions.com
            </a>
            <p>26 S Calvert St., MD 21202</p>
          </div>

          <div style={{ flex: 1 }} className="flex gap-x-[120px] max-md:hidden">
            <div className="flex flex-col gap-5">
              <FooterLink
                bgColor={bgColor}
                link={NavLinks.aboutUs.link}
                title={NavLinks.aboutUs.title}
              />
              <FooterLink
                bgColor={bgColor}
                link={NavLinks.blog.link}
                title={NavLinks.blog.title}
              />
              <FooterLink
                bgColor={bgColor}
                link={NavLinks.careers.link}
                title={NavLinks.careers.title}
              />
            </div>
            <div className="flex flex-col gap-5">
              <FooterLink
                bgColor={bgColor}
                link={NavLinks.services.link}
                title={NavLinks.services.title}
              />
              <FooterLink
                bgColor={bgColor}
                link={NavLinks.pricing.link}
                title={NavLinks.pricing.title}
              />
            </div>
          </div>
        </div>

        <div>
          <p>Connect with us:</p>
          <div className="flex gap-3 pt-4">
            <a
              href="https://web.facebook.com/people/Keyvar-Solutions/61553631627069/?mibextid=LQQJ4d"
              target="_blank"
              className="cursor-pointer"
            >
              <FacebookIcon />
            </a>
            <a
              target="_blank"
              href={"https://www.linkedin.com/company/keyvar-solutions"}
              className="cursor-pointer"
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://www.instagram.com/keyvarsolutions/"
              target="_blank"
              className="cursor-pointer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="pt-7 border-b border-b-gray-500 pb-3">
          <div className="flex gap-3">
            <FooterLink
              bgColor={bgColor}
              link={NavLinks.privacyPolicy.link}
              title={NavLinks.privacyPolicy.title}
            />
            <span className="font-semibold">|</span>
            <FooterLink
              bgColor={bgColor}
              link={NavLinks.cookiePolicy.link}
              title={NavLinks.cookiePolicy.title}
            />
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
