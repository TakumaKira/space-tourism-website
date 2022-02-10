import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import config from '../config.json'
import { descriptionStyle } from '../styles/sharedStyles'

export const TEXT_PRE = 'SO, YOU WANT TO TRAVEL TO'
export const TEXT_TITLE = 'SPACE'
export const TEXT_DESCRIPTION = 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'
export const TEXT_LINK_TO_DESTINATION = 'EXPLORE'

const {
  responsiveBreakPointWidth: {
    desktopToTablet,
    tabletToMobile,
  },
} = config;

const TextBox = styled.div`
  @media (max-width: ${tabletToMobile - 1}px) {
    position: relative;
    width: 327px;
    height: 276px;
    margin: 24px auto 0;
    text-align: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    position: relative;
    width: 450px;
    height: 334px;
    margin: 106px auto 0;
    text-align: center;
  }
  @media (min-width: ${desktopToTablet}px) {
    position: absolute;
    width: 450px;
    height: 382px;
    left: 165px;
    top: 387px;
  }
`
const H2 = styled.h2`
  position: absolute;
  @media (max-width: ${tabletToMobile - 1}px) {
    height: 19px;
    left: 16.82%;
    right: 16.82%;
    top: calc(50% - 19px/2 - 128.5px);

    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    height: 24px;
    left: 20%;
    right: 19.78%;
    top: calc(50% - 24px/2 - 155px);

    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    letter-spacing: 3.375px;
  }
  @media (min-width: ${desktopToTablet}px) {
    height: 34px;
    left: 0.11%;
    right: 15.67%;
    top: calc(50% - 34px/2 - 174px);

    font-size: 28px;
    line-height: 34px;
    /* identical to box height */

    letter-spacing: 4.725px;
  }
`
const H1 = styled.h1`
  position: absolute;
  @media (max-width: ${tabletToMobile - 1}px) {
    height: 100px;
    left: 0%;
    right: 0%;
    top: calc(50% - 100px/2 - 53px);

    font-size: 80px;
    line-height: 100px;
    /* identical to box height, or 125% */
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    height: 150px;
    left: 0%;
    right: 1.11%;
    top: calc(50% - 150px/2 - 44px);

    font-size: 150px;
    line-height: 150px;
    /* identical to box height, or 100% */
  }
  @media (min-width: ${desktopToTablet}px) {
    height: 172px;
    left: 0%;
    right: 1.11%;
    top: calc(50% - 172px/2 - 47px);

    font-size: 150px;
    line-height: 172px;
    /* identical to box height */
  }
`
const P = styled.p`
  ${descriptionStyle}
  position: absolute;
  @media (max-width: ${tabletToMobile - 1}px) {
    height: 125px;
    left: 0%;
    right: 0%;
    top: calc(50% - 125px/2 + 75.5px);
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    height: 112px;
    left: 0.67%;
    right: 0.67%;
    top: calc(50% - 112px/2 + 111px);
  }
  @media (min-width: ${desktopToTablet}px) {
    height: 128px;
    left: 0.11%;
    right: 1.22%;
    top: calc(50% - 128px/2 + 127px);
  }
`

const CircleContainer = styled.div`
  @media (max-width: ${tabletToMobile - 1}px) {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 81px auto 0;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    position: relative;
    width: 242px;
    height: 242px;
    margin: 156px auto 0;
  }
  @media (min-width: ${desktopToTablet}px) {
    position: absolute;
    width: 274px;
    height: 274px;
    right: 165px;
    top: 495px;
  }
`
const Circle = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 50%;
`
const CircleTransparent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #FFFFFF;
  opacity: 0.1;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s;
  &:hover {
    transform: scale(calc(450 / 274));
  }
`
const CircleLabel = styled.span`
  position: absolute;
  pointer-events: none;
  @media (max-width: ${tabletToMobile - 1}px) {
    height: 23px;
    left: 19.67%;
    right: 18.33%;
    top: calc(50% - 23px/2 + 4.5px);

    font-size: 20px;
    line-height: 23px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 1.25px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    height: 37px;
    left: 19.01%;
    right: 19.83%;
    top: calc(50% - 37px/2 + 0.5px);

    font-size: 32px;
    line-height: 37px;
    /* identical to box height */

    letter-spacing: 2px;
  }
  @media (min-width: ${desktopToTablet}px) {
    height: 37px;
    left: 22.63%;
    right: 23.36%;
    top: calc(50% - 37px/2 + 0.5px);

    font-size: 32px;
    line-height: 37px;
    /* identical to box height */

    letter-spacing: 2px;
  }
`;

export const MAIN_LINK = 'main-link'

const Home: NextPage = () => {
  return (
    <>
      <TextBox>
        <H2 className="font-secondary color-light-blue">{TEXT_PRE}</H2>
        <H1>{TEXT_TITLE}</H1>
        <P className="font-body color-light-blue">{TEXT_DESCRIPTION}</P>
      </TextBox>
      <CircleContainer>
        <Circle />
        <Link href="/destination">
          <CircleTransparent data-testid={MAIN_LINK} />
        </Link>
        <CircleLabel className="color-black">
          {TEXT_LINK_TO_DESTINATION}
        </CircleLabel>
      </CircleContainer>
    </>
  )
}

export default Home
