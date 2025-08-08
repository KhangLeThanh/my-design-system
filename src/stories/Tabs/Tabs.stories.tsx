import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    items: [
      { label: "Overview", content: <div>Overview content</div> },
      { label: "Profile", content: <div>Profile content</div> },
      { label: "External", urlLink: "/external-tab" },
    ],
    defaultIndex: 0,
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};
