import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const TailwindTestComponent = () => (
  <div className="p-4 space-y-4">
    <p className="text-2xl font-bold text-blue-600">Tailwind Test</p>
    <input
      className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Focus me"
    />
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
      Button
    </button>
  </div>
);

const meta: Meta<typeof TailwindTestComponent> = {
  title: "TailwindTest",
  component: TailwindTestComponent,
};

export default meta;
type Story = StoryObj<typeof TailwindTestComponent>;

export const Basic: Story = {};
