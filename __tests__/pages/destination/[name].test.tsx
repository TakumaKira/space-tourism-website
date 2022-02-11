import { fireEvent, render, screen } from '@testing-library/react';
import * as Image from 'next/image';
import * as nextRouter from 'next/router';
import { DestinationData } from '../../../pages/api/destinationData';
import Destination, { DESTINATION_HEADER_NUM, DESTINATION_HEADER_TEXT, DISTANCE_LABEL, TRAVEL_LABEL } from '../../../pages/destination/[name]';

let mockUseRouter: jest.SpyInstance<nextRouter.NextRouter, []>
mockUseRouter = jest.spyOn(nextRouter, 'useRouter')
const mockPush = jest.fn()
const mockPrefetch = jest.fn()
mockPrefetch.mockResolvedValue({})
mockUseRouter.mockReturnValue({
  route: '/',
  pathname: '/',
  query: { name: 'name' },
  asPath: '/',
  push: mockPush,
  prefetch: mockPrefetch,
} as unknown as nextRouter.NextRouter)

const name = 'planet'
const png = 'planet.png'
const webp = 'planet.webp'
const description = 'description'
const distance = 'x km'
const travel = 'x years'
const destination: DestinationData = {
  name,
  images: {
    png,
    webp
  },
  description,
  distance,
  travel
}
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(destination),
  }),
) as jest.Mock;

let mockImage: jest.SpyInstance<JSX.Element, [Image.ImageProps]>
mockImage = jest.spyOn(Image, 'default')
// eslint-disable-next-line @next/next/no-img-element
mockImage.mockImplementation(({src, alt}) => <img src={src as string} alt={alt} />)

describe('Destination', () => {
  test('renders main image and texts', async() => {
    render(<Destination />)
    const headerNumElem = screen.getByText(DESTINATION_HEADER_NUM)
    expect(headerNumElem).toBeInTheDocument()
    const headerTextElem = screen.getByText(DESTINATION_HEADER_TEXT)
    expect(headerTextElem).toBeInTheDocument()
    const image = await screen.findByRole('img') as HTMLImageElement // Needs to wait for dom change caused by fetched technology data
    expect(image.src).toContain(webp)
    const nameElem = screen.getByText(name)
    expect(nameElem).toBeInTheDocument()
    const descriptionElem = screen.getByText(description)
    expect(descriptionElem).toBeInTheDocument()
    const distanceLabelElem = screen.getByText(DISTANCE_LABEL)
    expect(distanceLabelElem).toBeInTheDocument()
    const distanceElem = screen.getByText(distance)
    expect(distanceElem).toBeInTheDocument()
    const travelLabelElem = screen.getByText(TRAVEL_LABEL)
    expect(travelLabelElem).toBeInTheDocument()
    const travelElem = screen.getByText(travel)
    expect(travelElem).toBeInTheDocument()
  })

  test('renders links to other destinations', async() => {
    render(<Destination />)
    await screen.findByRole('img') // Needs to wait for dom change caused by fetched technology data

    // moon link
    const moonLink = screen.getByText('moon')
    expect(mockPush).toBeCalledTimes(0)
    fireEvent.click(moonLink)
    expect(mockPush).toBeCalledTimes(1)
    expect(mockPush).toHaveBeenLastCalledWith('/destination/moon', expect.anything(), expect.anything())

    // mars link
    const marsLink = screen.getByText('mars')
    expect(mockPush).toBeCalledTimes(1)
    fireEvent.click(marsLink)
    expect(mockPush).toBeCalledTimes(2)
    expect(mockPush).toHaveBeenLastCalledWith('/destination/mars', expect.anything(), expect.anything())

    // europa link
    const europaLink = screen.getByText('europa')
    expect(mockPush).toBeCalledTimes(2)
    fireEvent.click(europaLink)
    expect(mockPush).toBeCalledTimes(3)
    expect(mockPush).toHaveBeenLastCalledWith('/destination/europa', expect.anything(), expect.anything())

    // titan link
    const titanLink = screen.getByText('titan')
    expect(mockPush).toBeCalledTimes(3)
    fireEvent.click(titanLink)
    expect(mockPush).toBeCalledTimes(4)
    expect(mockPush).toHaveBeenLastCalledWith('/destination/titan', expect.anything(), expect.anything())
  })
})