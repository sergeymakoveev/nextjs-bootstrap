type DateSting = `${number}-${number}-${number}`;

export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: DateSting;
};

export type Author = {
  id: number;
  name: string;
};
