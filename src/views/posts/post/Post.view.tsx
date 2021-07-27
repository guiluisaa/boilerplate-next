import { FC } from 'react';
import Link from 'next/link';

import Post from '@/models/IPost.model';

type PostViewProps = {
  post: Post;
};

const PostView: FC<PostViewProps> = ({ post }) => (
  <div>
    <p>
      <Link href="/">Home</Link> <Link href="/posts">Back</Link>
    </p>

    <p>{post.id}</p>
    {post.updatedAt && <p>{post.updatedAt}</p>}
    <br />
    <br />
    <p>{post.title}</p>
    <br />
    <br />
    <p>{post.body}</p>
  </div>
);

export default PostView;
