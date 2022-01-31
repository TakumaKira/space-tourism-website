import { ComponentMeta, ComponentStory } from '@storybook/react'
import Layout from '../../../components/Layout'
import { data } from '../../../pages/api/data'
import { CrewData } from '../../../pages/api/crewData'
import Crew from '../../../pages/crew/[name]'

export default {
  title: 'Pages/Crew',
  component: Crew,
  parameters: {
    nextRouter: {
      pathname: '/crew/[name]'
    },
  }
} as ComponentMeta<typeof Crew>;

const Template: ComponentStory<typeof Crew> = (args) => <Layout><Crew {...args} /></Layout>;

export const DouglasHurley = Template.bind({});
DouglasHurley.args = {
  crew: data.crew.DouglasHurley as CrewData,
};
export const MarkShuttleworth = Template.bind({});
MarkShuttleworth.args = {
  crew: data.crew.MarkShuttleworth as CrewData,
};
export const VictorGlover = Template.bind({});
VictorGlover.args = {
  crew: data.crew.VictorGlover as CrewData,
};
export const AnoushehAnsari = Template.bind({});
AnoushehAnsari.args = {
  crew: data.crew.AnoushehAnsari as CrewData,
};
