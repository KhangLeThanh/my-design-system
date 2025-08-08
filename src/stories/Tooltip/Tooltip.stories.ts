import type { Meta, StoryObj } from "@storybook/react-vite";
import Tooltip from "./Tooltip";
import { TextPosition } from "../enum";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    positon: {
      control: { type: "select" },
      options: Object.values(TextPosition),
    },
    title: {
      control: "text",
      description: "The visible text that triggers the tooltip",
    },
    content: {
      control: "text",
      description: "The content shown inside the tooltip bubble",
    },
  },
  args: {
    title: "Hover me",
    content: "This is a text",
    positon: TextPosition.BOTTOM,
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;
export const Primary: Story = {};
