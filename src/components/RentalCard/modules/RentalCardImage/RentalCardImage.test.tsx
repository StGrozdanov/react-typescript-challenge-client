import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RentalCardImage from './RentalCardImage';
import { RentalImageProps } from '../../types/interfaces';

describe('RentalCardImage Component', () => {
    const mockedImageProps: RentalImageProps = {
        imgURL: 'https://example.com/image.jpg',
        altImgURL: 'https://example.com/alt-image.jpg',
    };

    beforeEach(() => {
        render(<RentalCardImage {...mockedImageProps} />);
    });

    test('Renders rental card image with correct attributes', () => {
        const rentalCardImage = screen.getByTestId('rentalCardImage');

        expect(rentalCardImage).toBeInTheDocument();

        expect(rentalCardImage).toHaveAttribute('src', mockedImageProps.imgURL);

        expect(rentalCardImage).toHaveClass('image');

        const imageContainer = rentalCardImage.parentElement;
        expect(imageContainer).toHaveClass('imageContainer');
    });
});