import React, { forwardRef, useState, useEffect } from "react";
import TabItem from "./TabItem";

interface Props {
  headers: {
    title: string;
    subTitle: string;
    key: string;
  }[];
  handleGetActiveTabTitle?: (title: string) => void;
  currentActiveTabOnMount?: string;
}

const Tab = forwardRef<HTMLDivElement, Props>(
  ({ headers, handleGetActiveTabTitle, currentActiveTabOnMount }, ref) => {
    const [headersCopy, setHeadersCopy] = useState(
      [...headers].map((header) => ({ ...header, isActive: false }))
    );

    const handleChangeActiveHeader = (key: string) => {
      setHeadersCopy(() =>
        headersCopy.map((header) => {
          if (header.key === key) {
            if (handleGetActiveTabTitle) handleGetActiveTabTitle(key);
            return { ...header, isActive: true };
          }
          return { ...header, isActive: false };
        })
      );
    };

    useEffect(() => {
      if (currentActiveTabOnMount) {
        handleChangeActiveHeader(currentActiveTabOnMount);
      } else {
        handleChangeActiveHeader(headersCopy[0].key);
      }
    }, []);

    return (
      <div ref={ref} className="flex">
        {headersCopy.map((header, key) => {
          return (
            <TabItem
              {...header}
              headerKey={header.key}
              key={key}
              handleClick={handleChangeActiveHeader}
              style={{ flex: 1 }}
            />
          );
        })}
      </div>
    );
  }
);

export default Tab;
