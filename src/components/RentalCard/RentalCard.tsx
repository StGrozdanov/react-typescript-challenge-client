import styles from './RentalCard.module.scss'
import RentalCardImage from './modules/RentalCardImage/RentalCardImage'
import RentalCardDescription from './modules/RentalCardDescription/RentalCardDescription'
import { RentalDataProps } from './types/interfaces'

const RentalCard: React.FC<RentalDataProps> = ({ data }: RentalDataProps) => {
    return (
        <div data-testid="rentalCard" className={styles.rentalCard}>
            <RentalCardImage
                imgURL={data.imgURL}
                altImgURL="https://getlogovector.com/wp-content/uploads/2020/10/outdoorsy-inc-logo-vector.png"
            />
            <RentalCardDescription rentalName={data.name} />
        </div>
    )
}

export default RentalCard;