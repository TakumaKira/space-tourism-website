import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import config from '../config.json'

const pre = 'SO, YOU WANT TO TRAVEL TO'
const title = 'SPACE'
const description = 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'

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
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    position: relative;
    width: 450px;
    height: 334px;
    margin: 106px auto 0;
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
  margin-block-start: 0;
  margin-block-end: 0;
  white-space: nowrap;
  position: absolute;
  font-family: Barlow Condensed;
  font-style: normal;
  font-weight: normal;
  color: #D0D6F9;
  @media (max-width: ${tabletToMobile - 1}px) {
    height: 19px;
    left: 16.82%;
    right: 16.82%;
    top: calc(50% - 19px/2 - 128.5px);

    font-size: 16px;
    line-height: 19px;
    text-align: center;
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

    text-align: center;
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
  margin-block-start: 0;
  margin-block-end: 0;
  position: absolute;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  color: #FFFFFF;
  @media (max-width: ${tabletToMobile - 1}px) {
    height: 100px;
    left: 0%;
    right: 0%;
    top: calc(50% - 100px/2 - 53px);

    font-size: 80px;
    line-height: 100px;
    /* identical to box height, or 125% */

    text-align: center;

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
  margin-block-start: 0;
  margin-block-end: 0;
  position: absolute;
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  color: #D0D6F9;
  @media (max-width: ${tabletToMobile - 1}px) {
    height: 125px;
    left: 0%;
    right: 0%;
    top: calc(50% - 125px/2 + 75.5px);

    font-size: 15px;
    line-height: 25px;
    /* or 167% */

    text-align: center;

  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    height: 112px;
    left: 0.67%;
    right: 0.67%;
    top: calc(50% - 112px/2 + 111px);

    font-size: 16px;
    line-height: 28px;
    /* or 175% */

    text-align: center;
  }
  @media (min-width: ${desktopToTablet}px) {
    height: 128px;
    left: 0.11%;
    right: 1.22%;
    top: calc(50% - 128px/2 + 127px);

    font-size: 18px;
    line-height: 32px;
    /* or 178% */
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
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  color: #0B0D17;
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

const Home: NextPage = () => {
  return (
    <>
      <TextBox>
        <H2>{pre}</H2>
        <H1>{title}</H1>
        <P>{description}</P>
      </TextBox>
      <CircleContainer>
        <Circle />
        <Link href="/destination">
          <CircleTransparent />
        </Link>
        <CircleLabel>
          EXPLORE
        </CircleLabel>
      </CircleContainer>
    </>
  )
}

export default Home
