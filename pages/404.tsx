import styled from 'styled-components';
import config from '../config.json';

const {
  responsiveBreakPointWidth: {
    desktopToTablet,
    tabletToMobile,
  },
} = config;

const H1 = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: ${tabletToMobile - 1}px) {
    font-size: 20px;
    letter-spacing: 2.7px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    font-size: 32px;
    letter-spacing: 3.375px;
  }
  @media (min-width: ${desktopToTablet}px) {
    font-size: 36px;
    letter-spacing: 4.725px;
  }
`

export default function Custom404({path}: {path?: string}) {
  return <H1 className="font-body color-light-blue">404 - {path || 'Page'} Not Found</H1>
}