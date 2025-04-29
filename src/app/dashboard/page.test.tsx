import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DashboardPage from "./page";
import { useDashboardData } from "@/hooks/useDashboardData";

jest.mock("@/hooks/useDashboardData", () => ({
  useDashboardData: jest.fn(),
}));

jest.mock("@/components/ui/Card/SummaryCard", () => ({
  SummaryCard: ({ title }: { title: string }) => (
    <div data-testid={`summary-card-${title}`}>{title}</div>
  ),
}));

jest.mock("@/components/ui/Card/ChartCard", () => ({
  ChartCard: ({ title }: { title: string }) => (
    <div data-testid={`chart-card-${title}`}>{title}</div>
  ),
}));

jest.mock("@/components/ui/Card/SkeletonCard", () => ({
  SkeletonCard: () => <div data-testid="skeleton-card" />,
}));

jest.mock("@/components/layout/PageLayout", () => ({
  PageLayout: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("DashboardPage", () => {
  beforeEach(() => {
    (useDashboardData as jest.Mock).mockReturnValue({
      data: {
        summary: {
          totalSales: { value: 100000, change: 5 },
          activeClients: { value: 200, change: 2 },
          conversionRate: { value: 3, change: 0.5 },
        },
        salesData: {
          labels: ["Jan", "Feb"],
          datasets: [{ label: "Sales", data: [10, 20] }],
        },
        revenueData: {
          labels: ["Jan", "Feb"],
          datasets: [{ label: "Revenue", data: [5, 15] }],
        },
      },
      isLoading: false,
    });
  });

  it("renders summary and chart cards when data is loaded", () => {
    render(<DashboardPage />);
    expect(
      screen.getByTestId("summary-card-Sales Overview"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("summary-card-Active Clients"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("summary-card-Conversion Rate"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("chart-card-Sales Trend")).toBeInTheDocument();
    expect(
      screen.getByTestId("chart-card-Monthly Revenue"),
    ).toBeInTheDocument();
  });

  it("renders skeletons when loading", () => {
    (useDashboardData as jest.Mock).mockReturnValueOnce({
      data: null,
      isLoading: true,
    });

    render(<DashboardPage />);
    expect(screen.getAllByTestId("skeleton-card")).toHaveLength(5);
  });
});
