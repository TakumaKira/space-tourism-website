import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { PositionedHeader } from '../../components/Header';
import config from '../../config.json';
import { CrewData } from '../api/crewData';
import { data } from '../api/data';

const {
  responsiveBreakPointWidth: {
    desktopToTablet,
    tabletToMobile,
  },
} = config;

const Contents = styled.div`
  display: flex;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    height: 100%;
  }
`

const TextAndTab = styled.div`
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 264px;
    margin-left: calc(165px - (1440px - 100%)/2);
  }
`

const TextBox = styled.div`
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
  }
`
const Role = styled.h2`
  font-weight: normal;
  text-transform: uppercase;
  margin-block-start: 0;
  margin-block-end: 0;
  opacity: 0.5;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    font-size: 32px;
  }
`
const Name = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  white-space: nowrap;
  margin-block-start: 0;
  margin-block-end: 0;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 15px;
    font-size: 56px;
    line-height: 64px;
  }
`
const Bio = styled.p`
  font-family: Barlow;
  font-weight: normal;
  margin-block-start: 0;
  margin-block-end: 0;
  color: #D0D6F9;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 15px;
    width: 444px;
    font-size: 18px;
    line-height: 32px;
    /* or 178% */
  }
`

const TabBox = styled.ul`
  display: flex;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 120px;
    & > *:not(:first-child) {
      margin-left: 24px;
    }
  }
`
const Tab = styled.li<{selected: boolean}>`
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
  }
`
const A = styled.a<{selected: boolean}>`
  position: relative;
  display: block;
  width: 15px;
  height: 15px;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #FFFFFF;
    opacity: ${({selected}) => selected ? '1' : '0.17'};
  }
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
  }
`

const CrewImage = styled.div<{crewName: string}>`
  position: relative;
  flex-shrink: 0;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    align-self: flex-end;
    margin-left: ${({crewName}) => {
      switch (crewName) {
        case 'DouglasHurley':
          return '81.43px'
        case 'MarkShuttleworth':
          return '20.5px'
        case 'VictorGlover':
          return '134px'
        case 'AnoushehAnsari':
          return '37.5px'
        default:
          throw new Error(`Width of crewName "${crewName}" is not defined`)
      }
    }};
    margin-right: ${({crewName}) => {
      switch (crewName) {
        case 'DouglasHurley':
          return 'calc(137px - (1440px - 100%)/2)'
        case 'MarkShuttleworth':
          return 'calc(186.56px - (1440px - 100%)/2)'
        case 'VictorGlover':
          return 'calc(142.61px - (1440px - 100%)/2)'
        case 'AnoushehAnsari':
          return 'calc(89.43px - (1440px - 100%)/2)'
        default:
          throw new Error(`Width of crewName "${crewName}" is not defined`)
      }
    }};
    width: ${({crewName}) => {
      switch (crewName) {
        case 'DouglasHurley':
          return '568.07px'
        case 'MarkShuttleworth':
          return '453.44px'
        case 'VictorGlover':
          return '554.39px'
        case 'AnoushehAnsari':
          return '615.57px'
        default:
          throw new Error(`Width of crewName "${crewName}" is not defined`)
      }
    }};
    height: ${({crewName}) => {
      switch (crewName) {
        case 'DouglasHurley':
          return '712px'
        case 'MarkShuttleworth':
          return '654px'
        case 'VictorGlover':
          return '681px'
        case 'AnoushehAnsari':
          return '607px'
        default:
          throw new Error(`Height of crewName "${crewName}" is not defined`)
      }
    }};
  }
`

interface TabItemProps {
  crewName: string,
}
const TabItem: NextPage<TabItemProps> = ({crewName}) => {
  const router = useRouter()
  const { name } = router.query

  return (
    <Tab selected={name === crewName}>
      <Link href={`/crew/${crewName}`} passHref>
        <A selected={name === crewName}/>
      </Link>
    </Tab>
  )
}

export const CREW_HEADER_NUM = '02'
export const CREW_HEADER_TEXT = 'MEET YOUR CREW'

interface Props {
  crew: CrewData,
}
const Crew: NextPage<Props> = ({ crew }) => {
  const router = useRouter()
  const { name } = router.query

  return (
    <>
      <PositionedHeader num={CREW_HEADER_NUM} text={CREW_HEADER_TEXT} />
      <Contents>
        <TextAndTab>
          <TextBox>
            <Role>{crew.role}</Role>
            <Name>{crew.name}</Name>
            <Bio>{crew.bio}</Bio>
          </TextBox>
          <TabBox>
            <TabItem crewName="DouglasHurley" />
            <TabItem crewName="MarkShuttleworth" />
            <TabItem crewName="VictorGlover" />
            <TabItem crewName="AnoushehAnsari" />
          </TabBox>
        </TextAndTab>
        <CrewImage crewName={name as string}>
          <Image
            src={crew.images.webp}
            alt={crew.name}
            layout="fill"
          />
        </CrewImage>
      </Contents>
    </>
  )
}

export async function getStaticPaths() {
  const crews = Object.values(data.crew) as CrewData[]
  const paths = crews.map(crew => ({
    params: { name: crew.name.replace(' ', '') },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const crew = data.crew[params.name]
  return { props: { crew } }
}

export default Crew
