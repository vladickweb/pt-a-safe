import { faker } from "@faker-js/faker";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: "active" | "inactive";
  lastLogin: Date;
}

interface PaginatedData {
  data: User[];
  total: number;
}

const TOTAL_RECORDS = 1000;

const generateMockUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    company: faker.company.name(),
    status: faker.helpers.arrayElement(["active", "inactive"]),
    lastLogin: faker.date.recent(),
  }));
};

const mockUsers = generateMockUsers(TOTAL_RECORDS);

export const fetchPaginatedData = async (
  page: number,
  pageSize: number,
): Promise<PaginatedData> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = mockUsers.slice(start, end);

  return {
    data: paginatedData,
    total: TOTAL_RECORDS,
  };
};
