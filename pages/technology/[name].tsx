import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { PositionedHeader } from '../../components/Header';
import config from '../../config.json';
import { descriptionStyle } from '../../styles/sharedStyles';
import { data } from '../api/data';
import { TechnologyData } from '../api/technologyData';

const {
  responsiveBreakPointWidth: {
    desktopToTablet,
    tabletToMobile,
  },
} = config;

const Contents = styled.div`
  display: flex;
  @media (max-width: ${tabletToMobile - 1}px) {
    flex-direction: column-reverse;
    margin-top: 32px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    flex-direction: column-reverse;
    margin-top: 124px;
  }
  @media (min-width: ${desktopToTablet}px) {
    justify-content: space-between;
  }
`

const TabAndText = styled.div`
  display: flex;
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 34px;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 56px;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 247px;
    margin-left: calc(165px - (1440px - 100%)/2);
  }
`

const TabBox = styled.ol`
  counter-reset: item;
  @media (max-width: ${tabletToMobile - 1}px) {
    display: flex;
    & > *:not(:first-child) {
      margin-left: 16px;
    }
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    display: flex;
    & > *:not(:first-child) {
      margin-left: 16px;
    }
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-right: 80px;
    & > *:not(:first-child) {
      margin-top: 32px;
    }
  }
`
interface TabItemProps {
  technologyName: string,
}
const TabItem: NextPage<TabItemProps> = ({technologyName}) => {
  const router = useRouter()
  const { name } = router.query
  return (
    <li>
      <Link href={`/technology/${technologyName}`} passHref>
        <Tab selected={name === technologyName} />
      </Link>
    </li>
  )
}
const Tab = styled.a<{selected: boolean}>`
  border-radius: 50%;
  border: ${({selected}) => {
    return selected ? 'none' : '1px solid rgba(255, 255, 255, 0.25)'
  }};
  background-color: ${({selected}) => {
    return selected ? '#FFFFFF' : 'transparent'
  }};
  color: ${({selected}) => {
    return selected ? '#0B0D17' : '#FFFFFF'
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    counter-increment: item;
    content: counter(item);
    font-weight: normal;
  }
  @media (max-width: ${tabletToMobile - 1}px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
  @media (min-width: ${desktopToTablet}px) {
    width: 80px;
    height: 80px;
    font-size: 32px;
  }
`

const TextBox = styled.div`
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 26px;
    text-align: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 44px;
    text-align: center;
  }
`
const Header = styled.h2`
  @media (max-width: ${tabletToMobile - 1}px) {
    font-size: 14px;
    letter-spacing: 2.3625px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
  @media (min-width: ${desktopToTablet}px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
`
const Name = styled.h1`
  text-transform: uppercase;
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 9px;
    font-size: 24px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 16px;
    font-size: 40px;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 11px;
    font-size: 56px;
  }
`
const Description = styled.p`
  ${descriptionStyle}
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 16px;
    width: 327px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 16px;
    width: 458px;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 17px;
    width: 444px;
  }
`

const TechImage = styled.div`
  position: relative;
  @media (max-width: ${tabletToMobile - 1}px) {
    width: 100%;
    padding-top: 41%;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    width: 100%;
    padding-top: 41%;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 136px;
    width: 515px;
    height: 527px;
  }
`

export const TECHNOLOGY_HEADER_NUM = '03'
export const TECHNOLOGY_HEADER_TEXT = 'SPACE LAUNCH 101'

interface Props {
  technology: TechnologyData,
}
const Technology: NextPage<Props> = ({ technology }) => {
  const [isDesktop, setIsDesktop] = React.useState(false)
  React.useEffect(() => {
    const resizeHandler = () => {
      const { innerWidth: currentWindowWidth } = window
      const isDesktop = currentWindowWidth >= desktopToTablet
      setIsDesktop(isDesktop)
    }
    resizeHandler()
    window.addEventListener("resize", resizeHandler)
    return () => window.removeEventListener("resize", resizeHandler)
  }, [])

  return (
    <>
      <PositionedHeader num={TECHNOLOGY_HEADER_NUM} text={TECHNOLOGY_HEADER_TEXT} />
      <Contents>
        <TabAndText>
          <TabBox>
            <TabItem technologyName="launchVehicle" />
            <TabItem technologyName="spaceport" />
            <TabItem technologyName="spaceCapsule" />
          </TabBox>
          <TextBox>
            <Header className="font-secondary color-light-blue">THE TERMINOLOGY…</Header>
            <Name>{technology.name}</Name>
            <Description className="font-body color-light-blue">{technology.description}</Description>
          </TextBox>
        </TabAndText>
        <TechImage>
          <Image
            src={isDesktop ? technology.images.portrait : technology.images.landscape}
            alt={technology.name}
            layout="fill"
            objectFit="contain"
          />
        </TechImage>
      </Contents>
    </>
  )
}

export async function getStaticPaths() {
  const technologies = Object.values(data.technology) as TechnologyData[]
  const paths = technologies.map(technology => ({
    params: {
      name: technology.name
        .split(' ')
        .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
    },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const technology = data.technology[params.name]
  return { props: { technology } }
}

export default Technology
