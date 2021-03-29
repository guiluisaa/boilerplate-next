import { render, screen } from '@testing-library/react';

import HomeView from './Home.view';

describe('view | <HomeView />', () => {
  it('should match snapshot', () => {
    const { container } = render(<HomeView />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the heading', () => {
    render(<HomeView />);

    expect(
      screen.getByRole('heading', { name: /home view/i })
    ).toBeInTheDocument();
  });
});
