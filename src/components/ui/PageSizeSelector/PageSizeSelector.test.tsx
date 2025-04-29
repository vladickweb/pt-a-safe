import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { PageSizeSelector } from "./PageSizeSelector";

describe("PageSizeSelector", () => {
  const testId = "page-size-selector";

  it("renders with default options", () => {
    render(
      <PageSizeSelector
        pageSize={10}
        setPageSize={jest.fn()}
        testId={testId}
      />,
    );
    const container = screen.getByTestId(testId);
    const select = screen.getByTestId(`${testId}-select`);
    expect(container).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue("10");
  });

  it("calls setPageSize when selecting a new option", () => {
    const setPageSize = jest.fn();
    render(
      <PageSizeSelector
        pageSize={10}
        setPageSize={setPageSize}
        testId={testId}
      />,
    );
    fireEvent.change(screen.getByTestId(`${testId}-select`), {
      target: { value: "20" },
    });
    expect(setPageSize).toHaveBeenCalledWith(20);
  });

  it("renders custom options correctly", () => {
    render(
      <PageSizeSelector
        pageSize={5}
        setPageSize={jest.fn()}
        options={[5, 15, 25]}
        testId={testId}
      />,
    );
    expect(screen.getByRole("option", { name: "5" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "15" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "25" })).toBeInTheDocument();
  });
});
