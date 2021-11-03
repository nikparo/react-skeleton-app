import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AuthorUI } from './AuthorUI';

export default {
  title: 'Authors/UI',
  component: AuthorUI,
  argTypes: {
    setAuthorFilter: { action: 'setAuthorFilter' },
    setPostFilter: { action: 'setPostFilter' },
    setSortOrderAsc: { action: 'setSortOrderAsc' },
  },
} as ComponentMeta<typeof AuthorUI>;

const Template: ComponentStory<typeof AuthorUI> = (args) => <AuthorUI {...args} />;

export const UI = Template.bind({});
UI.args = {
  authorFilter: 'Sam',
  authorPosts: [],
  filteredAuthors: [],
  postErrorMessage: 'Error fetching posts',
  postFilter: '',
  validAuthor: false,
};
