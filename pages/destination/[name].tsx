import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { PositionedHeader } from '../../components/Header';
import config from '../../config.json';
import { descriptionStyle } from '../../styles/sharedStyles';
import Custom404 from '../404';
import { DestinationData } from '../api/destinationData';

const {
  responsiveBreakPointWidth: {
    desktopToTablet,
    tabletToMobile,
  },
} = config;

const Contents = styled.div`
  display: flex;
  @media (max-width: ${tabletToMobile - 1}px) {
    width: 327px;
    margin: auto;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 124px;
    flex-direction: column;
    align-items: center;
  }
`

const Planet = styled.div`
  position: relative;
  flex-shrink: 0;
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 32px;
    width: 170px;
    height: 170px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: ${desktopToTablet}px) {
    width: 445px;
    height: 445px;
    margin-left: calc(230px - (1440px - 100%)/2);
    margin-top: 207px;
  }
`

const TabAndTextAndStat = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 26px;
    align-items: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 53px;
    width: 573px;
    align-items: center;
  }
  @media (min-width: ${desktopToTablet}px) {
    width: 445px;
    margin-left: 157px;
    margin-top: 174px;
  }
`

const TabBox = styled.ul`
  display: flex;
  @media (max-width: ${tabletToMobile - 1}px) {
    height: 28px;
    & > *:not(:first-child) {
      margin-left: 27px;
    }
    font-size: 14px;
    letter-spacing: 2.3625px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    height: 34px;
    & > *:not(:first-child) {
      margin-left: 36px;
    }
    font-size: 16px;
    letter-spacing: 2.7px;
  }
  @media (min-width: ${desktopToTablet}px) {
    height: 34px;
    & > *:not(:first-child) {
      margin-left: 36px;
    }
    font-size: 16px;
    letter-spacing: 2.7px;
  }
`
const Tab = styled.li<{selected: boolean}>`
  position: relative;
  color: ${props => props.selected ? '#FFFFFF' : 'inherit'};
  &::after {
    content: '';
    position: absolute;
    height: 3px;
    width: ${props => props.selected ? '100%' : '0px'};
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s;
    background-color: #FFFFFF;
  }
  &:hover::after {
    width: 100%;
  }
`
const A = styled.a`
  display: block;
  height: 100%;
  text-transform: uppercase;
`

const TextBox = styled.div`
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 20px;
    text-align: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 32px;
    text-align: center;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 37px;
  }
`
const H1 = styled.h1`
  text-transform: uppercase;
  @media (max-width: ${tabletToMobile - 1}px) {
    font-size: 56px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    font-size: 80px;
  }
  @media (min-width: ${desktopToTablet}px) {
    font-size: 100px;
  }
`
const Description = styled.p`
  ${descriptionStyle}
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 1px;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 8px;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 14px;
  }
`

const StatBox = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: #383B4B;
  }
  display: flex;
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 32px;
    width: 327px;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 49px;
    width: 573px;
    justify-content: center;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 54px;
    width: 444px;
  }
`
const Stat = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${tabletToMobile - 1}px) {
    margin-top: 32px;
    text-align: center;
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
    margin-top: 28px;
    &:not(:first-child) {
      margin-left: 79px;
    }
    &:nth-child(1) {
      width: 216px;
    }
    &:nth-child(2) {
      width: 223px;
    }
    text-align: center;
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 28px;
    &:not(:first-child) {
      margin-left: 79px;
    }
  }
`
const StatLabel = styled.span`
  font-family: Barlow Condensed;
  font-size: 14px;
  letter-spacing: 2.3625px;
`
const StatInfo = styled.span`
  text-transform: uppercase;
  margin-top: 12px;
  font-size: 28px;
`

interface TabItemProps {
  destinationName: string,
}
const TabItem: NextPage<TabItemProps> = ({destinationName}) => {
  const router = useRouter()
  const { name } = router.query

  return (
    <Tab selected={name === destinationName}>
      <Link href={`/destination/${destinationName}`} passHref>
        <A>{destinationName}</A>
      </Link>
    </Tab>
  )
}

export const DESTINATION_HEADER_NUM = '01'
export const DESTINATION_HEADER_TEXT = 'PICK YOUR DESTINATION'
export const DISTANCE_LABEL = 'AVG. DISTANCE'
export const TRAVEL_LABEL = 'EST. TRAVEL TIME'

const Destination: NextPage = () => {
  const router = useRouter()
  const { name } = router.query

  const [destinationData, setDestinationData] = React.useState<DestinationData>()
  const [notFound, setNotFound] = React.useState(false)
  React.useEffect(() => {
    if (!name) return
    fetch(`/api/destination/${name}`)
      .then(res => {
        if (res.ok) return res
        throw new Error('Something wrong')
      })
      .then<DestinationData>(res => res.json())
      .then(setDestinationData)
      .then(() => setNotFound(false))
      .catch(() => setNotFound(true))
  }, [name])

  const [imageLoading, setImageLoading] = React.useState(false)
  React.useEffect(() => {
    setImageLoading(true)
  }, [destinationData])

  return (
    notFound
      ? <Custom404 path="Destination" />
      : <>
        <PositionedHeader num={DESTINATION_HEADER_NUM} text={DESTINATION_HEADER_TEXT} />
        <Contents>
          <Planet style={{opacity: `${imageLoading ? 0 : 1}`}}>
            {destinationData?.images?.webp &&
              <Image
                src={destinationData.images.webp}
                alt={destinationData?.name}
                layout="fill"
                onLoadingComplete={size => size.naturalHeight && setImageLoading(false)}
              />
            }
          </Planet>
          <TabAndTextAndStat>
            <TabBox className="font-secondary color-light-blue">
              <TabItem destinationName="moon" />
              <TabItem destinationName="mars" />
              <TabItem destinationName="europa" />
              <TabItem destinationName="titan" />
            </TabBox>
            <TextBox>
              <H1>{destinationData?.name}</H1>
              <Description className="font-body color-light-blue">{destinationData?.description}</Description>
            </TextBox>
            <StatBox>
              <Stat>
                <StatLabel className="color-light-blue">{DISTANCE_LABEL}</StatLabel>
                <StatInfo>{destinationData?.distance}</StatInfo>
              </Stat>
              <Stat>
                <StatLabel className="color-light-blue">{TRAVEL_LABEL}</StatLabel>
                <StatInfo>{destinationData?.travel}</StatInfo>
              </Stat>
              </StatBox>
          </TabAndTextAndStat>
        </Contents>
      </>
  )
}

export default Destination
