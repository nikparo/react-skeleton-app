import { ComponentStory, ComponentMeta } from '@storybook/react';

import Login from './Login';

export default {
  title: 'Login',
  component: Login,
  argTypes: {
    setUserDetails: { action: 'setUserDetails' },
  },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => <Login />;

export const Main = Template.bind({});
Main.args = {};
