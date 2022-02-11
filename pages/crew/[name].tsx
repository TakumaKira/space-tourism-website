import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { PositionedHeader } from '../../components/Header';
import config from '../../config.json';
import { descriptionStyle } from '../../styles/sharedStyles';
import { CrewData } from '../api/crewData';

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
          return '0px'
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
    text-align: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    text-align: center;
  }
`
const Role = styled.h2`
  text-transform: uppercase;
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
  text-transform: uppercase;
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
  ${descriptionStyle}
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 16px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 16px;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 15px;
    width: 444px;
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
        <Tab selected={name === crewName} data-testid={crewName} />
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
          return '0px'
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
          return '0px'
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
          return '0px'
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
          return '0px'
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
          return '0px'
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
          return '0px'
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
          return '0px'
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
          return '0px'
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
          return '0px'
      }
    }};
  }
`

export const CREW_HEADER_NUM = '02'
export const CREW_HEADER_TEXT = 'MEET YOUR CREW'

interface Props {
  crew: CrewData,
}
const Crew: NextPage<Props> = () => {
  const [crewData, setCrewData] = React.useState<CrewData>()
  const router = useRouter()
  const { name } = router.query
  React.useEffect(() => {
    if (!name) return
    fetch(`/api/crew/${name}`)
      .then<CrewData>(res => res.json())
      .then(data => {
        setCrewData(data)
      })
  }, [name])

  const [imageLoading, setImageLoading] = React.useState(false)
  React.useEffect(() => {
    setImageLoading(true)
  }, [crewData])

  const [crewName, setCrewName] = React.useState('')
  React.useEffect(() => {
    setTimeout(() => setCrewName(crewData?.name.replace(' ', '') || ''), 10)
  }, [crewData])

  return (
    <>
      <PositionedHeader num={CREW_HEADER_NUM} text={CREW_HEADER_TEXT} />
      <Contents>
        <TextAndTab crewName={crewName}>
          <TextBox>
            <Role>{crewData?.role}</Role>
            <Name>{crewData?.name}</Name>
            <Bio className="font-body color-light-blue">{crewData?.bio}</Bio>
          </TextBox>
          <TabBox>
            <TabItem crewName="DouglasHurley" />
            <TabItem crewName="MarkShuttleworth" />
            <TabItem crewName="VictorGlover" />
            <TabItem crewName="AnoushehAnsari" />
          </TabBox>
        </TextAndTab>
        <CrewImage
          crewName={crewName}
          style={{opacity: `${imageLoading ? 0 : 1}`}}
        >
          {crewData?.images?.webp &&
            <Image
              src={crewData.images.webp}
              alt={crewData?.name}
              layout="fill"
              objectFit='contain'
              onLoadingComplete={size => size.naturalHeight && setImageLoading(false)}
            />
          }
        </CrewImage>
      </Contents>
    </>
  )
}

export default Crew
