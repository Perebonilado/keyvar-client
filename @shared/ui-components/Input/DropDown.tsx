import ScrollableIcon from "@/icons/ScrollableIcon";
import React, { ElementRef, FC, useRef, useState } from "react";
import DropDownItem from "./DropDownItem";
import useClickOutside from "@/hooks/useClickOutside";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  options: { label: string; value: string }[];
  handleSelect?: ({ label, value }: { label: string; value: string }) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  isRequired?: boolean;
}

const DropDown: FC<Props> = ({
  options,
  handleSelect,
  placeholder = "",
  label,
  error,
  isRequired,
  ...props
}) => {
  const [isOptionsOpen, setOptionsOpen] = useState(false);
  const dropDownRef = useClickOutside<ElementRef<"div">>(() => {
    setOptionsOpen(false);
  });
  const mirrorInputRef = useRef<ElementRef<"input">>(null);
  const mainInputRef = useRef<ElementRef<"input">>(null);

  return (
    <>
      {label && (
        <label className="text-white text-sm font-semibold">
          {label} {isRequired && <span className="text-rose-600">*</span>}
        </label>
      )}
      <div
        className={`w-full relative ${label ? "mt-3" : ""}`}
        ref={dropDownRef}
      >
        <input
          ref={mirrorInputRef}
          className="w-full rounded-full h-[25px] p-0 text-black px-4 outline-none cursor-pointer text-sm"
          onClick={() => setOptionsOpen(true)}
          placeholder={placeholder}
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

                  // this sets the value property and then we are able to properly dispatch the input event so this component
                  // can be properly integrated with formik

                  if (mainInputRef.current && window) {
                    try {
                      Object?.getOwnPropertyDescriptor(
                        window.HTMLInputElement.prototype,
                        "value"
                      )?.set?.call(mainInputRef.current, val.value);

                      const event = new Event("input", { bubbles: true });
                      mainInputRef.current.dispatchEvent(event);
                    } catch (error) {
                      console.log(error);
                    }
                  }
                }}
                key={idx}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
