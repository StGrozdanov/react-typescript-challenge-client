import { Rental } from "../../../types/interfaces";

export interface RentalSearchProps {
  keyword: string
}

export interface RentalSearchResultsProps {
  data: Rental[],
  keyword: string,
}

export interface RentalSearchLocationProps {
  location?: string,
  search?: string,
}