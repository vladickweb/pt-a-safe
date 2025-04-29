import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

interface UserSkeletonRowProps {
  testId?: string;
}

export const UserSkeletonRow = ({ testId }: UserSkeletonRowProps) => {
  return (
    <tr className="border-t h-[41px]" data-testid={testId}>
      <td className="px-4 py-2">
        <Skeleton className="h-4 w-32" testId={`${testId}-col-1`} />
      </td>
      <td className="px-4 py-2">
        <Skeleton className="h-4 w-48" testId={`${testId}-col-2`} />
      </td>
      <td className="px-4 py-2">
        <Skeleton className="h-4 w-40" testId={`${testId}-col-3`} />
      </td>
      <td className="px-4 py-2">
        <Skeleton className="h-4 w-20" testId={`${testId}-col-4`} />
      </td>
      <td className="px-4 py-2">
        <Skeleton className="h-4 w-36" testId={`${testId}-col-5`} />
      </td>
    </tr>
  );
};
