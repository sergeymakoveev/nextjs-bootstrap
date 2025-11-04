import { type Post, type Author, type Comment } from '@/store/models';

const getBackendURL = (path: string | URL, searchParams?: object): URL => {
  const url = new URL(path, process.env.NEXT_PUBLIC_BACKEND_BASE_URL);
  if (searchParams) {
    const searchParamsPrepared = Object.fromEntries(
      Object.entries(searchParams).map(([key, value]) => [key, `${value}`]),
    );
    url.search = new URLSearchParams(searchParamsPrepared).toString();
  }
  return url;
};

const fetch = (
  input: string | URL,
  initExt?: RequestInit & { searchParams?: object },
): Promise<Response> => {
  const { searchParams, ...init } = initExt || {};
  return global.fetch(getBackendURL(input, searchParams), init);
};

const getItems =
  <T extends object>(input: string | URL) =>
  (searchParams?: Partial<T>, init?: RequestInit): Promise<T[]> =>
    fetch(input, { ...init, searchParams }).then<T[]>((response) =>
      response.json(),
    );

const getItem =
  <T>(input: string | URL) =>
  (id: number | string, init?: RequestInit): Promise<T> =>
    fetch(`${input}/${id}`, init).then<T>((response) => response.json());

export const getAuthors = getItems<Author>('/api/authors');
export const getAuthor = getItem<Author>('/api/authors');

export const getPosts = getItems<Post>('/api/posts');
export const getPost = getItem<Post>('/api/posts');

export const getComments = getItems<Comment>('/api/comments');
export const getComment = getItem<Comment>('/api/comments');
