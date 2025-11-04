import { getComments, getPost, getPosts } from '@/api/http';
import { PostComponent, CommentsComponent } from '@/ui-server';

export const generateStaticParams = () =>
  getPosts().then((posts) => posts.map(({ id }) => ({ id: `${id}` })));

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);
  const comments = await getComments({ postId: +id });

  return (
    <section>
      <PostComponent {...post} />
      <CommentsComponent items={comments} />
    </section>
  );
}
