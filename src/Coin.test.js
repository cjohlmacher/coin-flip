import { render } from '@testing-library/react';
import Coin from './Coin';

it('renders without crashing', () => {
    render(<Coin isHeads={true}/>);
});

it('matches snapshot when heads', () => {
    const {asFragment} = render(<Coin isHeads={true} />);
    expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot when tails', () => {
    const {asFragment} = render(<Coin isHeads={false} />);
    expect(asFragment()).toMatchSnapshot();
});