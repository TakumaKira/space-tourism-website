import { Destination } from '../api/destinationData'

const Destination = ({ destination }: { destination: Destination }) => {
  console.log(destination)
  return (<span>Destination</span>);
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get destinations
  const res = await fetch(`${process.env.HOST}/api/destination`)
  const destinations = await res.json() as Destination[]

  // Get the paths we want to pre-render based on destinations
  const paths = destinations.map(destination => ({
    params: { id: destination.name.toLowerCase() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: { id: string } }) {
  // params contains the destination `id`.
  // If the route is like /destination/moon, then params.id is moon
  const res = await fetch(`${process.env.HOST}/api/destination/${params.id}`)
  const destination = await res.json() as Destination

  // Pass destination data to the page via props
  return { props: { destination } }
}

export default Destination
