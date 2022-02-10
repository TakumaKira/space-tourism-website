import { fireEvent, render, screen } from '@testing-library/react';
import * as Image from 'next/image';
import * as nextRouter from 'next/router';
import { TechnologyData } from '../../../pages/api/technologyData';
import Crew, { CREW_HEADER_NUM, CREW_HEADER_TEXT } from '../../../pages/crew/[name]';
import Technology, { TECHNOLOGY_HEADER_NUM, TECHNOLOGY_HEADER_TEXT, TERMINOLOGY } from '../../../pages/technology/[name]';

let mockImage: jest.SpyInstance<JSX.Element, [Image.ImageProps]>
mockImage = jest.spyOn(Image, 'default')
// eslint-disable-next-line @next/next/no-img-element
mockImage.mockImplementation(({src, alt}) => <img src={src as string} alt={alt} />)

let mockUseRouter: jest.SpyInstance<nextRouter.NextRouter, []>
mockUseRouter = jest.spyOn(nextRouter, 'useRouter')
let mockPush = jest.fn()
mockUseRouter.mockReturnValue({
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
  push: mockPush,
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

describe('Technology', () => {
  test('renders main image and texts', () => {
    render(<Technology technology={technology} />)
    const headerNumElem = screen.getByText(TECHNOLOGY_HEADER_NUM)
    expect(headerNumElem).toBeInTheDocument()
    const headerTextElem = screen.getByText(TECHNOLOGY_HEADER_TEXT)
    expect(headerTextElem).toBeInTheDocument()
    const terminologyElem = screen.getByText(TERMINOLOGY)
    expect(terminologyElem).toBeInTheDocument()
    const nameElem = screen.getByText(name)
    expect(nameElem).toBeInTheDocument()
    const descriptionElem = screen.getByText(description)
    expect(descriptionElem).toBeInTheDocument()
    const image = screen.getByRole('img') as HTMLImageElement
    expect(image.src).toContain(landscape)
  })

  test('renders links to other technologies', () => {
    render(<Technology technology={technology} />)

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