import RentalCard from "../../../RentalCard/RentalCard";
import RentalSearchNoResults from "./modules/RentalSearchNoResults/RentalSearchNoResults";
import { RentalSearchResultsProps } from "../../types/interfaces";

const RentalSearchResults: React.FC<RentalSearchResultsProps> = ({ data, keyword }) => {
    return (
        <>
            {
                data.length > 0
                    ? data.map((rental) => {
                        return (
                            <RentalCard key={rental.id} data={rental} />
                        )
                    })
                    : <RentalSearchNoResults keyword={keyword} />
            }

        </>
    );
}

export default RentalSearchResults;