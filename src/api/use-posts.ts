import useSWR from 'swr';
import { Post } from './data-interfaces';
import { notEmpty } from './helpers';

const pageCount = 9;

interface SingleResponse {
  data?: {
    page: number;
    posts: Post[];
  };
  meta: {
    request_id: string;
  };
  error?: {
    message: string;
  };
}

interface Response {
  posts?: Post[];
  errors?: {
    message: string;
  }[];
}

interface Result {
  page?: number;
  posts?: Post[];
  error?: {
    message: string;
  };
}

// We don't have different ways of querying the API, such as for only authors and post count.
// As such we may as well ask for the full post history.
// A slightly more advanced fetching strategy would be to fetch page by page and render as we go.
// It would mean showing something quicker, but things like author post count would not be
// completely correct until everything has loaded.
const senderFetcher = (sl_token: string): Promise<Response> => {
  // Note: Page count starts from 1
  return Promise.all(
    new Array(pageCount).fill(0).map((_, index) => {
      const params = new URLSearchParams({ sl_token, page: String(index + 1) }).toString();
      const url = `https://api.supermetrics.com/assignment/posts?${params}`;

      return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
    }),
  ).then((responses: SingleResponse[]) => ({
    posts: responses.flatMap((r) => r.data?.posts).filter(notEmpty),
    errors: responses.map((r) => r.error).filter(notEmpty),
  }));
};

export function usePosts(slToken?: string): Result {
  const result = useSWR<Response, Error>(slToken || null, senderFetcher, {
    dedupingInterval: 1000 * 60 * 55, // Revalidate in 55min
  });

  // Ideally we would validate data here or in the loginFetcher
  const { posts } = result?.data || {};
  // Get the first error we can display
  const error = result.error || result?.data?.errors?.find((e) => e);

  return { posts, error };
}
