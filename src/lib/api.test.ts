import "@testing-library/jest-dom";
import { fetchPaginatedData } from "./api";

describe("fetchPaginatedData", () => {
  it("returns paginated users correctly", async () => {
    const page = 1;
    const pageSize = 10;
    const result = await fetchPaginatedData(page, pageSize);

    expect(result.data).toHaveLength(pageSize);
    expect(typeof result.total).toBe("number");
    expect(result.total).toBeGreaterThan(0);
  });

  it("returns correct users for specific page", async () => {
    const firstPage = await fetchPaginatedData(1, 5);
    const secondPage = await fetchPaginatedData(2, 5);

    expect(firstPage.data[0].id).not.toEqual(secondPage.data[0].id);
  });

  it("resolves after a short delay", async () => {
    const start = Date.now();
    await fetchPaginatedData(1, 5);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(498);
  });
});
