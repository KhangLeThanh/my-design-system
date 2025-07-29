import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    onClick: { action: "clicked" },
  },
  args: {
    text: "Hello",
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const ChipWithIcon: Story = {
  args: {
    text: "World",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={20}
        height={20}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
        />
      </svg>
    ),
  },
};
