import type { NextPage } from 'next'
import { DestinationData } from '../api/destinationData'
import { data } from '../api/data'

interface Props {
  destination: DestinationData,
}
const Destination: NextPage<Props> = ({ destination }) => {
  console.log(destination)
  return (
    <span>Destination - {destination.name}</span>
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
