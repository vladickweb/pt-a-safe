import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { getChangeColor, formatChangeValue } from "@/lib/utils";

interface SummaryCardProps {
  title: string;
  value: number | string;
  change: number;
  isCurrency?: boolean;
}

export function SummaryCard({
  title,
  value,
  change,
  isCurrency,
}: SummaryCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {isCurrency ? `$${value}` : value}
        </div>
        <div className={`text-sm ${getChangeColor(change)}`}>
          {formatChangeValue(change)}
        </div>
      </CardContent>
    </Card>
  );
}
