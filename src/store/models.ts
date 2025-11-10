type DateSting = `${number}-${number}-${number}`;
type DateTimeString = `${DateSting}T${number}:${number}:${number}Z`;

export type Post = {
  id: number;
  title: string;
  content: string;
  authorId: number;
  date: DateSting;
  likeCount?: number;
};

export type Author = {
  id: number;
  name: string;
};

export type Comment = {
  id: number;
  postId: number;
  authorId: number;
  content: string;
  date: DateTimeString;
};
