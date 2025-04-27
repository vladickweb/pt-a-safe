"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Chart } from "@/components/ui/Chart/Chart";
import { SkeletonCard } from "@/components/ui/Card/SkeletonCard";
import { useDashboardData } from "@/hooks/useDashboardData";

export default function DashboardPage() {
  const { data, isLoading } = useDashboardData();

  return (
    <PageLayout title="Dashboard">
      <div className="p-4 space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${data?.summary.totalSales.value.toLocaleString()}
                  </div>
                  <div
                    className={`text-sm ${
                      (data?.summary.totalSales.change ?? 0 >= 0)
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {(data?.summary.totalSales.change ?? 0) >= 0 ? "+" : ""}
                    {data?.summary.totalSales.change ?? 0}%
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Active Clients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {data?.summary.activeClients.value.toLocaleString()}
                  </div>
                  <div
                    className={`text-sm ${
                      (data?.summary.activeClients.change ?? 0 >= 0)
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {(data?.summary.activeClients.change ?? 0) >= 0 ? "+" : ""}
                    {data?.summary.activeClients.change ?? 0}%
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {data?.summary.conversionRate.value}%
                  </div>
                  <div
                    className={`text-sm ${
                      (data?.summary.conversionRate.change ?? 0) >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {(data?.summary.conversionRate.change ?? 0) >= 0 ? "+" : ""}
                    {data?.summary.conversionRate.change ?? 0}%
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Sales Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <Chart
                    type="line"
                    title="Sales Trend"
                    data={data?.salesData ?? { labels: [], datasets: [] }}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monthly Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <Chart
                    type="bar"
                    title="Monthly Revenue"
                    data={data?.revenueData ?? { labels: [], datasets: [] }}
                  />
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
