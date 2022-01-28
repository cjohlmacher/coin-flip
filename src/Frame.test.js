import { fireEvent, render } from '@testing-library/react';
import Frame from './Frame';

beforeEach(function() {
    jest
        .spyOn(Math, "random")
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.75);
});
  
afterEach(function() {
    Math.random.mockRestore();
});


it('renders without crashing', () => {
    render(<Frame />);
});

it('matches snapshot', () => {
    const {asFragment} = render(<Frame />);
    expect(asFragment()).toMatchSnapshot();
});

it('changes image on coin side flip', () => {
    const { getByAltText, getByRole } = render(<Frame />);
    const image = getByAltText('coin-heads');
    const flipButton = getByRole('button',{name: 'Flip the coin!'});
    fireEvent.click(flipButton);
    expect(image).toHaveAttribute('alt','coin-tails');
    fireEvent.click(flipButton);
    expect(image).toHaveAttribute('alt','coin-heads');
});

it('increments count on flip', () => {
    const { getByRole, getByText } = render(<Frame />);
    const flipButton = getByRole('button',{name: 'Flip the coin!'});
    const headsCount = getByText('Heads: 0');
    const tailsCount = getByText('Tails: 0');
    fireEvent.click(flipButton);
    expect(tailsCount).toHaveTextContent('Tails: 1');
    fireEvent.click(flipButton);
    expect(headsCount).toHaveTextContent('Heads: 1');
});