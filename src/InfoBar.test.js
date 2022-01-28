import { render } from '@testing-library/react';
import InfoBar from './InfoBar';

it('renders without crashing', () => {
    render(<InfoBar />);
});

it('matches snapsnot', () => {
    const {asFragment} = render(<InfoBar count={{heads: 3, tails: 3}} />);
    expect(asFragment()).toMatchSnapshot();
});