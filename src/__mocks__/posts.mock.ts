import IPost from '@/models/IPost.model';
import delay from '@/utils/delay';

const postsMock: IPost[] = [
  {
    id: '1',
    title:
      'Laboris amet proident veniam pariatur tempor non ipsum deserunt enim occaecat ipsum eu.',
    body: 'Culpa commodo deserunt consequat enim mollit reprehenderit sint eu sunt elit anim. Lorem commodo enim nulla cupidatat pariatur qui amet ullamco eiusmod. Ea excepteur est reprehenderit enim sit tempor fugiat duis amet proident. Ex eu occaecat ad ex ex voluptate.',
    language: 'pt-BR',
  },
  {
    id: '2',
    title: 'Incididunt anim cillum culpa est sint do labore ipsum quis.',
    body: 'Culpa commodo deserunt consequat enim mollit reprehenderit sint eu sunt elit anim. Lorem commodo enim nulla cupidatat pariatur qui amet ullamco eiusmod. Ea excepteur est reprehenderit enim sit tempor fugiat duis amet proident. Ex eu occaecat ad ex ex voluptate.',
    language: 'en',
  },
  {
    id: '3',
    title:
      'Lorem eu irure aliqua officia enim proident culpa deserunt commodo ad in magna ea commodo.',
    body: 'Culpa commodo deserunt consequat enim mollit reprehenderit sint eu sunt elit anim. Lorem commodo enim nulla cupidatat pariatur qui amet ullamco eiusmod. Ea excepteur est reprehenderit enim sit tempor fugiat duis amet proident. Ex eu occaecat ad ex ex voluptate.',
    language: 'pt-BR',
  },
  {
    id: '4',
    title: 'Enim laboris ut anim ut ea aute.',
    body: 'Culpa commodo deserunt consequat enim mollit reprehenderit sint eu sunt elit anim. Lorem commodo enim nulla cupidatat pariatur qui amet ullamco eiusmod. Ea excepteur est reprehenderit enim sit tempor fugiat duis amet proident. Ex eu occaecat ad ex ex voluptate.',
    language: 'en',
  },
  {
    id: '5',
    title:
      'Est eiusmod fugiat consequat est occaecat Lorem ex consectetur sit sunt nisi.',
    body: 'Tempor nisi sint sint enim deserunt eu dolor. Excepteur laborum et nulla amet consequat reprehenderit in nulla nulla Lorem. Voluptate consequat magna occaecat elit consectetur esse id tempor nostrud. Ex dolore irure est est fugiat. Ipsum minim enim cillum adipisicing elit nulla esse voluptate esse excepteur laborum anim nisi.',
    language: 'pt-BR',
  },
  {
    id: '6',
    title: 'Mollit fugiat pariatur ex id nulla laboris velit do dolore.',
    body: 'Amet est elit aute elit irure reprehenderit magna esse incididunt Lorem deserunt quis occaecat. Aliquip aliquip pariatur amet mollit sit occaecat incididunt do reprehenderit. Nulla et mollit laborum enim velit magna consequat. Laborum do enim incididunt amet labore mollit cupidatat ea.',
    language: 'en',
  },
];

export const getPosts = async (language?: string) => {
  await delay(2000);

  if (language) return postsMock.filter(post => post.language === language);

  return postsMock;
};

export const getFisrtsPosts = async () => {
  await delay(2000);
  return postsMock.filter(({ id }) => parseInt(id) <= 3);
};

export const getPost = async (
  id: string,
  language?: string
): Promise<IPost> => {
  await delay(2000);

  const post = postsMock.filter(post => {
    if (language) return post.id === id && post.language === language;
    post.id === id;
  })[0];

  if (!post) {
    return {
      id,
      title: 'Post sem nome',
      body: 'In qui magna culpa sunt id et velit. Qui laborum tempor fugiat ut voluptate laborum dolor commodo id. Irure commodo aliqua ipsum dolor consequat.',
      language: 'pt-BR',
      updatedAt: new Date().getTime(),
    };
  }

  return { ...post, updatedAt: new Date().getTime() };
};

export default postsMock;
