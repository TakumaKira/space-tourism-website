import { ComponentMeta, ComponentStory } from '@storybook/react'
import Layout from '../../../components/Layout'
import { data } from '../../../pages/api/data'
import { DestinationData } from '../../../pages/api/destinationData'
import Destination from '../../../pages/destination/[name]'

export default {
  title: 'Pages/Destination',
  component: Destination,
  parameters: {
    nextRouter: {
      pathname: '/destination/[name]'
    },
  }
} as ComponentMeta<typeof Destination>;

const Template: ComponentStory<typeof Destination> = (args) => <Layout><Destination {...args} /></Layout>;

export const Moon = Template.bind({});
Moon.args = {
  destination: data.destination.moon as DestinationData,
};
export const Mars = Template.bind({});
Mars.args = {
  destination: data.destination.mars as DestinationData,
};
export const Europa = Template.bind({});
Europa.args = {
  destination: data.destination.europa as DestinationData,
};
export const Titan = Template.bind({});
Titan.args = {
  destination: data.destination.titan as DestinationData,
};
