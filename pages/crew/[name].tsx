import type { NextPage } from 'next';
import styled from 'styled-components';
import Header from '../../components/Header';
import config from '../../config.json';
import { CrewData } from '../api/crewData';
import { data } from '../api/data';

const {
  responsiveBreakPointWidth: {
    desktopToTablet,
    tabletToMobile,
  },
} = config;

const PositionedHeader = styled(Header)`
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

export const CREW_HEADER_NUM = '02'
export const CREW_HEADER_TEXT = 'MEET YOUR CREW'

interface Props {
  crew: CrewData,
}
const Crew: NextPage<Props> = ({ crew }) => {
  return (
    <>
      <PositionedHeader num={CREW_HEADER_NUM} text={CREW_HEADER_TEXT} />
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
