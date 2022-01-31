import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import config from '../config.json';

const {
  responsiveBreakPointWidth: {
    desktopToTablet,
    tabletToMobile,
  },
} = config;

const NavBar = styled.nav`
  width: 100%;
  @media (max-width: ${tabletToMobile}px) {
    height: 88px;
  }
  @media (min-width: ${tabletToMobile}px) {
    height: 96px;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 40px;
    height: 96px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  @media (max-width: ${tabletToMobile}px) {
    margin-left: 24px;
    height: 40px;
    width: 40px;
  }
  @media (min-width: ${tabletToMobile}px) {
    margin-left: 39px;
    height: 48px;
    width: 48px;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-left: 55px;
    height: 48px;
    width: 48px;
  }
`;

const Line = styled.div`
  @media (min-width: ${desktopToTablet}px) {
    margin-left: 34px;
    transform: translateX(30px);
    flex-grow: 1;
    height: 1px;
    z-index: 1;
    background-color: #FFFFFF;
    opacity: 0.25;
  }
`;

const HiddenCheckbox = styled.input.attrs(props => ({
  type: 'checkbox',
  id: 'hamburger'
}))`
  display: none;
`;

const Hamburger = styled.label.attrs(props => ({
  htmlFor: 'hamburger',
}))`
  @media (max-width: ${tabletToMobile}px) {
    position: absolute;
    display: flex;
    top: 33px;
    right: 24px;
    height: 21px;
    width: 24px;
    cursor: pointer;
  }
  @media (min-width: ${tabletToMobile}px) {
    display: none;
  }
  @media (min-width: ${desktopToTablet}px) {
    display: none;
  }
`;

const Close = styled.label.attrs(props => ({
  htmlFor: 'hamburger',
}))`
  @media (max-width: ${tabletToMobile}px) {
    position: relative;
    display: flex;
    top: 33.95px;
    left: 208.45px;
    height: 19.09px;
    width: 19.09px;
    cursor: pointer;
  }
  @media (min-width: ${tabletToMobile}px) {
    display: none;
  }
  @media (min-width: ${desktopToTablet}px) {
    display: none;
  }
`;

const BlurBox = styled.div<{isOpen: boolean}>`
  height: 100%;
  @media (max-width: ${tabletToMobile}px) {
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    width: ${props => props.isOpen ? 254 : 0}px;
    animation-name: ${props => props.isOpen ? 'open' : 'close'};
    animation-duration: .5s;
    @keyframes open {
      from {width: 0px}
      to {width: 254px}
    }
    @keyframes close {
      from {width: 254px}
      to {width: 0px}
    }
  }
  @media (min-width: ${tabletToMobile}px) {
    width: 450px;
  }
  @media (min-width: ${desktopToTablet}px) {
    width: 830px;
  }
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  backface-visibility: hidden;
  transform: translateZ(0);
  perspective: 1000;
`;

const NavItems = styled.ol`
  display: flex;
  @media (max-width: ${tabletToMobile}px) {
    flex-direction: column;
    margin-top: 102px;
    font-size: 16px;
    letter-spacing: 2.7px;
    line-height: 19.2px;
  }
  @media (min-width: ${tabletToMobile}px) {
    height: 100%;
    margin-left: 29.5px;
    font-size: 14px;
    letter-spacing: 2.36px;
  }
  @media (min-width: ${desktopToTablet}px) {
    height: 100%;
    margin-left: 99px;
    font-size: 16px;
    letter-spacing: 2.7px;
  }
`;

