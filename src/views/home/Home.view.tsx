import { FC } from 'react';
import styled from 'styled-components';

import Layout from '@/components/layout/Layout.component';

const Title = styled.h1`
  font-size: 24px;
`;

const HomeView: FC = () => (
  <Layout>
    <Title>Home View</Title>
  </Layout>
);

export default HomeView;
