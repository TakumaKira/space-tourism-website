import { render, screen } from '@testing-library/react'
import Navigation from '../../components/Navigation'

describe('Navigation', () => {
  // TODO: Write meaningful tests for NevBar after clarifying how this component works with router.
  it('have a nav element', () => {
    render(<Navigation />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })
})
