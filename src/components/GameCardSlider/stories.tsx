import { Meta, Story } from "@storybook/react/types-6-0";
import { GameCardSlider } from "./index";
import { GameCardProps } from "components/GameCard";
import items from "./mock";

export default {
  title: "GameCardSlider",
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const Basic: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: "130rem", margin: "3rem auto" }}>
    <GameCardSlider items={args} {...args} />
  </div>
);
