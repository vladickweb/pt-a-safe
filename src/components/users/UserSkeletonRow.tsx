import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

export const UserSkeletonRow = () => {
  return (
    <tr className="border-t h-[41px]">
      <td className="px-4 py-2">
        <Skeleton className="h-4 w-32" />
      </td>
      <td className="px-4 py-2">
        <Skeleton className="h-4 w-48" />
      </td>
      <td className="px-4 py-2">
        <Skeleton className="h-4 w-40" />
      </td>
      <td className="px-4 py-2">
        <Skeleton className="h-4 w-20" />
      </td>
      <td className="px-4 py-2">
        <Skeleton className="h-4 w-36" />
      </td>
    </tr>
  );
};
