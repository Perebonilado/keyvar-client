import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from "react";
import s from "./styles.module.css";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary";
  size?: "large" | "medium" | "small";
  title: string;
  starticon?: React.ReactNode;
  endicon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: FC<Props> = ({
  variant = "contained",
  size = "medium",
  color = "primary",
  title,
  fullWidth = false,
  ...props
}) => {
  const rootClassName = cn(
    `${s.root}`,
    {
      [s.primary]: color === "primary",
      [s.secondary]: color === "secondary",
      [s.outlined]: variant === "outlined",
      [s.text]: variant === "text",
      [s.contained]: variant === "contained",
      [s.large]: size === "large",
      [s.medium]: size === "medium",
      [s.small]: size === "small",
      [s.fullWidth]: fullWidth,
    },
    props.className
  );

  return (
    <button {...props} className={rootClassName}>
      {props.starticon && props.starticon}
      {title}
      {props.endicon && props.endicon}
    </button>
  );
};

export default Button;
