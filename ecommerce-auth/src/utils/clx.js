import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function clx(...inputs) {
  return twMerge(clsx(inputs));
}
