import { Container } from "components/Container";
import { Footer } from "components/Footer";
import { Heading } from "components/Heading";
import { Menu } from "components/Menu";
import { BannerProps } from "components/Banner";
import { GameCardProps } from "components/GameCard";
import { HighlightProps, Highlight } from "components/Highlight";
import { GameCardSlider } from "components/GameCardSlider";
import { BannerSlider } from "components/BannerSlider";
import * as S from "./styles";

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighligth: HighlightProps;
  upcommingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighligth: HighlightProps;
};

export const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => {
  return (
    <section>
      <Container>
        <Menu />

        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary">
            News
          </Heading>

          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>

      <S.SectionMostPopular>
        <Container>
          <Heading lineLeft lineColor="secondary">
            Most Popular
          </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
        </Container>
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Container>
          <Heading lineLeft lineColor="secondary">
            Upcomming
          </Heading>
          <GameCardSlider items={upcommingGames} />
          <Highlight {...upcommingHighligth} />
          <GameCardSlider items={upcommingMoreGames} />
        </Container>
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Container>
          <Heading lineLeft lineColor="secondary">
            Free games
          </Heading>
          <Highlight {...freeHighligth} />
          <GameCardSlider items={freeGames} />
        </Container>
      </S.SectionFreeGames>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
};
