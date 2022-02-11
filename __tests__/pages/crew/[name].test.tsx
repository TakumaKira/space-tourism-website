import { fireEvent, render, screen } from '@testing-library/react';
import * as Image from 'next/image';
import * as nextRouter from 'next/router';
import { CrewData } from '../../../pages/api/crewData';
import Crew, { CREW_HEADER_NUM, CREW_HEADER_TEXT } from '../../../pages/crew/[name]';

let mockImage: jest.SpyInstance<JSX.Element, [Image.ImageProps]>
mockImage = jest.spyOn(Image, 'default')
// eslint-disable-next-line @next/next/no-img-element
mockImage.mockImplementation(({src, alt}) => <img src={src as string} alt={alt} />)

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

const name = 'crew'
const png = 'crew.png'
const webp = 'crew.webp'
const role = 'role'
const bio = 'bio'
const crew: CrewData = {
  name,
  images: {
    png,
    webp
  },
  role,
  bio
}
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(crew),
  }),
) as jest.Mock;

describe('Crew', () => {
  test('renders main image and texts', async() => {
    render(<Crew />)
    const headerNumElem = screen.getByText(CREW_HEADER_NUM)
    expect(headerNumElem).toBeInTheDocument()
    const headerTextElem = screen.getByText(CREW_HEADER_TEXT)
    expect(headerTextElem).toBeInTheDocument()
    const roleElem = await screen.findByText(role) // Needs to wait for dom change caused by fetched technology data
    expect(roleElem).toBeInTheDocument()
    const nameElem = screen.getByText(name)
    expect(nameElem).toBeInTheDocument()
    const bioElem = screen.getByText(bio)
    expect(bioElem).toBeInTheDocument()
    const image = screen.getByRole('img') as HTMLImageElement
    expect(image.src).toContain(webp)
  })

  test('renders links to other crews', async() => {
    render(<Crew />)
    await screen.findByText(role) // Needs to wait for dom change caused by fetched technology data

    // DouglasHurleyLink link
    const DouglasHurleyLink = screen.getByTestId('DouglasHurley')
    expect(mockPush).toBeCalledTimes(0)
    fireEvent.click(DouglasHurleyLink)
    expect(mockPush).toBeCalledTimes(1)
    expect(mockPush).toHaveBeenLastCalledWith('/crew/DouglasHurley', expect.anything(), expect.anything())

    // MarkShuttleworthLink link
    const MarkShuttleworthLink = screen.getByTestId('MarkShuttleworth')
    expect(mockPush).toBeCalledTimes(1)
    fireEvent.click(MarkShuttleworthLink)
    expect(mockPush).toBeCalledTimes(2)
    expect(mockPush).toHaveBeenLastCalledWith('/crew/MarkShuttleworth', expect.anything(), expect.anything())

    // VictorGlover link
    const VictorGloverLink = screen.getByTestId('VictorGlover')
    expect(mockPush).toBeCalledTimes(2)
    fireEvent.click(VictorGloverLink)
    expect(mockPush).toBeCalledTimes(3)
    expect(mockPush).toHaveBeenLastCalledWith('/crew/VictorGlover', expect.anything(), expect.anything())

    // AnoushehAnsari link
    const AnoushehAnsariLink = screen.getByTestId('AnoushehAnsari')
    expect(mockPush).toBeCalledTimes(3)
    fireEvent.click(AnoushehAnsariLink)
    expect(mockPush).toBeCalledTimes(4)
    expect(mockPush).toHaveBeenLastCalledWith('/crew/AnoushehAnsari', expect.anything(), expect.anything())
  })
})