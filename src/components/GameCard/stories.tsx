import { Meta, Story } from "@storybook/react/types-6-0";
import { GameCard, GameCardProps } from "./index";

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    title: "Red Dead Redemption",
    developer: "Rockstar Games",
    img: "/img/red-dead-img.jpg",
    price: "R$ 235,00",
    promotionalPrice: "R$ 15,00"
  },
  argTypes: {
    onFav: { action: "clicked" },
    ribbon: { type: "string" }
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
} as Meta;

export const Basic: Story<GameCardProps> = (args) => (
  <div style={{ width: "30rem", margin: "0 auto" }}>
    <GameCard {...args} />
  </div>
);

export const BasicRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: "30rem", margin: "0 auto" }}>
    <GameCard
      {...args}
      ribbon="My Ribbon"
      ribbonColor="secondary"
      ribbonSize="small"
    />
  </div>
);
