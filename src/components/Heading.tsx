/** @format */

import { cn } from "@/utils/cn";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  className?: string;
}

export default function Heading({ text, className, ...rest }: HeadingProps) {
  return (
    <h1
      {...rest}
      className={cn("text-xl font-semibold text-red-400", className)}
    >
      {text}
    </h1>
  );
}
