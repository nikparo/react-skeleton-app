import styled from 'styled-components';

import AuthorRow from '../../components/AuthorRow';
import AuthorPosts from '../../components/AuthorPosts';
import { Box, Button, ErrorCard, FlexRow, Input, List, ListItem } from '../../components/BaseUI';
import { Author, Post } from '../../api/data-interfaces';

const AuthorContainer = styled.nav({
  width: '300px',
  flex: '0 1 auto',
});

const PostContainer = styled.div({
  width: '500px',
  flex: '1 1 auto',
  padding: '0 16px',
});

export interface AuthorUIProps {
  authorFilter: string;
  authorId?: Author['id'];
  authorPosts: Post[];
  filteredAuthors: Author[];
  postErrorMessage?: string;
  postFilter: string;
  setAuthorFilter: (value: string) => void;
  setPostFilter: (value: string) => void;
  setSortOrderAsc: (asc: boolean) => void;
  validAuthor: boolean;
}

export const AuthorUI = (props: AuthorUIProps): JSX.Element => {
  const {
    authorFilter,
    authorPosts,
    filteredAuthors,
    postErrorMessage,
    postFilter,
    setAuthorFilter,
    setPostFilter,
    setSortOrderAsc,
    validAuthor,
  } = props;

  return (
    <FlexRow>
      <AuthorContainer>
        <FlexRow>
          <Input
            type="text"
            placeholder="Fuzzy author filter..."
            value={authorFilter}
            onChange={(event) => {
              setAuthorFilter(event.currentTarget.value);
            }}
            style={{ flex: '1 1 auto' }}
          />
          <Button type="button" onClick={() => setAuthorFilter('')} disabled={!authorFilter}>
            X
          </Button>
        </FlexRow>
        <List>
          {filteredAuthors.map((author) => (
            <AuthorRow key={author.id} author={author} />
          ))}
          {!filteredAuthors.length && <ListItem>No authors found</ListItem>}
        </List>
      </AuthorContainer>
      <PostContainer>
        <FlexRow>
          <Button onClick={() => setSortOrderAsc(false)} title="Order descending">
            ↑
          </Button>
          <Button onClick={() => setSortOrderAsc(true)} title="Order ascending">
            ↓
          </Button>
          <div style={{ flex: '1 1 auto' }} />
          <Input
            type="text"
            placeholder="Fuzzy post filter..."
            value={postFilter}
            onChange={(event) => {
              setPostFilter(event.currentTarget.value);
            }}
          />
          <Button type="button" onClick={() => setPostFilter('')} disabled={!postFilter}>
            X
          </Button>
        </FlexRow>

        {postErrorMessage && <ErrorCard>{postErrorMessage}</ErrorCard>}

        {validAuthor ? (
          <AuthorPosts posts={authorPosts} />
        ) : (
          <Box as="p">Select an author to view their posts</Box>
        )}
      </PostContainer>
    </FlexRow>
  );
};
