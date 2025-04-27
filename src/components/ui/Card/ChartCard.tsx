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
  testId?: string;
}

export function ChartCard({ title, data, type, testId }: ChartCardProps) {
  return (
    <Card data-testid={testId}>
      <CardHeader testId={testId ? `${testId}-header` : undefined}>
        <CardTitle testId={testId ? `${testId}-title` : undefined}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent testId={testId ? `${testId}-content` : undefined}>
        <Chart
          type={type}
          title={title}
          data={data ?? { labels: [], datasets: [] }}
          testId={testId ? `${testId}-chart` : undefined}
        />
      </CardContent>
    </Card>
  );
}
