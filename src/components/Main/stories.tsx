import { Meta, Story } from "@storybook/react/types-6-0";
import { Main, MainProps } from "./index";

export default {
  title: "Main",
  component: Main,
  args: {
    title: "React avançado",
    description: "TypeScript, React, NextJS"
  }
} as Meta;

export const Basic: Story = (args: MainProps) => <Main {...args} />;
