import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import escapeRegExp from 'lodash/escapeRegExp';

import { useAuthContext } from '../../api/use-login';
import { usePosts } from '../../api/use-posts';
import { useAuthors } from './use-authors';
import { AuthorUIProps } from './AuthorUI';

function fuzzyFilter<T>(arr: T[], filter: string, toString: (array: T) => string) {
  if (!filter) return arr;

  const regex = RegExp(
    filter
      .split(/\s+/) // split on any whitespace
      .filter(Boolean)
      .map((s) => `(?=.*${escapeRegExp(s)})`) // Match if a word is contained in the text
      .join(''),
    'i', // case insensitive
  );

  return arr.filter((a) => regex.test(toString(a)));
}

export const useAuthorLogic = (): AuthorUIProps => {
  const { slToken } = useAuthContext();

  const postResult = usePosts(slToken);
  const { posts, error: postError } = postResult;

  const [authorFilter, setAuthorFilter] = useState('');
  const authors = useAuthors(posts);

  const filteredAuthors = useMemo(
    () => fuzzyFilter(authors, authorFilter, (a) => a.name),
    [authors, authorFilter],
  );

  const { authorId } = useParams();
  const [sortOrderAsc, setSortOrderAsc] = useState(false);
  const [postFilter, setPostFilter] = useState('');

  const currentPosts = useMemo(() => {
    // The API appears to order posts by date, but we don't have a guarantee for that so we sort always.
    // This could be a tiny bit faster by converting created_time to dates at an earlier stage
    const author = authors.find((a) => a.id === authorId);
    return (
      author?.posts
        .slice()
        .sort((a, b) => new Date(b.created_time).getTime() - new Date(a.created_time).getTime()) ||
      []
    );
  }, [authorId, authors]);

  const authorPosts = useMemo(() => {
    // Order posts - descending date by default
    const orderedPosts = sortOrderAsc ? [...currentPosts].reverse() : currentPosts;
    // Fuzzy filter - match a post if its message contains the typed words in any order
    return fuzzyFilter(orderedPosts, postFilter, (a) => a.message);
  }, [currentPosts, postFilter, sortOrderAsc]);

  const validAuthor = Boolean(authorId && currentPosts.length);
  const postErrorMessage = typeof postError?.message === 'string' ? postError.message : undefined;

  // Log any error in case we can't display it properly
  useEffect(() => {
    if (postError) console.error(postError);
  }, [postError]);

  return {
    authorFilter,
    authorPosts,
    filteredAuthors,
    postErrorMessage,
    postFilter,
    setAuthorFilter,
    setPostFilter,
    setSortOrderAsc,
    validAuthor,
  };
};
