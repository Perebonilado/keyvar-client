import React, { FC } from "react";
import Link from "next/link";
import Button from "../../ui-components/Button";
import ChevronRight from "@/icons/ChevronRight";
import cn from "classnames";
import { useActiveNavLink } from "@/hooks/useActiveNavLink";

interface Props {
  link: string;
  title: string;
}

const MobileNavItem: FC<Props> = ({ link, title }) => {
  const [activeNavLink] = useActiveNavLink();

  const linkContainerStyling = cn(
    `flex items-center justify-between py-4 px-5 border-b border-b-stone-500`,
    {
      ["!text-[#2C00B9] !fill-[#2C00B9]"]: activeNavLink === link,
      ["!text-[white] !fill-white"]: activeNavLink !== link,
    }
  );

  const buttonStyling = cn({
    ["!text-[#2C00B9]"]: activeNavLink === link,
    ["!text-[white]"]: activeNavLink !== link,
  });

  return (
    <Link href={link}>
      <div className={linkContainerStyling}>
        <Button title={title} variant="text" className={buttonStyling} />
        <ChevronRight fill="current" />
      </div>
    </Link>
  );
};

export default MobileNavItem;
