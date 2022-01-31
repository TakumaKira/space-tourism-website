import { ComponentMeta, ComponentStory } from '@storybook/react';
import Layout from '../../components/Layout';
import Home from '../../pages/index';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Layout><Home {...args} /></Layout>;

export const Default = Template.bind({});
Default.args = {};
