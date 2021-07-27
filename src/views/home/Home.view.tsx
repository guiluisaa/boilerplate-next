import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

import Layout from '@/components/layout/Layout.component';

const Title = styled.h1`
  font-size: 24px;
`;

const HomeView: FC = () => {
  const { t } = useTranslation('homepage');

  return (
    <Layout>
      <Link href="/posts">Posts</Link>

      <Title>{t('title')}</Title>

      <Link href="/" locale="pt-BR">
        Português do Brasil
      </Link>

      <br />
      <Link href="/" locale="en">
        Enlish
      </Link>
    </Layout>
  );
};

export default HomeView;
