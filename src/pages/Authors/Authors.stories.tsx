import { ComponentStory, ComponentMeta } from '@storybook/react';

import Authors from './Authors';

export default {
  title: 'Authors',
  component: Authors,
  argTypes: {},
} as ComponentMeta<typeof Authors>;

const Template: ComponentStory<typeof Authors> = () => <Authors />;

export const Main = Template.bind({});
Main.args = {};
