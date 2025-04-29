interface Column {
  key: string;
  label: string;
}

interface TableProps {
  columns: Column[];
  children: React.ReactNode;
  testId?: string;
}

export const Table = ({ columns, children, testId }: TableProps) => {
  return (
    <div className="border rounded-lg overflow-hidden" data-testid={testId}>
      <div className="overflow-x-auto" data-testid={`${testId}-container`}>
        <table className="w-full min-w-[800px]" data-testid={`${testId}-table`}>
          <thead className="opacity-75" data-testid={`${testId}-thead`}>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-2 text-left"
                  data-testid={`${testId}-th-${column.key}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody data-testid={`${testId}-tbody`}>{children}</tbody>
        </table>
      </div>
    </div>
  );
};
