import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  args: {
    value: "apple",
    title: "Apple",
    name: "fruit",
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;
export const Primary: Story = {
  render: (args) => {
    const [selectedFruit, setSelectedFruit] = useState<string>("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Radio
          {...args}
          title="Apple"
          value="apple"
          name="fruit"
          checked={selectedFruit === "apple"}
          onChange={(e) => setSelectedFruit(e.target.value)}
        />
        <Radio
          {...args}
          title="Orange"
          value="orange"
          name="fruit"
          checked={selectedFruit === "orange"}
          onChange={(e) => setSelectedFruit(e.target.value)}
        />
      </div>
    );
  },
  args: {
    disabled: false,
  },
};

export const CheckedRadio: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};
