import { NavLinks } from "@/@shared/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useActiveNavLink = () => {
  const { pathname, asPath } = useRouter();
  const [activeNavLink, setActiveNavLink] = useState<string | undefined>("/");
  const getNavLinkActive = (): string | undefined => {
    const activeLink = Object.values(NavLinks).map((nl) => nl.link);
    if (window.location.hash === "#services" && pathname === "/") {
      return NavLinks.services.link;
    }
    return activeLink.find((link) => link === pathname);
  };

  useEffect(() => {
    setActiveNavLink(getNavLinkActive());
  }, [pathname, asPath]);

  return [activeNavLink];
};
