import React, { FC } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import Button from "@/@shared/ui-components/Button";

interface Props {
  isActive: boolean;
  link: string;
  title: string;
}

const BreadCrumbItem: FC<Props> = ({ isActive, link, title }) => {
  const router = useRouter();

  const activeStyling = cn({
    "!text-gray-500": !isActive,
    "!text-white": isActive,
  });

  return (
    <Button
      title={title}
      variant="text"
      className={activeStyling}
      role="link"
      onClick={() => router.push(link)}
    />
  );
};

export default BreadCrumbItem;
