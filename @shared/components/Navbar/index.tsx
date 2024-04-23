import React, { FC, useState, useEffect } from "react";
import { AppLogo } from "../AppLogo";
import { NavLinks } from "@/@shared/constants";
import Button from "../../ui-components/Button";
import Link from "next/link";
import Container from "../../ui-components/Container";
import Hamburger from "../Hamburger";
import MobileNav from "../MobileNav";

const Navbar: FC = () => {
  const linkKeys = ["services", "aboutUs", "pricing", "insights"] as const;
  const [isMobileNav, setIsMobileNav] = useState(false);

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
                  return (
                    <Link href={NavLinks[link].link} key={idx}>
                      <Button
                        variant="text"
                        color="secondary"
                        title={NavLinks[link].title}
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
