import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export function getChangeColor(change: number) {
  return change >= 0 ? "text-green-500" : "text-red-500";
}

export function formatChangeValue(change: number) {
  const prefix = change >= 0 ? "+" : "";
  return `${prefix}${change}%`;
}
