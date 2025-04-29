export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: "active" | "inactive";
  lastLogin: Date;
}

export interface PaginatedData {
  data: User[];
  total: number;
}
