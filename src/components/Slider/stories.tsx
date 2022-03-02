import { Meta, Story } from "@storybook/react/types-6-0";
import { Slider } from "./index";

export default {
  title: "Slider",
  component: Slider,
} as Meta;

export const Basic: Story = (args) => <Slider {...args} />;
