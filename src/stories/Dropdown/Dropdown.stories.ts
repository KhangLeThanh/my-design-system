import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    onChange: { action: "changed" },
  },
  args: {
    values: [
      { title: "Volvo", value: "volvo" },
      { title: "BMW", value: "bmw" },
    ],
    idSelect: "select-car",
    label: "Car list",
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;
export const Primary: Story = {
  args: {
    disabled: false,
  },
};
