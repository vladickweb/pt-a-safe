export interface DashboardData {
  salesData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
  revenueData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
  summary: {
    totalSales: {
      value: number;
      change: number;
    };
    activeClients: {
      value: number;
      change: number;
    };
    conversionRate: {
      value: number;
      change: number;
    };
  };
}
