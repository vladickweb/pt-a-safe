import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UsersPage from "./page";
import { usePaginatedData } from "@/hooks/usePaginatedData";

interface Column {
  key: string;
  label: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  status: string;
  lastLogin: string;
}

jest.mock("@/hooks/usePaginatedData", () => ({
  usePaginatedData: jest.fn(),
}));

jest.mock("@/components/layout/PageLayout", () => ({
  PageLayout: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock("@/components/ui/Table/Table", () => ({
  Table: ({
    columns,
    children,
  }: {
    columns: Column[];
    children: React.ReactNode;
  }) => (
    <table data-testid="table">
      <thead>
        {columns.map((col) => (
          <th key={col.key}>{col.label}</th>
        ))}
      </thead>
      <tbody>{children}</tbody>
    </table>
  ),
}));

jest.mock("@/components/users/UserTableRow", () => ({
  UserTableRow: ({ user }: { user: User }) => (
    <tr data-testid={`user-row-${user.id}`}>
      <td>{user.name}</td>
    </tr>
  ),
}));

jest.mock("@/components/users/UserSkeletonRow", () => ({
  UserSkeletonRow: () => <tr data-testid="user-skeleton-row" />,
}));

jest.mock("@/components/ui/Pagination/Pagination", () => ({
  Pagination: () => <div data-testid="pagination" />,
}));

jest.mock("@/components/ui/PageSizeSelector/PageSizeSelector", () => ({
  PageSizeSelector: () => <div data-testid="page-size-selector" />,
}));

describe("UsersPage", () => {
  beforeEach(() => {
    (usePaginatedData as jest.Mock).mockReturnValue({
      data: {
        data: [
          {
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            company: "Company A",
            status: "active",
            lastLogin: "2024-04-01",
          },
          {
            id: "2",
            name: "Jane Smith",
            email: "jane@example.com",
            company: "Company B",
            status: "inactive",
            lastLogin: "2024-04-02",
          },
        ],
        total: 2,
      },
      isLoading: false,
    });
  });

  it("renders users table when data is loaded", () => {
    render(<UsersPage />);
    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getByTestId("user-row-1")).toBeInTheDocument();
    expect(screen.getByTestId("user-row-2")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
    expect(screen.getByTestId("page-size-selector")).toBeInTheDocument();
  });

  it("renders skeletons when loading", () => {
    (usePaginatedData as jest.Mock).mockReturnValueOnce({
      data: null,
      isLoading: true,
    });

    render(<UsersPage />);
    expect(screen.getAllByTestId("user-skeleton-row")).toHaveLength(10);
  });
});
