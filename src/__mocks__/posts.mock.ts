import IPost from '@/models/IPost.model';
import delay from '@/utils/delay';

const postsMock: IPost[] = [
  {
    id: '1',
    title:
      'Laboris amet proident veniam pariatur tempor non ipsum deserunt enim occaecat ipsum eu.',
    body: 'Culpa commodo deserunt consequat enim mollit reprehenderit sint eu sunt elit anim. Lorem commodo enim nulla cupidatat pariatur qui amet ullamco eiusmod. Ea excepteur est reprehenderit enim sit tempor fugiat duis amet proident. Ex eu occaecat ad ex ex voluptate.',
  },
  {
    id: '2',
    title: 'Incididunt anim cillum culpa est sint do labore ipsum quis.',
    body: 'Culpa commodo deserunt consequat enim mollit reprehenderit sint eu sunt elit anim. Lorem commodo enim nulla cupidatat pariatur qui amet ullamco eiusmod. Ea excepteur est reprehenderit enim sit tempor fugiat duis amet proident. Ex eu occaecat ad ex ex voluptate.',
  },
  {
    id: '3',
    title:
      'Lorem eu irure aliqua officia enim proident culpa deserunt commodo ad in magna ea commodo.',
    body: 'Culpa commodo deserunt consequat enim mollit reprehenderit sint eu sunt elit anim. Lorem commodo enim nulla cupidatat pariatur qui amet ullamco eiusmod. Ea excepteur est reprehenderit enim sit tempor fugiat duis amet proident. Ex eu occaecat ad ex ex voluptate.',
  },
  {
    id: '4',
    title: 'Enim laboris ut anim ut ea aute.',
    body: 'Culpa commodo deserunt consequat enim mollit reprehenderit sint eu sunt elit anim. Lorem commodo enim nulla cupidatat pariatur qui amet ullamco eiusmod. Ea excepteur est reprehenderit enim sit tempor fugiat duis amet proident. Ex eu occaecat ad ex ex voluptate.',
  },
  {
    id: '5',
    title: 'Occaecat aute Lorem esse cillum.',
    body: 'Culpa commodo deserunt consequat enim mollit reprehenderit sint eu sunt elit anim. Lorem commodo enim nulla cupidatat pariatur qui amet ullamco eiusmod. Ea excepteur est reprehenderit enim sit tempor fugiat duis amet proident. Ex eu occaecat ad ex ex voluptate.',
  },
];

export const getPosts = async () => {
  await delay(2000);
  return postsMock;
};

export const getFisrtsPosts = async () => {
  await delay(2000);
  return postsMock.filter(({ id }) => parseInt(id) <= 3);
};

export const getPost = async (id: string): Promise<IPost> => {
  await delay(2000);
  const post = postsMock.filter(post => post.id === id)[0];

  if (!post) {
    return {
      id,
      title: 'Post sem nome',
      body: 'In qui magna culpa sunt id et velit. Qui laborum tempor fugiat ut voluptate laborum dolor commodo id. Irure commodo aliqua ipsum dolor consequat.',
      updatedAt: new Date().getTime(),
    };
  }

  return { ...post, updatedAt: new Date().getTime() };
};

export default postsMock;
