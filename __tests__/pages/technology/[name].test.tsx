import { fireEvent, render, screen } from '@testing-library/react';
import * as Image from 'next/image';
import * as nextRouter from 'next/router';
import { TechnologyData } from '../../../pages/api/technologyData';
import Technology, { TECHNOLOGY_HEADER_NUM, TECHNOLOGY_HEADER_TEXT, TERMINOLOGY } from '../../../pages/technology/[name]';

const mockUseRouter: jest.SpyInstance<nextRouter.NextRouter, []> = jest.spyOn(nextRouter, 'useRouter')
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

const name = 'technology'
const portrait = 'portrait.jpg'
const landscape = 'landscape.jpg'
const description = 'description'
const technology: TechnologyData = {
  name,
  images: {
    portrait,
    landscape
  },
  description
}
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(technology),
  }),
) as jest.Mock;

let mockImage: jest.SpyInstance<JSX.Element, [Image.ImageProps]>
mockImage = jest.spyOn(Image, 'default')
// eslint-disable-next-line @next/next/no-img-element
mockImage.mockImplementation(({src, alt}) => <img src={src as string} alt={alt} />)

describe('Technology', () => {
  test('renders main image and texts', async() => {
    render(<Technology />)
    const headerNumElem = screen.getByText(TECHNOLOGY_HEADER_NUM)
    expect(headerNumElem).toBeInTheDocument()
    const headerTextElem = screen.getByText(TECHNOLOGY_HEADER_TEXT)
    expect(headerTextElem).toBeInTheDocument()
    const terminologyElem = screen.getByText(TERMINOLOGY)
    expect(terminologyElem).toBeInTheDocument()
    const nameElem = await screen.findByText(name) // Needs to wait for dom change caused by fetched technology data
    expect(nameElem).toBeInTheDocument()
    const descriptionElem = screen.getByText(description)
    expect(descriptionElem).toBeInTheDocument()
    const image = screen.getByRole('img') as HTMLImageElement
    expect(image.src).toContain(landscape)
  })

  test('renders links to other technologies', async() => {
    render(<Technology />)
    await screen.findByText(name) // Needs to wait for dom change caused by fetched technology data

    // launchVehicle link
    const launchVehicleLink = screen.getByTestId('launchVehicle')
    expect(mockPush).toBeCalledTimes(0)
    fireEvent.click(launchVehicleLink)
    expect(mockPush).toBeCalledTimes(1)
    expect(mockPush).toHaveBeenLastCalledWith('/technology/launchVehicle', expect.anything(), expect.anything())

    // spaceport link
    const spaceportLink = screen.getByTestId('spaceport')
    expect(mockPush).toBeCalledTimes(1)
    fireEvent.click(spaceportLink)
    expect(mockPush).toBeCalledTimes(2)
    expect(mockPush).toHaveBeenLastCalledWith('/technology/spaceport', expect.anything(), expect.anything())

    // spaceCapsule link
    const spaceCapsuleLink = screen.getByTestId('spaceCapsule')
    expect(mockPush).toBeCalledTimes(2)
    fireEvent.click(spaceCapsuleLink)
    expect(mockPush).toBeCalledTimes(3)
    expect(mockPush).toHaveBeenLastCalledWith('/technology/spaceCapsule', expect.anything(), expect.anything())
  })
})