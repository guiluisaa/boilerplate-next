import styled, { css } from 'styled-components';

export type TitleProps = {
  danger?: boolean;
};

const Title = styled.h1<TitleProps>`
  ${({ danger }) => css`
    color: ${danger ? 'red' : '#424242'};
  `}
`;

export default Title;
