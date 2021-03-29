import { render, screen } from '@testing-library/react';

import Title from './Title.component';

describe('component | <Title />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Title>Heading</Title>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the heading', () => {
    render(<Title>Heading</Title>);

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument();
  });

  it('should render black text by default', () => {
    const { container } = render(<Title>Heading</Title>);

    expect(container.firstChild).toHaveStyle({ color: '#424242' });
  });

  it('should render red text when danger property is passed', () => {
    const { container } = render(<Title danger>Heading</Title>);

    expect(container.firstChild).toHaveStyle({ color: 'red' });
  });
});
