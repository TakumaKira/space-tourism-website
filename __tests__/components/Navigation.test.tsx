import { fireEvent, render, screen } from '@testing-library/react'
import * as nextRouter from 'next/router'
import Navigation from '../../components/Navigation'

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

describe('Navigation', () => {
  test('have a nav element', () => {
    render(<Navigation />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  test('have links', () => {
    render(<Navigation />)

    // to home
    const homeLink = screen.getByText('HOME')
    expect(homeLink).toBeInTheDocument()
    expect(mockPush).toBeCalledTimes(0)
    fireEvent.click(homeLink)
    expect(mockPush).toBeCalledTimes(1)
    expect(mockPush).toHaveBeenLastCalledWith('/', expect.anything(), expect.anything())

    // to destination
    const destinationLink = screen.getByText('DESTINATION')
    expect(destinationLink).toBeInTheDocument()
    expect(mockPush).toBeCalledTimes(1)
    fireEvent.click(destinationLink)
    expect(mockPush).toBeCalledTimes(2)
    expect(mockPush).toHaveBeenLastCalledWith('/destination', expect.anything(), expect.anything())

    // to crew
    const crewLink = screen.getByText('CREW')
    expect(crewLink).toBeInTheDocument()
    expect(mockPush).toBeCalledTimes(2)
    fireEvent.click(crewLink)
    expect(mockPush).toBeCalledTimes(3)
    expect(mockPush).toHaveBeenLastCalledWith('/crew', expect.anything(), expect.anything())

    // to technology
    const technologyLink = screen.getByText('TECHNOLOGY')
    expect(technologyLink).toBeInTheDocument()
    expect(mockPush).toBeCalledTimes(3)
    fireEvent.click(technologyLink)
    expect(mockPush).toBeCalledTimes(4)
    expect(mockPush).toHaveBeenLastCalledWith('/technology', expect.anything(), expect.anything())
  })

  // TODO: Do I need to test side menu open/close?
})
