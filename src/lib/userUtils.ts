export const getStatusBadgeColor = (status: "active" | "inactive") => {
  return status === "active"
    ? "bg-green-100 text-green-800"
    : "bg-red-100 text-red-800";
};
