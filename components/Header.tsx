import type { NextPage } from 'next';
import styled from 'styled-components';
import config from '../config.json';

const {
  responsiveBreakPointWidth: {
    desktopToTablet,
    tabletToMobile,
  },
} = config;

const Container = styled.div`
  @media (max-width: ${tabletToMobile - 1}px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    font-size: 20px;
    letter-spacing: 3.375px;
  }
  @media (min-width: ${desktopToTablet}px) {
    font-size: 28px;
    letter-spacing: 4.725px;
  }
`
const HeaderNum = styled.span`
  font-weight: bold;
  opacity: 0.25;
`
const HeaderText = styled.span`
  font-weight: normal;
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-left: 18px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-left: 19px;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-left: 28px;
  }
`

interface Props {
  num: string,
  text: string,
  className?: string,
}
const Header: NextPage<Props> = ({num, text, className}) => {
  return (
    <Container className={`${className} font-secondary`}>
      <HeaderNum>{num}</HeaderNum>
      <HeaderText>{text}</HeaderText>
    </Container>
  )
}
export default Header

export const PositionedHeader = styled(Header)<{num: string, text: string}>`
  @media (max-width: ${tabletToMobile - 1}px) {
    text-align: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    position: absolute;
    top: 136px;
    left: 38.5px;
  }
  @media (min-width: ${desktopToTablet}px) {
    position: absolute;
    top: 212px;
    left: 166.5px;
  }
`
