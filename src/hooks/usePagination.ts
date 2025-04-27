import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { fetchPaginatedData } from "@/lib/api";

export function usePagination(
  page: number,
  totalPages: number,
  pageSize: number,
  setPage: (page: number) => void,
) {
  const queryClient = useQueryClient();

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage < 1 || newPage > totalPages) return;
      queryClient.prefetchQuery({
        queryKey: ["users", newPage, pageSize],
        queryFn: () => fetchPaginatedData(newPage, pageSize),
      });
      setPage(newPage);
    },
    [queryClient, pageSize, setPage, totalPages],
  );

  const generatePageNumbers = useCallback(() => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (page >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }

    return pages;
  }, [page, totalPages]);

  const pages = generatePageNumbers();

  return { handlePageChange, pages };
}
