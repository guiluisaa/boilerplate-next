import { FC } from 'react';
import Link from 'next/link';

import Post from '@/models/IPost.model';

type PostsViewProps = {
  posts: Post[];
};

const PostsView: FC<PostsViewProps> = ({ posts }) => (
  <>
    <p>
      <Link href="/">Home</Link>
    </p>

    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            {`${post.language}: ${post.title}`}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default PostsView;
