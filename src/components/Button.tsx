import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";

export const Button = ({
  className,
  children,
  ...other
}: HtmlHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={clsx(
      "px-6 py-2 bg-blue-400 hover:bg-blue-500 transition-all text-white uppercase rounded",
      className
    )}
    {...other}
  >
    {children}
  </button>
);
