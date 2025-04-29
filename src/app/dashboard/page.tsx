"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { SkeletonCard } from "@/components/ui/Card/SkeletonCard";
import { SummaryCard } from "@/components/ui/Card/SummaryCard";
import { ChartCard } from "@/components/ui/Card/ChartCard";
import { useDashboardData } from "@/hooks/useDashboardData";

export default function DashboardPage() {
  const { data, isLoading } = useDashboardData();

  return (
    <PageLayout>
      <div className="p-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          {isLoading ? (
            <>
              <SkeletonCard testId="skeleton-card" />
              <SkeletonCard testId="skeleton-card" />
              <SkeletonCard testId="skeleton-card" />
            </>
          ) : (
            <>
              <SummaryCard
                title="Sales Overview"
                value={data?.summary.totalSales.value.toLocaleString() ?? 0}
                change={data?.summary.totalSales.change ?? 0}
                isCurrency
                testId="summary-card"
              />
              <SummaryCard
                title="Active Clients"
                value={data?.summary.activeClients.value.toLocaleString() ?? 0}
                change={data?.summary.activeClients.change ?? 0}
                testId="summary-card"
              />
              <SummaryCard
                title="Conversion Rate"
                value={`${data?.summary.conversionRate.value ?? 0}%`}
                change={data?.summary.conversionRate.change ?? 0}
                testId="summary-card"
              />
            </>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {isLoading ? (
            <>
              <SkeletonCard testId="skeleton-card" />
              <SkeletonCard testId="skeleton-card" />
            </>
          ) : (
            <>
              <div className="overflow-hidden">
                <ChartCard
                  title="Sales Trend"
                  type="line"
                  data={data?.salesData ?? { labels: [], datasets: [] }}
                  testId="chart-card"
                />
              </div>
              <div className="overflow-hidden">
                <ChartCard
                  title="Monthly Revenue"
                  type="bar"
                  data={data?.revenueData ?? { labels: [], datasets: [] }}
                  testId="chart-card"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
