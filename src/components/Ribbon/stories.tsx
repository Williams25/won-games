import { Meta, Story } from "@storybook/react/types-6-0";
import { Ribbon, RibbonProps } from "./index";

export default {
  title: "Ribbon",
  component: Ribbon,
  argTypes: {
    children: {
      type: "string"
    }
  }
} as Meta;

export const Basic: Story<RibbonProps> = (args) => <Ribbon {...args} />;
Basic.args = {
  children: "Buy now",
  color: "primary"
};
