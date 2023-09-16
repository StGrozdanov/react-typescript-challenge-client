import { Rental } from "../../../types/interfaces"

export interface RentalDataProps {
    data: Rental
}

export interface RentalDescriptionProps {
    rentalName: string
}

export interface RentalImageProps {
    imgURL: string,
    altImgURL: string,
    className?: string,
}