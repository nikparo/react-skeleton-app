import { useMemo } from 'react';
import { Author, Post } from '../../api/data-interfaces';

export function useAuthors(posts?: Post[]) {
  return useMemo((): Author[] => {
    const authorCache: Record<string, Author | undefined> = {};
    const authorList: Author[] = [];

    posts?.forEach((post) => {
      const authorId = post.from_id;
      let author = authorCache[authorId];

      if (!author) {
        author = {
          id: authorId,
          name: post.from_name,
          postCount: 0,
          posts: [],
        };
        authorCache[authorId] = author;
        authorList.push(author);
      }

      author.postCount += 1;
      author.posts.push(post);
    });

    return authorList.sort((a, b) => {
      if (a.name === b.name) return 0;
      if (a.name > b.name) return 1;
      return -1;
    });
  }, [posts]);
}
