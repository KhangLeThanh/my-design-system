import type { Meta, StoryObj } from "@storybook/react-vite";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    onChange: { action: "changed" },
  },
  args: {
    checked: false,
    title: "Sound",
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;
export const Primary: Story = {
  args: {
    disabled: false,
  },
};
export const DefauledChecked: Story = {
  args: {
    checked: true,
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
