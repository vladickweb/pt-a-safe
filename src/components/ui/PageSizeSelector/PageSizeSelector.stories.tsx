import type { Meta, StoryObj } from "@storybook/react";
import { PageSizeSelector } from "./PageSizeSelector";

const meta: Meta<typeof PageSizeSelector> = {
  title: "UI/PageSizeSelector",
  component: PageSizeSelector,
  tags: ["autodocs"],
  argTypes: {
    pageSize: {
      control: "number",
      defaultValue: 10,
    },
    setPageSize: {
      action: "setPageSize",
    },
    options: {
      control: "object",
      defaultValue: [10, 20, 50, 100],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageSizeSelector>;

export const Default: Story = {
  args: {
    pageSize: 10,
    setPageSize: () => true,
    options: [10, 20, 50, 100],
  },
};

export const CustomOptions: Story = {
  args: {
    pageSize: 5,
    setPageSize: () => true,
    options: [5, 15, 30, 60],
  },
};
