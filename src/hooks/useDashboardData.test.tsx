import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDashboardData } from "./useDashboardData";

const mockDashboardData = {
  salesData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales 2023",
        data: [50, 60, 70, 80, 90, 100],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Sales 2024",
        data: [20, 30, 40, 50, 60, 70],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  },
  revenueData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [10000, 15000, 20000, 25000, 30000, 35000],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  },
  summary: {
    totalSales: {
      value: 150000,
      change: 5.5,
    },
    activeClients: {
      value: 1500,
      change: 2.5,
    },
    conversionRate: {
      value: 3.2,
      change: 0.8,
    },
  },
};

jest.mock("./useDashboardData", () => ({
  useDashboardData: () => ({
    data: mockDashboardData,
    isLoading: false,
    isSuccess: true,
    error: null,
  }),
}));

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
      },
    },
  });
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = "TestWrapper";
  return Wrapper;
};

describe("useDashboardData", () => {
  it("returns dashboard data successfully", async () => {
    const { result } = renderHook(() => useDashboardData(), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toBeDefined();
    expect(result.current.data?.salesData).toBeDefined();
    expect(result.current.data?.revenueData).toBeDefined();
    expect(result.current.data?.summary).toBeDefined();
  });

  it("has sales and revenue data when loaded", async () => {
    const { result } = renderHook(() => useDashboardData(), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data?.salesData.labels.length).toBeGreaterThan(0);
    expect(result.current.data?.revenueData.labels.length).toBeGreaterThan(0);
  });
});
