/** @format */

import clsx, { ClassValue, ClassDictionary } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]) {
  const filteredArgs = args.filter((arg) => arg !== null);

  const classNames = filteredArgs.map((arg) => {
    if (typeof arg === "string") {
      return arg;
    }
    if (typeof arg === "object" && !Array.isArray(arg)) {
      return Object.entries(arg || {})
        .filter(([, value]) => value)
        .map(([key]) => key);
    }
    return arg;
  });

  return twMerge(clsx(classNames));
}
