import { useQuery } from "@tanstack/react-query";
import { fetchPaginatedData } from "@/lib/api";

export function usePaginatedData(page: number, pageSize: number) {
  return useQuery({
    queryKey: ["users", page, pageSize],
    queryFn: () => fetchPaginatedData(page, pageSize),
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
}
