import { crew, Crews } from './crewData'
import { Destinations, destinations } from './destinationsData'
import { Technologies, technology } from './technologyData'

export type Data = {
  [key: string]: Destinations | Crews | Technologies,
}

export const data: Data = {
  destinations,
  crew,
  technology,
}
