interface Column {
  key: string;
  label: string;
}

interface TableProps {
  columns: Column[];
  children: React.ReactNode;
}

export const Table = ({ columns, children }: TableProps) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="opacity-75">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-4 py-2 text-left">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
};
