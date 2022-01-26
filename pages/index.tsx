import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import config from '../config.json';

const {
  responsiveBreakPointWidth: {
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
  display: flex;
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
  const [selected, setSelected] = React.useState(0);

  return (
    <div>
      <Head>
        <title>{config.title}</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Main>
        <Navigation
          selected={selected}
          handleSelected={setSelected}
        />
      </Main>
    </div>
  )
}

export default Home
