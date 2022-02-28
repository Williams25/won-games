import { Meta, Story } from "@storybook/react/types-6-0";
import { Button } from "./index";
import { AddShoppingCart } from "@styled-icons/material-rounded/AddShoppingCart";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string"
    },
    icon: {
      type: "symbol"
    }
  }
} as Meta;

export const Basic: Story = (args) => <Button {...args} />;

Basic.args = {
  children: "Buy now"
};

export const BasicIcon: Story = (args) => <Button {...args} />;
BasicIcon.args = {
  size: "small",
  children: "Buy now",
  icon: <AddShoppingCart />
};

export const asLink: Story = (args) => <Button {...args} />;
asLink.args = {
  size: "large",
  children: "Buy now",
  icon: <AddShoppingCart />,
  as: "a",
  href: "/"
};
