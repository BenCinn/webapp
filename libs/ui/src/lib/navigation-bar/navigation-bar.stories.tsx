import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationBar } from './navigation-bar';

export default {
  component: NavigationBar,
  title: 'NavigationBar',
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    Name: '',
  };
