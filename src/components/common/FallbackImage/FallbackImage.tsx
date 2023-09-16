import { RentalImageProps } from "../../RentalCard/types/interfaces";

const FallbackImage: React.FC<RentalImageProps> = ({ imgURL, altImgURL, className }: RentalImageProps) => {
    imgURL = imgURL === null ? '' : imgURL;

    return (
        <img
            data-testid="rentalCardImage"
            className={className}
            src={imgURL}
            onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = altImgURL;
            }}
        />
    );
}

export default FallbackImage;