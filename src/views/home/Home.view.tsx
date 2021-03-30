import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '@/components/layout/Layout.component';

const Title = styled.h1`
  font-size: 24px;
`;

const HomeView: FC = () => (
  <Layout>
    <Link href="/bairros">Bairros</Link>
    <Title>Home View</Title>
  </Layout>
);

export default HomeView;
