import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HomeView from '@/views/home/Home.view';

const Home: NextPage = () => <HomeView />;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ...(await serverSideTranslations(locale!)),
    },
  };
};

export default Home;
