import { render } from '@testing-library/react';
import Banner from './Banner';

it('renders without crashing', () => {
    render(<Banner />);
});

it('matches snapshot', () => {
    const {asFragment} = render(<Banner title="Coin Flip"/>);
    expect(asFragment()).toMatchSnapshot();
})