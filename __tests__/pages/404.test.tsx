import { render, screen } from "@testing-library/react"
import Custom404 from "../../pages/404"

describe('404', () => {
  test('renders message', () => {
    render(<Custom404 />)
    const message1 = screen.getByText('404 - Page Not Found')
    expect(message1).toBeInTheDocument()

    render(<Custom404 path="Test" />)
    const message2 = screen.getByText('404 - Test Not Found')
    expect(message2).toBeInTheDocument()
  })
})