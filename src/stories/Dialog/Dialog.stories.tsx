import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Dialog from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sx", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => {
    const [isShown, setIsShown] = useState<boolean>(false);
    return (
      <>
        <button onClick={() => setIsShown(true)}>Open Dialog</button>
        <Dialog {...args} open={isShown} onClose={() => setIsShown(false)}>
          <p>This is a sample dialog content. You can put anything here.</p>
        </Dialog>
      </>
    );
  },
  args: {
    size: "sm",
    title: "Example Dialog",
  },
};
