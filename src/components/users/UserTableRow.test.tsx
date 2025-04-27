import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UserTableRow } from "./UserTableRow";

jest.mock("@/lib/userUtils", () => ({
  getStatusBadgeColor: (status: string) =>
    status === "active" ? "text-green-500" : "text-red-500",
}));

describe("UserTableRow", () => {
  const testId = "user-table-row";

  const user = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    company: "Example Inc.",
    status: "active",
    lastLogin: "2024-04-01T12:00:00Z",
  };

  it("renders user data correctly", () => {
    render(<UserTableRow user={user} testId={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-name`)).toHaveTextContent("John Doe");
    expect(screen.getByTestId(`${testId}-email`)).toHaveTextContent(
      "john@example.com",
    );
    expect(screen.getByTestId(`${testId}-company`)).toHaveTextContent(
      "Example Inc.",
    );
    expect(screen.getByTestId(`${testId}-status-badge`)).toHaveTextContent(
      "Active",
    );
    expect(screen.getByTestId(`${testId}-lastLogin`)).toBeInTheDocument();
  });
});
