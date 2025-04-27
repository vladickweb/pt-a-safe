import { getStatusBadgeColor } from "@/lib/userUtils";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  status: "active" | "inactive";
  lastLogin: string | Date;
}

interface UserTableRowProps {
  user: User;
  testId?: string;
}

export const UserTableRow = ({ user, testId }: UserTableRowProps) => {
  return (
    <tr className="border-t" data-testid={testId}>
      <td
        className="px-4 py-2"
        data-testid={testId ? `${testId}-name` : undefined}
      >
        {user.name}
      </td>
      <td
        className="px-4 py-2"
        data-testid={testId ? `${testId}-email` : undefined}
      >
        {user.email}
      </td>
      <td
        className="px-4 py-2"
        data-testid={testId ? `${testId}-company` : undefined}
      >
        {user.company}
      </td>
      <td
        className="px-4 py-2"
        data-testid={testId ? `${testId}-status` : undefined}
      >
        <span
          className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeColor(user.status)}`}
          data-testid={testId ? `${testId}-status-badge` : undefined}
        >
          {user.status === "active" ? "Active" : "Inactive"}
        </span>
      </td>
      <td
        className="px-4 py-2"
        data-testid={testId ? `${testId}-lastLogin` : undefined}
      >
        {format(new Date(user.lastLogin), "PPP", { locale: enUS })}
      </td>
    </tr>
  );
};
