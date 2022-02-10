import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import * as nextRouter from 'next/router';
import renderer from 'react-test-renderer';
import Layout, { Background } from '../../components/Layout';
import config from '../../config.json';

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

describe('Background', () => {
  const {
    responsiveBreakPointWidth: {
      desktopToTablet,
      tabletToMobile,
    },
    resourcePath: {
      HOME_BACKGROUND_DESKTOP,
      HOME_BACKGROUND_TABLET,
      HOME_BACKGROUND_MOBILE,
      DESTINATION_BACKGROUND_DESKTOP,
      DESTINATION_BACKGROUND_TABLET,
      DESTINATION_BACKGROUND_MOBILE,
      CREW_BACKGROUND_DESKTOP,
      CREW_BACKGROUND_TABLET,
      CREW_BACKGROUND_MOBILE,
      TECHNOLOGY_BACKGROUND_DESKTOP,
      TECHNOLOGY_BACKGROUND_TABLET,
      TECHNOLOGY_BACKGROUND_MOBILE,
    },
  } = config;
  test('has correct background image', () => {
    // for home page
    const homeBg = renderer.create(<Background path='' />).toJSON()
    expect(homeBg).toHaveStyleRule('background-image', `url(${HOME_BACKGROUND_MOBILE})`, {
      media: `(max-width: ${tabletToMobile - 1}px)`,
    })
    expect(homeBg).toHaveStyleRule('background-image', `url(${HOME_BACKGROUND_TABLET})`, {
      media: `(min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px)`,
    })
    expect(homeBg).toHaveStyleRule('background-image', `url(${HOME_BACKGROUND_DESKTOP})`, {
      media: `(min-width: ${desktopToTablet}px)`,
    })
    expect(homeBg).toHaveStyleRule('background-repeat', 'no-repeat')
    expect(homeBg).toHaveStyleRule('background-size', 'cover')
    expect(homeBg).toHaveStyleRule('background-position', 'center')

    // for destination page
    const destinationBg = renderer.create(<Background path="destination" />).toJSON()
    expect(destinationBg).toHaveStyleRule('background-image', `url(${DESTINATION_BACKGROUND_MOBILE})`, {
      media: `(max-width: ${tabletToMobile - 1}px)`,
    })
    expect(destinationBg).toHaveStyleRule('background-image', `url(${DESTINATION_BACKGROUND_TABLET})`, {
      media: `(min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px)`,
    })
    expect(destinationBg).toHaveStyleRule('background-image', `url(${DESTINATION_BACKGROUND_DESKTOP})`, {
      media: `(min-width: ${desktopToTablet}px)`,
    })
    expect(destinationBg).toHaveStyleRule('background-repeat', 'no-repeat')
    expect(destinationBg).toHaveStyleRule('background-size', 'cover')
    expect(destinationBg).toHaveStyleRule('background-position', 'center')

    // for crew page
    const crewBg = renderer.create(<Background path="crew" />).toJSON()
    expect(crewBg).toHaveStyleRule('background-image', `url(${CREW_BACKGROUND_MOBILE})`, {
      media: `(max-width: ${tabletToMobile - 1}px)`,
    })
    expect(crewBg).toHaveStyleRule('background-image', `url(${CREW_BACKGROUND_TABLET})`, {
      media: `(min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px)`,
    })
    expect(crewBg).toHaveStyleRule('background-image', `url(${CREW_BACKGROUND_DESKTOP})`, {
      media: `(min-width: ${desktopToTablet}px)`,
    })
    expect(crewBg).toHaveStyleRule('background-repeat', 'no-repeat')
    expect(crewBg).toHaveStyleRule('background-size', 'cover')
    expect(crewBg).toHaveStyleRule('background-position', 'center')

    // for technology page
    const technologyBg = renderer.create(<Background path="technology" />).toJSON()
    expect(technologyBg).toHaveStyleRule('background-image', `url(${TECHNOLOGY_BACKGROUND_MOBILE})`, {
      media: `(max-width: ${tabletToMobile - 1}px)`,
    })
    expect(technologyBg).toHaveStyleRule('background-image', `url(${TECHNOLOGY_BACKGROUND_TABLET})`, {
      media: `(min-width: ${tabletToMobile}px) and (max-width: ${desktopToTablet - 1}px)`,
    })
    expect(technologyBg).toHaveStyleRule('background-image', `url(${TECHNOLOGY_BACKGROUND_DESKTOP})`, {
      media: `(min-width: ${desktopToTablet}px)`,
    })
    expect(technologyBg).toHaveStyleRule('background-repeat', 'no-repeat')
    expect(technologyBg).toHaveStyleRule('background-size', 'cover')
    expect(technologyBg).toHaveStyleRule('background-position', 'center')
  })

  test('renders background and main', () => {
    const childrenText = 'children'
    const Children = () => <span>{childrenText}</span>
    render(<Layout><Children /></Layout>)
    const background = screen.getByTestId('bg')
    expect(background).toBeInTheDocument()
    const children = screen.getByText(childrenText)
    expect(children).toBeInTheDocument()
  })
})