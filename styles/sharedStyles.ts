import { css } from 'styled-components'
import config from '../config.json'

const {
  responsiveBreakPointWidth: {
    desktopToTablet,
    tabletToMobile,
  },
} = config;

export const descriptionStyle = css`
  @media (max-width: ${tabletToMobile - 1}px) {
    font-size: 15px;
    line-height: 25px;
    /* or 167% */
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    font-size: 16px;
    line-height: 28px;
    /* or 175% */
  }
  @media (min-width: ${desktopToTablet}px) {
    font-size: 18px;
    line-height: 32px;
    /* or 178% */
  }
`
