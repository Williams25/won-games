import { Meta, Story } from "@storybook/react/types-6-0";
import { Highlight, HighlightProps } from "./index";

export default {
  title: "Highlight",
  component: Highlight,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    title: "Heading 1",
    subTitle: "Heading 2",
    buttonLabel: "Buy now",
    buttonLink: "/",
    backgroundImage: "/img/red-dead-img.jpg"
  }
} as Meta;

export const Basic: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Highlight {...args} />
  </div>
);
export const WithFloatimage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Highlight {...args} floatImage="/img/red-dead-float.png" />
  </div>
);
