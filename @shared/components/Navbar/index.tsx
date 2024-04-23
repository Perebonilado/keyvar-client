import React, { FC, useState } from "react";
import { AppLogo } from "../AppLogo";
import { NavLinks } from "@/@shared/constants";
import Button from "../../ui-components/Button";
import Link from "next/link";
import Container from "../../ui-components/Container";
import Hamburger from "../Hamburger";
import MobileNav from "../MobileNav";
import cn from "classnames";
import { useActiveNavLink } from "@/hooks/useActiveNavLink";

const Navbar: FC = () => {
  const linkKeys = ["services", "aboutUs", "pricing", "insights"] as const;
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [activeNavLink] = useActiveNavLink();

  const contactUsBtnActiveStyling = cn({
    ["!text-[#2C00B9] !border-[#2C00B9]"]:
      activeNavLink === NavLinks.contactUs.link,
  });

  return (
    <>
      <nav className="flex items-center fixed z-[5000] top-0 left-0 w-screen shadow-md h-20 bg-[#FBF9F0]">
        <Container>
          <div className="flex items-center gap-3">
            <div style={{ flex: 2 }} className="flex items-center gap-3">
              <div style={{ flex: 1 }} className="flex items-center">
                <AppLogo />
              </div>
              <div
                style={{ flex: 5 }}
                className="flex items center gap-14 max-md:hidden"
              >
                {linkKeys.map((link, idx) => {
                  const className = cn({
                    "!text-[#2C00B9]": activeNavLink === NavLinks[link].link,
                  });
                  return (
                    <Link href={NavLinks[link].link} key={idx}>
                      <Button
                        variant="text"
                        color="secondary"
                        title={NavLinks[link].title}
                        className={className}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div
              style={{ flex: 1 }}
              className="flex items-center justify-end max-md:hidden"
            >
              <Link href={NavLinks.contactUs.link}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ fontFamily: "Literata, serif !important" }}
                  title={NavLinks.contactUs.title}
                  className={contactUsBtnActiveStyling}
                />
              </Link>
            </div>
            <Hamburger
              isSideNavOpen={isMobileNav}
              onClick={() => {
                setIsMobileNav(!isMobileNav);
              }}
            />
          </div>
        </Container>
      </nav>
      {isMobileNav && (
        <MobileNav
          isSideNavOpen={isMobileNav}
          handleClose={() => {
            setIsMobileNav(!isMobileNav);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
