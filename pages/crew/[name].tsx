import type { NextPage } from 'next'
import { data } from '../api/data'
import { CrewData } from '../api/crewData'

interface Props {
  crew: CrewData,
}
const Crew: NextPage<Props> = ({ crew }) => {
  console.log(crew)
  return (
    <span>Crew - {crew.name}</span>
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
