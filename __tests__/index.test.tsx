import { render, screen } from '@testing-library/react'
import Home from '../pages'

describe('Home', () => {
  it('renders font test', () => {
    render(<Home />)
    const heading = screen.getByText('Font test')
    expect(heading).toBeInTheDocument()
  })
})