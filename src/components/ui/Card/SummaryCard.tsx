import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { getChangeColor, formatChangeValue } from "@/lib/utils";

interface SummaryCardProps {
  title: string;
  value: number | string;
  change: number;
  isCurrency?: boolean;
  testId?: string;
}

export function SummaryCard({
  title,
  value,
  change,
  isCurrency,
  testId,
}: SummaryCardProps) {
  return (
    <Card testId={testId}>
      <CardHeader testId={testId ? `${testId}-header` : undefined}>
        <CardTitle testId={testId ? `${testId}-title` : undefined}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent testId={testId ? `${testId}-content` : undefined}>
        <div
          className="text-2xl font-bold"
          data-testid={testId ? `${testId}-value` : undefined}
        >
          {isCurrency ? `$${value}` : value}
        </div>
        <div
          className={`text-sm ${getChangeColor(change)}`}
          data-testid={testId ? `${testId}-change` : undefined}
        >
          {formatChangeValue(change)}
        </div>
      </CardContent>
    </Card>
  );
}
