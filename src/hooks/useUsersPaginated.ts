import { PaginatedData } from "@/models/User";
import { useQuery } from "@tanstack/react-query";

export function useUsersPaginated(page: number, pageSize: number) {
  return useQuery<PaginatedData>({
    queryKey: ["users", page, pageSize],
    queryFn: async () => {
      const res = await fetch(`/api/users?page=${page}&pageSize=${pageSize}`);
      if (!res.ok) throw new Error("Error fetching users data");
      return res.json();
    },
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
}
