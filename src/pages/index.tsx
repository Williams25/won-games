import { Home as HomePage, HomeTemplateProps } from "templates/Home";
import { GetServerSideProps } from "next";
import bannersMock from "components/BannerSlider/mock";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

type HomeProps = {
  home: HomeTemplateProps;
};

export const Home = ({ home }: HomeProps) => {
  return <HomePage {...home} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      home: {
        banners: bannersMock,
        newGames: gamesMock,
        mostPopularHighlight: highlightMock,
        mostPopularGames: gamesMock,
        upcommingGames: gamesMock,
        upcommingHighligth: highlightMock,
        upcommingMoreGames: gamesMock,
        freeGames: gamesMock,
        freeHighligth: highlightMock
      }
    }
  };
};
