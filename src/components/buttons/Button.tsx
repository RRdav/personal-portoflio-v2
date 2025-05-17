import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 bg-white text-black rounded-full hover:cursor-pointer font-bold font-secondary ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}