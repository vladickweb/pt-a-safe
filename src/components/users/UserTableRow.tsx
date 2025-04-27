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
}

export const UserTableRow = ({ user }: UserTableRowProps) => {
  return (
    <tr className="border-t">
      <td className="px-4 py-2">{user.name}</td>
      <td className="px-4 py-2">{user.email}</td>
      <td className="px-4 py-2">{user.company}</td>
      <td className="px-4 py-2">
        <span
          className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeColor(user.status)}`}
        >
          {user.status === "active" ? "Active" : "Inactive"}
        </span>
      </td>
      <td className="px-4 py-2">
        {format(new Date(user.lastLogin), "PPP", { locale: enUS })}
      </td>
    </tr>
  );
};
