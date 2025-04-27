import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Chart } from "./Chart";

jest.mock("react-chartjs-2", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Line: ({ options, data }: any) => (
    <div data-testid="mock-line-chart">{JSON.stringify({ options, data })}</div>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Bar: ({ options, data }: any) => (
    <div data-testid="mock-bar-chart">{JSON.stringify({ options, data })}</div>
  ),
}));

jest.mock("@/contexts/ThemeContext", () => ({
  useTheme: () => ({ isDarkMode: false }),
}));

describe("Chart", () => {
  const testId = "chart";

  const chartData = {
    labels: ["January", "February"],
    datasets: [{ label: "Sales", data: [10, 20] }],
  };

  it("renders line chart correctly", () => {
    render(
      <Chart type="line" title="Test Line" data={chartData} testId={testId} />,
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId("mock-line-chart")).toBeInTheDocument();
  });

  it("renders bar chart correctly", () => {
    render(
      <Chart type="bar" title="Test Bar" data={chartData} testId={testId} />,
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId("mock-bar-chart")).toBeInTheDocument();
  });
});
