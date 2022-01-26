import { crew, Crews } from './crewData'
import { Destinations, destination } from './destinationData'
import { Technologies, technology } from './technologyData'

export type Data = {
  [key: string]: Destinations | Crews | Technologies,
}
export const data: Data = {
  destination,
  crew,
  technology,
}
