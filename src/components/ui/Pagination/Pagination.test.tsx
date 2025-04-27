import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "./Pagination";

jest.mock("@/hooks/usePagination", () => ({
  usePagination: (
    page: number,
    totalPages: number,
    pageSize: number,
    setPage: (page: number) => void,
  ) => ({
    handlePageChange: setPage,
    pages: Array.from({ length: totalPages }, (_, i) => i + 1),
  }),
}));

describe("Pagination", () => {
  const testId = "pagination";

  it("renders pagination controls", () => {
    render(
      <Pagination
        page={1}
        totalPages={5}
        pageSize={10}
        setPage={jest.fn()}
        testId={testId}
      />,
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-controls`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-previous`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-next`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-pages`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-page-1`)).toBeInTheDocument();
  });

  it("calls setPage when clicking next page", () => {
    const setPage = jest.fn();
    render(
      <Pagination
        page={1}
        totalPages={5}
        pageSize={10}
        setPage={setPage}
        testId={testId}
      />,
    );
    fireEvent.click(screen.getByTestId(`${testId}-next`));
    expect(setPage).toHaveBeenCalledWith(2);
  });

  it("calls setPage when clicking previous page", () => {
    const setPage = jest.fn();
    render(
      <Pagination
        page={3}
        totalPages={5}
        pageSize={10}
        setPage={setPage}
        testId={testId}
      />,
    );
    fireEvent.click(screen.getByTestId(`${testId}-previous`));
    expect(setPage).toHaveBeenCalledWith(2);
  });

  it("calls setPage when clicking a page number", () => {
    const setPage = jest.fn();
    render(
      <Pagination
        page={1}
        totalPages={5}
        pageSize={10}
        setPage={setPage}
        testId={testId}
      />,
    );
    fireEvent.click(screen.getByTestId(`${testId}-page-3`));
    expect(setPage).toHaveBeenCalledWith(3);
  });
});
