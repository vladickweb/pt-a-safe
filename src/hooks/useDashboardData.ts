import { DashboardData } from "@/models/Dashboard";
import { useQuery } from "@tanstack/react-query";

export function useDashboardData() {
  return useQuery<DashboardData>({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const res = await fetch("/api/dashboard");
      if (!res.ok) throw new Error("Error fetching dashboard data");
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
  });
}
