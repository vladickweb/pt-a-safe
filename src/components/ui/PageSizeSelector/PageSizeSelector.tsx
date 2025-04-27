interface PageSizeSelectorProps {
  pageSize: number;
  setPageSize: (size: number) => void;
  options?: number[];
  testId?: string;
}

export const PageSizeSelector = ({
  pageSize,
  setPageSize,
  options = [10, 20, 50, 100],
  testId,
}: PageSizeSelectorProps) => {
  return (
    <div className="flex items-center space-x-2" data-testid={testId}>
      <span>Show</span>
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
        className="border rounded-md px-2 py-1"
        data-testid={testId ? `${testId}-select` : undefined}
      >
        {options.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <span>records</span>
    </div>
  );
};
