import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import config from '../config.json';

const {
  responsiveSwitchWidth: {
    desktopToTablet,
    tabletToMobile,
  },
  resourcePath: {
    HOME_BACKGROUND_DESKTOP: bgDesktop,
    HOME_BACKGROUND_TABLET: bgTablet,
    HOME_BACKGROUND_MOBILE: bgMobile,
  },
} = config;

export const Main = styled.main`
  min-height: 100vh;
  @media (max-width: ${tabletToMobile}px) {
    background-image: url(${bgMobile});
  }
  @media (min-width: ${tabletToMobile}px) {
    background-image: url(${bgTablet});
  }
  @media (min-width: ${desktopToTablet}px) {
    background-image: url(${bgDesktop});
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{config.title}</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Main>
        Font test
      </Main>
    </div>
  )
}

export default Home
