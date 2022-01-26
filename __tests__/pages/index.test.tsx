import 'jest-styled-components'
import renderer from 'react-test-renderer'
import config from '../../config.json'
import { Main } from '../../pages'

const {
  responsiveBreakPointWidth: {
    desktopToTablet,
    tabletToMobile,
  },
  resourcePath: {
    HOME_BACKGROUND_DESKTOP: bgDesktop,
    HOME_BACKGROUND_TABLET: bgTablet,
    HOME_BACKGROUND_MOBILE: bgMobile,
  },
} = config;

// TODO: Refine test after clarifying how this component works with other components.
describe('Home', () => {
  it('have styles added by styled-components', () => {
    const main = renderer.create(<Main />).toJSON()
    expect(main).toHaveStyleRule('min-height', '100vh')
    expect(main).toHaveStyleRule('background-image', `url(${bgMobile})`, {
      media: `(max-width: ${tabletToMobile}px)`,
    })
    expect(main).toHaveStyleRule('background-image', `url(${bgTablet})`, {
      media: `(min-width: ${tabletToMobile}px)`,
    })
    expect(main).toHaveStyleRule('background-image', `url(${bgDesktop})`, {
      media: `(min-width: ${desktopToTablet}px)`,
    })
    expect(main).toHaveStyleRule('background-repeat', 'no-repeat')
    expect(main).toHaveStyleRule('background-size', 'cover')
    expect(main).toHaveStyleRule('background-position', 'center')
  })
})
