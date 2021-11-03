import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginUI } from './LoginUI';

export default {
  title: 'Login/UI',
  component: LoginUI,
  argTypes: {
    onChange: { action: 'change' },
    onSubmit: { action: 'submit' },
  },
} as ComponentMeta<typeof LoginUI>;

const Template: ComponentStory<typeof LoginUI> = (args) => <LoginUI {...args} />;

export const UI = Template.bind({});
UI.args = {
  name: 'Sam',
  email: 'sam@example.com',
};
