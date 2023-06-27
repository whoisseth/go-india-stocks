/** @format */

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args: string[]) {
  return twMerge(clsx(args));
}
