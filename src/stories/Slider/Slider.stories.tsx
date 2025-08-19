import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Slider from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    onChange: { action: "changed" },
  },
  args: {
    title: "Volume",
    min: 0,
    max: 100,
    value: 50,
    onChange: (e) => console.log("Slider value:", e.target.value),
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;
export const Primary: Story = {
  render: (args) => {
    const [valueVolume, setValueVolume] = useState<number>(0);
    return (
      <Slider
        {...args}
        value={valueVolume}
        onChange={(e) => setValueVolume(parseInt(e.target.value))}
      />
    );
  },
  args: {
    disabled: false,
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
