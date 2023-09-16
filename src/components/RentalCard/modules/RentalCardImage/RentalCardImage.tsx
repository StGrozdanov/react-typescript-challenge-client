import FallbackImage from '../../../common/FallbackImage/FallbackImage';
import { RentalImageProps } from '../../types/interfaces';
import styles from './RentalCardImage.module.scss';

const RentalCardImage: React.FC<RentalImageProps> = ({ imgURL, altImgURL }: RentalImageProps) => {
    return (
        <div className={styles.imageContainer}>
            <FallbackImage 
                data-testid="rentalCardImage"
                className={styles.image}
                imgURL={imgURL} 
                altImgURL={altImgURL} 
            />
        </div>

    )
}

export default RentalCardImage;