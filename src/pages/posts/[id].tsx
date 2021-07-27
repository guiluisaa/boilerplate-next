import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Post from '@/models/IPost.model';
import PostView from '@/views/posts/post/Post.view';
import { getPost, getFisrtsPosts } from '@/__mocks__/posts.mock';
import { ParsedUrlQuery } from 'node:querystring';

type PostPageProps = {
  post: Post;
};

const PostPage: NextPage<PostPageProps> = ({ post }) => (
  <PostView post={post} />
);

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFisrtsPosts();
  const paths = posts.map(({ id }) => ({ params: { id } }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};

type PostPageParams = ParsedUrlQuery & {
  id: string;
};

export const getStaticProps: GetStaticProps<PostPageProps, PostPageParams> =
  async ({ params }) => {
    const post = await getPost(params?.id as string);

    return {
      props: {
        post,
      },
      revalidate: 10,
    };
  };

export default PostPage;
