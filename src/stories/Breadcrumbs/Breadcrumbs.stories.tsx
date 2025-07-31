import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    items: [
      { text: "Home", urlLink: "/" },
      { text: "Dashboard", urlLink: "/dashboard" },
      { text: "Settings" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;
export const Primary: Story = {};
