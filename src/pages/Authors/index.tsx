import { useAuthorLogic } from './author-logic';
import { AuthorUI } from './AuthorUI';

// Splitting up logic and UI has several benefits. It e.g. allows more granular testing
// and storybook stories, and it's a nice separation of concerns.
const Authors = (): JSX.Element => {
  const uiProps = useAuthorLogic();

  return <AuthorUI {...uiProps} />;
};

export default Authors;
