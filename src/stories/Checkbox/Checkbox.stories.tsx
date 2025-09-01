import type { Meta, StoryObj } from "@storybook/react-vite";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    values: "accept-terms",
    title: "Accept terms",
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;
export const Primary: Story = {
  args: {
    disabled: false,
  },
};
