import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ChartCard } from "./ChartCard";

jest.mock("@/components/ui/Chart/Chart", () => ({
  Chart: ({ type, title }: { type: string; title: string }) => (
    <div data-testid="mock-chart">
      {type} - {title}
    </div>
  ),
}));

describe("ChartCard", () => {
  const testId = "chart-card";

  const chartData = {
    labels: ["January", "February"],
    datasets: [{ label: "Sales", data: [10, 20] }],
  };

  it("renders title and chart correctly", () => {
    render(
      <ChartCard
        title="Test Chart"
        data={chartData}
        type="bar"
        testId={testId}
      />,
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-header`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-title`)).toHaveTextContent(
      "Test Chart",
    );
    expect(screen.getByTestId(`${testId}-content`)).toBeInTheDocument();
    expect(screen.getByTestId("mock-chart")).toHaveTextContent(
      "bar - Test Chart",
    );
  });
});
