import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '../../components/Header';
import { CREW_HEADER_NUM, CREW_HEADER_TEXT } from '../../pages/crew/[name]';
import { DESTINATION_HEADER_NUM, DESTINATION_HEADER_TEXT } from '../../pages/destination/[name]';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Home = Template.bind({});
Home.args = {
  num: DESTINATION_HEADER_NUM,
  text: DESTINATION_HEADER_TEXT,
}
export const Destination = Template.bind({});
Destination.args = {
  num: CREW_HEADER_NUM,
  text: CREW_HEADER_TEXT,
}
