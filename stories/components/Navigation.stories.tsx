import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Navigation from '../../components/Navigation';
import config from '../../config.json';

const {
  resourcePath: {
    HOME_BACKGROUND_DESKTOP: bgDesktop,
    HOME_BACKGROUND_TABLET: bgTablet,
    HOME_BACKGROUND_MOBILE: bgMobile,
  },
} = config;

export default {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    backgrounds: {
      default: 'Desktop',
      values: [
        {
          name: 'Desktop',
          value: `url(${bgDesktop})`,
        },
        {
          name: 'Tablet',
          value: `url(${bgTablet})`,
        },
        {
          name: 'Mobile',
          value: `url(${bgMobile})`,
        },
      ],
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => {
  const [selected, setSelected] = React.useState(0);
  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <Navigation {...args} selected={selected} handleSelected={setSelected} />
    </div>
  );
};

export const Default = Template.bind({});

export const Desktop = Template.bind({});
Desktop.parameters = {
  backgrounds: {
    default: 'Desktop',
    values: [
      {
        name: 'Desktop',
        value: `url(${bgDesktop})`,
      },
    ],
  },
  viewport: {
    defaultViewport: 'desktop',
    viewports: {
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    },
  },
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  backgrounds: {
    default: 'Tablet',
    values: [
      {
        name: 'Tablet',
        value: `url(${bgTablet})`,
      },
    ],
  },
  viewport: {
    defaultViewport: 'tablet',
    viewports: {
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
    },
  },
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  backgrounds: {
    default: 'Mobile',
    values: [
      {
        name: 'Mobile',
        value: `url(${bgMobile})`,
      },
    ],
  },
  viewport: {
    defaultViewport: 'mobile',
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
    },
  },
};
