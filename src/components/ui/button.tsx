import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonStyle = tv({
  base: "w-full rounded-lg bg-gray-50 text-gray-200 font-medium transition duration-200",
  variants: {
    variant: {
      primary: "bg-indigo-600 hover:bg-indigo-500 text-white",
      secondary: "bg-gray-50 hover:bg-gray-100 text-gray-600",
      bordered: "bg-transparent border border-gray-500 text-gray-600",
    },
    size: {
      sm: "text-sm px-2.5 py-1.5",
      md: "text-base px-4 py-2.5",
      lg: "text-lg px-5 py-3.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type TButton = VariantProps<typeof buttonStyle>;

interface ButtonProps extends TButton, React.ComponentPropsWithRef<"button"> {}

export const Button = ({ ...props }: ButtonProps) => {
  return <button {...props} className={buttonStyle({ ...props })} />;
};
