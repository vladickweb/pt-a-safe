import type { Meta, StoryObj } from "@storybook/react";
import { Chart } from "./Chart";

const meta: Meta<typeof Chart> = {
  title: "UI/Chart",
  component: Chart,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["line", "bar"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chart>;

const sampleData = {
  labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
  datasets: [
    {
      label: "Sales 2023",
      data: [65, 59, 80, 81, 56, 55],
    },
    {
      label: "Sales 2024",
      data: [28, 48, 40, 19, 86, 27],
    },
  ],
};

export const LineChart: Story = {
  args: {
    type: "line",
    title: "Sales Trend",
    data: sampleData,
  },
};

export const BarChart: Story = {
  args: {
    type: "bar",
    title: "Monthly Revenue",
    data: {
      labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
      datasets: [
        {
          label: "Revenue",
          data: [12000, 19000, 3000, 5000, 2000, 3000],
        },
      ],
    },
  },
};
