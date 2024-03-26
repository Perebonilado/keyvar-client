import React, { FC } from "react";

import Head from "next/head";

interface Props {
  title?: string;
}

const AppHead: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>Keyvar {title && `| ${title}`}</title>
    </Head>
  );
};

export default AppHead;
