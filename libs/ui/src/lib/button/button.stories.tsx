import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
      color: {
          control: {type: 'color'},
        },
      bgcolor: {
          control: {type: 'color'},
        },
      cornerRadius: {
          control: {type: 'number', min: 1, max: 30, step: 1},
        },
      padding: {
          control: {type: 'number', min: 1, max: 30, step: 1},
        }
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: "Button",
    color: "#fe0000",
    bgcolor: "#ffffff",
    linkto: "https://www.google.com",
    cornerRadius: 10,
    padding: 5,
  };
