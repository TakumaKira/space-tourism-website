import { ComponentMeta, ComponentStory } from '@storybook/react';
import Layout from '../../components/Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args}><span>Child component</span></Layout>;

export const Home = Template.bind({});
export const Destination = Template.bind({});
Destination.parameters = {
  nextRouter: {
    pathname: '/destination/[name]'
  },
}
export const Crew = Template.bind({});
Crew.parameters = {
  nextRouter: {
    pathname: '/crew/[name]'
  },
}
export const Technology = Template.bind({});
Technology.parameters = {
  nextRouter: {
    pathname: '/technology/[name]'
  },
}
