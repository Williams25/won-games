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

export const Basic: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: 300,
      height: 300,
      position: "relative",
      background: "#c3c3c3"
    }}
  >
    <Ribbon {...args} />
  </div>
);
Basic.args = {
  children: "Buy now",
  color: "primary"
};
