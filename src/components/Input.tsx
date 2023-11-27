import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export const Input = ({
  className,
  ...other
}: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    data-test-id="text-field-input"
    className={clsx(
      "block w-full border border-slate-300 p-1 rounded ",
      className
    )}
    {...other}
  />
);
