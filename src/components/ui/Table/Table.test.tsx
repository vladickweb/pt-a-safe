import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

describe("Table", () => {
  const testId = "table";

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
  ];

  it("renders table structure correctly", () => {
    render(
      <Table columns={columns} testId={testId}>
        <tr>
          <td>John Doe</td>
          <td>john@example.com</td>
        </tr>
      </Table>,
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-container`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-table`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-thead`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-tbody`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-th-name`)).toHaveTextContent("Name");
    expect(screen.getByTestId(`${testId}-th-email`)).toHaveTextContent("Email");
  });
});
