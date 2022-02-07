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
    margin-top: 32px;
    width: 327px;
    flex-direction: column-reverse;
    align-items: center;
    align-self: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 124px;
    min-height: 804px;
    flex-grow: 1;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: ${desktopToTablet}px) {
    height: 100%;
    overflow: hidden;
  }
`

const TextAndTab = styled.div<{crewName: string}>`
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 32px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    width: ${({crewName}) => {
      switch (crewName) {
        case 'DouglasHurley':
          return '458px'
        case 'MarkShuttleworth':
          return '520px'
        case 'VictorGlover':
          return '592px'
        case 'AnoushehAnsari':
          return '536px'
        default:
          throw new Error(`Width of crewName "${crewName}" is not defined`)
      }
    }};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 264px;
    margin-left: calc(165px - (1440px - 100%)/2);
  }
`

const TextBox = styled.div`
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const Role = styled.h2`
  font-weight: normal;
  text-transform: uppercase;
  margin-block-start: 0;
  margin-block-end: 0;
  opacity: 0.5;
  @media (max-width: ${tabletToMobile - 1}px) {
    font-size: 16px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    font-size: 24px;
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
    margin-top: 8px;
    font-size: 24px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 8px;
    font-size: 40px;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 15px;
    font-size: 56px;
  }
`
const Bio = styled.p`
  font-family: Barlow;
  font-weight: normal;
  margin-block-start: 0;
  margin-block-end: 0;
  color: #D0D6F9;
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 16px;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */
    text-align: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 16px;
    font-size: 16px;
    line-height: 28px;
    /* or 175% */
    text-align: center;
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
    & > *:not(:first-child) {
      margin-left: 16px;
    }
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 40px;
    & > *:not(:first-child) {
      margin-left: 16px;
    }
  }
  @media (min-width: ${desktopToTablet}px) {
    position: absolute;
    bottom: 94px;
    & > *:not(:first-child) {
      margin-left: 24px;
    }
  }
`
interface TabItemProps {
  crewName: string,
}
const TabItem: NextPage<TabItemProps> = ({crewName}) => {
  const router = useRouter()
  const { name } = router.query
  return (
    <li>
      <Link href={`/crew/${crewName}`} passHref>
        <Tab selected={name === crewName} />
      </Link>
    </li>
  )
}
const Tab = styled.a<{selected: boolean}>`
  position: relative;
  display: block;
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
    width: 10px;
    height: 10px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    width: 15px;
    height: 15px;
  }
  @media (min-width: ${desktopToTablet}px) {
    width: 15px;
    height: 15px;
  }
`

const CrewImage = styled.div<{crewName: string}>`
  position: relative;
  flex-shrink: 0;
  @media (max-width: ${tabletToMobile - 1}px) {
    width: 100%;
    height: 223px;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #383B4B;
    }
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    width: ${({crewName}) => {
      switch (crewName) {
        case 'DouglasHurley':
          return '456.37px'
        case 'MarkShuttleworth':
          return '368.85px'
        case 'VictorGlover':
          return '433.09px'
        case 'AnoushehAnsari':
          return '539.51px'
        default:
          throw new Error(`Width of crewName "${crewName}" is not defined`)
      }
    }};
    height: ${({crewName}) => {
      switch (crewName) {
        case 'DouglasHurley':
          return '572px'
        case 'MarkShuttleworth':
          return '532px'
        case 'VictorGlover':
          return '532px'
        case 'AnoushehAnsari':
          return '532px'
        default:
          throw new Error(`Height of crewName "${crewName}" is not defined`)
      }
    }};
    bottom: ${({crewName}) => {
      switch (crewName) {
        case 'DouglasHurley':
          return '-40px'
        case 'MarkShuttleworth':
          return '0px'
        case 'VictorGlover':
          return '-12px'
        case 'AnoushehAnsari':
          return '0px'
        default:
          throw new Error(`Width of crewName "${crewName}" is not defined`)
      }
    }};
    left: ${({crewName}) => {
      switch (crewName) {
        case 'DouglasHurley':
          return '0px'
        case 'MarkShuttleworth':
          return '0px'
        case 'VictorGlover':
          return '-11.5px'
        case 'AnoushehAnsari':
          return '19.75px'
        default:
          throw new Error(`Width of crewName "${crewName}" is not defined`)
      }
    }};
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
    bottom: ${({crewName}) => {
      switch (crewName) {
        case 'DouglasHurley':
          return '-10px'
        case 'MarkShuttleworth':
          return '0px'
        case 'VictorGlover':
          return '-27px'
        case 'AnoushehAnsari':
          return '-1px'
        default:
          throw new Error(`Width of crewName "${crewName}" is not defined`)
      }
    }};
  }
`

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
        <TextAndTab crewName={name as string}>
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
            objectFit='contain'
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
