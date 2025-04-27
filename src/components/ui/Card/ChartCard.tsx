import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Chart } from "@/components/ui/Chart/Chart";

interface ChartCardProps {
  title: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
    }[];
  };
  type: "line" | "bar";
}

export function ChartCard({ title, data, type }: ChartCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart
          type={type}
          title={title}
          data={data ?? { labels: [], datasets: [] }}
        />
      </CardContent>
    </Card>
  );
}
