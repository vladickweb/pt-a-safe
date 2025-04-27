import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SummaryCard } from "./SummaryCard";

jest.mock("@/lib/utils", () => ({
  cn: (...inputs: string[]) => inputs.join(" "),
  getChangeColor: (change: number) => {
    if (change > 0) return "text-green-500";
    if (change < 0) return "text-red-500";
    return "text-gray-500";
  },
  formatChangeValue: (change: number) => {
    if (change > 0) return `+${change}%`;
    if (change < 0) return `${change}%`;
    return "0%";
  },
}));

describe("SummaryCard", () => {
  const testId = "summary-card";

  it("renders title, value and change correctly without currency", () => {
    render(
      <SummaryCard title="Revenue" value={5000} change={10} testId={testId} />,
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-header`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-title`)).toHaveTextContent("Revenue");
    expect(screen.getByTestId(`${testId}-content`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-value`)).toHaveTextContent("5000");
    expect(screen.getByTestId(`${testId}-change`)).toHaveTextContent("+10%");
  });

  it("renders value with dollar sign when isCurrency is true", () => {
    render(
      <SummaryCard
        title="Sales"
        value={1000}
        change={5}
        isCurrency
        testId={testId}
      />,
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-header`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-title`)).toHaveTextContent("Sales");
    expect(screen.getByTestId(`${testId}-value`)).toHaveTextContent("$1000");
    expect(screen.getByTestId(`${testId}-change`)).toHaveTextContent("+5%");
  });

  it("renders value without dollar sign when isCurrency is false", () => {
    render(
      <SummaryCard title="Users" value={1000} change={-5} testId={testId} />,
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-header`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-title`)).toHaveTextContent("Users");
    expect(screen.getByTestId(`${testId}-value`)).toHaveTextContent("1000");
    expect(screen.getByTestId(`${testId}-change`)).toHaveTextContent("-5%");
  });
});
