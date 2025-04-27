import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "h-4 w-[250px]",
  },
};

export const Circle: Story = {
  args: {
    className: "h-10 w-10 rounded-full",
  },
};

export const Text: Story = {
  args: {
    className: "h-4 w-[200px]",
  },
};

export const Title: Story = {
  args: {
    className: "h-8 w-[300px]",
  },
};

export const Card: Story = {
  args: {
    className: "h-[200px] w-[300px] rounded-lg",
  },
};
