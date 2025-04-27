import type { Meta, StoryObj } from "@storybook/react";
import { LoadingSpinner } from "./LoadingSpinner";

const meta: Meta<typeof LoadingSpinner> = {
  title: "UI/LoadingSpinner",
  component: LoadingSpinner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
  args: {},
};

export const WithCustomSize: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="min-h-[200px]">
        <Story />
      </div>
    ),
  ],
};
