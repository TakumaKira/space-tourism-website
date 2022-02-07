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
} as ComponentMeta<typeof Crew>;

const Template: ComponentStory<typeof Crew> = (args) => <Layout><Crew {...args} /></Layout>;

export const DouglasHurley = Template.bind({});
DouglasHurley.args = {
  crew: data.crew.DouglasHurley as CrewData,
};
DouglasHurley.parameters = {
  nextRouter: {
    pathname: '/crew/[name]',
    query: {
      name: 'DouglasHurley',
    }
  },
}
export const MarkShuttleworth = Template.bind({});
MarkShuttleworth.args = {
  crew: data.crew.MarkShuttleworth as CrewData,
};
MarkShuttleworth.parameters = {
  nextRouter: {
    pathname: '/crew/[name]',
    query: {
      name: 'MarkShuttleworth',
    }
  },
}
export const VictorGlover = Template.bind({});
VictorGlover.args = {
  crew: data.crew.VictorGlover as CrewData,
};
VictorGlover.parameters = {
  nextRouter: {
    pathname: '/crew/[name]',
    query: {
      name: 'VictorGlover',
    }
  },
}
export const AnoushehAnsari = Template.bind({});
AnoushehAnsari.args = {
  crew: data.crew.AnoushehAnsari as CrewData,
}
AnoushehAnsari.parameters = {
  nextRouter: {
    pathname: '/crew/[name]',
    query: {
      name: 'AnoushehAnsari',
    }
  },
}
