import { FC } from 'react';
import styled from 'styled-components';

import GlobalStyle from '@/shared-styles/GlobalStyle';

const Wrapper = styled.div`
  background-color: transparent;
`;

const Layout: FC = ({ children }) => (
  <>
    <GlobalStyle />

    <Wrapper>{children}</Wrapper>
  </>
);

export default Layout;
