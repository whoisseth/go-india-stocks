/** @format */

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ClassNameObject = { [key: string]: boolean };

export function cn(...args: (string | ClassNameObject)[]) {
  const classNames = args.map((arg) => {
    if (typeof arg === "string") {
      return arg;
    }
    return Object.entries(arg)
      .filter(([, value]) => value)
      .map(([key]) => key);
  });

  return twMerge(clsx(classNames));
}
