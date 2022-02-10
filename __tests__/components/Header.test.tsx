import { render, screen } from "@testing-library/react"
import Header from "../../components/Header"

describe('Header', () => {
  test('renders passed num and text', () => {
    const num = '01'
    const text = 'hello world'
    render(<Header num={num} text={text} />)
    const numElem = screen.getByText(num)
    expect(numElem).toBeInTheDocument()
    const textElem = screen.getByText(text)
    expect(textElem).toBeInTheDocument()
  })
})