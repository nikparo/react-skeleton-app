import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Author } from '../api/data-interfaces';
import { ListItem } from './BaseUI';

interface Props {
  author: Author;
}

const AuthorLink = styled(Link)({
  display: 'flex',
});

const AuthorName = styled.div({
  padding: '8px',
  flex: '1 1 auto',
});

const AuthorCell = styled.div({
  padding: '8px',
});

export default function AuthorRow({ author }: Props) {
  return (
    <ListItem>
      <AuthorLink to={`/authors/${author.id}`}>
        <AuthorName>{author.name}</AuthorName>
        <AuthorCell>{author.postCount}</AuthorCell>
      </AuthorLink>
    </ListItem>
  );
}
