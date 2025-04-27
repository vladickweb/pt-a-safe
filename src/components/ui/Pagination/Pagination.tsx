import { Button } from "@/components/ui/Button/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePagination } from "@/hooks/usePagination";

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  isLoading?: boolean;
  pageSize: number;
  testId?: string;
}

export const Pagination = ({
  page,
  totalPages,
  setPage,
  isLoading,
  pageSize,
  testId,
}: PaginationProps) => {
  const { handlePageChange, pages } = usePagination(
    page,
    totalPages,
    pageSize,
    setPage,
  );

  return (
    <div
      className="flex flex-col sm:flex-row justify-center items-center gap-4"
      data-testid={testId}
    >
      <div
        className="flex items-center gap-2 w-full sm:w-auto justify-center"
        data-testid={testId ? `${testId}-controls` : undefined}
      >
        <Button
          variant="outline"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1 || isLoading}
          className="flex-1 sm:flex-none p-2"
          aria-label="Previous page"
          data-testid={testId ? `${testId}-previous` : undefined}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div
          className="hidden sm:flex items-center justify-center space-x-1 min-w-[280px]"
          data-testid={testId ? `${testId}-pages` : undefined}
        >
          {pages.map((p, index) => (
            <div key={index} className="flex items-center">
              {typeof p === "number" ? (
                <Button
                  variant={p === page ? "primary" : "ghost"}
                  onClick={() => handlePageChange(p)}
                  disabled={isLoading}
                  className="h-8 w-8 p-0 text-sm"
                  data-testid={testId ? `${testId}-page-${p}` : undefined}
                >
                  {p}
                </Button>
              ) : (
                <div
                  className="h-8 w-8 flex items-center justify-center text-muted-foreground text-sm select-none"
                  data-testid={
                    testId ? `${testId}-ellipsis-${index}` : undefined
                  }
                >
                  ...
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="sm:hidden text-sm opacity-70"
          data-testid={testId ? `${testId}-mobile-info` : undefined}
        >
          Page {page} of {totalPages}
        </div>

        <Button
          variant="outline"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages || isLoading}
          className="flex-1 sm:flex-none p-2"
          aria-label="Next page"
          data-testid={testId ? `${testId}-next` : undefined}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
