import React, { FC } from "react";

interface Props {
  value: string;
  label: string;
  onSelect: ({ label, value }: { label: string; value: string }) => void;
}

const DropDownItem: FC<Props> = ({ value, label, onSelect }) => {
  return (
    <div
      role="option"
      onClick={() => onSelect({ value, label })}
      className="py-3 border-b text-sm border-b-gray-300 text-black w-full bg-white last:border-none"
    >
      <p>{label}</p>
    </div>
  );
};

export default DropDownItem;
