interface PageSizeSelectorProps {
  pageSize: number;
  setPageSize: (size: number) => void;
  options?: number[];
}

export const PageSizeSelector = ({
  pageSize,
  setPageSize,
  options = [10, 20, 50, 100],
}: PageSizeSelectorProps) => {
  return (
    <div className="flex items-center space-x-2">
      <span>Show</span>
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
        className="border rounded-md px-2 py-1"
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
