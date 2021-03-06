import { Meta, Story } from "@storybook/react/types-6-0";
import { Menu } from "./index";

export default {
  title: "Menu",
  component: Menu
} as Meta;

export const Basic: Story = (args) => <Menu {...args} />;

Basic.parameters = {
  layout: "fullscreen",
  backgrounds: {
    default: "won-dark"
  }
};
