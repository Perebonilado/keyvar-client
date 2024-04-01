import ScrollableIcon from "@/icons/ScrollableIcon";
import React, { ElementRef, FC, useRef, useState } from "react";
import DropDownItem from "./DropDownItem";
import useClickOutside from "@/hooks/useClickOutside";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  options: { label: string; value: string }[];
  handleSelect?: ({ label, value }: { label: string; value: string }) => void;
  placeholder: string;
}

const DropDown: FC<Props> = ({ options, handleSelect, ...props }) => {
  const [isOptionsOpen, setOptionsOpen] = useState(false);
  const dropDownRef = useClickOutside<ElementRef<"div">>(() => {
    setOptionsOpen(false);
  });
  const mirrorInputRef = useRef<ElementRef<"input">>(null);
  const mainInputRef = useRef<ElementRef<"input">>(null);

  return (
    <div className="w-full relative" ref={dropDownRef}>
      <input
        ref={mirrorInputRef}
        className="w-full rounded-full h-[25px] p-0 px-4 outline-none cursor-pointer text-sm"
        onClick={() => setOptionsOpen(true)}
        placeholder={props.placeholder}
        readOnly
      />
      <input className="hidden" ref={mainInputRef} {...props} />
      <ScrollableIcon className="absolute right-2 top-1/2 -translate-y-1/2" />
      {isOptionsOpen && (
        <div className="w-full absolute left-0 top-[calc(100%+5px)] px-4 bg-white rounded-md cursor-pointer shadow-md">
          {options.map((opt, idx) => (
            <DropDownItem
              {...opt}
              onSelect={(val) => {
                handleSelect && handleSelect(val);
                setOptionsOpen(false);
                if (mirrorInputRef.current) {
                  mirrorInputRef.current.value = val.label;
                }

                if (mainInputRef.current) {
                  mainInputRef.current.value = val.value;
                }
              }}
              key={idx}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
