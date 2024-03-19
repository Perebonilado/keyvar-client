import React, { FC } from "react";
import Link from "next/link";
import Button from "../../ui-components/Button";
import ChevronRight from "@/icons/ChevronRight";

interface Props {
  link: string;
  title: string;
}

const MobileNavItem: FC<Props> = ({ link, title }) => {
  return (
    <Link href={link}>
      <div className="flex items-center justify-between py-4 px-5 border-b border-b-stone-500">
        <Button title={title} variant="text" className="!text-white" />
        <ChevronRight />
      </div>
    </Link>
  );
};

export default MobileNavItem;