const ItemContainer = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  /* Selected indicator */
  &::after {
    content: '';
    background-color: #FFFFFF;
    position: absolute;
  }
  &.selected::after {
    animation-name: select;
    animation-duration: .5s;
  }
  @media (max-width: ${tabletToMobile}px) {
    height: 51px;
    padding-top: 10px;
    padding-bottom: 10px;
    &::after {
      left: 250px;
      width: 4px;
      top: 50%;
      transform: translateY(-50%);
      height: 0;
    }
    &.selected::after {
      height: calc(100% - 20px);
    }
    @keyframes select {
      from {height: 0}
      to {height: calc(100% - 20px)}
    }
  }
  @media (min-width: ${tabletToMobile}px) {
    padding-left: 18.5px;
    padding-right: 18.5px;
    &::after {
      bottom: 0;
      height: 3px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
    }
    &.selected::after {
      width: calc(100% - 37px);
    }
    @keyframes select {
      from {width: 0}
      to {width: calc(100% - 37px)}
    }
  }
  @media (min-width: ${desktopToTablet}px) {
    padding-left: 24px;
    padding-right: 24px;
    &::after {
      bottom: 0;
      height: 3px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
    }
    &.selected::after {
      width: calc(100% - 48px);
    }
    @keyframes select {
      from {width: 0}
      to {width: calc(100% - 48px)}
    }
  }
`;

const Texts = styled.div`
  @media (max-width: ${tabletToMobile}px) {
    margin-left: 32px;
  }
  @media (min-width: ${tabletToMobile}px) {
    height: 100%;
    display: flex;
    align-items: center;
  }
  @media (min-width: ${desktopToTablet}px) {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const Number = styled.span<{spaceBetween: number}>`
  font-weight: bold;
  margin-right: ${props => props.spaceBetween}px;
  @media (max-width: ${tabletToMobile}px) {
    display: inline;
  }
  @media (min-width: ${tabletToMobile}px) {
    display: none;
  }
  @media (min-width: ${desktopToTablet}px) {
    display: inline;
  }
`;

interface ItemProps {
  number: string,
  name: string,
  href: string,
  spaceBetween: number,
}
const NavItem: NextPage<ItemProps> = (props: ItemProps) => {
  const router = useRouter()
  const path = router.pathname.split('/')[1]

  const {
    number,
    name,
    href,
    spaceBetween,
  } = props

  return (
    <ItemContainer className={`/${path}` === href ? 'selected' : ''}>
      <Link href={href}>
        <Texts>
          <Number spaceBetween={spaceBetween}>{number}</Number>
          <span>{name}</span>
        </Texts>
      </Link>
    </ItemContainer>
  )
}

interface Props {
  className?: string,
  style?: React.CSSProperties,
}
const Navigation: NextPage<Props> = (props: Props) => {
  const {
    className,
    style,
  } = props

  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter()
  const path = router.pathname.split('/')[1]

  React.useEffect(() => {
    setTimeout(() => setIsOpen(false), 1000)
  }, [path])

  return (
    <NavBar className={className} style={style}>
      <Logo>
        <Image
          src="/shared/logo.svg"
          alt="Logo"
          layout="fill"
        />
      </Logo>
      <Line />
      <HiddenCheckbox
        checked={isOpen}
        onChange={e => setIsOpen(e.target.checked)}
      />
      <Hamburger>
        <Image
          src="/shared/icon-hamburger.svg"
          alt="Logo"
          layout="fill"
        />
      </Hamburger>
      <BlurBox isOpen={isOpen}>
        <Close>
          <Image
            src="/shared/icon-close.svg"
            alt="Logo"
            layout="fill"
          />
        </Close>
        <NavItems className="font-secondary">
          <NavItem
            number="00"
            name="HOME"
            href="/"
            spaceBetween={11}
          />
          <NavItem
            number="01"
            name="DESTINATION"
            href="/destination"
            spaceBetween={14}
          />
          <NavItem
            number="02"
            name="CREW"
            href="/crew"
            spaceBetween={12}
          />
          <NavItem
            number="03"
            name="TECHNOLOGY"
            href="/technology"
            spaceBetween={12}
          />
        </NavItems>
      </BlurBox>
    </NavBar>
  );
}

export default Navigation