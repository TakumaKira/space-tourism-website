import type { NextApiRequest, NextApiResponse } from 'next'
import { CrewData } from './crewData'
import { data } from './data'
import { DestinationData } from './destinationData'
import { TechnologyData } from './technologyData'

type HttpError = {
  error: string,
}

export const error404 = { error: 'Not Found' }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DestinationData | DestinationData[] | CrewData | CrewData[] | TechnologyData | TechnologyData[] | HttpError | HttpError[]>
) {
  const { slug } = req.query
  if (data[slug[0]]) {
    if (!slug[1]) {
      res.status(200).json(Object.values(data[slug[0]]))
    } else if (data[slug[0]][slug[1]]) {
      res.status(200).json(data[slug[0]][slug[1]])
    } else {
      res.status(404).json(error404)
    }
  } else {
    res.status(404).json(error404)
  }
}