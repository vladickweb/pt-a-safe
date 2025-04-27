import "@testing-library/jest-dom";
import { cn, getChangeColor, formatChangeValue } from "./utils";

describe("utils", () => {
  describe("cn", () => {
    it("merges class names correctly", () => {
      const result = cn("text-red-500", "font-bold");
      expect(result).toContain("text-red-500");
      expect(result).toContain("font-bold");
    });

    it("handles empty inputs", () => {
      const result = cn();
      expect(result).toBe("");
    });
  });

  describe("getChangeColor", () => {
    it("returns green for positive or zero change", () => {
      expect(getChangeColor(10)).toBe("text-green-500");
      expect(getChangeColor(0)).toBe("text-gray-500");
    });

    it("returns red for negative change", () => {
      expect(getChangeColor(-5)).toBe("text-red-500");
    });
  });

  describe("formatChangeValue", () => {
    it("formats positive change with plus sign", () => {
      expect(formatChangeValue(10)).toBe("+10%");
    });

    it("formats negative change correctly", () => {
      expect(formatChangeValue(-5)).toBe("-5%");
    });

    it("formats zero change with plus sign", () => {
      expect(formatChangeValue(0)).toBe("0%");
    });
  });
});
