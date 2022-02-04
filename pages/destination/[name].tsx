import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import config from '../../config.json';
import { data } from '../api/data';
import { DestinationData } from '../api/destinationData';

const {
  responsiveBreakPointWidth: {
    desktopToTablet,
    tabletToMobile,
  },
} = config;

const Header = styled.div`
  font-family: Barlow Condensed;
  color: #FFFFFF;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    position: absolute;
    top: 212px;
    left: 166.5px;
    font-size: 28px;
    letter-spacing: 4.725px;
  }
`
const HeaderNum = styled.span`
  font-weight: bold;
  opacity: 0.25;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
  }
`
const HeaderText = styled.span`
  font-weight: normal;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-left: 28px;
  }
`

const Contents = styled.div`
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    display: flex;
  }
`

const Planet = styled.div`
  position: relative;
  flex-shrink: 0;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    width: 445px;
    height: 445px;
    margin-left: calc(230px - (1440px - 100%)/2);
    margin-top: 207px;
  }
`

const TextBox = styled.div`
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    width: 445px;
    margin-left: 157px;
    margin-top: 174px;
  }
`

const TabBox = styled.ul`
  display: flex;
  font-family: Barlow Condensed;
  color: #D0D6F9;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
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
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
  }
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

const H1 = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  margin-block-start: 0;
  margin-block-end: 0;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    font-size: 100px;
    margin-top: 37px;
  }
`

const Description = styled.p`
  font-family: Barlow;
  margin-block-start: 0;
  margin-block-end: 0;
  color: #D0D6F9;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    font-size: 18px;
    line-height: 32px;
    /* or 178% */
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
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
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
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
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
  color: #D0D6F9;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    font-size: 14px;
    /* identical to box height */

    letter-spacing: 2.3625px;
  }
`
const StatInfo = styled.span`
  text-transform: uppercase;
  @media (max-width: ${tabletToMobile - 1}px) {
  }
  @media (min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px) {
  }
  @media (min-width: ${desktopToTablet}px) {
    margin-top: 12px;
    font-size: 28px;
  }
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

interface Props {
  destination: DestinationData,
}
const Destination: NextPage<Props> = ({ destination }) => {
  return (
    <>
      <Header>
        <HeaderNum>01</HeaderNum>
        <HeaderText>PICK YOUR DESTINATION</HeaderText>
      </Header>
      <Contents>
        <Planet>
          <Image src={destination.images.png} alt={destination.name} layout="fill" />
        </Planet>
        <TextBox>
          <TabBox>
            <TabItem destinationName="moon" />
            <TabItem destinationName="mars" />
            <TabItem destinationName="europa" />
            <TabItem destinationName="titan" />
          </TabBox>
          <H1>{destination.name}</H1>
          <Description>{destination.description}</Description>
          <StatBox>
            <Stat>
              <StatLabel>AVG. DISTANCE</StatLabel>
              <StatInfo>{destination.distance}</StatInfo>
            </Stat>
            <Stat>
              <StatLabel>EST. TRAVEL TIME</StatLabel>
              <StatInfo>{destination.travel}</StatInfo>
            </Stat>
          </StatBox>
        </TextBox>
      </Contents>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get destinations
  const destinations = Object.values(data.destination) as DestinationData[]

  // Get the paths we want to pre-render based on destinations
  const paths = destinations.map(destination => ({
    params: { name: destination.name.toLowerCase() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: { name: string } }) {
  // params contains the destination `name`.
  // If the route is like /destination/moon, then params.name is moon
  const destination = data.destination[params.name]

  // Pass destination data to the page via props
  return { props: { destination } }
}

export default Destination
