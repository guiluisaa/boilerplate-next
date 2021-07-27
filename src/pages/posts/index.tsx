import { GetStaticProps, NextPage } from 'next';

import IPost from '@/models/IPost.model';
import PostsView from '@/views/posts/Posts.view';
import { getPosts } from '@/__mocks__/posts.mock';

type PostsPageProps = {
  posts: IPost[];
};

const PostsPage: NextPage<PostsPageProps> = ({ posts }) => (
  <PostsView posts={posts} />
);

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

export default PostsPage;
