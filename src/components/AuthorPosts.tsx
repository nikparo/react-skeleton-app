import { Post } from '../api/data-interfaces';
import { List, ListItem } from './BaseUI';

interface Props {
  posts: Post[];
}

const AuthorPosts = ({ posts }: Props) => {
  return (
    <List>
      {posts.map((post) => (
        <ListItem key={post.id}>
          <div>
            <time dateTime={post.created_time}>{new Date(post.created_time).toLocaleString()}</time>
          </div>
          <p>{post.message}</p>
        </ListItem>
      ))}
      {!posts.length && <ListItem>No posts match the current filter</ListItem>}
    </List>
  );
};

export default AuthorPosts;
