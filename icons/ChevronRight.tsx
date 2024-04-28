import React, { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const ChevronRight: FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "white"}
      {...props}
    >
      <path
        d="M1.20431 11.3832C0.992774 11.5607 0.677396 11.5331 0.499895 11.3216C0.322394 11.11 0.349986 10.7947 0.561524 10.6172L5.92383 6.11764C6.13537 5.94014 6.45075 5.96773 6.62825 6.17927C6.80575 6.3908 6.77816 6.70618 6.56662 6.88368L1.20431 11.3832Z"
        fill="current"
      />
      <path
        d="M0.383022 1.70958C0.171485 1.53208 0.143893 1.2167 0.321394 1.00516C0.498895 0.793624 0.814272 0.766032 1.02581 0.943533L6.90732 5.87871C7.11886 6.05621 7.14645 6.37159 6.96895 6.58312C6.79145 6.79466 6.47607 6.82225 6.26453 6.64475L0.383022 1.70958Z"
        fill="current"
      />
    </svg>
  );
};

export default ChevronRight;
