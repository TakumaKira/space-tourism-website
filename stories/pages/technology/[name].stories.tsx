import { ComponentMeta, ComponentStory } from '@storybook/react'
import Layout from '../../../components/Layout'
import { data } from '../../../pages/api/data'
import { TechnologyData } from '../../../pages/api/technologyData'
import Technology from '../../../pages/technology/[name]'

export default {
  title: 'Pages/Technology',
  component: Technology,
  parameters: {
    nextRouter: {
      pathname: '/technology/[name]'
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '710px',
          },
        },
      },
    },
  }
} as ComponentMeta<typeof Technology>;

const Template: ComponentStory<typeof Technology> = (args) => <Layout><Technology {...args} /></Layout>;

export const LaunchVehicle = Template.bind({});
LaunchVehicle.args = {
  technology: data.technology.launchVehicle as TechnologyData,
}
LaunchVehicle.parameters = {
  nextRouter: {
    pathname: '/technology/[name]',
    query: {
      name: 'launchVehicle',
    }
  },
}
export const Spaceport = Template.bind({});
Spaceport.args = {
  technology: data.technology.spaceport as TechnologyData,
}
Spaceport.parameters = {
  nextRouter: {
    pathname: '/technology/[name]',
    query: {
      name: 'spaceport',
    }
  },
}
export const SpaceCapsule = Template.bind({});
SpaceCapsule.args = {
  technology: data.technology.spaceCapsule as TechnologyData,
}
SpaceCapsule.parameters = {
  nextRouter: {
    pathname: '/technology/[name]',
    query: {
      name: 'spaceCapsule',
    }
  },
}
