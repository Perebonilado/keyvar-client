import React, { FC } from "react";

interface Props {
  body: string;
}

const FieldFocusItem: FC<Props> = ({ body }) => {
  return (
    <div className="border border-[#7D7D7D] rounded-xl w-full max-w-[380px] py-2 text-sm px-2 flex justify-center">
      <p className="font-semibold">{body}</p>
    </div>
  );
};

export default FieldFocusItem;
