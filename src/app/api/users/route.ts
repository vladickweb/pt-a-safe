import { NextRequest, NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

const TOTAL_RECORDS = 1000;

const generateMockUsers = (count: number) => {
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

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  await new Promise((resolve) => setTimeout(resolve, 500));

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = mockUsers.slice(start, end);

  return NextResponse.json({
    data: paginatedData,
    total: TOTAL_RECORDS,
  });
}
