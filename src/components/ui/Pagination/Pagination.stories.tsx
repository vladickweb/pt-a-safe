import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    page: {
      control: "number",
      defaultValue: 1,
    },
    totalPages: {
      control: "number",
      defaultValue: 10,
    },
    setPage: {
      action: "setPage",
    },
    isLoading: {
      control: "boolean",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    page: 1,
    totalPages: 10,
    setPage: () => true,
    isLoading: false,
  },
};

export const MiddlePage: Story = {
  args: {
    page: 5,
    totalPages: 10,
    setPage: () => true,
    isLoading: false,
  },
};

export const LastPage: Story = {
  args: {
    page: 10,
    totalPages: 10,
    setPage: () => true,
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    page: 1,
    totalPages: 10,
    setPage: () => true,
    isLoading: true,
  },
};
