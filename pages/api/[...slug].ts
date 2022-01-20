import type { NextApiRequest, NextApiResponse } from 'next'
import { Crew } from './crewData'
import { data } from './data'
import { Destination } from './destinationsData'
import { Technology } from './technologyData'

type HttpError = {
  error: string,
}

export const error404 = { error: 'Not Found' }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Destination | Crew | Technology | HttpError>
) {
  const { slug } = req.query
  if (data[slug[0]] && data[slug[0]][slug[1]]) {
    res.status(200).json(data[slug[0]][slug[1]])
  } else {
    res.status(404).json(error404)
  }
}