import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../lib/main";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Hello World",
  },
};

export const Secondary: Story = {
  args: {
    children: "Hello World",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Hello World",
    disabled: true,
  },
};

export const PrimaryLoading: Story = {
  args: {
    children: "Hello World",
    isLoading: true,
  },
};

export const SecondaryLoading: Story = {
  args: {
    children: "Hello World",
    variant: "secondary",
    isLoading: true,
  },
};

export const DisabledLoading: Story = {
  args: {
    children: "Hello World",
    disabled: true,
    isLoading: true,
  },
};
