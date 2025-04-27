import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the card content. You can put any content here.</p>
        </CardContent>
      </>
    ),
  },
};

export const WithCustomStyles: Story = {
  args: {
    className: "bg-blue-100 dark:bg-blue-900",
    children: (
      <>
        <CardHeader>
          <CardTitle>Custom Styled Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This card has custom background colors for light and dark modes.
          </p>
        </CardContent>
      </>
    ),
  },
};
