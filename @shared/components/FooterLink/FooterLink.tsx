import ChevronRight from "@/icons/ChevronRight";
import Link from "next/link";
import React, { FC } from "react";
import cn from "classnames";
import { useActiveNavLink } from "@/hooks/useActiveNavLink";

interface Props {
  bgColor?: "default" | "white";
  hasChevron?: boolean;
  link: string;
  title: string;
}

const FooterLink: FC<Props> = ({
  link,
  title,
  bgColor,
  hasChevron = false,
}) => {
  const [activeNavLink] = useActiveNavLink();
  const navLinkContainerStyling = cn(
    `font-semibold hover:fill-[#2C00B9] hover:text-[#2C00B9]`,
    {
      ["fill-white"]: bgColor === "default",
      ["fill-black"]: bgColor === "white",
      ["flex justify-between items-center "]: hasChevron,
      ["!text-[#2C00B9] !fill-[#2C00B9]"]: activeNavLink === link,
    }
  );
  return (
    <Link href={link}>
      <span className={navLinkContainerStyling}>
        {title}
        {hasChevron && <ChevronRight fill="current" />}
      </span>
    </Link>
  );
};

export default FooterLink;
