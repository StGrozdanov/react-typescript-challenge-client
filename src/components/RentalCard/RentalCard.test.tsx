import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import Jest DOM extensions
import RentalCard from './RentalCard';
import { Rental } from '../../types/interfaces';

describe('RentalCard Component', () => {
    const mockedRental: Rental = {
        id: 342669,
        name: 'Vintage Camper Van 1985 GMC Vandurah',
        imgURL: 'https://res.cloudinary.com/outdoorsy/image/upload/v1644599588/p/rentals/226946/images/exzlo5wgf2yiwfjjo7zi.jpg'
    }

    beforeEach(() => {
        render(<RentalCard data={mockedRental} />);
    });

    test('Renders rental card with image and description', () => {
        const rentalCard = screen.getByTestId('rentalCard');
        const rentalImage = screen.getByTestId('rentalCardImage');
        const rentalDescription = screen.getByTestId('rentalCardDescription');

        // Check if the rental card, image, and description elements are present in the rendered component.
        expect(rentalCard).toBeInTheDocument();
        expect(rentalImage).toBeInTheDocument();
        expect(rentalDescription).toBeInTheDocument();

        // Check if the image has the correct src attribute.
        expect(rentalImage).toHaveAttribute('src', mockedRental.imgURL);

        // Check if the description displays the correct rental name.
        expect(rentalDescription).toHaveTextContent(mockedRental.name);
    });

    test('Matches snapshot', () => {
        const { container } = render(<RentalCard data={mockedRental} />);
        expect(container).toMatchSnapshot();
    });
});