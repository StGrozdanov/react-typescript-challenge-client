import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RentalCardDescription from './RentalCardDescription';

describe('RentalCardDescription Component', () => {
  const rentalName = 'Sample Rental Name';

  beforeEach(() => {
    render(<RentalCardDescription rentalName={rentalName} />);
  });

  test('renders the rental description', () => {
    const descriptionElement = screen.getByTestId('rentalCardDescription');

    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(rentalName);
  });

  test('matches the snapshot', () => {
    const { container } = render(<RentalCardDescription rentalName={rentalName} />);
    expect(container).toMatchSnapshot();
  });
});