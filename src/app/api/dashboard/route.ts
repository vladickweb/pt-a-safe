import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export async function GET() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const sales2023 = months.map(() => faker.number.int({ min: 50, max: 100 }));
  const sales2024 = months.map(() => faker.number.int({ min: 20, max: 90 }));
  const revenue = months.map(() =>
    faker.number.int({ min: 10000, max: 30000 }),
  );

  const data = {
    salesData: {
      labels: months,
      datasets: [
        {
          label: "Sales 2023",
          data: sales2023,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
        {
          label: "Sales 2024",
          data: sales2024,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    },
    revenueData: {
      labels: months,
      datasets: [
        {
          label: "Revenue",
          data: revenue,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    },
    summary: {
      totalSales: {
        value: faker.number.int({ min: 100000, max: 200000 }),
        change: faker.number.float({ min: -10, max: 20, fractionDigits: 1 }),
      },
      activeClients: {
        value: faker.number.int({ min: 1000, max: 2000 }),
        change: faker.number.float({ min: -5, max: 10, fractionDigits: 1 }),
      },
      conversionRate: {
        value: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
        change: faker.number.float({ min: -1, max: 2, fractionDigits: 1 }),
      },
    },
  };

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json(data);
}
