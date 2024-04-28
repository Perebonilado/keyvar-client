import React, { FC } from "react";
import { usePathname } from "next/navigation";

import BreadCrumbItem from "./BreadCrumbItem";
import {
  capitalizeFirstLetterOfEachWordInString,
  replaceHyphensWithSpaces,
} from "@/@shared/utils";
import ChevronRight from "@/icons/ChevronRight";

const BreadCrumb: FC = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <div className="flex items-center gap-3">
      <BreadCrumbItem link="/" isActive={false} title="Home" />
      {pathNames.length > 0 ? (
        <div>
          <ChevronRight />
        </div>
      ) : null}

      {pathNames.map((link, index) => {
        let href = `/${pathNames.slice(0, index + 1).join("/")}`;
        let itemTitle = link[0].toUpperCase() + link.slice(1, link.length);
        let isActive = paths == href;

        return (
          <div key={index}>
            <BreadCrumbItem
              isActive={isActive}
              link={href}
              title={replaceHyphensWithSpaces(
                capitalizeFirstLetterOfEachWordInString(itemTitle)
              )}
            />
            {pathNames.length !== index + 1 && (
              <div>
                <ChevronRight />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
