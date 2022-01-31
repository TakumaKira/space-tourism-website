import type { NextPage } from 'next'
import { data } from '../api/data'
import { TechnologyData } from '../api/technologyData'

interface Props {
  technology: TechnologyData,
}
const Technology: NextPage<Props> = ({ technology }) => {
  console.log(technology)
  return (
    <span>Technology - {technology.name}</span>
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
