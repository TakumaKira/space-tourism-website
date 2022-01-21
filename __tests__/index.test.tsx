import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import Home, { Main } from '../pages'

describe('Home', () => {
  it('renders font test', () => {
    render(<Home />)
    const heading = screen.getByText('Font test')
    expect(heading).toBeInTheDocument()
  })

  it('have styles added by styled-components', () => {
    const main = renderer.create(<Main />).toJSON()
    expect(main).toHaveStyleRule('flex', '1')
    expect(main).toHaveStyleRule('display', 'flex')
    expect(main).toHaveStyleRule('flex-direction', 'column')
    expect(main).toHaveStyleRule('justify-content', 'center')
    expect(main).toHaveStyleRule('align-items', 'center')

    expect(main).toHaveStyleRule('color', 'red')
    expect(main).toHaveStyleRule('color', 'green', {
      media: '(max-width: 640px)',
      modifier: ':hover',
    })
  })
})
