import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonCard } from "./SkeletonCard";

const meta: Meta<typeof SkeletonCard> = {
  title: "UI/SkeletonCard",
  component: SkeletonCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SkeletonCard>;

export const Default: Story = {
  args: {},
};

export const Multiple: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  ),
};
