import { Card, CardContent, CardHeader } from ".";
import { Skeleton } from "../Skeleton/Skeleton";

interface SkeletonCardProps {
  testId?: string;
}

export function SkeletonCard({ testId }: SkeletonCardProps) {
  return (
    <Card data-testid={testId}>
      <CardHeader testId={testId ? `${testId}-header` : undefined}>
        <Skeleton
          className="h-6 w-3/4"
          testId={testId ? `${testId}-header-skeleton` : undefined}
        />
      </CardHeader>
      <CardContent testId={testId ? `${testId}-content` : undefined}>
        <div
          className="space-y-2"
          data-testid={testId ? `${testId}-content-skeletons` : undefined}
        >
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </CardContent>
    </Card>
  );
}
