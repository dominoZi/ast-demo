import { ChangeEventHandler, HtmlHTMLAttributes } from "react";
import { Input } from "./Input";
import { Label } from "./Label";
import clsx from "clsx";

export interface TextFieldProps extends HtmlHTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const TextField = (props: TextFieldProps) => {
  const { className, label, value, onChange, ...other } = props;
  return (
    <div className={clsx("", className)} {...other}>
      {label && <Label>{label}</Label>}
      <Input value={value} onChange={onChange} />
    </div>
  );
};
