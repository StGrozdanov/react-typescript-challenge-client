import { RentalDescriptionProps } from "../../types/interfaces";
import styles from "./RentalCardDescription.module.scss"

const RentalCardDescription: React.FC<RentalDescriptionProps> = ({ rentalName }: RentalDescriptionProps) => {
    return (
        <p data-testid="rentalCardDescription" className={styles.description}>
            {rentalName}
        </p>
    )
}

export default RentalCardDescription;