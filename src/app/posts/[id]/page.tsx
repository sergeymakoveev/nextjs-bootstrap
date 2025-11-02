import { fetch } from '@/api/http';
import { type Comment, type Post } from '@/store/models';
import { PostComponent, CommentsComponent } from '@/ui-server';

export async function generateStaticParams() {
  const response = await fetch('/api/posts');
  const posts: Post[] = await response.json();

  return posts.map(({ id }) => ({ id: `${id}` }));
}
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postResponse = await fetch(`/api/posts/${id}`);
  const post: Post = await postResponse.json();
  const commentsResponse = await fetch(`/api/comments?postId=${id}`);
  const comments: Comment[] = await commentsResponse.json();

  return (
    <section>
      <PostComponent {...post} />
      <CommentsComponent items={comments} />
    </section>
  );
}
