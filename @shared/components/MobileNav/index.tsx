import React, { FC, useEffect } from "react";
import cn from "classnames";
import { NavLinks, mobileScreenSizePx } from "@/@shared/constants";
import MobileNavItem from "../MobileNavItem";
import FacebookIcon from "@/icons/FacebookIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import AnimateRightTransition from "@/transitions/AnimateRight";

interface Props {
  handleClose: () => void;
  isSideNavOpen: boolean;
}

const MobileNav: FC<Props> = ({ handleClose, isSideNavOpen }) => {
  const linkKeys = ["aboutUs", "pricing", "insights", "careers"] as const;
  const handleCloseOnResize = () => {
    if (window.innerWidth <= mobileScreenSizePx) {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleCloseOnResize);

    return () => window.removeEventListener("resize", handleCloseOnResize);
  }, []);

  return (
    <div
      className={
        "bg-[#020228] overflow-x-hidden rounded-md transition-all w-[90vw] max-w-[350px] h-[calc(100vh-100px)] z-[6000] fixed top-[90px] left-1/2 -translate-x-1/2 flex flex-col justify-between"
      }
    >
      <div className="flex flex-col h-full pt-12">
        <div style={{ flex: 4 }}>
          <AnimateRightTransition>
            {linkKeys.map((lk, idx) => {
              return (
                <MobileNavItem
                  key={idx}
                  link={NavLinks[lk].link}
                  title={NavLinks[lk].title}
                />
              );
            })}
          </AnimateRightTransition>
        </div>
        <div
          style={{ flex: 1 }}
          className="py-2 px-5 flex flex-col justify-end gap-3"
        >
          <p className="text-white font-semibold">Follow us on:</p>
          <div className="flex items-center gap-3">
            <FacebookIcon />

            <LinkedInIcon />

            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
