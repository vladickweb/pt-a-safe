import React from "react";
import "@testing-library/jest-dom";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUsersPaginated } from "./useUsersPaginated";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        data: [
          {
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            company: "Company A",
            status: "active",
            lastLogin: new Date(),
          },
        ],
        total: 1,
      }),
  }),
) as jest.Mock;

const createWrapper = () => {
  const queryClient = new QueryClient();
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = "TestWrapper";
  return Wrapper;
};

describe("usePaginatedData", () => {
  it("fetches paginated data successfully", async () => {
    const { result } = renderHook(() => useUsersPaginated(1, 10), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
    expect(result.current.data?.data).toHaveLength(1);
    expect(result.current.data?.total).toBe(1);
  });
});
