import { type Author } from '@/store/models';

const getBackendURL = (path: string | URL) =>
  new URL(path, process.env.NEXT_PUBLIC_BACKEND_BASE_URL).toString();

export const fetch = (
  input: string | URL,
  init?: RequestInit,
): Promise<Response> => global.fetch(getBackendURL(input), init);

export const getAuthor = (authorId: number): Promise<Author> =>
  fetch(`/api/authors/${authorId}`).then<Author>((response) => response.json());
