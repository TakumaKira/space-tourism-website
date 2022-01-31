import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Background } from '../../components/Layout';
import Navigation from '../../components/Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => {
  const router = useRouter()
  const path = router.pathname.split('/')[1]

  return (
    <Background path={path}>
      <Navigation {...args} />
    </Background>
  );
};

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
