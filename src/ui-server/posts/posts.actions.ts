'use server';

import { revalidatePath } from 'next/cache';

import { getPost, patchPost } from '@/api/http';

export async function likePostAction(id: number) {
  // Получаем актуальные данные поста из БД
  await getPost(id).then((post) =>
    // Патчим пост в БД
    patchPost(id, { likeCount: (post.likeCount ?? 0) + 1 }),
  );

  // Инвалидируем кэш для страницы `/posts/${id}`
  revalidatePath(`/posts/${id}`);

  // Опционально: можно редиректнуть
  // redirect('/posts');
}
