import React from "react";
import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePagination } from "./usePagination";

jest.mock("@/lib/api", () => ({
  fetchPaginatedData: jest.fn(() => Promise.resolve({ data: [], total: 0 })),
}));

const createWrapper = () => {
  const queryClient = new QueryClient();
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = "TestWrapper";
  return Wrapper;
};

describe("usePagination", () => {
  it("generates correct page numbers when totalPages <= 7", () => {
    const { result } = renderHook(() => usePagination(1, 5, 10, jest.fn()), {
      wrapper: createWrapper(),
    });

    expect(result.current.pages).toEqual([1, 2, 3, 4, 5]);
  });

  it("generates correct page numbers when current page is near the beginning", () => {
    const { result } = renderHook(() => usePagination(2, 10, 10, jest.fn()), {
      wrapper: createWrapper(),
    });

    expect(result.current.pages).toEqual([1, 2, 3, 4, 5, "...", 10]);
  });

  it("generates correct page numbers when current page is near the end", () => {
    const { result } = renderHook(() => usePagination(9, 10, 10, jest.fn()), {
      wrapper: createWrapper(),
    });

    expect(result.current.pages).toEqual([1, "...", 6, 7, 8, 9, 10]);
  });

  it("generates correct page numbers when current page is in the middle", () => {
    const { result } = renderHook(() => usePagination(5, 10, 10, jest.fn()), {
      wrapper: createWrapper(),
    });

    expect(result.current.pages).toEqual([1, "...", 4, 5, 6, "...", 10]);
  });

  it("calls setPage and prefetches data on valid page change", async () => {
    const setPage = jest.fn();
    const { result } = renderHook(() => usePagination(1, 10, 10, setPage), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      result.current.handlePageChange(2);
    });

    expect(setPage).toHaveBeenCalledWith(2);
  });

  it("does not change page if newPage is out of bounds", async () => {
    const setPage = jest.fn();
    const { result } = renderHook(() => usePagination(1, 5, 10, setPage), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      result.current.handlePageChange(0);
    });

    await act(async () => {
      result.current.handlePageChange(6);
    });

    expect(setPage).not.toHaveBeenCalled();
  });
});
