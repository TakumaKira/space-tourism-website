import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import config from '../config.json'
import Navigation from './Navigation'

const {
  responsiveBreakPointWidth: {
    desktopToTablet,
    tabletToMobile,
  },
} = config

const resourcePath = config.resourcePath as StringKeyObject<string>

export const Background = styled.div<{path: string}>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (max-width: ${tabletToMobile - 1}px) {
    min-height: ${({path}) => {
      switch (path) {
        case '':
          return '667px'
        case 'destination':
          return '850px'
        case 'crew':
        case 'technology':
          return '710px'
      }
      return '667px'
    }};
    background-image: ${({path}) => {
      return `url(${resourcePath[`${path.toUpperCase() || 'HOME'}_BACKGROUND_MOBILE`]})`
    }};
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    min-height: 1024px;
    background-image: ${({path}) => {
      return `url(${resourcePath[`${path.toUpperCase() || 'HOME'}_BACKGROUND_TABLET`]})`
    }};
  }
  @media (min-width: ${desktopToTablet}px) {
    min-height: 900px;
    background-image: ${({path}) => {
      return `url(${resourcePath[`${path.toUpperCase() || 'HOME'}_BACKGROUND_DESKTOP`]})`
    }};
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

interface Props {
  children: JSX.Element,
}
const Layout: NextPage<Props> = ({children}) => {
  const router = useRouter()
  const path = router.pathname.split('/')[1]

  return (
    <Background path={path}>
      <Navigation />
      <main>{children}</main>
    </Background>
  );
}

export default Layout