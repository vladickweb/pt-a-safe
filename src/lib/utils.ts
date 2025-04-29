import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getChangeColor(change: number) {
  if (change > 0) return "text-green-500";
  if (change < 0) return "text-red-500";
  return "text-gray-500";
}

export function formatChangeValue(change: number) {
  if (change > 0) return `+${change}%`;
  if (change < 0) return `${change}%`;
  return "0%";
}
