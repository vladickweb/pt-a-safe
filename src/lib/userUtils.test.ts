import { getStatusBadgeColor } from "./userUtils";

describe("getStatusBadgeColor", () => {
  it("returns green classes when status is 'active'", () => {
    const result = getStatusBadgeColor("active");
    expect(result).toBe("bg-green-100 text-green-800");
  });

  it("returns red classes when status is 'inactive'", () => {
    const result = getStatusBadgeColor("inactive");
    expect(result).toBe("bg-red-100 text-red-800");
  });
});
