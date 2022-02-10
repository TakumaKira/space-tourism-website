import { fireEvent, render, screen } from "@testing-library/react"
import * as nextRouter from 'next/router'
import Home, { MAIN_LINK, TEXT_DESCRIPTION, TEXT_PRE, TEXT_TITLE } from "../../pages"

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

describe('Home', () => {
  test('renders main texts', () => {
    render(<Home />)
    const pre = screen.getByText(TEXT_PRE)
    expect(pre).toBeInTheDocument()
    const title = screen.getByText(TEXT_TITLE)
    expect(title).toBeInTheDocument()
    const description = screen.getByText(TEXT_DESCRIPTION)
    expect(description).toBeInTheDocument()
  })

  test('renders link to destination', () => {
    render(<Home />)
    const link = screen.getByTestId(MAIN_LINK)
    expect(mockPush).toBeCalledTimes(0)
    fireEvent.click(link)
    expect(mockPush).toBeCalledTimes(1)
    expect(mockPush).toBeCalledWith('/destination', expect.anything(), expect.anything())
  })
})
