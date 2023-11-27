import clsx from "clsx";
import { LabelHTMLAttributes } from "react";

export const Label = ({
  className,
  children,
  ...other
}: LabelHTMLAttributes<HTMLLabelElement>) => (
  <label
    data-test-id="text-field-label"
    className={clsx("text-xs", className)}
    {...other}
  >
    {children}
  </label>
);
